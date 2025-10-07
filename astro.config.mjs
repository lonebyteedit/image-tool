// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
    integrations: [solidJs()],
    devToolbar: {
        enabled: false
    },
    build: {
        inlineStylesheets: 'always'
    },
    vite: {
        cacheDir: './node_modules/.vite',
        /** @type {any} */
        plugins: ([
            vanillaExtractPlugin(),
            Icons({ compiler: 'solid', scale: 1 })
        ]),
        build: {
        },
        worker: {
            format: 'es',
        },
        optimizeDeps: {
            exclude: [
                '@jsquash/jpeg',
                '@jsquash/png',
                '@jsquash/webp',
                '@jsquash/resize',
                '@jsquash/oxipng',
                '@jsquash/avif',
            ],
        },
        server: {
            hmr: true,
            headers: {
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp',
            },
        },
        preview: {
            headers: {
                'Cross-origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp',
            },
        }
    }
});