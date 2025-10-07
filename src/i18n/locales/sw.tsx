import type { Translation } from './en.tsx';

const sw: Translation = {
    static: {
        index_lang: 'sw',
        index_dir: 'ltr',
        index_title: "Image Tool - Zana ya Hali ya Juu ya Kubadilisha Picha",
        index_description: "Zana ya kitaalamu, ya bure mtandaoni ya kukandamiza picha, kubadilisha ukubwa, na kubadilisha fomati. Inaauni ubadilishaji kati ya fomati za JPG, PNG, WebP, na AVIF, na inaweza kubadilisha HEIC kuwa fomati hizi. Uchakataji wote hufanyika ndani ya kivinjari chako—mafaili yako hayapakiwi kamwe kwenye seva, ikihakikisha faragha na usalama kamili wa data yako.",
        optionsExplanation: {
            title: "Mwongozo wa Chaguo",
            subtitle: "Elewa kazi na matumizi ya kila chaguo ili kuboresha matokeo ya ubadilishaji wa picha zako.",
            options: [
                {
                    id: "quality-option",
                    title: "Ubora wa Ukandamizaji",
                    description: <>
                        <p>Chaguo hili hutumika tu wakati fomati lengwa ni <strong>JPG</strong>, <strong>WebP (Yenye Upotevu)</strong>, au <strong>AVIF (Yenye Upotevu)</strong>.</p>
                        <p>Thamani ya chini hutengeneza faili dogo lakini hupunguza ubora wa picha. Thamani inayopendekezwa ya <strong>75</strong> inatoa uwiano mzuri kati ya ukubwa wa faili na ubora.</p>
                        <p>Ikiwa faili bado ni kubwa sana baada ya ukandamizaji, jaribu kupunguza azimio la picha (resolution), ambayo mara nyingi huwa na ufanisi zaidi katika kupunguza ukubwa wa faili.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Marekebisho ya Azimio",
                    description: <>
                        <p>Punguza azimio la picha kwa asilimia huku ukidumisha uwiano wa asili. <strong>100%</strong> hudumisha azimio la asili.</p>
                        <p>Kupunguza azimio kunaweza kupunguza ukubwa wa faili kwa <strong>kiasi kikubwa</strong>. Ikiwa hauhitaji azimio la juu la asili, hii mara nyingi ndiyo <strong>njia yenye ufanisi zaidi</strong> ya kufanya faili liwe dogo.</p>
                        <p>Chaguo zingine zikiwa sawa, kulingana na <strong>azimio la 100%</strong>. Kurekebisha hadi <strong>azimio la 75%</strong> kunapunguza ukubwa wa faili kwa wastani wa <strong>30%</strong>; kurekebisha hadi <strong>azimio la 50%</strong> kunapunguza kwa wastani wa <strong>65%</strong>; na kurekebisha hadi <strong>azimio la 25%</strong> kunapunguza kwa wastani wa <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Fomati ya Pato",
                    description: <>
                        <p>Chagua fomati ya pato kwa picha. Fomati tofauti zina faida na matumizi yake.</p>
                        <p><strong>Ukandamizaji Otomatiki</strong>: Chaguo hili hutumia mkakati wa ukandamizaji unaofaa kulingana na fomati ya ingizo:</p>
                        <ul>
                            <li>Picha za <strong>JPG</strong> hukandamizwa kama <strong>JPG</strong>.</li>
                            <li>Picha za <strong>PNG</strong> hukandamizwa kwa kutumia mbinu ya <strong>PNG (Yenye Upotevu)</strong>.</li>
                            <li>Picha za <strong>WebP</strong> hukandamizwa kwa kutumia mbinu ya <strong>WebP (Yenye Upotevu)</strong>.</li>
                            <li>Picha za <strong>AVIF</strong> hukandamizwa kwa kutumia mbinu ya <strong>AVIF (Yenye Upotevu)</strong>.</li>
                            <li>Picha za <strong>HEIC</strong> hubadilishwa kuwa <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Unaweza pia kuchagua fomati mwenyewe hapa chini kulingana na mahitaji yako maalum. Huu hapa ni mwongozo wa kina kwa kila chaguo:
                        </p>

                        <p>
                            <strong>JPG</strong>: Fomati maarufu zaidi ya picha, ingawa haiauni uwazi (transparency). Ikilinganishwa na <strong>PNG isiyokandamizwa</strong>, inaweza kupunguza ukubwa wa faili kwa wastani wa <strong>90%</strong>. Katika mpangilio wa ubora wa <strong>75</strong>, upotevu wa ubora <strong>hauonekani kwa urahisi</strong>. Ikiwa hauitaji mandharinyuma ya wazi <strong>(kama ilivyo kwa picha nyingi)</strong>, kubadilisha kuwa <strong>JPG</strong> mara nyingi ndilo chaguo bora zaidi.
                        </p>

                        <p>
                            <strong>PNG (Yenye Upotevu)</strong>: Inaauni uwazi na upotevu fulani wa ubora, ikipunguza ukubwa wa faili kwa wastani wa <strong>70%</strong> ikilinganishwa na <strong>PNG isiyokandamizwa</strong>. Chagua hii tu ikiwa unahitaji mandharinyuma ya wazi katika fomati ya PNG. Vinginevyo, <strong>JPG</strong> inatoa <strong>ubora bora kwa ukubwa mdogo</strong> (bila uwazi), na <strong>WebP (Yenye Upotevu)</strong> inatoa <strong>ubora bora zaidi, ukubwa mdogo, na uwazi</strong>, na kuifanya kuwa mbadala bora ikiwa fomati ya PNG si sharti.
                        </p>

                        <p>
                            <strong>PNG (Bila Upotevu)</strong>: Inaauni uwazi bila upotevu wa ubora. Inapunguza ukubwa wa faili kwa wastani wa <strong>20%</strong> ikilinganishwa na <strong>PNG isiyokandamizwa</strong>. Walakini, <strong>ikiwa fomati ya PNG si sharti</strong>, <strong>WebP (Bila Upotevu)</strong> ni chaguo bora kwani inatoa saizi ndogo za faili.
                        </p>

                        <p>
                            <strong>WebP (Yenye Upotevu)</strong>: Inaauni uwazi na upotevu kidogo wa ubora. Inapunguza ukubwa wa faili kwa wastani wa <strong>90%</strong> ikilinganishwa na <strong>PNG isiyokandamizwa</strong>. Ni mbadala bora kwa <strong>PNG (Yenye Upotevu)</strong>, ikitoa ubora bora na saizi ndogo. Kumbuka: WebP haitumiki kwenye baadhi ya vifaa vya zamani.
                        </p>

                        <p>
                            <strong>WebP (Bila Upotevu)</strong>: Inaauni uwazi bila upotevu wa ubora. Inapunguza ukubwa wa faili kwa wastani wa <strong>50%</strong> ikilinganishwa na <strong>PNG isiyokandamizwa</strong>, na kuifanya kuwa mbadala bora kwa <strong>PNG (Bila Upotevu)</strong>. Kumbuka: WebP haitumiki kwenye baadhi ya vifaa vya zamani.
                        </p>

                        <p>
                            <strong>AVIF (Yenye Upotevu)</strong>: Inaauni uwazi na upotevu kidogo wa ubora. Kama mrithi wa WebP, inatoa kiwango cha juu zaidi cha ukandamizaji, ikipunguza ukubwa wa faili kwa wastani wa <strong>94%</strong> ikilinganishwa na <strong>PNG isiyokandamizwa</strong>. Kama fomati ya kisasa, AVIF inatoa ubora wa hali ya juu kwa saizi ndogo sana. Hata hivyo, uoanifu wa kivinjari na kifaa bado ni mdogo. Fomati hii inafaa zaidi kwa watumiaji wa hali ya juu au unapokuwa na uhakika kuwa vifaa lengwa vinaiauni.
                        </p>
                        <p>
                            <strong>AVIF (Bila Upotevu)</strong>: Inaauni uwazi bila upotevu wa ubora. Ikilinganishwa na <strong>PNG isiyokandamizwa</strong>, upunguzaji wa ukubwa wa faili si mkubwa, na katika hali zingine, unaweza hata kuongezeka. Isipokuwa una hitaji maalum la AVIF isiyo na upotevu, <strong>PNG (Bila Upotevu)</strong> au <strong>WebP (Bila Upotevu)</strong> kwa ujumla ni chaguo bora zaidi.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Badilisha Mandhari"
    },
    interactive: {
        store_imageDeletedNotification: "Imeondolewa: {fileName}",
        store_convertingImagesNotification: "Inabadilisha picha {number}...",
        store_conversionFailedNotification: "Ubadilishaji umeshindwa: {fileName}",
        store_unsupportedFileTypeNotification: "Fomati haitumiki, imeondolewa: {fileName}",
        store_fileReadErrorNotification: "Imeshindwa kusoma faili, limeondolewa: {fileName}",
        store_reconvertingNotification: "Inabadilisha tena: {fileName}",
        store_formatOptionAuto: "Ukandamizaji Otomatiki",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Yenye Upotevu)",
        store_formatOptionPngLossless: "PNG (Bila Upotevu)",
        store_formatOptionWebpLossy: "WebP (Yenye Upotevu)",
        store_formatOptionWebpLossless: "WebP (Bila Upotevu)",
        store_formatOptionAvifLossy: "AVIF (Yenye Upotevu)",
        store_formatOptionAvifLossless: "AVIF (Bila Upotevu)",
        previewSection_title: "Onyesho la Awali na Upakuaji",
        previewSection_downloadAllButton: "Pakua Zote",
        previewSection_deleteAllButton: "Futa Zote",
        previewSection_placeholder: "Hakuna picha bado.",
        previewSection_statusPending: "Inasubiri",
        previewSection_statusConverting: "Inabadilisha...",
        previewSection_statusFailed: "Imeshindwa. Tafadhali onyesha upya ukurasa na ujaribu tena.",
        previewSection_statusCompleted: "Imekamilika",
        previewSection_noCompletedFilesNotification: "Hakuna picha zilizokamilika za kupakua.",
        previewSection_downloadStartedNotification: "Inaanza kupakua mafaili {fileCount}...",
        previewSection_listEmptyNotification: "Orodha iko tupu.",
        previewSection_allDeletedNotification: "Picha zote zimeondolewa.",
        previewSection_zipCreationNotification: "Inatengeneza ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Inatengeneza ZIP: Baadhi ya picha hazijakamilika na zitarukwa.",
        previewSection_zipCreationErrorNotification: "Hitilafu imetokea wakati wa kutengeneza ZIP.",
        previewSection_waitConversionNotification: "Tafadhali subiri ubadilishaji ukamilike.",
        previewSection_downloadingFileNotification: "Inapakua: {fileName}",
        previewSection_originalSizeLabel: "Ukubwa halisi:",
        previewSection_convertedSizeLabel: "Ukubwa mpya:",
        previewSection_downloadTitle: "Pakua",
        previewSection_previewTitle: "Onyesho la awali",
        previewSection_deleteTitle: "Futa",
        previewSection_comparisonTab: "Linganisha",
        previewSection_settingsTab: "Mipangilio",
        previewSection_originalImageLabel: "Picha Halisi",
        previewSection_completedImageLabel: "Picha Iliyobadilishwa",
        previewSection_formatLabel: "Fomati:",
        previewSection_resolutionLabel: "Azimio:",
        previewSection_viewLargerButton: "Angalia kwenye Kichupo Kipya",
        previewSection_qualityLabel: "Ubora wa Ukandamizaji",
        previewSection_sizeLabel: "Marekebisho ya Azimio",
        previewSection_outputFormatLabel: "Fomati ya Pato",
        previewSection_reconvertButton: "Badilisha tena picha hii",
        globalControls_qualityLabel: "Ubora wa Ukandamizaji Jumla",
        globalControls_sizeLabel: "Marekebisho ya Azimio Jumla",
        globalControls_formatLabel: "Fomati ya Pato Jumla",
        globalControls_reconvertAllButton: "Tumia na Ubadilishe Zote",
        globalControls_restoreDefaultsButton: "Rejesha Mipangilio Msingi",
        globalControls_noImagesNotification: "Tafadhali ongeza picha kwanza.",
        globalControls_reconvertingAllNotification: "Inabadilisha tena picha zote {imageCount} kwa mipangilio ya jumla",
        globalControls_restoredNotification: "Chaguo zimerejeshwa kuwa za msingi.",
        addSection_title: "Ongeza Picha",
        addArea_dragDropTitle: "Buruta na uachie picha hapa",
        addArea_supportedFormats: "Inaauni fomati za JPG, PNG, WebP, AVIF, na HEIC",
        addArea_selectButton: "Chagua Picha",
        addArea_tips: "*Unaweza kuongeza picha nyingi kwa mara moja",
        ui_viewExplanationTitle: "Jifunze kuhusu chaguo hizi",
    }
};

export default sw;