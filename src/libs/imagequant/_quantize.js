import { defaultOptions } from './meta';
import ImageQuantModuleFactory from './codec/imagequant';
let modulePromise;
async function getModule() {
    if (modulePromise) {
        return modulePromise;
    }
    modulePromise = new Promise(async (resolve, reject) => {
        try {
            console.log('Initializing imagequant WASM module...');
            const module = await ImageQuantModuleFactory({
                locateFile: (path) => {
                    return new URL(`./codec/${path}`, import.meta.url).href;
                },
            });
            console.log('imagequant WASM module initialized successfully.');
            resolve(module);
        }
        catch (error) {
            console.error('Failed to initialize imagequant WASM module:', error);
            modulePromise = undefined;
            reject(error);
        }
    });
    return modulePromise;
}
export default async function quantize(data, options = {}) {
    const module = await getModule();
    const _options = { ...defaultOptions, ...options };
    const result = module.quantize(data.data, data.width, data.height, _options.maxNumColors, _options.dither);
    return new ImageData(result, data.width, data.height);
}
