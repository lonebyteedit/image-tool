import type { Translation } from './en.tsx';

const mg: Translation = {
    static: {
        index_lang: 'mg',
        index_dir: 'ltr',
        index_title: "Image Tool - Fitaovana Hanovana Sary Matihanina",
        index_description: "Fitaovana an-tranonkala matihanina sy maimaim-poana ho an'ny fanerena sary, fanitsiana ny habeny, ary fanovana ny endriny. Manohana ny fifanakalozana endrika eo amin'ny JPG, PNG, WebP, ary AVIF, ary afaka manova ny HEIC ho amin'ireo endrika ireo. Ny fikirakirana rehetra dia atao eo an-toerana ao anatin'ny navigateur-nao — tsy alefa na oviana na oviana any amin'ny serveur ny raki-dazanao, ka miantoka tanteraka ny fiainanao manokana sy ny fiarovana ny angonao.",
        optionsExplanation: {
            title: "Tari-dalana momba ny Safidy",
            subtitle: "Fantaro ny fiasan'ny safidy tsirairay sy ny fampiasana azy mba hanatsarana ny valin'ny fanovanao sary.",
            options: [
                {
                    id: "quality-option",
                    title: "Kalitaon'ny Fanerena",
                    description: <>
                        <p>Ity safidy ity dia mihatra fotsiny rehefa <strong>JPG</strong>, <strong>WebP (misy fatiantoka)</strong>, na <strong>AVIF (misy fatiantoka)</strong> ny endrika hamoahana.</p>
                        <p>Ny sanda ambany kokoa dia miteraka raki-daza kely kokoa nefa mampihena ny kalitaon'ny sary. Ny sanda atolotra dia <strong>75</strong>, izay manome fifandanjana tsara eo amin'ny haben'ny raki-daza sy ny kalitao.</p>
                        <p>Raha mbola lehibe loatra ny raki-daza aorian'ny fanerena, andramo ny mampihena ny fanapahana (résolution), izay matetika no mandaitra kokoa amin'ny fampihenana ny habe.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Fanitsiana ny Fanapahana",
                    description: <>
                        <p>Mampihena ny fanapahan'ny sary amin'ny isan-jato nefa mitazona ny tahan'ny sakany sy ny havony tany am-boalohany. Ny <strong>100%</strong> dia mitazona ny refy voalohany.</p>
                        <p>Ny fampihenana ny fanapahana dia afaka mampihena <strong>be</strong> ny haben'ny raki-daza. Raha tsy mila ny fanapahana avo an'ilay sary tany am-boalohany ianao, ity matetika no <strong>fomba mandaitra indrindra</strong> hampihenana ny haben'ny raki-daza.</p>
                        <p>Raha mitovy ny safidy hafa, ary mifototra amin'ny <strong>fanapahana 100%</strong>: ny fanitsiana ho <strong>75%</strong> dia mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>30%</strong>; ny fanitsiana ho <strong>50%</strong> dia mampihena izany eo ho eo amin'ny <strong>65%</strong>; ary ny fanitsiana ho <strong>25%</strong> dia mampihena izany eo ho eo amin'ny <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Endrika Hamoahana",
                    description: <>
                        <p>Fidio ny endrika hamoahana ny sary. Ny endrika samihafa dia samy manana ny tombony sy ny fampiasana azy.</p>
                        <p><strong>Fanerena Mandeha ho Azy</strong>: Ity safidy ity dia mampihatra ho azy paikady fanerena mifanaraka amin'ny endriky ny sary ampidirina:</p>
                        <ul>
                            <li>Ny sary <strong>JPG</strong> dia terena ho <strong>JPG</strong>.</li>
                            <li>Ny sary <strong>PNG</strong> dia terena amin'ny alalan'ny fomba <strong>PNG (misy fatiantoka)</strong>.</li>
                            <li>Ny sary <strong>WebP</strong> dia terena amin'ny alalan'ny fomba <strong>WebP (misy fatiantoka)</strong>.</li>
                            <li>Ny sary <strong>AVIF</strong> dia terena amin'ny alalan'ny fomba <strong>AVIF (misy fatiantoka)</strong>.</li>
                            <li>Ny sary <strong>HEIC</strong> dia avadika ho <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Azonao atao koa ny misafidy tanana endrika iray eto ambany araka izay ilainao. Ity misy torolalana amin'ny antsipiriany momba ny safidy tsirairay:
                        </p>

                        <p>
                            <strong>JPG</strong>: Endri-tsary malaza indrindra, na dia tsy manohana ny mangarahara aza. Raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>, dia afaka mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>90%</strong> izy. Amin'ny kalitao <strong>75</strong>, ny fahaverezan'ny kalitao dia <strong>saika tsy hita maso</strong>. Raha tsy mila lafika mangarahara ianao <strong>(izay zava-misy amin'ny ankamaroan'ny sary)</strong>, ny fanovana ho <strong>JPG</strong> matetika no safidy tsara indrindra.
                        </p>

                        <p>
                            <strong>PNG (misy fatiantoka)</strong>: Manohana ny mangarahara miaraka amin'ny fahaverezan-kalitao kely, mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>70%</strong> raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>. Ity ihany no fidio raha mila lafika mangarahara amin'ny endrika PNG ianao. Raha tsy izany, ny <strong>JPG</strong> dia manome <strong>kalitao tsara kokoa amin'ny habe kely kokoa</strong> (tsy misy mangarahara), ary ny <strong>WebP (misy fatiantoka)</strong> dia manome <strong>kalitao tsara kokoa, habe kely kokoa, ary mangarahara</strong>, ka mahatonga azy ho solony tsara kokoa raha tsy voatery ho PNG ny endrika.
                        </p>

                        <p>
                            <strong>PNG (tsy misy fatiantoka)</strong>: Manohana ny mangarahara tsy misy fahaverezan-kalitao. Mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>20%</strong> raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>. Na izany aza, <strong>raha tsy voatery ho PNG ny endrika</strong>, ny <strong>WebP (tsy misy fatiantoka)</strong> dia safidy tsara kokoa satria manome raki-daza kely kokoa.
                        </p>

                        <p>
                            <strong>WebP (misy fatiantoka)</strong>: Manohana ny mangarahara miaraka amin'ny fahaverezan-kalitao kely. Mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>90%</strong> raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>. Solon'ny <strong>PNG (misy fatiantoka)</strong> tena tsara izy io, manome kalitao tsara kokoa sy habe kely kokoa. Fanamarihana: Ny WebP dia tsy tohanan'ny fitaovana tranainy sasany.
                        </p>

                        <p>
                            <strong>WebP (tsy misy fatiantoka)</strong>: Manohana ny mangarahara tsy misy fahaverezan-kalitao. Mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>50%</strong> raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>, ka mahatonga azy ho solony tsara kokoa noho ny <strong>PNG (tsy misy fatiantoka)</strong>. Fanamarihana: Ny WebP dia tsy tohanan'ny fitaovana tranainy sasany.
                        </p>

                        <p>
                            <strong>AVIF (misy fatiantoka)</strong>: Manohana ny mangarahara miaraka amin'ny fahaverezan-kalitao kely. Amin'ny maha mpandimby ny WebP azy, dia manome tahan'ny fanerena ambony kokoa izy, mampihena ny haben'ny raki-daza eo ho eo amin'ny <strong>94%</strong> raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>. Amin'ny maha endrika farany azy, ny AVIF dia manome kalitao tena tsara amin'ny habe kely dia kely. Na izany aza, mbola voafetra ny fifanarahany amin'ny navigateur sy ny fitaovana. Ity endrika ity dia mety indrindra ho an'ny mpampiasa efa za-draharaha na rehefa azonao antoka fa manohana azy ny fitaovana kendrena.
                        </p>
                        <p>
                            <strong>AVIF (tsy misy fatiantoka)</strong>: Manohana ny mangarahara tsy misy fahaverezan-kalitao. Raha ampitahaina amin'ny <strong>PNG tsy voafintina</strong>, ny fampihenana ny haben'ny raki-daza dia tsy dia lehibe, ary mety hitombo mihitsy aza indraindray. Raha tsy hoe manana filana manokana amin'ny AVIF tsy misy fatiantoka ianao, dia safidy tsara kokoa amin'ny ankapobeny ny <strong>PNG (tsy misy fatiantoka)</strong> na <strong>WebP (tsy misy fatiantoka)</strong>.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Hanova Lohahevitra"
    },
    interactive: {
        store_imageDeletedNotification: "Voafafa: {fileName}",
        store_convertingImagesNotification: "Eo am-panovana sary {number}...",
        store_conversionFailedNotification: "Tsy nahomby ny fanovana: {fileName}",
        store_unsupportedFileTypeNotification: "Endrika tsy tohanana, voafafa: {fileName}",
        store_fileReadErrorNotification: "Tsy afaka novakiana ny raki-daza, voafafa: {fileName}",
        store_reconvertingNotification: "Mamerina manova: {fileName}",
        store_formatOptionAuto: "Fanerena Mandeha ho Azy",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (misy fatiantoka)",
        store_formatOptionPngLossless: "PNG (tsy misy fatiantoka)",
        store_formatOptionWebpLossy: "WebP (misy fatiantoka)",
        store_formatOptionWebpLossless: "WebP (tsy misy fatiantoka)",
        store_formatOptionAvifLossy: "AVIF (misy fatiantoka)",
        store_formatOptionAvifLossless: "AVIF (tsy misy fatiantoka)",
        previewSection_title: "Topimaso sy Fisintonana",
        previewSection_downloadAllButton: "Sintony Daholo",
        previewSection_deleteAllButton: "Fafao Daholo",
        previewSection_placeholder: "Tsy mbola misy sary.",
        previewSection_statusPending: "Miandry",
        previewSection_statusConverting: "Eo am-panovana...",
        previewSection_statusFailed: "Tsy nahomby. Hamelombelomy ny pejy azafady dia andramo indray.",
        previewSection_statusCompleted: "Vita",
        previewSection_noCompletedFilesNotification: "Tsy misy sary vita azo sintonina.",
        previewSection_downloadStartedNotification: "Manomboka misintona raki-daza {fileCount}...",
        previewSection_listEmptyNotification: "Foana ny lisitra.",
        previewSection_allDeletedNotification: "Voafafa daholo ny sary rehetra.",
        previewSection_zipCreationNotification: "Eo am-pamoronana ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Eo am-pamoronana ZIP: Misy sary tsy mbola vita, ka hodinganina.",
        previewSection_zipCreationErrorNotification: "Nisy hadisoana nitranga teo am-pamoronana ny ZIP.",
        previewSection_waitConversionNotification: "Andraso azafady ho vita ny fanovana.",
        previewSection_downloadingFileNotification: "Misintona: {fileName}",
        previewSection_originalSizeLabel: "Habe voalohany:",
        previewSection_convertedSizeLabel: "Habe voaova:",
        previewSection_downloadTitle: "Hisintona",
        previewSection_previewTitle: "Hijery topimaso",
        previewSection_deleteTitle: "Hamafa",
        previewSection_comparisonTab: "Hampitaha",
        previewSection_settingsTab: "Famaritana",
        previewSection_originalImageLabel: "Sary Voalohany",
        previewSection_completedImageLabel: "Sary Voaova",
        previewSection_formatLabel: "Endrika:",
        previewSection_resolutionLabel: "Fanapahana:",
        previewSection_viewLargerButton: "Jereo amin'ny takelaka vaovao",
        previewSection_qualityLabel: "Kalitaon'ny Fanerena",
        previewSection_sizeLabel: "Fanitsiana ny Fanapahana",
        previewSection_outputFormatLabel: "Endrika Hamoahana",
        previewSection_reconvertButton: "Avereno ovaina ity sary ity",
        globalControls_qualityLabel: "Kalitaon'ny Fanerena Ankapobeny",
        globalControls_sizeLabel: "Fanitsiana ny Fanapahana Ankapobeny",
        globalControls_formatLabel: "Endrika Hamoahana Ankapobeny",
        globalControls_reconvertAllButton: "Ampiharo ary Avereno Ovaina Daholo",
        globalControls_restoreDefaultsButton: "Avereno ny Safidy Fototra",
        globalControls_noImagesNotification: "Mampidira sary aloha azafady.",
        globalControls_reconvertingAllNotification: "Mamerina manova ny sary {imageCount} rehetra amin'ny alalan'ny famaritana ankapobeny",
        globalControls_restoredNotification: "Voaverina amin'ny laoniny ny safidy.",
        addSection_title: "Hanampy Sary",
        addArea_dragDropTitle: "Tariho ary apetraho eto ny sary",
        addArea_supportedFormats: "Manohana endrika JPG, PNG, WebP, AVIF, ary HEIC",
        addArea_selectButton: "Hifidy Sary",
        addArea_tips: "*Afaka manampy sary maro indray mandeha",
        ui_viewExplanationTitle: "Fantaro misimisy momba ireo safidy ireo",
    }
};

export default mg;