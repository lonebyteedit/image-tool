import type { Translation } from './en.tsx';

const fa: Translation = {
    static: {
        index_lang: 'fa',
        index_dir: 'rtl',
        index_title: "Image Tool - ابزار پیشرفته تبدیل تصاویر",
        index_description: "یک ابزار آنلاین، حرفه‌ای و رایگان برای فشرده‌سازی، تغییر اندازه و تبدیل فرمت تصاویر. این ابزار از تبدیل متقابل بین فرمت‌های JPG، PNG، WebP و AVIF پشتیبانی می‌کند و می‌تواند فرمت HEIC را به این فرمت‌ها تبدیل کند. تمام پردازش‌ها به صورت محلی در مرورگر شما انجام می‌شود — فایل‌های شما هرگز آپلود نمی‌شوند، که حریم خصوصی و امنیت کامل داده‌های شما را تضمین می‌کند.",
        optionsExplanation: {
            title: "راهنمای گزینه‌ها",
            subtitle: "عملکرد و کاربرد هر گزینه را برای بهینه‌سازی نتایج تبدیل تصاویر خود درک کنید.",
            options: [
                {
                    id: "quality-option",
                    title: "کیفیت فشرده‌سازی",
                    description: <>
                        <p>این گزینه فقط زمانی اعمال می‌شود که فرمت خروجی <strong>JPG</strong>، <strong>WebP (با اتلاف)</strong> یا <strong>AVIF (با اتلاف)</strong> باشد.</p>
                        <p>مقدار پایین‌تر فایل کوچک‌تری ایجاد می‌کند اما کیفیت تصویر را کاهش می‌دهد. مقدار توصیه‌شده <strong>75</strong> تعادل خوبی بین حجم فایل و کیفیت ارائه می‌دهد.</p>
                        <p>اگر فایل پس از فشرده‌سازی هنوز بیش از حد بزرگ است، سعی کنید وضوح (رزولوشن) را کاهش دهید، که اغلب برای کوچک کردن حجم فایل مؤثرتر است.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "تنظیم وضوح (رزولوشن)",
                    description: <>
                        <p>وضوح تصویر را به صورت درصدی کاهش دهید در حالی که نسبت ابعاد اصلی حفظ می‌شود. <strong>&lrm;100%</strong> ابعاد اصلی را حفظ می‌کند.</p>
                        <p>کاهش وضوح می‌تواند حجم فایل را به طور <strong>چشمگیری</strong> کاهش دهد. اگر به وضوح بالای تصویر اصلی نیازی ندارید، این روش اغلب <strong>مؤثرترین راه</strong> برای کوچک‌تر کردن فایل است.</p>
                        <p>با فرض یکسان بودن سایر گزینه‌ها و بر اساس <strong>وضوح &lrm;100%</strong>: تنظیم روی <strong>وضوح &lrm;75%</strong> به طور متوسط حجم فایل را <strong>&lrm;30%</strong> کاهش می‌دهد؛ تنظیم روی <strong>وضوح &lrm;50%</strong> به طور متوسط <strong>&lrm;65%</strong> کاهش می‌دهد؛ و تنظیم روی <strong>وضوح &lrm;25%</strong> به طور متوسط <strong>&lrm;88%</strong> کاهش می‌دهد.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "فرمت خروجی",
                    description: <>
                        <p>فرمت خروجی تصویر را انتخاب کنید. فرمت‌های مختلف مزایا و کاربردهای خاص خود را دارند.</p>
                        <p><strong>فشرده‌سازی خودکار</strong>: این گزینه بر اساس فرمت ورودی، یک استراتژی فشرده‌سازی مناسب را به صورت خودکار اعمال می‌کند:</p>
                        <ul>
                            <li>ورودی‌های <strong>JPG</strong> به صورت <strong>JPG</strong> فشرده می‌شوند.</li>
                            <li>ورودی‌های <strong>PNG</strong> با روش <strong>PNG (با اتلاف)</strong> فشرده می‌شوند.</li>
                            <li>ورودی‌های <strong>WebP</strong> با روش <strong>WebP (با اتلاف)</strong> فشرده می‌شوند.</li>
                            <li>ورودی‌های <strong>AVIF</strong> با روش <strong>AVIF (با اتلاف)</strong> فشرده می‌شوند.</li>
                            <li>ورودی‌های <strong>HEIC</strong> به <strong>JPG</strong> تبدیل می‌شوند.</li>
                        </ul>

                        <p>
                            شما همچنین می‌توانید بر اساس نیازهای خاص خود، فرمت مورد نظر را به صورت دستی از لیست زیر انتخاب کنید. در ادامه راهنمای دقیقی برای هر گزینه ارائه شده است:
                        </p>

                        <p>
                            <strong>JPG</strong>: محبوب‌ترین فرمت تصویر است، اگرچه از شفافیت (transparency) پشتیبانی نمی‌کند. در مقایسه با یک <strong>PNG فشرده‌نشده</strong>، می‌تواند حجم فایل را به طور متوسط <strong>&lrm;90%</strong> کاهش دهد. با تنظیم کیفیت روی <strong>75</strong>، افت کیفیت اغلب <strong>نامحسوس</strong> است. اگر به پس‌زمینه شفاف نیازی ندارید <strong>(که در مورد اکثر عکس‌ها صادق است)</strong>، تبدیل به <strong>JPG</strong> معمولاً بهترین انتخاب است.
                        </p>

                        <p>
                            <strong>PNG (با اتلاف)</strong>: از شفافیت با کمی افت کیفیت پشتیبانی می‌کند و حجم فایل را در مقایسه با <strong>PNG فشرده‌نشده</strong> به طور متوسط <strong>&lrm;70%</strong> کاهش می‌دهد. این گزینه را فقط در صورتی انتخاب کنید که به پس‌زمینه شفاف در فرمت PNG نیاز دارید. در غیر این صورت، <strong>JPG</strong> <strong>کیفیت بهتری را با حجم کمتر</strong> (بدون شفافیت) ارائه می‌دهد و <strong>WebP (با اتلاف)</strong> <strong>کیفیت بهتر، حجم کمتر و شفافیت</strong> را فراهم می‌کند، که اگر اصراری بر فرمت PNG نباشد، جایگزین برتری است.
                        </p>

                        <p>
                            <strong>PNG (بدون اتلاف)</strong>: از شفافیت بدون هیچ‌گونه افت کیفیتی پشتیبانی می‌کند. حجم فایل را در مقایسه با <strong>PNG فشرده‌نشده</strong> به طور متوسط <strong>&lrm;20%</strong> کاهش می‌دهد. با این حال، <strong>اگر اصراری بر فرمت PNG نباشد</strong>، <strong>WebP (بدون اتلاف)</strong> انتخاب بهتری است زیرا حجم فایل‌های کوچک‌تری تولید می‌کند.
                        </p>

                        <p>
                            <strong>WebP (با اتلاف)</strong>: از شفافیت با افت کیفیت جزئی پشتیبانی می‌کند. حجم فایل را در مقایسه با <strong>PNG فشرده‌نشده</strong> به طور متوسط <strong>&lrm;90%</strong> کاهش می‌دهد. این فرمت یک جایگزین عالی برای <strong>PNG (با اتلاف)</strong> است که کیفیت بهتر و حجم کمتری ارائه می‌دهد. توجه: WebP در برخی دستگاه‌های قدیمی پشتیبانی نمی‌شود.
                        </p>

                        <p>
                            <strong>WebP (بدون اتلاف)</strong>: از شفافیت بدون هیچ‌گونه افت کیفیتی پشتیبانی می‌کند. حجم فایل را در مقایسه با <strong>PNG فشرده‌نشده</strong> به طور متوسط <strong>&lrm;50%</strong> کاهش می‌دهد، که آن را به جایگزین برتری برای <strong>PNG (بدون اتلاف)</strong> تبدیل می‌کند. توجه: WebP در برخی دستگاه‌های قدیمی پشتیبانی نمی‌شود.
                        </p>

                        <p>
                            <strong>AVIF (با اتلاف)</strong>: از شفافیت با افت کیفیت جزئی پشتیبانی می‌کند. به عنوان جانشین WebP، نرخ فشرده‌سازی بالاتری را ارائه می‌دهد و حجم فایل را در مقایسه با <strong>PNG فشرده‌نشده</strong> به طور متوسط <strong>&lrm;94%</strong> کاهش می‌دهد. AVIF به عنوان یک فرمت پیشرفته، کیفیت عالی را در حجم‌های بسیار کم فراهم می‌کند. با این حال، سازگاری مرورگرها و دستگاه‌ها با آن هنوز محدود است. این فرمت برای کاربران حرفه‌ای یا زمانی که از پشتیبانی دستگاه مقصد اطمینان دارید، بهترین گزینه است.
                        </p>
                        <p>
                            <strong>AVIF (بدون اتلاف)</strong>: از شفافیت بدون افت کیفیت پشتیبانی می‌کند. در مقایسه با <strong>PNG فشرده‌نشده</strong>، کاهش حجم فایل قابل توجه نیست و در برخی موارد حتی ممکن است افزایش یابد. مگر اینکه نیاز خاصی به AVIF بدون اتلاف داشته باشید، <strong>PNG (بدون اتلاف)</strong> یا <strong>WebP (بدون اتلاف)</strong> به طور کلی گزینه‌های بهتری هستند.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "تغییر پوسته"
    },
    interactive: {
        store_imageDeletedNotification: "تصویر حذف شد: \u200E{fileName}",
        store_convertingImagesNotification: "در حال تبدیل {number} تصویر...",
        store_conversionFailedNotification: "تبدیل ناموفق بود: \u200E{fileName}",
        store_unsupportedFileTypeNotification: "فرمت پشتیبانی نمی‌شود، حذف شد: \u200E{fileName}",
        store_fileReadErrorNotification: "خطا در خواندن فایل، حذف شد: \u200E{fileName}",
        store_reconvertingNotification: "در حال تبدیل مجدد: \u200E{fileName}",
        store_formatOptionAuto: "فشرده‌سازی خودکار",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (با اتلاف)",
        store_formatOptionPngLossless: "PNG (بدون اتلاف)",
        store_formatOptionWebpLossy: "WebP (با اتلاف)",
        store_formatOptionWebpLossless: "WebP (بدون اتلاف)",
        store_formatOptionAvifLossy: "AVIF (با اتلاف)",
        store_formatOptionAvifLossless: "AVIF (بدون اتلاف)",
        previewSection_title: "پیش‌نمایش و دانلود",
        previewSection_downloadAllButton: "دانلود همه",
        previewSection_deleteAllButton: "حذف همه",
        previewSection_placeholder: "هنوز تصویری وجود ندارد.",
        previewSection_statusPending: "در انتظار",
        previewSection_statusConverting: "در حال تبدیل...",
        previewSection_statusFailed: "ناموفق. لطفاً صفحه را تازه‌سازی کرده و دوباره امتحان کنید.",
        previewSection_statusCompleted: "تکمیل شد",
        previewSection_noCompletedFilesNotification: "هیچ تصویر تکمیل‌شده‌ای برای دانلود وجود ندارد.",
        previewSection_downloadStartedNotification: "دانلود {fileCount} فایل آغاز شد...",
        previewSection_listEmptyNotification: "لیست خالی است.",
        previewSection_allDeletedNotification: "همه تصاویر حذف شدند.",
        previewSection_zipCreationNotification: "در حال ایجاد فایل ZIP...",
        previewSection_zipCreationWithSkipsNotification: "در حال ایجاد ZIP: برخی تصاویر تکمیل نشده‌اند و نادیده گرفته خواهند شد.",
        previewSection_zipCreationErrorNotification: "هنگام ایجاد فایل ZIP خطایی رخ داد.",
        previewSection_waitConversionNotification: "لطفاً تا پایان تبدیل منتظر بمانید.",
        previewSection_downloadingFileNotification: "در حال دانلود: \u200E{fileName}",
        previewSection_originalSizeLabel: "حجم اصلی:",
        previewSection_convertedSizeLabel: "حجم تبدیل‌شده:",
        previewSection_downloadTitle: "دانلود",
        previewSection_previewTitle: "پیش‌نمایش",
        previewSection_deleteTitle: "حذف",
        previewSection_comparisonTab: "مقایسه",
        previewSection_settingsTab: "تنظیمات",
        previewSection_originalImageLabel: "تصویر اصلی",
        previewSection_completedImageLabel: "تصویر تبدیل‌شده",
        previewSection_formatLabel: "فرمت:",
        previewSection_resolutionLabel: "وضوح:",
        previewSection_viewLargerButton: "مشاهده در زبانه جدید",
        previewSection_qualityLabel: "کیفیت فشرده‌سازی",
        previewSection_sizeLabel: "تنظیم وضوح",
        previewSection_outputFormatLabel: "فرمت خروجی",
        previewSection_reconvertButton: "تبدیل مجدد این تصویر",
        globalControls_qualityLabel: "کیفیت فشرده‌سازی کلی",
        globalControls_sizeLabel: "تنظیم وضوح کلی",
        globalControls_formatLabel: "فرمت خروجی کلی",
        globalControls_reconvertAllButton: "اعمال و تبدیل همه",
        globalControls_restoreDefaultsButton: "بازنشانی به پیش‌فرض",
        globalControls_noImagesNotification: "لطفاً ابتدا تصاویری اضافه کنید.",
        globalControls_reconvertingAllNotification: "در حال تبدیل مجدد همه {imageCount} تصویر با تنظیمات کلی",
        globalControls_restoredNotification: "گزینه‌ها به حالت پیش‌فرض بازنشانی شدند.",
        addSection_title: "افزودن تصاویر",
        addArea_dragDropTitle: "تصاویر را اینجا بکشید و رها کنید",
        addArea_supportedFormats: "پشتیبانی از فرمت‌های JPG، PNG، WebP، AVIF و HEIC",
        addArea_selectButton: "انتخاب تصاویر",
        addArea_tips: "*می‌توانید چند تصویر را همزمان اضافه کنید",
        ui_viewExplanationTitle: "درباره این گزینه‌ها بیشتر بدانید",
    }
};

export default fa;