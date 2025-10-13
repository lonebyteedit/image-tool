import type { Translation } from './en.tsx';

const gu: Translation = {
    static: {
        index_lang: 'gu',
        index_dir: 'ltr',
        index_title: "Image Tool - અદ્યતન ઇમેજ રૂપાંતરણ ટૂલ",
        index_description: "આ એક મફત, વ્યાવસાયિક ઓનલાઇન ઇમેજ કમ્પ્રેશન, રિસાઇઝિંગ અને ફોર્મેટ રૂપાંતરણ ટૂલ છે. તે JPG, PNG, WebP અને AVIF વચ્ચે પરસ્પર રૂપાંતરણને સપોર્ટ કરે છે, અને HEIC ને આ ફોર્મેટમાં રૂપાંતરિત કરી શકે છે. બધી પ્રક્રિયા તમારા બ્રાઉઝરમાં સ્થાનિક રીતે થાય છે — તમારી ફાઇલો ક્યારેય અપલોડ થતી નથી, જે તમારી સંપૂર્ણ ગોપનીયતા અને ડેટા સુરક્ષાને સુનિશ્ચિત કરે છે.",
        optionsExplanation: {
            title: "વિકલ્પો માટે માર્ગદર્શિકા",
            subtitle: "તમારા ઇમેજ રૂપાંતરણ પરિણામોને શ્રેષ્ઠ બનાવવા માટે દરેક વિકલ્પના કાર્ય અને ઉપયોગને સમજો.",
            options: [
                {
                    id: "quality-option",
                    title: "કમ્પ્રેશનની ગુણવત્તા",
                    description: <>
                        <p>આ વિકલ્પ ફક્ત ત્યારે જ લાગુ પડે છે જ્યારે ટાર્ગેટ ફોર્મેટ <strong>JPG</strong>, <strong>WebP (લોસી)</strong>, અથવા <strong>AVIF (લોસી)</strong> હોય.</p>
                        <p>ઓછું મૂલ્ય નાની ફાઇલ બનાવે છે પરંતુ ઇમેજની ગુણવત્તા ઘટાડે છે. <strong>75</strong> નું ભલામણ કરેલ મૂલ્ય ફાઇલ કદ અને ગુણવત્તા વચ્ચે સારો સંતુલન પ્રદાન કરે છે.</p>
                        <p>જો કમ્પ્રેશન પછી પણ ફાઇલ ખૂબ મોટી હોય, તો રિઝોલ્યુશન ઘટાડવાનો પ્રયાસ કરો, જે ફાઇલનું કદ ઘટાડવા માટે વધુ અસરકારક હોય છે.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "રિઝોલ્યુશન ગોઠવણ",
                    description: <>
                        <p>મૂળ એસ્પેક્ટ રેશિયો જાળવી રાખીને ટકાવારી દ્વારા ઇમેજનું રિઝોલ્યુશન ઘટાડો. <strong>100%</strong> મૂળ પરિમાણોને સાચવે છે.</p>
                        <p>રિઝોલ્યુશન ઘટાડવાથી ફાઇલનું કદ <strong>નોંધપાત્ર રીતે</strong> ઘટાડી શકાય છે. જો તમને મૂળના ઉચ્ચ રિઝોલ્યુશનની જરૂર નથી, તો ફાઇલને નાની બનાવવાની આ <strong>સૌથી અસરકારક રીત</strong> છે.</p>
                        <p>અન્ય વિકલ્પો સમાન હોવા પર, <strong>100% રિઝોલ્યુશન</strong> ના આધારે. <strong>75% રિઝોલ્યુશન</strong> પર ગોઠવવાથી ફાઇલનું કદ સરેરાશ <strong>30%</strong> ઘટે છે; <strong>50% રિઝોલ્યુશન</strong> પર ગોઠવવાથી તે સરેરાશ <strong>65%</strong> ઘટે છે; અને <strong>25% રિઝોલ્યુશન</strong> પર ગોઠવવાથી તે સરેરાશ <strong>88%</strong> ઘટે છે.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "આઉટપુટ ફોર્મેટ",
                    description: <>
                        <p>ઇમેજ માટે આઉટપુટ ફોર્મેટ પસંદ કરો. જુદા જુદા ફોર્મેટના પોતાના ફાયદા અને ઉપયોગના કિસ્સાઓ હોય છે.</p>
                        <p><strong>ઓટો કમ્પ્રેસ</strong>: આ વિકલ્પ ઇનપુટ ફોર્મેટના આધારે યોગ્ય કમ્પ્રેશન વ્યૂહરચના આપમેળે લાગુ કરે છે:</p>
                        <ul>
                            <li><strong>JPG</strong> ઇનપુટ્સને <strong>JPG</strong> તરીકે કમ્પ્રેસ કરવામાં આવે છે.</li>
                            <li><strong>PNG</strong> ઇનપુટ્સને <strong>PNG (લોસી)</strong> પદ્ધતિનો ઉપયોગ કરીને કમ્પ્રેસ કરવામાં આવે છે.</li>
                            <li><strong>WebP</strong> ઇનપુટ્સને <strong>WebP (લોસી)</strong> પદ્ધતિનો ઉપયોગ કરીને કમ્પ્રેસ કરવામાં આવે છે.</li>
                            <li><strong>AVIF</strong> ઇનપુટ્સને <strong>AVIF (લોસી)</strong> પદ્ધતિનો ઉપયોગ કરીને કમ્પ્રેસ કરવામાં આવે છે.</li>
                            <li><strong>HEIC</strong> ઇનપુટ્સને <strong>JPG</strong> માં રૂપાંતરિત કરવામાં આવે છે.</li>
                        </ul>

                        <p>
                            તમે તમારી ચોક્કસ જરૂરિયાતોને આધારે નીચેથી જાતે ફોર્મેટ પણ પસંદ કરી શકો છો. અહીં દરેક વિકલ્પ માટે વિગતવાર માર્ગદર્શિકા છે:
                        </p>

                        <p>
                            <strong>JPG</strong>: સૌથી વધુ લોકપ્રિય ઇમેજ ફોર્મેટ છે, જોકે તે પારદર્શિતાને સપોર્ટ કરતું નથી. <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં, તે ફાઇલનું કદ સરેરાશ <strong>90%</strong> ઘટાડી શકે છે. <strong>75</strong> ની ગુણવત્તા સેટિંગ પર, ગુણવત્તામાં ઘટાડો ઘણીવાર <strong>નજીવો</strong> હોય છે. જો તમને પારદર્શક પૃષ્ઠભૂમિની જરૂર નથી <strong>(જે મોટાભાગના ફોટા માટે સાચું છે)</strong>, તો <strong>JPG</strong> માં રૂપાંતર કરવું સામાન્ય રીતે શ્રેષ્ઠ પસંદગી છે.
                        </p>

                        <p>
                            <strong>PNG (લોસી)</strong>: થોડી ગુણવત્તા ગુમાવીને પારદર્શિતાને સપોર્ટ કરે છે, <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં ફાઇલનું કદ સરેરાશ <strong>70%</strong> ઘટાડે છે. આ ફક્ત ત્યારે જ પસંદ કરો જો તમને PNG ફોર્મેટમાં પારદર્શક પૃષ્ઠભૂમિની જરૂર હોય. અન્યથા, <strong>JPG</strong> <strong>નાના કદ માટે સારી ગુણવત્તા</strong> પ્રદાન કરે છે (પારદર્શિતા વિના), અને <strong>WebP (લોસી)</strong> <strong>સારી ગુણવત્તા, નાનું કદ, અને પારદર્શિતા</strong> પ્રદાન કરે છે, જો PNG ફોર્મેટ કડક જરૂરિયાત ન હોય તો તે એક ઉત્તમ વિકલ્પ છે.
                        </p>

                        <p>
                            <strong>PNG (લોસલેસ)</strong>: ગુણવત્તામાં કોઈ નુકસાન વિના પારદર્શિતાને સપોર્ટ કરે છે. <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં ફાઇલનું કદ સરેરાશ <strong>20%</strong> ઘટાડે છે. જોકે, <strong>જો PNG ફોર્મેટ કડક જરૂરિયાત ન હોય</strong>, તો <strong>WebP (લોસલેસ)</strong> એક સારો વિકલ્પ છે કારણ કે તે નાની ફાઇલ સાઇઝ પ્રદાન કરે છે.
                        </p>

                        <p>
                            <strong>WebP (લોસી)</strong>: થોડી ગુણવત્તા ગુમાવીને પારદર્શિતાને સપોર્ટ કરે છે. <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં ફાઇલનું કદ સરેરાશ <strong>90%</strong> ઘટાડે છે. તે <strong>PNG (લોસી)</strong> માટે એક ઉત્તમ વિકલ્પ છે, જે સારી ગુણવત્તા અને નાના કદ પ્રદાન કરે છે. નોંધ: કેટલાક જૂના ઉપકરણો પર WebP સપોર્ટેડ નથી.
                        </p>

                        <p>
                            <strong>WebP (લોસલેસ)</strong>: ગુણવત્તામાં કોઈ નુકસાન વિના પારદર્શિતાને સપોર્ટ કરે છે. <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં ફાઇલનું કદ સરેરાશ <strong>50%</strong> ઘટાડે છે, જે તેને <strong>PNG (લોસલેસ)</strong> માટે એક ઉત્તમ વિકલ્પ બનાવે છે. નોંધ: કેટલાક જૂના ઉપકરણો પર WebP સપોર્ટેડ નથી.
                        </p>

                        <p>
                            <strong>AVIF (લોસી)</strong>: થોડી ગુણવત્તા ગુમાવીને પારદર્શિતાને સપોર્ટ કરે છે. WebP ના અનુગામી તરીકે, તે ઉચ્ચ કમ્પ્રેશન દર પ્રદાન કરે છે, જે <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં ફાઇલનું કદ સરેરાશ <strong>94%</strong> ઘટાડે છે. એક અદ્યતન ફોર્મેટ તરીકે, AVIF ખૂબ નાના ફાઇલ કદમાં ઉત્તમ ગુણવત્તા પ્રદાન કરે છે. જોકે, બ્રાઉઝર અને ઉપકરણ સુસંગતતા હજુ પણ મર્યાદિત છે. આ ફોર્મેટ અદ્યતન વપરાશકર્તાઓ માટે અથવા જ્યારે તમે ખાતરી કરો કે લક્ષ્ય ઉપકરણો તેને સપોર્ટ કરે છે ત્યારે શ્રેષ્ઠ છે.
                        </p>
                        <p>
                            <strong>AVIF (લોસલેસ)</strong>: ગુણવત્તામાં કોઈ નુકસાન વિના પારદર્શિતાને સપોર્ટ કરે છે. <strong>અનકમ્પ્રેસ્ડ PNG</strong> ની તુલનામાં, ફાઇલના કદમાં ઘટાડો નોંધપાત્ર નથી, અને કેટલાક કિસ્સાઓમાં, તે વધી પણ શકે છે. જ્યાં સુધી તમને લોસલેસ AVIF ની ચોક્કસ જરૂર ન હોય, ત્યાં સુધી <strong>PNG (લોસલેસ)</strong> અથવા <strong>WebP (લોસલેસ)</strong> સામાન્ય રીતે વધુ સારા વિકલ્પો છે.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "થીમ બદલો"
    },
    interactive: {
        store_imageDeletedNotification: "દૂર કર્યું: {fileName}",
        store_convertingImagesNotification: "{number} ઇમેજોને રૂપાંતરિત કરી રહ્યું છે...",
        store_conversionFailedNotification: "રૂપાંતરણ નિષ્ફળ: {fileName}",
        store_unsupportedFileTypeNotification: "અસમર્થિત ફોર્મેટ, દૂર કર્યું: {fileName}",
        store_fileReadErrorNotification: "ફાઇલ વાંચી શકાઈ નથી, દૂર કર્યું: {fileName}",
        store_reconvertingNotification: "ફરીથી રૂપાંતરિત કરી રહ્યું છે: {fileName}",
        store_formatOptionAuto: "ઓટો કમ્પ્રેસ",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (લોસી)",
        store_formatOptionPngLossless: "PNG (લોસલેસ)",
        store_formatOptionWebpLossy: "WebP (લોસી)",
        store_formatOptionWebpLossless: "WebP (લોસલેસ)",
        store_formatOptionAvifLossy: "AVIF (લોસી)",
        store_formatOptionAvifLossless: "AVIF (લોસલેસ)",
        previewSection_title: "પૂર્વાવલોકન અને ડાઉનલોડ",
        previewSection_downloadAllButton: "બધા ડાઉનલોડ કરો",
        previewSection_deleteAllButton: "બધા કાઢી નાખો",
        previewSection_placeholder: "હજુ સુધી કોઈ ઇમેજ નથી.",
        previewSection_statusPending: "બાકી",
        previewSection_statusConverting: "રૂપાંતરિત થઈ રહ્યું છે...",
        previewSection_statusFailed: "નિષ્ફળ. કૃપા કરીને પેજ રિફ્રેશ કરો અને ફરી પ્રયાસ કરો.",
        previewSection_statusCompleted: "પૂર્ણ થયું",
        previewSection_noCompletedFilesNotification: "ડાઉનલોડ કરવા માટે કોઈ પૂર્ણ થયેલ ઇમેજ નથી.",
        previewSection_downloadStartedNotification: "{fileCount} ફાઇલોનું ડાઉનલોડ શરૂ કરી રહ્યું છે...",
        previewSection_listEmptyNotification: "સૂચિ ખાલી છે.",
        previewSection_allDeletedNotification: "બધી ઇમેજો દૂર કરવામાં આવી છે.",
        previewSection_zipCreationNotification: "ZIP બનાવી રહ્યું છે...",
        previewSection_zipCreationWithSkipsNotification: "ZIP બનાવી રહ્યું છે: કેટલીક ઇમેજો અપૂર્ણ છે અને તેને છોડી દેવામાં આવશે.",
        previewSection_zipCreationErrorNotification: "ZIP બનાવતી વખતે એક ભૂલ આવી.",
        previewSection_waitConversionNotification: "કૃપા કરીને રૂપાંતરણ પૂર્ણ થવાની રાહ જુઓ.",
        previewSection_downloadingFileNotification: "ડાઉનલોડ કરી રહ્યું છે: {fileName}",
        previewSection_originalSizeLabel: "મૂળ કદ:",
        previewSection_convertedSizeLabel: "રૂપાંતરિત કદ:",
        previewSection_downloadTitle: "ડાઉનલોડ કરો",
        previewSection_previewTitle: "પૂર્વાવલોકન",
        previewSection_deleteTitle: "કાઢી નાખો",
        previewSection_comparisonTab: "સરખામણી કરો",
        previewSection_settingsTab: "સેટિંગ્સ",
        previewSection_originalImageLabel: "મૂળ ઇમેજ",
        previewSection_completedImageLabel: "રૂપાંતરિત ઇમેજ",
        previewSection_formatLabel: "ફોર્મેટ:",
        previewSection_resolutionLabel: "રિઝોલ્યુશન:",
        previewSection_viewLargerButton: "નવી ટેબમાં જુઓ",
        previewSection_qualityLabel: "કમ્પ્રેશનની ગુણવત્તા",
        previewSection_sizeLabel: "રિઝોલ્યુશન ગોઠવણ",
        previewSection_outputFormatLabel: "આઉટપુટ ફોર્મેટ",
        previewSection_reconvertButton: "ફરીથી રૂપાંતરિત કરો",
        globalControls_qualityLabel: "ગ્લોબલ કમ્પ્રેશનની ગુણવત્તા",
        globalControls_sizeLabel: "ગ્લોબલ રિઝોલ્યુશન ગોઠવણ",
        globalControls_formatLabel: "ગ્લોબલ આઉટપુટ ફોર્મેટ",
        globalControls_reconvertAllButton: "લાગુ કરો અને બધાને ફરીથી રૂપાંતરિત કરો",
        globalControls_restoreDefaultsButton: "વિકલ્પોને ડિફોલ્ટ પર રીસેટ કરો",
        globalControls_noImagesNotification: "કૃપા કરીને પહેલા ઇમેજ ઉમેરો.",
        globalControls_reconvertingAllNotification: "ગ્લોબલ સેટિંગ્સ સાથે બધી {imageCount} ઇમેજોને ફરીથી રૂપાંતરિત કરી રહ્યું છે",
        globalControls_restoredNotification: "વિકલ્પો ડિફોલ્ટ પર રીસેટ કરવામાં આવ્યા છે.",
        addSection_title: "ઇમેજ ઉમેરો",
        addArea_dragDropTitle: "અહીં ઇમેજ ખેંચીને મૂકો",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, અને HEIC ફોર્મેટને સપોર્ટ કરે છે",
        addArea_selectButton: "ઇમેજ પસંદ કરો",
        addArea_tips: "*એક સાથે એકથી વધુ છબીઓ ઉમેરી શકાય છે",
        ui_viewExplanationTitle: "આ વિકલ્પો વિશે વધુ જાણો",
    }
};

export default gu;