import type { Translation } from './en.tsx';

const bn: Translation = {
    static: {
        index_lang: 'bn',
        index_dir: 'ltr',
        index_title: "Image Tool - উন্নত ছবি রূপান্তর টুল",
        index_description: "ছবি সংকুচিত করা, আকার পরিবর্তন করা, এবং ফরম্যাট রূপান্তর করার জন্য একটি বিনামূল্যের, পেশাদার অনলাইন টুল। এটি JPG, PNG, WebP, এবং AVIF-এর মধ্যে পারস্পরিক রূপান্তর সমর্থন করে এবং HEIC-কে এই ফরম্যাটগুলিতে রূপান্তর করতে পারে। সমস্ত প্রক্রিয়াকরণ আপনার ব্রাউজারে স্থানীয়ভাবে সম্পন্ন হয় — আপনার ফাইলগুলি কখনও আপলোড করা হয় না, যা আপনার গোপনীয়তা এবং ডেটার সম্পূর্ণ সুরক্ষা নিশ্চিত করে।",
        optionsExplanation: {
            title: "বিকল্প নির্দেশিকা",
            subtitle: "আপনার ছবি রূপান্তরের ফলাফল অপ্টিমাইজ করতে প্রতিটি বিকল্পের কার্যকারিতা এবং ব্যবহার বুঝুন।",
            options: [
                {
                    id: "quality-option",
                    title: "সংকোচনের মান",
                    description: <>
                        <p>এই বিকল্পটি শুধুমাত্র তখনই প্রযোজ্য যখন আউটপুট ফরম্যাট <strong>JPG</strong>, <strong>WebP (Lossy)</strong>, বা <strong>AVIF (Lossy)</strong> হয়।</p>
                        <p>কম মান দিলে ফাইল ছোট হয়, কিন্তু ছবির মান কমে যায়। প্রস্তাবিত মান <strong>75</strong> ফাইলের আকার এবং মানের মধ্যে একটি ভাল ভারসাম্য প্রদান করে।</p>
                        <p>যদি ফাইলটি তারপরেও খুব বড় থাকে, তাহলে রেজোলিউশন কমানোর চেষ্টা করুন, যা ফাইলের আকার কমাতে প্রায়শই বেশি কার্যকর।</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "রেজোলিউশন সমন্বয়",
                    description: <>
                        <p>ছবির আসল অনুপাত বজায় রেখে শতাংশের হিসাবে রেজোলিউশন কমান। <strong>100%</strong> মানে আসল মাপ বজায় রাখা।</p>
                        <p>রেজোলিউশন কমালে ফাইলের আকার <strong>উল্লেখযোগ্যভাবে</strong> কমে যেতে পারে। যদি আপনার আসল উচ্চ রেজোলিউশনের প্রয়োজন না হয়, তাহলে ফাইলের আকার কমানোর জন্য এটি প্রায়শই <strong>সবচেয়ে কার্যকর উপায়</strong>।</p>
                        <p>অন্যান্য বিকল্প একই থাকলে, <strong>100% রেজোলিউশন</strong>-এর উপর ভিত্তি করে: <strong>75% রেজোলিউশনে</strong> ফাইলের আকার গড়ে <strong>30%</strong> কমে; <strong>50% রেজোলিউশনে</strong> গড়ে <strong>65%</strong> কমে; এবং <strong>25% রেজোলিউশনে</strong> গড়ে <strong>88%</strong> কমে।</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "আউটপুট ফরম্যাট",
                    description: <>
                        <p>ছবির আউটপুট ফরম্যাট বেছে নিন। বিভিন্ন ফরম্যাটের নিজস্ব সুবিধা এবং ব্যবহারের ক্ষেত্র রয়েছে।</p>
                        <p><strong>স্বয়ংক্রিয় সংকোচন</strong>: এই বিকল্পটি ইনপুট ফরম্যাটের উপর ভিত্তি করে একটি উপযুক্ত সংকোচন কৌশল প্রয়োগ করে:</p>
                        <ul>
                            <li><strong>JPG</strong> ইনপুট <strong>JPG</strong> হিসাবে সংকুচিত হয়।</li>
                            <li><strong>PNG</strong> ইনপুট <strong>PNG (Lossy)</strong> পদ্ধতি ব্যবহার করে সংকুচিত হয়।</li>
                            <li><strong>WebP</strong> ইনপুট <strong>WebP (Lossy)</strong> পদ্ধতি ব্যবহার করে সংকুচিত হয়।</li>
                            <li><strong>AVIF</strong> ইনপুট <strong>AVIF (Lossy)</strong> পদ্ধতি ব্যবহার করে সংকুচিত হয়।</li>
                            <li><strong>HEIC</strong> ইনপুট <strong>JPG</strong>-তে রূপান্তরিত হয়।</li>
                        </ul>

                        <p>
                            আপনার নির্দিষ্ট প্রয়োজন অনুযায়ী আপনি নীচের তালিকা থেকে ম্যানুয়ালি একটি ফরম্যাট নির্বাচন করতে পারেন। প্রতিটি বিকল্পের জন্য এখানে একটি বিস্তারিত নির্দেশিকা রয়েছে:
                        </p>

                        <p>
                            <strong>JPG</strong>: সবচেয়ে জনপ্রিয় ছবির ফরম্যাট, যদিও এটি স্বচ্ছতা (transparency) সমর্থন করে না। একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায়, এটি ফাইলের আকার গড়ে <strong>90%</strong> কমাতে পারে। <strong>75</strong> মানের সেটিংসে, মানের ক্ষতি প্রায় <strong>বোঝা যায় না</strong>। যদি আপনার স্বচ্ছ ব্যাকগ্রাউন্ডের প্রয়োজন না হয় <strong>(বেশিরভাগ ছবির ক্ষেত্রেই যা সত্যি)</strong>, তাহলে <strong>JPG</strong>-তে রূপান্তর করাই সাধারণত সেরা পছন্দ।
                        </p>

                        <p>
                            <strong>PNG (Lossy)</strong>: স্বচ্ছতা সমর্থন করে এবং এতে কিছুটা মানের ক্ষতি হয়, একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায় ফাইলের আকার গড়ে <strong>70%</strong> কমায়। শুধুমাত্র যদি আপনার PNG ফরম্যাটে স্বচ্ছ ব্যাকগ্রাউন্ডের প্রয়োজন হয় তবেই এটি বেছে নিন। অন্যথায়, <strong>JPG</strong> <strong>কম আকারে ভাল মান</strong> (স্বচ্ছতা ছাড়া) প্রদান করে, এবং <strong>WebP (Lossy)</strong> <strong>আরও ভাল মান, ছোট আকার এবং স্বচ্ছতা</strong> প্রদান করে, যা PNG ফরম্যাট কঠোরভাবে প্রয়োজন না হলে একটি উন্নত বিকল্প।
                        </p>

                        <p>
                            <strong>PNG (Lossless)</strong>: কোনো মানের ক্ষতি ছাড়াই স্বচ্ছতা সমর্থন করে। একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায় ফাইলের আকার গড়ে <strong>20%</strong> কমায়। যাইহোক, <strong>যদি PNG ফরম্যাট কঠোরভাবে প্রয়োজন না হয়</strong>, <strong>WebP (Lossless)</strong> একটি ভাল পছন্দ কারণ এটি ছোট ফাইলের আকার প্রদান করে।
                        </p>

                        <p>
                            <strong>WebP (Lossy)</strong>: সামান্য মানের ক্ষতি সহ স্বচ্ছতা সমর্থন করে। একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায় ফাইলের আকার গড়ে <strong>90%</strong> কমায়। এটি <strong>PNG (Lossy)</strong>-এর একটি চমৎকার বিকল্প, যা ভাল মান এবং ছোট আকার প্রদান করে। দ্রষ্টব্য: কিছু পুরানো ডিভাইসে WebP সমর্থিত নয়।
                        </p>

                        <p>
                            <strong>WebP (Lossless)</strong>: কোনো মানের ক্ষতি ছাড়াই স্বচ্ছতা সমর্থন করে। একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায় ফাইলের আকার গড়ে <strong>50%</strong> কমায়, যা এটিকে <strong>PNG (Lossless)</strong>-এর একটি উন্নত বিকল্প করে তোলে। দ্রষ্টব্য: কিছু পুরানো ডিভাইসে WebP সমর্থিত নয়।
                        </p>

                        <p>
                            <strong>AVIF (Lossy)</strong>: সামান্য মানের ক্ষতি সহ স্বচ্ছতা সমর্থন করে। WebP-এর উত্তরসূরি হিসাবে, এটি আরও বেশি সংকোচনের হার প্রদান করে, একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায় ফাইলের আকার গড়ে <strong>94%</strong> কমায়। একটি অত্যাধুনিক ফরম্যাট হিসাবে, AVIF খুব ছোট ফাইলে চমৎকার মান প্রদান করে। যাইহোক, ব্রাউজার এবং ডিভাইসের সামঞ্জস্য এখনও সীমিত। এই ফরম্যাটটি উন্নত ব্যবহারকারীদের জন্য বা যখন আপনি নিশ্চিত যে আপনার টার্গেট ডিভাইসগুলি এটি সমর্থন করে, তখন সবচেয়ে উপযুক্ত।
                        </p>
                        <p>
                            <strong>AVIF (Lossless)</strong>: কোনো মানের ক্ষতি ছাড়াই স্বচ্ছতা সমর্থন করে। একটি <strong>অসংকুচিত PNG</strong>-এর তুলনায়, ফাইলের আকার উল্লেখযোগ্যভাবে কমে না, এবং কিছু ক্ষেত্রে এমনকি বেড়েও যেতে পারে। যদি আপনার lossless AVIF-এর কোনো বিশেষ প্রয়োজন না থাকে, তবে <strong>PNG (Lossless)</strong> বা <strong>WebP (Lossless)</strong> সাধারণত ভাল বিকল্প।
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "থিম পরিবর্তন করুন"
    },
    interactive: {
        store_imageDeletedNotification: "মুছে ফেলা হয়েছে: {fileName}",
        store_convertingImagesNotification: "{number}টি ছবি রূপান্তর করা হচ্ছে...",
        store_conversionFailedNotification: "রূপান্তর ব্যর্থ হয়েছে: {fileName}",
        store_unsupportedFileTypeNotification: "অসমর্থিত ফরম্যাট, মুছে ফেলা হয়েছে: {fileName}",
        store_fileReadErrorNotification: "ফাইল পড়া যায়নি, মুছে ফেলা হয়েছে: {fileName}",
        store_reconvertingNotification: "পুনরায় রূপান্তর করা হচ্ছে: {fileName}",
        store_formatOptionAuto: "স্বয়ংক্রিয় সংকোচন",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Lossy)",
        store_formatOptionPngLossless: "PNG (Lossless)",
        store_formatOptionWebpLossy: "WebP (Lossy)",
        store_formatOptionWebpLossless: "WebP (Lossless)",
        store_formatOptionAvifLossy: "AVIF (Lossy)",
        store_formatOptionAvifLossless: "AVIF (Lossless)",
        previewSection_title: "প্রিভিউ এবং ডাউনলোড",
        previewSection_downloadAllButton: "সব ডাউনলোড করুন",
        previewSection_deleteAllButton: "সব মুছে ফেলুন",
        previewSection_placeholder: "এখনও কোনো ছবি নেই।",
        previewSection_statusPending: "অপেক্ষারত",
        previewSection_statusConverting: "রূপান্তর চলছে...",
        previewSection_statusFailed: "ব্যর্থ হয়েছে। পৃষ্ঠা রিফ্রেশ করে আবার চেষ্টা করুন।",
        previewSection_statusCompleted: "সম্পন্ন হয়েছে",
        previewSection_noCompletedFilesNotification: "ডাউনলোড করার জন্য কোনো রূপান্তরিত ছবি নেই।",
        previewSection_downloadStartedNotification: "{fileCount}টি ফাইলের ডাউনলোড শুরু হচ্ছে...",
        previewSection_listEmptyNotification: "তালিকাটি খালি।",
        previewSection_allDeletedNotification: "সমস্ত ছবি মুছে ফেলা হয়েছে।",
        previewSection_zipCreationNotification: "ZIP তৈরি করা হচ্ছে...",
        previewSection_zipCreationWithSkipsNotification: "ZIP তৈরি করা হচ্ছে: কিছু ছবি অসম্পূর্ণ থাকায় সেগুলিকে এড়িয়ে যাওয়া হবে।",
        previewSection_zipCreationErrorNotification: "ZIP তৈরি করার সময় একটি ত্রুটি ঘটেছে।",
        previewSection_waitConversionNotification: "অনুগ্রহ করে রূপান্তর শেষ হওয়ার জন্য অপেক্ষা করুন।",
        previewSection_downloadingFileNotification: "ডাউনলোড হচ্ছে: {fileName}",
        previewSection_originalSizeLabel: "আসল আকার:",
        previewSection_convertedSizeLabel: "রূপান্তরিত আকার:",
        previewSection_downloadTitle: "ডাউনলোড",
        previewSection_previewTitle: "প্রিভিউ",
        previewSection_deleteTitle: "মুছুন",
        previewSection_comparisonTab: "তুলনা",
        previewSection_settingsTab: "সেটিংস",
        previewSection_originalImageLabel: "আসল ছবি",
        previewSection_completedImageLabel: "রূপান্তরিত ছবি",
        previewSection_formatLabel: "ফরম্যাট:",
        previewSection_resolutionLabel: "রেজোলিউশন:",
        previewSection_viewLargerButton: "নতুন ট্যাবে দেখুন",
        previewSection_qualityLabel: "সংকোচনের মান",
        previewSection_sizeLabel: "রেজোলিউশন সমন্বয়",
        previewSection_outputFormatLabel: "আউটপুট ফরম্যাট",
        previewSection_reconvertButton: "এই ছবিটি পুনরায় রূপান্তর করুন",
        globalControls_qualityLabel: "সার্বিক সংকোচনের মান",
        globalControls_sizeLabel: "সার্বিক রেজোলিউশন সমন্বয়",
        globalControls_formatLabel: "সার্বিক আউটপুট ফরম্যাট",
        globalControls_reconvertAllButton: "প্রয়োগ করুন এবং সব রূপান্তর করুন",
        globalControls_restoreDefaultsButton: "ডিফল্ট সেটিংসে ফিরিয়ে আনুন",
        globalControls_noImagesNotification: "অনুগ্রহ করে প্রথমে ছবি যোগ করুন।",
        globalControls_reconvertingAllNotification: "সার্বিক সেটিংস দিয়ে সমস্ত {imageCount}টি ছবি পুনরায় রূপান্তর করা হচ্ছে",
        globalControls_restoredNotification: "বিকল্পগুলি ডিফল্ট সেটিংসে ফিরিয়ে আনা হয়েছে।",
        addSection_title: "ছবি যোগ করুন",
        addArea_dragDropTitle: "এখানে ছবি টেনে এনে ছাড়ুন",
        addArea_supportedFormats: "সমর্থিত ফরম্যাট: JPG, PNG, WebP, AVIF, এবং HEIC",
        addArea_selectButton: "ছবি নির্বাচন করুন",
        addArea_tips: "*একবারে একাধিক ছবি যোগ করা যায়।",
        ui_viewExplanationTitle: "এই বিকল্পগুলি সম্পর্কে জানুন",
    }
};

export default bn;