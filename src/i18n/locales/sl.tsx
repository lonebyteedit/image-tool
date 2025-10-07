import type { Translation } from './en.tsx';

const sl: Translation = {
    static: {
        index_lang: 'sl',
        index_dir: 'ltr',
        index_title: "Image Tool - Napredno orodje za pretvorbo slik",
        index_description: "Brezplačno, profesionalno spletno orodje za stiskanje slik, spreminjanje velikosti in pretvorbo formatov. Podpira medsebojno pretvorbo med formati JPG, PNG, WebP in AVIF ter lahko pretvori HEIC v te formate. Vsa obdelava poteka lokalno v vašem brskalniku — vaše datoteke se nikoli ne naložijo na strežnik, kar zagotavlja popolno zasebnost in varnost podatkov.",
        optionsExplanation: {
            title: "Vodič po možnostih",
            subtitle: "Spoznajte delovanje in uporabo vsake možnosti za optimizacijo rezultatov pretvorbe slik.",
            options: [
                {
                    id: "quality-option",
                    title: "Kakovost stiskanja",
                    description: <>
                        <p>Ta možnost velja samo, ko je ciljni format <strong>JPG</strong>, <strong>WebP (z izgubo)</strong> ali <strong>AVIF (z izgubo)</strong>.</p>
                        <p>Nižja vrednost ustvari manjšo datoteko, vendar zmanjša kakovost slike. Priporočena vrednost <strong>75</strong> ponuja dobro ravnovesje med velikostjo datoteke in kakovostjo.</p>
                        <p>Če je datoteka po stiskanju še vedno prevelika, poskusite zmanjšati ločljivost, kar je pogosto učinkovitejše za zmanjšanje velikosti datoteke.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Prilagoditev ločljivosti",
                    description: <>
                        <p>Zmanjšajte ločljivost slike za določen odstotek, hkrati pa ohranite izvirno razmerje stranic. <strong>100%</strong> ohrani izvirne dimenzije.</p>
                        <p>Zmanjšanje ločljivosti lahko <strong>znatno</strong> zmanjša velikost datoteke. Če ne potrebujete visoke ločljivosti izvirnika, je to pogosto <strong>najučinkovitejši način</strong> za zmanjšanje datoteke.</p>
                        <p>Pri enakih ostalih možnostih, glede na <strong>100% ločljivost</strong>: prilagoditev na <strong>75% ločljivost</strong> zmanjša velikost datoteke v povprečju za <strong>30%</strong>; prilagoditev na <strong>50% ločljivost</strong> jo zmanjša v povprečju za <strong>65%</strong>; prilagoditev na <strong>25% ločljivost</strong> pa jo zmanjša v povprečju za <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Izhodni format",
                    description: <>
                        <p>Izberite izhodni format za sliko. Različni formati imajo svoje prednosti in primere uporabe.</p>
                        <p><strong>Samodejno stiskanje</strong>: Ta možnost samodejno uporabi primerno strategijo stiskanja glede na vhodni format:</p>
                        <ul>
                            <li>Vhodne slike <strong>JPG</strong> se stisnejo kot <strong>JPG</strong>.</li>
                            <li>Vhodne slike <strong>PNG</strong> se stisnejo z metodo <strong>PNG (z izgubo)</strong>.</li>
                            <li>Vhodne slike <strong>WebP</strong> se stisnejo z metodo <strong>WebP (z izgubo)</strong>.</li>
                            <li>Vhodne slike <strong>AVIF</strong> se stisnejo z metodo <strong>AVIF (z izgubo)</strong>.</li>
                            <li>Vhodne slike <strong>HEIC</strong> se pretvorijo v <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Spodaj lahko glede na svoje potrebe ročno izberete format. Sledi podroben vodnik za vsako možnost:
                        </p>

                        <p>
                            <strong>JPG</strong>: Najbolj priljubljen slikovni format, čeprav ne podpira prosojnosti. V primerjavi z <strong>nestisnjenim PNG</strong> lahko zmanjša velikost datoteke v povprečju za <strong>90%</strong>. Pri nastavitvi kakovosti na <strong>75</strong> je izguba kakovosti pogosto <strong>skoraj nezaznavna</strong>. Če ne potrebujete prosojnega ozadja <strong>(kar velja za večino fotografij)</strong>, je pretvorba v <strong>JPG</strong> običajno najboljša izbira.
                        </p>

                        <p>
                            <strong>PNG (z izgubo)</strong>: Podpira prosojnost z nekaj izgube kakovosti, kar zmanjša velikost datoteke v povprečju za <strong>70%</strong> v primerjavi z <strong>nestisnjenim PNG</strong>. Izberite to možnost samo, če potrebujete prosojno ozadje v formatu PNG. Sicer pa <strong>JPG</strong> ponuja <strong>boljšo kakovost pri manjši velikosti</strong> (brez prosojnosti), <strong>WebP (z izgubo)</strong> pa <strong>boljšo kakovost, manjšo velikost in prosojnost</strong>, zaradi česar je boljša alternativa, če format PNG ni stroga zahteva.
                        </p>

                        <p>
                            <strong>PNG (brez izgube)</strong>: Podpira prosojnost brez izgube kakovosti. Zmanjša velikost datoteke v povprečju za <strong>20%</strong> v primerjavi z <strong>nestisnjenim PNG</strong>. Vendar pa je, <strong>če format PNG ni stroga zahteva</strong>, <strong>WebP (brez izgube)</strong> boljša izbira, saj ponuja manjše datoteke.
                        </p>

                        <p>
                            <strong>WebP (z izgubo)</strong>: Podpira prosojnost z rahlo izgubo kakovosti. Zmanjša velikost datoteke v povprečju za <strong>90%</strong> v primerjavi z <strong>nestisnjenim PNG</strong>. Je odlična zamenjava za <strong>PNG (z izgubo)</strong>, saj ponuja boljšo kakovost in manjšo velikost. Opomba: WebP ni podprt na nekaterih starejših napravah.
                        </p>

                        <p>
                            <strong>WebP (brez izgube)</strong>: Podpira prosojnost brez izgube kakovosti. Zmanjša velikost datoteke v povprečju za <strong>50%</strong> v primerjavi z <strong>nestisnjenim PNG</strong>, zaradi česar je boljša zamenjava za <strong>PNG (brez izgube)</strong>. Opomba: WebP ni podprt na nekaterih starejših napravah.
                        </p>

                        <p>
                            <strong>AVIF (z izgubo)</strong>: Podpira prosojnost z rahlo izgubo kakovosti. Kot naslednik formata WebP ponuja še višjo stopnjo stiskanja in zmanjša velikost datoteke v povprečju za <strong>94%</strong> v primerjavi z <strong>nestisnjenim PNG</strong>. Kot najnovejši format AVIF zagotavlja odlično kakovost pri zelo majhnih velikostih datotek. Vendar pa je združljivost z brskalniki in napravami še vedno omejena. Ta format je najboljši za napredne uporabnike ali kadar ste prepričani, da ga ciljne naprave podpirajo.
                        </p>
                        <p>
                            <strong>AVIF (brez izgube)</strong>: Podpira prosojnost brez izgube kakovosti. V primerjavi z <strong>nestisnjenim PNG</strong> zmanjšanje velikosti datoteke ni znatno, v nekaterih primerih pa se lahko celo poveča. Če nimate posebne potrebe po formatu AVIF brez izgube, sta <strong>PNG (brez izgube)</strong> ali <strong>WebP (brez izgube)</strong> na splošno boljši možnosti.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Preklopi temo"
    },
    interactive: {
        store_imageDeletedNotification: "Odstranjeno: {fileName}",
        store_convertingImagesNotification: "Pretvarjanje {number} slik...",
        store_conversionFailedNotification: "Pretvorba ni uspela: {fileName}",
        store_unsupportedFileTypeNotification: "Nepodprt format, odstranjeno: {fileName}",
        store_fileReadErrorNotification: "Datoteke ni mogoče prebrati, odstranjeno: {fileName}",
        store_reconvertingNotification: "Ponovno pretvarjanje: {fileName}",
        store_formatOptionAuto: "Samodejno stiskanje",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (z izgubo)",
        store_formatOptionPngLossless: "PNG (brez izgube)",
        store_formatOptionWebpLossy: "WebP (z izgubo)",
        store_formatOptionWebpLossless: "WebP (brez izgube)",
        store_formatOptionAvifLossy: "AVIF (z izgubo)",
        store_formatOptionAvifLossless: "AVIF (brez izgube)",
        previewSection_title: "Predogled in prenos",
        previewSection_downloadAllButton: "Prenesi vse",
        previewSection_deleteAllButton: "Izbriši vse",
        previewSection_placeholder: "Slik še ni.",
        previewSection_statusPending: "Čaka",
        previewSection_statusConverting: "Pretvarjanje...",
        previewSection_statusFailed: "Neuspešno. Osvežite stran in poskusite znova.",
        previewSection_statusCompleted: "Končano",
        previewSection_noCompletedFilesNotification: "Ni končanih slik za prenos.",
        previewSection_downloadStartedNotification: "Začenja se prenos {fileCount} datotek...",
        previewSection_listEmptyNotification: "Seznam je prazen.",
        previewSection_allDeletedNotification: "Vse slike so bile odstranjene.",
        previewSection_zipCreationNotification: "Ustvarjanje ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Ustvarjanje ZIP: Nekatere slike so nedokončane in bodo preskočene.",
        previewSection_zipCreationErrorNotification: "Pri ustvarjanju ZIP je prišlo do napake.",
        previewSection_waitConversionNotification: "Počakajte, da se pretvorba konča.",
        previewSection_downloadingFileNotification: "Prenašanje: {fileName}",
        previewSection_originalSizeLabel: "Izvirna velikost:",
        previewSection_convertedSizeLabel: "Pretvorjena velikost:",
        previewSection_downloadTitle: "Prenesi",
        previewSection_previewTitle: "Predogled",
        previewSection_deleteTitle: "Izbriši",
        previewSection_comparisonTab: "Primerjava",
        previewSection_settingsTab: "Nastavitve",
        previewSection_originalImageLabel: "Izvirna slika",
        previewSection_completedImageLabel: "Pretvorjena slika",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Ločljivost:",
        previewSection_viewLargerButton: "Odpri v novem zavihku",
        previewSection_qualityLabel: "Kakovost stiskanja",
        previewSection_sizeLabel: "Prilagoditev ločljivosti",
        previewSection_outputFormatLabel: "Izhodni format",
        previewSection_reconvertButton: "Ponovno pretvori",
        globalControls_qualityLabel: "Globalna kakovost stiskanja",
        globalControls_sizeLabel: "Globalna prilagoditev ločljivosti",
        globalControls_formatLabel: "Globalni izhodni format",
        globalControls_reconvertAllButton: "Uporabi in ponovno pretvori vse",
        globalControls_restoreDefaultsButton: "Ponastavi možnosti",
        globalControls_noImagesNotification: "Najprej dodajte slike.",
        globalControls_reconvertingAllNotification: "Ponovno pretvarjanje vseh {imageCount} slik z globalnimi nastavitvami.",
        globalControls_restoredNotification: "Možnosti so bile ponastavljene na privzete vrednosti.",
        addSection_title: "Dodaj slike",
        addArea_dragDropTitle: "Povlecite in spustite slike sem",
        addArea_supportedFormats: "Podpira formate JPG, PNG, WebP, AVIF in HEIC",
        addArea_selectButton: "Izberi slike",
        addArea_tips: "*Naenkrat lahko dodate več slik.",
        ui_viewExplanationTitle: "Spoznajte te možnosti",
    }
};

export default sl;