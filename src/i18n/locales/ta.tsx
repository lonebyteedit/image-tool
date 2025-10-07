import type { Translation } from './en.tsx';

const ta: Translation = {
    static: {
        index_lang: 'ta',
        index_dir: 'ltr',
        index_title: "Image Tool - மேம்பட்ட பட மாற்று கருவி",
        index_description: "படங்களை சுருக்குவதற்கும், அளவை மாற்றுவதற்கும், மற்றும் வடிவத்தை மாற்றுவதற்கும் இது ஒரு இலவச, தொழில்முறை ஆன்லைன் கருவி. இது JPG, PNG, WebP, மற்றும் AVIF வடிவங்களுக்கு இடையே பரஸ்பர மாற்றத்தை ஆதரிக்கிறது, மேலும் HEIC வடிவத்தை இந்த வடிவங்களுக்கு மாற்ற முடியும். அனைத்து செயலாக்கமும் உங்கள் உலாவியில் உள்நாட்டில் நடைபெறுகிறது — உங்கள் கோப்புகள் ஒருபோதும் பதிவேற்றப்படுவதில்லை, இது உங்கள் தனியுரிமை மற்றும் தரவு பாதுகாப்பை முழுமையாக உறுதி செய்கிறது.",
        optionsExplanation: {
            title: "விருப்பத்தேர்வுகள் வழிகாட்டி",
            subtitle: "உங்கள் பட மாற்று முடிவுகளை மேம்படுத்த, ஒவ்வொரு விருப்பத்தின் செயல்பாடு மற்றும் பயன்பாட்டைப் புரிந்து கொள்ளுங்கள்.",
            options: [
                {
                    id: "quality-option",
                    title: "சுருக்கத்தின் தரம்",
                    description: <>
                        <p>இலக்கு வடிவம் <strong>JPG</strong>, <strong>WebP (இழப்புடன் கூடிய)</strong>, அல்லது <strong>AVIF (இழப்புடன் கூடிய)</strong> ஆக இருக்கும்போது மட்டுமே இந்த விருப்பம் பொருந்தும்.</p>
                        <p>குறைந்த மதிப்பு சிறிய கோப்பை உருவாக்கும் ஆனால் படத்தின் தரத்தைக் குறைக்கும். பரிந்துரைக்கப்படும் மதிப்பு <strong>75</strong>, இது கோப்பு அளவு மற்றும் தரத்திற்கு இடையே ஒரு நல்ல சமநிலையை வழங்குகிறது.</p>
                        <p>சுருக்கிய பிறகும் கோப்பு மிகப் பெரியதாக இருந்தால், படத்தின் அளவைக் குறைக்க முயற்சிக்கவும், இது பெரும்பாலும் கோப்பு அளவைக் குறைக்க மிகவும் பயனுள்ளதாக இருக்கும்.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "தெளிவுத்திறன் சரிசெய்தல்",
                    description: <>
                        <p>படத்தின் அசல் விகிதத்தை பராமரிக்கும் அதே வேளையில், அதன் அளவை சதவீதத்தில் குறைக்கவும். <strong>100%</strong> அசல் அளவைப் பாதுகாக்கிறது.</p>
                        <p>படத்தின் அளவைக் குறைப்பது கோப்பின் அளவை <strong>குறிப்பிடத்தக்க அளவில்</strong> குறைக்க முடியும். உங்களுக்கு அசல் உயர் தரம் தேவையில்லை என்றால், கோப்பை சிறியதாக்க இதுவே பெரும்பாலும் <strong>மிகவும் பயனுள்ள வழியாகும்</strong>.</p>
                        <p>மற்ற விருப்பங்கள் ஒரே மாதிரியாக இருக்கும் நிலையில், <strong>100% படத்தின் அளவை</strong> அடிப்படையாகக் கொண்டு: <strong>75% அளவிற்கு</strong> சரிசெய்தால் கோப்பின் அளவு சராசரியாக <strong>30%</strong> குறைகிறது; <strong>50% அளவிற்கு</strong> சரிசெய்தால் அது சராசரியாக <strong>65%</strong> குறைகிறது; <strong>25% அளவிற்கு</strong> சரிசெய்தால் அது சராசரியாக <strong>88%</strong> குறைகிறது.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "வெளியீட்டு வடிவம்",
                    description: <>
                        <p>படத்திற்கான வெளியீட்டு வடிவத்தைத் தேர்வுசெய்யவும். வெவ்வேறு வடிவங்கள் அவற்றின் சொந்த நன்மைகள் மற்றும் பயன்பாட்டு நிகழ்வுகளைக் கொண்டுள்ளன.</p>
                        <p><strong>தானியங்கு சுருக்கம்</strong>: இந்த விருப்பம் உள்ளீட்டு வடிவத்தின் அடிப்படையில் பொருத்தமான சுருக்க உத்தியைத் தானாகவே பயன்படுத்துகிறது:</p>
                        <ul>
                            <li><strong>JPG</strong> உள்ளீடுகள் <strong>JPG</strong> ஆக சுருக்கப்படுகின்றன.</li>
                            <li><strong>PNG</strong> உள்ளீடுகள் <strong>PNG (இழப்புடன் கூடிய)</strong> முறையைப் பயன்படுத்தி சுருக்கப்படுகின்றன.</li>
                            <li><strong>WebP</strong> உள்ளீடுகள் <strong>WebP (இழப்புடன் கூடிய)</strong> முறையைப் பயன்படுத்தி சுருக்கப்படுகின்றன.</li>
                            <li><strong>AVIF</strong> உள்ளீடுகள் <strong>AVIF (இழப்புடன் கூடிய)</strong> முறையைப் பயன்படுத்தி சுருக்கப்படுகின்றன.</li>
                            <li><strong>HEIC</strong> உள்ளீடுகள் <strong>JPG</strong> ஆக மாற்றப்படுகின்றன.</li>
                        </ul>

                        <p>
                            உங்கள் குறிப்பிட்ட தேவைகளின் அடிப்படையில் கீழே உள்ள வடிவத்தை நீங்கள் கைமுறையாகவும் தேர்ந்தெடுக்கலாம். ஒவ்வொரு விருப்பத்திற்கும் ஒரு விரிவான வழிகாட்டி இங்கே:
                        </p>

                        <p>
                            <strong>JPG</strong>: மிகவும் பிரபலமான பட வடிவம், இருப்பினும் இது ஒளி ஊடுருவும் தன்மையை (transparency) ஆதரிக்காது. <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது, இது கோப்பு அளவை சராசரியாக <strong>90%</strong> குறைக்கிறது. <strong>75</strong> என்ற தரத்தில், தர இழப்பு பெரும்பாலும் <strong>கண்டுபிடிக்க முடியாதது</strong>. உங்களுக்கு ஒளி ஊடுருவும் பின்னணி தேவையில்லை என்றால் <strong>(பெரும்பாலான புகைப்படங்களுக்கு இதுவே உண்மை)</strong>, <strong>JPG</strong> க்கு மாற்றுவது பொதுவாக சிறந்த தேர்வாகும்.
                        </p>

                        <p>
                            <strong>PNG (இழப்புடன் கூடிய)</strong>: சில தர இழப்புடன் ஒளி ஊடுருவும் தன்மையை ஆதரிக்கிறது, <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது கோப்பு அளவை சராசரியாக <strong>70%</strong> குறைக்கிறது. உங்களுக்கு PNG வடிவத்தில் ஒளி ஊடுருவும் பின்னணி தேவைப்பட்டால் மட்டுமே இதைத் தேர்வு செய்யவும். இல்லையெனில், <strong>JPG</strong> <strong>சிறிய அளவிற்கு சிறந்த தரத்தை</strong> வழங்குகிறது (ஒளி ஊடுருவல் இல்லாமல்), மற்றும் <strong>WebP (இழப்புடன் கூடிய)</strong> <strong>சிறந்த தரம், சிறிய அளவு, மற்றும் ஒளி ஊடுருவல்</strong> ஆகியவற்றை வழங்குகிறது, இது PNG வடிவம் கண்டிப்பாக தேவைப்படாதபோது ஒரு சிறந்த மாற்றாகும்.
                        </p>

                        <p>
                            <strong>PNG (இழப்பற்ற)</strong>: தர இழப்பு இல்லாமல் ஒளி ஊடுருவும் தன்மையை ஆதரிக்கிறது. <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது கோப்பு அளவை சராசரியாக <strong>20%</strong> குறைக்கிறது. இருப்பினும், <strong>PNG வடிவம் கண்டிப்பாக தேவையில்லை என்றால்</strong>, <strong>WebP (இழப்பற்ற)</strong> ஒரு சிறந்த தேர்வாகும், ஏனெனில் அது சிறிய கோப்பு அளவுகளை வழங்குகிறது.
                        </p>

                        <p>
                            <strong>WebP (இழப்புடன் கூடிய)</strong>: சிறிய தர இழப்புடன் ஒளி ஊடுருவும் தன்மையை ஆதரிக்கிறது. <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது கோப்பு அளவை சராசரியாக <strong>90%</strong> குறைக்கிறது. இது <strong>PNG (இழப்புடன் கூடிய)</strong> க்கு ஒரு சிறந்த மாற்றாகும், இது சிறந்த தரம் மற்றும் சிறிய அளவுகளை வழங்குகிறது. குறிப்பு: சில பழைய சாதனங்களில் WebP ஆதரிக்கப்படவில்லை.
                        </p>

                        <p>
                            <strong>WebP (இழப்பற்ற)</strong>: தர இழப்பு இல்லாமல் ஒளி ஊடுருவும் தன்மையை ஆதரிக்கிறது. <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது கோப்பு அளவை சராசரியாக <strong>50%</strong> குறைக்கிறது, இது <strong>PNG (இழப்பற்ற)</strong> க்கு ஒரு சிறந்த மாற்றாகும். குறிப்பு: சில பழைய சாதனங்களில் WebP ஆதரிக்கப்படவில்லை.
                        </p>

                        <p>
                            <strong>AVIF (இழப்புடன் கூடிய)</strong>: சிறிய தர இழப்புடன் ஒளி ஊடுருவும் தன்மையை ஆதரிக்கிறது. WebP-இன் வாரிசாக, இது இன்னும் அதிக சுருக்க விகிதத்தை வழங்குகிறது, <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது கோப்பு அளவை சராசரியாக <strong>94%</strong> குறைக்கிறது. ஒரு அதிநவீன வடிவமாக, AVIF மிகச் சிறிய கோப்பு அளவுகளில் சிறந்த தரத்தை வழங்குகிறது. இருப்பினும், உலாவி மற்றும் சாதனப் பொருத்தம் இன்னும் குறைவாகவே உள்ளது. இந்த வடிவம் மேம்பட்ட பயனர்களுக்கோ அல்லது இலக்கு சாதனங்கள் இதை ஆதரிக்கும் என்று நீங்கள் உறுதியாக இருக்கும்போதோ சிறந்தது.
                        </p>
                        <p>
                            <strong>AVIF (இழப்பற்ற)</strong>: தர இழப்பு இல்லாமல் ஒளி ஊடுருவும் தன்மையை ஆதரிக்கிறது. <strong>சுருக்கப்படாத PNG</strong> உடன் ஒப்பிடும்போது, கோப்பு அளவு குறைப்பு குறிப்பிடத்தக்கதாக இல்லை, மேலும் சில சந்தர்ப்பங்களில் அதிகரிக்கக்கூடும். உங்களுக்கு இழப்பற்ற AVIF-க்கான குறிப்பிட்ட தேவை இல்லையென்றால், <strong>PNG (இழப்பற்ற)</strong> அல்லது <strong>WebP (இழப்பற்ற)</strong> பொதுவாக சிறந்த விருப்பங்கள்.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "தீம் மாற்றவும்"
    },
    interactive: {
        store_imageDeletedNotification: "அகற்றப்பட்டது: {fileName}",
        store_convertingImagesNotification: "{number} படங்களை மாற்றுகிறது...",
        store_conversionFailedNotification: "மாற்றம் தோல்வியடைந்தது: {fileName}",
        store_unsupportedFileTypeNotification: "ஆதரிக்கப்படாத வடிவம், அகற்றப்பட்டது: {fileName}",
        store_fileReadErrorNotification: "கோப்பைப் படிக்க முடியவில்லை, அகற்றப்பட்டது: {fileName}",
        store_reconvertingNotification: "மீண்டும் மாற்றுகிறது: {fileName}",
        store_formatOptionAuto: "தானியங்கு சுருக்கம்",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (இழப்புடன் கூடிய)",
        store_formatOptionPngLossless: "PNG (இழப்பற்ற)",
        store_formatOptionWebpLossy: "WebP (இழப்புடன் கூடிய)",
        store_formatOptionWebpLossless: "WebP (இழப்பற்ற)",
        store_formatOptionAvifLossy: "AVIF (இழப்புடன் கூடிய)",
        store_formatOptionAvifLossless: "AVIF (இழப்பற்ற)",
        previewSection_title: "முன்னோட்டம் மற்றும் பதிவிறக்கம்",
        previewSection_downloadAllButton: "அனைத்தையும் பதிவிறக்கு",
        previewSection_deleteAllButton: "அனைத்தையும் நீக்கு",
        previewSection_placeholder: "இன்னும் படங்கள் இல்லை.",
        previewSection_statusPending: "நிலுவையில் உள்ளது",
        previewSection_statusConverting: "மாற்றுகிறது...",
        previewSection_statusFailed: "தோல்வியுற்றது. பக்கத்தைப் புதுப்பித்து மீண்டும் முயற்சிக்கவும்.",
        previewSection_statusCompleted: "முடிந்தது",
        previewSection_noCompletedFilesNotification: "பதிவிறக்க முடிக்கப்பட்ட படங்கள் எதுவும் இல்லை.",
        previewSection_downloadStartedNotification: "{fileCount} கோப்புகளுக்கான பதிவிறக்கம் தொடங்குகிறது...",
        previewSection_listEmptyNotification: "பட்டியல் காலியாக உள்ளது.",
        previewSection_allDeletedNotification: "அனைத்து படங்களும் அகற்றப்பட்டன.",
        previewSection_zipCreationNotification: "ZIP உருவாக்கப்படுகிறது...",
        previewSection_zipCreationWithSkipsNotification: "ZIP உருவாக்கப்படுகிறது: சில படங்கள் முடிக்கப்படாமல் உள்ளன, அவை தவிர்க்கப்படும்.",
        previewSection_zipCreationErrorNotification: "ZIP-ஐ உருவாக்கும்போது ஒரு பிழை ஏற்பட்டது.",
        previewSection_waitConversionNotification: "மாற்றம் முடிவடையும் வரை காத்திருக்கவும்.",
        previewSection_downloadingFileNotification: "பதிவிறக்குகிறது: {fileName}",
        previewSection_originalSizeLabel: "அசல் அளவு:",
        previewSection_convertedSizeLabel: "மாற்றப்பட்ட அளவு:",
        previewSection_downloadTitle: "பதிவிறக்கு",
        previewSection_previewTitle: "முன்னோட்டம்",
        previewSection_deleteTitle: "நீக்கு",
        previewSection_comparisonTab: "ஒப்பீடு",
        previewSection_settingsTab: "அமைப்புகள்",
        previewSection_originalImageLabel: "அசல் படம்",
        previewSection_completedImageLabel: "மாற்றப்பட்ட படம்",
        previewSection_formatLabel: "வடிவம்:",
        previewSection_resolutionLabel: "தெளிவுத்திறன்:",
        previewSection_viewLargerButton: "புதிய தாவலில் காண்க",
        previewSection_qualityLabel: "சுருக்கத்தின் தரம்",
        previewSection_sizeLabel: "தெளிவுத்திறன் சரிசெய்தல்",
        previewSection_outputFormatLabel: "வெளியீட்டு வடிவம்",
        previewSection_reconvertButton: "மீண்டும் மாற்று",
        globalControls_qualityLabel: "பொது சுருக்கத் தரம்",
        globalControls_sizeLabel: "பொது தெளிவுத்திறன் சரிசெய்தல்",
        globalControls_formatLabel: "பொது வெளியீட்டு வடிவம்",
        globalControls_reconvertAllButton: "பயன்படுத்தி அனைத்தையும் மாற்று",
        globalControls_restoreDefaultsButton: "இயல்புநிலைக்கு மீட்டமை",
        globalControls_noImagesNotification: "முதலில் படங்களைச் சேர்க்கவும்.",
        globalControls_reconvertingAllNotification: "பொது அமைப்புகளுடன் அனைத்து {imageCount} படங்களையும் மீண்டும் மாற்றுகிறது",
        globalControls_restoredNotification: "விருப்பங்கள் இயல்புநிலைக்கு மீட்டமைக்கப்பட்டுள்ளன.",
        addSection_title: "படங்களைச் சேர்",
        addArea_dragDropTitle: "படங்களை இங்கே இழுத்து விடவும்",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, மற்றும் HEIC வடிவங்களை ஆதரிக்கிறது",
        addArea_selectButton: "படங்களைத் தேர்ந்தெடு",
        addArea_tips: "*ஒரே நேரத்தில் பல படங்களைச் சேர்க்கலாம்",
        ui_viewExplanationTitle: "இந்த விருப்பங்களைப் பற்றி அறிக",
    }
};

export default ta;