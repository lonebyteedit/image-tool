import type { Translation } from './en.tsx';

const bg: Translation = {
    static: {
        index_lang: 'bg',
        index_dir: 'ltr',
        index_title: "Image Tool - Усъвършенстван инструмент за конвертиране на изображения",
        index_description: "Безплатен, професионален онлайн инструмент за компресиране, преоразмеряване и конвертиране на формати на изображения. Поддържа взаимно конвертиране между JPG, PNG, WebP и AVIF, и може да преобразува HEIC в тези формати. Цялата обработка се извършва локално във вашия браузър — вашите файлове никога не се качват, което гарантира пълна поверителност и сигурност на данните.",
        optionsExplanation: {
            title: "Ръководство за опциите",
            subtitle: "Разберете функцията и употребата на всяка опция, за да оптимизирате резултатите от конвертирането на вашите изображения.",
            options: [
                {
                    id: "quality-option",
                    title: "Качество на компресия",
                    description: <>
                        <p>Тази опция е приложима само когато целевият формат е <strong>JPG</strong>, <strong>WebP (със загуби)</strong> или <strong>AVIF (със загуби)</strong>.</p>
                        <p>По-ниска стойност създава по-малък файл, но намалява качеството на изображението. Препоръчителната стойност от <strong>75</strong> предлага добър баланс между размер на файла и качество.</p>
                        <p>Ако файлът все още е твърде голям след компресия, опитайте да намалите резолюцията, което често е по-ефективно за намаляване на размера на файла.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Регулиране на резолюцията",
                    description: <>
                        <p>Намалете резолюцията на изображението в проценти, като запазите оригиналното съотношение на страните. <strong>100%</strong> запазва оригиналните размери.</p>
                        <p>Намаляването на резолюцията може <strong>значително</strong> да намали размера на файла. Ако не се нуждаете от високата резолюция на оригинала, това често е <strong>най-ефективният начин</strong> да направите файла по-малък.</p>
                        <p>При еднакви други опции и на база <strong>100% резолюция</strong>. Регулиране до <strong>75% резолюция</strong> намалява размера на файла средно с <strong>30%</strong>; регулиране до <strong>50% резолюция</strong> го намалява средно с <strong>65%</strong>; а регулиране до <strong>25% резолюция</strong> го намалява средно с <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Изходен формат",
                    description: <>
                        <p>Изберете изходния формат за изображението. Различните формати имат своите предимства и случаи на употреба.</p>
                        <p><strong>Автоматично компресиране</strong>: Тази опция автоматично прилага подходяща стратегия за компресия въз основа на входния формат:</p>
                        <ul>
                            <li>Входни файлове <strong>JPG</strong> се компресират като <strong>JPG</strong>.</li>
                            <li>Входни файлове <strong>PNG</strong> се компресират по метода <strong>PNG (със загуби)</strong>.</li>
                            <li>Входни файлове <strong>WebP</strong> се компресират по метода <strong>WebP (със загуби)</strong>.</li>
                            <li>Входни файлове <strong>AVIF</strong> се компресират по метода <strong>AVIF (със загуби)</strong>.</li>
                            <li>Входни файлове <strong>HEIC</strong> се конвертират в <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Можете също така ръчно да изберете формат по-долу според вашите специфични нужди. Ето подробно ръководство за всяка опция:
                        </p>

                        <p>
                            <strong>JPG</strong>: Най-популярният формат за изображения, въпреки че не поддържа прозрачност. При конвертиране от <strong>некомпресиран PNG</strong>, той може да намали размера на файла средно с <strong>90%</strong>. При настройка на качеството от <strong>75</strong>, загубата на качество често е <strong>незабележима</strong>. Ако не се нуждаете от прозрачен фон <strong>(което важи за повечето снимки)</strong>, конвертирането в <strong>JPG</strong> обикновено е най-добрият избор.
                        </p>

                        <p>
                            <strong>PNG (със загуби)</strong>: Поддържа прозрачност с известна загуба на качество, като намалява размера на файла средно със <strong>70%</strong> в сравнение с <strong>некомпресиран PNG</strong>. Изберете тази опция, само ако се нуждаете от прозрачен фон във формат PNG. В противен случай, <strong>JPG</strong> предлага <strong>по-добро качество при по-малък размер</strong> (без прозрачност), а <strong>WebP (със загуби)</strong> предоставя <strong>по-добро качество, по-малък размер и прозрачност</strong>, което го прави по-добра алтернатива, ако форматът PNG не е стриктно изискване.
                        </p>

                        <p>
                            <strong>PNG (без загуби)</strong>: Поддържа прозрачност без загуба на качество. Намалява размера на файла средно с <strong>20%</strong> в сравнение с <strong>некомпресиран PNG</strong>. Въпреки това, <strong>ако форматът PNG не е задължителен</strong>, <strong>WebP (без загуби)</strong> е по-добър избор, тъй като предлага по-малки размери на файловете.
                        </p>

                        <p>
                            <strong>WebP (със загуби)</strong>: Поддържа прозрачност с лека загуба на качество. Намалява размера на файла средно с <strong>90%</strong> в сравнение с <strong>некомпресиран PNG</strong>. Той е отличен заместител на <strong>PNG (със загуби)</strong>, предлагайки по-добро качество и по-малки размери. Забележка: WebP не се поддържа от някои по-стари устройства.
                        </p>

                        <p>
                            <strong>WebP (без загуби)</strong>: Поддържа прозрачност без загуба на качество. Намалява размера на файла средно с <strong>50%</strong> в сравнение с <strong>некомпресиран PNG</strong>, което го прави по-добър заместител на <strong>PNG (без загуби)</strong>. Забележка: WebP не се поддържа от някои по-стари устройства.
                        </p>

                        <p>
                            <strong>AVIF (със загуби)</strong>: Поддържа прозрачност с лека загуба на качество. Като наследник на WebP, той предлага още по-висока степен на компресия, намалявайки размера на файла средно с <strong>94%</strong> в сравнение с <strong>некомпресиран PNG</strong>. Като авангарден формат, AVIF осигурява отлично качество при много малки размери на файловете. Съвместимостта с браузъри и устройства обаче все още е ограничена. Този формат е най-подходящ за напреднали потребители или когато сте сигурни, че целевите устройства го поддържат.
                        </p>
                        <p>
                            <strong>AVIF (без загуби)</strong>: Поддържа прозрачност без загуба на качество. В сравнение с <strong>некомпресиран PNG</strong>, намаляването на размера на файла не е значително, а в някои случаи дори може да се увеличи. Освен ако нямате специфична нужда от AVIF без загуби, <strong>PNG (без загуби)</strong> или <strong>WebP (без загуби)</strong> обикновено са по-добри варианти.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Превключване на темата"
    },
    interactive: {
        store_imageDeletedNotification: "Премахнато: {fileName}",
        store_convertingImagesNotification: "Конвертиране на {number} изображения...",
        store_conversionFailedNotification: "Конвертирането е неуспешно: {fileName}",
        store_unsupportedFileTypeNotification: "Неподдържан формат, премахнато: {fileName}",
        store_fileReadErrorNotification: "Файлът не може да бъде прочетен, премахнато: {fileName}",
        store_reconvertingNotification: "Повторно конвертиране: {fileName}",
        store_formatOptionAuto: "Автоматично компресиране",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (със загуби)",
        store_formatOptionPngLossless: "PNG (без загуби)",
        store_formatOptionWebpLossy: "WebP (със загуби)",
        store_formatOptionWebpLossless: "WebP (без загуби)",
        store_formatOptionAvifLossy: "AVIF (със загуби)",
        store_formatOptionAvifLossless: "AVIF (без загуби)",
        previewSection_title: "Преглед и изтегляне",
        previewSection_downloadAllButton: "Изтегляне на всички",
        previewSection_deleteAllButton: "Изтриване на всички",
        previewSection_placeholder: "Все още няма изображения.",
        previewSection_statusPending: "Изчакващо",
        previewSection_statusConverting: "Конвертиране...",
        previewSection_statusFailed: "Неуспешно. Моля, опреснете страницата и опитайте отново.",
        previewSection_statusCompleted: "Завършено",
        previewSection_noCompletedFilesNotification: "Няма завършени изображения за изтегляне.",
        previewSection_downloadStartedNotification: "Започва изтегляне на {fileCount} файла...",
        previewSection_listEmptyNotification: "Списъкът е празен.",
        previewSection_allDeletedNotification: "Всички изображения са премахнати.",
        previewSection_zipCreationNotification: "Създаване на ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Създаване на ZIP: Някои изображения са незавършени и ще бъдат пропуснати.",
        previewSection_zipCreationErrorNotification: "Възникна грешка при създаването на ZIP.",
        previewSection_waitConversionNotification: "Моля, изчакайте конвертирането да приключи.",
        previewSection_downloadingFileNotification: "Изтегляне: {fileName}",
        previewSection_originalSizeLabel: "Оригинален размер:",
        previewSection_convertedSizeLabel: "Размер след конвертиране:",
        previewSection_downloadTitle: "Изтегляне",
        previewSection_previewTitle: "Преглед",
        previewSection_deleteTitle: "Изтриване",
        previewSection_comparisonTab: "Сравнение",
        previewSection_settingsTab: "Настройки",
        previewSection_originalImageLabel: "Оригинално изображение",
        previewSection_completedImageLabel: "Конвертирано изображение",
        previewSection_formatLabel: "Формат:",
        previewSection_resolutionLabel: "Резолюция:",
        previewSection_viewLargerButton: "Преглед в нов раздел",
        previewSection_qualityLabel: "Качество на компресия",
        previewSection_sizeLabel: "Регулиране на резолюцията",
        previewSection_outputFormatLabel: "Изходен формат",
        previewSection_reconvertButton: "Конвертирай отново",
        globalControls_qualityLabel: "Общо качество на компресия",
        globalControls_sizeLabel: "Общо регулиране на резолюцията",
        globalControls_formatLabel: "Общ изходен формат",
        globalControls_reconvertAllButton: "Приложи и конвертирай всички",
        globalControls_restoreDefaultsButton: "Възстанови по подразбиране",
        globalControls_noImagesNotification: "Моля, първо добавете изображения.",
        globalControls_reconvertingAllNotification: "Повторно конвертиране на всички {imageCount} изображения с общите настройки",
        globalControls_restoredNotification: "Опциите са върнати към стойностите по подразбиране.",
        addSection_title: "Добави изображения",
        addArea_dragDropTitle: "Плъзнете и пуснете изображения тук",
        addArea_supportedFormats: "Поддържа JPG, PNG, WebP, AVIF и HEIC",
        addArea_selectButton: "Избор на изображения",
        addArea_tips: "*Можете да добавите няколко изображения наведнъж.",
        ui_viewExplanationTitle: "Научете повече за тези опции",
    }
};

export default bg;