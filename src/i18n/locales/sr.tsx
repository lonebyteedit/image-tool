import type { Translation } from './en.tsx';

const sr: Translation = {
    static: {
        index_lang: 'sr',
        index_dir: 'ltr',
        index_title: "Image Tool - Napredni alat za konverziju slika",
        index_description: "Besplatan, profesionalni onlajn alat za kompresiju, promenu veličine i konverziju formata slika. Podržava međusobnu konverziju između JPG, PNG, WebP i AVIF formata, i može konvertovati HEIC u ove formate. Sva obrada se dešava lokalno u vašem pregledaču — vaši fajlovi se nikada ne otpremaju, čime se osigurava potpuna privatnost i bezbednost podataka.",
        optionsExplanation: {
            title: "Vodič kroz opcije",
            subtitle: "Razumejte funkciju i upotrebu svake opcije kako biste optimizovali rezultate konverzije slika.",
            options: [
                {
                    id: "quality-option",
                    title: "Kvalitet kompresije",
                    description: <>
                        <p>Ova opcija važi samo kada je ciljni format <strong>JPG</strong>, <strong>WebP (sa gubicima)</strong> ili <strong>AVIF (sa gubicima)</strong>.</p>
                        <p>Niža vrednost kreira manji fajl, ali smanjuje kvalitet slike. Preporučena vrednost od <strong>75</strong> nudi dobar balans između veličine fajla i kvaliteta.</p>
                        <p>Ako je fajl i dalje prevelik nakon kompresije, pokušajte da smanjite rezoluciju, što je često efikasnije za smanjenje veličine fajla.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Podešavanje rezolucije",
                    description: <>
                        <p>Smanjite rezoluciju slike procentualno, uz očuvanje originalnog odnosa stranica. <strong>100%</strong> zadržava originalne dimenzije.</p>
                        <p>Smanjenje rezolucije može <strong>značajno</strong> smanjiti veličinu fajla. Ako vam nije potrebna visoka rezolucija originala, ovo je često <strong>najefikasniji način</strong> da smanjite fajl.</p>
                        <p>Uz iste ostale opcije, a na osnovu <strong>100% rezolucije</strong>: podešavanje na <strong>75% rezolucije</strong> smanjuje veličinu fajla u proseku za <strong>30%</strong>; podešavanje na <strong>50% rezolucije</strong> smanjuje je u proseku za <strong>65%</strong>; a podešavanje na <strong>25% rezolucije</strong> smanjuje je u proseku za <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Izlazni format",
                    description: <>
                        <p>Izaberite izlazni format za sliku. Različiti formati imaju svoje prednosti i slučajeve upotrebe.</p>
                        <p><strong>Automatska kompresija</strong>: Ova opcija automatski primenjuje odgovarajuću strategiju kompresije na osnovu ulaznog formata:</p>
                        <ul>
                            <li>Slike u <strong>JPG</strong> formatu se komprimuju kao <strong>JPG</strong>.</li>
                            <li>Slike u <strong>PNG</strong> formatu se komprimuju metodom <strong>PNG (sa gubicima)</strong>.</li>
                            <li>Slike u <strong>WebP</strong> formatu se komprimuju metodom <strong>WebP (sa gubicima)</strong>.</li>
                            <li>Slike u <strong>AVIF</strong> formatu se komprimuju metodom <strong>AVIF (sa gubicima)</strong>.</li>
                            <li>Slike u <strong>HEIC</strong> formatu se konvertuju u <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Takođe možete ručno izabrati format ispod na osnovu vaših specifičnih potreba. Evo detaljnog vodiča za svaku opciju:
                        </p>

                        <p>
                            <strong>JPG</strong>: Najpopularniji format za slike, iako ne podržava transparentnost. U poređenju sa <strong>nekomprimovanim PNG-om</strong>, može smanjiti veličinu fajla u proseku za <strong>90%</strong>. Pri podešavanju kvaliteta na <strong>75</strong>, gubitak kvaliteta je često <strong>neprimetan</strong>. Ako vam nije potrebna transparentna pozadina <strong>(što važi za većinu fotografija)</strong>, konverzija u <strong>JPG</strong> je obično najbolji izbor.
                        </p>

                        <p>
                            <strong>PNG (sa gubicima)</strong>: Podržava transparentnost uz određeni gubitak kvaliteta, smanjujući veličinu fajla u proseku za <strong>70%</strong> u poređenju sa <strong>nekomprimovanim PNG-om</strong>. Izaberite ovo samo ako vam je potrebna transparentna pozadina u PNG formatu. U suprotnom, <strong>JPG</strong> nudi <strong>bolji kvalitet za manju veličinu</strong> (bez transparentnosti), a <strong>WebP (sa gubicima)</strong> pruža <strong>bolji kvalitet, manju veličinu i transparentnost</strong>, što ga čini superiornom alternativom ako PNG format nije strogi zahtev.
                        </p>

                        <p>
                            <strong>PNG (bez gubitaka)</strong>: Podržava transparentnost bez gubitka kvaliteta. Smanjuje veličinu fajla u proseku za <strong>20%</strong> u poređenju sa <strong>nekomprimovanim PNG-om</strong>. Međutim, <strong>ako PNG format nije strogi zahtev</strong>, <strong>WebP (bez gubitaka)</strong> je bolji izbor jer nudi manju veličinu fajla.
                        </p>

                        <p>
                            <strong>WebP (sa gubicima)</strong>: Podržava transparentnost uz blagi gubitak kvaliteta. Smanjuje veličinu fajla u proseku za <strong>90%</strong> u poređenju sa <strong>nekomprimovanim PNG-om</strong>. Odlična je zamena za <strong>PNG (sa gubicima)</strong>, nudeći bolji kvalitet i manju veličinu. Napomena: WebP nije podržan na nekim starijim uređajima.
                        </p>

                        <p>
                            <strong>WebP (bez gubitaka)</strong>: Podržava transparentnost bez gubitka kvaliteta. Smanjuje veličinu fajla u proseku za <strong>50%</strong> u poređenju sa <strong>nekomprimovanim PNG-om</strong>, što ga čini superiornom zamenom za <strong>PNG (bez gubitaka)</strong>. Napomena: WebP nije podržan na nekim starijim uređajima.
                        </p>

                        <p>
                            <strong>AVIF (sa gubicima)</strong>: Podržava transparentnost uz blagi gubitak kvaliteta. Kao naslednik WebP-a, nudi još višu stopu kompresije, smanjujući veličinu fajla u proseku za <strong>94%</strong> u poređenju sa <strong>nekomprimovanim PNG-om</strong>. Kao najsavremeniji format, AVIF pruža odličan kvalitet pri veoma malim veličinama fajlova. Međutim, kompatibilnost sa pregledačima i uređajima je još uvek ograničena. Ovaj format je najbolji za napredne korisnike ili kada ste sigurni da ga ciljni uređaji podržavaju.
                        </p>
                        <p>
                            <strong>AVIF (bez gubitaka)</strong>: Podržava transparentnost bez gubitka kvaliteta. U poređenju sa <strong>nekomprimovanim PNG-om</strong>, smanjenje veličine fajla nije značajno, a u nekim slučajevima se može čak i povećati. Osim ako nemate specifičnu potrebu za AVIF-om bez gubitaka, <strong>PNG (bez gubitaka)</strong> ili <strong>WebP (bez gubitaka)</strong> su generalno bolje opcije.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Promeni temu"
    },
    interactive: {
        store_imageDeletedNotification: "Uklonjeno: {fileName}",
        store_convertingImagesNotification: "Konvertuje se {number} slika...",
        store_conversionFailedNotification: "Konverzija nije uspela: {fileName}",
        store_unsupportedFileTypeNotification: "Nepodržan format, uklonjeno: {fileName}",
        store_fileReadErrorNotification: "Čitanje fajla nije uspelo, uklonjeno: {fileName}",
        store_reconvertingNotification: "Ponovna konverzija: {fileName}",
        store_formatOptionAuto: "Automatska kompresija",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (sa gubicima)",
        store_formatOptionPngLossless: "PNG (bez gubitaka)",
        store_formatOptionWebpLossy: "WebP (sa gubicima)",
        store_formatOptionWebpLossless: "WebP (bez gubitaka)",
        store_formatOptionAvifLossy: "AVIF (sa gubicima)",
        store_formatOptionAvifLossless: "AVIF (bez gubitaka)",
        previewSection_title: "Pregled i preuzimanje",
        previewSection_downloadAllButton: "Preuzmi sve",
        previewSection_deleteAllButton: "Obriši sve",
        previewSection_placeholder: "Još uvek nema slika.",
        previewSection_statusPending: "Na čekanju",
        previewSection_statusConverting: "Konvertuje se...",
        previewSection_statusFailed: "Neuspešno. Osvežite stranicu i pokušajte ponovo.",
        previewSection_statusCompleted: "Završeno",
        previewSection_noCompletedFilesNotification: "Nema završenih slika za preuzimanje.",
        previewSection_downloadStartedNotification: "Počinje preuzimanje {fileCount} fajlova...",
        previewSection_listEmptyNotification: "Lista je prazna.",
        previewSection_allDeletedNotification: "Sve slike su uklonjene.",
        previewSection_zipCreationNotification: "Kreira se ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Kreira se ZIP: Neke slike su nezavršene i biće preskočene.",
        previewSection_zipCreationErrorNotification: "Došlo je do greške prilikom kreiranja ZIP-a.",
        previewSection_waitConversionNotification: "Molimo sačekajte da se konverzija završi.",
        previewSection_downloadingFileNotification: "Preuzimanje: {fileName}",
        previewSection_originalSizeLabel: "Originalna veličina:",
        previewSection_convertedSizeLabel: "Konvertovana veličina:",
        previewSection_downloadTitle: "Preuzmi",
        previewSection_previewTitle: "Pregledaj",
        previewSection_deleteTitle: "Obriši",
        previewSection_comparisonTab: "Uporedi",
        previewSection_settingsTab: "Podešavanja",
        previewSection_originalImageLabel: "Originalna slika",
        previewSection_completedImageLabel: "Konvertovana slika",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Rezolucija:",
        previewSection_viewLargerButton: "Prikaži u novoj kartici",
        previewSection_qualityLabel: "Kvalitet kompresije",
        previewSection_sizeLabel: "Podešavanje rezolucije",
        previewSection_outputFormatLabel: "Izlazni format",
        previewSection_reconvertButton: "Ponovo konvertuj",
        globalControls_qualityLabel: "Globalni kvalitet kompresije",
        globalControls_sizeLabel: "Globalno podešavanje rezolucije",
        globalControls_formatLabel: "Globalni izlazni format",
        globalControls_reconvertAllButton: "Primeni i konvertuj sve",
        globalControls_restoreDefaultsButton: "Resetuj opcije",
        globalControls_noImagesNotification: "Molimo, prvo dodajte slike.",
        globalControls_reconvertingAllNotification: "Ponovo konvertujem svih {imageCount} slika sa globalnim podešavanjima.",
        globalControls_restoredNotification: "Opcije su vraćene na podrazumevane vrednosti.",
        addSection_title: "Dodavanje slika",
        addArea_dragDropTitle: "Prevucite i otpustite slike ovde",
        addArea_supportedFormats: "Podržava JPG, PNG, WebP, AVIF i HEIC formate",
        addArea_selectButton: "Izaberite slike",
        addArea_tips: "*Možete dodati više slika odjednom.",
        ui_viewExplanationTitle: "Saznajte više o ovim opcijama",
    }
};

export default sr;