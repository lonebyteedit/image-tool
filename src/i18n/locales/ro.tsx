import type { Translation } from './en.tsx';

const ro: Translation = {
    static: {
        index_lang: 'ro',
        index_dir: 'ltr',
        index_title: "Image Tool - Instrument avansat de conversie a imaginilor",
        index_description: "Un instrument online, gratuit și profesional pentru compresia, redimensionarea și conversia formatului imaginilor. Suportă conversia reciprocă între JPG, PNG, WebP și AVIF și poate converti formatul HEIC în acestea. Toată procesarea are loc local în browserul dvs. — fișierele nu sunt niciodată încărcate, asigurând confidențialitate completă și securitatea datelor.",
        optionsExplanation: {
            title: "Ghidul opțiunilor",
            subtitle: "Înțelegeți funcția și utilizarea fiecărei opțiuni pentru a optimiza rezultatele conversiei imaginilor.",
            options: [
                {
                    id: "quality-option",
                    title: "Calitatea compresiei",
                    description: <>
                        <p>Această opțiune se aplică doar când formatul țintă este <strong>JPG</strong>, <strong>WebP (cu pierderi)</strong> sau <strong>AVIF (cu pierderi)</strong>.</p>
                        <p>O valoare mai mică creează un fișier mai mic, dar reduce calitatea imaginii. Valoarea recomandată de <strong>75</strong> oferă un echilibru bun între dimensiunea fișierului și calitate.</p>
                        <p>Dacă fișierul este încă prea mare după compresie, încercați să reduceți rezoluția, ceea ce este adesea mai eficient pentru micșorarea dimensiunii fișierului.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ajustarea rezoluției",
                    description: <>
                        <p>Reduceți rezoluția imaginii cu un procentaj, menținând raportul de aspect original. <strong>100%</strong> păstrează dimensiunile originale.</p>
                        <p>Reducerea rezoluției poate micșora <strong>semnificativ</strong> dimensiunea fișierului. Dacă nu aveți nevoie de rezoluția înaltă a originalului, aceasta este adesea <strong>cea mai eficientă metodă</strong> de a reduce dimensiunea fișierului.</p>
                        <p>Cu celelalte opțiuni identice, având ca referință <strong>rezoluția de 100%</strong>. Ajustarea la <strong>75% rezoluție</strong> reduce dimensiunea fișierului în medie cu <strong>30%</strong>; ajustarea la <strong>50% rezoluție</strong> o reduce în medie cu <strong>65%</strong>; iar ajustarea la <strong>25% rezoluție</strong> o reduce în medie cu <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formatul de ieșire",
                    description: <>
                        <p>Alegeți formatul de ieșire pentru imagine. Formate diferite au avantaje și cazuri de utilizare proprii.</p>
                        <p><strong>Compresie automată</strong>: Această opțiune aplică automat o strategie de compresie adecvată, bazată pe formatul de intrare:</p>
                        <ul>
                            <li>Imaginile <strong>JPG</strong> de intrare sunt comprimate ca <strong>JPG</strong>.</li>
                            <li>Imaginile <strong>PNG</strong> de intrare sunt comprimate folosind metoda <strong>PNG (cu pierderi)</strong>.</li>
                            <li>Imaginile <strong>WebP</strong> de intrare sunt comprimate folosind metoda <strong>WebP (cu pierderi)</strong>.</li>
                            <li>Imaginile <strong>AVIF</strong> de intrare sunt comprimate folosind metoda <strong>AVIF (cu pierderi)</strong>.</li>
                            <li>Imaginile <strong>HEIC</strong> de intrare sunt convertite în <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Puteți, de asemenea, să selectați manual un format mai jos, în funcție de nevoile dvs. specifice. Iată un ghid detaliat pentru fiecare opțiune:
                        </p>

                        <p>
                            <strong>JPG</strong>: Cel mai popular format de imagine, deși nu suportă transparență. La conversia dintr-un <strong>PNG necomprimat</strong>, poate reduce dimensiunea fișierului în medie cu <strong>90%</strong>. La o setare de calitate de <strong>75</strong>, pierderea de calitate este adesea <strong>imperceptibilă</strong>. Dacă nu aveți nevoie de un fundal transparent <strong>(ceea ce este valabil pentru majoritatea fotografiilor)</strong>, conversia în <strong>JPG</strong> este de obicei cea mai bună alegere.
                        </p>

                        <p>
                            <strong>PNG (cu pierderi)</strong>: Suportă transparență cu o oarecare pierdere de calitate, reducând dimensiunea fișierului în medie cu <strong>70%</strong> în comparație cu un <strong>PNG necomprimat</strong>. Alegeți această opțiune doar dacă aveți nevoie de un fundal transparent în format PNG. Altfel, <strong>JPG</strong> oferă o <strong>calitate mai bună pentru o dimensiune mai mică</strong> (fără transparență), iar <strong>WebP (cu pierderi)</strong> oferă <strong>calitate mai bună, dimensiune mai mică și transparență</strong>, fiind o alternativă superioară dacă formatul PNG nu este o cerință strictă.
                        </p>

                        <p>
                            <strong>PNG (fără pierderi)</strong>: Suportă transparență fără pierderi de calitate. Reduce dimensiunea fișierului în medie cu <strong>20%</strong> în comparație cu un <strong>PNG necomprimat</strong>. Totuși, <strong>dacă formatul PNG nu este o cerință strictă</strong>, <strong>WebP (fără pierderi)</strong> este o alegere mai bună, deoarece oferă fișiere de dimensiuni mai mici.
                        </p>

                        <p>
                            <strong>WebP (cu pierderi)</strong>: Suportă transparență cu o ușoară pierdere de calitate. Reduce dimensiunea fișierului în medie cu <strong>90%</strong> în comparație cu un <strong>PNG necomprimat</strong>. Este un înlocuitor excelent pentru <strong>PNG (cu pierderi)</strong>, oferind o calitate mai bună și dimensiuni mai mici. Notă: WebP nu este suportat pe unele dispozitive mai vechi.
                        </p>

                        <p>
                            <strong>WebP (fără pierderi)</strong>: Suportă transparență fără pierderi de calitate. Reduce dimensiunea fișierului în medie cu <strong>50%</strong> în comparație cu un <strong>PNG necomprimat</strong>, ceea ce îl face un înlocuitor superior pentru <strong>PNG (fără pierderi)</strong>. Notă: WebP nu este suportat pe unele dispozitive mai vechi.
                        </p>

                        <p>
                            <strong>AVIF (cu pierderi)</strong>: Suportă transparență cu o ușoară pierdere de calitate. Ca succesor al WebP, oferă o rată de compresie și mai mare, reducând dimensiunea fișierului în medie cu <strong>94%</strong> în comparație cu un <strong>PNG necomprimat</strong>. Fiind un format de ultimă generație, AVIF oferă o calitate excelentă la dimensiuni de fișier foarte mici. Cu toate acestea, compatibilitatea cu browserele și dispozitivele este încă limitată. Acest format este cel mai potrivit pentru utilizatorii avansați sau atunci când sunteți sigur că dispozitivele țintă îl suportă.
                        </p>
                        <p>
                            <strong>AVIF (fără pierderi)</strong>: Suportă transparență fără pierderi de calitate. În comparație cu un <strong>PNG necomprimat</strong>, reducerea dimensiunii fișierului nu este semnificativă, iar în unele cazuri, poate chiar crește. Cu excepția cazului în care aveți o nevoie specifică pentru AVIF fără pierderi, <strong>PNG (fără pierderi)</strong> sau <strong>WebP (fără pierderi)</strong> sunt în general opțiuni mai bune.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Schimbă tema"
    },
    interactive: {
        store_imageDeletedNotification: "Imagine eliminată: {fileName}",
        store_convertingImagesNotification: "Se convertesc {number} imagini...",
        store_conversionFailedNotification: "Conversia a eșuat: {fileName}",
        store_unsupportedFileTypeNotification: "Format neacceptat, imagine eliminată: {fileName}",
        store_fileReadErrorNotification: "Fișierul nu a putut fi citit, imagine eliminată: {fileName}",
        store_reconvertingNotification: "Se reconvertește: {fileName}",
        store_formatOptionAuto: "Compresie automată",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (cu pierderi)",
        store_formatOptionPngLossless: "PNG (fără pierderi)",
        store_formatOptionWebpLossy: "WebP (cu pierderi)",
        store_formatOptionWebpLossless: "WebP (fără pierderi)",
        store_formatOptionAvifLossy: "AVIF (cu pierderi)",
        store_formatOptionAvifLossless: "AVIF (fără pierderi)",
        previewSection_title: "Previzualizare și descărcare",
        previewSection_downloadAllButton: "Descarcă tot",
        previewSection_deleteAllButton: "Șterge tot",
        previewSection_placeholder: "Nicio imagine încă.",
        previewSection_statusPending: "În așteptare",
        previewSection_statusConverting: "Se convertește...",
        previewSection_statusFailed: "Eșuat. Te rugăm să reîncarci pagina și să încerci din nou.",
        previewSection_statusCompleted: "Finalizat",
        previewSection_noCompletedFilesNotification: "Nicio imagine finalizată pentru descărcare.",
        previewSection_downloadStartedNotification: "Se începe descărcarea pentru {fileCount} fișiere...",
        previewSection_listEmptyNotification: "Lista este goală.",
        previewSection_allDeletedNotification: "Toate imaginile au fost eliminate.",
        previewSection_zipCreationNotification: "Se creează ZIP-ul...",
        previewSection_zipCreationWithSkipsNotification: "Se creează ZIP-ul: Unele imagini sunt nefinalizate și vor fi omise.",
        previewSection_zipCreationErrorNotification: "A apărut o eroare la crearea fișierului ZIP.",
        previewSection_waitConversionNotification: "Te rugăm să aștepți finalizarea conversiei.",
        previewSection_downloadingFileNotification: "Se descarcă: {fileName}",
        previewSection_originalSizeLabel: "Dimensiune originală:",
        previewSection_convertedSizeLabel: "Dimensiune convertită:",
        previewSection_downloadTitle: "Descarcă",
        previewSection_previewTitle: "Previzualizează",
        previewSection_deleteTitle: "Șterge",
        previewSection_comparisonTab: "Comparație",
        previewSection_settingsTab: "Setări",
        previewSection_originalImageLabel: "Imaginea originală",
        previewSection_completedImageLabel: "Imaginea convertită",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Rezoluție:",
        previewSection_viewLargerButton: "Vezi într-o filă nouă",
        previewSection_qualityLabel: "Calitatea compresiei",
        previewSection_sizeLabel: "Ajustarea rezoluției",
        previewSection_outputFormatLabel: "Formatul de ieșire",
        previewSection_reconvertButton: "Reconvertește",
        globalControls_qualityLabel: "Calitatea compresiei globale",
        globalControls_sizeLabel: "Ajustarea rezoluției globale",
        globalControls_formatLabel: "Formatul de ieșire global",
        globalControls_reconvertAllButton: "Aplică și reconvertește tot",
        globalControls_restoreDefaultsButton: "Resetează opțiunile",
        globalControls_noImagesNotification: "Te rugăm să adaugi imagini mai întâi.",
        globalControls_reconvertingAllNotification: "Se reconvertesc toate cele {imageCount} imagini cu setările globale",
        globalControls_restoredNotification: "Opțiunile au fost resetate la valorile implicite.",
        addSection_title: "Adaugă imagini",
        addArea_dragDropTitle: "Trage și plasează imaginile aici",
        addArea_supportedFormats: "Suportă formatele JPG, PNG, WebP, AVIF și HEIC",
        addArea_selectButton: "Selectează imagini",
        addArea_tips: "*Se pot adăuga mai multe imagini odată.",
        ui_viewExplanationTitle: "Află mai multe despre aceste opțiuni",
    }
};

export default ro;