import type { Translation } from './en.tsx';

const mr: Translation = {
    static: {
        index_lang: 'mr',
        index_dir: 'ltr',
        index_title: "Image Tool - प्रगत इमेज रूपांतरण साधन",
        index_description: "हे एक विनामूल्य, व्यावसायिक ऑनलाइन साधन आहे जे इमेज कॉम्प्रेशन, आकार बदलणे आणि फॉरमॅट रूपांतरणासाठी वापरले जाते. हे JPG, PNG, WebP, आणि AVIF मध्ये परस्पर रूपांतरणास समर्थन देते आणि HEIC ला या फॉरमॅट्समध्ये रूपांतरित करू शकते. सर्व प्रक्रिया तुमच्या ब्राउझरमध्ये स्थानिक पातळीवर होते — तुमच्या फाइल्स कधीही अपलोड केल्या जात नाहीत, ज्यामुळे तुमच्या गोपनीयतेची आणि डेटा सुरक्षिततेची पूर्ण हमी मिळते.",
        optionsExplanation: {
            title: "पर्यायांचे मार्गदर्शन",
            subtitle: "तुमच्या इमेज रूपांतरणाचे परिणाम ऑप्टिमाइझ करण्यासाठी प्रत्येक पर्यायाचे कार्य आणि वापर समजून घ्या.",
            options: [
                {
                    id: "quality-option",
                    title: "कॉम्प्रेशन गुणवत्ता",
                    description: <>
                        <p>हा पर्याय फक्त <strong>JPG</strong>, <strong>WebP (लॉसी)</strong>, किंवा <strong>AVIF (लॉसी)</strong> या आउटपुट फॉरमॅटसाठी लागू आहे.</p>
                        <p>कमी मूल्य असलेली फाइल लहान बनते, पण इमेजची गुणवत्ता कमी होते. <strong>75</strong> हे शिफारस केलेले मूल्य आहे, जे फाइलचा आकार आणि गुणवत्ता यांच्यात चांगला समतोल साधते.</p>
                        <p>जर कॉम्प्रेशननंतरही फाइल खूप मोठी असेल, तर रिझोल्यूशन कमी करून पहा, जे फाइलचा आकार कमी करण्यासाठी अधिक प्रभावी ठरते.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "रिझोल्यूशन समायोजन",
                    description: <>
                        <p>मूळ गुणोत्तर (aspect ratio) कायम ठेवून इमेजचे रिझोल्यूशन टक्केवारीने कमी करा. <strong>100%</strong> म्हणजे मूळ आकार कायम ठेवणे.</p>
                        <p>रिझोल्यूशन कमी केल्याने फाइलचा आकार <strong>लक्षणीयरीत्या</strong> कमी होऊ शकतो. जर तुम्हाला मूळ उच्च रिझोल्यूशनची गरज नसेल, तर फाइल लहान करण्याचा हा <strong>सर्वात प्रभावी मार्ग</strong> आहे.</p>
                        <p>इतर पर्याय समान ठेवून, <strong>100% रिझोल्यूशन</strong>च्या तुलनेत: <strong>75% रिझोल्यूशन</strong>वर समायोजित केल्यास फाइलचा आकार सरासरी <strong>30%</strong> ने कमी होतो; <strong>50% रिझोल्यूशन</strong>वर समायोजित केल्यास सरासरी <strong>65%</strong> ने कमी होतो; आणि <strong>25% रिझोल्यूशन</strong>वर समायोजित केल्यास सरासरी <strong>88%</strong> ने कमी होतो.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "आउटपुट फॉरमॅट",
                    description: <>
                        <p>इमेजसाठी आउटपुट फॉरमॅट निवडा. प्रत्येक फॉरमॅटचे स्वतःचे फायदे आणि वापर आहेत.</p>
                        <p><strong>ऑटो कॉम्प्रेस</strong>: हा पर्याय इनपुट फॉरमॅटनुसार योग्य कॉम्प्रेशन धोरण लागू करतो:</p>
                        <ul>
                            <li><strong>JPG</strong> इनपुट <strong>JPG</strong> म्हणून कॉम्प्रेस केले जातात.</li>
                            <li><strong>PNG</strong> इनपुट <strong>PNG (लॉसी)</strong> पद्धतीने कॉम्प्रेस केले जातात.</li>
                            <li><strong>WebP</strong> इनपुट <strong>WebP (लॉसी)</strong> पद्धतीने कॉम्प्रेस केले जातात.</li>
                            <li><strong>AVIF</strong> इनपुट <strong>AVIF (लॉसी)</strong> पद्धतीने कॉम्प्रेस केले जातात.</li>
                            <li><strong>HEIC</strong> इनपुट <strong>JPG</strong> मध्ये रूपांतरित केले जातात.</li>
                        </ul>

                        <p>
                            तुम्ही तुमच्या गरजेनुसार खालीलपैकी एक फॉरमॅट निवडू शकता. प्रत्येक पर्यायासाठी तपशीलवार मार्गदर्शक येथे आहे:
                        </p>

                        <p>
                            <strong>JPG</strong>: सर्वात लोकप्रिय इमेज फॉरमॅट, पण तो पारदर्शकतेला (transparency) समर्थन देत नाही. <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत, तो फाइलचा आकार सरासरी <strong>90%</strong> ने कमी करू शकतो. <strong>75</strong> च्या गुणवत्ता सेटिंगमध्ये, गुणवत्तेतील घट <strong>सहजासहजी लक्षात न येणारी</strong> असते. जर तुम्हाला पारदर्शक बॅकग्राउंडची गरज नसेल <strong>(जे बहुतेक फोटोंसाठी खरे आहे)</strong>, तर <strong>JPG</strong> मध्ये रूपांतरित करणे हा सर्वोत्तम पर्याय आहे.
                        </p>

                        <p>
                            <strong>PNG (लॉसी)</strong>: पारदर्शकतेला समर्थन देतो, पण गुणवत्तेत थोडी घट होते. <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत फाइलचा आकार सरासरी <strong>70%</strong> ने कमी करतो. हा पर्याय फक्त तेव्हाच निवडावा जेव्हा तुम्हाला PNG फॉरमॅटमध्ये पारदर्शक बॅकग्राउंडची आवश्यकता असेल. अन्यथा, <strong>JPG</strong> <strong>कमी आकारात चांगली गुणवत्ता</strong> देतो (पारदर्शकतेशिवाय), आणि <strong>WebP (लॉसी)</strong> <strong>चांगली गुणवत्ता, लहान आकार आणि पारदर्शकता</strong> देतो, त्यामुळे PNG फॉरमॅट अनिवार्य नसल्यास तो एक उत्तम पर्याय आहे.
                        </p>

                        <p>
                            <strong>PNG (लॉसलेस)</strong>: गुणवत्तेत कोणतीही घट न होता पारदर्शकतेला समर्थन देतो. <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत फाइलचा आकार सरासरी <strong>20%</strong> ने कमी करतो. तथापि, <strong>जर PNG फॉरमॅट अनिवार्य नसेल</strong>, तर <strong>WebP (लॉसलेस)</strong> हा एक चांगला पर्याय आहे कारण तो लहान आकाराच्या फाइल्स देतो.
                        </p>

                        <p>
                            <strong>WebP (लॉसी)</strong>: पारदर्शकतेला समर्थन देतो आणि गुणवत्तेत थोडी घट होते. <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत फाइलचा आकार सरासरी <strong>90%</strong> ने कमी करतो. हा <strong>PNG (लॉसी)</strong> साठी एक उत्कृष्ट पर्याय आहे, कारण तो चांगली गुणवत्ता आणि लहान आकार देतो. टीप: काही जुन्या डिव्हाइसेसवर WebP समर्थित नाही.
                        </p>

                        <p>
                            <strong>WebP (लॉसलेस)</strong>: गुणवत्तेत कोणतीही घट न होता पारदर्शकतेला समर्थन देतो. <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत फाइलचा आकार सरासरी <strong>50%</strong> ने कमी करतो, ज्यामुळे तो <strong>PNG (लॉसलेस)</strong> साठी एक उत्तम पर्याय बनतो. टीप: काही जुन्या डिव्हाइसेसवर WebP समर्थित नाही.
                        </p>

                        <p>
                            <strong>AVIF (लॉसी)</strong>: पारदर्शकतेला समर्थन देतो आणि गुणवत्तेत थोडी घट होते. WebP चा उत्तराधिकारी म्हणून, तो आणखी उच्च कॉम्प्रेशन दर देतो, <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत फाइलचा आकार सरासरी <strong>94%</strong> ने कमी करतो. एक अत्याधुनिक फॉरमॅट म्हणून, AVIF खूप लहान आकारात उत्कृष्ट गुणवत्ता देतो. तथापि, ब्राउझर आणि डिव्हाइस सुसंगतता अजूनही मर्यादित आहे. हा फॉरमॅट प्रगत वापरकर्त्यांसाठी किंवा जेव्हा तुम्हाला खात्री असेल की लक्ष्यित डिव्हाइसेस त्याला समर्थन देतात तेव्हा सर्वोत्तम आहे.
                        </p>
                        <p>
                            <strong>AVIF (लॉसलेस)</strong>: गुणवत्तेत कोणतीही घट न होता पारदर्शकतेला समर्थन देतो. <strong>कॉम्प्रेस न केलेल्या PNG</strong> च्या तुलनेत, फाइलच्या आकारात घट लक्षणीय नसते, आणि काही प्रकरणांमध्ये आकार वाढू शकतो. जोपर्यंत तुम्हाला लॉसलेस AVIF ची विशिष्ट गरज नसेल, तोपर्यंत <strong>PNG (लॉसलेस)</strong> किंवा <strong>WebP (लॉसलेस)</strong> हे सामान्यतः चांगले पर्याय आहेत.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "थीम बदला"
    },
    interactive: {
        store_imageDeletedNotification: "इमेज हटवली: {fileName}",
        store_convertingImagesNotification: "{number} इमेजेस रूपांतरित होत आहेत...",
        store_conversionFailedNotification: "रूपांतरण अयशस्वी: {fileName}",
        store_unsupportedFileTypeNotification: "असमर्थित फॉरमॅट, इमेज काढली: {fileName}",
        store_fileReadErrorNotification: "फाइल वाचता आली नाही, इमेज काढली: {fileName}",
        store_reconvertingNotification: "पुन्हा रूपांतरित करत आहे: {fileName}",
        store_formatOptionAuto: "ऑटो कॉम्प्रेस",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (लॉसी)",
        store_formatOptionPngLossless: "PNG (लॉसलेस)",
        store_formatOptionWebpLossy: "WebP (लॉसी)",
        store_formatOptionWebpLossless: "WebP (लॉसलेस)",
        store_formatOptionAvifLossy: "AVIF (लॉसी)",
        store_formatOptionAvifLossless: "AVIF (लॉसलेस)",
        previewSection_title: "पूर्वावलोकन आणि डाउनलोड",
        previewSection_downloadAllButton: "सर्व डाउनलोड करा",
        previewSection_deleteAllButton: "सर्व हटवा",
        previewSection_placeholder: "अद्याप कोणत्याही इमेजेस नाहीत.",
        previewSection_statusPending: "प्रलंबित",
        previewSection_statusConverting: "रूपांतरित होत आहे...",
        previewSection_statusFailed: "अयशस्वी झाले. कृपया पेज रिफ्रेश करून पुन्हा प्रयत्न करा.",
        previewSection_statusCompleted: "पूर्ण झाले",
        previewSection_noCompletedFilesNotification: "डाउनलोड करण्यासाठी कोणत्याही पूर्ण झालेल्या इमेजेस नाहीत.",
        previewSection_downloadStartedNotification: "{fileCount} फाइल्स डाउनलोड करणे सुरू करत आहे...",
        previewSection_listEmptyNotification: "यादी रिकामी आहे.",
        previewSection_allDeletedNotification: "सर्व इमेजेस काढल्या गेल्या आहेत.",
        previewSection_zipCreationNotification: "ZIP तयार होत आहे...",
        previewSection_zipCreationWithSkipsNotification: "ZIP तयार होत आहे: काही इमेजेस अपूर्ण आहेत, त्या वगळल्या जातील.",
        previewSection_zipCreationErrorNotification: "ZIP तयार करताना एक त्रुटी आली.",
        previewSection_waitConversionNotification: "कृपया रूपांतरण पूर्ण होण्याची प्रतीक्षा करा.",
        previewSection_downloadingFileNotification: "डाउनलोड करत आहे: {fileName}",
        previewSection_originalSizeLabel: "मूळ आकार:",
        previewSection_convertedSizeLabel: "रूपांतरित आकार:",
        previewSection_downloadTitle: "डाउनलोड",
        previewSection_previewTitle: "पूर्वावलोकन",
        previewSection_deleteTitle: "हटवा",
        previewSection_comparisonTab: "तुलना करा",
        previewSection_settingsTab: "सेटिंग्ज",
        previewSection_originalImageLabel: "मूळ इमेज",
        previewSection_completedImageLabel: "रूपांतरित इमेज",
        previewSection_formatLabel: "फॉरमॅट:",
        previewSection_resolutionLabel: "रिझोल्यूशन:",
        previewSection_viewLargerButton: "नवीन टॅबमध्ये पहा",
        previewSection_qualityLabel: "कॉम्प्रेशन गुणवत्ता",
        previewSection_sizeLabel: "रिझोल्यूशन समायोजन",
        previewSection_outputFormatLabel: "आउटपुट फॉरमॅट",
        previewSection_reconvertButton: "पुन्हा रूपांतरित करा",
        globalControls_qualityLabel: "सर्वांसाठी कॉम्प्रेशन गुणवत्ता",
        globalControls_sizeLabel: "सर्वांसाठी रिझोल्यूशन समायोजन",
        globalControls_formatLabel: "सर्वांसाठी आउटपुट फॉरमॅट",
        globalControls_reconvertAllButton: "लागू करा आणि सर्व पुन्हा रूपांतरित करा",
        globalControls_restoreDefaultsButton: "पर्याय रीसेट करा",
        globalControls_noImagesNotification: "कृपया प्रथम इमेजेस जोडा.",
        globalControls_reconvertingAllNotification: "जागतिक सेटिंग्जसह सर्व {imageCount} इमेजेस पुन्हा रूपांतरित करत आहे",
        globalControls_restoredNotification: "पर्याय डीफॉल्टवर रीसेट केले आहेत.",
        addSection_title: "इमेजेस जोडा",
        addArea_dragDropTitle: "इथे इमेज ड्रॅग आणि ड्रॉप करा",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, आणि HEIC फॉरमॅट समर्थित आहेत",
        addArea_selectButton: "इमेजेस निवडा",
        addArea_tips: "*तुम्ही एकाच वेळी अनेक इमेजेस जोडू शकता",
        ui_viewExplanationTitle: "या पर्यायांबद्दल अधिक जाणून घ्या",
    }
};

export default mr;