import type { Translation } from './en.tsx';

const ur: Translation = {
    static: {
        index_lang: 'ur',
        index_dir: 'rtl',
        index_title: "Image Tool - جدید امیج کنورژن ٹول",
        index_description: "یہ ایک پیشہ ورانہ، مفت آن لائن امیج پراسیسنگ ٹول ہے جو امیج کمپریشن، سائز تبدیل کرنے، اور فارمیٹ کنورژن کو سپورٹ کرتا ہے۔ یہ JPG, PNG, WebP, اور AVIF کے درمیان باہمی تبدیلی کی حمایت کرتا ہے، اور HEIC کو ان فارمیٹس میں تبدیل کر سکتا ہے۔ تمام پراسیسنگ آپ کے براؤزر میں مقامی طور پر ہوتی ہے — آپ کی فائلیں کبھی بھی اپ لوڈ نہیں کی جاتیں، جو آپ کی مکمل رازداری اور ڈیٹا کی حفاظت کو یقینی بناتی ہے۔",
        optionsExplanation: {
            title: "آپشنز گائیڈ",
            subtitle: "اپنی امیج کنورژن کے نتائج کو بہتر بنانے کے لیے ہر آپشن کے فنکشن اور استعمال کو سمجھیں۔",
            options: [
                {
                    id: "quality-option",
                    title: "کمپریشن کوالٹی",
                    description: <>
                        <p>یہ آپشن صرف اس وقت لاگو ہوتا ہے جب ٹارگٹ فارمیٹ <strong>JPG</strong>، <strong>WebP (نقصان کے ساتھ)</strong>، یا <strong>AVIF (نقصان کے ساتھ)</strong> ہو۔</p>
                        <p>کم قدر ایک چھوٹی فائل بناتی ہے لیکن تصویر کے معیار کو کم کرتی ہے۔ <strong>75</strong> کی تجویز کردہ قدر فائل کے سائز اور معیار کے درمیان ایک اچھا توازن فراہم کرتی ہے۔</p>
                        <p>اگر کمپریشن کے بعد بھی فائل بہت بڑی ہے، تو ریزولوشن کو کم کرنے کی کوشش کریں، جو اکثر فائل کا سائز کم کرنے میں زیادہ مؤثر ہوتا ہے۔</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "ریزولوشن ایڈجسٹمنٹ",
                    description: <>
                        <p>اصل اسپیکٹ ریشو کو برقرار رکھتے ہوئے تصویر کی ریزولوشن کو فیصد کے حساب سے کم کریں۔ <strong>&lrm;100%</strong> اصل سائز کو محفوظ رکھتا ہے۔</p>
                        <p>ریزولوشن کو کم کرنا فائل کے سائز کو <strong>نمایاں طور پر</strong> کم کر سکتا ہے۔ اگر آپ کو اصل کی ہائی ریزولوشن کی ضرورت نہیں ہے، تو یہ اکثر فائل کو چھوٹا کرنے کا <strong>سب سے مؤثر طریقہ</strong> ہوتا ہے۔</p>
                        <p>دیگر آپشنز کے یکساں ہونے کی صورت میں، <strong>&lrm;100% ریزولوشن</strong> کی بنیاد پر۔ <strong>&lrm;75% ریزولوشن</strong> میں ایڈجسٹ کرنے سے فائل کا سائز اوسطاً <strong>&lrm;30%</strong> کم ہو جاتا ہے؛ <strong>&lrm;50% ریزولوشن</strong> میں ایڈجسٹ کرنے سے اوسطاً <strong>&lrm;65%</strong> کم ہو جاتا ہے؛ اور <strong>&lrm;25% ریزولوشن</strong> میں ایڈجسٹ کرنے سے اوسطاً <strong>&lrm;88%</strong> کم ہو جاتا ہے۔</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "آؤٹ پٹ فارمیٹ",
                    description: <>
                        <p>تصویر کے لیے آؤٹ پٹ فارمیٹ کا انتخاب کریں۔ مختلف فارمیٹس کے اپنے فوائد اور استعمال کے معاملات ہوتے ہیں۔</p>
                        <p><strong>آٹو کمپریس</strong>: یہ آپشن ان پٹ فارمیٹ کی بنیاد پر ایک مناسب کمپریشن حکمت عملی خود بخود لاگو کرتا ہے:</p>
                        <ul>
                            <li><strong>JPG</strong> ان پٹس کو <strong>JPG</strong> کے طور پر کمپریس کیا جاتا ہے۔</li>
                            <li><strong>PNG</strong> ان پٹس کو <strong>PNG (نقصان کے ساتھ)</strong> طریقہ استعمال کرتے ہوئے کمپریس کیا جاتا ہے۔</li>
                            <li><strong>WebP</strong> ان پٹس کو <strong>WebP (نقصان کے ساتھ)</strong> طریقہ استعمال کرتے ہوئے کمپریس کیا جاتا ہے۔</li>
                            <li><strong>AVIF</strong> ان پٹس کو <strong>AVIF (نقصان کے ساتھ)</strong> طریقہ استعمال کرتے ہوئے کمپریس کیا جاتا ہے۔</li>
                            <li><strong>HEIC</strong> ان پٹس کو <strong>JPG</strong> میں تبدیل کیا جاتا ہے۔</li>
                        </ul>

                        <p>
                            آپ اپنی مخصوص ضروریات کی بنیاد پر نیچے سے دستی طور پر بھی ایک فارمیٹ منتخب کر سکتے ہیں۔ ہر آپشن کے لیے ایک تفصیلی گائیڈ یہ ہے:
                        </p>

                        <p>
                            <strong>JPG</strong>: سب سے مقبول امیج فارمیٹ، اگرچہ یہ شفافیت (transparency) کو سپورٹ نہیں کرتا۔ <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں، یہ فائل کا سائز اوسطاً <strong>&lrm;90%</strong> تک کم کر سکتا ہے۔ <strong>75</strong> کی کوالٹی سیٹنگ پر، کوالٹی کا نقصان اکثر <strong>محسوس نہیں ہوتا</strong>۔ اگر آپ کو شفاف پس منظر کی ضرورت نہیں ہے <strong>(جو زیادہ تر تصاویر کے لیے درست ہے)</strong>، تو <strong>JPG</strong> میں تبدیل کرنا عام طور پر بہترین انتخاب ہے۔
                        </p>

                        <p>
                            <strong>PNG (نقصان کے ساتھ)</strong>: کچھ کوالٹی کے نقصان کے ساتھ شفافیت کو سپورٹ کرتا ہے، <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں فائل کا سائز اوسطاً <strong>&lrm;70%</strong> تک کم کرتا ہے۔ اسے صرف اس صورت میں منتخب کریں جب آپ کو PNG فارمیٹ میں شفاف پس منظر کی ضرورت ہو۔ بصورت دیگر، <strong>JPG</strong> <strong>کم سائز میں بہتر کوالٹی</strong> پیش کرتا ہے (بغیر شفافیت کے)، اور <strong>WebP (نقصان کے ساتھ)</strong> <strong>بہتر کوالٹی، چھوٹا سائز، اور شفافیت</strong> فراہم کرتا ہے، جو اسے ایک بہتر متبادل بناتا ہے اگر PNG فارمیٹ سخت ضرورت نہ ہو۔
                        </p>

                        <p>
                            <strong>PNG (بغیر نقصان کے)</strong>: بغیر کسی کوالٹی کے نقصان کے شفافیت کو سپورٹ کرتا ہے۔ <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں فائل کا سائز اوسطاً <strong>&lrm;20%</strong> تک کم کرتا ہے۔ تاہم، <strong>اگر PNG فارمیٹ سخت ضرورت نہیں ہے</strong>، تو <strong>WebP (بغیر نقصان کے)</strong> ایک بہتر انتخاب ہے کیونکہ یہ چھوٹی فائلیں پیش کرتا ہے۔
                        </p>

                        <p>
                            <strong>WebP (نقصان کے ساتھ)</strong>: ہلکے کوالٹی کے نقصان کے ساتھ شفافیت کو سپورٹ کرتا ہے۔ <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں فائل کا سائز اوسطاً <strong>&lrm;90%</strong> تک کم کرتا ہے۔ یہ <strong>PNG (نقصان کے ساتھ)</strong> کا ایک بہترین متبادل ہے، جو بہتر کوالٹی اور چھوٹے سائز کی پیشکش کرتا ہے۔ نوٹ: WebP کچھ پرانے آلات پر سپورٹ نہیں ہوتا۔
                        </p>

                        <p>
                            <strong>WebP (بغیر نقصان کے)</strong>: بغیر کسی کوالٹی کے نقصان کے شفافیت کو سپورٹ کرتا ہے۔ <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں فائل کا سائز اوسطاً <strong>&lrm;50%</strong> تک کم کرتا ہے، جو اسے <strong>PNG (بغیر نقصان کے)</strong> کا ایک اعلیٰ متبادل بناتا ہے۔ نوٹ: WebP کچھ پرانے آلات پر سپورٹ نہیں ہوتا۔
                        </p>

                        <p>
                            <strong>AVIF (نقصان کے ساتھ)</strong>: ہلکے کوالٹی کے نقصان کے ساتھ شفافیت کو سپورٹ کرتا ہے۔ WebP کے جانشین کے طور پر، یہ اور بھی زیادہ کمپریشن ریٹ پیش کرتا ہے، <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں فائل کا سائز اوسطاً <strong>&lrm;94%</strong> تک کم کرتا ہے۔ ایک جدید فارمیٹ کے طور پر، AVIF بہت چھوٹے فائل سائز پر بہترین کوالٹی فراہم کرتا ہے۔ تاہم، براؤزر اور ڈیوائس کی مطابقت اب بھی محدود ہے۔ یہ فارمیٹ جدید صارفین کے لیے یا جب آپ کو یقین ہو کہ ٹارگٹ ڈیوائسز اسے سپورٹ کرتی ہیں، بہترین ہے۔
                        </p>
                        <p>
                            <strong>AVIF (بغیر نقصان کے)</strong>: بغیر کسی کوالٹی کے نقصان کے شفافیت کو سپورٹ کرتا ہے۔ <strong>غیر کمپریس شدہ PNG</strong> کے مقابلے میں، فائل کے سائز میں کمی اہم نہیں ہے، اور بعض صورتوں میں، یہ بڑھ بھی سکتا ہے۔ جب تک آپ کو lossless AVIF کی کوئی خاص ضرورت نہ ہو، <strong>PNG (بغیر نقصان کے)</strong> یا <strong>WebP (بغیر نقصان کے)</strong> عام طور پر بہتر آپشنز ہیں۔
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "تھیم تبدیل کریں"
    },
    interactive: {
        store_imageDeletedNotification: "حذف کر دیا گیا: \u200E{fileName}",
        store_convertingImagesNotification: "{number} تصاویر کو کنورٹ کیا جا رہا ہے...",
        store_conversionFailedNotification: "کنورژن ناکام: \u200E{fileName}",
        store_unsupportedFileTypeNotification: "ناقابلِ قبول فارمیٹ، حذف کر دیا گیا: \u200E{fileName}",
        store_fileReadErrorNotification: "فائل پڑھنے میں ناکامی، حذف کر دیا گیا: \u200E{fileName}",
        store_reconvertingNotification: "دوبارہ کنورٹ کیا جا رہا ہے: \u200E{fileName}",
        store_formatOptionAuto: "آٹو کمپریس",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (نقصان کے ساتھ)",
        store_formatOptionPngLossless: "PNG (بغیر نقصان کے)",
        store_formatOptionWebpLossy: "WebP (نقصان کے ساتھ)",
        store_formatOptionWebpLossless: "WebP (بغیر نقصان کے)",
        store_formatOptionAvifLossy: "AVIF (نقصان کے ساتھ)",
        store_formatOptionAvifLossless: "AVIF (بغیر نقصان کے)",
        previewSection_title: "پیش منظر اور ڈاؤن لوڈ",
        previewSection_downloadAllButton: "سب ڈاؤن لوڈ کریں",
        previewSection_deleteAllButton: "سب حذف کریں",
        previewSection_placeholder: "ابھی تک کوئی تصویر نہیں۔",
        previewSection_statusPending: "زیر التواء",
        previewSection_statusConverting: "کنورٹ ہو رہا ہے...",
        previewSection_statusFailed: "ناکامی۔ براہ کرم صفحہ ریفریش کریں اور دوبارہ کوشش کریں۔",
        previewSection_statusCompleted: "مکمل",
        previewSection_noCompletedFilesNotification: "ڈاؤن لوڈ کے لیے کوئی مکمل شدہ تصاویر نہیں۔",
        previewSection_downloadStartedNotification: "{fileCount} فائلوں کا ڈاؤن لوڈ شروع ہو رہا ہے...",
        previewSection_listEmptyNotification: "فہرست خالی ہے۔",
        previewSection_allDeletedNotification: "تمام تصاویر حذف کر دی گئی ہیں۔",
        previewSection_zipCreationNotification: "ZIP بنائی جا رہی ہے...",
        previewSection_zipCreationWithSkipsNotification: "ZIP بنائی جا رہی ہے: کچھ تصاویر نامکمل ہیں اور انہیں چھوڑ دیا جائے گا۔",
        previewSection_zipCreationErrorNotification: "ZIP بناتے وقت ایک خرابی پیش آئی۔",
        previewSection_waitConversionNotification: "براہ کرم کنورژن مکمل ہونے کا انتظار کریں۔",
        previewSection_downloadingFileNotification: "ڈاؤن لوڈ ہو رہا ہے: \u200E{fileName}",
        previewSection_originalSizeLabel: "اصل سائز:",
        previewSection_convertedSizeLabel: "تبدیل شدہ سائز:",
        previewSection_downloadTitle: "ڈاؤن لوڈ",
        previewSection_previewTitle: "پیش منظر",
        previewSection_deleteTitle: "حذف کریں",
        previewSection_comparisonTab: "موازنہ",
        previewSection_settingsTab: "ترتیبات",
        previewSection_originalImageLabel: "اصل تصویر",
        previewSection_completedImageLabel: "تبدیل شدہ تصویر",
        previewSection_formatLabel: "فارمیٹ:",
        previewSection_resolutionLabel: "ریزولوشن:",
        previewSection_viewLargerButton: "نئے ٹیب میں دیکھیں",
        previewSection_qualityLabel: "کمپریشن کوالٹی",
        previewSection_sizeLabel: "ریزولوشن ایڈجسٹمنٹ",
        previewSection_outputFormatLabel: "آؤٹ پٹ فارمیٹ",
        previewSection_reconvertButton: "دوبارہ کنورٹ کریں",
        globalControls_qualityLabel: "گلوبل کمپریشن کوالٹی",
        globalControls_sizeLabel: "گلوبل ریزولوشن ایڈجسٹمنٹ",
        globalControls_formatLabel: "گلوبل آؤٹ پٹ فارمیٹ",
        globalControls_reconvertAllButton: "لاگو کریں اور سب کو دوبارہ کنورٹ کریں",
        globalControls_restoreDefaultsButton: "ڈیفالٹ آپشنز بحال کریں",
        globalControls_noImagesNotification: "براہ کرم پہلے تصاویر شامل کریں۔",
        globalControls_reconvertingAllNotification: "گلوبل سیٹنگز کے ساتھ تمام {imageCount} تصاویر کو دوبارہ کنورٹ کیا جا رہا ہے",
        globalControls_restoredNotification: "آپشنز ڈیفالٹ پر ری سیٹ ہو گئے ہیں۔",
        addSection_title: "تصاویر شامل کریں",
        addArea_dragDropTitle: "تصاویر یہاں ڈریگ اینڈ ڈراپ کریں",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, اور HEIC فارمیٹس کو سپورٹ کرتا ہے",
        addArea_selectButton: "تصاویر منتخب کریں",
        addArea_tips: "*ایک ساتھ ایک سے زیادہ تصاویر شامل کی جا سکتی ہیں۔",
        ui_viewExplanationTitle: "ان آپشنز کے بارے میں جانیں",
    }
};

export default ur;