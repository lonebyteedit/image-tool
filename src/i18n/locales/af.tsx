import type { Translation } from './en.tsx';

const af: Translation = {
    static: {
        index_lang: 'af',
        index_dir: 'ltr',
        index_title: "Image Tool - Gevorderde Beeldomskakelingsinstrument",
        index_description: "'n Gratis, professionele aanlyn hulpmiddel vir beeldkompressie, grootteverandering en formaat-omskakeling. Dit ondersteun wedersydse omskakeling tussen JPG, PNG, WebP en AVIF, en kan HEIC na hierdie formate omskakel. Alle verwerking gebeur plaaslik in jou blaaier—jou lêers word nooit opgelaai nie, wat volledige privaatheid en datasekuriteit verseker.",
        optionsExplanation: {
            title: "Opsiegids",
            subtitle: "Verstaan die funksie en gebruik van elke opsie om jou beeldomskakelingsresultate te optimeer.",
            options: [
                {
                    id: "quality-option",
                    title: "Kompressiekwaliteit",
                    description: <>
                        <p>Hierdie opsie is slegs van toepassing wanneer die teikenformaat <strong>JPG</strong>, <strong>WebP (Met verlies)</strong>, of <strong>AVIF (Met verlies)</strong> is.</p>
                        <p>'n Laer waarde skep 'n kleiner lêer, maar verminder die beeldkwaliteit. Die aanbevole waarde van <strong>75</strong> bied 'n goeie balans tussen lêergrootte en kwaliteit.</p>
                        <p>Indien die lêer steeds te groot is na kompressie, probeer om die resolusie te verminder, wat dikwels meer effektief is om die lêergrootte te verklein.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Resolusie-aanpassing",
                    description: <>
                        <p>Verminder die beeldresolusie met 'n persentasie terwyl die oorspronklike aspekverhouding behou word. <strong>100%</strong> behou die oorspronklike afmetings.</p>
                        <p>Die vermindering van die resolusie kan die lêergrootte <strong>aansienlik</strong> verminder. As jy nie die oorspronklike se hoë resolusie benodig nie, is dit dikwels die <strong>mees effektiewe manier</strong> om die lêer kleiner te maak.</p>
                        <p>Met ander opsies dieselfde, gebaseer op <strong>100% resolusie</strong>. 'n Aanpassing na <strong>75% resolusie</strong> verminder die lêergrootte met 'n gemiddeld van <strong>30%</strong>; 'n aanpassing na <strong>50% resolusie</strong> verminder dit met 'n gemiddeld van <strong>65%</strong>; en 'n aanpassing na <strong>25% resolusie</strong> verminder dit met 'n gemiddeld van <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Uitvoerformaat",
                    description: <>
                        <p>Kies die uitvoerformaat vir die beeld. Verskillende formate het hul eie voordele en gebruiksgevalle.</p>
                        <p><strong>Outo-kompressie</strong>: Hierdie opsie pas outomaties 'n geskikte kompressiestrategie toe gebaseer op die invoerformaat:</p>
                        <ul>
                            <li><strong>JPG</strong>-invoere word as <strong>JPG</strong> saamgepers.</li>
                            <li><strong>PNG</strong>-invoere word saamgepers met die <strong>PNG (Met verlies)</strong> metode.</li>
                            <li><strong>WebP</strong>-invoere word saamgepers met die <strong>WebP (Met verlies)</strong> metode.</li>
                            <li><strong>AVIF</strong>-invoere word saamgepers met die <strong>AVIF (Met verlies)</strong> metode.</li>
                            <li><strong>HEIC</strong>-invoere word omgeskakel na <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Jy kan ook handmatig 'n formaat hieronder kies op grond van jou spesifieke behoeftes. Hier is 'n gedetailleerde gids vir elke opsie:
                        </p>

                        <p>
                            <strong>JPG</strong>: Die gewildste beeldformaat, hoewel dit nie deursigtigheid ondersteun nie. In vergelyking met 'n <strong>ongekomprimeerde PNG</strong>, kan dit die lêergrootte met 'n gemiddeld van <strong>90%</strong> verminder. By 'n kwaliteitsinstelling van <strong>75</strong>, is die kwaliteitsverlies dikwels <strong>byna onmerkbaar</strong>. As jy nie 'n deursigtige agtergrond nodig het nie <strong>(wat vir die meeste foto's die geval is)</strong>, is omskakeling na <strong>JPG</strong> gewoonlik die beste keuse.
                        </p>

                        <p>
                            <strong>PNG (Met verlies)</strong>: Ondersteun deursigtigheid met 'n mate van kwaliteitsverlies, en verminder die lêergrootte met 'n gemiddeld van <strong>70%</strong> in vergelyking met 'n <strong>ongekomprimeerde PNG</strong>. Kies dit slegs as jy 'n deursigtige agtergrond in die PNG-formaat benodig. Andersins bied <strong>JPG</strong> <strong>beter kwaliteit vir 'n kleiner grootte</strong> (sonder deursigtigheid), en <strong>WebP (Met verlies)</strong> bied <strong>beter kwaliteit, kleiner grootte, en deursigtigheid</strong>, wat dit 'n beter alternatief maak as die PNG-formaat nie 'n streng vereiste is nie.
                        </p>

                        <p>
                            <strong>PNG (Sonder verlies)</strong>: Ondersteun deursigtigheid sonder enige kwaliteitsverlies. Dit verminder die lêergrootte met 'n gemiddeld van <strong>20%</strong> in vergelyking met 'n <strong>ongekomprimeerde PNG</strong>. As die <strong>PNG-formaat egter nie 'n streng vereiste is nie</strong>, is <strong>WebP (Sonder verlies)</strong> 'n beter keuse aangesien dit kleiner lêergroottes bied.
                        </p>

                        <p>
                            <strong>WebP (Met verlies)</strong>: Ondersteun deursigtigheid met geringe kwaliteitsverlies. Dit verminder die lêergrootte met 'n gemiddeld van <strong>90%</strong> in vergelyking met 'n <strong>ongekomprimeerde PNG</strong>. Dit is 'n uitstekende vervanging vir <strong>PNG (Met verlies)</strong>, en bied beter kwaliteit en kleiner groottes. Let wel: WebP word nie op sommige ouer toestelle ondersteun nie.
                        </p>

                        <p>
                            <strong>WebP (Sonder verlies)</strong>: Ondersteun deursigtigheid sonder enige kwaliteitsverlies. Dit verminder die lêergrootte met 'n gemiddeld van <strong>50%</strong> in vergelyking met 'n <strong>ongekomprimeerde PNG</strong>, wat dit 'n beter vervanging vir <strong>PNG (Sonder verlies)</strong> maak. Let wel: WebP word nie op sommige ouer toestelle ondersteun nie.
                        </p>

                        <p>
                            <strong>AVIF (Met verlies)</strong>: Ondersteun deursigtigheid met geringe kwaliteitsverlies. As die opvolger van WebP, bied dit 'n selfs hoër kompressiekoers, wat die lêergrootte met 'n gemiddeld van <strong>94%</strong> verminder in vergelyking met <strong>ongekomprimeerde PNG</strong>. As 'n vooruitstrewende formaat, bied AVIF uitstekende kwaliteit teen baie klein lêergroottes. Die versoenbaarheid met blaaiers en toestelle is egter nog beperk. Hierdie formaat is die beste vir gevorderde gebruikers of wanneer jy seker is dat die teikentoestelle dit ondersteun.
                        </p>
                        <p>
                            <strong>AVIF (Sonder verlies)</strong>: Ondersteun deursigtigheid sonder kwaliteitsverlies. In vergelyking met 'n <strong>ongekomprimeerde PNG</strong>, is die lêergrootte-vermindering nie beduidend nie, en in sommige gevalle kan dit selfs toeneem. Tensy jy 'n spesifieke behoefte het vir verlieslose AVIF, is <strong>PNG (Sonder verlies)</strong> of <strong>WebP (Sonder verlies)</strong> oor die algemeen beter opsies.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Wissel Tema"
    },
    interactive: {
        store_imageDeletedNotification: "Verwyder: {fileName}",
        store_convertingImagesNotification: "Besig om {number} beelde om te skakel...",
        store_conversionFailedNotification: "Omskakeling het misluk: {fileName}",
        store_unsupportedFileTypeNotification: "Onondersteunde formaat, verwyder: {fileName}",
        store_fileReadErrorNotification: "Kon nie lêer lees nie, verwyder: {fileName}",
        store_reconvertingNotification: "Besig om weer om te skakel: {fileName}",
        store_formatOptionAuto: "Outo-kompressie",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Met verlies)",
        store_formatOptionPngLossless: "PNG (Sonder verlies)",
        store_formatOptionWebpLossy: "WebP (Met verlies)",
        store_formatOptionWebpLossless: "WebP (Sonder verlies)",
        store_formatOptionAvifLossy: "AVIF (Met verlies)",
        store_formatOptionAvifLossless: "AVIF (Sonder verlies)",
        previewSection_title: "Voorskou en Aflaai",
        previewSection_downloadAllButton: "Laai Alles Af",
        previewSection_deleteAllButton: "Vee Alles Uit",
        previewSection_placeholder: "Nog geen beelde nie.",
        previewSection_statusPending: "Wagtend",
        previewSection_statusConverting: "Besig om om te skakel...",
        previewSection_statusFailed: "Misluk. Verfris asseblief die bladsy en probeer weer.",
        previewSection_statusCompleted: "Voltooi",
        previewSection_noCompletedFilesNotification: "Geen voltooide beelde om af te laai nie.",
        previewSection_downloadStartedNotification: "Begin aflaai van {fileCount} lêers...",
        previewSection_listEmptyNotification: "Die lys is leeg.",
        previewSection_allDeletedNotification: "Alle beelde is verwyder.",
        previewSection_zipCreationNotification: "Besig om ZIP te skep...",
        previewSection_zipCreationWithSkipsNotification: "Besig om ZIP te skep: Sommige beelde is onvoltooid en sal oorgeslaan word.",
        previewSection_zipCreationErrorNotification: "'n Fout het voorgekom tydens die skep van die ZIP.",
        previewSection_waitConversionNotification: "Wag asseblief vir die omskakeling om te voltooi.",
        previewSection_downloadingFileNotification: "Laai af: {fileName}",
        previewSection_originalSizeLabel: "Oorspronklike grootte:",
        previewSection_convertedSizeLabel: "Omgeskakelde grootte:",
        previewSection_downloadTitle: "Laai af",
        previewSection_previewTitle: "Voorskou",
        previewSection_deleteTitle: "Vee uit",
        previewSection_comparisonTab: "Vergelyk",
        previewSection_settingsTab: "Instellings",
        previewSection_originalImageLabel: "Oorspronklike Beeld",
        previewSection_completedImageLabel: "Omgeskakelde Beeld",
        previewSection_formatLabel: "Formaat:",
        previewSection_resolutionLabel: "Resolusie:",
        previewSection_viewLargerButton: "Bekyk in Nuwe Oortjie",
        previewSection_qualityLabel: "Kompressiekwaliteit",
        previewSection_sizeLabel: "Resolusie-aanpassing",
        previewSection_outputFormatLabel: "Uitvoerformaat",
        previewSection_reconvertButton: "Skakel weer om",
        globalControls_qualityLabel: "Globale Kompressiekwaliteit",
        globalControls_sizeLabel: "Globale Resolusie-aanpassing",
        globalControls_formatLabel: "Globale Uitvoerformaat",
        globalControls_reconvertAllButton: "Pas Toe en Skakel Alles Weer Om",
        globalControls_restoreDefaultsButton: "Herstel Opsies",
        globalControls_noImagesNotification: "Voeg asseblief eers beelde by.",
        globalControls_reconvertingAllNotification: "Besig om al {imageCount} beelde met globale instellings weer om te skakel",
        globalControls_restoredNotification: "Opsies is na verstekwaardes herstel.",
        addSection_title: "Voeg Beelde By",
        addArea_dragDropTitle: "Sleep en los beelde hier",
        addArea_supportedFormats: "Ondersteun JPG, PNG, WebP, AVIF en HEIC",
        addArea_selectButton: "Kies Beelde",
        addArea_tips: "*Jy kan veelvuldige beelde op een slag byvoeg.",
        ui_viewExplanationTitle: "Lees meer oor hierdie opsies",
    }
};

export default af;