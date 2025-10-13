import type { Translation } from './en.tsx';

const ru: Translation = {
  static: {
    index_lang: 'ru',
    index_dir: 'ltr',
    index_title: "Image Tool - Расширенный инструмент для конвертации изображений",
    index_description: "Бесплатный профессиональный онлайн-инструмент для сжатия и изменения размера изображений. Он поддерживает взаимную конвертацию между форматами JPG, PNG, WebP и AVIF, а также преобразует формат HEIC в эти форматы. Вся обработка происходит локально в вашем браузере — ваши файлы никогда не загружаются на сервер, что обеспечивает полную конфиденциальность и безопасность данных.",
    optionsExplanation: {
      title: "Руководство по настройкам",
      subtitle: "Узнайте о функциях и использовании каждой опции для оптимизации результатов конвертации изображений.",
      options: [
        {
          id: "quality-option",
          title: "Качество сжатия",
          description: <>
            <p>Эта опция применяется только в том случае, если целевой формат — <strong>JPG</strong>, <strong>WebP (с потерями)</strong> или <strong>AVIF (с потерями)</strong>.</p>
            <p>Более низкое значение создаёт файл меньшего размера, но снижает качество изображения. Рекомендуемое значение <strong>75</strong> обеспечивает хороший баланс между размером файла и качеством.</p>
            <p>Если после сжатия файл всё ещё слишком большой, попробуйте уменьшить разрешение — это часто более эффективно для уменьшения размера файла.</p>
          </>
        },
        {
          id: "size-option",
          title: "Настройка разрешения",
          description: <>
            <p>Уменьшите разрешение изображения в процентах, сохраняя исходное соотношение сторон. <strong>100%</strong> сохраняет исходные размеры.</p>
            <p>Уменьшение разрешения может <strong>значительно</strong> уменьшить размер файла. Если вам не нужно высокое разрешение оригинала, это часто <strong>самый эффективный способ</strong> сделать файл меньше.</p>
            <p>При прочих равных условиях, по сравнению с разрешением <strong>100%</strong>: установка <strong>75%</strong> разрешения уменьшает размер файла в среднем на <strong>30%</strong>; установка <strong>50%</strong> — в среднем на <strong>65%</strong>; установка <strong>25%</strong> — в среднем на <strong>88%</strong>.</p>
          </>
        },
        {
          id: "format-option",
          title: "Выходной формат",
          description: <>
            <p>Выберите выходной формат для изображения. Различные форматы имеют свои преимущества и сценарии использования.</p>
            <p><strong>Автосжатие</strong>: Эта опция автоматически применяет подходящую стратегию сжатия в зависимости от исходного формата:</p>
            <ul>
              <li>Изображения <strong>JPG</strong> сжимаются в формат <strong>JPG</strong>.</li>
              <li>Изображения <strong>PNG</strong> сжимаются методом <strong>PNG (с потерями)</strong>.</li>
              <li>Изображения <strong>WebP</strong> сжимаются методом <strong>WebP (с потерями)</strong>.</li>
              <li>Изображения <strong>AVIF</strong> сжимаются методом <strong>AVIF (с потерями)</strong>.</li>
              <li>Изображения <strong>HEIC</strong> конвертируются в <strong>JPG</strong>.</li>
            </ul>

            <p>
              Вы также можете вручную выбрать формат ниже в соответствии с вашими потребностями. Вот подробное руководство по каждой опции:
            </p>

            <p>
              <strong>JPG</strong>: Самый популярный формат изображений, хотя он и не поддерживает прозрачность. При конвертации из <strong>несжатого PNG</strong> он может уменьшить размер файла в среднем на <strong>90%</strong>. При качестве <strong>75</strong> потеря качества часто <strong>практически незаметна</strong>. Если вам не нужен прозрачный фон <strong>(что верно для большинства фотографий)</strong>, конвертация в <strong>JPG</strong> обычно является лучшим выбором.
            </p>

            <p>
              <strong>PNG (с потерями)</strong>: Поддерживает прозрачность с некоторой потерей качества, уменьшая размер файла в среднем на <strong>70%</strong> по сравнению с <strong>несжатым PNG</strong>. Выбирайте этот вариант, только если вам нужна прозрачность в формате PNG. В противном случае, <strong>JPG</strong> предлагает <strong>лучшее качество при меньшем размере</strong> (без прозрачности), а <strong>WebP (с потерями)</strong> обеспечивает <strong>лучшее качество, меньший размер и прозрачность</strong>, что делает его лучшей альтернативой, если формат PNG не является строгим требованием.
            </p>

            <p>
              <strong>PNG (без потерь)</strong>: Поддерживает прозрачность без потери качества. Уменьшает размер файла в среднем на <strong>20%</strong> по сравнению с <strong>несжатым PNG</strong>. Однако, <strong>если формат PNG не является обязательным</strong>, <strong>WebP (без потерь)</strong> — лучший выбор, так как он предлагает файлы меньшего размера.
            </p>

            <p>
              <strong>WebP (с потерями)</strong>: Поддерживает прозрачность с небольшой потерей качества. Уменьшает размер файла в среднем на <strong>90%</strong> по сравнению с <strong>несжатым PNG</strong>. Это отличная замена <strong>PNG (с потерями)</strong>, предлагающая лучшее качество и меньший размер. Примечание: WebP не поддерживается на некоторых старых устройствах.
            </p>

            <p>
              <strong>WebP (без потерь)</strong>: Поддерживает прозрачность без потери качества. Уменьшает размер файла в среднем на <strong>50%</strong> по сравнению с <strong>несжатым PNG</strong>, что делает его лучшей заменой для <strong>PNG (без потерь)</strong>. Примечание: WebP не поддерживается на некоторых старых устройствах.
            </p>

            <p>
              <strong>AVIF (с потерями)</strong>: Поддерживает прозрачность с небольшой потерей качества. Как преемник WebP, он предлагает ещё более высокую степень сжатия, уменьшая размер файла в среднем на <strong>94%</strong> по сравнению с <strong>несжатым PNG</strong>. Как передовой формат, AVIF обеспечивает отличное качество при очень малых размерах файлов. Однако совместимость с браузерами и устройствами всё ещё ограничена. Этот формат лучше всего подходит для продвинутых пользователей или когда вы уверены, что целевые устройства его поддерживают.
            </p>
            <p>
              <strong>AVIF (без потерь)</strong>: Поддерживает прозрачность без потери качества. По сравнению с <strong>несжатым PNG</strong>, уменьшение размера файла незначительно, а в некоторых случаях он может даже увеличиться. Если у вас нет особой потребности в AVIF без потерь, <strong>PNG (без потерь)</strong> или <strong>WebP (без потерь)</strong>, как правило, являются лучшими вариантами.
            </p>
          </>
        }
      ]
    },
    themeToggle_title: "Сменить тему"
  },
  interactive: {
    store_imageDeletedNotification: "Удалено: {fileName}",
    store_convertingImagesNotification: "Идёт конвертация {number} изображений...",
    store_conversionFailedNotification: "Ошибка конвертации: {fileName}",
    store_unsupportedFileTypeNotification: "Неподдерживаемый формат, файл удалён: {fileName}",
    store_fileReadErrorNotification: "Не удалось прочитать файл, он удалён: {fileName}",
    store_reconvertingNotification: "Повторная конвертация: {fileName}",
    store_formatOptionAuto: "Автосжатие",
    store_formatOptionJpg: "JPG",
    store_formatOptionPngLossy: "PNG (с потерями)",
    store_formatOptionPngLossless: "PNG (без потерь)",
    store_formatOptionWebpLossy: "WebP (с потерями)",
    store_formatOptionWebpLossless: "WebP (без потерь)",
    store_formatOptionAvifLossy: "AVIF (с потерями)",
    store_formatOptionAvifLossless: "AVIF (без потерь)",
    previewSection_title: "Предпросмотр и скачивание",
    previewSection_downloadAllButton: "Скачать все",
    previewSection_deleteAllButton: "Удалить все",
    previewSection_placeholder: "Изображений пока нет.",
    previewSection_statusPending: "В ожидании",
    previewSection_statusConverting: "Конвертация...",
    previewSection_statusFailed: "Ошибка. Пожалуйста, обновите страницу и попробуйте снова.",
    previewSection_statusCompleted: "Готово",
    previewSection_noCompletedFilesNotification: "Нет готовых изображений для скачивания.",
    previewSection_downloadStartedNotification: "Начинается скачивание {fileCount} файлов...",
    previewSection_listEmptyNotification: "Список пуст.",
    previewSection_allDeletedNotification: "Все изображения были удалены.",
    previewSection_zipCreationNotification: "Создание ZIP...",
    previewSection_zipCreationWithSkipsNotification: "Создание ZIP: Некоторые изображения не завершены и будут пропущены.",
    previewSection_zipCreationErrorNotification: "При создании ZIP произошла ошибка.",
    previewSection_waitConversionNotification: "Пожалуйста, дождитесь окончания конвертации.",
    previewSection_downloadingFileNotification: "Скачивание: {fileName}",
    previewSection_originalSizeLabel: "Исходный размер:",
    previewSection_convertedSizeLabel: "Новый размер:",
    previewSection_downloadTitle: "Скачать",
    previewSection_previewTitle: "Предпросмотр",
    previewSection_deleteTitle: "Удалить",
    previewSection_comparisonTab: "Сравнение",
    previewSection_settingsTab: "Настройки",
    previewSection_originalImageLabel: "Оригинал",
    previewSection_completedImageLabel: "Результат",
    previewSection_formatLabel: "Формат:",
    previewSection_resolutionLabel: "Разрешение:",
    previewSection_viewLargerButton: "Открыть в новой вкладке",
    previewSection_qualityLabel: "Качество сжатия",
    previewSection_sizeLabel: "Настройка разрешения",
    previewSection_outputFormatLabel: "Выходной формат",
    previewSection_reconvertButton: "Переконвертировать",
    globalControls_qualityLabel: "Общее качество сжатия",
    globalControls_sizeLabel: "Общая настройка разрешения",
    globalControls_formatLabel: "Общий выходной формат",
    globalControls_reconvertAllButton: "Применить и переконвертировать все",
    globalControls_restoreDefaultsButton: "Сбросить настройки",
    globalControls_noImagesNotification: "Пожалуйста, сначала добавьте изображения.",
    globalControls_reconvertingAllNotification: "Повторная конвертация всех {imageCount} изображений с общими настройками",
    globalControls_restoredNotification: "Настройки сброшены до значений по умолчанию.",
    addSection_title: "Добавить изображения",
    addArea_dragDropTitle: "Перетащите изображения сюда",
    addArea_supportedFormats: "Поддерживаются форматы JPG, PNG, WebP, AVIF и HEIC",
    addArea_selectButton: "Выбрать изображения",
    addArea_tips: "*Можно добавить несколько изображений за раз",
    ui_viewExplanationTitle: "Узнать больше об этих опциях",
  }
};

export default ru;