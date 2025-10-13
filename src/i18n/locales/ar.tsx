import type { Translation } from './en.tsx';

const ar: Translation = {
  static: {
    index_lang: 'ar',
    index_dir: 'rtl',
    index_title: "Image Tool - أداة متقدمة لتحويل الصور",
    index_description: "أداة احترافية مجانية عبر الإنترنت لضغط الصور، وتغيير أبعادها، وتحويل صيغها. تدعم التحويل المتبادل بين صيغ JPG, PNG, WebP, و AVIF، ويمكنها تحويل صيغة HEIC إلى هذه الصيغ. تتم جميع عمليات المعالجة محلياً في متصفحك — لا يتم رفع ملفاتك أبداً إلى أي خادم، مما يضمن خصوصية وأمان بياناتك بشكل كامل.",
    optionsExplanation: {
      title: "دليل الخيارات",
      subtitle: "تعرف على وظيفة كل خيار وكيفية استخدامه لتحسين نتائج تحويل صورك.",
      options: [
        {
          id: "quality-option",
          title: "جودة الضغط",
          description: <>
            <p>هذا الخيار ينطبق فقط عندما تكون الصيغة النهائية هي <strong>JPG</strong> أو <strong>WebP (مع فقدان)</strong> أو <strong>AVIF (مع فقدان)</strong>.</p>
            <p>قيمة أقل تعني ملفاً أصغر حجماً، ولكن بجودة صورة أقل. القيمة الموصى بها هي <strong>75</strong>، حيث توفر توازناً جيداً بين حجم الملف والجودة.</p>
            <p>إذا كان الملف لا يزال كبيراً جداً بعد الضغط، جرب تقليل الدقة، فهذا غالباً ما يكون أكثر فاعلية في تقليل حجم الملف.</p>
          </>
        },
        {
          id: "size-option",
          title: "تعديل الدقة",
          description: <>
            <p>تقليل دقة الصورة بنسبة مئوية مع الحفاظ على أبعادها الأصلية. <strong>&lrm;100%</strong> تعني الحفاظ على الدقة الأصلية.</p>
            <p>تقليل الدقة يمكن أن يقلل حجم الملف بشكل <strong>كبير جداً</strong>. إذا لم تكن بحاجة إلى الدقة العالية الأصلية، فهذه غالباً ما تكون <strong>الطريقة الأكثر فاعلية</strong> لتصغير حجم الملف.</p>
            <p>بافتراض أن الخيارات الأخرى لم تتغير، وبالمقارنة مع الدقة الكاملة (<strong>&lrm;100%</strong>)، فإن تعديل الدقة إلى <strong>&lrm;75%</strong> يقلل حجم الملف بمعدل <strong>&lrm;30%</strong>؛ وتعديلها إلى <strong>&lrm;50%</strong> يقلله بمعدل <strong>&lrm;65%</strong>؛ وتعديلها إلى <strong>&lrm;25%</strong> يقلله بمعدل <strong>&lrm;88%</strong>.</p>
          </>
        },
        {
          id: "format-option",
          title: "صيغة الإخراج",
          description: <>
            <p>اختر صيغة الإخراج للصورة. كل صيغة لها مزاياها وحالات استخدامها الخاصة.</p>
            <p><strong>ضغط تلقائي</strong>: هذا الخيار يطبق استراتيجية ضغط مناسبة بناءً على صيغة الصورة المدخلة:</p>
            <ul>
              <li>صور <strong>JPG</strong> يتم ضغطها بصيغة <strong>JPG</strong>.</li>
              <li>صور <strong>PNG</strong> يتم ضغطها باستخدام طريقة <strong>PNG (مع فقدان)</strong>.</li>
              <li>صور <strong>WebP</strong> يتم ضغطها باستخدام طريقة <strong>WebP (مع فقدان)</strong>.</li>
              <li>صور <strong>AVIF</strong> يتم ضغطها باستخدام طريقة <strong>AVIF (مع فقدان)</strong>.</li>
              <li>صور <strong>HEIC</strong> يتم تحويلها إلى <strong>JPG</strong>.</li>
            </ul>

            <p>يمكنك أيضاً اختيار صيغة يدوياً من القائمة أدناه بناءً على احتياجاتك. إليك دليل مفصل لكل خيار:</p>

            <p>
              <strong>JPG</strong>: هي أشهر صيغة للصور، لكنها لا تدعم الشفافية. مقارنة بصورة <strong>PNG غير مضغوطة</strong>، يمكنها تقليل حجم الملف بمعدل <strong>&lrm;90%</strong>. عند جودة ضغط <strong>75</strong>، يكون فقدان الجودة <strong>يكاد يكون غير ملحوظ</strong>. إذا لم تكن بحاجة إلى الشفافية <strong>(وهو الحال في معظم الصور)</strong>، فإن التحويل إلى <strong>JPG</strong> هو الخيار الأفضل عادةً.
            </p>

            <p>
              <strong>PNG (مع فقدان)</strong>: يدعم الشفافية مع فقدان طفيف في الجودة، ويقلل حجم الملف بمعدل <strong>&lrm;70%</strong> مقارنة بصورة <strong>PNG غير مضغوطة</strong>. اختر هذا الخيار فقط إذا كنت تحتاج إلى الشفافية بصيغة PNG. بخلاف ذلك، فإن <strong>JPG</strong> يقدم <strong>جودة أفضل بحجم أصغر</strong> (بدون شفافية)، و<strong>WebP (مع فقدان)</strong> يقدم <strong>جودة أفضل، وحجماً أصغر، ويدعم الشفافية</strong>، مما يجعله بديلاً أفضل إذا لم تكن صيغة PNG مطلوبة بشكل صارم.
            </p>

            <p>
              <strong>PNG (بدون فقدان)</strong>: يدعم الشفافية بدون أي فقدان في الجودة. يقلل حجم الملف بمعدل <strong>&lrm;20%</strong> مقارنة بصورة <strong>PNG غير مضغوطة</strong>. ولكن، <strong>إذا لم تكن صيغة PNG إلزامية</strong>، فإن <strong>WebP (بدون فقدان)</strong> يعد خياراً أفضل لأنه يقدم أحجام ملفات أصغر.
            </p>

            <p>
              <strong>WebP (مع فقدان)</strong>: يدعم الشفافية مع فقدان طفيف في الجودة. يقلل حجم الملف بمعدل <strong>&lrm;90%</strong> مقارنة بصورة <strong>PNG غير مضغوطة</strong>. وهو بديل ممتاز لصيغة <strong>PNG (مع فقدان)</strong>، حيث يقدم جودة أفضل وحجماً أصغر. ملاحظة: صيغة WebP غير مدعومة في بعض الأجهزة القديمة.
            </p>

            <p>
              <strong>WebP (بدون فقدان)</strong>: يدعم الشفافية بدون أي فقدان في الجودة. يقلل حجم الملف بمعدل <strong>&lrm;50%</strong> مقارنة بصورة <strong>PNG غير مضغوطة</strong>، مما يجعله بديلاً أفضل من <strong>PNG (بدون فقدان)</strong>. ملاحظة: صيغة WebP غير مدعومة في بعض الأجهزة القديمة.
            </p>

            <p>
              <strong>AVIF (مع فقدان)</strong>: يدعم الشفافية مع فقدان في الجودة. كوريث لصيغة WebP، فإنه يوفر معدل ضغط أعلى، حيث يقلل حجم الملف بمعدل <strong>&lrm;94%</strong> مقارنة بصورة <strong>PNG غير مضغوطة</strong>. كصيغة حديثة ومتطورة، توفر AVIF جودة ممتازة بأحجام ملفات صغيرة جداً. ومع ذلك، لا يزال التوافق مع المتصفحات والأجهزة محدوداً. هذه الصيغة هي الأنسب للمستخدمين المتقدمين أو عندما تكون متأكداً من أن الأجهزة المستهدفة تدعمها.
            </p>
            <p>
              <strong>AVIF (بدون فقدان)</strong>: يدعم الشفافية بدون فقدان للجودة. مقارنة بصورة <strong>PNG غير مضغوطة</strong>، فإن تقليل حجم الملف ليس كبيراً، وفي بعض الحالات قد يزيد حجم الملف. ما لم تكن لديك حاجة خاصة لهذه الصيغة، فإن <strong>PNG (بدون فقدان)</strong> أو <strong>WebP (بدون فقدان)</strong> هما خيارات أفضل بشكل عام.
            </p>
          </>
        }
      ]
    },
    themeToggle_title: "تغيير المظهر"
  },
  interactive: {
    store_imageDeletedNotification: "تم حذف الصورة: \u200E{fileName}",
    store_convertingImagesNotification: "جاري تحويل {number} من الصور...",
    store_conversionFailedNotification: "فشل تحويل الصورة: \u200E{fileName}",
    store_unsupportedFileTypeNotification: "صيغة غير مدعومة، تم حذف الصورة: \u200E{fileName}",
    store_fileReadErrorNotification: "تعذرت قراءة الملف، تم حذف الصورة: \u200E{fileName}",
    store_reconvertingNotification: "إعادة تحويل: \u200E{fileName}",
    store_formatOptionAuto: "ضغط تلقائي",
    store_formatOptionJpg: "JPG",
    store_formatOptionPngLossy: "PNG (مع فقدان)",
    store_formatOptionPngLossless: "PNG (بدون فقدان)",
    store_formatOptionWebpLossy: "WebP (مع فقدان)",
    store_formatOptionWebpLossless: "WebP (بدون فقدان)",
    store_formatOptionAvifLossy: "AVIF (مع فقدان)",
    store_formatOptionAvifLossless: "AVIF (بدون فقدان)",
    previewSection_title: "معاينة وتحميل",
    previewSection_downloadAllButton: "تحميل الكل",
    previewSection_deleteAllButton: "حذف الكل",
    previewSection_placeholder: "لا توجد صور بعد.",
    previewSection_statusPending: "قيد الانتظار",
    previewSection_statusConverting: "جاري التحويل...",
    previewSection_statusFailed: "فشل التحويل. يرجى تحديث الصفحة والمحاولة مرة أخرى.",
    previewSection_statusCompleted: "اكتمل",
    previewSection_noCompletedFilesNotification: "لا توجد صور مكتملة لتحميلها.",
    previewSection_downloadStartedNotification: "بدء تحميل {fileCount} ملفات...",
    previewSection_listEmptyNotification: "القائمة فارغة.",
    previewSection_allDeletedNotification: "تم حذف جميع الصور.",
    previewSection_zipCreationNotification: "جاري إنشاء ZIP...",
    previewSection_zipCreationWithSkipsNotification: "جاري إنشاء ZIP: بعض الصور غير مكتملة، وسيتم تخطيها.",
    previewSection_zipCreationErrorNotification: "حدث خطأ أثناء إنشاء ZIP.",
    previewSection_waitConversionNotification: "يرجى انتظار اكتمال التحويل.",
    previewSection_downloadingFileNotification: "جاري التحميل: \u200E{fileName}",
    previewSection_originalSizeLabel: "الحجم الأصلي:",
    previewSection_convertedSizeLabel: "الحجم بعد التحويل:",
    previewSection_downloadTitle: "تحميل",
    previewSection_previewTitle: "معاينة",
    previewSection_deleteTitle: "حذف",
    previewSection_comparisonTab: "مقارنة",
    previewSection_settingsTab: "إعدادات",
    previewSection_originalImageLabel: "الصورة الأصلية",
    previewSection_completedImageLabel: "الصورة المحولة",
    previewSection_formatLabel: "الصيغة:",
    previewSection_resolutionLabel: "الدقة:",
    previewSection_viewLargerButton: "عرض في تبويب جديد",
    previewSection_qualityLabel: "جودة الضغط",
    previewSection_sizeLabel: "تعديل الدقة",
    previewSection_outputFormatLabel: "صيغة الإخراج",
    previewSection_reconvertButton: "إعادة تحويل هذه الصورة",
    globalControls_qualityLabel: "جودة الضغط العامة",
    globalControls_sizeLabel: "تعديل الدقة العام",
    globalControls_formatLabel: "صيغة الإخراج العامة",
    globalControls_reconvertAllButton: "تطبيق وإعادة تحويل الكل",
    globalControls_restoreDefaultsButton: "استعادة الإعدادات الافتراضية",
    globalControls_noImagesNotification: "يرجى إضافة صور أولاً.",
    globalControls_reconvertingAllNotification: "إعادة تحويل كل الصور (عدد {imageCount}) بالإعدادات العامة",
    globalControls_restoredNotification: "تمت استعادة الإعدادات إلى الوضع الافتراضي.",
    addSection_title: "إضافة صور",
    addArea_dragDropTitle: "اسحب وأفلت الصور هنا",
    addArea_supportedFormats: "يدعم صيغ JPG, PNG, WebP, AVIF, HEIC",
    addArea_selectButton: "اختر الصور",
    addArea_tips: "*يمكنك إضافة أكثر من صورة",
    ui_viewExplanationTitle: "تعرف على هذه الخيارات",
  }
};

export default ar;