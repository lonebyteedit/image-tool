import type { Translation } from './en.tsx';

const pl: Translation = {
    static: {
        index_lang: 'pl',
        index_dir: 'ltr',
        index_title: "Image Tool - Zaawansowane narzędzie do konwersji obrazów",
        index_description: "Darmowe, profesjonalne narzędzie online do kompresji, zmiany rozmiaru i konwersji formatu obrazów. Obsługuje wzajemną konwersję między formatami JPG, PNG, WebP i AVIF oraz potrafi konwertować format HEIC na te formaty. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce — Twoje pliki nigdy nie są przesyłane na serwer, co zapewnia pełną prywatność i bezpieczeństwo danych.",
        optionsExplanation: {
            title: "Przewodnik po opcjach",
            subtitle: "Zrozum działanie i zastosowanie każdej opcji, aby zoptymalizować wyniki konwersji obrazów.",
            options: [
                {
                    id: "quality-option",
                    title: "Jakość kompresji",
                    description: <>
                        <p>Ta opcja ma zastosowanie tylko wtedy, gdy formatem docelowym jest <strong>JPG</strong>, <strong>WebP (stratna)</strong> lub <strong>AVIF (stratna)</strong>.</p>
                        <p>Niższa wartość tworzy mniejszy plik, ale obniża jakość obrazu. Zalecana wartość <strong>75</strong> zapewnia dobrą równowagę między rozmiarem pliku a jakością.</p>
                        <p>Jeśli po kompresji plik jest nadal zbyt duży, spróbuj zmniejszyć rozdzielczość, co często jest bardziej skuteczne w redukcji rozmiaru pliku.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Dostosowanie rozdzielczości",
                    description: <>
                        <p>Zmniejsz rozdzielczość obrazu o procent, zachowując oryginalne proporcje. <strong>100%</strong> oznacza zachowanie oryginalnych wymiarów.</p>
                        <p>Zmniejszenie rozdzielczości może <strong>znacząco</strong> zredukować rozmiar pliku. Jeśli nie potrzebujesz wysokiej rozdzielczości oryginału, jest to często <strong>najskuteczniejszy sposób</strong> na zmniejszenie pliku.</p>
                        <p>Przy tych samych pozostałych opcjach, w oparciu o <strong>100% rozdzielczości</strong>. Dostosowanie do <strong>75% rozdzielczości</strong> zmniejsza rozmiar pliku średnio o <strong>30%</strong>; dostosowanie do <strong>50% rozdzielczości</strong> zmniejsza go średnio o <strong>65%</strong>; a dostosowanie do <strong>25% rozdzielczości</strong> zmniejsza go średnio o <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Format wyjściowy",
                    description: <>
                        <p>Wybierz format wyjściowy dla obrazu. Różne formaty mają swoje zalety i przypadki użycia.</p>
                        <p><strong>Kompresja automatyczna</strong>: Ta opcja automatycznie stosuje odpowiednią strategię kompresji w oparciu o format wejściowy:</p>
                        <ul>
                            <li>Obrazy <strong>JPG</strong> są kompresowane jako <strong>JPG</strong>.</li>
                            <li>Obrazy <strong>PNG</strong> są kompresowane metodą <strong>PNG (stratna)</strong>.</li>
                            <li>Obrazy <strong>WebP</strong> są kompresowane metodą <strong>WebP (stratna)</strong>.</li>
                            <li>Obrazy <strong>AVIF</strong> są kompresowane metodą <strong>AVIF (stratna)</strong>.</li>
                            <li>Obrazy <strong>HEIC</strong> są konwertowane na <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Możesz również ręcznie wybrać format poniżej, w zależności od swoich konkretnych potrzeb. Oto szczegółowy przewodnik po każdej opcji:
                        </p>

                        <p>
                            <strong>JPG</strong>: Najpopularniejszy format obrazu, choć nie obsługuje przezroczystości. W porównaniu do <strong>nieskompresowanego PNG</strong>, może zmniejszyć rozmiar pliku średnio o <strong>90%</strong>. Przy ustawieniu jakości na <strong>75</strong>, utrata jakości jest często <strong>niezauważalna</strong>. Jeśli nie potrzebujesz przezroczystego tła <strong>(co dotyczy większości zdjęć)</strong>, konwersja na <strong>JPG</strong> jest zazwyczaj najlepszym wyborem.
                        </p>

                        <p>
                            <strong>PNG (stratna)</strong>: Obsługuje przezroczystość z pewną utratą jakości, zmniejszając rozmiar pliku średnio o <strong>70%</strong> w porównaniu do <strong>nieskompresowanego PNG</strong>. Wybierz tę opcję tylko wtedy, gdy potrzebujesz przezroczystego tła w formacie PNG. W przeciwnym razie <strong>JPG</strong> oferuje <strong>lepszą jakość przy mniejszym rozmiarze</strong> (bez przezroczystości), a <strong>WebP (stratna)</strong> zapewnia <strong>lepszą jakość, mniejszy rozmiar i przezroczystość</strong>, co czyni go lepszą alternatywą, jeśli format PNG nie jest ścisłym wymogiem.
                        </p>

                        <p>
                            <strong>PNG (bezstratna)</strong>: Obsługuje przezroczystość bez utraty jakości. Zmniejsza rozmiar pliku średnio o <strong>20%</strong> w porównaniu do <strong>nieskompresowanego PNG</strong>. Jednakże, <strong>jeśli format PNG nie jest ścisłym wymogiem</strong>, <strong>WebP (bezstratna)</strong> jest lepszym wyborem, ponieważ oferuje mniejsze rozmiary plików.
                        </p>

                        <p>
                            <strong>WebP (stratna)</strong>: Obsługuje przezroczystość z niewielką utratą jakości. Zmniejsza rozmiar pliku średnio o <strong>90%</strong> w porównaniu do <strong>nieskompresowanego PNG</strong>. Jest to doskonały zamiennik dla <strong>PNG (stratna)</strong>, oferujący lepszą jakość i mniejsze rozmiary. Uwaga: WebP nie jest obsługiwany na niektórych starszych urządzeniach.
                        </p>

                        <p>
                            <strong>WebP (bezstratna)</strong>: Obsługuje przezroczystość bez utraty jakości. Zmniejsza rozmiar pliku średnio o <strong>50%</strong> w porównaniu do <strong>nieskompresowanego PNG</strong>, co czyni go lepszym zamiennikiem dla <strong>PNG (bezstratna)</strong>. Uwaga: WebP nie jest obsługiwany na niektórych starszych urządzeniach.
                        </p>

                        <p>
                            <strong>AVIF (stratna)</strong>: Obsługuje przezroczystość z niewielką utratą jakości. Jako następca WebP, oferuje jeszcze wyższy stopień kompresji, zmniejszając rozmiar pliku średnio o <strong>94%</strong> w porównaniu do <strong>nieskompresowanego PNG</strong>. Jako nowoczesny format, AVIF zapewnia doskonałą jakość przy bardzo małych rozmiarach plików. Jednak kompatybilność z przeglądarkami i urządzeniami jest wciąż ograniczona. Ten format jest najlepszy dla zaawansowanych użytkowników lub gdy masz pewność, że urządzenia docelowe go obsługują.
                        </p>
                        <p>
                            <strong>AVIF (bezstratna)</strong>: Obsługuje przezroczystość bez utraty jakości. W porównaniu do <strong>nieskompresowanego PNG</strong>, redukcja rozmiaru pliku nie jest znacząca, a w niektórych przypadkach może nawet wzrosnąć. O ile nie masz szczególnej potrzeby bezstratnego formatu AVIF, <strong>PNG (bezstratna)</strong> lub <strong>WebP (bezstratna)</strong> są generalnie lepszymi opcjami.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Zmień motyw"
    },
    interactive: {
        store_imageDeletedNotification: "Usunięto: {fileName}",
        store_convertingImagesNotification: "Trwa konwertowanie {number} obrazów...",
        store_conversionFailedNotification: "Konwersja nie powiodła się: {fileName}",
        store_unsupportedFileTypeNotification: "Nieobsługiwany format, usunięto: {fileName}",
        store_fileReadErrorNotification: "Nie można odczytać pliku, usunięto: {fileName}",
        store_reconvertingNotification: "Ponowne konwertowanie: {fileName}",
        store_formatOptionAuto: "Kompresja automatyczna",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (stratna)",
        store_formatOptionPngLossless: "PNG (bezstratna)",
        store_formatOptionWebpLossy: "WebP (stratna)",
        store_formatOptionWebpLossless: "WebP (bezstratna)",
        store_formatOptionAvifLossy: "AVIF (stratna)",
        store_formatOptionAvifLossless: "AVIF (bezstratna)",
        previewSection_title: "Podgląd i pobieranie",
        previewSection_downloadAllButton: "Pobierz wszystko",
        previewSection_deleteAllButton: "Usuń wszystko",
        previewSection_placeholder: "Brak obrazów.",
        previewSection_statusPending: "Oczekuje",
        previewSection_statusConverting: "Konwertowanie...",
        previewSection_statusFailed: "Błąd. Odśwież stronę i spróbuj ponownie.",
        previewSection_statusCompleted: "Ukończono",
        previewSection_noCompletedFilesNotification: "Brak ukończonych obrazów do pobrania.",
        previewSection_downloadStartedNotification: "Rozpoczynanie pobierania {fileCount} plików...",
        previewSection_listEmptyNotification: "Lista jest pusta.",
        previewSection_allDeletedNotification: "Wszystkie obrazy zostały usunięte.",
        previewSection_zipCreationNotification: "Trwa tworzenie ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Trwa tworzenie ZIP: Niektóre obrazy są nieukończone i zostaną pominięte.",
        previewSection_zipCreationErrorNotification: "Wystąpił błąd podczas tworzenia pliku ZIP.",
        previewSection_waitConversionNotification: "Poczekaj na zakończenie konwersji.",
        previewSection_downloadingFileNotification: "Pobieranie: {fileName}",
        previewSection_originalSizeLabel: "Rozmiar oryginalny:",
        previewSection_convertedSizeLabel: "Rozmiar po konwersji:",
        previewSection_downloadTitle: "Pobierz",
        previewSection_previewTitle: "Podgląd",
        previewSection_deleteTitle: "Usuń",
        previewSection_comparisonTab: "Porównaj",
        previewSection_settingsTab: "Ustawienia",
        previewSection_originalImageLabel: "Oryginalny obraz",
        previewSection_completedImageLabel: "Obraz po konwersji",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Rozdzielczość:",
        previewSection_viewLargerButton: "Zobacz w nowej karcie",
        previewSection_qualityLabel: "Jakość kompresji",
        previewSection_sizeLabel: "Dostosowanie rozdzielczości",
        previewSection_outputFormatLabel: "Format wyjściowy",
        previewSection_reconvertButton: "Konwertuj ponownie",
        globalControls_qualityLabel: "Globalna jakość kompresji",
        globalControls_sizeLabel: "Globalne dostosowanie rozdzielczości",
        globalControls_formatLabel: "Globalny format wyjściowy",
        globalControls_reconvertAllButton: "Zastosuj i konwertuj wszystko",
        globalControls_restoreDefaultsButton: "Przywróć domyślne",
        globalControls_noImagesNotification: "Najpierw dodaj obrazy.",
        globalControls_reconvertingAllNotification: "Ponowne konwertowanie wszystkich {imageCount} obrazów z globalnymi ustawieniami",
        globalControls_restoredNotification: "Opcje zostały zresetowane do wartości domyślnych.",
        addSection_title: "Dodaj obrazy",
        addArea_dragDropTitle: "Przeciągnij i upuść obrazy tutaj",
        addArea_supportedFormats: "Obsługuje formaty JPG, PNG, WebP, AVIF i HEIC",
        addArea_selectButton: "Wybierz obrazy",
        addArea_tips: "*Można dodać wiele obrazów jednocześnie.",
        ui_viewExplanationTitle: "Dowiedz się więcej o tych opcjach",
    }
};

export default pl;