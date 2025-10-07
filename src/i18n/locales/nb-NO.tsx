import type { Translation } from './en.tsx';

const nbNO: Translation = {
  static: {
    index_lang: 'nb-NO',
    index_dir: 'ltr',
    index_title: "Image Tool - Avansert verktøy for bildekonvertering",
    index_description: "Et gratis, profesjonelt nettbasert verktøy for bildekomprimering, størrelsesendring og formatkonvertering. Det støtter konvertering mellom JPG, PNG, WebP og AVIF, og kan konvertere HEIC til disse formatene. All behandling skjer lokalt i nettleseren din – filene dine lastes aldri opp, noe som garanterer fullstendig personvern og datasikkerhet.",
    optionsExplanation: {
      title: "Guide til alternativene",
      subtitle: "Forstå funksjonen til hvert alternativ for å optimalisere resultatene av bildekonverteringen din.",
      options: [
        {
          id: "quality-option",
          title: "Komprimeringskvalitet",
          description: <>
            <p>Dette alternativet gjelder kun når målformatet er <strong>JPG</strong>, <strong>WebP (med tap)</strong> eller <strong>AVIF (med tap)</strong>.</p>
            <p>En lavere verdi gir en mindre fil, men reduserer bildekvaliteten. Den anbefalte verdien på <strong>75</strong> gir en god balanse mellom filstørrelse og kvalitet.</p>
            <p>Hvis filen fortsatt er for stor etter komprimering, kan du prøve å redusere oppløsningen. Det er ofte mer effektivt for å redusere filstørrelsen.</p>
          </>
        },
        {
          id: "size-option",
          title: "Justering av oppløsning",
          description: <>
            <p>Reduser bildets oppløsning prosentvis, samtidig som det opprinnelige sideforholdet bevares. <strong>100%</strong> beholder den opprinnelige oppløsningen.</p>
            <p>Å redusere oppløsningen kan redusere filstørrelsen <strong>betydelig</strong>. Hvis du ikke trenger den høye oppløsningen fra originalbildet, er dette ofte den <strong>mest effektive metoden</strong> for å gjøre filen mindre.</p>
            <p>Med ellers like alternativer, basert på <strong>100% oppløsning</strong>: Justering til <strong>75% oppløsning</strong> reduserer filstørrelsen med gjennomsnittlig <strong>30%</strong>; justering til <strong>50% oppløsning</strong> reduserer den med gjennomsnittlig <strong>65%</strong>; og justering til <strong>25% oppløsning</strong> reduserer den med gjennomsnittlig <strong>88%</strong>.</p>
          </>
        },
        {
          id: "format-option",
          title: "Utdataformat",
          description: <>
            <p>Velg utdataformat for bildet. Ulike formater har sine egne fordeler og bruksområder.</p>
            <p><strong>Automatisk komprimering</strong>: Dette alternativet bruker en passende komprimeringsstrategi basert på inndataformatet:</p>
            <ul>
              <li><strong>JPG</strong>-bilder komprimeres som <strong>JPG</strong>.</li>
              <li><strong>PNG</strong>-bilder komprimeres med metoden <strong>PNG (med tap)</strong>.</li>
              <li><strong>WebP</strong>-bilder komprimeres med metoden <strong>WebP (med tap)</strong>.</li>
              <li><strong>AVIF</strong>-bilder komprimeres med metoden <strong>AVIF (med tap)</strong>.</li>
              <li><strong>HEIC</strong>-bilder konverteres til <strong>JPG</strong>.</li>
            </ul>

            <p>
              Du kan også velge et format manuelt nedenfor basert på dine spesifikke behov. Her er en detaljert guide for hvert alternativ:
            </p>

            <p>
              <strong>JPG</strong>: Det mest populære bildeformatet, men det støtter ikke gjennomsiktighet. Sammenlignet med en <strong>ukomprimert PNG</strong>, kan det redusere filstørrelsen med gjennomsnittlig <strong>90%</strong>. Med en kvalitetsinnstilling på <strong>75</strong> er kvalitetstapet ofte <strong>nesten umerkelig</strong>. Hvis du ikke trenger en gjennomsiktig bakgrunn <strong>(noe som gjelder de fleste bilder)</strong>, er konvertering til <strong>JPG</strong> vanligvis det beste valget.
            </p>

            <p>
              <strong>PNG (med tap)</strong>: Støtter gjennomsiktighet med noe kvalitetstap, og reduserer filstørrelsen med gjennomsnittlig <strong>70%</strong> sammenlignet med en <strong>ukomprimert PNG</strong>. Velg kun dette hvis du trenger en gjennomsiktig bakgrunn i PNG-format. Ellers tilbyr <strong>JPG</strong> <strong>bedre kvalitet for en mindre størrelse</strong> (uten gjennomsiktighet), og <strong>WebP (med tap)</strong> gir <strong>bedre kvalitet, mindre størrelse og gjennomsiktighet</strong>, noe som gjør det til et bedre alternativ hvis PNG-formatet ikke er et absolutt krav.
            </p>

            <p>
              <strong>PNG (uten tap)</strong>: Støtter gjennomsiktighet uten kvalitetstap. Reduserer filstørrelsen med gjennomsnittlig <strong>20%</strong> sammenlignet med en <strong>ukomprimert PNG</strong>. Men hvis <strong>PNG-formatet ikke er et absolutt krav</strong>, er <strong>WebP (uten tap)</strong> et bedre valg da det gir mindre filstørrelser.
            </p>

            <p>
              <strong>WebP (med tap)</strong>: Støtter gjennomsiktighet med et lite kvalitetstap. Reduserer filstørrelsen med gjennomsnittlig <strong>90%</strong> sammenlignet med en <strong>ukomprimert PNG</strong>. Det er en utmerket erstatning for <strong>PNG (med tap)</strong>, og tilbyr bedre kvalitet og mindre filer. Merk: WebP støttes ikke på enkelte eldre enheter.
            </p>

            <p>
              <strong>WebP (uten tap)</strong>: Støtter gjennomsiktighet uten kvalitetstap. Reduserer filstørrelsen med gjennomsnittlig <strong>50%</strong> sammenlignet med en <strong>ukomprimert PNG</strong>, noe som gjør det til en overlegen erstatning for <strong>PNG (uten tap)</strong>. Merk: WebP støttes ikke på enkelte eldre enheter.
            </p>

            <p>
              <strong>AVIF (med tap)</strong>: Støtter gjennomsiktighet med et lite kvalitetstap. Som etterfølgeren til WebP, tilbyr det en enda høyere komprimeringsrate, og reduserer filstørrelsen med gjennomsnittlig <strong>94%</strong> sammenlignet med <strong>ukomprimert PNG</strong>. Som et toppmoderne format, gir AVIF utmerket kvalitet med svært små filstørrelser. Kompatibiliteten med nettlesere og enheter er imidlertid fortsatt begrenset. Dette formatet er best for avanserte brukere eller når du er sikker på at målenhetene støtter det.
            </p>
            <p>
              <strong>AVIF (uten tap)</strong>: Støtter gjennomsiktighet uten kvalitetstap. Sammenlignet med en <strong>ukomprimert PNG</strong>, er filstørrelsesreduksjonen ikke betydelig, og i noen tilfeller kan filstørrelsen til og med øke. Med mindre du har et spesifikt behov for tapsfri AVIF, er <strong>PNG (uten tap)</strong> eller <strong>WebP (uten tap)</strong> generelt bedre alternativer.
            </p>
          </>
        }
      ]
    },
    themeToggle_title: "Bytt tema"
  },
  interactive: {
    store_imageDeletedNotification: "Fjernet: {fileName}",
    store_convertingImagesNotification: "Konverterer {number} bilder...",
    store_conversionFailedNotification: "Konvertering feilet: {fileName}",
    store_unsupportedFileTypeNotification: "Formatet støttes ikke, fjernet: {fileName}",
    store_fileReadErrorNotification: "Kunne ikke lese filen, fjernet: {fileName}",
    store_reconvertingNotification: "Konverterer på nytt: {fileName}",
    store_formatOptionAuto: "Automatisk komprimering",
    store_formatOptionJpg: "JPG",
    store_formatOptionPngLossy: "PNG (med tap)",
    store_formatOptionPngLossless: "PNG (uten tap)",
    store_formatOptionWebpLossy: "WebP (med tap)",
    store_formatOptionWebpLossless: "WebP (uten tap)",
    store_formatOptionAvifLossy: "AVIF (med tap)",
    store_formatOptionAvifLossless: "AVIF (uten tap)",
    previewSection_title: "Forhåndsvisning og nedlasting",
    previewSection_downloadAllButton: "Last ned alle",
    previewSection_deleteAllButton: "Slett alle",
    previewSection_placeholder: "Ingen bilder ennå.",
    previewSection_statusPending: "Venter",
    previewSection_statusConverting: "Konverterer...",
    previewSection_statusFailed: "Feilet. Last inn siden på nytt og prøv igjen.",
    previewSection_statusCompleted: "Fullført",
    previewSection_noCompletedFilesNotification: "Ingen fullførte bilder å laste ned.",
    previewSection_downloadStartedNotification: "Starter nedlasting av {fileCount} filer...",
    previewSection_listEmptyNotification: "Listen er tom.",
    previewSection_allDeletedNotification: "Alle bilder er fjernet.",
    previewSection_zipCreationNotification: "Oppretter ZIP...",
    previewSection_zipCreationWithSkipsNotification: "Oppretter ZIP: Noen bilder er ufullstendige og blir hoppet over.",
    previewSection_zipCreationErrorNotification: "Det oppstod en feil ved oppretting av ZIP.",
    previewSection_waitConversionNotification: "Vent til konverteringen er ferdig.",
    previewSection_downloadingFileNotification: "Laster ned: {fileName}",
    previewSection_originalSizeLabel: "Opprinnelig størrelse:",
    previewSection_convertedSizeLabel: "Konvertert størrelse:",
    previewSection_downloadTitle: "Last ned",
    previewSection_previewTitle: "Forhåndsvisning",
    previewSection_deleteTitle: "Slett",
    previewSection_comparisonTab: "Sammenlign",
    previewSection_settingsTab: "Innstillinger",
    previewSection_originalImageLabel: "Originalbilde",
    previewSection_completedImageLabel: "Konvertert bilde",
    previewSection_formatLabel: "Format:",
    previewSection_resolutionLabel: "Oppløsning:",
    previewSection_viewLargerButton: "Vis i ny fane",
    previewSection_qualityLabel: "Komprimeringskvalitet",
    previewSection_sizeLabel: "Justering av oppløsning",
    previewSection_outputFormatLabel: "Utdataformat",
    previewSection_reconvertButton: "Konverter dette bildet på nytt",
    globalControls_qualityLabel: "Global komprimeringskvalitet",
    globalControls_sizeLabel: "Global justering av oppløsning",
    globalControls_formatLabel: "Globalt utdataformat",
    globalControls_reconvertAllButton: "Bruk og konverter alle",
    globalControls_restoreDefaultsButton: "Tilbakestill alternativer",
    globalControls_noImagesNotification: "Vennligst legg til bilder først.",
    globalControls_reconvertingAllNotification: "Konverterer alle {imageCount} bilder på nytt med globale innstillinger",
    globalControls_restoredNotification: "Alternativene er tilbakestilt til standard.",
    addSection_title: "Legg til bilder",
    addArea_dragDropTitle: "Dra og slipp bilder her",
    addArea_supportedFormats: "Støtter JPG, PNG, WebP, AVIF og HEIC",
    addArea_selectButton: "Velg bilder",
    addArea_tips: "*Du kan legge til flere bilder samtidig.",
    ui_viewExplanationTitle: "Lær om disse alternativene",
  }
};

export default nbNO;