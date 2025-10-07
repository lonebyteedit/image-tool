import type { Translation } from './en.tsx';

const my: Translation = {
    static: {
        index_lang: 'my',
        index_dir: 'ltr',
        index_title: "Image Tool - အဆင့်မြင့် ရုပ်ပုံပြောင်းလဲရေး ကိရိယာ",
        index_description: "အခမဲ့ဖြစ်ပြီး ကျွမ်းကျင်ပညာရှင်အဆင့် အွန်လိုင်းရုပ်ပုံ ချုံ့ခြင်း၊ အရွယ်အစားပြောင်းလဲခြင်းနှင့် ဖိုင်အမျိုးအစားပြောင်းလဲခြင်းများ ပြုလုပ်နိုင်သော ကိရိယာတစ်ခုဖြစ်သည်။ JPG, PNG, WebP, AVIF တို့ကို အပြန်အလှန်ပြောင်းလဲနိုင်ပြီး HEIC ကိုလည်း ဤဖိုင်အမျိုးအစားများသို့ ပြောင်းလဲပေးနိုင်သည်။ လုပ်ဆောင်ချက်အားလုံးကို သင့် browser ထဲတွင်သာ ပြုလုပ်သောကြောင့် သင့်ဖိုင်များကို ဆာဗာသို့ လုံးဝတင်ပို့ခြင်းမရှိဘဲ သင်၏ ကိုယ်ရေးကိုယ်တာလုံခြုံမှုနှင့် ဒေတာလုံခြုံရေးကို အပြည့်အဝ အာမခံပါသည်။",
        optionsExplanation: {
            title: "ရွေးချယ်စရာများ လမ်းညွှန်",
            subtitle: "သင်၏ ရုပ်ပုံပြောင်းလဲခြင်းရလဒ်များကို အကောင်းဆုံးဖြစ်စေရန် ရွေးချယ်စရာတစ်ခုချင်းစီ၏ လုပ်ဆောင်ချက်နှင့် အသုံးပြုပုံကို နားလည်လိုက်ပါ။",
            options: [
                {
                    id: "quality-option",
                    title: "ချုံ့ခြင်း အရည်အသွေး",
                    description: <>
                        <p>ဤရွေးချယ်မှုသည် ပြောင်းလဲလိုသော ဖိုင်အမျိုးအစားက <strong>JPG</strong>, <strong>WebP (အရည်အသွေးကျ)</strong>, သို့မဟုတ် <strong>AVIF (အရည်အသွေးကျ)</strong> ဖြစ်မှသာ အကျိုးသက်ရောက်မှုရှိသည်။</p>
                        <p>တန်ဖိုးနည်းလေ၊ ဖိုင်အရွယ်အစား ပိုသေးလေ ဖြစ်သော်လည်း ရုပ်ပုံအရည်အသွေး ကျဆင်းသွားမည်ဖြစ်သည်။ အကြံပြုတန်ဖိုး <strong>75</strong> သည် ဖိုင်အရွယ်အစားနှင့် အရည်အသွေးအကြား ကောင်းမွန်သော ဟန်ချက်ကို ပေးသည်။</p>
                        <p>ချုံ့ပြီးနောက်တွင်ပင် ဖိုင်အရွယ်အစားကြီးနေသေးပါက resolution ကို လျှော့ချကြည့်ပါ။ ၎င်းသည် ဖိုင်အရွယ်အစားကို လျှော့ချရန် ပိုမိုထိရောက်သော နည်းလမ်းတစ်ခုဖြစ်သည်။</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Resolution ချိန်ညှိခြင်း",
                    description: <>
                        <p>မူလအချိုးအစားကို မပြောင်းလဲဘဲ ရုပ်ပုံ၏ resolution ကို ရာခိုင်နှုန်းဖြင့် လျှော့ချပါ။ <strong>100%</strong> သည် မူလအရွယ်အစားအတိုင်း ထားရှိခြင်းဖြစ်သည်။</p>
                        <p>Resolution ကို လျှော့ချခြင်းသည် ဖိုင်အရွယ်အစားကို <strong>သိသိသာသာ</strong> လျှော့ချနိုင်သည်။ မူလ resolution အမြင့် မလိုအပ်ပါက၊ ဤသည်မှာ ဖိုင်ကို သေးငယ်အောင်ပြုလုပ်ရန် <strong>အထိရောက်ဆုံးနည်းလမ်း</strong> ဖြစ်သည်။</p>
                        <p>အခြားရွေးချယ်မှုများ တူညီသည်ဟု ယူဆပြီး <strong>100% resolution</strong> ကို အခြေခံ၍ <strong>75% resolution</strong> သို့ ချိန်ညှိပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>30%</strong> လျှော့ချပေးသည်။ <strong>50% resolution</strong> သို့ ချိန်ညှိပါက ပျမ်းမျှ <strong>65%</strong> လျှော့ချပေးပြီး <strong>25% resolution</strong> သို့ ချိန်ညှိပါက ပျမ်းမျှ <strong>88%</strong> လျှော့ချပေးသည်။</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "ထုတ်မည့် ဖိုင်အမျိုးအစား",
                    description: <>
                        <p>ရုပ်ပုံအတွက် ထုတ်မည့် ဖိုင်အမျိုးအစားကို ရွေးချယ်ပါ။ ဖိုင်အမျိုးအစားတစ်ခုချင်းစီတွင် ၎င်း၏ အားသာချက်များနှင့် အသုံးပြုပုံများ ရှိကြသည်။</p>
                        <p><strong>အလိုအလျောက် ချုံ့ခြင်း</strong>: ဤရွေးချယ်မှုသည် ထည့်သွင်းလိုက်သော ဖိုင်အမျိုးအစားပေါ်မူတည်၍ သင့်လျော်သော ချုံ့ခြင်းနည်းလမ်းကို အလိုအလျောက် အသုံးပြုပါမည်:</p>
                        <ul>
                            <li><strong>JPG</strong> ပုံများကို <strong>JPG</strong> အဖြစ် ချုံ့ပါမည်။</li>
                            <li><strong>PNG</strong> ပုံများကို <strong>PNG (အရည်အသွေးကျ)</strong> နည်းလမ်းဖြင့် ချုံ့ပါမည်။</li>
                            <li><strong>WebP</strong> ပုံများကို <strong>WebP (အရည်အသွေးကျ)</strong> နည်းလမ်းဖြင့် ချုံ့ပါမည်။</li>
                            <li><strong>AVIF</strong> ပုံများကို <strong>AVIF (အရည်အသွေးကျ)</strong> နည်းလမ်းဖြင့် ချုံ့ပါမည်။</li>
                            <li><strong>HEIC</strong> ပုံများကို <strong>JPG</strong> သို့ ပြောင်းလဲပါမည်။</li>
                        </ul>

                        <p>
                            သင်၏လိုအပ်ချက်အလိုက် အောက်ပါ ဖိုင်အမျိုးအစားများထဲမှ တစ်ခုကို ကိုယ်တိုင်လည်း ရွေးချယ်နိုင်ပါသည်။ ရွေးချယ်စရာတစ်ခုချင်းစီအတွက် အသေးစိတ်လမ်းညွှန်မှာ အောက်ပါအတိုင်းဖြစ်သည်:
                        </p>

                        <p>
                            <strong>JPG</strong>: လူကြိုက်အများဆုံး ရုပ်ပုံဖိုင်အမျိုးအစားဖြစ်သော်လည်း နောက်ခံဖောက်ထွင်းမြင်နိုင်မှု (transparency) ကို မထောက်ပံ့ပါ။ <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>90%</strong> လျှော့ချနိုင်သည်။ အရည်အသွေး <strong>75</strong> တွင် အရည်အသွေးကျဆင်းမှုကို <strong>သတိပြုမိနိုင်ဖွယ်မရှိပါ။</strong> နောက်ခံဖောက်ထွင်းမြင်နိုင်မှု မလိုအပ်ပါက <strong>(ဓာတ်ပုံအများစုမှာ မလိုအပ်ပါ)</strong> <strong>JPG</strong> သို့ ပြောင်းလဲခြင်းသည် အကောင်းဆုံးရွေးချယ်မှုဖြစ်သည်။
                        </p>

                        <p>
                            <strong>PNG (အရည်အသွေးကျ)</strong>: နောက်ခံဖောက်ထွင်းမြင်နိုင်မှုကို ထောက်ပံ့ပြီး အရည်အသွေးအနည်းငယ်ကျဆင်းသည်။ <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>70%</strong> လျှော့ချပေးသည်။ PNG ဖိုင်အမျိုးအစားဖြင့် နောက်ခံဖောက်ထွင်းမြင်နိုင်မှု လိုအပ်မှသာ ရွေးချယ်သင့်သည်။ သို့မဟုတ်ပါက <strong>JPG</strong> သည် <strong>အရွယ်အစားသေးငယ်ပြီး အရည်အသွေးပိုကောင်းသည်</strong> (နောက်ခံမကြည်လင်)၊ <strong>WebP (အရည်အသွေးကျ)</strong> သည် <strong>အရည်အသွေးပိုကောင်း၊ အရွယ်အစားပိုသေးငယ်ပြီး နောက်ခံကြည်လင်မှုလည်းရသည်</strong> ဖြစ်သောကြောင့် PNG ဖိုင်အမျိုးအစား မဖြစ်မနေမလိုအပ်ပါက ပိုမိုကောင်းမွန်သော ရွေးချယ်မှုဖြစ်သည်။
                        </p>

                        <p>
                            <strong>PNG (အရည်အသွေးမကျ)</strong>: နောက်ခံဖောက်ထွင်းမြင်နိုင်မှုကို ထောက်ပံ့ပြီး အရည်အသွေးလုံးဝမကျဆင်းပါ။ <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>20%</strong> လျှော့ချပေးသည်။ သို့သော် <strong>PNG ဖိုင်အမျိုးအစား မဖြစ်မနေမလိုအပ်ပါက</strong> <strong>WebP (အရည်အသွေးမကျ)</strong> သည် ဖိုင်အရွယ်အစား ပိုသေးငယ်သောကြောင့် ပိုမိုကောင်းမွန်သော ရွေးချယ်မှုဖြစ်သည်။
                        </p>

                        <p>
                            <strong>WebP (အရည်အသွေးကျ)</strong>: နောက်ခံဖောက်ထွင်းမြင်နိုင်မှုကို ထောက်ပံ့ပြီး အရည်အသွေးအနည်းငယ်ကျဆင်းသည်။ <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>90%</strong> လျှော့ချပေးသည်။ ၎င်းသည် <strong>PNG (အရည်အသွေးကျ)</strong> အတွက် အရည်အသွေးပိုကောင်းပြီး အရွယ်အစားပိုသေးငယ်သောကြောင့် အကောင်းဆုံးအစားထိုးမှုတစ်ခုဖြစ်သည်။ မှတ်ချက်: WebP ကို စက်အဟောင်းအချို့တွင် မထောက်ပံ့ပါ။
                        </p>

                        <p>
                            <strong>WebP (အရည်အသွေးမကျ)</strong>: နောက်ခံဖောက်ထွင်းမြင်နိုင်မှုကို ထောက်ပံ့ပြီး အရည်အသွေးလုံးဝမကျဆင်းပါ။ <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>50%</strong> လျှော့ချပေးသောကြောင့် <strong>PNG (အရည်အသွေးမကျ)</strong> ထက် ပိုမိုကောင်းမွန်သော အစားထိုးမှုတစ်ခုဖြစ်သည်။ မှတ်ချက်: WebP ကို စက်အဟောင်းအချို့တွင် မထောက်ပံ့ပါ။
                        </p>

                        <p>
                            <strong>AVIF (အရည်အသွေးကျ)</strong>: နောက်ခံဖောက်ထွင်းမြင်နိုင်မှုကို ထောက်ပံ့ပြီး အရည်အသွေးအနည်းငယ်ကျဆင်းသည်။ WebP ၏ နောက်မျိုးဆက်အနေဖြင့် ၎င်းသည် ပိုမိုမြင့်မားသော ချုံ့နှုန်းကို ပေးစွမ်းနိုင်ပြီး <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားကို ပျမ်းမျှ <strong>94%</strong> လျှော့ချပေးသည်။ ခေတ်မီသော ဖိုင်အမျိုးအစားဖြစ်သည့် AVIF သည် အလွန်သေးငယ်သော ဖိုင်အရွယ်အစားဖြင့် ကောင်းမွန်သော အရည်အသွေးကို ပေးသည်။ သို့သော် browser နှင့် စက်များတွင် **ထောက်ပံ့နိုင်မှု**မှာ အကန့်အသတ်ရှိနေသေးသည်။ ဤဖိုင်အမျိုးအစားသည် အဆင့်မြင့်အသုံးပြုသူများ သို့မဟုတ် ပစ်မှတ်ထားသောစက်များက ၎င်းကို ထောက်ပံ့ကြောင်း သေချာမှသာ အသုံးပြုရန် အကောင်းဆုံးဖြစ်သည်။
                        </p>
                        <p>
                            <strong>AVIF (အရည်အသွေးမကျ)</strong>: နောက်ခံဖောက်ထွင်းမြင်နိုင်မှုကို ထောက်ပံ့ပြီး အရည်အသွေးလုံးဝမကျဆင်းပါ။ <strong>မချုံ့ရသေးသော PNG</strong> နှင့် နှိုင်းယှဉ်ပါက ဖိုင်အရွယ်အစားလျှော့ချမှုမှာ သိသာထင်ရှားခြင်းမရှိဘဲ အချို့အခြေအနေများတွင် ပို၍ပင်ကြီးမားသွားနိုင်သည်။ အထူးလိုအပ်ချက်မရှိပါက <strong>PNG (အရည်အသွေးမကျ)</strong> သို့မဟုတ် <strong>WebP (အရည်အသွေးမကျ)</strong> တို့သည် ယေဘုယျအားဖြင့် ပိုမိုကောင်းမွန်သော ရွေးချယ်မှုများဖြစ်သည်။
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Theme ပြောင်းရန်"
    },
    interactive: {
        store_imageDeletedNotification: "ဖယ်ရှားလိုက်သည်: {fileName}",
        store_convertingImagesNotification: "ရုပ်ပုံ {number} ပုံကို ပြောင်းလဲနေသည်...",
        store_conversionFailedNotification: "ပြောင်းလဲခြင်း မအောင်မြင်ပါ: {fileName}",
        store_unsupportedFileTypeNotification: "မထောက်ပံ့သော ဖိုင်အမျိုးအစားဖြစ်၍ ဖယ်ရှားလိုက်သည်: {fileName}",
        store_fileReadErrorNotification: "ဖိုင်ကို ဖတ်မရပါ၊ ဖယ်ရှားလိုက်သည်: {fileName}",
        store_reconvertingNotification: "ပြန်လည်ပြောင်းလဲနေသည်: {fileName}",
        store_formatOptionAuto: "အလိုအလျောက် ချုံ့ခြင်း",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (အရည်အသွေးကျ)",
        store_formatOptionPngLossless: "PNG (အရည်အသွေးမကျ)",
        store_formatOptionWebpLossy: "WebP (အရည်အသွေးကျ)",
        store_formatOptionWebpLossless: "WebP (အရည်အသွေးမကျ)",
        store_formatOptionAvifLossy: "AVIF (အရည်အသွေးကျ)",
        store_formatOptionAvifLossless: "AVIF (အရည်အသွေးမကျ)",
        previewSection_title: "အစမ်းကြည့်ရှုခြင်းနှင့် ဒေါင်းလုဒ်ဆွဲခြင်း",
        previewSection_downloadAllButton: "အားလုံးကို ဒေါင်းလုဒ်ဆွဲရန်",
        previewSection_deleteAllButton: "အားလုံးကို ဖျက်ရန်",
        previewSection_placeholder: "ရုပ်ပုံများ မရှိသေးပါ။",
        previewSection_statusPending: "စောင့်ဆိုင်းနေသည်",
        previewSection_statusConverting: "ပြောင်းလဲနေသည်...",
        previewSection_statusFailed: "မအောင်မြင်ပါ။ စာမျက်နှာကို refresh လုပ်ပြီး ပြန်ကြိုးစားပါ။",
        previewSection_statusCompleted: "ပြီးမြောက်သည်",
        previewSection_noCompletedFilesNotification: "ဒေါင်းလုဒ်ဆွဲရန် ပြီးမြောက်ပြီးသော ရုပ်ပုံများမရှိပါ။",
        previewSection_downloadStartedNotification: "ဖိုင် {fileCount} ခုကို စတင်ဒေါင်းလုဒ်ဆွဲနေပါသည်...",
        previewSection_listEmptyNotification: "စာရင်းတွင် မည်သည့်အရာမှ မရှိပါ။",
        previewSection_allDeletedNotification: "ရုပ်ပုံအားလုံးကို ဖယ်ရှားပြီးပါပြီ။",
        previewSection_zipCreationNotification: "ZIP ဖန်တီးနေသည်...",
        previewSection_zipCreationWithSkipsNotification: "ZIP ဖန်တီးနေသည်: မပြီးမြောက်သေးသော ရုပ်ပုံများ ရှိနေ၍ ကျော်သွားပါမည်။",
        previewSection_zipCreationErrorNotification: "ZIP ဖန်တီးရာတွင် အမှားတစ်ခု ဖြစ်ပွားခဲ့ပါသည်။",
        previewSection_waitConversionNotification: "ပြောင်းလဲခြင်းပြီးဆုံးသည်အထိ စောင့်ဆိုင်းပေးပါ။",
        previewSection_downloadingFileNotification: "ဒေါင်းလုဒ်ဆွဲနေသည်: {fileName}",
        previewSection_originalSizeLabel: "မူလအရွယ်အစား:",
        previewSection_convertedSizeLabel: "ပြောင်းလဲပြီး အရွယ်အစား:",
        previewSection_downloadTitle: "ဒေါင်းလုဒ်ဆွဲရန်",
        previewSection_previewTitle: "အစမ်းကြည့်ရန်",
        previewSection_deleteTitle: "ဖျက်ရန်",
        previewSection_comparisonTab: "နှိုင်းယှဉ်ကြည့်ရှုရန်",
        previewSection_settingsTab: "သီးသန့်ချိန်ညှိရန်",
        previewSection_originalImageLabel: "မူလရုပ်ပုံ",
        previewSection_completedImageLabel: "ပြောင်းလဲပြီး ရုပ်ပုံ",
        previewSection_formatLabel: "ဖိုင်အမျိုးအစား:",
        previewSection_resolutionLabel: "Resolution:",
        previewSection_viewLargerButton: "တဘ်အသစ်တွင် ဖွင့်ကြည့်ရန်",
        previewSection_qualityLabel: "ချုံ့ခြင်း အရည်အသွေး",
        previewSection_sizeLabel: "Resolution ချိန်ညှိခြင်း",
        previewSection_outputFormatLabel: "ထုတ်မည့် ဖိုင်အမျိုးအစား",
        previewSection_reconvertButton: "ဤရုပ်ပုံကို ပြန်ပြောင်းရန်",
        globalControls_qualityLabel: "စုစုပေါင်း ချုံ့ခြင်း အရည်အသွေး",
        globalControls_sizeLabel: "စုစုပေါင်း Resolution ချိန်ညှိခြင်း",
        globalControls_formatLabel: "စုစုပေါင်း ထုတ်မည့် ဖိုင်အမျိုးအစား",
        globalControls_reconvertAllButton: "အားလုံးကို အသုံးပြုပြီး ပြောင်းလဲရန်",
        globalControls_restoreDefaultsButton: "မူလအတိုင်း ပြန်ထားရန်",
        globalControls_noImagesNotification: "ကျေးဇူးပြု၍ ရုပ်ပုံများကို ဦးစွာထည့်ပါ။",
        globalControls_reconvertingAllNotification: "စုစုပေါင်းချိန်ညှိမှုများဖြင့် ရုပ်ပုံ {imageCount} ပုံလုံးကို ပြန်လည်ပြောင်းလဲနေသည်",
        globalControls_restoredNotification: "ရွေးချယ်မှုများကို မူလအတိုင်း ပြန်လည်သတ်မှတ်ပြီးပါပြီ။",
        addSection_title: "ရုပ်ပုံများ ထည့်ရန်",
        addArea_dragDropTitle: "ဤနေရာသို့ ရုပ်ပုံများကို ဆွဲထည့်ပါ",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, နှင့် HEIC ဖိုင်အမျိုးအစားများကို ထောက်ပံ့သည်",
        addArea_selectButton: "ရုပ်ပုံများ ရွေးချယ်ရန်",
        addArea_tips: "*တစ်ကြိမ်တည်း ပုံအများအပြား ထည့်နိုင်သည်",
        ui_viewExplanationTitle: "ဤရွေးချယ်စရာများအကြောင်း လေ့လာရန်",
    }
};

export default my;