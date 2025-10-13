import type { Translation } from './en.tsx';

const es: Translation = {
    static: {
        index_lang: 'es',
        index_dir: 'ltr',
        index_title: "Image Tool - Herramienta avanzada de conversión de imágenes",
        index_description: "Una herramienta online, profesional y gratuita para la compresión y el redimensionamiento de imágenes. Soporta la conversión mutua entre JPG, PNG, WebP y AVIF, y además convierte el formato HEIC a estos formatos. Todo el procesamiento se realiza localmente en tu navegador — tus archivos nunca se suben a ningún servidor, garantizando la total privacidad y seguridad de tus datos.",
        optionsExplanation: {
            title: "Guía de opciones",
            subtitle: "Entiende el funcionamiento y uso de cada opción para optimizar los resultados de la conversión de tus imágenes.",
            options: [
                {
                    id: "quality-option",
                    title: "Calidad de compresión",
                    description: <>
                        <p>Esta opción solo se aplica cuando el formato de destino es <strong>JPG</strong>, <strong>WebP (con pérdida)</strong> o <strong>AVIF (con pérdida)</strong>.</p>
                        <p>Un valor más bajo crea un archivo más pequeño, pero reduce la calidad de la imagen. El valor recomendado de <strong>75</strong> ofrece un buen equilibrio entre el tamaño del archivo y la calidad.</p>
                        <p>Si el archivo sigue siendo demasiado grande después de la compresión, prueba a reducir la resolución, que suele ser más eficaz para reducir el tamaño del archivo.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ajuste de resolución",
                    description: <>
                        <p>Reduce la resolución de la imagen en un porcentaje manteniendo la relación de aspecto original. <strong>100%</strong> conserva las dimensiones originales.</p>
                        <p>Reducir la resolución puede disminuir <strong>significativamente</strong> el tamaño del archivo. Si no necesitas la alta resolución original, esta suele ser la <strong>forma más eficaz</strong> de hacer el archivo más pequeño.</p>
                        <p>Con las demás opciones iguales, y basándose en una <strong>resolución del 100%</strong>: ajustarla al <strong>75%</strong> reduce el tamaño del archivo una media de un <strong>30%</strong>; ajustarla al <strong>50%</strong> lo reduce una media de un <strong>65%</strong>; y ajustarla al <strong>25%</strong> lo reduce una media de un <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formato de salida",
                    description: <>
                        <p>Elige el formato de salida para la imagen. Cada formato tiene sus propias ventajas y casos de uso.</p>
                        <p><strong>Compresión automática</strong>: Esta opción aplica una estrategia de compresión adecuada según el formato de entrada:</p>
                        <ul>
                            <li>Las imágenes <strong>JPG</strong> de entrada se comprimen como <strong>JPG</strong>.</li>
                            <li>Las imágenes <strong>PNG</strong> de entrada se comprimen usando el método <strong>PNG (con pérdida)</strong>.</li>
                            <li>Las imágenes <strong>WebP</strong> de entrada se comprimen usando el método <strong>WebP (con pérdida)</strong>.</li>
                            <li>Las imágenes <strong>AVIF</strong> de entrada se comprimen usando el método <strong>AVIF (con pérdida)</strong>.</li>
                            <li>Las imágenes <strong>HEIC</strong> de entrada se convierten a <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            También puedes seleccionar manualmente un formato a continuación según tus necesidades. Aquí tienes una guía detallada de cada opción:
                        </p>

                        <p>
                            <strong>JPG</strong>: El formato de imagen más popular, aunque no admite transparencias. En comparación con un <strong>PNG sin comprimir</strong>, puede reducir el tamaño del archivo una media de un <strong>90%</strong>. Con un ajuste de calidad de <strong>75</strong>, la pérdida de calidad es a menudo <strong>imperceptible</strong>. Si no necesitas un fondo transparente <strong>(lo que ocurre en la mayoría de las fotos)</strong>, convertir a <strong>JPG</strong> suele ser la mejor opción.
                        </p>

                        <p>
                            <strong>PNG (con pérdida)</strong>: Admite transparencias con cierta pérdida de calidad, reduciendo el tamaño del archivo una media de un <strong>70%</strong> en comparación con un <strong>PNG sin comprimir</strong>. Elígelo solo si necesitas un fondo transparente en formato PNG. De lo contrario, <strong>JPG</strong> ofrece <strong>mejor calidad con un tamaño menor</strong> (sin transparencias), y <strong>WebP (con pérdida)</strong> proporciona <strong>mejor calidad, menor tamaño y transparencias</strong>, lo que lo convierte en una alternativa superior si el formato PNG no es un requisito estricto.
                        </p>

                        <p>
                            <strong>PNG (sin pérdida)</strong>: Admite transparencias sin pérdida de calidad. Reduce el tamaño del archivo una media de un <strong>20%</strong> en comparación con un <strong>PNG sin comprimir</strong>. Sin embargo, <strong>si el formato PNG no es un requisito estricto</strong>, <strong>WebP (sin pérdida)</strong> es una mejor opción, ya que ofrece tamaños de archivo más pequeños.
                        </p>

                        <p>
                            <strong>WebP (con pérdida)</strong>: Admite transparencias con una ligera pérdida de calidad. Reduce el tamaño del archivo una media de un <strong>90%</strong> en comparación con un <strong>PNG sin comprimir</strong>. Es un excelente sustituto para <strong>PNG (con pérdida)</strong>, ofreciendo mejor calidad y tamaños más pequeños. Nota: WebP no es compatible con algunos dispositivos antiguos.
                        </p>

                        <p>
                            <strong>WebP (sin pérdida)</strong>: Admite transparencias sin pérdida de calidad. Reduce el tamaño del archivo una media de un <strong>50%</strong> en comparación con un <strong>PNG sin comprimir</strong>, convirtiéndolo en un sustituto superior a <strong>PNG (sin pérdida)</strong>. Nota: WebP no es compatible con algunos dispositivos antiguos.
                        </p>

                        <p>
                            <strong>AVIF (con pérdida)</strong>: Admite transparencias con una ligera pérdida de calidad. Como sucesor de WebP, ofrece una tasa de compresión aún mayor, reduciendo el tamaño del archivo una media de un <strong>94%</strong> en comparación con un <strong>PNG sin comprimir</strong>. Como formato de vanguardia, AVIF proporciona una calidad excelente con tamaños de archivo muy pequeños. Sin embargo, la compatibilidad con navegadores y dispositivos todavía es limitada. Este formato es ideal para usuarios avanzados o cuando estés seguro de que los dispositivos de destino lo admiten.
                        </p>
                        <p>
                            <strong>AVIF (sin pérdida)</strong>: Admite transparencias sin pérdida de calidad. En comparación con un <strong>PNG sin comprimir</strong>, la reducción del tamaño del archivo no es significativa, y en algunos casos, incluso puede aumentar. A menos que tengas una necesidad específica para AVIF sin pérdida, <strong>PNG (sin pérdida)</strong> o <strong>WebP (sin pérdida)</strong> son generalmente mejores opciones.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Cambiar tema"
    },
    interactive: {
        store_imageDeletedNotification: "Imagen eliminada: {fileName}",
        store_convertingImagesNotification: "Convirtiendo {number} imágenes...",
        store_conversionFailedNotification: "Error en la conversión: {fileName}",
        store_unsupportedFileTypeNotification: "Formato no compatible. Se ha eliminado: {fileName}",
        store_fileReadErrorNotification: "No se pudo leer el archivo. Se ha eliminado: {fileName}",
        store_reconvertingNotification: "Reconvirtiendo: {fileName}",
        store_formatOptionAuto: "Compresión automática",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (con pérdida)",
        store_formatOptionPngLossless: "PNG (sin pérdida)",
        store_formatOptionWebpLossy: "WebP (con pérdida)",
        store_formatOptionWebpLossless: "WebP (sin pérdida)",
        store_formatOptionAvifLossy: "AVIF (con pérdida)",
        store_formatOptionAvifLossless: "AVIF (sin pérdida)",
        previewSection_title: "Vista previa y descarga",
        previewSection_downloadAllButton: "Descargar todo",
        previewSection_deleteAllButton: "Eliminar todo",
        previewSection_placeholder: "Aún no hay imágenes.",
        previewSection_statusPending: "Pendiente",
        previewSection_statusConverting: "Convirtiendo...",
        previewSection_statusFailed: "Error. Por favor, actualiza la página e inténtalo de nuevo.",
        previewSection_statusCompleted: "Completado",
        previewSection_noCompletedFilesNotification: "No hay imágenes completadas para descargar.",
        previewSection_downloadStartedNotification: "Iniciando la descarga de {fileCount} archivos...",
        previewSection_listEmptyNotification: "La lista está vacía.",
        previewSection_allDeletedNotification: "Se han eliminado todas las imágenes.",
        previewSection_zipCreationNotification: "Creando ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Creando ZIP: algunas imágenes no están completas y se omitirán.",
        previewSection_zipCreationErrorNotification: "Se produjo un error al crear el ZIP.",
        previewSection_waitConversionNotification: "Por favor, espera a que termine la conversión.",
        previewSection_downloadingFileNotification: "Descargando: {fileName}",
        previewSection_originalSizeLabel: "Tamaño original:",
        previewSection_convertedSizeLabel: "Tamaño convertido:",
        previewSection_downloadTitle: "Descargar",
        previewSection_previewTitle: "Vista previa",
        previewSection_deleteTitle: "Eliminar",
        previewSection_comparisonTab: "Comparar",
        previewSection_settingsTab: "Ajustes",
        previewSection_originalImageLabel: "Imagen original",
        previewSection_completedImageLabel: "Imagen convertida",
        previewSection_formatLabel: "Formato:",
        previewSection_resolutionLabel: "Resolución:",
        previewSection_viewLargerButton: "Ver en una nueva pestaña",
        previewSection_qualityLabel: "Calidad de compresión",
        previewSection_sizeLabel: "Ajuste de resolución",
        previewSection_outputFormatLabel: "Formato de salida",
        previewSection_reconvertButton: "Reconvertir esta imagen",
        globalControls_qualityLabel: "Calidad de compresión global",
        globalControls_sizeLabel: "Ajuste de resolución global",
        globalControls_formatLabel: "Formato de salida global",
        globalControls_reconvertAllButton: "Aplicar y reconvertir todo",
        globalControls_restoreDefaultsButton: "Restablecer opciones",
        globalControls_noImagesNotification: "Por favor, añade imágenes primero.",
        globalControls_reconvertingAllNotification: "Reconvirtiendo las {imageCount} imágenes con los ajustes globales.",
        globalControls_restoredNotification: "Se han restablecido las opciones a los valores por defecto.",
        addSection_title: "Añadir imágenes",
        addArea_dragDropTitle: "Arrastra y suelta las imágenes aquí",
        addArea_supportedFormats: "Compatible con JPG, PNG, WebP, AVIF y HEIC",
        addArea_selectButton: "Seleccionar imágenes",
        addArea_tips: "*Puedes añadir varias imágenes de una vez.",
        ui_viewExplanationTitle: "Más información sobre estas opciones",
    }
};

export default es;