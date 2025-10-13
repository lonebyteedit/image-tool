import type { Translation } from './en.tsx';

const uk: Translation = {
    static: {
        index_lang: 'uk',
        index_dir: 'ltr',
        index_title: "Image Tool - Просунутий інструмент для конвертації зображень",
        index_description: "Безкоштовний професійний онлайн-інструмент для стиснення, зміни розміру та конвертації форматів зображень. Він підтримує взаємне перетворення між JPG, PNG, WebP та AVIF, а також може конвертувати HEIC у ці формати. Уся обробка відбувається локально у вашому браузері — ваші файли ніколи не завантажуються на сервер, що гарантує повну конфіденційність та безпеку даних.",
        optionsExplanation: {
            title: "Посібник з опцій",
            subtitle: "Дізнайтеся про функції та використання кожної опції, щоб оптимізувати результати конвертації зображень.",
            options: [
                {
                    id: "quality-option",
                    title: "Якість стиснення",
                    description: <>
                        <p>Ця опція застосовується, лише якщо цільовий формат — <strong>JPG</strong>, <strong>WebP (із втратами)</strong> або <strong>AVIF (із втратами)</strong>.</p>
                        <p>Чим нижче значення, тим менший розмір файлу, але й нижча якість зображення. Рекомендоване значення <strong>75</strong> забезпечує хороший баланс між розміром файлу та якістю.</p>
                        <p>Якщо після стиснення файл все ще завеликий, спробуйте зменшити роздільну здатність — це часто є ефективнішим для зменшення розміру.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Зміна роздільної здатності",
                    description: <>
                        <p>Зменшує роздільну здатність зображення у відсотках, зберігаючи оригінальні пропорції. <strong>100%</strong> означає збереження оригінального розміру.</p>
                        <p>Зменшення роздільної здатності може <strong>значно</strong> зменшити розмір файлу. Якщо вам не потрібна висока роздільна здатність оригіналу, це часто є <strong>найефективнішим способом</strong> зменшити файл.</p>
                        <p>За однакових інших налаштувань, порівняно з роздільною здатністю <strong>100%</strong>: зміна до <strong>75%</strong> зменшує розмір файлу в середньому на <strong>30%</strong>; зміна до <strong>50%</strong> — на <strong>65%</strong>; а зміна до <strong>25%</strong> — на <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Вихідний формат",
                    description: <>
                        <p>Виберіть вихідний формат для зображення. Різні формати мають свої переваги та сфери застосування.</p>
                        <p><strong>Автоматичне стиснення</strong>: Ця опція автоматично застосовує відповідну стратегію стиснення залежно від вхідного формату:</p>
                        <ul>
                            <li>Вхідні <strong>JPG</strong> стискаються як <strong>JPG</strong>.</li>
                            <li>Вхідні <strong>PNG</strong> стискаються методом <strong>PNG (із втратами)</strong>.</li>
                            <li>Вхідні <strong>WebP</strong> стискаються методом <strong>WebP (із втратами)</strong>.</li>
                            <li>Вхідні <strong>AVIF</strong> стискаються методом <strong>AVIF (із втратами)</strong>.</li>
                            <li>Вхідні <strong>HEIC</strong> конвертуються у <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Ви також можете вручну вибрати формат нижче відповідно до ваших потреб. Ось детальний опис кожної опції:
                        </p>

                        <p>
                            <strong>JPG</strong>: Найпопулярніший формат зображень, хоча він не підтримує прозорість. Порівняно з <strong>не стиснутим PNG</strong>, він може зменшити розмір файлу в середньому на <strong>90%</strong>. При якості <strong>75</strong> втрата якості є <strong>майже непомітною</strong>. Якщо вам не потрібен прозорий фон <strong>(що актуально для більшості фотографій)</strong>, конвертація в <strong>JPG</strong> зазвичай є найкращим вибором.
                        </p>

                        <p>
                            <strong>PNG (із втратами)</strong>: Підтримує прозорість з деякою втратою якості, зменшуючи розмір файлу в середньому на <strong>70%</strong> порівняно з <strong>не стиснутим PNG</strong>. Обирайте цей варіант, лише якщо вам потрібен прозорий фон у форматі PNG. В іншому випадку, <strong>JPG</strong> пропонує <strong>кращу якість при меншому розмірі</strong> (без прозорості), а <strong>WebP (із втратами)</strong> забезпечує <strong>кращу якість, менший розмір і прозорість</strong>, що робить його кращою альтернативою, якщо формат PNG не є обов'язковою умовою.
                        </p>

                        <p>
                            <strong>PNG (без втрат)</strong>: Підтримує прозорість без втрати якості. Зменшує розмір файлу в середньому на <strong>20%</strong> порівняно з <strong>не стиснутим PNG</strong>. Однак, <strong>якщо формат PNG не є обов'язковою умовою</strong>, <strong>WebP (без втрат)</strong> є кращим вибором, оскільки пропонує менші розміри файлів.
                        </p>

                        <p>
                            <strong>WebP (із втратами)</strong>: Підтримує прозорість з невеликою втратою якості. Зменшує розмір файлу в середньому на <strong>90%</strong> порівняно з <strong>не стиснутим PNG</strong>. Це чудова заміна для <strong>PNG (із втратами)</strong>, що пропонує кращу якість і менший розмір. Примітка: WebP не підтримується на деяких старих пристроях.
                        </p>

                        <p>
                            <strong>WebP (без втрат)</strong>: Підтримує прозорість без втрати якості. Зменшує розмір файлу в середньому на <strong>50%</strong> порівняно з <strong>не стиснутим PNG</strong>, що робить його кращою заміною для <strong>PNG (без втрат)</strong>. Примітка: WebP не підтримується на деяких старих пристроях.
                        </p>

                        <p>
                            <strong>AVIF (із втратами)</strong>: Підтримує прозорість з невеликою втратою якості. Як наступник WebP, він пропонує ще вищий коефіцієнт стиснення, зменшуючи розмір файлу в середньому на <strong>94%</strong> порівняно з <strong>не стиснутим PNG</strong>. Як передовий формат, AVIF забезпечує відмінну якість при дуже малих розмірах файлів. Однак сумісність із браузерами та пристроями все ще обмежена. Цей формат найкраще підходить для досвідчених користувачів або коли ви впевнені, що цільові пристрої його підтримують.
                        </p>
                        <p>
                            <strong>AVIF (без втрат)</strong>: Підтримує прозорість без втрати якості. Порівняно з <strong>не стиснутим PNG</strong>, зменшення розміру файлу не є значним, а в деяких випадках розмір може навіть збільшитися. Якщо у вас немає специфічної потреби у форматі AVIF без втрат, <strong>PNG (без втрат)</strong> або <strong>WebP (без втрат)</strong> зазвичай є кращими варіантами.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Перемкнути тему"
    },
    interactive: {
        store_imageDeletedNotification: "Видалено: {fileName}",
        store_convertingImagesNotification: "Триває конвертація {number} зображень...",
        store_conversionFailedNotification: "Помилка конвертації: {fileName}",
        store_unsupportedFileTypeNotification: "Непідтримуваний формат, видалено: {fileName}",
        store_fileReadErrorNotification: "Неможливо прочитати файл, видалено: {fileName}",
        store_reconvertingNotification: "Повторна конвертація: {fileName}",
        store_formatOptionAuto: "Автоматичне стиснення",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (із втратами)",
        store_formatOptionPngLossless: "PNG (без втрат)",
        store_formatOptionWebpLossy: "WebP (із втратами)",
        store_formatOptionWebpLossless: "WebP (без втрат)",
        store_formatOptionAvifLossy: "AVIF (із втратами)",
        store_formatOptionAvifLossless: "AVIF (без втрат)",
        previewSection_title: "Попередній перегляд і завантаження",
        previewSection_downloadAllButton: "Завантажити все",
        previewSection_deleteAllButton: "Видалити все",
        previewSection_placeholder: "Зображень ще немає.",
        previewSection_statusPending: "Очікування",
        previewSection_statusConverting: "Конвертація...",
        previewSection_statusFailed: "Помилка. Будь ласка, оновіть сторінку та спробуйте знову.",
        previewSection_statusCompleted: "Завершено",
        previewSection_noCompletedFilesNotification: "Немає завершених зображень для завантаження.",
        previewSection_downloadStartedNotification: "Починається завантаження {fileCount} файлів...",
        previewSection_listEmptyNotification: "Список порожній.",
        previewSection_allDeletedNotification: "Усі зображення видалено.",
        previewSection_zipCreationNotification: "Створення ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Створення ZIP: Є незавершені зображення, їх буде пропущено.",
        previewSection_zipCreationErrorNotification: "Сталася помилка під час створення ZIP.",
        previewSection_waitConversionNotification: "Будь ласка, зачекайте завершення конвертації.",
        previewSection_downloadingFileNotification: "Завантаження: {fileName}",
        previewSection_originalSizeLabel: "Оригінальний розмір:",
        previewSection_convertedSizeLabel: "Розмір після конвертації:",
        previewSection_downloadTitle: "Завантажити",
        previewSection_previewTitle: "Перегляд",
        previewSection_deleteTitle: "Видалити",
        previewSection_comparisonTab: "Порівняння",
        previewSection_settingsTab: "Налаштування",
        previewSection_originalImageLabel: "Оригінал",
        previewSection_completedImageLabel: "Результат",
        previewSection_formatLabel: "Формат:",
        previewSection_resolutionLabel: "Роздільна здатність:",
        previewSection_viewLargerButton: "Відкрити у новій вкладці",
        previewSection_qualityLabel: "Якість стиснення",
        previewSection_sizeLabel: "Зміна роздільної здатності",
        previewSection_outputFormatLabel: "Вихідний формат",
        previewSection_reconvertButton: "Конвертувати знову",
        globalControls_qualityLabel: "Загальна якість стиснення",
        globalControls_sizeLabel: "Загальна зміна роздільної здатності",
        globalControls_formatLabel: "Загальний вихідний формат",
        globalControls_reconvertAllButton: "Застосувати й конвертувати все",
        globalControls_restoreDefaultsButton: "Скинути налаштування",
        globalControls_noImagesNotification: "Будь ласка, спершу додайте зображення.",
        globalControls_reconvertingAllNotification: "Повторна конвертація всіх {imageCount} зображень із загальними налаштуваннями",
        globalControls_restoredNotification: "Налаштування скинуто до типових.",
        addSection_title: "Додати зображення",
        addArea_dragDropTitle: "Перетягніть зображення сюди",
        addArea_supportedFormats: "Підтримуються формати JPG, PNG, WebP, AVIF, HEIC",
        addArea_selectButton: "Вибрати зображення",
        addArea_tips: "*Можна додати кілька зображень одночасно",
        ui_viewExplanationTitle: "Дізнатися більше про ці опції",
    }
};

export default uk;