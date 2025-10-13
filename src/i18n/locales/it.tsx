import type { Translation } from './en.tsx';

const it: Translation = {
    static: {
        index_lang: 'it',
        index_dir: 'ltr',
        index_title: "Image Tool - Strumento avanzato di conversione immagini",
        index_description: "Uno strumento online professionale e gratuito per la compressione, il ridimensionamento e la conversione di formato delle immagini. Supporta la conversione tra formati JPG, PNG, WebP e AVIF, e può convertire il formato HEIC in questi formati. Tutta l'elaborazione avviene localmente nel tuo browser — i tuoi file non vengono mai caricati, garantendo la totale privacy e sicurezza dei dati.",
        optionsExplanation: {
            title: "Guida alle opzioni",
            subtitle: "Comprendi la funzione e l'uso di ogni opzione per ottimizzare i risultati della conversione delle tue immagini.",
            options: [
                {
                    id: "quality-option",
                    title: "Qualità della compressione",
                    description: <>
                        <p>Questa opzione si applica solo quando il formato di destinazione è <strong>JPG</strong>, <strong>WebP (con perdita)</strong> o <strong>AVIF (con perdita)</strong>.</p>
                        <p>Un valore più basso crea un file più piccolo ma riduce la qualità dell'immagine. Il valore consigliato di <strong>75</strong> offre un ottimo equilibrio tra dimensione del file e qualità.</p>
                        <p>Se il file è ancora troppo grande dopo la compressione, prova a ridurre la risoluzione, che è spesso più efficace per diminuire la dimensione del file.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Regolazione della risoluzione",
                    description: <>
                        <p>Riduci la risoluzione dell'immagine in percentuale mantenendo le proporzioni originali. <strong>100%</strong> conserva le dimensioni originali.</p>
                        <p>Ridurre la risoluzione può ridurre <strong>notevolmente</strong> la dimensione del file. Se non hai bisogno dell'alta risoluzione originale, questo è spesso il <strong>modo più efficace</strong> per rendere il file più piccolo.</p>
                        <p>A parità di altre opzioni e partendo da una risoluzione del <strong>100%</strong>. Regolando la risoluzione al <strong>75%</strong> si riduce la dimensione del file in media del <strong>30%</strong>; regolandola al <strong>50%</strong> si riduce in media del <strong>65%</strong>; regolandola al <strong>25%</strong> si riduce in media del <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formato di output",
                    description: <>
                        <p>Scegli il formato di output per l'immagine. Diversi formati hanno i loro vantaggi e casi d'uso.</p>
                        <p><strong>Compressione Automatica</strong>: Questa opzione applica automaticamente una strategia di compressione adatta in base al formato di input:</p>
                        <ul>
                            <li>Gli input <strong>JPG</strong> vengono compressi come <strong>JPG</strong>.</li>
                            <li>Gli input <strong>PNG</strong> vengono compressi utilizzando il metodo <strong>PNG (con perdita)</strong>.</li>
                            <li>Gli input <strong>WebP</strong> vengono compressi utilizzando il metodo <strong>WebP (con perdita)</strong>.</li>
                            <li>Gli input <strong>AVIF</strong> vengono compressi utilizzando il metodo <strong>AVIF (con perdita)</strong>.</li>
                            <li>Gli input <strong>HEIC</strong> vengono convertiti in <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Puoi anche selezionare manualmente un formato qui sotto in base alle tue esigenze specifiche. Ecco una guida dettagliata per ogni opzione:
                        </p>

                        <p>
                            <strong>JPG</strong>: Il formato di immagine più popolare, sebbene non supporti la trasparenza. Rispetto a un <strong>PNG non compresso</strong>, può ridurre la dimensione del file in media del <strong>90%</strong>. Con un'impostazione di qualità di <strong>75</strong>, la perdita di qualità è quasi <strong>impercettibile</strong>. Se non hai bisogno di uno sfondo trasparente <strong>(come per la maggior parte delle foto)</strong>, la conversione in <strong>JPG</strong> è solitamente la scelta migliore.
                        </p>

                        <p>
                            <strong>PNG (con perdita)</strong>: Supporta la trasparenza con una certa perdita di qualità, riducendo la dimensione del file in media del <strong>70%</strong> rispetto a un <strong>PNG non compresso</strong>. Scegli questa opzione solo se hai bisogno di uno sfondo trasparente in formato PNG. Altrimenti, <strong>JPG</strong> offre una <strong>qualità migliore per una dimensione inferiore</strong> (senza trasparenza), e <strong>WebP (con perdita)</strong> fornisce <strong>qualità migliore, dimensioni inferiori e trasparenza</strong>, rendendolo un'alternativa superiore se il formato PNG non è un requisito stretto.
                        </p>

                        <p>
                            <strong>PNG (senza perdita)</strong>: Supporta la trasparenza senza perdita di qualità. Riduce la dimensione del file in media del <strong>20%</strong> rispetto a un <strong>PNG non compresso</strong>. Tuttavia, <strong>se il formato PNG non è un requisito stretto</strong>, <strong>WebP (senza perdita)</strong> è una scelta migliore in quanto offre dimensioni di file inferiori.
                        </p>

                        <p>
                            <strong>WebP (con perdita)</strong>: Supporta la trasparenza con una leggera perdita di qualità. Riduce la dimensione del file in media del <strong>90%</strong> rispetto a un <strong>PNG non compresso</strong>. È un eccellente sostituto per il <strong>PNG (con perdita)</strong>, offrendo una qualità migliore e dimensioni inferiori. Nota: WebP non è supportato su alcuni dispositivi più vecchi.
                        </p>

                        <p>
                            <strong>WebP (senza perdita)</strong>: Supporta la trasparenza senza perdita di qualità. Riduce la dimensione del file in media del <strong>50%</strong> rispetto a un <strong>PNG non compresso</strong>, rendendolo un sostituto superiore al <strong>PNG (senza perdita)</strong>. Nota: WebP non è supportato su alcuni dispositivi più vecchi.
                        </p>

                        <p>
                            <strong>AVIF (con perdita)</strong>: Supporta la trasparenza con una leggera perdita di qualità. Come successore di WebP, offre un tasso di compressione ancora più elevato, riducendo la dimensione del file in media del <strong>94%</strong> rispetto a un <strong>PNG non compresso</strong>. Essendo un formato all'avanguardia, AVIF offre una qualità eccellente con dimensioni di file molto ridotte. Tuttavia, la compatibilità con browser e dispositivi è ancora limitata. Questo formato è ideale per utenti esperti o quando si è certi che i dispositivi di destinazione lo supportino.
                        </p>
                        <p>
                            <strong>AVIF (senza perdita)</strong>: Supporta la trasparenza senza perdita di qualità. Rispetto a un <strong>PNG non compresso</strong>, la riduzione della dimensione del file non è significativa e, in alcuni casi, potrebbe addirittura aumentare. A meno che tu non abbia una necessità specifica per AVIF senza perdita, <strong>PNG (senza perdita)</strong> o <strong>WebP (senza perdita)</strong> sono generalmente opzioni migliori.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Cambia tema"
    },
    interactive: {
        store_imageDeletedNotification: "Rimosso: {fileName}",
        store_convertingImagesNotification: "Conversione di {number} immagini in corso...",
        store_conversionFailedNotification: "Conversione fallita: {fileName}",
        store_unsupportedFileTypeNotification: "Formato non supportato, rimosso: {fileName}",
        store_fileReadErrorNotification: "Impossibile leggere il file, rimosso: {fileName}",
        store_reconvertingNotification: "Riconversione: {fileName}",
        store_formatOptionAuto: "Compressione Automatica",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (con perdita)",
        store_formatOptionPngLossless: "PNG (senza perdita)",
        store_formatOptionWebpLossy: "WebP (con perdita)",
        store_formatOptionWebpLossless: "WebP (senza perdita)",
        store_formatOptionAvifLossy: "AVIF (con perdita)",
        store_formatOptionAvifLossless: "AVIF (senza perdita)",
        previewSection_title: "Anteprima e Download",
        previewSection_downloadAllButton: "Scarica tutto",
        previewSection_deleteAllButton: "Elimina tutto",
        previewSection_placeholder: "Ancora nessuna immagine.",
        previewSection_statusPending: "In attesa",
        previewSection_statusConverting: "In conversione...",
        previewSection_statusFailed: "Fallito. Ricarica la pagina e riprova.",
        previewSection_statusCompleted: "Completato",
        previewSection_noCompletedFilesNotification: "Nessuna immagine completata da scaricare.",
        previewSection_downloadStartedNotification: "Avvio del download di {fileCount} file...",
        previewSection_listEmptyNotification: "La lista è vuota.",
        previewSection_allDeletedNotification: "Tutte le immagini sono state rimosse.",
        previewSection_zipCreationNotification: "Creazione ZIP in corso...",
        previewSection_zipCreationWithSkipsNotification: "Creazione ZIP in corso: alcune immagini non sono completate e saranno ignorate.",
        previewSection_zipCreationErrorNotification: "Si è verificato un errore durante la creazione dello ZIP.",
        previewSection_waitConversionNotification: "Attendi il completamento della conversione.",
        previewSection_downloadingFileNotification: "Download in corso: {fileName}",
        previewSection_originalSizeLabel: "Dimensione originale:",
        previewSection_convertedSizeLabel: "Dimensione convertita:",
        previewSection_downloadTitle: "Scarica",
        previewSection_previewTitle: "Anteprima",
        previewSection_deleteTitle: "Elimina",
        previewSection_comparisonTab: "Confronta",
        previewSection_settingsTab: "Impostazioni",
        previewSection_originalImageLabel: "Immagine originale",
        previewSection_completedImageLabel: "Immagine convertita",
        previewSection_formatLabel: "Formato:",
        previewSection_resolutionLabel: "Risoluzione:",
        previewSection_viewLargerButton: "Vedi in una nuova scheda",
        previewSection_qualityLabel: "Qualità compressione",
        previewSection_sizeLabel: "Regolazione risoluzione",
        previewSection_outputFormatLabel: "Formato di output",
        previewSection_reconvertButton: "Riconverti",
        globalControls_qualityLabel: "Qualità compressione globale",
        globalControls_sizeLabel: "Regolazione risoluzione globale",
        globalControls_formatLabel: "Formato di output globale",
        globalControls_reconvertAllButton: "Applica e riconverti tutto",
        globalControls_restoreDefaultsButton: "Ripristina opzioni",
        globalControls_noImagesNotification: "Per favore, aggiungi prima delle immagini.",
        globalControls_reconvertingAllNotification: "Riconversione di tutte le {imageCount} immagini con le impostazioni globali",
        globalControls_restoredNotification: "Le opzioni sono state ripristinate ai valori predefiniti.",
        addSection_title: "Aggiungi immagini",
        addArea_dragDropTitle: "Trascina le immagini qui",
        addArea_supportedFormats: "Supporta JPG, PNG, WebP, AVIF e HEIC",
        addArea_selectButton: "Seleziona immagini",
        addArea_tips: "*Puoi aggiungere più immagini alla volta.",
        ui_viewExplanationTitle: "Scopri di più su queste opzioni",
    }
};

export default it;