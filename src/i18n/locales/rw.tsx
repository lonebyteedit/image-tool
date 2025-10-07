import type { Translation } from './en.tsx';

const rw: Translation = {
    static: {
        index_lang: 'rw',
        index_dir: 'ltr',
        index_title: "Image Tool - Igikoresho cy'ikirenga mu guhindura amashusho",
        index_description: "Ni igikoresho cy'ubuntu kandi cy'abanyamwuga kuri interineti cyo kugabanya ubunini bw'amashusho, guhindura ingano yayo, no guhindura ubwoko bwayo. Gishyigikira guhinduranya hagati ya JPG, PNG, WebP, na AVIF, kandi gishobora guhindura HEIC kikayishyira muri ubu bwoko bw'amadosiye. Ibikorwa byose bikorerwa muri browser yawe — amadosiye yawe ntajya yoherezwa ahandi, ibi bikizeza umutekano w'amabanga n'amakuru byawe byuzuye.",
        optionsExplanation: {
            title: "Amabwiriza y'Amahitamo",
            subtitle: "Sobanukirwa imikorere n'ikoreshwa rya buri hitamo kugira ngo ugere ku bisubizo byiza mu guhindura amashusho yawe.",
            options: [
                {
                    id: "quality-option",
                    title: "Ubuziranenge bwo Kugabanya Ubunini",
                    description: <>
                        <p>Iri hitamo rikora gusa iyo ubwoko bw'ifayili isohoka ari <strong>JPG</strong>, <strong>WebP (gitakaza ubuziranenge)</strong>, cyangwa <strong>AVIF (gitakaza ubuziranenge)</strong>.</p>
                        <p>Umubare muto utanga ifayili ntoya ariko ukanagabanya ubuziranenge bw'ishusho. Umubare dusaba ni <strong>75</strong>, utanga ihame rikwiye hagati y'ingano y'ifayili n'ubuziranenge.</p>
                        <p>Niba ifayili igifite ubunini burenze na nyuma yo kubugabanya, gerageza kugabanya ingano y'ishusho (resolution), kuko akenshi aribyo birusha ubundi buryo bwose imbaraga mu kugabanya ubunini bw'ifayili.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Guhindura Ingano y'Ishusho (Resolution)",
                    description: <>
                        <p>Gabanya ingano y'ishusho (resolution) ukoresheje ijanisha mu gihe ugumishaho igipimo cy'uburebure n'ubugari cy'umwimerere. <strong>100%</strong> bigumishaho ingano y'umwimerere.</p>
                        <p>Kugabanya ingano y'ishusho bishobora kugabanya ubunini bw'ifayili mu buryo <strong>bugaragara cyane</strong>. Niba udakeneye ingano nini y'umwimerere, ubu ni bwo buryo <strong>bwiza cyane</strong> bwo kugabanya ubunini bw'ifayili.</p>
                        <p>Ibindi byose bikigumye uko byari biri, duhereye ku ngani ya <strong>100%</strong>: Kuyishyira kuri <strong>75%</strong> bigabanya ubunini bw'ifayili ku kigereranyo cya <strong>30%</strong>; kuyishyira kuri <strong>50%</strong> bikabugabanya ku kigereranyo cya <strong>65%</strong>; naho kuyishyira kuri <strong>25%</strong> bikabugabanya ku kigereranyo cya <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Ubwoko bw'Ifayili Isohoka",
                    description: <>
                        <p>Hitamo ubwoko bw'ifayili isohoka. Buri bwoko bufite ibyiza byabwo n'aho bukoreshwa.</p>
                        <p><strong>Kugabanya Ubunini mu buryo bwikora</strong>: Iri hitamo rikoresha uburyo bwo kugabanya ubunini bujyanye n'ubwoko bwinjijwe:</p>
                        <ul>
                            <li>Amashusho ya <strong>JPG</strong> ahindurwa nka <strong>JPG</strong>.</li>
                            <li>Amashusho ya <strong>PNG</strong> ahindurwa hakoreshejwe uburyo bwa <strong>PNG (gitakaza ubuziranenge)</strong>.</li>
                            <li>Amashusho ya <strong>WebP</strong> ahindurwa hakoreshejwe uburyo bwa <strong>WebP (gitakaza ubuziranenge)</strong>.</li>
                            <li>Amashusho ya <strong>AVIF</strong> ahindurwa hakoreshejwe uburyo bwa <strong>AVIF (gitakaza ubuziranenge)</strong>.</li>
                            <li>Amashusho ya <strong>HEIC</strong> ahindurwamo <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Ushobora no guhitamo ubwoko runaka hano hasi bijyanye n'ibyo ukeneye. Hano hari ibisobanuro birambuye kuri buri hitamo:
                        </p>

                        <p>
                            <strong>JPG</strong>: Ubwoko bw'amashusho bukunzwe cyane, nubwo budashyigikira ko inyuma hayo habonerana. Ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>, bushobora kugabanya ubunini bw'ifayili ku kigereranyo cya <strong>90%</strong>. Ku gipimo cy'ubuziranenge cya <strong>75</strong>, itakara ry'ubuziranenge <strong>riba ritagaragara</strong>. Niba udakeneye ko inyuma h'ishusho habonerana <strong>(aribyo bikunze kubaho ku mafoto menshi)</strong>, guhindurira muri <strong>JPG</strong> akenshi ni cyo cyaba ari cyo gisubizo cyiza.
                        </p>

                        <p>
                            <strong>PNG (gitakaza ubuziranenge)</strong>: Ishyigikira ko inyuma habonerana ariko hagatakara ubuziranenge buke. Igabanya ubunini bw'ifayili ku kigereranyo cya <strong>70%</strong> ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>. Hitamo ubu bwoko gusa iyo ukeneye ko inyuma habonerana kandi ukaba ukeneye ko iba PNG. Bitabaye ibyo, <strong>JPG</strong> itanga <strong>ubuziranenge buri hejuru ku bunini buto</strong> (iyo inyuma hatabonerana), naho <strong>WebP (gitakaza ubuziranenge)</strong> yo igatanga <strong>ubuziranenge buri hejuru, ubunini buto, ikanemerera ko inyuma habonerana</strong>, bigatuma iba nziza kurushaho iyo kuba ari PNG bitari itegeko.
                        </p>

                        <p>
                            <strong>PNG (kitakaza ubuziranenge)</strong>: Ishyigikira ko inyuma habonerana nta na buke mu buziranenge butakaye. Igabanya ubunini bw'ifayili ku kigereranyo cya <strong>20%</strong> ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>. Ariko, <strong>iyo kuba ari PNG bitari itegeko</strong>, <strong>WebP (kitakaza ubuziranenge)</strong> ni yo nziza kurushaho kuko itanga amadosiye mato.
                        </p>

                        <p>
                            <strong>WebP (gitakaza ubuziranenge)</strong>: Ishyigikira ko inyuma habonerana hagatakara ubuziranenge buke. Igabanya ubunini bw'ifayili ku kigereranyo cya <strong>90%</strong> ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>. Ni uburyo bwiza bwo gusimbura <strong>PNG (gitakaza ubuziranenge)</strong>, kuko itanga ubuziranenge buri hejuru n'ubunini buto. Icyitonderwa: WebP ntishyigikirwa na bimwe mu bikoresho bya kera.
                        </p>

                        <p>
                            <strong>WebP (kitakaza ubuziranenge)</strong>: Ishyigikira ko inyuma habonerana nta na buke mu buziranenge butakaye. Igabanya ubunini bw'ifayili ku kigereranyo cya <strong>50%</strong> ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>, bigatuma iba nziza kurusha <strong>PNG (kitakaza ubuziranenge)</strong>. Icyitonderwa: WebP ntishyigikirwa na bimwe mu bikoresho bya kera.
                        </p>

                        <p>
                            <strong>AVIF (gitakaza ubuziranenge)</strong>: Ishyigikira ko inyuma habonerana hagatakara ubuziranenge buke. Nka gisimbura cya WebP, ifite ubushobozi buri hejuru bwo kugabanya ubunini, ikagabanya ifayili ku kigereranyo cya <strong>94%</strong> ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>. Nk'ubwoko bugezweho cyane, AVIF itanga ubuziranenge buhebuje mu bunini buto cyane. Ariko, ama-browser n'ibikoresho biyishyigikira biracyari bike. Ubu bwoko bubereye abakoresha b'inararibonye cyangwa igihe wizeye neza ko ibikoresho bizayikoresha biyemera.
                        </p>
                        <p>
                            <strong>AVIF (kitakaza ubuziranenge)</strong>: Ishyigikira ko inyuma habonerana nta buziranenge butakaye. Ugereranyije na <strong>PNG itagabanyijwe ubunini</strong>, igabanuka ry'ubunini ntiriba rinini, ndetse rimwe na rimwe rishobora no kwiyongera. Keretse niba ufite impamvu idasanzwe, <strong>PNG (kitakaza ubuziranenge)</strong> cyangwa <strong>WebP (kitakaza ubuziranenge)</strong> akenshi ni yo mahitamo meza.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Hindura insanganyamatsiko"
    },
    interactive: {
        store_imageDeletedNotification: "Hasibwe: {fileName}",
        store_convertingImagesNotification: "Hahindurwa amashusho {number}...",
        store_conversionFailedNotification: "Guhindura byananiranye: {fileName}",
        store_unsupportedFileTypeNotification: "Ubwoko butemewe, hasibwe: {fileName}",
        store_fileReadErrorNotification: "Gusoma ifayili byananiranye, hasibwe: {fileName}",
        store_reconvertingNotification: "Hongerwa guhindurwa: {fileName}",
        store_formatOptionAuto: "Uburyo bwikora",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (gitakaza ubuziranenge)",
        store_formatOptionPngLossless: "PNG (kitakaza ubuziranenge)",
        store_formatOptionWebpLossy: "WebP (gitakaza ubuziranenge)",
        store_formatOptionWebpLossless: "WebP (kitakaza ubuziranenge)",
        store_formatOptionAvifLossy: "AVIF (gitakaza ubuziranenge)",
        store_formatOptionAvifLossless: "AVIF (kitakaza ubuziranenge)",
        previewSection_title: "Banza Urebe Hanyuma Umanure",
        previewSection_downloadAllButton: "Manura Byose",
        previewSection_deleteAllButton: "Siba Byose",
        previewSection_placeholder: "Nta mashusho arahari.",
        previewSection_statusPending: "Bitegereje",
        previewSection_statusConverting: "Biri guhindurwa...",
        previewSection_statusFailed: "Byananiranye. Garura urupapuro wongere ugerageze.",
        previewSection_statusCompleted: "Byarangiye",
        previewSection_noCompletedFilesNotification: "Nta mashusho yuzuye yo kumanura ahari.",
        previewSection_downloadStartedNotification: "Hatangiye kumanurwa amadosiye {fileCount}...",
        previewSection_listEmptyNotification: "Urutonde rurimo ubusa.",
        previewSection_allDeletedNotification: "Amashusho yose yasibwe.",
        previewSection_zipCreationNotification: "Harimo gukorwa ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Harimo gukorwa ZIP: Hari amashusho atuzuye, azasimbukwa.",
        previewSection_zipCreationErrorNotification: "Habayeho ikosa mu gihe hakorwaga ZIP.",
        previewSection_waitConversionNotification: "Nyamuneka tegereza ko guhindura birangira.",
        previewSection_downloadingFileNotification: "Manura: {fileName}",
        previewSection_originalSizeLabel: "Ubunini bw'umwimerere:",
        previewSection_convertedSizeLabel: "Ubunini bushya:",
        previewSection_downloadTitle: "Manura",
        previewSection_previewTitle: "Banza Urebe",
        previewSection_deleteTitle: "Siba",
        previewSection_comparisonTab: "Gereranya",
        previewSection_settingsTab: "Igenamiterere",
        previewSection_originalImageLabel: "Ishusho y'Umwimerere",
        previewSection_completedImageLabel: "Ishusho Yahinduwe",
        previewSection_formatLabel: "Ubwoko:",
        previewSection_resolutionLabel: "Ingano:",
        previewSection_viewLargerButton: "Fungura mu tabo nshya",
        previewSection_qualityLabel: "Ubuziranenge bwo Kugabanya Ubunini",
        previewSection_sizeLabel: "Guhindura Ingano y'Ishusho",
        previewSection_outputFormatLabel: "Ubwoko bw'Ifayili Isohoka",
        previewSection_reconvertButton: "Ongera Uhindure iyi shusho",
        globalControls_qualityLabel: "Ubuziranenge Rusange bwo Kugabanya Ubunini",
        globalControls_sizeLabel: "Guhindura Ingano Rusange y'Ishusho",
        globalControls_formatLabel: "Ubwoko Rusange bw'Ifayili Isohoka",
        globalControls_reconvertAllButton: "Shyiramo & Hindura Byose",
        globalControls_restoreDefaultsButton: "Garura igenamiterere ry'isanzwe",
        globalControls_noImagesNotification: "Nyamuneka banza ushyiremo amashusho.",
        globalControls_reconvertingAllNotification: "Hongerwa guhindurwa amashusho yose {imageCount} hakoreshejwe igenamiterere rusange",
        globalControls_restoredNotification: "Igenamiterere risubijwe ku ry'isanzwe.",
        addSection_title: "Ongeramo Amashusho",
        addArea_dragDropTitle: "Kurura amashusho uyashyire hano",
        addArea_supportedFormats: "Byemera JPG, PNG, WebP, AVIF, na HEIC",
        addArea_selectButton: "Hitamo Amashusho",
        addArea_tips: "*Ushobora kongeramo amashusho menshi icyarimwe",
        ui_viewExplanationTitle: "Soma ibyerekeye aya mahitamo",
    }
};

export default rw;