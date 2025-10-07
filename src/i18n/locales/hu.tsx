import type { Translation } from './en.tsx';

const hu: Translation = {
    static: {
        index_lang: 'hu',
        index_dir: 'ltr',
        index_title: "Image Tool - Fejlett képkonvertáló eszköz",
        index_description: "Egy ingyenes, professzionális online eszköz képek tömörítésére, átméretezésére és formátumkonverziójára. Támogatja a JPG, PNG, WebP és AVIF formátumok közötti kölcsönös átalakítást, és képes a HEIC formátumot ezekre átalakítani. Minden feldolgozás helyben, a böngészőjében történik — a fájljai soha nem kerülnek feltöltésre, teljes adatvédelmet és biztonságot garantálva.",
        optionsExplanation: {
            title: "Opciók útmutatója",
            subtitle: "Ismerje meg az egyes opciók funkcióját és használatát a képkonverziós eredmények optimalizálása érdekében.",
            options: [
                {
                    id: "quality-option",
                    title: "Tömörítési minőség",
                    description: <>
                        <p>Ez az opció csak akkor érvényes, ha a célformátum <strong>JPG</strong>, <strong>WebP (Veszteséges)</strong> vagy <strong>AVIF (Veszteséges)</strong>.</p>
                        <p>Az alacsonyabb érték kisebb fájlt eredményez, de csökkenti a képminőséget. Az ajánlott <strong>75</strong>-ös érték jó egyensúlyt kínál a fájlméret és a minőség között.</p>
                        <p>Ha a fájl a tömörítés után is túl nagy, próbálja csökkenteni a felbontást, ami gyakran hatékonyabb a fájlméret csökkentésére.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Felbontás beállítása",
                    description: <>
                        <p>Csökkentse a kép felbontását százalékosan, az eredeti képarány megtartása mellett. A <strong>100%</strong> az eredeti méretet jelenti.</p>
                        <p>A felbontás csökkentése <strong>jelentősen</strong> csökkentheti a fájlméretet. Ha nincs szüksége az eredeti nagy felbontásra, ez gyakran a <strong>leghatékonyabb módja</strong> a fájl kisebbítésének.</p>
                        <p>Azonos egyéb opciók mellett, <strong>100%-os felbontáshoz</strong> képest: A <strong>75%-os felbontásra</strong> állítás átlagosan <strong>30%-kal</strong> csökkenti a fájlméretet; az <strong>50%-os felbontás</strong> átlagosan <strong>65%-kal</strong>; a <strong>25%-os felbontás</strong> pedig átlagosan <strong>88%-kal</strong> csökkenti azt.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Kimeneti formátum",
                    description: <>
                        <p>Válassza ki a kép kimeneti formátumát. A különböző formátumoknak megvannak a maguk előnyei és felhasználási területei.</p>
                        <p><strong>Automatikus tömörítés</strong>: Ez az opció a bemeneti formátum alapján automatikusan megfelelő tömörítési stratégiát alkalmaz:</p>
                        <ul>
                            <li>A <strong>JPG</strong> bemeneteket <strong>JPG</strong>-ként tömöríti.</li>
                            <li>A <strong>PNG</strong> bemeneteket a <strong>PNG (Veszteséges)</strong> módszerrel tömöríti.</li>
                            <li>A <strong>WebP</strong> bemeneteket a <strong>WebP (Veszteséges)</strong> módszerrel tömöríti.</li>
                            <li>Az <strong>AVIF</strong> bemeneteket az <strong>AVIF (Veszteséges)</strong> módszerrel tömöríti.</li>
                            <li>A <strong>HEIC</strong> bemeneteket <strong>JPG</strong> formátumra konvertálja.</li>
                        </ul>

                        <p>
                            Az alábbiakban manuálisan is kiválaszthat egy formátumot az igényeinek megfelelően. Itt található egy részletes útmutató minden opcióhoz:
                        </p>

                        <p>
                            <strong>JPG</strong>: A legnépszerűbb képformátum, bár nem támogatja az átlátszóságot. Egy <strong>tömörítetlen PNG-ről</strong> konvertálva átlagosan <strong>90%-kal</strong> csökkentheti a fájlméretet. <strong>75</strong>-ös minőségi beállításnál a minőségromlás gyakran <strong>szinte észrevehetetlen</strong>. Ha nincs szüksége átlátszó háttérre <strong>(ami a legtöbb fotó esetében igaz)</strong>, a <strong>JPG</strong>-re való konvertálás általában a legjobb választás.
                        </p>

                        <p>
                            <strong>PNG (Veszteséges)</strong>: Támogatja az átlátszóságot némi minőségromlás mellett, a fájlméretet átlagosan <strong>70%-kal</strong> csökkenti egy <strong>tömörítetlen PNG</strong>-hez képest. Csak akkor válassza, ha átlátszó háttérre van szüksége PNG formátumban. Ellenkező esetben a <strong>JPG</strong> <strong>jobb minőséget kínál kisebb méretben</strong> (átlátszóság nélkül), a <strong>WebP (Veszteséges)</strong> pedig <strong>jobb minőséget, kisebb méretet és átlátszóságot</strong> biztosít, ami kiváló alternatívává teszi, ha a PNG formátum nem szigorú követelmény.
                        </p>

                        <p>
                            <strong>PNG (Veszteségmentes)</strong>: Támogatja az átlátszóságot minőségromlás nélkül. A fájlméretet átlagosan <strong>20%-kal</strong> csökkenti egy <strong>tömörítetlen PNG</strong>-hez képest. Azonban, <strong>ha a PNG formátum nem szigorú követelmény</strong>, a <strong>WebP (Veszteségmentes)</strong> jobb választás, mivel kisebb fájlméretet kínál.
                        </p>

                        <p>
                            <strong>WebP (Veszteséges)</strong>: Támogatja az átlátszóságot csekély minőségromlás mellett. A fájlméretet átlagosan <strong>90%-kal</strong> csökkenti egy <strong>tömörítetlen PNG</strong>-hez képest. Kiválóan helyettesíti a <strong>PNG (Veszteséges)</strong> formátumot, jobb minőséget és kisebb méretet kínálva. Megjegyzés: A WebP formátumot néhány régebbi eszköz nem támogatja.
                        </p>

                        <p>
                            <strong>WebP (Veszteségmentes)</strong>: Támogatja az átlátszóságot minőségromlás nélkül. A fájlméretet átlagosan <strong>50%-kal</strong> csökkenti egy <strong>tömörítetlen PNG</strong>-hez képest, így kiválóan helyettesíti a <strong>PNG (Veszteségmentes)</strong> formátumot. Megjegyzés: A WebP formátumot néhány régebbi eszköz nem támogatja.
                        </p>

                        <p>
                            <strong>AVIF (Veszteséges)</strong>: Támogatja az átlátszóságot csekély minőségromlás mellett. A WebP utódjaként még magasabb tömörítési arányt kínál, a fájlméretet átlagosan <strong>94%-kal</strong> csökkenti a <strong>tömörítetlen PNG</strong>-hez képest. Élvonalbeli formátumként az AVIF kiváló minőséget biztosít nagyon kis fájlméret mellett. A böngésző- és eszközkompatibilitása azonban még korlátozott. Ez a formátum haladó felhasználóknak ajánlott, vagy ha biztos benne, hogy a céleszközök támogatják.
                        </p>
                        <p>
                            <strong>AVIF (Veszteségmentes)</strong>: Támogatja az átlátszóságot minőségromlás nélkül. Egy <strong>tömörítetlen PNG</strong>-hez képest a fájlméret-csökkenés nem jelentős, sőt, egyes esetekben akár növekedhet is. Hacsak nincs különleges igénye a veszteségmentes AVIF-ra, a <strong>PNG (Veszteségmentes)</strong> vagy a <strong>WebP (Veszteségmentes)</strong> általában jobb választás.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Téma váltása"
    },
    interactive: {
        store_imageDeletedNotification: "Törölve: {fileName}",
        store_convertingImagesNotification: "{number} kép konvertálása folyamatban...",
        store_conversionFailedNotification: "A konvertálás sikertelen: {fileName}",
        store_unsupportedFileTypeNotification: "Nem támogatott formátum, eltávolítva: {fileName}",
        store_fileReadErrorNotification: "A fájl olvasása sikertelen, eltávolítva: {fileName}",
        store_reconvertingNotification: "Újrakonvertálás: {fileName}",
        store_formatOptionAuto: "Automatikus tömörítés",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Veszteséges)",
        store_formatOptionPngLossless: "PNG (Veszteségmentes)",
        store_formatOptionWebpLossy: "WebP (Veszteséges)",
        store_formatOptionWebpLossless: "WebP (Veszteségmentes)",
        store_formatOptionAvifLossy: "AVIF (Veszteséges)",
        store_formatOptionAvifLossless: "AVIF (Veszteségmentes)",
        previewSection_title: "Előnézet és letöltés",
        previewSection_downloadAllButton: "Összes letöltése",
        previewSection_deleteAllButton: "Összes törlése",
        previewSection_placeholder: "Még nincsenek képek.",
        previewSection_statusPending: "Függőben",
        previewSection_statusConverting: "Konvertálás...",
        previewSection_statusFailed: "Sikertelen. Kérjük, frissítse az oldalt, és próbálja újra.",
        previewSection_statusCompleted: "Befejezve",
        previewSection_noCompletedFilesNotification: "Nincsenek letölthető, befejezett képek.",
        previewSection_downloadStartedNotification: "{fileCount} fájl letöltése megkezdődik...",
        previewSection_listEmptyNotification: "A lista üres.",
        previewSection_allDeletedNotification: "Az összes kép eltávolítva.",
        previewSection_zipCreationNotification: "ZIP készítése...",
        previewSection_zipCreationWithSkipsNotification: "ZIP készítése: Egyes képek befejezetlenek, ezért kihagyásra kerülnek.",
        previewSection_zipCreationErrorNotification: "Hiba történt a ZIP készítése során.",
        previewSection_waitConversionNotification: "Kérjük, várja meg a konvertálás befejezését.",
        previewSection_downloadingFileNotification: "Letöltés: {fileName}",
        previewSection_originalSizeLabel: "Eredeti méret:",
        previewSection_convertedSizeLabel: "Konvertált méret:",
        previewSection_downloadTitle: "Letöltés",
        previewSection_previewTitle: "Előnézet",
        previewSection_deleteTitle: "Törlés",
        previewSection_comparisonTab: "Összehasonlítás",
        previewSection_settingsTab: "Beállítások",
        previewSection_originalImageLabel: "Eredeti kép",
        previewSection_completedImageLabel: "Konvertált kép",
        previewSection_formatLabel: "Formátum:",
        previewSection_resolutionLabel: "Felbontás:",
        previewSection_viewLargerButton: "Megtekintés új lapon",
        previewSection_qualityLabel: "Tömörítési minőség",
        previewSection_sizeLabel: "Felbontás beállítása",
        previewSection_outputFormatLabel: "Kimeneti formátum",
        previewSection_reconvertButton: "Újrakonvertálás",
        globalControls_qualityLabel: "Globális tömörítési minőség",
        globalControls_sizeLabel: "Globális felbontás beállítása",
        globalControls_formatLabel: "Globális kimeneti formátum",
        globalControls_reconvertAllButton: "Alkalmazás és az összes újrakonvertálása",
        globalControls_restoreDefaultsButton: "Alapértelmezett beállítások visszaállítása",
        globalControls_noImagesNotification: "Kérjük, először adjon hozzá képeket.",
        globalControls_reconvertingAllNotification: "Az összes ({imageCount}) kép újrakonvertálása a globális beállításokkal",
        globalControls_restoredNotification: "Az opciók visszaálltak az alapértelmezett értékekre.",
        addSection_title: "Képek hozzáadása",
        addArea_dragDropTitle: "Húzza ide a képeket",
        addArea_supportedFormats: "Támogatott formátumok: JPG, PNG, WebP, AVIF és HEIC",
        addArea_selectButton: "Képek kiválasztása",
        addArea_tips: "*Egyszerre több kép is hozzáadható.",
        ui_viewExplanationTitle: "Tudjon meg többet ezekről az opciókról",
    }
};

export default hu;