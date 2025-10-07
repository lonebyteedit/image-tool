import type { Translation } from './en.tsx';

const he: Translation = {
    static: {
        index_lang: 'he',
        index_dir: 'rtl',
        index_title: "Image Tool - כלי מתקדם להמרת תמונות",
        index_description: "כלי אונליין מקצועי וחינמי לדחיסת תמונות, שינוי גודלן והמרת הפורמט שלהן. תומך בהמרה הדדית בין JPG, PNG, WebP, ו-AVIF, ויכול להמיר קובצי HEIC לפורמטים אלו. כל העיבוד מתבצע באופן מקומי בדפדפן שלכם — הקבצים שלכם לעולם אינם נשלחים לשרת, מה שמבטיח פרטיות מלאה ואבטחת נתונים.",
        optionsExplanation: {
            title: "מדריך לאפשרויות",
            subtitle: "הבינו את התפקיד והשימוש של כל אפשרות כדי למטב את תוצאות המרת התמונות שלכם.",
            options: [
                {
                    id: "quality-option",
                    title: "איכות הדחיסה",
                    description: <>
                        <p>אפשרות זו רלוונטית רק כאשר פורמט היעד הוא <strong>JPG</strong>, <strong>WebP (עם אובדן)</strong>, או <strong>AVIF (עם אובדן)</strong>.</p>
                        <p>ערך נמוך יותר יוצר קובץ קטן יותר, אך פוגע באיכות התמונה. הערך המומלץ הוא <strong>75</strong>, המציע איזון טוב בין גודל הקובץ לאיכות.</p>
                        <p>אם הקובץ עדיין גדול מדי לאחר הדחיסה, נסו להקטין את הרזולוציה, שלרוב יעילה יותר להקטנת נפח הקובץ.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "התאמת רזולוציה",
                    description: <>
                        <p>הקטנת רזולוציית התמונה באחוזים תוך שמירה על יחס הגובה-רוחב המקורי. <strong>&lrm;100%</strong> משמר את הממדים המקוריים.</p>
                        <p>הקטנת הרזולוציה יכולה להפחית את נפח הקובץ באופן <strong>משמעותי</strong>. אם אינכם זקוקים לרזולוציה הגבוהה המקורית, זוהי לרוב <strong>הדרך היעילה ביותר</strong> להקטין את הקובץ.</p>
                        <p>כאשר שאר האפשרויות זהות, ובהתבסס על <strong>רזולוציה של &lrm;100%</strong>: התאמה ל-<strong>&lrm;75% רזולוציה</strong> מקטינה את נפח הקובץ בממוצע ב-<strong>&lrm;30%</strong>; התאמה ל-<strong>&lrm;50% רזולוציה</strong> מקטינה אותו בממוצע ב-<strong>&lrm;65%</strong>; והתאמה ל-<strong>&lrm;25% רזולוציה</strong> מקטינה אותו בממוצע ב-<strong>&lrm;88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "פורמט פלט",
                    description: <>
                        <p>בחרו את פורמט הפלט עבור התמונה. לפורמטים שונים יש יתרונות ושימושים ייעודיים.</p>
                        <p><strong>דחיסה אוטומטית</strong>: אפשרות זו תחיל אסטרטגיית דחיסה מתאימה על בסיס פורמט הקלט:</p>
                        <ul>
                            <li>קובצי <strong>JPG</strong> יידחסו כ-<strong>JPG</strong>.</li>
                            <li>קובצי <strong>PNG</strong> יידחסו בשיטת <strong>PNG (עם אובדן)</strong>.</li>
                            <li>קובצי <strong>WebP</strong> יידחסו בשיטת <strong>WebP (עם אובדן)</strong>.</li>
                            <li>קובצי <strong>AVIF</strong> יידחסו בשיטת <strong>AVIF (עם אובדן)</strong>.</li>
                            <li>קובצי <strong>HEIC</strong> יומרו ל-<strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            תוכלו גם לבחור פורמט באופן ידני מהרשימה מטה בהתאם לצרכים הספציפיים שלכם. להלן מדריך מפורט לכל אפשרות:
                        </p>

                        <p>
                            <strong>JPG</strong>: פורמט התמונה הפופולרי ביותר, אך אינו תומך בשקיפות. בהשוואה ל-<strong>PNG לא דחוס</strong>, הוא יכול להקטין את נפח הקובץ בממוצע ב-<strong>&lrm;90%</strong>. באיכות של <strong>75</strong>, אובדן האיכות <strong>כמעט ואינו מורגש</strong>. אם אינכם זקוקים לרקע שקוף <strong>(כפי שקורה ברוב התמונות)</strong>, המרה ל-<strong>JPG</strong> היא בדרך כלל הבחירה הטובה ביותר.
                        </p>

                        <p>
                            <strong>PNG (עם אובדן)</strong>: תומך בשקיפות עם אובדן איכות מסוים, ומקטין את נפח הקובץ בממוצע ב-<strong>&lrm;70%</strong> בהשוואה ל-<strong>PNG לא דחוס</strong>. בחרו באפשרות זו רק אם אתם זקוקים לרקע שקוף בפורמט PNG. אחרת, <strong>JPG</strong> מציע <strong>איכות טובה יותר בגודל קטן יותר</strong> (ללא שקיפות), ו-<strong>WebP (עם אובדן)</strong> מספק <strong>איכות טובה יותר, גודל קטן יותר, ושקיפות</strong>, מה שהופך אותו לחלופה עדיפה אם פורמט PNG אינו דרישה מחייבת.
                        </p>

                        <p>
                            <strong>PNG (ללא אובדן)</strong>: תומך בשקיפות ללא אובדן איכות. מקטין את נפח הקובץ בממוצע ב-<strong>&lrm;20%</strong> בהשוואה ל-<strong>PNG לא דחוס</strong>. עם זאת, <strong>אם פורמט PNG אינו חובה</strong>, <strong>WebP (ללא אובדן)</strong> הוא בחירה טובה יותר כיוון שהוא מציע קבצים קטנים יותר.
                        </p>

                        <p>
                            <strong>WebP (עם אובדן)</strong>: תומך בשקיפות עם אובדן איכות קל. מקטין את נפח הקובץ בממוצע ב-<strong>&lrm;90%</strong> בהשוואה ל-<strong>PNG לא דחוס</strong>. זהו תחליף מצוין ל-<strong>PNG (עם אובדן)</strong>, המציע איכות טובה יותר וקבצים קטנים יותר. הערה: WebP אינו נתמך במכשירים ישנים מסוימים.
                        </p>

                        <p>
                            <strong>WebP (ללא אובדן)</strong>: תומך בשקיפות ללא אובדן איכות. מקטין את נפח הקובץ בממוצע ב-<strong>&lrm;50%</strong> בהשוואה ל-<strong>PNG לא דחוס</strong>, מה שהופך אותו לתחליף עדיף על <strong>PNG (ללא אובדן)</strong>. הערה: WebP אינו נתמך במכשירים ישנים מסוימים.
                        </p>

                        <p>
                            <strong>AVIF (עם אובדן)</strong>: תומך בשקיפות עם אובדן איכות קל. כיורש של WebP, הוא מציע יחס דחיסה גבוה עוד יותר, ומקטין את נפח הקובץ בממוצע ב-<strong>&lrm;94%</strong> בהשוואה ל-<strong>PNG לא דחוס</strong>. כפורמט חדשני, AVIF מספק איכות מעולה בגדלים קטנים מאוד. עם זאת, התאימות לדפדפנים ומכשירים עדיין מוגבלת. פורמט זה מתאים ביותר למשתמשים מתקדמים או כאשר אתם בטוחים שמכשירי היעד תומכים בו.
                        </p>
                        <p>
                            <strong>AVIF (ללא אובדן)</strong>: תומך בשקיפות ללא אובדן איכות. בהשוואה ל-<strong>PNG לא דחוס</strong>, הקטנת נפח הקובץ אינה משמעותית, ובמקרים מסוימים הוא אף עלול לגדול. אלא אם יש לכם צורך ספציפי ב-AVIF ללא אובדן, <strong>PNG (ללא אובדן)</strong> או <strong>WebP (ללא אובדן)</strong> הם בדרך כלל אפשרויות טובות יותר.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "החלפת ערכת נושא"
    },
    interactive: {
        store_imageDeletedNotification: "התמונה הוסרה: \u200E{fileName}",
        store_convertingImagesNotification: "ממיר {number} תמונות...",
        store_conversionFailedNotification: "המרת התמונה נכשלה: \u200E{fileName}",
        store_unsupportedFileTypeNotification: "פורמט לא נתמך, הקובץ הוסר: \u200E{fileName}",
        store_fileReadErrorNotification: "לא ניתן לקרוא את הקובץ, הוא הוסר: \u200E{fileName}",
        store_reconvertingNotification: "מבצע המרה מחדש: \u200E{fileName}",
        store_formatOptionAuto: "דחיסה אוטומטית",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (עם אובדן)",
        store_formatOptionPngLossless: "PNG (ללא אובדן)",
        store_formatOptionWebpLossy: "WebP (עם אובדן)",
        store_formatOptionWebpLossless: "WebP (ללא אובדן)",
        store_formatOptionAvifLossy: "AVIF (עם אובדן)",
        store_formatOptionAvifLossless: "AVIF (ללא אובדן)",
        previewSection_title: "תצוגה מקדימה והורדה",
        previewSection_downloadAllButton: "הורדת הכל",
        previewSection_deleteAllButton: "מחיקת הכל",
        previewSection_placeholder: "אין תמונות עדיין.",
        previewSection_statusPending: "ממתין",
        previewSection_statusConverting: "ממיר...",
        previewSection_statusFailed: "ההמרה נכשלה. יש לרענן את הדף ולנסות שוב.",
        previewSection_statusCompleted: "הושלם",
        previewSection_noCompletedFilesNotification: "אין תמונות שהומרו ומוכנות להורדה.",
        previewSection_downloadStartedNotification: "מתחיל בהורדת {fileCount} קבצים...",
        previewSection_listEmptyNotification: "הרשימה ריקה.",
        previewSection_allDeletedNotification: "כל התמונות נמחקו.",
        previewSection_zipCreationNotification: "יוצר ZIP...",
        previewSection_zipCreationWithSkipsNotification: "יוצר ZIP: ישנן תמונות שטרם הושלמו וידולגו.",
        previewSection_zipCreationErrorNotification: "אירעה שגיאה במהלך יצירת ה-ZIP.",
        previewSection_waitConversionNotification: "יש להמתין לסיום ההמרה.",
        previewSection_downloadingFileNotification: "מוריד: \u200E{fileName}",
        previewSection_originalSizeLabel: "גודל מקורי:",
        previewSection_convertedSizeLabel: "גודל לאחר המרה:",
        previewSection_downloadTitle: "הורדה",
        previewSection_previewTitle: "תצוגה מקדימה",
        previewSection_deleteTitle: "מחיקה",
        previewSection_comparisonTab: "השוואה",
        previewSection_settingsTab: "הגדרות נפרדות",
        previewSection_originalImageLabel: "תמונה מקורית",
        previewSection_completedImageLabel: "תמונה לאחר המרה",
        previewSection_formatLabel: "פורמט:",
        previewSection_resolutionLabel: "רזולוציה:",
        previewSection_viewLargerButton: "פתיחה בכרטיסייה חדשה",
        previewSection_qualityLabel: "איכות הדחיסה",
        previewSection_sizeLabel: "התאמת רזולוציה",
        previewSection_outputFormatLabel: "פורמט פלט",
        previewSection_reconvertButton: "המר מחדש",
        globalControls_qualityLabel: "איכות דחיסה כללית",
        globalControls_sizeLabel: "התאמת רזולוציה כללית",
        globalControls_formatLabel: "פורמט פלט כללי",
        globalControls_reconvertAllButton: "החל והמר את הכל",
        globalControls_restoreDefaultsButton: "איפוס אפשרויות",
        globalControls_noImagesNotification: "יש להוסיף תמונות תחילה.",
        globalControls_reconvertingAllNotification: "ממיר מחדש את כל {imageCount} התמונות עם ההגדרות הכלליות",
        globalControls_restoredNotification: "האפשרויות אופסו לברירת המחדל.",
        addSection_title: "הוספת תמונות",
        addArea_dragDropTitle: "גררו ושחררו תמונות לכאן",
        addArea_supportedFormats: "תמיכה בפורמטים JPG, PNG, WebP, AVIF, ו-HEIC",
        addArea_selectButton: "בחירת תמונות",
        addArea_tips: "*אפשר להוסיף מספר תמונות בפעם אחת",
        ui_viewExplanationTitle: "מידע על אפשרויות אלו",
    }
};

export default he;