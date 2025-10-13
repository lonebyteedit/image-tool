import type { Translation } from './en.tsx';

const nl: Translation = {
    static: {
        index_lang: 'nl',
        index_dir: 'ltr',
        index_title: "Image Tool - Geavanceerde tool voor beeldconversie",
        index_description: "Een gratis, professionele online tool voor beeldcompressie, het aanpassen van afmetingen en formaatconversie. Het ondersteunt onderlinge conversie tussen JPG, PNG, WebP en AVIF, en kan HEIC naar deze formaten converteren. Alle verwerking vindt lokaal in uw browser plaats — uw bestanden worden nooit geüpload, wat volledige privacy en gegevensbeveiliging garandeert.",
        optionsExplanation: {
            title: "Uitleg van de opties",
            subtitle: "Begrijp de functie en het gebruik van elke optie om uw beeldconversieresultaten te optimaliseren.",
            options: [
                {
                    id: "quality-option",
                    title: "Compressiekwaliteit",
                    description: <>
                        <p>Deze optie is alleen van toepassing wanneer het doelformaat <strong>JPG</strong>, <strong>WebP (met verlies)</strong> of <strong>AVIF (met verlies)</strong> is.</p>
                        <p>Een lagere waarde resulteert in een kleiner bestand, maar vermindert de beeldkwaliteit. De aanbevolen waarde van <strong>75</strong> biedt een goede balans tussen bestandsgrootte en kwaliteit.</p>
                        <p>Als het bestand na compressie nog steeds te groot is, probeer dan de resolutie te verlagen. Dit is vaak effectiever om de bestandsgrootte te verkleinen.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Resolutie aanpassen",
                    description: <>
                        <p>Verlaag de beeldresolutie met een percentage terwijl de oorspronkelijke beeldverhouding behouden blijft. <strong>100%</strong> behoudt de oorspronkelijke afmetingen.</p>
                        <p>Het verlagen van de resolutie kan de bestandsgrootte <strong>aanzienlijk</strong> verkleinen. Als u de hoge resolutie van het origineel niet nodig heeft, is dit vaak de <strong>meest effectieve manier</strong> om het bestand kleiner te maken.</p>
                        <p>Met overige opties gelijk, gebaseerd op <strong>100% resolutie</strong>. Aanpassen naar <strong>75% resolutie</strong> vermindert de bestandsgrootte met gemiddeld <strong>30%</strong>; aanpassen naar <strong>50% resolutie</strong> vermindert deze met gemiddeld <strong>65%</strong>; en aanpassen naar <strong>25% resolutie</strong> vermindert deze met gemiddeld <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Uitvoerformaat",
                    description: <>
                        <p>Kies het uitvoerformaat voor de afbeelding. Verschillende formaten hebben hun eigen voordelen en toepassingen.</p>
                        <p><strong>Automatisch comprimeren</strong>: Deze optie past automatisch een geschikte compressiestrategie toe op basis van het invoerformaat:</p>
                        <ul>
                            <li><strong>JPG</strong>-invoer wordt gecomprimeerd als <strong>JPG</strong>.</li>
                            <li><strong>PNG</strong>-invoer wordt gecomprimeerd met de <strong>PNG (met verlies)</strong> methode.</li>
                            <li><strong>WebP</strong>-invoer wordt gecomprimeerd met de <strong>WebP (met verlies)</strong> methode.</li>
                            <li><strong>AVIF</strong>-invoer wordt gecomprimeerd met de <strong>AVIF (met verlies)</strong> methode.</li>
                            <li><strong>HEIC</strong>-invoer wordt geconverteerd naar <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            U kunt hieronder ook handmatig een formaat selecteren op basis van uw specifieke behoeften. Hier is een gedetailleerde gids voor elke optie:
                        </p>

                        <p>
                            <strong>JPG</strong>: Het populairste beeldformaat, hoewel het geen transparantie ondersteunt. Bij conversie van een <strong>ongecomprimeerde PNG</strong> kan het de bestandsgrootte met gemiddeld <strong>90%</strong> verkleinen. Bij een kwaliteitsinstelling van <strong>75</strong> is het kwaliteitsverlies vaak <strong>onmerkbaar</strong>. Als u geen transparante achtergrond nodig heeft <strong>(wat voor de meeste foto's geldt)</strong>, is converteren naar <strong>JPG</strong> meestal de beste keuze.
                        </p>

                        <p>
                            <strong>PNG (met verlies)</strong>: Ondersteunt transparantie met enig kwaliteitsverlies, en verkleint de bestandsgrootte met gemiddeld <strong>70%</strong> vergeleken met een <strong>ongecomprimeerde PNG</strong>. Kies dit alleen als u een transparante achtergrond in PNG-formaat nodig heeft. Anders biedt <strong>JPG</strong> <strong>betere kwaliteit voor een kleinere omvang</strong> (zonder transparantie), en biedt <strong>WebP (met verlies)</strong> <strong>betere kwaliteit, een kleinere omvang en transparantie</strong>, wat het een superieur alternatief maakt als het PNG-formaat geen strikte vereiste is.
                        </p>

                        <p>
                            <strong>PNG (zonder verlies)</strong>: Ondersteunt transparantie zonder kwaliteitsverlies. Verkleint de bestandsgrootte met gemiddeld <strong>20%</strong> vergeleken met een <strong>ongecomprimeerde PNG</strong>. Echter, <strong>als het PNG-formaat geen strikte vereiste is</strong>, is <strong>WebP (zonder verlies)</strong> een betere keuze omdat het kleinere bestanden oplevert.
                        </p>

                        <p>
                            <strong>WebP (met verlies)</strong>: Ondersteunt transparantie met licht kwaliteitsverlies. Verkleint de bestandsgrootte met gemiddeld <strong>90%</strong> vergeleken met een <strong>ongecomprimeerde PNG</strong>. Het is een uitstekende vervanging voor <strong>PNG (met verlies)</strong>, en biedt betere kwaliteit en kleinere bestanden. Let op: WebP wordt niet ondersteund op sommige oudere apparaten.
                        </p>

                        <p>
                            <strong>WebP (zonder verlies)</strong>: Ondersteunt transparantie zonder kwaliteitsverlies. Verkleint de bestandsgrootte met gemiddeld <strong>50%</strong> vergeleken met een <strong>ongecomprimeerde PNG</strong>, wat het een superieure vervanging maakt voor <strong>PNG (zonder verlies)</strong>. Let op: WebP wordt niet ondersteund op sommige oudere apparaten.
                        </p>

                        <p>
                            <strong>AVIF (met verlies)</strong>: Ondersteunt transparantie met licht kwaliteitsverlies. Als opvolger van WebP biedt het een nog hogere compressieratio, waardoor de bestandsgrootte met gemiddeld <strong>94%</strong> wordt verkleind vergeleken met <strong>ongecomprimeerde PNG</strong>. Als geavanceerd formaat biedt AVIF uitstekende kwaliteit bij zeer kleine bestandsgroottes. De compatibiliteit met browsers en apparaten is echter nog beperkt. Dit formaat is het meest geschikt voor gevorderde gebruikers of wanneer u zeker weet dat de doelapparaten het ondersteunen.
                        </p>
                        <p>
                            <strong>AVIF (zonder verlies)</strong>: Ondersteunt transparantie zonder kwaliteitsverlies. Vergeleken met een <strong>ongecomprimeerde PNG</strong> is de verkleining van de bestandsgrootte niet significant, en in sommige gevallen kan deze zelfs toenemen. Tenzij u een specifieke behoefte heeft aan verliesvrije AVIF, zijn <strong>PNG (zonder verlies)</strong> of <strong>WebP (zonder verlies)</strong> over het algemeen betere opties.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Thema wisselen"
    },
    interactive: {
        store_imageDeletedNotification: "Verwijderd: {fileName}",
        store_convertingImagesNotification: "Bezig met converteren van {number} afbeeldingen...",
        store_conversionFailedNotification: "Conversie mislukt: {fileName}",
        store_unsupportedFileTypeNotification: "Niet-ondersteund formaat, verwijderd: {fileName}",
        store_fileReadErrorNotification: "Kon bestand niet lezen, verwijderd: {fileName}",
        store_reconvertingNotification: "Opnieuw converteren: {fileName}",
        store_formatOptionAuto: "Automatisch comprimeren",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (met verlies)",
        store_formatOptionPngLossless: "PNG (zonder verlies)",
        store_formatOptionWebpLossy: "WebP (met verlies)",
        store_formatOptionWebpLossless: "WebP (zonder verlies)",
        store_formatOptionAvifLossy: "AVIF (met verlies)",
        store_formatOptionAvifLossless: "AVIF (zonder verlies)",
        previewSection_title: "Voorbeeld en downloaden",
        previewSection_downloadAllButton: "Alles downloaden",
        previewSection_deleteAllButton: "Alles verwijderen",
        previewSection_placeholder: "Nog geen afbeeldingen.",
        previewSection_statusPending: "In afwachting",
        previewSection_statusConverting: "Bezig met converteren...",
        previewSection_statusFailed: "Mislukt. Vernieuw de pagina en probeer het opnieuw.",
        previewSection_statusCompleted: "Voltooid",
        previewSection_noCompletedFilesNotification: "Geen voltooide afbeeldingen om te downloaden.",
        previewSection_downloadStartedNotification: "Download van {fileCount} bestanden wordt gestart...",
        previewSection_listEmptyNotification: "De lijst is leeg.",
        previewSection_allDeletedNotification: "Alle afbeeldingen zijn verwijderd.",
        previewSection_zipCreationNotification: "ZIP aanmaken...",
        previewSection_zipCreationWithSkipsNotification: "ZIP aanmaken: Sommige afbeeldingen zijn niet voltooid en worden overgeslagen.",
        previewSection_zipCreationErrorNotification: "Er is een fout opgetreden bij het aanmaken van de ZIP.",
        previewSection_waitConversionNotification: "Wacht tot de conversie is voltooid.",
        previewSection_downloadingFileNotification: "Downloaden: {fileName}",
        previewSection_originalSizeLabel: "Oorspronkelijke grootte:",
        previewSection_convertedSizeLabel: "Nieuwe grootte:",
        previewSection_downloadTitle: "Downloaden",
        previewSection_previewTitle: "Voorbeeld",
        previewSection_deleteTitle: "Verwijderen",
        previewSection_comparisonTab: "Vergelijken",
        previewSection_settingsTab: "Instellingen",
        previewSection_originalImageLabel: "Originele afbeelding",
        previewSection_completedImageLabel: "Geconverteerde afbeelding",
        previewSection_formatLabel: "Formaat:",
        previewSection_resolutionLabel: "Resolutie:",
        previewSection_viewLargerButton: "Bekijk in nieuw tabblad",
        previewSection_qualityLabel: "Compressiekwaliteit",
        previewSection_sizeLabel: "Resolutie aanpassen",
        previewSection_outputFormatLabel: "Uitvoerformaat",
        previewSection_reconvertButton: "Deze afbeelding opnieuw converteren",
        globalControls_qualityLabel: "Algemene compressiekwaliteit",
        globalControls_sizeLabel: "Algemene resolutie aanpassen",
        globalControls_formatLabel: "Algemeen uitvoerformaat",
        globalControls_reconvertAllButton: "Toepassen en alles opnieuw converteren",
        globalControls_restoreDefaultsButton: "Standaardinstellingen herstellen",
        globalControls_noImagesNotification: "Voeg eerst afbeeldingen toe.",
        globalControls_reconvertingAllNotification: "Alle {imageCount} afbeeldingen opnieuw converteren met algemene instellingen",
        globalControls_restoredNotification: "Opties zijn teruggezet naar de standaardwaarden.",
        addSection_title: "Afbeeldingen toevoegen",
        addArea_dragDropTitle: "Sleep afbeeldingen hierheen",
        addArea_supportedFormats: "Ondersteunt JPG, PNG, WebP, AVIF en HEIC",
        addArea_selectButton: "Afbeeldingen selecteren",
        addArea_tips: "*U kunt meerdere afbeeldingen tegelijk toevoegen.",
        ui_viewExplanationTitle: "Meer informatie over deze opties",
    }
};

export default nl;