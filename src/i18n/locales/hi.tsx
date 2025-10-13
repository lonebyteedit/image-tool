import type { Translation } from './en.tsx';

const hi: Translation = {
    static: {
        index_lang: 'hi',
        index_dir: 'ltr',
        index_title: "Image Tool - एडवांस्ड इमेज कन्वर्जन टूल",
        index_description: "यह इमेज कंप्रेशन, रीसाइज़िंग और फ़ॉर्मेट कन्वर्जन के लिए एक मुफ़्त, पेशेवर ऑनलाइन टूल है। यह JPG, PNG, WebP, और AVIF के बीच आपसी कन्वर्जन का समर्थन करता है, और HEIC को इन फ़ॉर्मेट में बदल सकता है। सारी प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से होती है—आपकी फ़ाइलें कभी भी अपलोड नहीं की जाती हैं, जो पूरी गोपनीयता और डेटा सुरक्षा सुनिश्चित करता है।",
        optionsExplanation: {
            title: "विकल्प गाइड",
            subtitle: "अपने इमेज कन्वर्जन परिणामों को अनुकूलित करने के लिए प्रत्येक विकल्प के कार्य और उपयोग को समझें।",
            options: [
                {
                    id: "quality-option",
                    title: "कंप्रेशन क्वालिटी",
                    description: <>
                        <p>यह विकल्प केवल तभी लागू होता है जब लक्ष्य फ़ॉर्मेट <strong>JPG</strong>, <strong>WebP (लॉसी)</strong>, या <strong>AVIF (लॉसी)</strong> हो।</p>
                        <p>कम मान एक छोटी फ़ाइल बनाता है लेकिन इमेज की क्वालिटी कम कर देता है। <strong>75</strong> का अनुशंसित मान फ़ाइल आकार और क्वालिटी के बीच एक अच्छा संतुलन प्रदान करता है।</p>
                        <p>अगर कंप्रेशन के बाद भी फ़ाइल बहुत बड़ी है, तो रिज़ॉल्यूशन कम करने का प्रयास करें, जो अक्सर फ़ाइल का आकार छोटा करने के लिए अधिक प्रभावी होता है।</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "रिज़ॉल्यूशन एडजस्टमेंट",
                    description: <>
                        <p>मूल पहलू अनुपात को बनाए रखते हुए इमेज के रिज़ॉल्यूशन को प्रतिशत के हिसाब से कम करें। <strong>100%</strong> मूल आयामों को बनाए रखता है।</p>
                        <p>रिज़ॉल्यूशन कम करने से फ़ाइल का आकार <strong>काफी</strong> कम हो सकता है। यदि आपको मूल हाई रिज़ॉल्यूशन की आवश्यकता नहीं है, तो यह अक्सर फ़ाइल को छोटा करने का <strong>सबसे प्रभावी तरीका</strong> होता है।</p>
                        <p>अन्य विकल्पों के समान होने पर, <strong>100% रिज़ॉल्यूशन</strong> के आधार पर। <strong>75% रिज़ॉल्यूशन</strong> में एडजस्ट करने पर फ़ाइल का आकार औसतन <strong>30%</strong> कम हो जाता है; <strong>50% रिज़ॉल्यूशन</strong> में एडजस्ट करने पर यह औसतन <strong>65%</strong> कम हो जाता है; और <strong>25% रिज़ॉल्यूशन</strong> में एडजस्ट करने पर यह औसतन <strong>88%</strong> कम हो जाता है।</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "आउटपुट फ़ॉर्मेट",
                    description: <>
                        <p>इमेज के लिए आउटपुट फ़ॉर्मेट चुनें। विभिन्न फ़ॉर्मेट के अपने फायदे और उपयोग के मामले होते हैं।</p>
                        <p><strong>ऑटो कंप्रेस</strong>: यह विकल्प इनपुट फ़ॉर्मेट के आधार पर एक उपयुक्त कंप्रेशन रणनीति स्वचालित रूप से लागू करता है:</p>
                        <ul>
                            <li><strong>JPG</strong> इनपुट को <strong>JPG</strong> के रूप में कंप्रेस किया जाता है।</li>
                            <li><strong>PNG</strong> इनपुट को <strong>PNG (लॉसी)</strong> विधि का उपयोग करके कंप्रेस किया जाता है।</li>
                            <li><strong>WebP</strong> इनपुट को <strong>WebP (लॉसी)</strong> विधि का उपयोग करके कंप्रेस किया जाता है।</li>
                            <li><strong>AVIF</strong> इनपुट को <strong>AVIF (लॉसी)</strong> विधि का उपयोग करके कंप्रेस किया जाता है।</li>
                            <li><strong>HEIC</strong> इनपुट को <strong>JPG</strong> में कन्वर्ट किया जाता है।</li>
                        </ul>

                        <p>
                            आप अपनी विशिष्ट आवश्यकताओं के आधार पर नीचे दिए गए फ़ॉर्मेट में से मैन्युअल रूप से भी चयन कर सकते हैं। यहाँ प्रत्येक विकल्प के लिए एक विस्तृत गाइड है:
                        </p>

                        <p>
                            <strong>JPG</strong>: सबसे लोकप्रिय इमेज फ़ॉर्मेट है, हालांकि यह ट्रांसपेरेंसी का समर्थन नहीं करता है। एक <strong>अनकंप्रेस्ड PNG</strong> की तुलना में, यह फ़ाइल का आकार औसतन <strong>90%</strong> तक कम कर सकता है। <strong>75</strong> की क्वालिटी सेटिंग पर, क्वालिटी में कमी अक्सर <strong>मुश्किल से पता चलती है</strong>। यदि आपको एक पारदर्शी पृष्ठभूमि की आवश्यकता नहीं है <strong>(जो कि अधिकांश तस्वीरों के लिए सच है)</strong>, तो <strong>JPG</strong> में कन्वर्ट करना आमतौर पर सबसे अच्छा विकल्प होता है।
                        </p>

                        <p>
                            <strong>PNG (लॉसी)</strong>: कुछ क्वालिटी हानि के साथ ट्रांसपेरेंसी का समर्थन करता है, एक <strong>अनकंप्रेस्ड PNG</strong> की तुलना में फ़ाइल का आकार औसतन <strong>70%</strong> कम करता है। इसे केवल तभी चुनें जब आपको PNG फ़ॉर्मेट में पारदर्शी पृष्ठभूमि की आवश्यकता हो। अन्यथा, <strong>JPG</strong> <strong>बेहतर क्वालिटी के लिए एक छोटा आकार</strong> प्रदान करता है (बिना ट्रांसपेरेंसी के), और <strong>WebP (लॉसी)</strong> <strong>बेहतर क्वालिटी, छोटा आकार और ट्रांसपेरेंसी</strong> प्रदान करता है, जिससे यह एक बेहतर विकल्प बन जाता है यदि PNG फ़ॉर्मेट एक सख्त आवश्यकता नहीं है।
                        </p>

                        <p>
                            <strong>PNG (लॉसलेस)</strong>: बिना किसी क्वालिटी हानि के ट्रांसपेरेंसी का समर्थन करता है। एक <strong>अनकंप्रेस्ड PNG</strong> की तुलना में फ़ाइल का आकार औसतन <strong>20%</strong> कम करता है। हालांकि, <strong>यदि PNG फ़ॉर्मेट एक सख्त आवश्यकता नहीं है</strong>, तो <strong>WebP (लॉसलेस)</strong> एक बेहतर विकल्प है क्योंकि यह छोटे फ़ाइल आकार प्रदान करता है।
                        </p>

                        <p>
                            <strong>WebP (लॉसी)</strong>: थोड़ी क्वालिटी हानि के साथ ट्रांसपेरेंसी का समर्थन करता है। एक <strong>अनकंप्रेस्ड PNG</strong> की तुलना में फ़ाइल का आकार औसतन <strong>90%</strong> कम करता है। यह <strong>PNG (लॉसी)</strong> का एक उत्कृष्ट प्रतिस्थापन है, जो बेहतर क्वालिटी और छोटे आकार प्रदान करता है। ध्यान दें: WebP कुछ पुराने उपकरणों पर समर्थित नहीं है।
                        </p>

                        <p>
                            <strong>WebP (लॉसलेस)</strong>: बिना किसी क्वालिटी हानि के ट्रांसपेरेंसी का समर्थन करता है। एक <strong>अनकंप्रेस्ड PNG</strong> की तुलना में फ़ाइल का आकार औसतन <strong>50%</strong> कम करता है, जिससे यह <strong>PNG (लॉसलेस)</strong> का एक बेहतर प्रतिस्थापन बन जाता है। ध्यान दें: WebP कुछ पुराने उपकरणों पर समर्थित नहीं है।
                        </p>

                        <p>
                            <strong>AVIF (लॉसी)</strong>: थोड़ी क्वालिटी हानि के साथ ट्रांसपेरेंसी का समर्थन करता है। WebP के उत्तराधिकारी के रूप में, यह और भी उच्च कंप्रेशन दर प्रदान करता है, जो <strong>अनकंप्रेस्ड PNG</strong> की तुलना में फ़ाइल का आकार औसतन <strong>94%</strong> तक कम करता है। एक अत्याधुनिक फ़ॉर्मेट के रूप में, AVIF बहुत छोटे फ़ाइल आकारों में उत्कृष्ट क्वालिटी प्रदान करता है। हालांकि, ब्राउज़र और डिवाइस संगतता अभी भी सीमित है। यह फ़ॉर्मेट उन्नत उपयोगकर्ताओं के लिए या जब आप निश्चित हों कि लक्ष्य डिवाइस इसे समर्थन करते हैं, तब सबसे अच्छा है।
                        </p>
                        <p>
                            <strong>AVIF (लॉसलेस)</strong>: बिना किसी क्वालिटी हानि के ट्रांसपेरेंसी का समर्थन करता है। एक <strong>अनकंप्रेस्ड PNG</strong> की तुलना में, फ़ाइल आकार में कमी महत्वपूर्ण नहीं है, और कुछ मामलों में, यह बढ़ भी सकता है। जब तक आपके पास दोषरहित AVIF की कोई विशिष्ट आवश्यकता न हो, <strong>PNG (लॉसलेस)</strong> या <strong>WebP (लॉसलेस)</strong> आम तौर पर बेहतर विकल्प हैं।
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "थीम बदलें"
    },
    interactive: {
        store_imageDeletedNotification: "हटाया गया: {fileName}",
        store_convertingImagesNotification: "{number} इमेज कन्वर्ट हो रही हैं...",
        store_conversionFailedNotification: "कन्वर्जन विफल: {fileName}",
        store_unsupportedFileTypeNotification: "असमर्थित फ़ॉर्मेट, हटाया गया: {fileName}",
        store_fileReadErrorNotification: "फ़ाइल पढ़ी नहीं जा सकी, हटाया गया: {fileName}",
        store_reconvertingNotification: "पुनः कन्वर्ट किया जा रहा है: {fileName}",
        store_formatOptionAuto: "ऑटो कंप्रेस",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (लॉसी)",
        store_formatOptionPngLossless: "PNG (लॉसलेस)",
        store_formatOptionWebpLossy: "WebP (लॉसी)",
        store_formatOptionWebpLossless: "WebP (लॉसलेस)",
        store_formatOptionAvifLossy: "AVIF (लॉसी)",
        store_formatOptionAvifLossless: "AVIF (लॉसलेस)",
        previewSection_title: "प्रीव्यू और डाउनलोड",
        previewSection_downloadAllButton: "सभी डाउनलोड करें",
        previewSection_deleteAllButton: "सभी हटाएं",
        previewSection_placeholder: "अभी तक कोई इमेज नहीं।",
        previewSection_statusPending: "लंबित",
        previewSection_statusConverting: "कन्वर्ट हो रहा है...",
        previewSection_statusFailed: "विफल। कृपया पेज रीफ्रेश करें और पुनः प्रयास करें।",
        previewSection_statusCompleted: "पूरा हुआ",
        previewSection_noCompletedFilesNotification: "डाउनलोड करने के लिए कोई पूर्ण इमेज नहीं है।",
        previewSection_downloadStartedNotification: "{fileCount} फ़ाइलों का डाउनलोड शुरू हो रहा है...",
        previewSection_listEmptyNotification: "सूची खाली है।",
        previewSection_allDeletedNotification: "सभी इमेज हटा दी गई हैं।",
        previewSection_zipCreationNotification: "ZIP बनाया जा रहा है...",
        previewSection_zipCreationWithSkipsNotification: "ZIP बनाया जा रहा है: कुछ इमेज अधूरी हैं, उन्हें छोड़ दिया जाएगा।",
        previewSection_zipCreationErrorNotification: "ZIP बनाते समय एक त्रुटि हुई।",
        previewSection_waitConversionNotification: "कृपया कन्वर्जन समाप्त होने तक प्रतीक्षा करें।",
        previewSection_downloadingFileNotification: "डाउनलोड हो रहा है: {fileName}",
        previewSection_originalSizeLabel: "मूल आकार:",
        previewSection_convertedSizeLabel: "कन्वर्टेड आकार:",
        previewSection_downloadTitle: "डाउनलोड",
        previewSection_previewTitle: "प्रीव्यू",
        previewSection_deleteTitle: "हटाएं",
        previewSection_comparisonTab: "तुलना करें",
        previewSection_settingsTab: "सेटिंग्स",
        previewSection_originalImageLabel: "मूल इमेज",
        previewSection_completedImageLabel: "कन्वर्टेड इमेज",
        previewSection_formatLabel: "फ़ॉर्मेट:",
        previewSection_resolutionLabel: "रिज़ॉल्यूशन:",
        previewSection_viewLargerButton: "नए टैब में देखें",
        previewSection_qualityLabel: "कंप्रेशन क्वालिटी",
        previewSection_sizeLabel: "रिज़ॉल्यूशन एडजस्टमेंट",
        previewSection_outputFormatLabel: "आउटपुट फ़ॉर्मेट",
        previewSection_reconvertButton: "पुनः कन्वर्ट करें",
        globalControls_qualityLabel: "ग्लोबल कंप्रेशन क्वालिटी",
        globalControls_sizeLabel: "ग्लोबल रिज़ॉल्यूशन एडजस्टमेंट",
        globalControls_formatLabel: "ग्लोबल आउटपुट फ़ॉर्मेट",
        globalControls_reconvertAllButton: "लागू करें और सभी को पुनः कन्वर्ट करें",
        globalControls_restoreDefaultsButton: "विकल्प रीसेट करें",
        globalControls_noImagesNotification: "कृपया पहले इमेज जोड़ें।",
        globalControls_reconvertingAllNotification: "{imageCount} सभी इमेज को ग्लोबल सेटिंग्स के साथ पुनः कन्वर्ट किया जा रहा है",
        globalControls_restoredNotification: "विकल्प डिफ़ॉल्ट पर रीसेट कर दिए गए हैं।",
        addSection_title: "इमेज जोड़ें",
        addArea_dragDropTitle: "इमेज को यहां खींचें और छोड़ें",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, और HEIC फ़ॉर्मेट समर्थित हैं",
        addArea_selectButton: "इमेज चुनें",
        addArea_tips: "*एक साथ कई इमेज जोड़ सकते हैं",
        ui_viewExplanationTitle: "इन विकल्पों के बारे में जानें",
    }
};

export default hi;