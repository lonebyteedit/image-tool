import type { Translation } from './en.tsx';

const wo: Translation = {
    static: {
        index_lang: 'wo',
        index_dir: 'ltr',
        index_title: "Image Tool - Jumtukaay bu Xóot ngir Soppi Nataal yi",
        index_description: "Jumtukaay xarala bu nekk ci internet te njot la, ngir wàññi dayoo nataal yi, soppi seen tolluwaay, ak soppi seen formaa. Dafay nangu ñu di soppante diggante JPG, PNG, WebP, ak AVIF, te mën na soppi HEIC itam jëme ko ci yii formaa. Lépp lu mu def, ci sa nosukaay la koy defe — fii mu nekk, sa nataal duñu ko yóbbu fënn ci server, liy waral sa kumpa am kaaraange gu mat sëkk.",
        optionsExplanation: {
            title: "Gindiku ci Tànneef yi",
            subtitle: "Xamalaatal sa bopp solo ak ni ñuy jëfandikoo tànneef bu nekk, ngir gënal sa njëriñ li ngay am ci soppi nataal yi.",
            options: [
                {
                    id: "quality-option",
                    title: "Waatug Wàññi Dayoo",
                    description: <>
                        <p>Tànneef bii, dafay jëf rek su fekkee formaa bu mujj bi di <strong>JPG</strong>, <strong>WebP (bu am ñàkk)</strong>, walla <strong>AVIF (bu am ñàkk)</strong>.</p>
                        <p>Su lim bi wàññikoo, dayoo bi day gën a tuuti, waaye waatug nataal bi day wàññiku. Lim bi ñu gën a digle mooy <strong>75</strong>, ndaxte dafay joxe ab tolluwaay bu baax diggante dayoo ak waatu.</p>
                        <p>Su fekkee dayoo bi dafa gën a réy, jéemal wàññi tolluwaayu nataal bi, ndaxte loolu moo gën a gaaw ci wàññi dayoo bi.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Coppiteg Tolluwaay",
                    description: <>
                        <p>Wàññil tolluwaayu nataal bi ci téeméer, mu topp na mu meloon. <strong>100%</strong> day tekki bàyyi tolluwaay bu njëkk bi.</p>
                        <p>Wàññi tolluwaay bi, mën na wàññi dayoo bi <strong>ci anam gu fés</strong>. Su fekkee soxlawoo tolluwaay bu réy, lii mooy <strong>pexe mu gën a am solo</strong> ngir wàññi dayoo bi.</p>
                        <p>Su tànneef yépp desee noonu, te ñu jël <strong>100% tolluwaay</strong> làmboo. Su ñu ko teggee ci <strong>75% tolluwaay</strong>, dayoo bi day wàññiku lu toll ci <strong>30%</strong>; su ñu ko teggee ci <strong>50% tolluwaay</strong>, day wàññiku lu toll ci <strong>65%</strong>; su ñu ko teggee ci <strong>25% tolluwaay</strong>, day wàññiku lu toll ci <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formaa bu Mujj",
                    description: <>
                        <p>Tànnal formaa bi nga bëgg nataal bi génnee. Formaa bu nekk am na ay njëriñam ak fumu gën a jaadu.</p>
                        <p><strong>Wàññi Dayoo Automatik</strong>: Tànneef bii, day jël pexe bu mu gën a jàpp ci nataal bi nga joxe:</p>
                        <ul>
                            <li>Su nataal bi nekkee <strong>JPG</strong>, <strong>JPG</strong> la koy wàññee.</li>
                            <li>Su nataal bi nekkee <strong>PNG</strong>, <strong>PNG (bu am ñàkk)</strong> la koy wàññee.</li>
                            <li>Su nataal bi nekkee <strong>WebP</strong>, <strong>WebP (bu am ñàkk)</strong> la koy wàññee.</li>
                            <li>Su nataal bi nekkee <strong>AVIF</strong>, <strong>AVIF (bu am ñàkk)</strong> la koy wàññee.</li>
                            <li>Su nataal bi nekkee <strong>HEIC</strong>, <strong>JPG</strong> la koy soppi.</li>
                        </ul>

                        <p>
                            Mën nga tànn itam sa bopp formaa bi nga bëgg. Lii mooy tekki tànneef bu nekk:
                        </p>

                        <p>
                            <strong>JPG</strong>: Mooy formaa bi ñu gën a jëfandikoo, waaye nanguwul lenn (transparence). Bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>, mën na wàññi dayoo bi lu tollu ci <strong>90%</strong>. Ci waatu <strong>75</strong>, ñàkk gi <strong>kenn du ko gis</strong>. Su fekkee soxlawoo lenn <strong>(li ëpp ci nataal yi)</strong>, soppi ko <strong>JPG</strong> mooy tànneef bi gën.
                        </p>

                        <p>
                            <strong>PNG (bu am ñàkk)</strong>: Dafa nangu lenn te am tuuti ñàkk ci waatu. Day wàññi dayoo bi lu tollu ci <strong>70%</strong> bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>. Tànnal ko rek su fekkee dafa la laaj nga am lenn te ci formaa PNG. Su dul loolu, <strong>JPG</strong> moo gën a <strong>ame waatu te dayoo bi tuuti</strong> (waaye amul lenn), walla <strong>WebP (bu am ñàkk)</strong> moo gën a <strong>ame waatu, gën a tuuti, te am lenn</strong>, looloo tax mu gën su fekkee PNG sart la ci yaw.
                        </p>

                        <p>
                            <strong>PNG (bu amul ñàkk)</strong>: Dafa nangu lenn te amul benn ñàkk ci waatu. Day wàññi dayoo bi lu tollu ci <strong>20%</strong> bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>. Waaye, su fekkee <strong>formaa PNG sartul</strong>, <strong>WebP (bu amul ñàkk)</strong> moo gën ndaxte dayoo bi moo gën a tuuti.
                        </p>

                        <p>
                            <strong>WebP (bu am ñàkk)</strong>: Dafa nangu lenn te am tuuti ñàkk ci waatu. Day wàññi dayoo bi lu tollu ci <strong>90%</strong> bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>. Wuutula bu baax <strong>PNG (bu am ñàkk)</strong>, ndaxte waatu bi gën na te dayoo bi tuuti na. Fàttalikul ne am na ay nosukaay yu yàgg yu nanguwul WebP.
                        </p>

                        <p>
                            <strong>WebP (bu amul ñàkk)</strong>: Dafa nangu lenn te amul benn ñàkk ci waatu. Day wàññi dayoo bi lu tollu ci <strong>50%</strong> bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>, looloo tax mu gën <strong>PNG (bu amul ñàkk)</strong>. Fàttalikul ne am na ay nosukaay yu yàgg yu nanguwul WebP.
                        </p>

                        <p>
                            <strong>AVIF (bu am ñàkk)</strong>: Dafa nangu lenn te am tuuti ñàkk ci waatu. Donnu na WebP te moo ko gën a fete kaw ci wàññi dayoo. Day wàññi dayoo bi lu tollu ci <strong>94%</strong> bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>. AVIF, di formaa bu bees te xarala, joxe na waatu gu kawe ak dayoo bu tuuti lool. Waaye, nosukaay ak browser yu bare nanguwuñu ko leegi. Formaa bii moo gën ci ñi xam mbir mi walla su dee xam nga ne jumtukaay yi mu jëm mën nañu ko jëfandikoo.
                        </p>
                        <p>
                            <strong>AVIF (bu amul ñàkk)</strong>: Dafa nangu lenn te amul benn ñàkk ci waatu. Bu ñu ko méngalee ak <strong>PNG bu ñu wàññul dayoom</strong>, wàññi gi mu ciy def bariwul, am na sax yenn saa yi dayoo bi di yokku. Lu dul soxla bu leer, <strong>PNG (bu amul ñàkk)</strong> walla <strong>WebP (bu amul ñàkk)</strong> ñoo gën.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Soppi Melokaan"
    },
    interactive: {
        store_imageDeletedNotification: "Nataal bi lañ fi jële: {fileName}",
        store_convertingImagesNotification: "Ñu ngi soppi {number} nataal...",
        store_conversionFailedNotification: "Soppi gi jàllul ci nataal bii: {fileName}",
        store_unsupportedFileTypeNotification: "Formaa bi nanguwuñu ko, nataal bi lañ fi jële: {fileName}",
        store_fileReadErrorNotification: "Mënuñoo jàng nataal bi, lañ fi jële: {fileName}",
        store_reconvertingNotification: "Defaraat soppi bi: {fileName}",
        store_formatOptionAuto: "Wàññi Dayoo Automatik",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (bu am ñàkk)",
        store_formatOptionPngLossless: "PNG (bu amul ñàkk)",
        store_formatOptionWebpLossy: "WebP (bu am ñàkk)",
        store_formatOptionWebpLossless: "WebP (bu amul ñàkk)",
        store_formatOptionAvifLossy: "AVIF (bu am ñàkk)",
        store_formatOptionAvifLossless: "AVIF (bu amul ñàkk)",
        previewSection_title: "Wone te Yebbi",
        previewSection_downloadAllButton: "Yebbi Lépp",
        previewSection_deleteAllButton: "Far Lépp",
        previewSection_placeholder: "Amoonagul nataal.",
        previewSection_statusPending: "Xaar na",
        previewSection_statusConverting: "Ci biir soppi...",
        previewSection_statusFailed: "Jàllul. Defaraatal xët wi te jéemaat.",
        previewSection_statusCompleted: "Noppi na",
        previewSection_noCompletedFilesNotification: "Amul nataal bu noppi ngir ñu yebbi ko.",
        previewSection_downloadStartedNotification: "Dinañu tàmbali di yebbi {fileCount} nataal...",
        previewSection_listEmptyNotification: "Lim bi neen na.",
        previewSection_allDeletedNotification: "Far nañu nataal yépp.",
        previewSection_zipCreationNotification: "Ñu ngi defar ZIP bi...",
        previewSection_zipCreationWithSkipsNotification: "Ñu ngi defar ZIP bi: Am na ay nataal yu noppi gul, te dinañu leen raw.",
        previewSection_zipCreationErrorNotification: "Am na lu jàllul bi ñuy defar ZIP bi.",
        previewSection_waitConversionNotification: "Xaaral ba soppi gi jeex.",
        previewSection_downloadingFileNotification: "Yebbi gi tàmbali na: {fileName}",
        previewSection_originalSizeLabel: "Dayoo bu njëkk:",
        previewSection_convertedSizeLabel: "Dayoo bu bees:",
        previewSection_downloadTitle: "Yebbi",
        previewSection_previewTitle: "Wone",
        previewSection_deleteTitle: "Far",
        previewSection_comparisonTab: "Méngale",
        previewSection_settingsTab: "Réglage",
        previewSection_originalImageLabel: "Nataal bu Njëkk",
        previewSection_completedImageLabel: "Nataal bi ñu Soppi",
        previewSection_formatLabel: "Formaa:",
        previewSection_resolutionLabel: "Tolluwaay:",
        previewSection_viewLargerButton: "Ubbil ci beneen kontar",
        previewSection_qualityLabel: "Waatug Wàññi Dayoo",
        previewSection_sizeLabel: "Coppiteg Tolluwaay",
        previewSection_outputFormatLabel: "Formaa bu Mujj",
        previewSection_reconvertButton: "Soppiaat Nataal bii",
        globalControls_qualityLabel: "Waatug Wàññi Dayoo bu bees",
        globalControls_sizeLabel: "Coppiteg Tolluwaay gu bees",
        globalControls_formatLabel: "Formaa bu Mujj bu bees",
        globalControls_reconvertAllButton: "Jëfandikoo te Soppi Lépp",
        globalControls_restoreDefaultsButton: "Dellu ci réglage bu njëkk",
        globalControls_noImagesNotification: "Joxeel ay nataal njëkk.",
        globalControls_reconvertingAllNotification: "Ñu ngi soppiaat {imageCount} nataal yépp ak réglage yu bees yi",
        globalControls_restoredNotification: "Réglage yi dellu nañu ni mu meloon.",
        addSection_title: "Yokkal ay Nataal",
        addArea_dragDropTitle: "Fi ngay samp te bàyyi nataal yi",
        addArea_supportedFormats: "Dafa nangu JPG, PNG, WebP, AVIF, ak HEIC",
        addArea_selectButton: "Tànn Nataal yi",
        addArea_tips: "*Mën nga yokk ay nataal yu bare ci benn yoon",
        ui_viewExplanationTitle: "Xamalaatal sa bopp ci tànneef yii",
    }
};

export default wo;