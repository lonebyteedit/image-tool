import type { Translation } from './en.tsx';

const de: Translation = {
    static: {
        index_lang: 'de',
        index_dir: 'ltr',
        index_title: "Image Tool - Fortgeschrittenes Tool zur Bildkonvertierung",
        index_description: "Ein kostenloses, professionelles Online-Tool zur Bildkomprimierung und Größenänderung. Es unterstützt die gegenseitige Konvertierung zwischen JPG, PNG, WebP sowie AVIF und wandelt zudem HEIC in diese Formate um. Die gesamte Verarbeitung findet lokal in Ihrem Browser statt – Ihre Dateien werden niemals hochgeladen, was vollständige Privatsphäre und Datensicherheit gewährleistet.",
        optionsExplanation: {
            title: "Anleitung zu den Optionen",
            subtitle: "Verstehen Sie die Funktion und Verwendung jeder Option, um Ihre Bildkonvertierungsergebnisse zu optimieren.",
            options: [
                {
                    id: "quality-option",
                    title: "Kompressionsqualität",
                    description: <>
                        <p>Diese Option gilt nur, wenn das Zielformat <strong>JPG</strong>, <strong>WebP (verlustbehaftet)</strong> oder <strong>AVIF (verlustbehaftet)</strong> ist.</p>
                        <p>Ein niedrigerer Wert erzeugt eine kleinere Datei, verringert jedoch die Bildqualität. Der empfohlene Wert von <strong>75</strong> bietet ein gutes Gleichgewicht zwischen Dateigröße und Qualität.</p>
                        <p>Wenn die Datei nach der Komprimierung immer noch zu groß ist, versuchen Sie, die Auflösung zu reduzieren, was oft effektiver ist, um die Dateigröße zu verringern.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Anpassung der Auflösung",
                    description: <>
                        <p>Reduzieren Sie die Bildauflösung prozentual, während das ursprüngliche Seitenverhältnis beibehalten wird. <strong>100%</strong> behält die Originalabmessungen bei.</p>
                        <p>Die Reduzierung der Auflösung kann die Dateigröße <strong>erheblich</strong> verringern. Wenn Sie die hohe Auflösung des Originals nicht benötigen, ist dies oft die <strong>effektivste Methode</strong>, um die Datei zu verkleinern.</p>
                        <p>Bei ansonsten gleichen Optionen, basierend auf <strong>100% Auflösung</strong>: Eine Anpassung auf <strong>75% Auflösung</strong> verringert die Dateigröße um durchschnittlich <strong>30%</strong>; eine Anpassung auf <strong>50% Auflösung</strong> verringert sie um durchschnittlich <strong>65%</strong>; und eine Anpassung auf <strong>25% Auflösung</strong> verringert sie um durchschnittlich <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Ausgabeformat",
                    description: <>
                        <p>Wählen Sie das Ausgabeformat für das Bild. Verschiedene Formate haben ihre eigenen Vorteile und Anwendungsfälle.</p>
                        <p><strong>Automatische Komprimierung</strong>: Diese Option wendet eine passende Komprimierungsstrategie basierend auf dem Eingabeformat an:</p>
                        <ul>
                            <li><strong>JPG</strong>-Bilder werden als <strong>JPG</strong> komprimiert.</li>
                            <li><strong>PNG</strong>-Bilder werden mit der <strong>PNG (verlustbehaftet)</strong>-Methode komprimiert.</li>
                            <li><strong>WebP</strong>-Bilder werden mit der <strong>WebP (verlustbehaftet)</strong>-Methode komprimiert.</li>
                            <li><strong>AVIF</strong>-Bilder werden mit der <strong>AVIF (verlustbehaftet)</strong>-Methode komprimiert.</li>
                            <li><strong>HEIC</strong>-Bilder werden in <strong>JPG</strong> konvertiert.</li>
                        </ul>

                        <p>
                            Sie können auch manuell ein Format basierend auf Ihren spezifischen Bedürfnissen auswählen. Hier ist eine detaillierte Anleitung zu jeder Option:
                        </p>

                        <p>
                            <strong>JPG</strong>: Das beliebteste Bildformat, obwohl es keine Transparenz unterstützt. Im Vergleich zu einem <strong>unkomprimierten PNG</strong> kann es die Dateigröße um durchschnittlich <strong>90%</strong> reduzieren. Bei einer Qualitätseinstellung von <strong>75</strong> ist der Qualitätsverlust oft <strong>kaum wahrnehmbar</strong>. Wenn Sie keinen transparenten Hintergrund benötigen <strong>(was bei den meisten Fotos der Fall ist)</strong>, ist die Konvertierung in <strong>JPG</strong> in der Regel die beste Wahl.
                        </p>

                        <p>
                            <strong>PNG (verlustbehaftet)</strong>: Unterstützt Transparenz mit geringem Qualitätsverlust und reduziert die Dateigröße um durchschnittlich <strong>70%</strong> im Vergleich zu einem <strong>unkomprimierten PNG</strong>. Wählen Sie diese Option nur, wenn Sie einen transparenten Hintergrund im PNG-Format benötigen. Andernfalls bietet <strong>JPG</strong> eine <strong>bessere Qualität bei kleinerer Größe</strong> (ohne Transparenz), und <strong>WebP (verlustbehaftet)</strong> bietet <strong>bessere Qualität, kleinere Größe und Transparenz</strong>, was es zu einer überlegenen Alternative macht, wenn das PNG-Format keine strikte Anforderung ist.
                        </p>

                        <p>
                            <strong>PNG (verlustfrei)</strong>: Unterstützt Transparenz ohne Qualitätsverlust. Reduziert die Dateigröße um durchschnittlich <strong>20%</strong> im Vergleich zu einem <strong>unkomprimierten PNG</strong>. Wenn das <strong>PNG-Format jedoch keine strikte Anforderung ist</strong>, ist <strong>WebP (verlustfrei)</strong> eine bessere Wahl, da es kleinere Dateigrößen bietet.
                        </p>

                        <p>
                            <strong>WebP (verlustbehaftet)</strong>: Unterstützt Transparenz mit leichtem Qualitätsverlust. Reduziert die Dateigröße um durchschnittlich <strong>90%</strong> im Vergleich zu einem <strong>unkomprimierten PNG</strong>. Es ist ein ausgezeichneter Ersatz für <strong>PNG (verlustbehaftet)</strong> und bietet bessere Qualität und kleinere Dateigrößen. Hinweis: WebP wird von einigen älteren Geräten nicht unterstützt.
                        </p>

                        <p>
                            <strong>WebP (verlustfrei)</strong>: Unterstützt Transparenz ohne Qualitätsverlust. Reduziert die Dateigröße um durchschnittlich <strong>50%</strong> im Vergleich zu einem <strong>unkomprimierten PNG</strong>, was es zu einem überlegenen Ersatz für <strong>PNG (verlustfrei)</strong> macht. Hinweis: WebP wird von einigen älteren Geräten nicht unterstützt.
                        </p>

                        <p>
                            <strong>AVIF (verlustbehaftet)</strong>: Unterstützt Transparenz mit leichtem Qualitätsverlust. Als Nachfolger von WebP bietet es eine noch höhere Kompressionsrate und reduziert die Dateigröße um durchschnittlich <strong>94%</strong> im Vergleich zu <strong>unkomprimiertem PNG</strong>. Als hochmodernes Format bietet AVIF exzellente Qualität bei sehr kleinen Dateigrößen. Die Kompatibilität mit Browsern und Geräten ist jedoch noch eingeschränkt. Dieses Format eignet sich am besten für fortgeschrittene Benutzer oder wenn Sie sicher sind, dass die Zielgeräte es unterstützen.
                        </p>
                        <p>
                            <strong>AVIF (verlustfrei)</strong>: Unterstützt Transparenz ohne Qualitätsverlust. Im Vergleich zu einem <strong>unkomprimierten PNG</strong> ist die Reduzierung der Dateigröße nicht signifikant und kann in einigen Fällen sogar zunehmen. Sofern Sie keine spezifische Anforderung für verlustfreies AVIF haben, sind <strong>PNG (verlustfrei)</strong> oder <strong>WebP (verlustfrei)</strong> im Allgemeinen bessere Optionen.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Design umschalten"
    },
    interactive: {
        store_imageDeletedNotification: "Entfernt: {fileName}",
        store_convertingImagesNotification: "Konvertiere {number} Bilder...",
        store_conversionFailedNotification: "Konvertierung fehlgeschlagen: {fileName}",
        store_unsupportedFileTypeNotification: "Nicht unterstütztes Format, entfernt: {fileName}",
        store_fileReadErrorNotification: "Datei konnte nicht gelesen werden, entfernt: {fileName}",
        store_reconvertingNotification: "Erneute Konvertierung: {fileName}",
        store_formatOptionAuto: "Automatische Komprimierung",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (verlustbehaftet)",
        store_formatOptionPngLossless: "PNG (verlustfrei)",
        store_formatOptionWebpLossy: "WebP (verlustbehaftet)",
        store_formatOptionWebpLossless: "WebP (verlustfrei)",
        store_formatOptionAvifLossy: "AVIF (verlustbehaftet)",
        store_formatOptionAvifLossless: "AVIF (verlustfrei)",
        previewSection_title: "Vorschau und Download",
        previewSection_downloadAllButton: "Alle herunterladen",
        previewSection_deleteAllButton: "Alle löschen",
        previewSection_placeholder: "Noch keine Bilder.",
        previewSection_statusPending: "Ausstehend",
        previewSection_statusConverting: "Konvertierung...",
        previewSection_statusFailed: "Fehlgeschlagen. Bitte laden Sie die Seite neu und versuchen Sie es erneut.",
        previewSection_statusCompleted: "Abgeschlossen",
        previewSection_noCompletedFilesNotification: "Keine abgeschlossenen Bilder zum Herunterladen vorhanden.",
        previewSection_downloadStartedNotification: "Download von {fileCount} Dateien wird gestartet...",
        previewSection_listEmptyNotification: "Die Liste ist leer.",
        previewSection_allDeletedNotification: "Alle Bilder wurden entfernt.",
        previewSection_zipCreationNotification: "ZIP wird erstellt...",
        previewSection_zipCreationWithSkipsNotification: "ZIP wird erstellt: Einige Bilder sind unvollendet und werden übersprungen.",
        previewSection_zipCreationErrorNotification: "Beim Erstellen des ZIP ist ein Fehler aufgetreten.",
        previewSection_waitConversionNotification: "Bitte warten Sie, bis die Konvertierung abgeschlossen ist.",
        previewSection_downloadingFileNotification: "Wird heruntergeladen: {fileName}",
        previewSection_originalSizeLabel: "Originalgröße:",
        previewSection_convertedSizeLabel: "Konvertierte Größe:",
        previewSection_downloadTitle: "Herunterladen",
        previewSection_previewTitle: "Vorschau",
        previewSection_deleteTitle: "Löschen",
        previewSection_comparisonTab: "Vergleich",
        previewSection_settingsTab: "Einstellungen",
        previewSection_originalImageLabel: "Originalbild",
        previewSection_completedImageLabel: "Konvertiertes Bild",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Auflösung:",
        previewSection_viewLargerButton: "In neuem Tab ansehen",
        previewSection_qualityLabel: "Kompressionsqualität",
        previewSection_sizeLabel: "Anpassung der Auflösung",
        previewSection_outputFormatLabel: "Ausgabeformat",
        previewSection_reconvertButton: "Dieses Bild erneut konvertieren",
        globalControls_qualityLabel: "Globale Kompressionsqualität",
        globalControls_sizeLabel: "Globale Anpassung der Auflösung",
        globalControls_formatLabel: "Globales Ausgabeformat",
        globalControls_reconvertAllButton: "Anwenden und alle erneut konvertieren",
        globalControls_restoreDefaultsButton: "Optionen zurücksetzen",
        globalControls_noImagesNotification: "Bitte fügen Sie zuerst Bilder hinzu.",
        globalControls_reconvertingAllNotification: "Alle {imageCount} Bilder werden mit globalen Einstellungen erneut konvertiert.",
        globalControls_restoredNotification: "Die Optionen wurden auf die Standardwerte zurückgesetzt.",
        addSection_title: "Bilder hinzufügen",
        addArea_dragDropTitle: "Bilder hier per Drag & Drop ablegen",
        addArea_supportedFormats: "Unterstützt JPG, PNG, WebP, AVIF und HEIC",
        addArea_selectButton: "Bilder auswählen",
        addArea_tips: "*Sie können mehrere Bilder gleichzeitig hinzufügen.",
        ui_viewExplanationTitle: "Mehr über diese Optionen erfahren",
    }
};

export default de;