import type { Translation } from './en.tsx';

const mn: Translation = {
    static: {
        index_lang: 'mn',
        index_dir: 'ltr',
        index_title: "Image Tool - Зурган файл хувиргах дэвшилтэт хэрэгсэл",
        index_description: "Энэ бол зураг шахах, хэмжээг өөрчлөх, формат хувиргах зэрэгт зориулсан мэргэжлийн, үнэгүй онлайн хэрэгсэл юм. JPG, PNG, WebP, AVIF форматыг хооронд нь хувиргахыг дэмжихээс гадна HEIC форматыг эдгээр формат руу хөрвүүлэх боломжтой. Бүх боловсруулалт таны хөтөч дээр хийгддэг бөгөөд таны файлууд сервер лүү хэзээ ч илгээгдэхгүй тул таны мэдээллийн нууцлал, аюулгүй байдлыг бүрэн хангана.",
        optionsExplanation: {
            title: "Сонголтуудын тайлбар",
            subtitle: "Зургийн хувиргалтын үр дүнг оновчтой болгохын тулд сонголт бүрийн үүрэг, ашиглалтыг ойлгоорой.",
            options: [
                {
                    id: "quality-option",
                    title: "Шахалтын чанар",
                    description: <>
                        <p>Энэ сонголт нь зөвхөн гаралтын формат <strong>JPG</strong>, <strong>WebP (Алдагдалтай)</strong>, эсвэл <strong>AVIF (Алдагдалтай)</strong> байх үед идэвхтэй байна.</p>
                        <p>Утга бага байх тусам файлын хэмжээ жижигсэж, зургийн чанар буурна. Санал болгох утга болох <strong>75</strong> нь файлын хэмжээ ба чанарын хооронд сайн тэнцвэрийг хангадаг.</p>
                        <p>Хэрэв шахалтын дараа файл хэтэрхий том хэвээр байвал зургийн нягтралыг бууруулж үзээрэй. Энэ нь ихэвчлэн файлын хэмжээг багасгахад илүү үр дүнтэй байдаг.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Нягтрал тохируулах",
                    description: <>
                        <p>Зургийн анхны харьцааг хадгалан, нягтралыг хувиар бууруулна. <strong>100%</strong> бол анхны хэмжээг хадгална.</p>
                        <p>Нягтралыг бууруулах нь файлын хэмжээг <strong>үнэмлэхүй</strong> багасгадаг. Хэрэв танд анхны өндөр нягтрал шаардлагагүй бол энэ нь файлын хэмжээг багасгах <strong>хамгийн үр дүнтэй арга</strong> юм.</p>
                        <p>Бусад сонголтууд ижил нөхцөлд, <strong>100% нягтралыг</strong> суурь болгон үзвэл: <strong>75% нягтрал</strong> болгоход файлын хэмжээ дунджаар <strong>30%</strong>-иар, <strong>50% нягтрал</strong> болгоход дунджаар <strong>65%</strong>-иар, <strong>25% нягтрал</strong> болгоход дунджаар <strong>88%</strong>-иар буурдаг.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Гаралтын формат",
                    description: <>
                        <p>Зургийн гаралтын форматыг сонгоно уу. Формат бүр өөрийн гэсэн давуу тал, хэрэглээтэй.</p>
                        <p><strong>Автомат шахалт</strong>: Энэ сонголт нь оролтын форматаас хамааран тохирох шахалтын стратегийг автоматаар хэрэгжүүлнэ:</p>
                        <ul>
                            <li><strong>JPG</strong> зургийг <strong>JPG</strong> форматаар шахна.</li>
                            <li><strong>PNG</strong> зургийг <strong>PNG (Алдагдалтай)</strong> аргаар шахна.</li>
                            <li><strong>WebP</strong> зургийг <strong>WebP (Алдагдалтай)</strong> аргаар шахна.</li>
                            <li><strong>AVIF</strong> зургийг <strong>AVIF (Алдагдалтай)</strong> аргаар шахна.</li>
                            <li><strong>HEIC</strong> зургийг <strong>JPG</strong> формат руу хөрвүүлнэ.</li>
                        </ul>

                        <p>
                            Та мөн өөрийн хэрэгцээнд тулгуурлан доороос формат сонгох боломжтой. Сонголт бүрийн дэлгэрэнгүй тайлбарыг энд оруулав:
                        </p>

                        <p>
                            <strong>JPG</strong>: Хамгийн түгээмэл хэрэглэгддэг зургийн формат боловч тунгалаг дэвсгэрийг дэмждэггүй. <strong>Шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээг дунджаар <strong>90%</strong> бууруулдаг. <strong>75</strong> чанарын тохиргоотой үед чанарын алдагдал <strong>бараг мэдэгдэхгүй</strong>. Хэрэв танд тунгалаг дэвсгэр шаардлагагүй бол <strong>(ихэнх гэрэл зурагт ийм шаардлага байдаггүй)</strong> <strong>JPG</strong> руу хөрвүүлэх нь хамгийн зөв сонголт юм.
                        </p>

                        <p>
                            <strong>PNG (Алдагдалтай)</strong>: Тунгалаг дэвсгэрийг дэмждэг бөгөөд чанарын бага зэргийн алдагдалтай. <strong>Шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээг дунджаар <strong>70%</strong> бууруулдаг. Зөвхөн PNG форматтай тунгалаг дэвсгэр хэрэгтэй үед л энэ сонголтыг хийгээрэй. Бусад тохиолдолд <strong>JPG</strong> нь <strong>илүү сайн чанарыг бага хэмжээгээр</strong> (тунгалаг дэвсгэргүй) санал болгодог бол, <strong>WebP (Алдагдалтай)</strong> нь <strong>илүү сайн чанар, бага хэмжээ, тунгалаг дэвсгэр</strong> зэргийг нэг дор санал болгодог тул PNG формат шаардлагагүй үед илүү дээр сонголт болдог.
                        </p>

                        <p>
                            <strong>PNG (Алдагдалгүй)</strong>: Тунгалаг дэвсгэрийг чанарын алдагдалгүйгээр дэмждэг. <strong>Шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээг дунджаар <strong>20%</strong> бууруулдаг. Гэхдээ <strong>хэрэв PNG формат заавал шаардлагагүй бол</strong>, <strong>WebP (Алдагдалгүй)</strong> нь илүү жижиг файлын хэмжээ санал болгодгоороо илүү сайн сонголт юм.
                        </p>

                        <p>
                            <strong>WebP (Алдагдалтай)</strong>: Тунгалаг дэвсгэрийг бага зэргийн чанарын алдагдалтайгаар дэмждэг. <strong>Шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээг дунджаар <strong>90%</strong> бууруулдаг. Энэ нь <strong>PNG (Алдагдалтай)</strong>-г орлох маш сайн хувилбар бөгөөд илүү сайн чанар, бага хэмжээг санал болгодог. Анхааруулга: WebP форматыг зарим хуучин төхөөрөмж дэмждэггүй.
                        </p>

                        <p>
                            <strong>WebP (Алдагдалгүй)</strong>: Тунгалаг дэвсгэрийг чанарын алдагдалгүйгээр дэмждэг. <strong>Шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээг дунджаар <strong>50%</strong> бууруулдаг тул <strong>PNG (Алдагдалгүй)</strong>-г орлох илүү давуу талтай хувилбар юм. Анхааруулга: WebP форматыг зарим хуучин төхөөрөмж дэмждэггүй.
                        </p>

                        <p>
                            <strong>AVIF (Алдагдалтай)</strong>: Тунгалаг дэвсгэрийг бага зэргийн чанарын алдагдалтайгаар дэмждэг. WebP-ийн залгамжлагчийн хувьд энэ нь илүү өндөр шахалтын түвшинг санал болгож, <strong>шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээг дунджаар <strong>94%</strong> бууруулдаг. Хамгийн сүүлийн үеийн дэвшилтэт формат болох AVIF нь маш бага хэмжээтэйгээр өндөр чанарыг өгдөг. Гэсэн хэдий ч, хөтөч болон төхөөрөмжийн дэмжлэг одоогоор хязгаарлагдмал. Энэ форматыг дэвшилтэт хэрэглэгчид эсвэл таны зорилтот төхөөрөмж дэмждэг гэдэгт итгэлтэй үед ашиглах нь тохиромжтой.
                        </p>
                        <p>
                            <strong>AVIF (Алдагдалгүй)</strong>: Тунгалаг дэвсгэрийг чанарын алдагдалгүйгээр дэмждэг. <strong>Шахаагүй PNG</strong>-тэй харьцуулахад файлын хэмжээний бууралт мэдэгдэхүйц биш бөгөөд зарим тохиолдолд нэмэгдэж ч магадгүй. Хэрэв танд тусгай хэрэгцээ шаардлагагүй бол <strong>PNG (Алдагдалгүй)</strong> эсвэл <strong>WebP (Алдагдалгүй)</strong> нь ерөнхийдөө илүү сайн сонголтууд юм.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Горим солих"
    },
    interactive: {
        store_imageDeletedNotification: "Устгасан зураг: {fileName}",
        store_convertingImagesNotification: "{number} зургийг хувиргаж байна...",
        store_conversionFailedNotification: "Хувиргалт амжилтгүй боллоо: {fileName}",
        store_unsupportedFileTypeNotification: "Дэмжигдэхгүй форматтай тул устгалаа: {fileName}",
        store_fileReadErrorNotification: "Файл уншиж чадсангүй, устгалаа: {fileName}",
        store_reconvertingNotification: "Дахин хувиргаж байна: {fileName}",
        store_formatOptionAuto: "Автомат шахалт",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Алдагдалтай)",
        store_formatOptionPngLossless: "PNG (Алдагдалгүй)",
        store_formatOptionWebpLossy: "WebP (Алдагдалтай)",
        store_formatOptionWebpLossless: "WebP (Алдагдалгүй)",
        store_formatOptionAvifLossy: "AVIF (Алдагдалтай)",
        store_formatOptionAvifLossless: "AVIF (Алдагдалгүй)",
        previewSection_title: "Урьдчилан харах ба татах",
        previewSection_downloadAllButton: "Бүгдийг татах",
        previewSection_deleteAllButton: "Бүгдийг устгах",
        previewSection_placeholder: "Одоогоор зураг байхгүй.",
        previewSection_statusPending: "Хүлээгдэж буй",
        previewSection_statusConverting: "Хувиргаж байна...",
        previewSection_statusFailed: "Амжилтгүй. Хуудсыг дахин ачааллаж дахин оролдоно уу.",
        previewSection_statusCompleted: "Дууссан",
        previewSection_noCompletedFilesNotification: "Татаж авах боломжтой зураг алга.",
        previewSection_downloadStartedNotification: "{fileCount} файлыг татаж эхэлж байна...",
        previewSection_listEmptyNotification: "Жагсаалт хоосон байна.",
        previewSection_allDeletedNotification: "Бүх зургийг устгалаа.",
        previewSection_zipCreationNotification: "ZIP үүсгэж байна...",
        previewSection_zipCreationWithSkipsNotification: "ZIP үүсгэж байна: Зарим зураг хувиргаж дуусаагүй тул алгасагдана.",
        previewSection_zipCreationErrorNotification: "ZIP үүсгэх явцад алдаа гарлаа.",
        previewSection_waitConversionNotification: "Хувиргалт дуусахыг хүлээнэ үү.",
        previewSection_downloadingFileNotification: "Татаж байна: {fileName}",
        previewSection_originalSizeLabel: "Анхны хэмжээ:",
        previewSection_convertedSizeLabel: "Хувиргасан хэмжээ:",
        previewSection_downloadTitle: "Татах",
        previewSection_previewTitle: "Урьдчилан харах",
        previewSection_deleteTitle: "Устгах",
        previewSection_comparisonTab: "Харьцуулах",
        previewSection_settingsTab: "Тохиргоо",
        previewSection_originalImageLabel: "Эх зураг",
        previewSection_completedImageLabel: "Хувиргасан зураг",
        previewSection_formatLabel: "Формат:",
        previewSection_resolutionLabel: "Нягтрал:",
        previewSection_viewLargerButton: "Шинэ цонхонд томруулж харах",
        previewSection_qualityLabel: "Шахалтын чанар",
        previewSection_sizeLabel: "Нягтрал тохируулах",
        previewSection_outputFormatLabel: "Гаралтын формат",
        previewSection_reconvertButton: "Энэ зургийг дахин хувиргах",
        globalControls_qualityLabel: "Ерөнхий шахалтын чанар",
        globalControls_sizeLabel: "Ерөнхий нягтрал тохируулга",
        globalControls_formatLabel: "Ерөнхий гаралтын формат",
        globalControls_reconvertAllButton: "Тохиргоог хэрэглэж бүгдийг хувиргах",
        globalControls_restoreDefaultsButton: "Үндсэн тохиргоог сэргээх",
        globalControls_noImagesNotification: "Эхлээд зураг нэмнэ үү.",
        globalControls_reconvertingAllNotification: "Бүх {imageCount} зургийг ерөнхий тохиргоогоор дахин хувиргаж байна.",
        globalControls_restoredNotification: "Сонголтууд үндсэн тохиргоонд шилжлээ.",
        addSection_title: "Зураг нэмэх",
        addArea_dragDropTitle: "Зургаа энд чирч оруулна уу",
        addArea_supportedFormats: "Дэмжих форматууд: JPG, PNG, WebP, AVIF, HEIC",
        addArea_selectButton: "Зураг сонгох",
        addArea_tips: "*Нэг дор олон зураг нэмэх боломжтой.",
        ui_viewExplanationTitle: "Эдгээр сонголтуудын талаар мэдэж авах",
    }
};

export default mn;