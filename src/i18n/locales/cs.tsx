import type { Translation } from './en.tsx';

const cs: Translation = {
    static: {
        index_lang: 'cs',
        index_dir: 'ltr',
        index_title: "Image Tool - Pokročilý nástroj pro převod obrázků",
        index_description: "Bezplatný a profesionální online nástroj pro kompresi, změnu velikosti a převod formátů obrázků. Podporuje vzájemný převod mezi formáty JPG, PNG, WebP a AVIF a dokáže převést HEIC do těchto formátů. Veškeré zpracování probíhá lokálně ve vašem prohlížeči – vaše soubory se nikdy nenahrávají na server, což zaručuje naprosté soukromí a bezpečnost dat.",
        optionsExplanation: {
            title: "Průvodce nastavením",
            subtitle: "Pochopte funkci a použití každé možnosti pro optimalizaci výsledků převodu obrázků.",
            options: [
                {
                    id: "quality-option",
                    title: "Kvalita komprese",
                    description: <>
                        <p>Tato možnost se uplatní pouze tehdy, když je cílový formát <strong>JPG</strong>, <strong>WebP (ztrátová)</strong> nebo <strong>AVIF (ztrátová)</strong>.</p>
                        <p>Nižší hodnota vytvoří menší soubor, ale sníží kvalitu obrazu. Doporučená hodnota <strong>75</strong> nabízí dobrou rovnováhu mezi velikostí souboru a kvalitou.</p>
                        <p>Pokud je soubor po kompresi stále příliš velký, zkuste snížit rozlišení, což je často efektivnější způsob zmenšení velikosti souboru.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Úprava rozlišení",
                    description: <>
                        <p>Zmenšete rozlišení obrázku o procento při zachování původního poměru stran. <strong>100 %</strong> zachovává původní rozměry.</p>
                        <p>Snížení rozlišení může <strong>výrazně</strong> zmenšit velikost souboru. Pokud nepotřebujete původní vysoké rozlišení, je to často <strong>nejefektivnější způsob</strong>, jak soubor zmenšit.</p>
                        <p>Při zachování ostatních možností a na základě <strong>100% rozlišení</strong>: úprava na <strong>75% rozlišení</strong> zmenší velikost souboru v průměru o <strong>30 %</strong>; úprava na <strong>50% rozlišení</strong> ji zmenší v průměru o <strong>65 %</strong>; a úprava na <strong>25% rozlišení</strong> ji zmenší v průměru o <strong>88 %</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Výstupní formát",
                    description: <>
                        <p>Zvolte výstupní formát obrázku. Každý formát má své vlastní výhody a případy použití.</p>
                        <p><strong>Automatická komprese</strong>: Tato možnost použije vhodnou strategii komprese na základě vstupního formátu:</p>
                        <ul>
                            <li>Vstupy ve formátu <strong>JPG</strong> se komprimují jako <strong>JPG</strong>.</li>
                            <li>Vstupy ve formátu <strong>PNG</strong> se komprimují metodou <strong>PNG (ztrátová)</strong>.</li>
                            <li>Vstupy ve formátu <strong>WebP</strong> se komprimují metodou <strong>WebP (ztrátová)</strong>.</li>
                            <li>Vstupy ve formátu <strong>AVIF</strong> se komprimují metodou <strong>AVIF (ztrátová)</strong>.</li>
                            <li>Vstupy ve formátu <strong>HEIC</strong> se převedou na <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Níže si také můžete ručně vybrat formát podle svých specifických potřeb. Zde je podrobný průvodce pro každou možnost:
                        </p>

                        <p>
                            <strong>JPG</strong>: Nejpopulárnější formát obrázků, který však nepodporuje průhlednost. Ve srovnání s <strong>nekomprimovaným PNG</strong> může zmenšit velikost souboru v průměru o <strong>90 %</strong>. Při nastavení kvality na <strong>75</strong> je ztráta kvality často <strong>téměř nepostřehnutelná</strong>. Pokud nepotřebujete průhledné pozadí <strong>(což platí pro většinu fotografií)</strong>, je převod na <strong>JPG</strong> obvykle tou nejlepší volbou.
                        </p>

                        <p>
                            <strong>PNG (ztrátová)</strong>: Podporuje průhlednost s určitou ztrátou kvality, zmenšuje velikost souboru v průměru o <strong>70 %</strong> ve srovnání s <strong>nekomprimovaným PNG</strong>. Tuto možnost volte pouze v případě, že potřebujete průhledné pozadí ve formátu PNG. V opačném případě nabízí <strong>JPG</strong> <strong>lepší kvalitu při menší velikosti</strong> (bez průhlednosti) a <strong>WebP (ztrátová)</strong> poskytuje <strong>lepší kvalitu, menší velikost a průhlednost</strong>, což z něj činí lepší alternativu, pokud formát PNG není striktním požadavkem.
                        </p>

                        <p>
                            <strong>PNG (bezeztrátová)</strong>: Podporuje průhlednost bez ztráty kvality. Zmenšuje velikost souboru v průměru o <strong>20 %</strong> ve srovnání s <strong>nekomprimovaným PNG</strong>. Nicméně, <strong>pokud formát PNG není striktním požadavkem</strong>, je <strong>WebP (bezeztrátová)</strong> lepší volbou, protože nabízí menší velikost souborů.
                        </p>

                        <p>
                            <strong>WebP (ztrátová)</strong>: Podporuje průhlednost s mírnou ztrátou kvality. Zmenšuje velikost souboru v průměru o <strong>90 %</strong> ve srovnání s <strong>nekomprimovaným PNG</strong>. Je to vynikající náhrada za <strong>PNG (ztrátová)</strong>, která nabízí lepší kvalitu a menší velikost. Poznámka: Formát WebP není podporován na některých starších zařízeních.
                        </p>

                        <p>
                            <strong>WebP (bezeztrátová)</strong>: Podporuje průhlednost bez ztráty kvality. Zmenšuje velikost souboru v průměru o <strong>50 %</strong> ve srovnání s <strong>nekomprimovaným PNG</strong>, což z něj činí lepší náhradu za <strong>PNG (bezeztrátová)</strong>. Poznámka: Formát WebP není podporován na některých starších zařízeních.
                        </p>

                        <p>
                            <strong>AVIF (ztrátová)</strong>: Podporuje průhlednost s mírnou ztrátou kvality. Jako nástupce formátu WebP nabízí ještě vyšší míru komprese a zmenšuje velikost souboru v průměru o <strong>94 %</strong> ve srovnání s <strong>nekomprimovaným PNG</strong>. Jako nejmodernější formát poskytuje AVIF vynikající kvalitu při velmi malých velikostech souborů. Kompatibilita s prohlížeči a zařízeními je však stále omezená. Tento formát je nejlepší pro pokročilé uživatele nebo když jste si jisti, že jej cílová zařízení podporují.
                        </p>
                        <p>
                            <strong>AVIF (bezeztrátová)</strong>: Podporuje průhlednost bez ztráty kvality. Ve srovnání s <strong>nekomprimovaným PNG</strong> není zmenšení velikosti souboru významné a v některých případech se může velikost dokonce zvětšit. Pokud nemáte specifickou potřebu pro bezeztrátový AVIF, jsou obecně lepšími možnostmi <strong>PNG (bezeztrátová)</strong> nebo <strong>WebP (bezeztrátová)</strong>.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Přepnout motiv"
    },
    interactive: {
        store_imageDeletedNotification: "Obrázek odstraněn: {fileName}",
        store_convertingImagesNotification: "Probíhá převod {number} obrázků...",
        store_conversionFailedNotification: "Převod selhal: {fileName}",
        store_unsupportedFileTypeNotification: "Nepodporovaný formát, odstraněno: {fileName}",
        store_fileReadErrorNotification: "Soubor nelze přečíst, odstraněno: {fileName}",
        store_reconvertingNotification: "Opakovaný převod: {fileName}",
        store_formatOptionAuto: "Automatická komprese",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (ztrátová)",
        store_formatOptionPngLossless: "PNG (bezeztrátová)",
        store_formatOptionWebpLossy: "WebP (ztrátová)",
        store_formatOptionWebpLossless: "WebP (bezeztrátová)",
        store_formatOptionAvifLossy: "AVIF (ztrátová)",
        store_formatOptionAvifLossless: "AVIF (bezeztrátová)",
        previewSection_title: "Náhled a stažení",
        previewSection_downloadAllButton: "Stáhnout vše",
        previewSection_deleteAllButton: "Odstranit vše",
        previewSection_placeholder: "Zatím žádné obrázky.",
        previewSection_statusPending: "Čeká na zpracování",
        previewSection_statusConverting: "Probíhá převod...",
        previewSection_statusFailed: "Selhalo. Obnovte prosím stránku a zkuste to znovu.",
        previewSection_statusCompleted: "Hotovo",
        previewSection_noCompletedFilesNotification: "Žádné dokončené obrázky ke stažení.",
        previewSection_downloadStartedNotification: "Zahajuje se stahování {fileCount} souborů...",
        previewSection_listEmptyNotification: "Seznam je prázdný.",
        previewSection_allDeletedNotification: "Všechny obrázky byly odstraněny.",
        previewSection_zipCreationNotification: "Probíhá vytváření ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Probíhá vytváření ZIP: Některé obrázky jsou nedokončené a budou přeskočeny.",
        previewSection_zipCreationErrorNotification: "Při vytváření ZIP došlo k chybě.",
        previewSection_waitConversionNotification: "Počkejte prosím na dokončení převodu.",
        previewSection_downloadingFileNotification: "Stahování: {fileName}",
        previewSection_originalSizeLabel: "Původní velikost:",
        previewSection_convertedSizeLabel: "Velikost po převodu:",
        previewSection_downloadTitle: "Stáhnout",
        previewSection_previewTitle: "Náhled",
        previewSection_deleteTitle: "Odstranit",
        previewSection_comparisonTab: "Porovnání",
        previewSection_settingsTab: "Nastavení",
        previewSection_originalImageLabel: "Původní obrázek",
        previewSection_completedImageLabel: "Převedený obrázek",
        previewSection_formatLabel: "Formát:",
        previewSection_resolutionLabel: "Rozlišení:",
        previewSection_viewLargerButton: "Zobrazit na nové kartě",
        previewSection_qualityLabel: "Kvalita komprese",
        previewSection_sizeLabel: "Úprava rozlišení",
        previewSection_outputFormatLabel: "Výstupní formát",
        previewSection_reconvertButton: "Převést znovu",
        globalControls_qualityLabel: "Globální kvalita komprese",
        globalControls_sizeLabel: "Globální úprava rozlišení",
        globalControls_formatLabel: "Globální výstupní formát",
        globalControls_reconvertAllButton: "Použít na vše a převést",
        globalControls_restoreDefaultsButton: "Obnovit výchozí",
        globalControls_noImagesNotification: "Nejprve prosím přidejte obrázky.",
        globalControls_reconvertingAllNotification: "Probíhá opakovaný převod všech {imageCount} obrázků s globálním nastavením.",
        globalControls_restoredNotification: "Nastavení bylo obnoveno na výchozí hodnoty.",
        addSection_title: "Přidat obrázky",
        addArea_dragDropTitle: "Přetáhněte obrázky sem",
        addArea_supportedFormats: "Podporuje formáty JPG, PNG, WebP, AVIF a HEIC",
        addArea_selectButton: "Vybrat obrázky",
        addArea_tips: "*Lze přidat více obrázků najednou",
        ui_viewExplanationTitle: "Zjistit více o těchto možnostech",
    }
};

export default cs;