import type { Translation } from './en.tsx';

const sv: Translation = {
  static: {
    index_lang: 'sv',
    index_dir: 'ltr',
    index_title: "Image Tool - Avancerat bildkonverteringsverktyg",
    index_description: "Ett gratis, professionellt onlineverktyg för bildkomprimering, storleksändring och formatkonvertering. Det stöder ömsesidig konvertering mellan JPG, PNG, WebP och AVIF, och kan konvertera HEIC till dessa format. All bearbetning sker lokalt i din webbläsare – dina filer laddas aldrig upp, vilket garanterar fullständig integritet och datasäkerhet.",
    optionsExplanation: {
      title: "Alternativguide",
      subtitle: "Förstå funktionen och användningen av varje alternativ för att optimera dina bildkonverteringsresultat.",
      options: [
        {
          id: "quality-option",
          title: "Komprimeringskvalitet",
          description: <>
            <p>Detta alternativ gäller endast när målformatet är <strong>JPG</strong>, <strong>WebP (med förlust)</strong> eller <strong>AVIF (med förlust)</strong>.</p>
            <p>Ett lägre värde skapar en mindre fil men minskar bildkvaliteten. Det rekommenderade värdet <strong>75</strong> erbjuder en bra balans mellan filstorlek och kvalitet.</p>
            <p>Om filen fortfarande är för stor efter komprimering, prova att minska upplösningen, vilket ofta är mer effektivt för att krympa filstorleken.</p>
          </>
        },
        {
          id: "size-option",
          title: "Upplösningsjustering",
          description: <>
            <p>Minska bildens upplösning med en procentsats samtidigt som det ursprungliga bildförhållandet bibehålls. <strong>100%</strong> bevarar de ursprungliga dimensionerna.</p>
            <p>Att minska upplösningen kan <strong>avsevärt</strong> minska filstorleken. Om du inte behöver originalets höga upplösning är detta ofta det <strong>mest effektiva sättet</strong> att göra filen mindre.</p>
            <p>Med övriga alternativ oförändrade, baserat på <strong>100% upplösning</strong>. Att justera till <strong>75% upplösning</strong> minskar filstorleken med i genomsnitt <strong>30%</strong>; att justera till <strong>50% upplösning</strong> minskar den med i genomsnitt <strong>65%</strong>; att justera till <strong>25% upplösning</strong> minskar den med i genomsnitt <strong>88%</strong>.</p>
          </>
        },
        {
          id: "format-option",
          title: "Outputformat",
          description: <>
            <p>Välj outputformat för bilden. Olika format har sina egna fördelar och användningsområden.</p>
            <p><strong>Automatisk komprimering</strong>: Detta alternativ tillämpar automatiskt en lämplig komprimeringsstrategi baserat på indataformatet:</p>
            <ul>
              <li><strong>JPG</strong>-indata komprimeras som <strong>JPG</strong>.</li>
              <li><strong>PNG</strong>-indata komprimeras med metoden <strong>PNG (med förlust)</strong>.</li>
              <li><strong>WebP</strong>-indata komprimeras med metoden <strong>WebP (med förlust)</strong>.</li>
              <li><strong>AVIF</strong>-indata komprimeras med metoden <strong>AVIF (med förlust)</strong>.</li>
              <li><strong>HEIC</strong>-indata konverteras till <strong>JPG</strong>.</li>
            </ul>

            <p>
              Du kan också manuellt välja ett format nedan baserat på dina specifika behov. Här är en detaljerad guide för varje alternativ:
            </p>

            <p>
              <strong>JPG</strong>: Det mest populära bildformatet, även om det inte stöder transparens. Vid konvertering från en <strong>okomprimerad PNG</strong> kan det minska filstorleken med i genomsnitt <strong>90%</strong>. Med en kvalitetsinställning på <strong>75</strong> är kvalitetsförlusten ofta <strong>knappt märkbar</strong>. Om du inte behöver en transparent bakgrund <strong>(vilket gäller för de flesta foton)</strong>, är konvertering till <strong>JPG</strong> vanligtvis det bästa valet.
            </p>

            <p>
              <strong>PNG (med förlust)</strong>: Stöder transparens med viss kvalitetsförlust, vilket minskar filstorleken med i genomsnitt <strong>70%</strong> jämfört med en <strong>okomprimerad PNG</strong>. Välj detta endast om du behöver en transparent bakgrund i PNG-format. Annars erbjuder <strong>JPG</strong> <strong>bättre kvalitet för en mindre storlek</strong> (utan transparens), och <strong>WebP (med förlust)</strong> ger <strong>bättre kvalitet, mindre storlek och transparens</strong>, vilket gör det till ett överlägset alternativ om PNG-formatet inte är ett strikt krav.
            </p>

            <p>
              <strong>PNG (förlustfri)</strong>: Stöder transparens utan kvalitetsförlust. Minskar filstorleken med i genomsnitt <strong>20%</strong> jämfört med en <strong>okomprimerad PNG</strong>. Men, <strong>om PNG-formatet inte är ett strikt krav</strong>, är <strong>WebP (förlustfri)</strong> ett bättre val eftersom det ger mindre filstorlekar.
            </p>

            <p>
              <strong>WebP (med förlust)</strong>: Stöder transparens med lätt kvalitetsförlust. Minskar filstorleken med i genomsnitt <strong>90%</strong> jämfört med en <strong>okomprimerad PNG</strong>. Det är en utmärkt ersättning för <strong>PNG (med förlust)</strong> och erbjuder bättre kvalitet och mindre storlekar. Obs: WebP stöds inte på vissa äldre enheter.
            </p>

            <p>
              <strong>WebP (förlustfri)</strong>: Stöder transparens utan kvalitetsförlust. Minskar filstorleken med i genomsnitt <strong>50%</strong> jämfört med en <strong>okomprimerad PNG</strong>, vilket gör det till en överlägsen ersättning för <strong>PNG (förlustfri)</strong>. Obs: WebP stöds inte på vissa äldre enheter.
            </p>

            <p>
              <strong>AVIF (med förlust)</strong>: Stöder transparens med lätt kvalitetsförlust. Som efterföljare till WebP erbjuder det en ännu högre komprimeringsgrad och minskar filstorleken med i genomsnitt <strong>94%</strong> jämfört med <strong>okomprimerad PNG</strong>. Som ett banbrytande format ger AVIF utmärkt kvalitet vid mycket små filstorlekar. Dock är kompatibiliteten med webbläsare och enheter fortfarande begränsad. Detta format är bäst för avancerade användare eller när du är säker på att målenheterna stöder det.
            </p>
            <p>
              <strong>AVIF (förlustfri)</strong>: Stöder transparens utan kvalitetsförlust. Jämfört med en <strong>okomprimerad PNG</strong> är filstorleksminskningen inte signifikant, och i vissa fall kan den till och med öka. Om du inte har ett specifikt behov av förlustfri AVIF, är <strong>PNG (förlustfri)</strong> eller <strong>WebP (förlustfri)</strong> generellt bättre alternativ.
            </p>
          </>
        }
      ]
    },
    themeToggle_title: "Växla tema"
  },
  interactive: {
    store_imageDeletedNotification: "Tog bort: {fileName}",
    store_convertingImagesNotification: "Konverterar {number} bilder...",
    store_conversionFailedNotification: "Konvertering misslyckades: {fileName}",
    store_unsupportedFileTypeNotification: "Formatet stöds inte, tog bort: {fileName}",
    store_fileReadErrorNotification: "Kunde inte läsa filen, tog bort: {fileName}",
    store_reconvertingNotification: "Konverterar om: {fileName}",
    store_formatOptionAuto: "Automatisk komprimering",
    store_formatOptionJpg: "JPG",
    store_formatOptionPngLossy: "PNG (med förlust)",
    store_formatOptionPngLossless: "PNG (förlustfri)",
    store_formatOptionWebpLossy: "WebP (med förlust)",
    store_formatOptionWebpLossless: "WebP (förlustfri)",
    store_formatOptionAvifLossy: "AVIF (med förlust)",
    store_formatOptionAvifLossless: "AVIF (förlustfri)",
    previewSection_title: "Förhandsgranska och ladda ned",
    previewSection_downloadAllButton: "Ladda ned alla",
    previewSection_deleteAllButton: "Ta bort alla",
    previewSection_placeholder: "Inga bilder än.",
    previewSection_statusPending: "Väntar",
    previewSection_statusConverting: "Konverterar...",
    previewSection_statusFailed: "Misslyckades. Ladda om sidan och försök igen.",
    previewSection_statusCompleted: "Färdig",
    previewSection_noCompletedFilesNotification: "Inga färdiga bilder att ladda ned.",
    previewSection_downloadStartedNotification: "Påbörjar nedladdning av {fileCount} filer...",
    previewSection_listEmptyNotification: "Listan är tom.",
    previewSection_allDeletedNotification: "Alla bilder har tagits bort.",
    previewSection_zipCreationNotification: "Skapar ZIP...",
    previewSection_zipCreationWithSkipsNotification: "Skapar ZIP: Vissa bilder är inte slutförda och kommer att hoppas över.",
    previewSection_zipCreationErrorNotification: "Ett fel inträffade när ZIP-filen skapades.",
    previewSection_waitConversionNotification: "Vänta tills konverteringen är klar.",
    previewSection_downloadingFileNotification: "Laddar ned: {fileName}",
    previewSection_originalSizeLabel: "Originalstorlek:",
    previewSection_convertedSizeLabel: "Konverterad storlek:",
    previewSection_downloadTitle: "Ladda ned",
    previewSection_previewTitle: "Förhandsgranska",
    previewSection_deleteTitle: "Ta bort",
    previewSection_comparisonTab: "Jämför",
    previewSection_settingsTab: "Inställningar",
    previewSection_originalImageLabel: "Originalbild",
    previewSection_completedImageLabel: "Konverterad bild",
    previewSection_formatLabel: "Format:",
    previewSection_resolutionLabel: "Upplösning:",
    previewSection_viewLargerButton: "Visa i ny flik",
    previewSection_qualityLabel: "Komprimeringskvalitet",
    previewSection_sizeLabel: "Upplösningsjustering",
    previewSection_outputFormatLabel: "Outputformat",
    previewSection_reconvertButton: "Konvertera om",
    globalControls_qualityLabel: "Global komprimeringskvalitet",
    globalControls_sizeLabel: "Global upplösningsjustering",
    globalControls_formatLabel: "Globalt outputformat",
    globalControls_reconvertAllButton: "Tillämpa och konvertera om alla",
    globalControls_restoreDefaultsButton: "Återställ alternativ",
    globalControls_noImagesNotification: "Lägg till bilder först.",
    globalControls_reconvertingAllNotification: "Konverterar om alla {imageCount} bilder med globala inställningar",
    globalControls_restoredNotification: "Alternativen har återställts till standard.",
    addSection_title: "Lägg till bilder",
    addArea_dragDropTitle: "Dra och släpp bilder här",
    addArea_supportedFormats: "Stödjer JPG, PNG, WebP, AVIF och HEIC",
    addArea_selectButton: "Välj bilder",
    addArea_tips: "*Du kan lägga till flera bilder samtidigt.",
    ui_viewExplanationTitle: "Läs mer om dessa alternativ",
  }
};

export default sv;