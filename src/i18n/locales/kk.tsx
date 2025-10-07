import type { Translation } from './en.tsx';

const kk: Translation = {
    static: {
        index_lang: 'kk',
        index_dir: 'ltr',
        index_title: "Image Tool - Кескіндерді түрлендірудің жетілдірілген құралы",
        index_description: "Кескіндерді сығуға, өлшемін өзгертуге және пішімін түрлендіруге арналған кәсіби, тегін онлайн құрал. JPG, PNG, WebP және AVIF арасында өзара түрлендіруді қолдайды, сондай-ақ HEIC пішімін осы пішімдерге айналдыра алады. Барлық өңдеу браузеріңізде жергілікті түрде орындалады — файлдарыңыз ешқашан жүктелмейді, бұл сіздің деректеріңіздің толық құпиялылығы мен қауіпсіздігін қамтамасыз етеді.",
        optionsExplanation: {
            title: "Параметрлер нұсқаулығы",
            subtitle: "Кескінді түрлендіру нәтижелерін оңтайландыру үшін әрбір параметрдің қызметі мен қолданылуын түсініңіз.",
            options: [
                {
                    id: "quality-option",
                    title: "Сығу сапасы",
                    description: <>
                        <p>Бұл параметр тек мақсатты пішім <strong>JPG</strong>, <strong>WebP (шығынды)</strong> немесе <strong>AVIF (шығынды)</strong> болғанда ғана қолданылады.</p>
                        <p>Мән неғұрлым төмен болса, файл соғұрлым кішірек болады, бірақ кескін сапасы төмендейді. Ұсынылатын мән <strong>75</strong> — файл өлшемі мен сапасы арасында жақсы тепе-теңдікті қамтамасыз етеді.</p>
                        <p>Егер сығудан кейін файл әлі де тым үлкен болса, ажыратымдылықты азайтып көріңіз, бұл файл өлшемін кішірейтуде жиі тиімдірек болады.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ажыратымдылықты реттеу",
                    description: <>
                        <p>Бастапқы арақатынасты сақтай отырып, кескін ажыратымдылығын пайызбен азайтыңыз. <strong>100%</strong> бастапқы өлшемдерді сақтайды.</p>
                        <p>Ажыратымдылықты азайту файл өлшемін <strong>айтарлықтай</strong> азайта алады. Егер сізге бастапқы жоғары ажыратымдылық қажет болмаса, бұл файлды кішірейтудің <strong>ең тиімді әдісі</strong> болып табылады.</p>
                        <p>Басқа параметрлер бірдей болған жағдайда, <strong>100% ажыратымдылықпен</strong> салыстырғанда: <strong>75% ажыратымдылыққа</strong> реттеу файл өлшемін орташа есеппен <strong>30%-ға</strong> азайтады; <strong>50% ажыратымдылыққа</strong> реттеу оны орташа есеппен <strong>65%-ға</strong> азайтады; ал <strong>25% ажыратымдылыққа</strong> реттеу оны орташа есеппен <strong>88%-ға</strong> азайтады.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Шығару пішімі",
                    description: <>
                        <p>Кескіннің шығару пішімін таңдаңыз. Әр түрлі пішімдердің өз артықшылықтары мен қолдану жағдайлары бар.</p>
                        <p><strong>Автоматты сығу</strong>: Бұл опция кіріс пішіміне негізделген сәйкес сығу стратегиясын автоматты түрде қолданады:</p>
                        <ul>
                            <li><strong>JPG</strong> кескіндері <strong>JPG</strong> ретінде сығылады.</li>
                            <li><strong>PNG</strong> кескіндері <strong>PNG (шығынды)</strong> әдісімен сығылады.</li>
                            <li><strong>WebP</strong> кескіндері <strong>WebP (шығынды)</strong> әдісімен сығылады.</li>
                            <li><strong>AVIF</strong> кескіндері <strong>AVIF (шығынды)</strong> әдісімен сығылады.</li>
                            <li><strong>HEIC</strong> кескіндері <strong>JPG</strong>-ға түрлендіріледі.</li>
                        </ul>

                        <p>
                            Сондай-ақ, өз қажеттіліктеріңізге сәйкес төмендегі пішімді қолмен таңдай аласыз. Міне, әрбір опцияға арналған толық нұсқаулық:
                        </p>

                        <p>
                            <strong>JPG</strong>: Ең танымал кескін пішімі, бірақ мөлдірлікті қолдамайды. <strong>Сығылмаған PNG</strong>-мен салыстырғанда, ол файл өлшемін орташа есеппен <strong>90%-ға</strong> азайта алады. <strong>75</strong> сапа параметрінде сапаның жоғалуы <strong>байқалмайтын</strong> деңгейде болады. Егер сізге мөлдір фон қажет болмаса <strong>(бұл көптеген фотосуреттерге қатысты)</strong>, <strong>JPG</strong>-ға түрлендіру әдетте ең жақсы таңдау болып табылады.
                        </p>

                        <p>
                            <strong>PNG (шығынды)</strong>: Сапаны аздап жоғалту арқылы мөлдірлікті қолдайды, <strong>сығылмаған PNG</strong>-мен салыстырғанда файл өлшемін орташа есеппен <strong>70%-ға</strong> азайтады. Мұны тек PNG пішімінде мөлдір фон қажет болғанда ғана таңдаңыз. Әйтпесе, <strong>JPG</strong> <strong>кішірек өлшемге жақсырақ сапа</strong> ұсынады (мөлдірліксіз), ал <strong>WebP (шығынды)</strong> <strong>жақсырақ сапа, кішірек өлшем және мөлдірлікті</strong> қамтамасыз етеді, бұл PNG пішімі қатаң талап болмаса, оны жақсырақ балама етеді.
                        </p>

                        <p>
                            <strong>PNG (шығынсыз)</strong>: Сапаны жоғалтпай мөлдірлікті қолдайды. <strong>Сығылмаған PNG</strong>-мен салыстырғанда файл өлшемін орташа есеппен <strong>20%-ға</strong> азайтады. Алайда, <strong>егер PNG пішімі міндетті болмаса</strong>, <strong>WebP (шығынсыз)</strong> кішірек файл өлшемдерін ұсынатындықтан, жақсырақ таңдау болады.
                        </p>

                        <p>
                            <strong>WebP (шығынды)</strong>: Сапаны аздап жоғалту арқылы мөлдірлікті қолдайды. <strong>Сығылмаған PNG</strong>-мен салыстырғанда файл өлшемін орташа есеппен <strong>90%-ға</strong> азайтады. Бұл <strong>PNG (шығынды)</strong> үшін тамаша алмастырғыш, өйткені ол жақсырақ сапа мен кішірек өлшемдерді ұсынады. Ескерту: WebP кейбір ескі құрылғыларда қолдау таппауы мүмкін.
                        </p>

                        <p>
                            <strong>WebP (шығынсыз)</strong>: Сапаны жоғалтпай мөлдірлікті қолдайды. <strong>Сығылмаған PNG</strong>-мен салыстырғанда файл өлшемін орташа есеппен <strong>50%-ға</strong> азайтады, бұл оны <strong>PNG (шығынсыз)</strong> үшін жақсырақ алмастырғыш етеді. Ескерту: WebP кейбір ескі құрылғыларда қолдау таппауы мүмкін.
                        </p>

                        <p>
                            <strong>AVIF (шығынды)</strong>: Сапаны аздап жоғалту арқылы мөлдірлікті қолдайды. WebP-тің ізбасары ретінде, ол одан да жоғары сығу коэффициентін ұсынады, <strong>сығылмаған PNG</strong>-мен салыстырғанда файл өлшемін орташа есеппен <strong>94%-ға</strong> азайтады. Ең озық пішім ретінде, AVIF өте кішкентай файл өлшемдерінде тамаша сапаны қамтамасыз етеді. Алайда, браузерлер мен құрылғылармен үйлесімділігі әлі де шектеулі. Бұл пішім жетілдірілген пайдаланушылар үшін немесе мақсатты құрылғылар оны қолдайтынына сенімді болған кезде ең қолайлы.
                        </p>
                        <p>
                            <strong>AVIF (шығынсыз)</strong>: Сапаны жоғалтпай мөлдірлікті қолдайды. <strong>Сығылмаған PNG</strong>-мен салыстырғанда, файл өлшемінің азаюы айтарлықтай емес, ал кейбір жағдайларда тіпті артуы мүмкін. Егер сізде шығынсыз AVIF-ке нақты қажеттілік болмаса, <strong>PNG (шығынсыз)</strong> немесе <strong>WebP (шығынсыз)</strong> әдетте жақсырақ нұсқалар болып табылады.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Тақырыпты ауыстыру"
    },
    interactive: {
        store_imageDeletedNotification: "Жойылды: {fileName}",
        store_convertingImagesNotification: "{number} кескін түрлендірілуде...",
        store_conversionFailedNotification: "Түрлендіру сәтсіз аяқталды: {fileName}",
        store_unsupportedFileTypeNotification: "Қолдау көрсетілмейтін пішім, жойылды: {fileName}",
        store_fileReadErrorNotification: "Файлды оқу мүмкін болмады, жойылды: {fileName}",
        store_reconvertingNotification: "Қайта түрлендіру: {fileName}",
        store_formatOptionAuto: "Автоматты сығу",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (шығынды)",
        store_formatOptionPngLossless: "PNG (шығынсыз)",
        store_formatOptionWebpLossy: "WebP (шығынды)",
        store_formatOptionWebpLossless: "WebP (шығынсыз)",
        store_formatOptionAvifLossy: "AVIF (шығынды)",
        store_formatOptionAvifLossless: "AVIF (шығынсыз)",
        previewSection_title: "Алдын ала қарау және жүктеп алу",
        previewSection_downloadAllButton: "Барлығын жүктеу",
        previewSection_deleteAllButton: "Барлығын жою",
        previewSection_placeholder: "Әзірге кескіндер жоқ.",
        previewSection_statusPending: "Күтуде",
        previewSection_statusConverting: "Түрлендіруде...",
        previewSection_statusFailed: "Сәтсіз аяқталды. Бетті жаңартып, қайталап көріңіз.",
        previewSection_statusCompleted: "Аяқталды",
        previewSection_noCompletedFilesNotification: "Жүктеп алуға дайын кескіндер жоқ.",
        previewSection_downloadStartedNotification: "{fileCount} файлды жүктеу басталды...",
        previewSection_listEmptyNotification: "Тізім бос.",
        previewSection_allDeletedNotification: "Барлық кескіндер жойылды.",
        previewSection_zipCreationNotification: "ZIP жасалуда...",
        previewSection_zipCreationWithSkipsNotification: "ZIP жасалуда: Кейбір кескіндер аяқталмаған, олар өткізіп жіберіледі.",
        previewSection_zipCreationErrorNotification: "ZIP жасау кезінде қате пайда болды.",
        previewSection_waitConversionNotification: "Түрлендірудің аяқталуын күтіңіз.",
        previewSection_downloadingFileNotification: "Жүктелуде: {fileName}",
        previewSection_originalSizeLabel: "Бастапқы өлшемі:",
        previewSection_convertedSizeLabel: "Түрлендірілген өлшемі:",
        previewSection_downloadTitle: "Жүктеу",
        previewSection_previewTitle: "Алдын ала қарау",
        previewSection_deleteTitle: "Жою",
        previewSection_comparisonTab: "Салыстыру",
        previewSection_settingsTab: "Баптаулар",
        previewSection_originalImageLabel: "Бастапқы кескін",
        previewSection_completedImageLabel: "Түрлендірілген кескін",
        previewSection_formatLabel: "Пішім:",
        previewSection_resolutionLabel: "Ажыратымдылық:",
        previewSection_viewLargerButton: "Жаңа бетте үлкенірек көру",
        previewSection_qualityLabel: "Сығу сапасы",
        previewSection_sizeLabel: "Ажыратымдылықты реттеу",
        previewSection_outputFormatLabel: "Шығару пішімі",
        previewSection_reconvertButton: "Осы кескінді қайта түрлендіру",
        globalControls_qualityLabel: "Жалпы сығу сапасы",
        globalControls_sizeLabel: "Жалпы ажыратымдылықты реттеу",
        globalControls_formatLabel: "Жалпы шығару пішімі",
        globalControls_reconvertAllButton: "Қолдану және барлығын түрлендіру",
        globalControls_restoreDefaultsButton: "Параметрлерді қалпына келтіру",
        globalControls_noImagesNotification: "Алдымен кескіндерді қосыңыз.",
        globalControls_reconvertingAllNotification: "Барлық {imageCount} кескін жалпы баптаулармен қайта түрлендірілуде",
        globalControls_restoredNotification: "Параметрлер әдепкі күйге келтірілді.",
        addSection_title: "Кескіндерді қосу",
        addArea_dragDropTitle: "Кескіндерді осы жерге сүйреп әкеліңіз",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF және HEIC пішімдерін қолдайды",
        addArea_selectButton: "Кескіндерді таңдау",
        addArea_tips: "*Бірден бірнеше кескін қосуға болады",
        ui_viewExplanationTitle: "Осы параметрлер туралы біліңіз",
    }
};

export default kk;