import type { Translation } from './en.tsx';

const om: Translation = {
    static: {
        index_lang: 'om',
        index_dir: 'ltr',
        index_title: "Image Tool - Meeshaa Jijjiirraa Suuraa Sadarkaa Olaanaa",
        index_description: "Meeshaa toorarraa bilisaa fi ogummaan qophaa'e kan guddina suuraa xiqqeessuuf, guddina isaa sirreessuuf, fi unka isaa jijjiiruuf gargaaru. Unkaawwan akka JPG, PNG, WebP, fi AVIF gidduutti jijjiirraa waliiwayii ni deeggara, akkasumas HEIC gara unkaawwan kanaatti jijjiiruu ni danda'a. Adeemsi hundi birawzarii keessan keessatti raawwatama—faayiloonni keessan gonkumaa hin olfa'aman, kunis iccitii fi nageenya daataa keessanii guutummaatti mirkaneessa.",
        optionsExplanation: {
            title: "Qajeelcha Filannoowwanii",
            subtitle: "Bu'aa jijjiirraa suuraa keessanii fooyyessuuf, hojii fi faayidaa filannoo tokkoon tokkoo hubadhaa.",
            options: [
                {
                    id: "quality-option",
                    title: "Qulqullina Yeroo Guddina Xiqqeessuu",
                    description: <>
                        <p>Filannoon kun yeroo unki xumuraa <strong>JPG</strong>, <strong>WebP (Kan qulqullina hir'isu)</strong>, yookan <strong>AVIF (Kan qulqullina hir'isu)</strong> ta'u qofa hojjeta.</p>
                        <p>Gatiin gadaanaa faayilii xiqqaa uuma, garuu qulqullina suuraa ni hir'isa. Gatiin gorfamu <strong>75</strong> yoo ta'u, madaallii gaarii guddina faayilii fi qulqullina gidduutti uuma.</p>
                        <p>Yoo faayiliin ammas guddaa ta'e, sadarkaa suuraa (resolution) hir'isuu yaalaa, kun yeroo baayyee guddina faayilii xiqqeessuuf filannoo gaariidha.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Sirreessa Sadarkaa Suuraa",
                    description: <>
                        <p>Hanga dhibbeentaan sadarkaa suuraa hir'isaa, unki isaa kan duraa osoo hin jijjiiramin. <strong>100%</strong> sadarkaa jalqabaa eega.</p>
                        <p>Sadarkaa suuraa hir'isuun guddina faayilii <strong>haalaan</strong> xiqqeessuu danda'a. Yoo sadarkaa olaanaa kan jalqabaa isin hin barbaachisne, kun yeroo baayyee guddina faayilii xiqqeessuuf <strong>karaa bu'a qabeessaadha</strong>.</p>
                        <p>Filannoowwan biroo osoo hin jijjiiramin, <strong>sadarkaa 100%</strong> irratti hundaa'uun: sadarkaan suuraa <strong>75%</strong> tti yoo sirraa'e guddina faayilii giddugaleessaan <strong>30%</strong> ni hir'isa; sadarkaan <strong>50%</strong> tti yoo sirraa'e giddugaleessaan <strong>65%</strong> ni hir'isa; sadarkaan <strong>25%</strong> tti yoo sirraa'e immoo giddugaleessaan <strong>88%</strong> ni hir'isa.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Unka Ba'umsaa",
                    description: <>
                        <p>Unka ba'umsaa suuraa keessaniif filadhaa. Unkaawwan adda addaa faayidaa fi itti fayyadama mataa isaanii qabu.</p>
                        <p><strong>Guddina Ofiin Xiqqeessuu</strong>: Filannoon kun akkaataa unka seensaa irratti hundaa'ee tooftaa guddina xiqqeessuu mijaawaa fayyadama:</p>
                        <ul>
                            <li>Suuraawwan <strong>JPG</strong> unka <strong>JPG</strong> tti xiqqeeffamu.</li>
                            <li>Suuraawwan <strong>PNG</strong> tooftaa <strong>PNG (Kan qulqullina hir'isu)</strong> fayyadamuun xiqqeeffamu.</li>
                            <li>Suuraawwan <strong>WebP</strong> tooftaa <strong>WebP (Kan qulqullina hir'isu)</strong> fayyadamuun xiqqeeffamu.</li>
                            <li>Suuraawwan <strong>AVIF</strong> tooftaa <strong>AVIF (Kan qulqullina hir'isu)</strong> fayyadamuun xiqqeeffamu.</li>
                            <li>Suuraawwan <strong>HEIC</strong> gara <strong>JPG</strong> tti jijjiiramu.</li>
                        </ul>

                        <p>
                            Akka barbaachisummaa keessaniitti unkaawwan armaan gadii keessaa filachuu dandeessu. Kunis ibsa bal'aa filannoo tokkoon tokkooti:
                        </p>

                        <p>
                            <strong>JPG</strong>: Unka suuraa baayyee beekamaa ta'us, iftoomina (transparency) hin deeggaru. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, guddina faayilii giddugaleessaan <strong>90%</strong> ni xiqqeessa. Sadarkaa qulqullinaa <strong>75</strong> irratti, hir'inni qulqullinaa <strong>callisaan hubatamuun ni ulfaata</strong>. Yoo iftoomina isin hin barbaachisne <strong>(kunis suuraawwan hedduuf dhugaadha)</strong>, gara <strong>JPG</strong> tti jijjiiruun filannoo isa gaariidha.
                        </p>

                        <p>
                            <strong>PNG (Kan qulqullina hir'isu)</strong>: Iftoomina kan deeggaru yoo ta'u, qulqullina xiqqoo ni hir'isa. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, guddina faayilii giddugaleessaan <strong>70%</strong> ni xiqqeessa. Filannoo kana kan fayyadamtan yoo iftoomina unka PNG keessatti eeguu barbaaddan qofadha. Yoo kana hin taane, <strong>JPG</strong> n <strong>qulqullina gaarii fi guddina xiqqaa</strong> (iftoomina malee) qaba, <strong>WebP (Kan qulqullina hir'isu)</strong> immoo <strong>qulqullina caalu, guddina xiqqaa, fi iftoomina</strong> waan qabuuf, yoo unki PNG dirqama hin taane, filannoo gaariidha.
                        </p>

                        <p>
                            <strong>PNG (Kan qulqullina hin hir'isne)</strong>: Iftoomina kan deeggaru yoo ta'u, qulqullina hin hir'isu. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, guddina faayilii giddugaleessaan <strong>20%</strong> ni xiqqeessa. Haa ta'u malee, <strong>yoo unki PNG dirqama hin taane</strong>, <strong>WebP (Kan qulqullina hin hir'isne)</strong> filannoo wayyaadha, sababni isaas faayiloota guddina xiqqaa qaban uuma.
                        </p>

                        <p>
                            <strong>WebP (Kan qulqullina hir'isu)</strong>: Iftoomina kan deeggaru yoo ta'u, qulqullina xiqqoo ni hir'isa. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, guddina faayilii giddugaleessaan <strong>90%</strong> ni xiqqeessa. Kun <strong>PNG (Kan qulqullina hir'isu)</strong> f bakka bu'aa gaariidha, sababni isaas qulqullina gaarii fi guddina xiqqaa qaba. Hubachiisa: WebP meeshaalee durii tokko tokko irratti hin hojjetu.
                        </p>

                        <p>
                            <strong>WebP (Kan qulqullina hin hir'isne)</strong>: Iftoomina kan deeggaru yoo ta'u, qulqullina hin hir'isu. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, guddina faayilii giddugaleessaan <strong>50%</strong> ni xiqqeessa, kunis <strong>PNG (Kan qulqullina hin hir'isne)</strong> f bakka bu'aa gaarii isa taasisa. Hubachiisa: WebP meeshaalee durii tokko tokko irratti hin hojjetu.
                        </p>

                        <p>
                            <strong>AVIF (Kan qulqullina hir'isu)</strong>: Iftoomina kan deeggaru yoo ta'u, qulqullina xiqqoo ni hir'isa. WebP kan bakka bu'u waan ta'eef, sadarkaa guddina xiqqeessuu olaanaa qaba. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, guddina faayilii giddugaleessaan <strong>94%</strong> ni xiqqeessa. Unki ammayyaa kun qulqullina olaanaa guddina faayilii baayyee xiqqaa keessatti kenna. Haa ta'u malee, birawzariiwwan fi meeshaaleen deeggaran ammayyuu muraasadha. Unki kun fayyadamtoota muuxannoo qabaniif yookan meeshaaleen xumuraa akka deeggaran yoo mirkaneeffattan filatamaadha.
                        </p>
                        <p>
                            <strong>AVIF (Kan qulqullina hin hir'isne)</strong>: Iftoomina kan deeggaru yoo ta'u, qulqullina hin hir'isu. <strong>PNG kan hin xiqqeeffamin</strong> wajjin yoo walbira qabamu, hir'inni guddina faayilii baayyee xiqqoodha, yeroo tokko tokko immoo dabaluu danda'a. Yoo barbaachisummaa addaa hin qabaanne, <strong>PNG (Kan qulqullina hin hir'isne)</strong> yookan <strong>WebP (Kan qulqullina hin hir'isne)</strong> filannoowwan wayyaadha.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Bifa Jijjiiri"
    },
    interactive: {
        store_imageDeletedNotification: "Haqameera: {fileName}",
        store_convertingImagesNotification: "Suuraawwan {number} jijjiiramaa jiru...",
        store_conversionFailedNotification: "Jijjiirraan milkaa'uu dide: {fileName}",
        store_unsupportedFileTypeNotification: "Unki hin deeggaramu, haqameera: {fileName}",
        store_fileReadErrorNotification: "Faayilii dubbisuun hin danda'amne, haqameera: {fileName}",
        store_reconvertingNotification: "Irra deebi'amee jijjiiramaa jira: {fileName}",
        store_formatOptionAuto: "Guddina Ofiin Xiqqeessuu",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Kan qulqullina hir'isu)",
        store_formatOptionPngLossless: "PNG (Kan qulqullina hin hir'isne)",
        store_formatOptionWebpLossy: "WebP (Kan qulqullina hir'isu)",
        store_formatOptionWebpLossless: "WebP (Kan qulqullina hin hir'isne)",
        store_formatOptionAvifLossy: "AVIF (Kan qulqullina hir'isu)",
        store_formatOptionAvifLossless: "AVIF (Kan qulqullina hin hir'isne)",
        previewSection_title: "Dursee Ilaaluu fi Buufachuu",
        previewSection_downloadAllButton: "Hunda Buufadhu",
        previewSection_deleteAllButton: "Hunda Haqi",
        previewSection_placeholder: "Suuraan hin jiru.",
        previewSection_statusPending: "Eegamaa jira",
        previewSection_statusConverting: "Jijjiiramaa jira...",
        previewSection_statusFailed: "Milkaa'uu dide. Maaloo fuula haaromsii irra deebi'ii yaali.",
        previewSection_statusCompleted: "Xumurameera",
        previewSection_noCompletedFilesNotification: "Suuraan xumurame kan buufatamu hin jiru.",
        previewSection_downloadStartedNotification: "Faayiloota {fileCount} buufachuun jalqabamaa jira...",
        previewSection_listEmptyNotification: "Tarreen duwwaadha.",
        previewSection_allDeletedNotification: "Suuraawwan hundi haqamaniiru.",
        previewSection_zipCreationNotification: "ZIP uumamaa jira...",
        previewSection_zipCreationWithSkipsNotification: "ZIP uumamaa jira: Suuraawwan gariin hin xumuramin, kanaaf irra darbamu.",
        previewSection_zipCreationErrorNotification: "Yeroo ZIP uumamu dogoggorri uumameera.",
        previewSection_waitConversionNotification: "Maaloo hanga jijjiirraan xumuramutti eegaa.",
        previewSection_downloadingFileNotification: "Buufatamaa jira: {fileName}",
        previewSection_originalSizeLabel: "Guddina jalqabaa:",
        previewSection_convertedSizeLabel: "Guddina jijjiirame:",
        previewSection_downloadTitle: "Buufadhu",
        previewSection_previewTitle: "Dursee ilaali",
        previewSection_deleteTitle: "Haqi",
        previewSection_comparisonTab: "Walbira qabii ilaali",
        previewSection_settingsTab: "Qindaa'ina",
        previewSection_originalImageLabel: "Suuraa Jalqabaa",
        previewSection_completedImageLabel: "Suuraa Jijjiirame",
        previewSection_formatLabel: "Unka:",
        previewSection_resolutionLabel: "Sadarkaa:",
        previewSection_viewLargerButton: "Taabii haaraadhaan ilaali",
        previewSection_qualityLabel: "Qulqullina Yeroo Xiqqeessuu",
        previewSection_sizeLabel: "Sirreessa Sadarkaa Suuraa",
        previewSection_outputFormatLabel: "Unka Ba'umsaa",
        previewSection_reconvertButton: "Suuraa kana irra deebi'ii jijjiiri",
        globalControls_qualityLabel: "Qulqullina Guddina Xiqqeessuu Waliigalaa",
        globalControls_sizeLabel: "Sirreessa Sadarkaa Suuraa Waliigalaa",
        globalControls_formatLabel: "Unka Ba'umsaa Waliigalaa",
        globalControls_reconvertAllButton: "Hojirra Oolchii Hundas Jijjiiri",
        globalControls_restoreDefaultsButton: "Filannoowwan gara jalqabaatti deebisi",
        globalControls_noImagesNotification: "Maaloo dura suuraawwan dabalaa.",
        globalControls_reconvertingAllNotification: "Suuraawwan {imageCount} hundi qindaa'ina waliigalaatiin irra deebi'amanii jijjiiramaa jiru",
        globalControls_restoredNotification: "Filannoowwan gara qindaa'ina jalqabaatti deebi'aniiru.",
        addSection_title: "Suuraawwan Dabali",
        addArea_dragDropTitle: "Suuraawwan asitti harkisii gadhiisi",
        addArea_supportedFormats: "Unkaawwan JPG, PNG, WebP, AVIF, fi HEIC ni deeggaramu",
        addArea_selectButton: "Suuraawwan Filadhu",
        addArea_tips: "*Yeroo tokkotti suuraawwan hedduu dabaluu dandeessu.",
        ui_viewExplanationTitle: "Filannoowwan kanneen baradhu",
    }
};

export default om;