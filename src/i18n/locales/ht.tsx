import type { Translation } from './en.tsx';

const ht: Translation = {
    static: {
        index_lang: 'ht',
        index_dir: 'ltr',
        index_title: "Image Tool - Zouti Avanse pou Konvèti Imaj",
        index_description: "Yon zouti pwofesyonèl gratis sou entènèt pou konprese imaj, chanje gwosè yo, ak konvèti fòma yo. Li pèmèt ou konvèti imaj ant fòma JPG, PNG, WebP, ak AVIF, epi li ka konvèti fòma HEIC an fòma sa yo. Tout operasyon fèt lokalman nan navigatè w la — fichye w yo pa janm voye sou okenn sèvè, sa ki garanti konfidansyalite ak sekirite total pou done w yo.",
        optionsExplanation: {
            title: "Gid Opsyon yo",
            subtitle: "Konprann fonksyon ak itilizasyon chak opsyon pou w jwenn pi bon rezilta lè w ap konvèti imaj ou yo.",
            options: [
                {
                    id: "quality-option",
                    title: "Kalite Konpresyon",
                    description: <>
                        <p>Opsyon sa a valab sèlman lè fòma final la se <strong>JPG</strong>, <strong>WebP (ak pèt done)</strong>, oswa <strong>AVIF (ak pèt done)</strong>.</p>
                        <p>Yon valè ki pi ba ap kreye yon fichye ki pi piti, men l ap redui kalite imaj la. Valè <strong>75</strong> la se sa nou rekòmande, li ofri yon bon balans ant gwosè fichye a ak kalite a.</p>
                        <p>Si fichye a toujou twò gwo apre konpresyon an, eseye diminye rezolisyon an, sa souvan pi efikas pou fè fichye a vin pi piti.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ajisteman Rezolisyon",
                    description: <>
                        <p>Redui rezolisyon imaj la an pousantaj tout pandan w ap konsève rapò lajè/wotè orijinal la. <strong>100%</strong> vle di ou kenbe rezolisyon orijinal la.</p>
                        <p>Lè w redui rezolisyon an, sa ka diminye gwosè fichye a <strong>anpil anpil</strong>. Si w pa bezwen gwo rezolisyon orijinal la, souvan se <strong>metòd ki pi efikas</strong> la pou fè fichye a vin pi piti.</p>
                        <p>Avèk menm lòt opsyon yo, si nou baze nou sou <strong>100% rezolisyon</strong>. Lè w ajiste l a <strong>75% rezolisyon</strong>, sa redui gwosè fichye a an mwayèn de <strong>30%</strong>; si w ajiste l a <strong>50% rezolisyon</strong>, sa redui l an mwayèn de <strong>65%</strong>; e si w ajiste l a <strong>25% rezolisyon</strong>, sa redui l an mwayèn de <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Fòma final",
                    description: <>
                        <p>Chwazi fòma final pou imaj la. Chak fòma gen avantaj ak ka itilizasyon pa l.</p>
                        <p><strong>Konpresyon Otomatik</strong>: Opsyon sa a ap aplike yon estrateji konpresyon ki apwopriye selon fòma imaj ou mete a:</p>
                        <ul>
                            <li>Imaj <strong>JPG</strong> yo ap konprese an <strong>JPG</strong>.</li>
                            <li>Imaj <strong>PNG</strong> yo ap konprese ak metòd <strong>PNG (ak pèt done)</strong>.</li>
                            <li>Imaj <strong>WebP</strong> yo ap konprese ak metòd <strong>WebP (ak pèt done)</strong>.</li>
                            <li>Imaj <strong>AVIF</strong> yo ap konprese ak metòd <strong>AVIF (ak pèt done)</strong>.</li>
                            <li>Imaj <strong>HEIC</strong> yo ap konvèti an <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Ou ka chwazi yon fòma manyèlman tou anba a selon bezwen w. Men yon gid detaye pou chak opsyon:
                        </p>

                        <p>
                            <strong>JPG</strong>: Se fòma imaj ki pi popilè a, men li pa sipòte transparans. Konpare ak yon <strong>PNG ki pa konprese</strong>, li ka redui gwosè fichye a an mwayèn de <strong>90%</strong>. Avèk yon kalite <strong>75</strong>, pèt kalite a <strong>prèske pa parèt</strong>. Si w pa bezwen yon fon transparan <strong>(sa ki se ka a pou pifò foto)</strong>, konvèti an <strong>JPG</strong> se pi bon chwa a an jeneral.
                        </p>

                        <p>
                            <strong>PNG (ak pèt done)</strong>: Li sipòte transparans avèk yon ti pèt kalite. Li redui gwosè fichye a an mwayèn de <strong>70%</strong> konpare ak yon <strong>PNG ki pa konprese</strong>. Chwazi l sèlman si w bezwen yon fon transparan nan fòma PNG. Sinon, <strong>JPG</strong> ofri <strong>pi bon kalite pou yon gwosè pi piti</strong> (san transparans), epi <strong>WebP (ak pèt done)</strong> bay <strong>pi bon kalite, pi piti gwosè, ak transparans</strong>, sa ki fè l yon pi bon altènatif si fòma PNG a pa obligatwa.
                        </p>

                        <p>
                            <strong>PNG (san pèt done)</strong>: Li sipòte transparans san okenn pèt kalite. Li redui gwosè fichye a an mwayèn de <strong>20%</strong> konpare ak yon <strong>PNG ki pa konprese</strong>. Sepandan, <strong>si fòma PNG a pa obligatwa</strong>, <strong>WebP (san pèt done)</strong> se yon pi bon chwa paske li bay fichye ki pi piti.
                        </p>

                        <p>
                            <strong>WebP (ak pèt done)</strong>: Li sipòte transparans avèk yon ti pèt kalite. Li redui gwosè fichye a an mwayèn de <strong>90%</strong> konpare ak yon <strong>PNG ki pa konprese</strong>. Li se yon ranplasan ekselan pou <strong>PNG (ak pèt done)</strong>, paske li ofri pi bon kalite ak pi piti gwosè. Nòt: Gen kèk aparèy ansyen ki pa sipòte WebP.
                        </p>

                        <p>
                            <strong>WebP (san pèt done)</strong>: Li sipòte transparans san okenn pèt kalite. Li redui gwosè fichye a an mwayèn de <strong>50%</strong> konpare ak yon <strong>PNG ki pa konprese</strong>, sa ki fè l yon pi bon ranplasan pou <strong>PNG (san pèt done)</strong>. Nòt: Gen kèk aparèy ansyen ki pa sipòte WebP.
                        </p>

                        <p>
                            <strong>AVIF (ak pèt done)</strong>: Li sipòte transparans avèk yon ti pèt kalite. Kòm siksesè WebP, li ofri yon to konpresyon ki pi wo toujou, li redui gwosè fichye a an mwayèn de <strong>94%</strong> konpare ak yon <strong>PNG ki pa konprese</strong>. Kòm yon fòma dènye kri, AVIF bay yon kalite ekselan pou yon gwosè fichye ki piti anpil. Sepandan, konpatibilite li ak navigatè ak aparèy yo toujou limite. Fòma sa a pi bon pou itilizatè avanse oswa lè w sèten aparèy sib yo sipòte l.
                        </p>
                        <p>
                            <strong>AVIF (san pèt done)</strong>: Li sipòte transparans san pèt kalite. Konpare ak yon <strong>PNG ki pa konprese</strong>, rediksyon gwosè fichye a pa enpòtan, e nan kèk ka, li ka menm ogmante. Sòf si w gen yon bezwen espesifik pou AVIF san pèt done, <strong>PNG (san pèt done)</strong> oswa <strong>WebP (san pèt done)</strong> se jeneralman de pi bon opsyon.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Chanje Tèm"
    },
    interactive: {
        store_imageDeletedNotification: "Imaj efase: {fileName}",
        store_convertingImagesNotification: "Ap konvèti {number} imaj...",
        store_conversionFailedNotification: "Konvèsyon an echwe pou: {fileName}",
        store_unsupportedFileTypeNotification: "Fòma pa sipòte, imaj efase: {fileName}",
        store_fileReadErrorNotification: "Nou pa ka li fichye a, imaj efase: {fileName}",
        store_reconvertingNotification: "Ap rekonvèti: {fileName}",
        store_formatOptionAuto: "Konpresyon Otomatik",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (ak pèt done)",
        store_formatOptionPngLossless: "PNG (san pèt done)",
        store_formatOptionWebpLossy: "WebP (ak pèt done)",
        store_formatOptionWebpLossless: "WebP (san pèt done)",
        store_formatOptionAvifLossy: "AVIF (ak pèt done)",
        store_formatOptionAvifLossless: "AVIF (san pèt done)",
        previewSection_title: "Apèsi ak Telechajman",
        previewSection_downloadAllButton: "Telechaje Tout",
        previewSection_deleteAllButton: "Efase Tout",
        previewSection_placeholder: "Pa gen imaj pou kounye a.",
        previewSection_statusPending: "An atant",
        previewSection_statusConverting: "Ap konvèti...",
        previewSection_statusFailed: "Echèk. Tanpri rafrechi paj la epi eseye ankò.",
        previewSection_statusCompleted: "Tèmine",
        previewSection_noCompletedFilesNotification: "Pa gen okenn imaj ki fini pou telechaje.",
        previewSection_downloadStartedNotification: "Telechajman {fileCount} fichye ap kòmanse...",
        previewSection_listEmptyNotification: "Lis la vid.",
        previewSection_allDeletedNotification: "Tout imaj yo efase.",
        previewSection_zipCreationNotification: "Ap kreye ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Ap kreye ZIP: Gen kèk imaj ki poko fini, epi y ap sote yo.",
        previewSection_zipCreationErrorNotification: "Yon erè te fèt pandan kreyasyon ZIP la.",
        previewSection_waitConversionNotification: "Tanpri tann konvèsyon an fini.",
        previewSection_downloadingFileNotification: "Ap telechaje: {fileName}",
        previewSection_originalSizeLabel: "Gwosè orijinal:",
        previewSection_convertedSizeLabel: "Gwosè apre konvèsyon:",
        previewSection_downloadTitle: "Telechaje",
        previewSection_previewTitle: "Apèsi",
        previewSection_deleteTitle: "Efase",
        previewSection_comparisonTab: "Konparezon",
        previewSection_settingsTab: "Paramèt",
        previewSection_originalImageLabel: "Imaj Orijinal",
        previewSection_completedImageLabel: "Imaj Konvèti",
        previewSection_formatLabel: "Fòma:",
        previewSection_resolutionLabel: "Rezolisyon:",
        previewSection_viewLargerButton: "Gade nan yon lòt onglet",
        previewSection_qualityLabel: "Kalite Konpresyon",
        previewSection_sizeLabel: "Ajisteman Rezolisyon",
        previewSection_outputFormatLabel: "Fòma final",
        previewSection_reconvertButton: "Rekonvèti imaj sa a",
        globalControls_qualityLabel: "Kalite Konpresyon Global",
        globalControls_sizeLabel: "Ajisteman Rezolisyon Global",
        globalControls_formatLabel: "Fòma final Global",
        globalControls_reconvertAllButton: "Aplike epi Rekonvèti Tout",
        globalControls_restoreDefaultsButton: "Reyinisyalize Opsyon yo",
        globalControls_noImagesNotification: "Tanpri ajoute imaj anvan.",
        globalControls_reconvertingAllNotification: "Ap rekonvèti tout {imageCount} imaj yo avèk paramèt global yo",
        globalControls_restoredNotification: "Opsyon yo retounen nan valè defo yo.",
        addSection_title: "Ajoute Imaj",
        addArea_dragDropTitle: "Glise epi depoze imaj yo isit la",
        addArea_supportedFormats: "Nou sipòte fòma JPG, PNG, WebP, AVIF, ak HEIC",
        addArea_selectButton: "Chwazi Imaj",
        addArea_tips: "*Ou ka ajoute plizyè imaj yon sèl kou.",
        ui_viewExplanationTitle: "Aprann plis sou opsyon sa yo",
    }
};

export default ht;