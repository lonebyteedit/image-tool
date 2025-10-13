import type { Translation } from './en.tsx';

const tk: Translation = {
    static: {
        index_lang: 'tk',
        index_dir: 'ltr',
        index_title: "Image Tool - Ösen surat öwüriji gural",
        index_description: "Suratlary gysmak, ölçegini üýtgetmek we formatyny öwürmek üçin mugt, professional onlaýn gural. JPG, PNG, WebP we AVIF arasynda özara öwürmäni goldaýar we HEIC formatyny bu formatlara öwrüp bilýär. Ähli amallar brauzeriňizde ýerli ýerine ýetirilýär — faýllaryňyz hiç haçan serwere ýüklenilmeýär, bu bolsa doly gizlinligi we maglumat howpsuzlygyny üpjün edýär.",
        optionsExplanation: {
            title: "Opsiýalar boýunça gollanma",
            subtitle: "Surat öwürme netijeleriňizi optimizirlemek üçin her bir opsiýanyň funksiýasyna we ulanylyşyna düşüniň.",
            options: [
                {
                    id: "quality-option",
                    title: "Gysma hili",
                    description: <>
                        <p>Bu opsiýa diňe maksat formaty <strong>JPG</strong>, <strong>WebP (ýitgili)</strong> ýa-da <strong>AVIF (ýitgili)</strong> bolanda ulanylýar.</p>
                        <p>Pes baha has kiçi faýl döredýär, ýöne surat hilini peseldýär. Maslahat berilýän <strong>75</strong> bahasy faýl ölçegi bilen hil arasynda gowy deňagramlylygy üpjün edýär.</p>
                        <p>Eger faýl gysylandan soň hem aşa uly bolsa, durulygyny peseltmäge synanyşyň, bu köplenç faýl ölçegini kiçeltmek üçin has netijelidir.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Durulygyny sazlamak",
                    description: <>
                        <p>Asyl tarap gatnaşygyny saklap, surat durulygyny göterimde azaldyň. <strong>100%</strong> asyl ölçegleri saklaýar.</p>
                        <p>Durulygy azaltmak faýl ölçegini <strong>ep-esli</strong> derejede azaldyp biler. Eger asyl suratyň ýokary durulygyna mätäç bolmasaňyz, bu köplenç faýly kiçeltmegiň <strong>iň netijeli usulydyr</strong>.</p>
                        <p>Beýleki opsiýalar birmeňzeş bolanda, <strong>100% durulyk</strong> esasynda: <strong>75% durulyga</strong> sazlamak faýl ölçegini ortaça <strong>30%</strong>; <strong>50% durulyga</strong> sazlamak ortaça <strong>65%</strong>; <strong>25% durulyga</strong> sazlamak bolsa ortaça <strong>88%</strong> azaldýar.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Çykyş formaty",
                    description: <>
                        <p>Surat üçin çykyş formatyny saýlaň. Dürli formatlaryň öz artykmaçlyklary we ulanylyş ýerleri bar.</p>
                        <p><strong>Awtomatiki gysmak</strong>: Bu opsiýa giriş formatyna baglylykda laýyk gysma strategiýasyny awtomatiki ulanar:</p>
                        <ul>
                            <li><strong>JPG</strong> girişleri <strong>JPG</strong> hökmünde gysylýar.</li>
                            <li><strong>PNG</strong> girişleri <strong>PNG (ýitgili)</strong> usuly bilen gysylýar.</li>
                            <li><strong>WebP</strong> girişleri <strong>WebP (ýitgili)</strong> usuly bilen gysylýar.</li>
                            <li><strong>AVIF</strong> girişleri <strong>AVIF (ýitgili)</strong> usuly bilen gysylýar.</li>
                            <li><strong>HEIC</strong> girişleri <strong>JPG</strong> formatyna öwrülýär.</li>
                        </ul>

                        <p>
                            Şeýle hem, öz islegleriňize görä aşakdan formaty el bilen saýlap bilersiňiz. Ine, her bir opsiýa üçin jikme-jik gollanma:
                        </p>

                        <p>
                            <strong>JPG</strong>: Iň meşhur surat formaty, ýöne aýdyňlygy (transparency) goldamaýar. <strong>Gysylmadyk PNG</strong> bilen deňeşdirilende, faýl ölçegini ortaça <strong>90%</strong> azaldyp biler. <strong>75</strong> hil derejesinde hil ýitgisi köplenç <strong>duýulmaýar</strong>. Eger aýdyň fona mätäç bolmasaňyz <strong>(suratlaryň köpüsi üçin bu dogry)</strong>, <strong>JPG</strong> formatyna öwürmek adatça iň gowy saýlawdyr.
                        </p>

                        <p>
                            <strong>PNG (ýitgili)</strong>: Belli bir hil ýitgisi bilen aýdyňlygy goldaýar, faýl ölçegini <strong>gysylmadyk PNG</strong> bilen deňeşdirilende ortaça <strong>70%</strong> azaldýar. Diňe PNG formatynda aýdyň fona mätäç bolsaňyz, muny saýlaň. Bolmasa, <strong>JPG</strong> <strong>has kiçi ölçegde has gowy hili</strong> (aýdyňlyksyz) hödürleýär, <strong>WebP (ýitgili)</strong> bolsa <strong>has gowy hil, has kiçi ölçeg we aýdyňlyk</strong> üpjün edýär, bu bolsa PNG formaty berk talap däl bolsa, ony has gowy alternatiwa öwürýär.
                        </p>

                        <p>
                            <strong>PNG (ýitgisiz)</strong>: Hil ýitgisiz aýdyňlygy goldaýar. <strong>Gysylmadyk PNG</strong> bilen deňeşdirilende faýl ölçegini ortaça <strong>20%</strong> azaldýar. Emma, <strong>eger PNG formaty hökmany talap däl bolsa</strong>, <strong>WebP (ýitgisiz)</strong> has kiçi faýl ölçeglerini hödürleýändigi üçin has gowy saýlawdyr.
                        </p>

                        <p>
                            <strong>WebP (ýitgili)</strong>: Cüzi hil ýitgisi bilen aýdyňlygy goldaýar. <strong>Gysylmadyk PNG</strong> bilen deňeşdirilende faýl ölçegini ortaça <strong>90%</strong> azaldýar. Has gowy hil we has kiçi ölçegleri hödürleýändigi üçin <strong>PNG (ýitgili)</strong> formatynyň ajaýyp ornuny tutujysydyr. Bellik: WebP käbir köne enjamlarda goldanmaýar.
                        </p>

                        <p>
                            <strong>WebP (ýitgisiz)</strong>: Hil ýitgisiz aýdyňlygy goldaýar. <strong>Gysylmadyk PNG</strong> bilen deňeşdirilende faýl ölçegini ortaça <strong>50%</strong> azaldýar, bu bolsa ony <strong>PNG (ýitgisiz)</strong> formatynyň has gowy ornuny tutujysy edýär. Bellik: WebP käbir köne enjamlarda goldanmaýar.
                        </p>

                        <p>
                            <strong>AVIF (ýitgili)</strong>: Cüzi hil ýitgisi bilen aýdyňlygy goldaýar. WebP-iň mirasdüşeri hökmünde has ýokary gysma derejesini hödürleýär we <strong>gysylmadyk PNG</strong> bilen deňeşdirilende faýl ölçegini ortaça <strong>94%</strong> azaldýar. Öňdebaryjy format hökmünde AVIF örän kiçi faýl ölçeglerinde ajaýyp hili üpjün edýär. Emma, brauzer we enjam gabat gelmegi henizem çäklidir. Bu format ösen ulanyjylar üçin ýa-da maksatly enjamlaryň ony goldaýandygyna ynamly bolsaňyz iň gowusydyr.
                        </p>
                        <p>
                            <strong>AVIF (ýitgisiz)</strong>: Hil ýitgisiz aýdyňlygy goldaýar. <strong>Gysylmadyk PNG</strong> bilen deňeşdirilende faýl ölçeginiň azalmagy ep-esli däl, käbir ýagdaýlarda hatda artyp hem biler. Eger ýitgisiz AVIF üçin aýratyn zerurlygyňyz bolmasa, <strong>PNG (ýitgisiz)</strong> ýa-da <strong>WebP (ýitgisiz)</strong> adatça has gowy opsiýalardyr.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Temany çalyşmak"
    },
    interactive: {
        store_imageDeletedNotification: "Aýryldy: {fileName}",
        store_convertingImagesNotification: "{number} sany surat öwrülýär...",
        store_conversionFailedNotification: "Öwürmek şowsuz boldy: {fileName}",
        store_unsupportedFileTypeNotification: "Goldanmaýan format, aýryldy: {fileName}",
        store_fileReadErrorNotification: "Faýly okap bolmady, aýryldy: {fileName}",
        store_reconvertingNotification: "Gaýtadan öwrülýär: {fileName}",
        store_formatOptionAuto: "Awtomatiki gysmak",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (ýitgili)",
        store_formatOptionPngLossless: "PNG (ýitgisiz)",
        store_formatOptionWebpLossy: "WebP (ýitgili)",
        store_formatOptionWebpLossless: "WebP (ýitgisiz)",
        store_formatOptionAvifLossy: "AVIF (ýitgili)",
        store_formatOptionAvifLossless: "AVIF (ýitgisiz)",
        previewSection_title: "Öňünden görmek we ýükläp almak",
        previewSection_downloadAllButton: "Ählisini ýükläp almak",
        previewSection_deleteAllButton: "Ählisini pozmak",
        previewSection_placeholder: "Entek surat ýok.",
        previewSection_statusPending: "Garaşylýar",
        previewSection_statusConverting: "Öwrülýär...",
        previewSection_statusFailed: "Şowsuz boldy. Sahypany täzeläp, gaýtadan synanyşyň.",
        previewSection_statusCompleted: "Tamamlandy",
        previewSection_noCompletedFilesNotification: "Ýükläp almak üçin tamamlanan surat ýok.",
        previewSection_downloadStartedNotification: "{fileCount} sany faýly ýükläp almak başlandy...",
        previewSection_listEmptyNotification: "Sanaw boş.",
        previewSection_allDeletedNotification: "Ähli suratlar aýryldy.",
        previewSection_zipCreationNotification: "ZIP döredilýär...",
        previewSection_zipCreationWithSkipsNotification: "ZIP döredilýär: Käbir suratlar tamamlanmadyk, şonuň üçin olar geçiriler.",
        previewSection_zipCreationErrorNotification: "ZIP döredilende ýalňyşlyk ýüze çykdy.",
        previewSection_waitConversionNotification: "Öwürme tamamlanýança garaşmagyňyzy haýyş edýäris.",
        previewSection_downloadingFileNotification: "Ýüklenilýär: {fileName}",
        previewSection_originalSizeLabel: "Asyl ölçegi:",
        previewSection_convertedSizeLabel: "Öwrülen ölçegi:",
        previewSection_downloadTitle: "Ýükläp al",
        previewSection_previewTitle: "Öňünden gör",
        previewSection_deleteTitle: "Poz",
        previewSection_comparisonTab: "Deňeşdir",
        previewSection_settingsTab: "Sazlamalar",
        previewSection_originalImageLabel: "Asyl surat",
        previewSection_completedImageLabel: "Öwrülen surat",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Durulyk:",
        previewSection_viewLargerButton: "Täze goýumda aç",
        previewSection_qualityLabel: "Gysma hili",
        previewSection_sizeLabel: "Durulygyny sazlamak",
        previewSection_outputFormatLabel: "Çykyş formaty",
        previewSection_reconvertButton: "Gaýtadan öwür",
        globalControls_qualityLabel: "Umumy gysma hili",
        globalControls_sizeLabel: "Umumy durulygyny sazlamak",
        globalControls_formatLabel: "Umumy çykyş formaty",
        globalControls_reconvertAllButton: "Ulan we ählisini gaýtadan öwür",
        globalControls_restoreDefaultsButton: "Deslapky sazlamalary dikeltmek",
        globalControls_noImagesNotification: "Ilki surat goşmagyňyzy haýyş edýäris.",
        globalControls_reconvertingAllNotification: "Ähli {imageCount} sany surat umumy sazlamalar bilen gaýtadan öwrülýär",
        globalControls_restoredNotification: "Opsiýalar deslapky ýagdaýyna getirildi.",
        addSection_title: "Suratlary goşmak",
        addArea_dragDropTitle: "Suratlary şu ýere süýräp goýuň",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF we HEIC formatlary goldanýar",
        addArea_selectButton: "Suratlary saýlaň",
        addArea_tips: "*Bir gezekde birnäçe surat goşup bolýar.",
        ui_viewExplanationTitle: "Bu opsiýalar barada bilmek",
    }
};

export default tk;