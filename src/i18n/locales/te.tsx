import type { Translation } from './en.tsx';

const te: Translation = {
    static: {
        index_lang: 'te',
        index_dir: 'ltr',
        index_title: "Image Tool - అధునాతన ఇమేజ్ మార్పిడి సాధనం",
        index_description: "చిత్రం కంప్రెషన్, పరిమాణం మార్చడం మరియు ఫార్మాట్ మార్పిడి కోసం ఒక ఉచిత, ప్రొఫెషనల్ ఆన్‌లైన్ సాధనం. ఇది JPG, PNG, WebP, మరియు AVIF మధ్య పరస్పర మార్పిడికి మద్దతు ఇస్తుంది, మరియు HEICను ఈ ఫార్మాట్లలోకి మార్చగలదు. అన్ని ప్రాసెసింగ్ మీ బ్రౌజర్‌లో స్థానికంగా జరుగుతుంది—మీ ఫైల్‌లు ఎప్పుడూ అప్‌లోడ్ చేయబడవు, ఇది మీ గోప్యత మరియు డేటా భద్రతను పూర్తిగా నిర్ధారిస్తుంది.",
        optionsExplanation: {
            title: "ఎంపికల గైడ్",
            subtitle: "మీ చిత్ర మార్పిడి ఫలితాలను ఆప్టిమైజ్ చేయడానికి ప్రతి ఎంపిక యొక్క ఫంక్షన్ మరియు వాడకాన్ని అర్థం చేసుకోండి.",
            options: [
                {
                    id: "quality-option",
                    title: "కంప్రెషన్ నాణ్యత",
                    description: <>
                        <p>ఈ ఎంపిక లక్ష్య ఫార్మాట్ <strong>JPG</strong>, <strong>WebP (లాసీ)</strong>, లేదా <strong>AVIF (లాసీ)</strong> అయినప్పుడు మాత్రమే వర్తిస్తుంది.</p>
                        <p>తక్కువ విలువ చిన్న ఫైల్‌ను సృష్టిస్తుంది కానీ చిత్రం నాణ్యతను తగ్గిస్తుంది. సిఫార్సు చేయబడిన విలువ <strong>75</strong> ఫైల్ పరిమాణం మరియు నాణ్యత మధ్య మంచి సమతుల్యతను అందిస్తుంది.</p>
                        <p>కంప్రెషన్ తర్వాత కూడా ఫైల్ చాలా పెద్దదిగా ఉంటే, రిజల్యూషన్‌ను తగ్గించడానికి ప్రయత్నించండి, ఇది ఫైల్ పరిమాణాన్ని తగ్గించడానికి తరచుగా మరింత ప్రభావవంతంగా ఉంటుంది.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "రిజల్యూషన్ సర్దుబాటు",
                    description: <>
                        <p>అసలు కారక నిష్పత్తిని కొనసాగిస్తూ చిత్రం రిజల్యూషన్‌ను శాతంలో తగ్గించండి. <strong>100%</strong> అసలు కొలతలను భద్రపరుస్తుంది.</p>
                        <p>రిజల్యూషన్‌ను తగ్గించడం ఫైల్ పరిమాణాన్ని <strong>గణనీయంగా</strong> తగ్గించగలదు. మీకు అసలు హై రిజల్యూషన్ అవసరం లేకపోతే, ఫైల్‌ను చిన్నదిగా చేయడానికి ఇది తరచుగా <strong>అత్యంత ప్రభావవంతమైన మార్గం</strong>.</p>
                        <p>ఇతర ఎంపికలు ఒకే విధంగా ఉన్నప్పుడు, <strong>100% రిజల్యూషన్</strong> ఆధారంగా. <strong>75% రిజల్యూషన్‌కు</strong> సర్దుబాటు చేయడం ఫైల్ పరిమాణాన్ని సగటున <strong>30%</strong> తగ్గిస్తుంది; <strong>50% రిజల్యూషన్‌కు</strong> సర్దుబాటు చేయడం సగటున <strong>65%</strong> తగ్గిస్తుంది; <strong>25% రిజల్యూషన్‌కు</strong> సర్దుబాటు చేయడం సగటున <strong>88%</strong> తగ్గిస్తుంది.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "అవుట్‌పుట్ ఫార్మాట్",
                    description: <>
                        <p>చిత్రం యొక్క అవుట్‌పుట్ ఫార్మాట్‌ను ఎంచుకోండి. విభిన్న ఫార్మాట్‌లకు వాటి స్వంత ప్రయోజనాలు మరియు వినియోగ సందర్భాలు ఉన్నాయి.</p>
                        <p><strong>ఆటో కంప్రెస్</strong>: ఈ ఎంపిక ఇన్‌పుట్ ఫార్మాట్ ఆధారంగా తగిన కంప్రెషన్ వ్యూహాన్ని స్వయంచాలకంగా వర్తింపజేస్తుంది:</p>
                        <ul>
                            <li><strong>JPG</strong> ఇన్‌పుట్‌లు <strong>JPG</strong>గా కంప్రెస్ చేయబడతాయి.</li>
                            <li><strong>PNG</strong> ఇన్‌పుట్‌లు <strong>PNG (లాసీ)</strong> పద్ధతిని ఉపయోగించి కంప్రెస్ చేయబడతాయి.</li>
                            <li><strong>WebP</strong> ఇన్‌పుట్‌లు <strong>WebP (లాసీ)</strong> పద్ధతిని ఉపయోగించి కంప్రెస్ చేయబడతాయి.</li>
                            <li><strong>AVIF</strong> ఇన్‌పుట్‌లు <strong>AVIF (లాసీ)</strong> పద్ధతిని ఉపయోగించి కంప్రెస్ చేయబడతాయి.</li>
                            <li><strong>HEIC</strong> ఇన్‌పుట్‌లు <strong>JPG</strong>గా మార్చబడతాయి.</li>
                        </ul>

                        <p>
                            మీ నిర్దిష్ట అవసరాల ఆధారంగా మీరు క్రింద ఉన్న ఫార్మాట్‌ను మాన్యువల్‌గా కూడా ఎంచుకోవచ్చు. ప్రతి ఎంపికకు ఇక్కడ వివరణాత్మక గైడ్ ఉంది:
                        </p>

                        <p>
                            <strong>JPG</strong>: అత్యంత ప్రజాదరణ పొందిన ఇమేజ్ ఫార్మాట్, అయితే ఇది పారదర్శకతకు మద్దతు ఇవ్వదు. <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే, ఇది ఫైల్ పరిమాణాన్ని సగటున <strong>90%</strong> తగ్గిస్తుంది. <strong>75</strong> నాణ్యత సెట్టింగ్‌లో, నాణ్యత నష్టం <strong>అంతగా గమనించబడదు</strong>. మీకు పారదర్శక నేపథ్యం అవసరం లేకపోతే <strong>(చాలా ఫోటోలకు ఇది వర్తిస్తుంది)</strong>, <strong>JPG</strong>కి మార్చడం సాధారణంగా ఉత్తమ ఎంపిక.
                        </p>

                        <p>
                            <strong>PNG (లాసీ)</strong>: కొంత నాణ్యత నష్టంతో పారదర్శకతకు మద్దతు ఇస్తుంది, <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే ఫైల్ పరిమాణాన్ని సగటున <strong>70%</strong> తగ్గిస్తుంది. మీకు PNG ఫార్మాట్‌లో పారదర్శక నేపథ్యం అవసరమైతే మాత్రమే దీన్ని ఎంచుకోండి. లేకపోతే, <strong>JPG</strong> చిన్న పరిమాణానికి <strong>మంచి నాణ్యతను</strong> అందిస్తుంది (పారదర్శకత లేకుండా), మరియు <strong>WebP (లాసీ)</strong> <strong>మంచి నాణ్యత, చిన్న పరిమాణం మరియు పారదర్శకతను</strong> అందిస్తుంది, ఇది PNG ఫార్మాట్ కఠినమైన అవసరం కాకపోతే ఉన్నతమైన ప్రత్యామ్నాయం.
                        </p>

                        <p>
                            <strong>PNG (లాస్‌లెస్)</strong>: నాణ్యత నష్టం లేకుండా పారదర్శకతకు మద్దతు ఇస్తుంది. <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే ఫైల్ పరిమాణాన్ని సగటున <strong>20%</strong> తగ్గిస్తుంది. అయితే, <strong>PNG ఫార్మాట్ తప్పనిసరి కాకపోతే</strong>, <strong>WebP (లాస్‌లెస్)</strong> మంచి ఎంపిక, ఎందుకంటే ఇది చిన్న ఫైల్ పరిమాణాలను అందిస్తుంది.
                        </p>

                        <p>
                            <strong>WebP (లాసీ)</strong>: స్వల్ప నాణ్యత నష్టంతో పారదర్శకతకు మద్దతు ఇస్తుంది. <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే ఫైల్ పరిమాణాన్ని సగటున <strong>90%</strong> తగ్గిస్తుంది. ఇది <strong>PNG (లాసీ)</strong>కి అద్భుతమైన ప్రత్యామ్నాయం, మంచి నాణ్యత మరియు చిన్న పరిమాణాలను అందిస్తుంది. గమనిక: కొన్ని పాత పరికరాలలో WebPకు మద్దతు లేదు.
                        </p>

                        <p>
                            <strong>WebP (లాస్‌లెస్)</strong>: నాణ్యత నష్టం లేకుండా పారదర్శకతకు మద్దతు ఇస్తుంది. <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే ఫైల్ పరిమాణాన్ని సగటున <strong>50%</strong> తగ్గిస్తుంది, ఇది <strong>PNG (లాస్‌లెస్)</strong>కి ఉన్నతమైన ప్రత్యామ్నాయం. గమనిక: కొన్ని పాత పరికరాలలో WebPకు మద్దతు లేదు.
                        </p>

                        <p>
                            <strong>AVIF (లాసీ)</strong>: స్వల్ప నాణ్యత నష్టంతో పారదర్శకతకు మద్దతు ఇస్తుంది. WebPకి వారసుడిగా, ఇది ఇంకా అధిక కంప్రెషన్ రేటును అందిస్తుంది, <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే ఫైల్ పరిమాణాన్ని సగటున <strong>94%</strong> తగ్గిస్తుంది. అత్యాధునిక ఫార్మాట్‌గా, AVIF చాలా చిన్న ఫైల్ పరిమాణాలలో అద్భుతమైన నాణ్యతను అందిస్తుంది. అయితే, బ్రౌజర్ మరియు పరికర అనుకూలత ఇంకా పరిమితంగా ఉంది. ఈ ఫార్మాట్ అధునాతన వినియోగదారులకు లేదా లక్ష్య పరికరాలు దీనికి మద్దతు ఇస్తాయని మీకు ఖచ్చితంగా తెలిసినప్పుడు ఉత్తమమైనది.
                        </p>
                        <p>
                            <strong>AVIF (లాస్‌లెస్)</strong>: నాణ్యత నష్టం లేకుండా పారదర్శకతకు మద్దతు ఇస్తుంది. <strong>కంప్రెస్ చేయని PNG</strong>తో పోలిస్తే, ఫైల్ పరిమాణం తగ్గింపు అంతగా గణనీయంగా లేదు, మరియు కొన్ని సందర్భాల్లో, పెరగవచ్చు కూడా. మీకు లాస్‌లెస్ AVIF కోసం ప్రత్యేక అవసరం లేకపోతే, <strong>PNG (లాస్‌లెస్)</strong> లేదా <strong>WebP (లాస్‌లెస్)</strong> సాధారణంగా మంచి ఎంపికలు.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "థీమ్‌ను మార్చండి"
    },
    interactive: {
        store_imageDeletedNotification: "తీసివేయబడింది: {fileName}",
        store_convertingImagesNotification: "{number} చిత్రాలను మారుస్తోంది...",
        store_conversionFailedNotification: "మార్పిడి విఫలమైంది: {fileName}",
        store_unsupportedFileTypeNotification: "మద్దతు లేని ఫార్మాట్, తీసివేయబడింది: {fileName}",
        store_fileReadErrorNotification: "ఫైల్‌ను చదవలేకపోయింది, తీసివేయబడింది: {fileName}",
        store_reconvertingNotification: "మళ్లీ మారుస్తోంది: {fileName}",
        store_formatOptionAuto: "ఆటో కంప్రెస్",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (లాసీ)",
        store_formatOptionPngLossless: "PNG (లాస్‌లెస్)",
        store_formatOptionWebpLossy: "WebP (లాసీ)",
        store_formatOptionWebpLossless: "WebP (లాస్‌లెస్)",
        store_formatOptionAvifLossy: "AVIF (లాసీ)",
        store_formatOptionAvifLossless: "AVIF (లాస్‌లెస్)",
        previewSection_title: "ప్రివ్యూ మరియు డౌన్‌లోడ్",
        previewSection_downloadAllButton: "అన్నీ డౌన్‌లోడ్ చేయండి",
        previewSection_deleteAllButton: "అన్నీ తొలగించండి",
        previewSection_placeholder: "ఇంకా చిత్రాలు లేవు.",
        previewSection_statusPending: "పెండింగ్‌లో ఉంది",
        previewSection_statusConverting: "మారుస్తోంది...",
        previewSection_statusFailed: "విఫలమైంది. దయచేసి పేజీని రిఫ్రెష్ చేసి మళ్లీ ప్రయత్నించండి.",
        previewSection_statusCompleted: "పూర్తయింది",
        previewSection_noCompletedFilesNotification: "డౌన్‌లోడ్ చేయడానికి పూర్తి అయిన చిత్రాలు ఏవీ లేవు.",
        previewSection_downloadStartedNotification: "{fileCount} ఫైల్‌ల డౌన్‌లోడ్ ప్రారంభమవుతోంది...",
        previewSection_listEmptyNotification: "జాబితా ఖాళీగా ఉంది.",
        previewSection_allDeletedNotification: "అన్ని చిత్రాలు తీసివేయబడ్డాయి.",
        previewSection_zipCreationNotification: "ZIPను తయారు చేస్తోంది...",
        previewSection_zipCreationWithSkipsNotification: "ZIPను తయారు చేస్తోంది: కొన్ని చిత్రాలు పూర్తి కాలేదు, అవి దాటవేయబడతాయి.",
        previewSection_zipCreationErrorNotification: "ZIPను తయారు చేస్తున్నప్పుడు ఒక లోపం సంభవించింది.",
        previewSection_waitConversionNotification: "దయచేసి మార్పిడి పూర్తి అయ్యే వరకు వేచి ఉండండి.",
        previewSection_downloadingFileNotification: "డౌన్‌లోడ్ అవుతోంది: {fileName}",
        previewSection_originalSizeLabel: "అసలు పరిమాణం:",
        previewSection_convertedSizeLabel: "మార్చబడిన పరిమాణం:",
        previewSection_downloadTitle: "డౌన్‌లోడ్",
        previewSection_previewTitle: "ప్రివ్యూ",
        previewSection_deleteTitle: "తొలగించు",
        previewSection_comparisonTab: "పోల్చండి",
        previewSection_settingsTab: "సెట్టింగ్‌లు",
        previewSection_originalImageLabel: "అసలు చిత్రం",
        previewSection_completedImageLabel: "మార్చబడిన చిత్రం",
        previewSection_formatLabel: "ఫార్మాట్:",
        previewSection_resolutionLabel: "రిజల్యూషన్:",
        previewSection_viewLargerButton: "క్రొత్త ట్యాబ్‌లో వీక్షించండి",
        previewSection_qualityLabel: "కంప్రెషన్ నాణ్యత",
        previewSection_sizeLabel: "రిజల్యూషన్ సర్దుబాటు",
        previewSection_outputFormatLabel: "అవుట్‌పుట్ ఫార్మాట్",
        previewSection_reconvertButton: "మళ్లీ మార్చండి",
        globalControls_qualityLabel: "గ్లోబల్ కంప్రెషన్ నాణ్యత",
        globalControls_sizeLabel: "గ్లోబల్ రిజల్యూషన్ సర్దుబాటు",
        globalControls_formatLabel: "గ్లోబల్ అవుట్‌పుట్ ఫార్మాట్",
        globalControls_reconvertAllButton: "అన్నింటినీ మళ్లీ మార్చండి",
        globalControls_restoreDefaultsButton: "డిఫాల్ట్‌లను పునరుద్ధరించు",
        globalControls_noImagesNotification: "దయచేసి ముందుగా చిత్రాలను జోడించండి.",
        globalControls_reconvertingAllNotification: "గ్లోబల్ సెట్టింగ్‌లతో అన్ని {imageCount} చిత్రాలను మళ్లీ మారుస్తోంది",
        globalControls_restoredNotification: "ఎంపికలు డిఫాల్ట్‌కు రీసెట్ చేయబడ్డాయి.",
        addSection_title: "చిత్రాలను జోడించండి",
        addArea_dragDropTitle: "చిత్రాలను ఇక్కడ లాగి వదలండి",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, మరియు HEICలకు మద్దతు ఇస్తుంది",
        addArea_selectButton: "చిత్రాలను ఎంచుకోండి",
        addArea_tips: "*ఒకేసారి అనేక చిత్రాలను జోడించవచ్చు",
        ui_viewExplanationTitle: "ఈ ఎంపికల గురించి తెలుసుకోండి",
    }
};

export default te;