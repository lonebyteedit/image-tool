import type { Translation } from './en.tsx';

const ne: Translation = {
    static: {
        index_lang: 'ne',
        index_dir: 'ltr',
        index_title: "Image Tool - उन्नत छवि रूपान्तरण उपकरण",
        index_description: "यो छवि कम्प्रेसन, रिसाइजिङ, र ढाँचा रूपान्तरणको लागि एक निःशुल्क, व्यावसायिक अनलाइन उपकरण हो। यसले JPG, PNG, WebP, र AVIF बिच आपसी रूपान्तरणलाई समर्थन गर्दछ, र HEIC लाई यी ढाँचाहरूमा रूपान्तरण गर्न सक्छ। सबै प्रशोधन तपाईंको ब्राउजरमा स्थानीय रूपमा हुन्छ—तपाईंका फाइलहरू कहिल्यै अपलोड हुँदैनन्, जसले पूर्ण गोपनीयता र डेटा सुरक्षा सुनिश्चित गर्दछ।",
        optionsExplanation: {
            title: "विकल्प निर्देशिका",
            subtitle: "आफ्नो छवि रूपान्तरण परिणामहरूलाई अनुकूलन गर्न प्रत्येक विकल्पको कार्य र प्रयोग बुझ्नुहोस्।",
            options: [
                {
                    id: "quality-option",
                    title: "कम्प्रेसन गुणस्तर",
                    description: <>
                        <p>यो विकल्प तब मात्र लागू हुन्छ जब लक्ष्य ढाँचा <strong>JPG</strong>, <strong>WebP (क्षतिपूर्ण)</strong>, वा <strong>AVIF (क्षतिपूर्ण)</strong> हुन्छ।</p>
                        <p>कम मानले सानो फाइल बनाउँछ तर छविको गुणस्तर घटाउँछ। सिफारिस गरिएको मान <strong>75</strong> ले फाइल साइज र गुणस्तर बिच राम्रो सन्तुलन प्रदान गर्दछ।</p>
                        <p>यदि कम्प्रेसन पछि पनि फाइल धेरै ठूलो छ भने, रिजोल्युसन घटाउने प्रयास गर्नुहोस्, जुन प्रायः फाइल साइज घटाउनको लागि बढी प्रभावकारी हुन्छ।</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "रिजोल्युसन समायोजन",
                    description: <>
                        <p>मूल पक्ष अनुपात कायम राख्दै छविको रिजोल्युसन प्रतिशतमा घटाउनुहोस्। <strong>100%</strong> ले मूल आयामहरू सुरक्षित राख्छ।</p>
                        <p>रिजोल्युसन घटाउँदा फाइल साइज <strong>उल्लेखनीय रूपमा</strong> घट्न सक्छ। यदि तपाईंलाई मूलको उच्च रिजोल्युसन आवश्यक छैन भने, यो प्रायः फाइल सानो बनाउने <strong>सबैभन्दा प्रभावकारी तरिका</strong> हो।</p>
                        <p>अन्य विकल्पहरू उस्तै रहँदा, <strong>100% रिजोल्युसन</strong> को आधारमा: <strong>75% रिजोल्युसन</strong> मा समायोजन गर्दा फाइल साइज औसतमा <strong>30%</strong> ले घट्छ; <strong>50% रिजोल्युसन</strong> मा समायोजन गर्दा औसतमा <strong>65%</strong> ले घट्छ; र <strong>25% रिजोल्युसन</strong> मा समायोजन गर्दा औसतमा <strong>88%</strong> ले घट्छ।</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "आउटपुट ढाँचा",
                    description: <>
                        <p>छविको लागि आउटपुट ढाँचा छान्नुहोस्। विभिन्न ढाँचाहरूको आ-आफ्नै फाइदा र प्रयोगका क्षेत्रहरू छन्।</p>
                        <p><strong>स्वतः कम्प्रेस</strong>: यो विकल्पले इनपुट ढाँचाको आधारमा उपयुक्त कम्प्रेसन रणनीति स्वतः लागू गर्दछ:</p>
                        <ul>
                            <li><strong>JPG</strong> इनपुटहरू <strong>JPG</strong> को रूपमा कम्प्रेस गरिन्छन्।</li>
                            <li><strong>PNG</strong> इनपुटहरू <strong>PNG (क्षतिपूर्ण)</strong> विधि प्रयोग गरेर कम्प्रेस गरिन्छन्।</li>
                            <li><strong>WebP</strong> इनपुटहरू <strong>WebP (क्षतिपूर्ण)</strong> विधि प्रयोग गरेर कम्प्रेस गरिन्छन्।</li>
                            <li><strong>AVIF</strong> इनपुटहरू <strong>AVIF (क्षतिपूर्ण)</strong> विधि प्रयोग गरेर कम्प्रेस गरिन्छन्।</li>
                            <li><strong>HEIC</strong> इनपुटहरू <strong>JPG</strong> मा रूपान्तरण गरिन्छन्।</li>
                        </ul>

                        <p>
                            तपाईं आफ्नो विशेष आवश्यकता अनुसार तलबाट म्यानुअल रूपमा ढाँचा चयन गर्न सक्नुहुन्छ। यहाँ प्रत्येक विकल्पको लागि विस्तृत गाइड छ:
                        </p>

                        <p>
                            <strong>JPG</strong>: सबैभन्दा लोकप्रिय छवि ढाँचा, यद्यपि यसले पारदर्शितालाई समर्थन गर्दैन। <strong>असम्पीडित PNG</strong> को तुलनामा, यसले फाइल साइज औसतमा <strong>90%</strong> ले घटाउन सक्छ। <strong>75</strong> को गुणस्तर सेटिङमा, गुणस्तरको क्षति प्रायः <strong>नदेखिने</strong> हुन्छ। यदि तपाईंलाई पारदर्शी पृष्ठभूमि आवश्यक छैन <strong>(जुन धेरैजसो फोटोहरूको लागि सत्य हो)</strong>, <strong>JPG</strong> मा रूपान्तरण गर्नु सामान्यतया उत्तम विकल्प हो।
                        </p>

                        <p>
                            <strong>PNG (क्षतिपूर्ण)</strong>: केही गुणस्तर हानिको साथ पारदर्शितालाई समर्थन गर्दछ, <strong>असम्पीडित PNG</strong> को तुलनामा फाइल साइज औसतमा <strong>70%</strong> ले घटाउँछ। यो तब मात्र छान्नुहोस् जब तपाईंलाई PNG ढाँचामा पारदर्शी पृष्ठभूमि आवश्यक हुन्छ। अन्यथा, <strong>JPG</strong> ले <strong>सानो साइजमा राम्रो गुणस्तर</strong> प्रदान गर्दछ (पारदर्शिता बिना), र <strong>WebP (क्षतिपूर्ण)</strong> ले <strong>राम्रो गुणस्तर, सानो साइज, र पारदर्शिता</strong> प्रदान गर्दछ, जसले गर्दा PNG ढाँचा कडा आवश्यकता नभएमा यो एक उत्कृष्ट विकल्प हो।
                        </p>

                        <p>
                            <strong>PNG (क्षतिरहित)</strong>: कुनै गुणस्तर हानि बिना पारदर्शितालाई समर्थन गर्दछ। <strong>असम्पीडित PNG</strong> को तुलनामा फाइल साइज औसतमा <strong>20%</strong> ले घटाउँछ। यद्यपि, <strong>यदि PNG ढाँचा कडा आवश्यकता छैन</strong> भने, <strong>WebP (क्षतिरहित)</strong> एक राम्रो विकल्प हो किनकि यसले सानो फाइल साइज प्रदान गर्दछ।
                        </p>

                        <p>
                            <strong>WebP (क्षतिपूर्ण)</strong>: थोरै गुणस्तर हानिको साथ पारदर्शितालाई समर्थन गर्दछ। <strong>असम्पीडित PNG</strong> को तुलनामा फाइल साइज औसतमा <strong>90%</strong> ले घटाउँछ। यो <strong>PNG (क्षतिपूर्ण)</strong> को लागि एक उत्कृष्ट प्रतिस्थापन हो, जसले राम्रो गुणस्तर र सानो साइज प्रदान गर्दछ। नोट: WebP केही पुराना उपकरणहरूमा समर्थित छैन।
                        </p>

                        <p>
                            <strong>WebP (क्षतिरहित)</strong>: कुनै गुणस्तर हानि बिना पारदर्शितालाई समर्थन गर्दछ। <strong>असम्पीडित PNG</strong> को तुलनामा फाइल साइज औसतमा <strong>50%</strong> ले घटाउँछ, जसले यसलाई <strong>PNG (क्षतिरहित)</strong> को लागि एक उत्कृष्ट प्रतिस्थापन बनाउँछ। नोट: WebP केही पुराना उपकरणहरूमा समर्थित छैन।
                        </p>

                        <p>
                            <strong>AVIF (क्षतिपूर्ण)</strong>: थोरै गुणस्तर हानिको साथ पारदर्शितालाई समर्थन गर्दछ। WebP को उत्तराधिकारीको रूपमा, यसले अझ उच्च कम्प्रेसन दर प्रदान गर्दछ, <strong>असम्पीडित PNG</strong> को तुलनामा फाइल साइज औसतमा <strong>94%</strong> ले घटाउँछ। एक अत्याधुनिक ढाँचाको रूपमा, AVIF ले धेरै सानो फाइल साइजमा उत्कृष्ट गुणस्तर प्रदान गर्दछ। यद्यपि, ब्राउजर र उपकरण अनुकूलता अझै सीमित छ। यो ढाँचा उन्नत प्रयोगकर्ताहरूका लागि वा जब तपाईं लक्ष्य उपकरणहरूले यसलाई समर्थन गर्छन् भन्ने निश्चित हुनुहुन्छ तब सबैभन्दा राम्रो हो।
                        </p>
                        <p>
                            <strong>AVIF (क्षतिरहित)</strong>: कुनै गुणस्तर हानि बिना पारदर्शितालाई समर्थन गर्दछ। <strong>असम्पीडित PNG</strong> को तुलनामा, फाइल साइजमा कमी महत्त्वपूर्ण छैन, र केहि अवस्थाहरूमा, बढ्न पनि सक्छ। जबसम्म तपाईंसँग क्षतिरहित AVIF को लागि विशेष आवश्यकता छैन, <strong>PNG (क्षतिरहित)</strong> वा <strong>WebP (क्षतिरहित)</strong> सामान्यतया राम्रो विकल्पहरू हुन्।
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "थिम परिवर्तन गर्नुहोस्"
    },
    interactive: {
        store_imageDeletedNotification: "हटाइयो: {fileName}",
        store_convertingImagesNotification: "{number} छविहरू रूपान्तरण हुँदैछन्...",
        store_conversionFailedNotification: "रूपान्तरण असफल भयो: {fileName}",
        store_unsupportedFileTypeNotification: "असमर्थित ढाँचा, हटाइयो: {fileName}",
        store_fileReadErrorNotification: "फाइल पढ्न सकिएन, हटाइयो: {fileName}",
        store_reconvertingNotification: "पुनः रूपान्तरण गर्दै: {fileName}",
        store_formatOptionAuto: "स्वतः कम्प्रेस",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (क्षतिपूर्ण)",
        store_formatOptionPngLossless: "PNG (क्षतिरहित)",
        store_formatOptionWebpLossy: "WebP (क्षतिपूर्ण)",
        store_formatOptionWebpLossless: "WebP (क्षतिरहित)",
        store_formatOptionAvifLossy: "AVIF (क्षतिपूर्ण)",
        store_formatOptionAvifLossless: "AVIF (क्षतिरहित)",
        previewSection_title: "पूर्वावलोकन र डाउनलोड",
        previewSection_downloadAllButton: "सबै डाउनलोड गर्नुहोस्",
        previewSection_deleteAllButton: "सबै मेटाउनुहोस्",
        previewSection_placeholder: "अहिलेसम्म कुनै छवि छैन।",
        previewSection_statusPending: "बाँकी",
        previewSection_statusConverting: "रूपान्तरण हुँदैछ...",
        previewSection_statusFailed: "असफल भयो। कृपया पृष्ठ रिफ्रेस गरी पुनः प्रयास गर्नुहोस्।",
        previewSection_statusCompleted: "सम्पन्न भयो",
        previewSection_noCompletedFilesNotification: "डाउनलोड गर्नका लागि कुनै सम्पन्न छविहरू छैनन्।",
        previewSection_downloadStartedNotification: "{fileCount} फाइल(हरू) डाउनलोड सुरु हुँदैछ...",
        previewSection_listEmptyNotification: "सूची खाली छ।",
        previewSection_allDeletedNotification: "सबै छविहरू हटाइएका छन्।",
        previewSection_zipCreationNotification: "ZIP बनाइँदैछ...",
        previewSection_zipCreationWithSkipsNotification: "ZIP बनाइँदैछ: केही छविहरू अपूर्ण छन् र छाडिनेछन्।",
        previewSection_zipCreationErrorNotification: "ZIP बनाउँदा त्रुटि भयो।",
        previewSection_waitConversionNotification: "कृपया रूपान्तरण समाप्त हुनको लागि पर्खनुहोस्।",
        previewSection_downloadingFileNotification: "डाउनलोड गर्दै: {fileName}",
        previewSection_originalSizeLabel: "मूल साइज:",
        previewSection_convertedSizeLabel: "रूपान्तरित साइज:",
        previewSection_downloadTitle: "डाउनलोड",
        previewSection_previewTitle: "पूर्वावलोकन",
        previewSection_deleteTitle: "मेटाउनुहोस्",
        previewSection_comparisonTab: "तुलना",
        previewSection_settingsTab: "सेटिङहरू",
        previewSection_originalImageLabel: "मूल छवि",
        previewSection_completedImageLabel: "रूपान्तरित छवि",
        previewSection_formatLabel: "ढाँचा:",
        previewSection_resolutionLabel: "रिजोल्युसन:",
        previewSection_viewLargerButton: "नयाँ ट्याबमा हेर्नुहोस्",
        previewSection_qualityLabel: "कम्प्रेसन गुणस्तर",
        previewSection_sizeLabel: "रिजोल्युसन समायोजन",
        previewSection_outputFormatLabel: "आउटपुट ढाँचा",
        previewSection_reconvertButton: "पुनः रूपान्तरण गर्नुहोस्",
        globalControls_qualityLabel: "ग्लोबल कम्प्रेसन गुणस्तर",
        globalControls_sizeLabel: "ग्लोबल रिजोल्युसन समायोजन",
        globalControls_formatLabel: "ग्लोबल आउटपुट ढाँचा",
        globalControls_reconvertAllButton: "लागू गरी सबैलाई पुनः रूपान्तरण गर्नुहोस्",
        globalControls_restoreDefaultsButton: "पूर्वनिर्धारित सेटिङहरू पुनर्स्थापना गर्नुहोस्",
        globalControls_noImagesNotification: "कृपया पहिले छविहरू थप्नुहोस्।",
        globalControls_reconvertingAllNotification: "ग्लोबल सेटिङहरू प्रयोग गरेर सबै {imageCount} छविहरू पुनः रूपान्तरण गरिँदैछ।",
        globalControls_restoredNotification: "विकल्पहरू पूर्वनिर्धारितमा रिसेट गरिएका छन्।",
        addSection_title: "छविहरू थप्नुहोस्",
        addArea_dragDropTitle: "छविहरू यहाँ तान्नुहोस् र छोड्नुहोस्",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, र HEIC लाई समर्थन गर्दछ",
        addArea_selectButton: "छविहरू छान्नुहोस्",
        addArea_tips: "* एकै पटकमा धेरै छविहरू थप्न सकिन्छ।",
        ui_viewExplanationTitle: "यी विकल्पहरूको बारेमा जान्नुहोस्",
    }
};

export default ne;