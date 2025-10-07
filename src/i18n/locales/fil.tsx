import type { Translation } from './en.tsx';

const fil: Translation = {
    static: {
        index_lang: 'fil',
        index_dir: 'ltr',
        index_title: "Image Tool - Advanced na Image Conversion Tool",
        index_description: "Isang libre at propesyonal na online tool para sa image compression, pagbabago ng laki, at pag-convert ng format. Sinusuportahan nito ang pag-convert sa pagitan ng JPG, PNG, WebP, at AVIF, at kayang i-convert ang HEIC sa mga format na ito. Lahat ng proseso ay ginagawa mismo sa iyong browser—hindi kailanman ina-upload ang iyong mga file, na tinitiyak ang kumpletong privacy at seguridad ng iyong data.",
        optionsExplanation: {
            title: "Gabay sa mga Opsyon",
            subtitle: "Unawain ang gamit at paano paganahin ang bawat opsyon para ma-optimize ang resulta ng iyong image conversion.",
            options: [
                {
                    id: "quality-option",
                    title: "Kalidad ng Compression",
                    description: <>
                        <p>Ang opsyong ito ay para lamang sa target format na <strong>JPG</strong>, <strong>WebP (May Bawas)</strong>, o <strong>AVIF (May Bawas)</strong>.</p>
                        <p>Kapag mas mababa ang halaga, mas maliit ang file, ngunit nababawasan ang kalidad ng imahe. Ang inirerekomendang halaga na <strong>75</strong> ay nagbibigay ng magandang balanse sa pagitan ng laki ng file at kalidad.</p>
                        <p>Kung masyado pa ring malaki ang file pagkatapos ng compression, subukang bawasan ang resolution, na kadalasan ay mas epektibo sa pagpapaliit ng file.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Pagsasaayos ng Resolution",
                    description: <>
                        <p>Bawasan ang resolution ng imahe ayon sa porsyento habang pinapanatili ang orihinal na aspect ratio. Ang <strong>100%</strong> ay nangangahulugang mananatili ang orihinal na sukat.</p>
                        <p>Ang pagbabawas ng resolution ay maaaring <strong>makabawas nang malaki</strong> sa laki ng file. Kung hindi mo kailangan ang mataas na resolution ng orihinal, ito ang <strong>pinaka-epektibong paraan</strong> para mapaliit ang file.</p>
                        <p>Kung pareho ang ibang mga opsyon at base sa <strong>100% resolution</strong>: ang pag-adjust sa <strong>75% resolution</strong> ay nagbabawas ng laki ng file ng humigit-kumulang <strong>30%</strong>; ang pag-adjust sa <strong>50% resolution</strong> ay nagbabawas nito ng humigit-kumulang <strong>65%</strong>; at ang pag-adjust sa <strong>25% resolution</strong> ay nagbabawas nito ng humigit-kumulang <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Output Format",
                    description: <>
                        <p>Piliin ang output format para sa imahe. Ang iba't ibang format ay may sariling mga kalamangan at gamit.</p>
                        <p><strong>Awtomatikong Compression</strong>: Ang opsyong ito ay awtomatikong gumagamit ng angkop na paraan ng compression batay sa format ng input:</p>
                        <ul>
                            <li>Ang mga <strong>JPG</strong> input ay kino-compress bilang <strong>JPG</strong>.</li>
                            <li>Ang mga <strong>PNG</strong> input ay kino-compress gamit ang <strong>PNG (May Bawas)</strong> na paraan.</li>
                            <li>Ang mga <strong>WebP</strong> input ay kino-compress gamit ang <strong>WebP (May Bawas)</strong> na paraan.</li>
                            <li>Ang mga <strong>AVIF</strong> input ay kino-compress gamit ang <strong>AVIF (May Bawas)</strong> na paraan.</li>
                            <li>Ang mga <strong>HEIC</strong> input ay kino-convert sa <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Maaari ka ring manu-manong pumili ng format sa ibaba batay sa iyong mga partikular na pangangailangan. Narito ang isang detalyadong gabay para sa bawat opsyon:
                        </p>

                        <p>
                            <strong>JPG</strong>: Ang pinakasikat na format ng imahe, bagaman hindi ito sumusuporta sa transparency. Kung ikukumpara sa isang <strong>uncompressed na PNG</strong>, kaya nitong bawasan ang laki ng file ng humigit-kumulang <strong>90%</strong>. Sa quality setting na <strong>75</strong>, ang bawas sa kalidad ay <strong>halos hindi napapansin</strong>. Kung hindi mo kailangan ng transparent na background <strong>(na totoo para sa karamihan ng mga litrato)</strong>, ang pag-convert sa <strong>JPG</strong> ay karaniwang ang pinakamahusay na pagpipilian.
                        </p>

                        <p>
                            <strong>PNG (May Bawas)</strong>: Sumusuporta sa transparency na may kaunting bawas sa kalidad, na nagpapababa ng laki ng file ng humigit-kumulang <strong>70%</strong> kumpara sa isang <strong>uncompressed na PNG</strong>. Piliin lang ito kung kailangan mo ng transparent na background sa PNG format. Kung hindi, ang <strong>JPG</strong> ay nag-aalok ng <strong>mas magandang kalidad sa mas maliit na sukat</strong> (nang walang transparency), at ang <strong>WebP (May Bawas)</strong> ay nagbibigay ng <strong>mas magandang kalidad, mas maliit na sukat, at transparency</strong>, na ginagawa itong mas mahusay na alternatibo kung hindi striktong kailangan ang PNG format.
                        </p>

                        <p>
                            <strong>PNG (Walang Bawas)</strong>: Sumusuporta sa transparency nang walang bawas sa kalidad. Binabawasan nito ang laki ng file ng humigit-kumulang <strong>20%</strong> kumpara sa isang <strong>uncompressed na PNG</strong>. Gayunpaman, <strong>kung hindi striktong kailangan ang PNG format</strong>, mas magandang pagpipilian ang <strong>WebP (Walang Bawas)</strong> dahil nag-aalok ito ng mas maliliit na file.
                        </p>

                        <p>
                            <strong>WebP (May Bawas)</strong>: Sumusuporta sa transparency na may bahagyang bawas sa kalidad. Binabawasan nito ang laki ng file ng humigit-kumulang <strong>90%</strong> kumpara sa isang <strong>uncompressed na PNG</strong>. Ito ay isang mahusay na kapalit para sa <strong>PNG (May Bawas)</strong>, na nag-aalok ng mas magandang kalidad at mas maliliit na sukat. Tandaan: Ang WebP ay hindi suportado sa ilang mas lumang device.
                        </p>

                        <p>
                            <strong>WebP (Walang Bawas)</strong>: Sumusuporta sa transparency nang walang bawas sa kalidad. Binabawasan nito ang laki ng file ng humigit-kumulang <strong>50%</strong> kumpara sa isang <strong>uncompressed na PNG</strong>, na ginagawa itong mas mahusay na kapalit para sa <strong>PNG (Walang Bawas)</strong>. Tandaan: Ang WebP ay hindi suportado sa ilang mas lumang device.
                        </p>

                        <p>
                            <strong>AVIF (May Bawas)</strong>: Sumusuporta sa transparency na may bahagyang bawas sa kalidad. Bilang kahalili ng WebP, nag-aalok ito ng mas mataas na compression rate, na nagpapababa ng laki ng file ng humigit-kumulang <strong>94%</strong> kumpara sa <strong>uncompressed na PNG</strong>. Bilang isang makabagong format, ang AVIF ay nagbibigay ng mahusay na kalidad sa napakaliit na laki ng file. Gayunpaman, limitado pa rin ang compatibility nito sa mga browser at device. Ang format na ito ay pinakamainam para sa mga advanced na user o kapag sigurado kang sinusuportahan ito ng mga target na device.
                        </p>
                        <p>
                            <strong>AVIF (Walang Bawas)</strong>: Sumusuporta sa transparency nang walang bawas sa kalidad. Kung ikukumpara sa isang <strong>uncompressed na PNG</strong>, hindi gaanong makabuluhan ang pagbawas sa laki ng file, at sa ilang mga kaso, maaari pa itong tumaas. Maliban kung mayroon kang partikular na pangangailangan para sa lossless AVIF, ang <strong>PNG (Walang Bawas)</strong> o <strong>WebP (Walang Bawas)</strong> ay karaniwang mas mahusay na mga opsyon.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Baguhin ang Tema"
    },
    interactive: {
        store_imageDeletedNotification: "Tinanggal: {fileName}",
        store_convertingImagesNotification: "Kino-convert ang {number} na imahe...",
        store_conversionFailedNotification: "Nabigo ang conversion: {fileName}",
        store_unsupportedFileTypeNotification: "Hindi suportadong format, tinanggal: {fileName}",
        store_fileReadErrorNotification: "Hindi mabasa ang file, tinanggal: {fileName}",
        store_reconvertingNotification: "Muling kino-convert: {fileName}",
        store_formatOptionAuto: "Awtomatikong Compression",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (May Bawas)",
        store_formatOptionPngLossless: "PNG (Walang Bawas)",
        store_formatOptionWebpLossy: "WebP (May Bawas)",
        store_formatOptionWebpLossless: "WebP (Walang Bawas)",
        store_formatOptionAvifLossy: "AVIF (May Bawas)",
        store_formatOptionAvifLossless: "AVIF (Walang Bawas)",
        previewSection_title: "Silipin at I-download",
        previewSection_downloadAllButton: "I-download Lahat",
        previewSection_deleteAllButton: "Tanggalin Lahat",
        previewSection_placeholder: "Wala pang mga imahe.",
        previewSection_statusPending: "Naghihintay",
        previewSection_statusConverting: "Kino-convert...",
        previewSection_statusFailed: "Nabigo. Paki-refresh ang page at subukang muli.",
        previewSection_statusCompleted: "Kumpleto",
        previewSection_noCompletedFilesNotification: "Walang kumpletong imahe na maaaring i-download.",
        previewSection_downloadStartedNotification: "Sinisimulan ang pag-download ng {fileCount} na file...",
        previewSection_listEmptyNotification: "Walang laman ang listahan.",
        previewSection_allDeletedNotification: "Natanggal na ang lahat ng imahe.",
        previewSection_zipCreationNotification: "Ginagawa ang ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Ginagawa ang ZIP: May mga imaheng hindi kumpleto, at lalaktawan ang mga ito.",
        previewSection_zipCreationErrorNotification: "Nagkaroon ng error habang ginagawa ang ZIP.",
        previewSection_waitConversionNotification: "Mangyaring maghintay hanggang matapos ang conversion.",
        previewSection_downloadingFileNotification: "Dina-download: {fileName}",
        previewSection_originalSizeLabel: "Orihinal na laki:",
        previewSection_convertedSizeLabel: "Bagong Laki:",
        previewSection_downloadTitle: "I-download",
        previewSection_previewTitle: "Silipin",
        previewSection_deleteTitle: "Tanggalin",
        previewSection_comparisonTab: "Paghambingin",
        previewSection_settingsTab: "Mga Setting",
        previewSection_originalImageLabel: "Orihinal na Imahe",
        previewSection_completedImageLabel: "Na-convert na Imahe",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Resolution:",
        previewSection_viewLargerButton: "Tingnan sa Bagong Tab",
        previewSection_qualityLabel: "Kalidad ng Compression",
        previewSection_sizeLabel: "Pagsasaayos ng Resolution",
        previewSection_outputFormatLabel: "Output Format",
        previewSection_reconvertButton: "I-convert Ulit ang Imahe",
        globalControls_qualityLabel: "Pangkalahatang Kalidad ng Compression",
        globalControls_sizeLabel: "Pangkalahatang Pagsasaayos ng Resolution",
        globalControls_formatLabel: "Pangkalahatang Output Format",
        globalControls_reconvertAllButton: "Ilapat at I-convert Ulit Lahat",
        globalControls_restoreDefaultsButton: "Ibalik sa Default",
        globalControls_noImagesNotification: "Mangyaring magdagdag muna ng mga imahe.",
        globalControls_reconvertingAllNotification: "Muling kino-convert ang lahat ng {imageCount} na imahe gamit ang pangkalahatang mga setting",
        globalControls_restoredNotification: "Naibalik na sa default ang mga opsyon.",
        addSection_title: "Magdagdag ng mga Imahe",
        addArea_dragDropTitle: "I-drag at i-drop ang mga imahe dito",
        addArea_supportedFormats: "Sinusuportahan ang JPG, PNG, WebP, AVIF, at HEIC",
        addArea_selectButton: "Pumili ng mga Imahe",
        addArea_tips: "*Maaaring magdagdag ng maraming imahe nang sabay-sabay",
        ui_viewExplanationTitle: "Alamin ang tungkol sa mga opsyong ito",
    }
};

export default fil;