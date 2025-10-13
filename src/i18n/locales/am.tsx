import type { Translation } from './en.tsx';

const am: Translation = {
    static: {
        index_lang: 'am',
        index_dir: 'ltr',
        index_title: "Image Tool - የላቀ የምስል መቀየሪያ መሳሪያ",
        index_description: "ነጻ እና ፕሮፌሽናል የሆነ የመስመር ላይ የምስል መጭመቂያ፣ መጠን ማስተካከያ እና የፋይል አይነት መቀየሪያ መሳሪያ ነው። በJPG, PNG, WebP, እና AVIF መካከል ልወጣን የሚደግፍ ሲሆን፣ HEICን ወደነዚህ የፋይል አይነቶች መቀየር ይችላል። ሁሉም ሂደቶች የሚከናወኑት በእርስዎ አሳሽ (browser) ውስጥ ነው — ፋይሎችዎ በፍጹም ወደ ሰርቨር አይጫኑም፤ ይህም የተሟላ ግላዊነትዎን እና የዳታ ደህንነትዎን ያረጋግጣል።",
        optionsExplanation: {
            title: "የአማራጮች መመሪያ",
            subtitle: "የልወጣ ውጤቶችዎን ለማሻሻል የእያንዳንዱን አማራጭ ተግባር እና አጠቃቀም ይረዱ።",
            options: [
                {
                    id: "quality-option",
                    title: "የመጭመቅ ጥራት",
                    description: <>
                        <p>ይህ አማራጭ የሚሰራው የውጤት ፋይል አይነት <strong>JPG</strong>፣ <strong>WebP (ኪሳራ ያለው)</strong>፣ ወይም <strong>AVIF (ኪሳራ ያለው)</strong> ሲሆን ብቻ ነው።</p>
                        <p>ዝቅተኛ እሴት ፋይሉን ያሳንሳል ነገር ግን የምስሉን ጥራት ይቀንሳል። የሚመከረው እሴት <strong>75</strong> ሲሆን፣ በፋይል መጠን እና በጥራት መካከል ጥሩ ሚዛን ይሰጣል።</p>
                        <p>ከተጨመቀ በኋላም ፋይሉ አሁንም በጣም ትልቅ ከሆነ፣ የምስል ልኬቱን (Resolution) ለመቀነስ ይሞክሩ፤ ይህ ብዙውን ጊዜ የፋይል መጠንን ለመቀነስ የበለጠ ውጤታማ ነው።</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "የምስል ልኬት (Resolution) ማስተካከያ",
                    description: <>
                        <p>የመጀመሪያውን የምስል ገጽታ ጥምርታ እየጠበቁ የምስሉን ልኬት (Resolution) በመቶኛ ይቀንሱ። <strong>100%</strong> የመጀመሪያውን መጠን እንደያዘ ያቆያል።</p>
                        <p>የምስል ልኬቱን (Resolution) መቀነስ የፋይሉን መጠን <strong>በጣም</strong> ሊቀንሰው ይችላል። የመጀመሪያውን ከፍተኛ የምስል ልኬት (Resolution) ካላስፈለገዎት፣ የፋይሉን መጠን ለመቀነስ ይህ ብዙውን ጊዜ <strong>በጣም ውጤታማው መንገድ</strong> ነው።</p>
                        <p>ሌሎች አማራጮች ተመሳሳይ እንደሆኑ ሆነው፣ ከ<strong>100% የምስል ልኬት (Resolution)</strong> አንጻር ሲታይ፣ ወደ <strong>75%</strong> ማስተካከል የፋይሉን መጠን በአማካይ በ<strong>30%</strong> ይቀንሳል፤ ወደ <strong>50%</strong> ማስተካከል በአማካይ በ<strong>65%</strong> ይቀንሳል፤ ወደ <strong>25%</strong> ማስተካከል ደግሞ በአማካይ በ<strong>88%</strong> ይቀንሳል።</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "የውጤት ፋይል አይነት",
                    description: <>
                        <p>የምስሉን የውጤት ፋይል አይነት ይምረጡ። የተለያዩ የፋይል አይነቶች የራሳቸው ጥቅሞች እና የአጠቃቀም ሁኔታዎች አሏቸው።</p>
                        <p><strong>ራስ-ሰር መጭመቅ</strong>: ይህ አማራጭ በገባው የምስል አይነት ላይ በመመስረት ተስማሚ የመጭመቅ ስልት ይተገብራል፦</p>
                        <ul>
                            <li><strong>JPG</strong> ምስሎች እንደ <strong>JPG</strong> ይጨመቃሉ።</li>
                            <li><strong>PNG</strong> ምስሎች በ<strong>PNG (ኪሳራ ያለው)</strong> ዘዴ ይጨመቃሉ።</li>
                            <li><strong>WebP</strong> ምስሎች በ<strong>WebP (ኪሳራ ያለው)</strong> ዘዴ ይጨመቃሉ።</li>
                            <li><strong>AVIF</strong> ምስሎች በ<strong>AVIF (ኪሳራ ያለው)</strong> ዘዴ ይጨመቃሉ።</li>
                            <li><strong>HEIC</strong> ምስሎች ወደ <strong>JPG</strong> ይቀየራሉ።</li>
                        </ul>

                        <p>
                            እንዲሁም እንደፍላጎትዎ ከዚህ በታች ካሉት የፋይል አይነቶች ውስጥ እራስዎ መምረጥ ይችላሉ። የእያንዳንዱ አማራጭ ዝርዝር መመሪያ ይኸውና፦
                        </p>

                        <p>
                            <strong>JPG</strong>: በጣም ታዋቂው የምስል አይነት ነው፣ ነገር ግን ግልጽ ዳራ (transparency) አይደግፍም። <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር የፋይል መጠንን በአማካይ በ<strong>90%</strong> ይቀንሳል። በ<strong>75</strong> የጥራት ቅንብር፣ የጥራት መጥፋቱ <strong>ለመለየት ያስቸግራል።</strong> ግልጽ ዳራ የማያስፈልግዎ ከሆነ <strong>(ለአብዛኛዎቹ ፎቶዎች እንደማያስፈልገው)</strong>፣ ወደ <strong>JPG</strong> መቀየር ብዙውን ጊዜ ምርጥ ምርጫ ነው።
                        </p>

                        <p>
                            <strong>PNG (ኪሳራ ያለው)</strong>: ግልጽ ዳራን በጥቂት የጥራት መጓደል ይደግፋል። <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር የፋይል መጠንን በአማካይ በ<strong>70%</strong> ይቀንሳል። ይህንን የሚመርጡት ግልጽ ዳራ በPNG አይነት ሲያስፈልግዎት ብቻ ነው። ያለበለዚያ፣ <strong>JPG</strong> <strong>በትንሽ መጠን የተሻለ ጥራት</strong> (ያለ ግልጽ ዳራ) ይሰጣል፤ <strong>WebP (ኪሳራ ያለው)</strong> ደግሞ <strong>የተሻለ ጥራት፣ አነስተኛ መጠን እና ግልጽ ዳራ</strong> ያቀርባል፤ ይህም የPNG አይነት የግድ ካልሆነ የተሻለ አማራጭ ያደርገዋል።
                        </p>

                        <p>
                            <strong>PNG (ኪሳራ የሌለው)</strong>: ግልጽ ዳራን ያለ ምንም የጥራት መጓደል ይደግፋል። <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር የፋይል መጠንን በአማካይ በ<strong>20%</strong> ይቀንሳል። ሆኖም፣ <strong>የPNG አይነት የግድ ካልሆነ</strong>፣ <strong>WebP (ኪሳራ የሌለው)</strong> አነስተኛ የፋይል መጠን ስለሚሰጥ የተሻለ ምርጫ ነው።
                        </p>

                        <p>
                            <strong>WebP (ኪሳራ ያለው)</strong>: ግልጽ ዳራን በጥቂት የጥራት መጓደል ይደግፋል። <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር የፋይል መጠንን በአማካይ በ<strong>90%</strong> ይቀንሳል። የተሻለ ጥራት እና አነስተኛ መጠን ስለሚያቀርብ ለ<strong>PNG (ኪሳራ ያለው)</strong> እጅግ በጣም ጥሩ ምትክ ነው። ማሳሰቢያ፦ WebP በአንዳንድ የቆዩ መሳሪያዎች ላይ ላይደገፍ ይችላል።
                        </p>

                        <p>
                            <strong>WebP (ኪሳራ የሌለው)</strong>: ግልጽ ዳራን ያለ ምንም የጥራት መጓደል ይደግፋል። <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር የፋይል መጠንን በአማካይ በ<strong>50%</strong> ይቀንሳል፤ ይህም ለ<strong>PNG (ኪሳራ የሌለው)</strong> የተሻለ ምትክ ያደርገዋል። ማሳሰቢያ፦ WebP በአንዳንድ የቆዩ መሳሪያዎች ላይ ላይደገፍ ይችላል።
                        </p>

                        <p>
                            <strong>AVIF (ኪሳራ ያለው)</strong>: ግልጽ ዳራን በጥቂት የጥራት መጓደል ይደግፋል። የWebP ተተኪ እንደመሆኑ፣ ይበልጥ ከፍተኛ የመጭመቅ አቅም አለው፤ የፋይል መጠንን <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር በአማካይ በ<strong>94%</strong> ይቀንሳል። ዘመናዊ ፎርማት እንደመሆኑ፣ AVIF በጣም ትንሽ በሆነ የፋይል መጠን እጅግ በጣም ጥሩ ጥራት ያቀርባል። ሆኖም፣ ከአሳሾች እና ከመሳሪያዎች ጋር ያለው ተኳሃኝነት አሁንም ውስን ነው። ይህ ፎርማት ለላቁ ተጠቃሚዎች ወይም ዒላማ የሆኑት መሳሪያዎች እንደሚደግፉት እርግጠኛ ሲሆኑ ተመራጭ ነው።
                        </p>
                        <p>
                            <strong>AVIF (ኪሳራ የሌለው)</strong>: ግልጽ ዳራን ያለ ምንም የጥራት መጓደል ይደግፋል። <strong>ያልተጨመቀ PNG</strong> ጋር ሲነጻጸር፣ የፋይል መጠን ቅነሳው ጉልህ አይደለም፤ እንዲያውም በአንዳንድ ሁኔታዎች ሊጨምር ይችላል። ለlossless AVIF የተለየ ፍላጎት ከሌለዎት በስተቀር፣ <strong>PNG (ኪሳራ የሌለው)</strong> ወይም <strong>WebP (ኪሳራ የሌለው)</strong> በአጠቃላይ የተሻሉ አማራጮች ናቸው።
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "ገጽታ ቀይር"
    },
    interactive: {
        store_imageDeletedNotification: "ተወግዷል: {fileName}",
        store_convertingImagesNotification: "{number} ምስሎችን በመቀየር ላይ ነው...",
        store_conversionFailedNotification: "ልወጣ አልተሳካም: {fileName}",
        store_unsupportedFileTypeNotification: "የማይደገፍ የፋይል አይነት፣ ተወግዷል: {fileName}",
        store_fileReadErrorNotification: "ፋይሉን ማንበብ አልተቻለም፣ ተወግዷል: {fileName}",
        store_reconvertingNotification: "በድጋሚ በመቀየር ላይ: {fileName}",
        store_formatOptionAuto: "ራስ-ሰር መጭመቅ",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (ኪሳራ ያለው)",
        store_formatOptionPngLossless: "PNG (ኪሳራ የሌለው)",
        store_formatOptionWebpLossy: "WebP (ኪሳራ ያለው)",
        store_formatOptionWebpLossless: "WebP (ኪሳራ የሌለው)",
        store_formatOptionAvifLossy: "AVIF (ኪሳራ ያለው)",
        store_formatOptionAvifLossless: "AVIF (ኪሳራ የሌለው)",
        previewSection_title: "ቅድመ-እይታ እና ማውረድ",
        previewSection_downloadAllButton: "ሁሉንም አውርድ",
        previewSection_deleteAllButton: "ሁሉንም አጥፋ",
        previewSection_placeholder: "እስካሁን ምንም ምስሎች የሉም።",
        previewSection_statusPending: "በተጠባባቂ ላይ",
        previewSection_statusConverting: "በመቀየር ላይ...",
        previewSection_statusFailed: "አልተሳካም። እባክዎ ገጹን እንደገና ይጫኑ እና ይሞክሩ።",
        previewSection_statusCompleted: "ተጠናቋል",
        previewSection_noCompletedFilesNotification: "ለማውረድ ምንም የተጠናቀቁ ምስሎች የሉም።",
        previewSection_downloadStartedNotification: "{fileCount} ፋይሎችን ማውረድ በመጀመር ላይ...",
        previewSection_listEmptyNotification: "ዝርዝሩ ባዶ ነው።",
        previewSection_allDeletedNotification: "ሁሉም ምስሎች ተወግደዋል።",
        previewSection_zipCreationNotification: "ZIP በመፍጠር ላይ...",
        previewSection_zipCreationWithSkipsNotification: "ZIP በመፍጠር ላይ: አንዳንድ ምስሎች ያልተጠናቀቁ በመሆናቸው ይታለፋሉ።",
        previewSection_zipCreationErrorNotification: "ZIP በሚፈጠርበት ጊዜ ስህተት ተከስቷል።",
        previewSection_waitConversionNotification: "እባክዎ ልወጣው እስኪጠናቀቅ ይጠብቁ።",
        previewSection_downloadingFileNotification: "በማውረድ ላይ: {fileName}",
        previewSection_originalSizeLabel: "የመጀመሪያ መጠን:",
        previewSection_convertedSizeLabel: "የተለወጠ መጠን:",
        previewSection_downloadTitle: "አውርድ",
        previewSection_previewTitle: "ቅድመ-እይታ",
        previewSection_deleteTitle: "አጥፋ",
        previewSection_comparisonTab: "አነጻጽር",
        previewSection_settingsTab: "ቅንብሮች",
        previewSection_originalImageLabel: "የመጀመሪያው ምስል",
        previewSection_completedImageLabel: "የተለወጠው ምስል",
        previewSection_formatLabel: "የፋይል አይነት:",
        previewSection_resolutionLabel: "ልኬት (Resolution):",
        previewSection_viewLargerButton: "በአዲስ መስኮት ክፈት",
        previewSection_qualityLabel: "የመጭመቅ ጥራት",
        previewSection_sizeLabel: "የምስል ልኬት (Resolution) ማስተካከያ",
        previewSection_outputFormatLabel: "የውጤት ፋይል አይነት",
        previewSection_reconvertButton: "ይህን ምስል እንደገና ቀይር",
        globalControls_qualityLabel: "አጠቃላይ የመጭመቅ ጥራት",
        globalControls_sizeLabel: "አጠቃላይ የምስል ልኬት (Resolution) ማስተካከያ",
        globalControls_formatLabel: "አጠቃላይ የውጤት ፋይል አይነት",
        globalControls_reconvertAllButton: "ተግብር እና ሁሉንም ቀይር",
        globalControls_restoreDefaultsButton: "ቅንብሮችን ዳግም አስጀምር",
        globalControls_noImagesNotification: "እባክዎ መጀመሪያ ምስሎችን ይጨምሩ።",
        globalControls_reconvertingAllNotification: "ሁሉንም {imageCount} ምስሎች በአጠቃላይ ቅንብሮች እንደገና በመቀየር ላይ",
        globalControls_restoredNotification: "ቅንብሮች ወደ ነባሪ ተመልሰዋል።",
        addSection_title: "ምስሎችን ጨምር",
        addArea_dragDropTitle: "ምስሎችን እዚህ ይጎትቱ እና ይልቀቁ",
        addArea_supportedFormats: "የሚደገፉ አይነቶች፦ JPG, PNG, WebP, AVIF, እና HEIC",
        addArea_selectButton: "ምስሎችን ይምረጡ",
        addArea_tips: "*በአንድ ጊዜ በርካታ ምስሎችን መጨመር ይችላሉ።",
        ui_viewExplanationTitle: "ስለእነዚህ አማራጮች ይወቁ",
    }
};

export default am;