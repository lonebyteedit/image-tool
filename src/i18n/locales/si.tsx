import type { Translation } from './en.tsx';

const si: Translation = {
    static: {
        index_lang: 'si',
        index_dir: 'ltr',
        index_title: "Image Tool - උසස් රූප පරිවර්තන මෙවලම",
        index_description: "මෙය රූප සම්පීඩනය, ප්‍රමාණය වෙනස් කිරීම, සහ ආකෘති පරිවර්තනය සඳහා වූ නොමිලේ ලබා දෙන, වෘත්තීය මට්ටමේ මාර්ගගත (online) මෙවලමකි. JPG, PNG, WebP, සහ AVIF අතර අන්‍යෝන්‍ය පරිවර්තනයට සහය දක්වන අතර, HEIC ආකෘතිය මෙම ආකෘති බවට පරිවර්තනය කළ හැකිය. සියලුම සැකසුම් ඔබගේ බ්‍රවුසරය තුළ දේශීයව සිදු වේ - ඔබගේ ගොනු කිසිවිටෙකත් සේවාදායකයකට උඩුගත නොකරන අතර, ඔබගේ පෞද්ගලිකත්වය සහ දත්ත ආරක්ෂාව පූර්ණ වශයෙන් තහවුරු කරයි.",
        optionsExplanation: {
            title: "විකල්ප මාර්ගෝපදේශය",
            subtitle: "ඔබගේ රූප පරිවර්තන ප්‍රතිඵල ප්‍රශස්ත කිරීම සඳහා සෑම විකල්පයකම ක්‍රියාකාරීත්වය සහ භාවිතය තේරුම් ගන්න.",
            options: [
                {
                    id: "quality-option",
                    title: "සම්පීඩන ගුණාත්මකභාවය",
                    description: <>
                        <p>මෙම විකල්පය ක්‍රියාත්මක වන්නේ ඉලක්කගත ආකෘතිය <strong>JPG</strong>, <strong>WebP (දත්ත හානි සහිත)</strong>, හෝ <strong>AVIF (දත්ත හානි සහිත)</strong> වූ විට පමණි.</p>
                        <p>අගය අඩු වන තරමට ගොනුවේ ප්‍රමාණය කුඩා වන නමුත් රූපයේ ගුණාත්මකභාවය අඩු වේ. නිර්දේශිත අගය වන <strong>75</strong> මඟින් ගොනු ප්‍රමාණය සහ ගුණාත්මකභාවය අතර හොඳ සමතුලිතතාවයක් ලබා දේ.</p>
                        <p>සම්පීඩනයෙන් පසුවත් ගොනුව තවමත් විශාල නම්, විභේදනය අඩු කිරීමට උත්සාහ කරන්න. ගොනු ප්‍රමාණය අඩු කිරීමට එය බොහෝ විට වඩාත් ඵලදායී වේ.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "විභේදන ගැලපීම",
                    description: <>
                        <p>මුල් දර්ශන අනුපාතය පවත්වා ගනිමින්, රූපයේ විභේදනය ප්‍රතිශතයකින් අඩු කරන්න. <strong>100%</strong> යනු මුල් විභේදනයම පවත්වා ගැනීමයි.</p>
                        <p>විභේදනය අඩු කිරීමෙන් ගොනු ප්‍රමාණය <strong>සැලකිය යුතු ලෙස</strong> අඩු කළ හැකිය. ඔබට මුල් රූපයේ ඉහළ විභේදනයක් අවශ්‍ය නොවන්නේ නම්, ගොනුව කුඩා කර ගැනීමට ඇති <strong>වඩාත්ම ඵලදායී ක්‍රමය</strong> මෙයයි.</p>
                        <p>අනෙකුත් විකල්ප නොවෙනස්ව තිබියදී, <strong>100% විභේදනය</strong> පදනම් කරගෙන: <strong>75% විභේදනයට</strong> ගැලපීමෙන් ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>30%</strong> කින් අඩු වේ; <strong>50% විභේදනයට</strong> ගැලපීමෙන් සාමාන්‍යයෙන් <strong>65%</strong> කින් අඩු වේ; <strong>25% විභේදනයට</strong> ගැලපීමෙන් සාමාන්‍යයෙන් <strong>88%</strong> කින් අඩු වේ.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "ප්‍රතිදාන ආකෘතිය",
                    description: <>
                        <p>රූපයේ ප්‍රතිදාන ආකෘතිය තෝරන්න. විවිධ ආකෘති වලට ඒවාටම ආවේණික වාසි සහ භාවිත අවස්ථා ඇත.</p>
                        <p><strong>ස්වයංක්‍රීය සම්පීඩනය</strong>: මෙම විකල්පය මඟින් ආදාන ආකෘතිය මත පදනම්ව සුදුසු සම්පීඩන ක්‍රමවේදයක් ස්වයංක්‍රීයව යොදනු ලැබේ:</p>
                        <ul>
                            <li><strong>JPG</strong> ආදානයන් <strong>JPG</strong> ලෙස සම්පීඩනය කෙරේ.</li>
                            <li><strong>PNG</strong> ආදානයන් <strong>PNG (දත්ත හානි සහිත)</strong> ක්‍රමය භාවිතයෙන් සම්පීඩනය කෙරේ.</li>
                            <li><strong>WebP</strong> ආදානයන් <strong>WebP (දත්ත හානි සහිත)</strong> ක්‍රමය භාවිතයෙන් සම්පීඩනය කෙරේ.</li>
                            <li><strong>AVIF</strong> ආදානයන් <strong>AVIF (දත්ත හානි සහිත)</strong> ක්‍රමය භාවිතයෙන් සම්පීඩනය කෙරේ.</li>
                            <li><strong>HEIC</strong> ආදානයන් <strong>JPG</strong> බවට පරිවර්තනය කෙරේ.</li>
                        </ul>

                        <p>
                            ඔබට ඔබගේ විශේෂිත අවශ්‍යතා මත පදනම්ව පහතින් ආකෘතියක් තෝරාගත හැකිය. එක් එක් විකල්පය පිළිබඳ සවිස්තරාත්මක මාර්ගෝපදේශයක් මෙන්න:
                        </p>

                        <p>
                            <strong>JPG</strong>: වඩාත්ම ජනප්‍රිය රූප ආකෘතිය වන නමුත් විනිවිදභාවයට (transparency) සහය නොදක්වයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව, ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>90%</strong> කින් අඩු කළ හැකිය. ගුණාත්මකභාවය <strong>75</strong> ලෙස සැකසූ විට, ගුණාත්මකභාවයේ අඩුවීම <strong>නොපෙනෙන තරම්ය</strong>. ඔබට විනිවිද පෙනෙන පසුබිමක් අවශ්‍ය නැතිනම් <strong>(බොහෝ ඡායාරූප සඳහා මෙය සත්‍ය වේ)</strong>, <strong>JPG</strong> බවට පරිවර්තනය කිරීම සාමාන්‍යයෙන් හොඳම තේරීමයි.
                        </p>

                        <p>
                            <strong>PNG (දත්ත හානි සහිත)</strong>: යම් ගුණාත්මකභාවයේ අඩුවීමක් සමඟ විනිවිදභාවයට සහය දක්වයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>70%</strong> කින් අඩු කරයි. මෙය තෝරාගත යුත්තේ ඔබට PNG ආකෘතියෙන්ම විනිවිද පෙනෙන පසුබිමක් අවශ්‍ය නම් පමණි. එසේ නොමැතිනම්, <strong>JPG</strong> මඟින් <strong>කුඩා ප්‍රමාණයකට වඩා හොඳ ගුණාත්මකභාවයක්</strong> (විනිවිදභාවය රහිතව) ලබා දෙන අතර, <strong>WebP (දත්ත හානි සහිත)</strong> මඟින් <strong>වඩා හොඳ ගුණාත්මකභාවයක්, කුඩා ප්‍රමාණයක් සහ විනිවිදභාවය</strong> ලබා දේ. එම නිසා PNG ආකෘතිය අනිවාර්ය නොවේ නම් එය වඩා හොඳ විකල්පයකි.
                        </p>

                        <p>
                            <strong>PNG (දත්ත හානි රහිත)</strong>: ගුණාත්මකභාවයේ කිසිදු අඩුවීමකින් තොරව විනිවිදභාවයට සහය දක්වයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>20%</strong> කින් අඩු කරයි. කෙසේ වෙතත්, <strong>PNG ආකෘතිය අනිවාර්ය නොවේ නම්</strong>, <strong>WebP (දත්ත හානි රහිත)</strong> වඩා හොඳ තේරීමක් වන්නේ එය කුඩා ගොනු ප්‍රමාණ ලබා දෙන බැවිනි.
                        </p>

                        <p>
                            <strong>WebP (දත්ත හානි සහිත)</strong>: සුළු ගුණාත්මකභාවයේ අඩුවීමක් සමඟ විනිවිදභාවයට සහය දක්වයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>90%</strong> කින් අඩු කරයි. වඩා හොඳ ගුණාත්මකභාවයක් සහ කුඩා ප්‍රමාණයක් ලබා දෙන බැවින්, එය <strong>PNG (දත්ත හානි සහිත)</strong> සඳහා විශිෂ්ට ආදේශකයකි. සටහන: සමහර පැරණි උපාංගවල WebP සඳහා සහය නොදක්වයි.
                        </p>

                        <p>
                            <strong>WebP (දත්ත හානි රහිත)</strong>: ගුණාත්මකභාවයේ කිසිදු අඩුවීමකින් තොරව විනිවිදභාවයට සහය දක්වයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>50%</strong> කින් අඩු කරයි. එම නිසා එය <strong>PNG (දත්ත හානි රහිත)</strong> සඳහා වඩා හොඳ ආදේශකයකි. සටහන: සමහර පැරණි උපාංගවල WebP සඳහා සහය නොදක්වයි.
                        </p>

                        <p>
                            <strong>AVIF (දත්ත හානි සහිත)</strong>: සුළු ගුණාත්මකභාවයේ අඩුවීමක් සමඟ විනිවිදභාවයට සහය දක්වයි. WebP හි අනුප්‍රාප්තිකයා ලෙස, එය ඊටත් වඩා ඉහළ සම්පීඩන අනුපාතයක් ලබා දෙයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව ගොනු ප්‍රමාණය සාමාන්‍යයෙන් <strong>94%</strong> කින් අඩු කරයි. නවීනතම ආකෘතියක් ලෙස, AVIF ඉතා කුඩා ගොනු ප්‍රමාණවලින් විශිෂ්ට ගුණාත්මකභාවයක් ලබා දෙයි. කෙසේ වෙතත්, බ්‍රවුසර සහ උපාංග ගැළපීම තවමත් සීමිතය. මෙම ආකෘතිය වඩාත් සුදුසු වන්නේ උසස් පරිශීලකයින් සඳහා හෝ ඉලක්කගත උපාංග එයට සහය දක්වන බව ඔබට විශ්වාස නම් පමණි.
                        </p>
                        <p>
                            <strong>AVIF (දත්ත හානි රහිත)</strong>: ගුණාත්මකභාවයේ කිසිදු අඩුවීමකින් තොරව විනිවිදභාවයට සහය දක්වයි. <strong>සම්පීඩනය නොකළ PNG</strong> රූපයකට සාපේක්ෂව, ගොනු ප්‍රමාණයේ අඩුවීම සැලකිය යුතු නොවන අතර, සමහර අවස්ථාවලදී එය වැඩි විය හැක. ඔබට දත්ත හානි රහිත AVIF සඳහා විශේෂ අවශ්‍යතාවයක් නොමැති නම්, <strong>PNG (දත්ත හානි රහිත)</strong> හෝ <strong>WebP (දත්ත හානි රහිත)</strong> සාමාන්‍යයෙන් වඩා හොඳ විකල්ප වේ.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "තේමාව මාරු කරන්න"
    },
    interactive: {
        store_imageDeletedNotification: "ඉවත් කරන ලදී: {fileName}",
        store_convertingImagesNotification: "රූප {number}ක් පරිවර්තනය වෙමින් පවතී...",
        store_conversionFailedNotification: "පරිවර්තනය අසාර්ථකයි: {fileName}",
        store_unsupportedFileTypeNotification: "සහය නොදක්වන ආකෘතියකි, ඉවත් කරන ලදී: {fileName}",
        store_fileReadErrorNotification: "ගොනුව කියවිය නොහැක, ඉවත් කරන ලදී: {fileName}",
        store_reconvertingNotification: "නැවත පරිවර්තනය කරමින්: {fileName}",
        store_formatOptionAuto: "ස්වයංක්‍රීය සම්පීඩනය",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (දත්ත හානි සහිත)",
        store_formatOptionPngLossless: "PNG (දත්ත හානි රහිත)",
        store_formatOptionWebpLossy: "WebP (දත්ත හානි සහිත)",
        store_formatOptionWebpLossless: "WebP (දත්ත හානි රහිත)",
        store_formatOptionAvifLossy: "AVIF (දත්ත හානි සහිත)",
        store_formatOptionAvifLossless: "AVIF (දත්ත හානි රහිත)",
        previewSection_title: "පෙරදසුන සහ බාගත කිරීම",
        previewSection_downloadAllButton: "සියල්ල බාගන්න",
        previewSection_deleteAllButton: "සියල්ල මකන්න",
        previewSection_placeholder: "තවමත් රූප නොමැත.",
        previewSection_statusPending: "පොරොත්තුවෙන්",
        previewSection_statusConverting: "පරිවර්තනය වෙමින්...",
        previewSection_statusFailed: "අසාර්ථකයි. කරුණාකර පිටුව නැවුම් කර නැවත උත්සාහ කරන්න.",
        previewSection_statusCompleted: "සම්පූර්ණයි",
        previewSection_noCompletedFilesNotification: "බාගත කිරීමට සම්පූර්ණ කළ රූප නොමැත.",
        previewSection_downloadStartedNotification: "ගොනු {fileCount}ක් බාගත කිරීම ආරම්භ වෙමින් පවතී...",
        previewSection_listEmptyNotification: "ලැයිස්තුව හිස්ය.",
        previewSection_allDeletedNotification: "සියලුම රූප ඉවත් කර ඇත.",
        previewSection_zipCreationNotification: "ZIP ගොනුව නිර්මාණය කරමින්...",
        previewSection_zipCreationWithSkipsNotification: "ZIP ගොනුව නිර්මාණය කරමින්: සමහර රූප සම්පූර්ණ වී නොමැති අතර, ඒවා මඟ හරිනු ලැබේ.",
        previewSection_zipCreationErrorNotification: "ZIP ගොනුව නිර්මාණය කිරීමේදී දෝෂයක් සිදු විය.",
        previewSection_waitConversionNotification: "කරුණාකර පරිවර්තනය අවසන් වන තෙක් රැඳී සිටින්න.",
        previewSection_downloadingFileNotification: "බාගත කරමින්: {fileName}",
        previewSection_originalSizeLabel: "මුල් ප්‍රමාණය:",
        previewSection_convertedSizeLabel: "පරිවර්තිත ප්‍රමාණය:",
        previewSection_downloadTitle: "බාගන්න",
        previewSection_previewTitle: "පෙරදසුන",
        previewSection_deleteTitle: "මකන්න",
        previewSection_comparisonTab: "සසඳන්න",
        previewSection_settingsTab: "සැකසුම්",
        previewSection_originalImageLabel: "මුල් රූපය",
        previewSection_completedImageLabel: "පරිවර්තිත රූපය",
        previewSection_formatLabel: "ආකෘතිය:",
        previewSection_resolutionLabel: "විභේදනය:",
        previewSection_viewLargerButton: "නව ටැබ්යකින් බලන්න",
        previewSection_qualityLabel: "සම්පීඩන ගුණාත්මකභාවය",
        previewSection_sizeLabel: "විභේදන ගැලපීම",
        previewSection_outputFormatLabel: "ප්‍රතිදාන ආකෘතිය",
        previewSection_reconvertButton: "නැවත පරිවර්තනය කරන්න",
        globalControls_qualityLabel: "සමස්ත සම්පීඩන ගුණාත්මකභාවය",
        globalControls_sizeLabel: "සමස්ත විභේදන ගැලපීම",
        globalControls_formatLabel: "සමස්ත ප්‍රතිදාන ආකෘතිය",
        globalControls_reconvertAllButton: "යොදා සියල්ල නැවත පරිවර්තනය කරන්න",
        globalControls_restoreDefaultsButton: "විකල්ප නැවත සකසන්න",
        globalControls_noImagesNotification: "කරුණාකර පළමුව රූප එක් කරන්න.",
        globalControls_reconvertingAllNotification: "සමස්ත සැකසුම් භාවිතයෙන් රූප {imageCount}ම නැවත පරිවර්තනය කරමින්",
        globalControls_restoredNotification: "විකල්ප පෙරනිමි අගයන්ට සකසා ඇත.",
        addSection_title: "රූප එක් කරන්න",
        addArea_dragDropTitle: "රූප මෙහි ඇද දමන්න",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, සහ HEIC ආකෘති සඳහා සහය දක්වයි",
        addArea_selectButton: "රූප තෝරන්න",
        addArea_tips: "*එකවර රූප කිහිපයක් එක් කළ හැකිය.",
        ui_viewExplanationTitle: "මෙම විකල්ප ගැන දැනගන්න",
    }
};

export default si;