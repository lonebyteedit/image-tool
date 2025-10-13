import type { Translation } from './en.tsx';

const da: Translation = {
    static: {
        index_lang: 'da',
        index_dir: 'ltr',
        index_title: "Image Tool - Avanceret billedkonverteringsværktøj",
        index_description: "Et gratis, professionelt onlineværktøj til billedkomprimering, ændring af størrelse og formatkonvertering. Det understøtter gensidig konvertering mellem JPG, PNG, WebP og AVIF og kan konvertere HEIC til disse formater. Al behandling sker lokalt i din browser – dine filer bliver aldrig uploadet, hvilket sikrer fuld privatlivsbeskyttelse og datasikkerhed.",
        optionsExplanation: {
            title: "Vejledning til indstillinger",
            subtitle: "Forstå funktionen og brugen af hver indstilling for at optimere dine billedkonverteringsresultater.",
            options: [
                {
                    id: "quality-option",
                    title: "Komprimeringskvalitet",
                    description: <>
                        <p>Denne indstilling gælder kun, når outputformatet er <strong>JPG</strong>, <strong>WebP (med tab)</strong> eller <strong>AVIF (med tab)</strong>.</p>
                        <p>En lavere værdi skaber en mindre fil, men reducerer billedkvaliteten. Den anbefalede værdi på <strong>75</strong> giver en god balance mellem filstørrelse og kvalitet.</p>
                        <p>Hvis filen stadig er for stor efter komprimering, kan du prøve at reducere opløsningen, hvilket ofte er mere effektivt til at mindske filstørrelsen.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Justering af opløsning",
                    description: <>
                        <p>Reducer billedets opløsning med en procentdel, mens det oprindelige billedformat bevares. <strong>100%</strong> bevarer de oprindelige dimensioner.</p>
                        <p>At reducere opløsningen kan reducere filstørrelsen <strong>markant</strong>. Hvis du ikke har brug for den oprindelige høje opløsning, er dette ofte den <strong>mest effektive måde</strong> at gøre filen mindre på.</p>
                        <p>Med de samme øvrige indstillinger, baseret på <strong>100% opløsning</strong>. Justering til <strong>75% opløsning</strong> reducerer i gennemsnit filstørrelsen med <strong>30%</strong>; justering til <strong>50% opløsning</strong> reducerer den i gennemsnit med <strong>65%</strong>; justering til <strong>25% opløsning</strong> reducerer den i gennemsnit med <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Outputformat",
                    description: <>
                        <p>Vælg outputformatet for billedet. Forskellige formater har deres egne fordele og anvendelsesmuligheder.</p>
                        <p><strong>Automatisk komprimering</strong>: Denne indstilling anvender automatisk en passende komprimeringsstrategi baseret på inputformatet:</p>
                        <ul>
                            <li><strong>JPG</strong>-input komprimeres som <strong>JPG</strong>.</li>
                            <li><strong>PNG</strong>-input komprimeres med metoden <strong>PNG (med tab)</strong>.</li>
                            <li><strong>WebP</strong>-input komprimeres med metoden <strong>WebP (med tab)</strong>.</li>
                            <li><strong>AVIF</strong>-input komprimeres med metoden <strong>AVIF (med tab)</strong>.</li>
                            <li><strong>HEIC</strong>-input konverteres til <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Du kan også manuelt vælge et format nedenfor baseret på dine specifikke behov. Her er en detaljeret vejledning til hver mulighed:
                        </p>

                        <p>
                            <strong>JPG</strong>: Det mest populære billedformat, selvom det ikke understøtter gennemsigtighed. Ved konvertering fra en <strong>ukomprimeret PNG</strong> kan det reducere filstørrelsen med gennemsnitligt <strong>90%</strong>. Ved en kvalitetsindstilling på <strong>75</strong> er kvalitetstabet ofte <strong>næsten umærkeligt</strong>. Hvis du ikke har brug for en gennemsigtig baggrund <strong>(hvilket gælder for de fleste fotos)</strong>, er konvertering til <strong>JPG</strong> normalt det bedste valg.
                        </p>

                        <p>
                            <strong>PNG (med tab)</strong>: Understøtter gennemsigtighed med et vist kvalitetstab og reducerer filstørrelsen med gennemsnitligt <strong>70%</strong> sammenlignet med en <strong>ukomprimeret PNG</strong>. Vælg kun dette, hvis du har brug for en gennemsigtig baggrund i PNG-format. Ellers tilbyder <strong>JPG</strong> <strong>bedre kvalitet for en mindre størrelse</strong> (uden gennemsigtighed), og <strong>WebP (med tab)</strong> giver <strong>bedre kvalitet, mindre størrelse og gennemsigtighed</strong>, hvilket gør det til et bedre alternativ, hvis PNG-formatet ikke er et strengt krav.
                        </p>

                        <p>
                            <strong>PNG (uden tab)</strong>: Understøtter gennemsigtighed uden kvalitetstab. Reducerer filstørrelsen med gennemsnitligt <strong>20%</strong> sammenlignet med en <strong>ukomprimeret PNG</strong>. Men <strong>hvis PNG-formatet ikke er et strengt krav</strong>, er <strong>WebP (uden tab)</strong> et bedre valg, da det giver mindre filstørrelser.
                        </p>

                        <p>
                            <strong>WebP (med tab)</strong>: Understøtter gennemsigtighed med et lille kvalitetstab. Reducerer filstørrelsen med gennemsnitligt <strong>90%</strong> sammenlignet med en <strong>ukomprimeret PNG</strong>. Det er en fremragende erstatning for <strong>PNG (med tab)</strong>, da det giver bedre kvalitet og mindre størrelser. Bemærk: WebP understøttes ikke på nogle ældre enheder.
                        </p>

                        <p>
                            <strong>WebP (uden tab)</strong>: Understøtter gennemsigtighed uden kvalitetstab. Reducerer filstørrelsen med gennemsnitligt <strong>50%</strong> sammenlignet med en <strong>ukomprimeret PNG</strong>, hvilket gør det til en bedre erstatning for <strong>PNG (uden tab)</strong>. Bemærk: WebP understøttes ikke på nogle ældre enheder.
                        </p>

                        <p>
                            <strong>AVIF (med tab)</strong>: Understøtter gennemsigtighed med et lille kvalitetstab. Som efterfølgeren til WebP tilbyder det en endnu højere komprimeringsrate, hvilket reducerer filstørrelsen med gennemsnitligt <strong>94%</strong> sammenlignet med en <strong>ukomprimeret PNG</strong>. Som et banebrydende format giver AVIF fremragende kvalitet ved meget små filstørrelser. Dog er browser- og enhedskompatibiliteten stadig begrænset. Dette format er bedst for avancerede brugere, eller når du er sikker på, at målenhederne understøtter det.
                        </p>
                        <p>
                            <strong>AVIF (uden tab)</strong>: Understøtter gennemsigtighed uden kvalitetstab. Sammenlignet med en <strong>ukomprimeret PNG</strong> er filstørrelsesreduktionen ikke markant og kan i nogle tilfælde endda øges. Medmindre du har et specifikt behov for AVIF uden tab, er <strong>PNG (uden tab)</strong> eller <strong>WebP (uden tab)</strong> generelt bedre valg.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Skift tema"
    },
    interactive: {
        store_imageDeletedNotification: "Fjernet: {fileName}",
        store_convertingImagesNotification: "Konverterer {number} billeder...",
        store_conversionFailedNotification: "Konvertering mislykkedes: {fileName}",
        store_unsupportedFileTypeNotification: "Ikke-understøttet format, fjernet: {fileName}",
        store_fileReadErrorNotification: "Kunne ikke læse filen, fjernet: {fileName}",
        store_reconvertingNotification: "Genkonverterer: {fileName}",
        store_formatOptionAuto: "Automatisk komprimering",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (med tab)",
        store_formatOptionPngLossless: "PNG (uden tab)",
        store_formatOptionWebpLossy: "WebP (med tab)",
        store_formatOptionWebpLossless: "WebP (uden tab)",
        store_formatOptionAvifLossy: "AVIF (med tab)",
        store_formatOptionAvifLossless: "AVIF (uden tab)",
        previewSection_title: "Forhåndsvisning og download",
        previewSection_downloadAllButton: "Download alle",
        previewSection_deleteAllButton: "Slet alle",
        previewSection_placeholder: "Ingen billeder endnu.",
        previewSection_statusPending: "Afventer",
        previewSection_statusConverting: "Konverterer...",
        previewSection_statusFailed: "Mislykkedes. Opdater venligst siden og prøv igen.",
        previewSection_statusCompleted: "Fuldført",
        previewSection_noCompletedFilesNotification: "Ingen færdigkonverterede billeder at downloade.",
        previewSection_downloadStartedNotification: "Starter download af {fileCount} filer...",
        previewSection_listEmptyNotification: "Listen er tom.",
        previewSection_allDeletedNotification: "Alle billeder er blevet fjernet.",
        previewSection_zipCreationNotification: "Opretter ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Opretter ZIP: Nogle billeder er ikke færdigbehandlede og vil blive sprunget over.",
        previewSection_zipCreationErrorNotification: "Der opstod en fejl under oprettelse af ZIP.",
        previewSection_waitConversionNotification: "Vent venligst til konverteringen er færdig.",
        previewSection_downloadingFileNotification: "Downloader: {fileName}",
        previewSection_originalSizeLabel: "Oprindelig størrelse:",
        previewSection_convertedSizeLabel: "Konverteret størrelse:",
        previewSection_downloadTitle: "Download",
        previewSection_previewTitle: "Forhåndsvisning",
        previewSection_deleteTitle: "Slet",
        previewSection_comparisonTab: "Sammenlign",
        previewSection_settingsTab: "Indstillinger",
        previewSection_originalImageLabel: "Oprindeligt billede",
        previewSection_completedImageLabel: "Konverteret billede",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Opløsning:",
        previewSection_viewLargerButton: "Vis i ny fane",
        previewSection_qualityLabel: "Komprimeringskvalitet",
        previewSection_sizeLabel: "Justering af opløsning",
        previewSection_outputFormatLabel: "Outputformat",
        previewSection_reconvertButton: "Genkonverter",
        globalControls_qualityLabel: "Global komprimeringskvalitet",
        globalControls_sizeLabel: "Global justering af opløsning",
        globalControls_formatLabel: "Globalt outputformat",
        globalControls_reconvertAllButton: "Anvend og genkonverter alle",
        globalControls_restoreDefaultsButton: "Nulstil indstillinger",
        globalControls_noImagesNotification: "Tilføj venligst billeder først.",
        globalControls_reconvertingAllNotification: "Genkonverterer alle {imageCount} billeder med globale indstillinger",
        globalControls_restoredNotification: "Indstillingerne er blevet nulstillet til standard.",
        addSection_title: "Tilføj billeder",
        addArea_dragDropTitle: "Træk og slip billeder her",
        addArea_supportedFormats: "Understøtter JPG, PNG, WebP, AVIF og HEIC",
        addArea_selectButton: "Vælg billeder",
        addArea_tips: "*Du kan tilføje flere billeder på én gang",
        ui_viewExplanationTitle: "Lær mere om disse indstillinger",
    }
};

export default da;