import type { Translation } from './en.tsx';

const km: Translation = {
    static: {
        index_lang: 'km',
        index_dir: 'ltr',
        index_title: "Image Tool - ឧបករណ៍បម្លែងរូបភាពកម្រិតខ្ពស់",
        index_description: "ឧបករណ៍អនឡាញឥតគិតថ្លៃប្រកបដោយវិជ្ជាជីវៈ សម្រាប់បង្ហាប់ ប្តូរទំហំ និងបម្លែងទ្រង់ទ្រាយរូបភាព។ គាំទ្រការបម្លែងទៅវិញទៅមករវាង JPG, PNG, WebP, និង AVIF ហើយអាចបម្លែង HEIC ទៅជាទ្រង់ទ្រាយទាំងនេះបាន។ រាល់ដំណើរការទាំងអស់កើតឡើងនៅលើ Browser របស់អ្នកផ្ទាល់ — ឯកសាររបស់អ្នកមិនត្រូវបានបង្ហោះទៅកាន់ម៉ាស៊ីនមេឡើយ ដែលធានានូវភាពឯកជន និងសុវត្ថិភាពទិន្នន័យពេញលេញ។",
        optionsExplanation: {
            title: "ការណែនាំអំពីជម្រើស",
            subtitle: "ស្វែងយល់ពីមុខងារ និងការប្រើប្រាស់របស់ជម្រើសនីមួយៗ ដើម្បីបង្កើនប្រសិទ្ធភាពលទ្ធផលបម្លែងរូបភាពរបស់អ្នក។",
            options: [
                {
                    id: "quality-option",
                    title: "គុណភាពបង្ហាប់",
                    description: <>
                        <p>ជម្រើសនេះដំណើរការតែនៅពេលដែលទ្រង់ទ្រាយលទ្ធផលជា <strong>JPG</strong>, <strong>WebP (បាត់បង់គុណភាព)</strong>, ឬ <strong>AVIF (បាត់បង់គុណភាព)</strong> ប៉ុណ្ណោះ។</p>
                        <p>តម្លៃកាន់តែទាប ឯកសារកាន់តែតូច ប៉ុន្តែគុណភាពរូបភាពក៏ថយចុះដែរ។ តម្លៃដែលបានណែនាំគឺ <strong>75</strong> ដែលផ្តល់តុល្យភាពល្អរវាងទំហំឯកសារ និងគុណភាព។</p>
                        <p>ប្រសិនបើឯកសារនៅតែធំពេកបន្ទាប់ពីបង្ហាប់រួច សូមព្យាយាមបន្ថយទំហំ Resolution ដែលជាញឹកញាប់មានប្រសិទ្ធភាពជាងក្នុងការបង្រួមទំហំឯកសារ។</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "ការកែតម្រូវ Resolution",
                    description: <>
                        <p>បន្ថយទំហំ Resolution របស់រូបភាពជាភាគរយ ដោយរក្សាសមាមាត្រដើម។ <strong>100%</strong> រក្សាវិមាត្រដើម។</p>
                        <p>ការបន្ថយ Resolution អាចកាត់បន្ថយទំហំឯកសារបានយ៉ាង <strong>ច្រើន</strong>។ ប្រសិនបើអ្នកមិនត្រូវការ Resolution ខ្ពស់ដូចដើមទេ នេះជា <strong>វិធីសាស្ត្រដែលមានប្រសិទ្ធភាពបំផុត</strong> ដើម្បីធ្វើឱ្យឯកសារតូចជាងមុន។</p>
                        <p>ជាមួយនឹងជម្រើសផ្សេងទៀតដូចគ្នា ដោយផ្អែកលើ <strong>Resolution 100%</strong>។ ការកែតម្រូវទៅ <strong>Resolution 75%</strong> អាចកាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>30%</strong>; ការកែតម្រូវទៅ <strong>Resolution 50%</strong> កាត់បន្ថយជាមធ្យម <strong>65%</strong>; ការកែតម្រូវទៅ <strong>Resolution 25%</strong> កាត់បន្ថយជាមធ្យម <strong>88%</strong>។</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "ទ្រង់ទ្រាយលទ្ធផល",
                    description: <>
                        <p>ជ្រើសរើសទ្រង់ទ្រាយលទ្ធផលសម្រាប់រូបភាព។ ទ្រង់ទ្រាយផ្សេងៗគ្នាមានគុណសម្បត្តិ និងករណីប្រើប្រាស់រៀងៗខ្លួន។</p>
                        <p><strong>បង្ហាប់ដោយស្វ័យប្រវត្តិ</strong>: ជម្រើសនេះនឹងអនុវត្តយុទ្ធសាស្ត្របង្ហាប់ដែលសមស្របដោយផ្អែកលើទ្រង់ទ្រាយរូបភាពដើម៖</p>
                        <ul>
                            <li>រូបភាព <strong>JPG</strong> នឹងត្រូវបានបង្ហាប់ជា <strong>JPG</strong>។</li>
                            <li>រូបភាព <strong>PNG</strong> នឹងត្រូវបានបង្ហាប់ដោយប្រើវិធីសាស្ត្រ <strong>PNG (បាត់បង់គុណភាព)</strong>។</li>
                            <li>រូបភាព <strong>WebP</strong> នឹងត្រូវបានបង្ហាប់ដោយប្រើវិធីសាស្ត្រ <strong>WebP (បាត់បង់គុណភាព)</strong>។</li>
                            <li>រូបភាព <strong>AVIF</strong> នឹងត្រូវបានបង្ហាប់ដោយប្រើវិធីសាស្ត្រ <strong>AVIF (បាត់បង់គុណភាព)</strong>។</li>
                            <li>រូបភាព <strong>HEIC</strong> នឹងត្រូវបានបម្លែងទៅជា <strong>JPG</strong>។</li>
                        </ul>

                        <p>
                            អ្នកក៏អាចជ្រើសរើសទ្រង់ទ្រាយដោយដៃខាងក្រោមដោយផ្អែកលើតម្រូវការជាក់លាក់របស់អ្នក។ នេះជាការណែនាំលម្អិតសម្រាប់ជម្រើសនីមួយៗ៖
                        </p>

                        <p>
                            <strong>JPG</strong>: ជាទ្រង់ទ្រាយរូបភាពដែលពេញនិយមបំផុត ទោះបីជាវាមិនគាំទ្រផ្ទៃថ្លាក៏ដោយ។ នៅពេលបម្លែងពី <strong>PNG ដែលមិនបានបង្ហាប់</strong> វាអាចកាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>90%</strong>។ នៅក្នុងការកំណត់គុណភាព <strong>75</strong> ការបាត់បង់គុណភាពគឺ <strong>ស្ទើរតែមិនអាចសម្គាល់បាន</strong>។ ប្រសិនបើអ្នកមិនត្រូវការផ្ទៃខាងក្រោយថ្លាទេ <strong>(ដែលជារឿងពិតសម្រាប់រូបថតភាគច្រើន)</strong> ការបម្លែងទៅជា <strong>JPG</strong> ជាធម្មតាគឺជាជម្រើសដ៏ល្អបំផុត។
                        </p>

                        <p>
                            <strong>PNG (បាត់បង់គុណភាព)</strong>: គាំទ្រផ្ទៃថ្លាជាមួយនឹងការបាត់បង់គុណភាពខ្លះ កាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>70%</strong> បើធៀបនឹង <strong>PNG ដែលមិនបានបង្ហាប់</strong>។ ជ្រើសរើសជម្រើសនេះតែក្នុងករណីដែលអ្នកត្រូវការផ្ទៃថ្លាក្នុងទ្រង់ទ្រាយ PNG ប៉ុណ្ណោះ។ បើមិនដូច្នេះទេ <strong>JPG</strong> ផ្តល់នូវ <strong>គុណភាពល្អជាងសម្រាប់ទំហំតូចជាង</strong> (ដោយគ្មានផ្ទៃថ្លា) ហើយ <strong>WebP (បាត់បង់គុណភាព)</strong> ផ្តល់នូវ <strong>គុណភាពល្អជាង ទំហំតូចជាង និងផ្ទៃថ្លា</strong> ដែលធ្វើឱ្យវាក្លាយជាជម្រើសជំនួសដ៏ប្រសើរជាង ប្រសិនបើទ្រង់ទ្រាយ PNG មិនមែនជាតម្រូវការចាំបាច់។
                        </p>

                        <p>
                            <strong>PNG (មិនបាត់បង់គុណភាព)</strong>: គាំទ្រផ្ទៃថ្លាដោយមិនបាត់បង់គុណភាព។ កាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>20%</strong> បើធៀបនឹង <strong>PNG ដែលមិនបានបង្ហាប់</strong>។ ទោះយ៉ាងណាក៏ដោយ <strong>ប្រសិនបើទ្រង់ទ្រាយ PNG មិនមែនជាតម្រូវការចាំបាច់</strong> <strong>WebP (មិនបាត់បង់គុណភាព)</strong> គឺជាជម្រើសដ៏ល្អជាង ព្រោះវាផ្តល់ទំហំឯកសារតូចជាង។
                        </p>

                        <p>
                            <strong>WebP (បាត់បង់គុណភាព)</strong>: គាំទ្រផ្ទៃថ្លាជាមួយនឹងការបាត់បង់គុណភាពបន្តិចបន្តួច។ កាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>90%</strong> បើធៀបនឹង <strong>PNG ដែលមិនបានបង្ហាប់</strong>។ វាជាការជំនួសដ៏ល្អសម្រាប់ <strong>PNG (បាត់បង់គុណភាព)</strong> ដោយផ្តល់នូវគុណភាពល្អជាង និងទំហំតូចជាង។ ចំណាំ៖ WebP មិនត្រូវបានគាំទ្រនៅលើឧបករណ៍ចាស់ៗមួយចំនួនទេ។
                        </p>

                        <p>
                            <strong>WebP (មិនបាត់បង់គុណភាព)</strong>: គាំទ្រផ្ទៃថ្លាដោយមិនបាត់បង់គុណភាព។ កាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>50%</strong> បើធៀបនឹង <strong>PNG ដែលមិនបានបង្ហាប់</strong> ដែលធ្វើឱ្យវាក្លាយជាការជំនួសដ៏ប្រសើរជាងសម្រាប់ <strong>PNG (មិនបាត់បង់គុណភាព)</strong>។ ចំណាំ៖ WebP មិនត្រូវបានគាំទ្រនៅលើឧបករណ៍ចាស់ៗមួយចំនួនទេ។
                        </p>

                        <p>
                            <strong>AVIF (បាត់បង់គុណភាព)</strong>: គាំទ្រផ្ទៃថ្លាជាមួយនឹងការបាត់បង់គុណភាពបន្តិចបន្តួច។ ក្នុងនាមជាអ្នកស្នងតំណែងរបស់ WebP វាផ្តល់នូវអត្រាបង្ហាប់កាន់តែខ្ពស់ ដោយកាត់បន្ថយទំហំឯកសារជាមធ្យម <strong>94%</strong> បើធៀបនឹង <strong>PNG ដែលមិនបានបង្ហាប់</strong>។ ក្នុងនាមជាទ្រង់ទ្រាយទំនើប AVIF ផ្តល់នូវគុណភាពល្អឥតខ្ចោះក្នុងទំហំឯកសារតូចបំផុត។ ទោះយ៉ាងណាក៏ដោយ ភាពឆបគ្នានៃ Browser និងឧបករណ៍នៅមានកម្រិតនៅឡើយ។ ទ្រង់ទ្រាយនេះគឺល្អបំផុតសម្រាប់អ្នកប្រើប្រាស់កម្រិតខ្ពស់ ឬនៅពេលអ្នកប្រាកដថាឧបករណ៍គោលដៅគាំទ្រវា។
                        </p>
                        <p>
                            <strong>AVIF (មិនបាត់បង់គុណភាព)</strong>: គាំទ្រផ្ទៃថ្លាដោយមិនបាត់បង់គុណភាព។ បើធៀបនឹង <strong>PNG ដែលមិនបានបង្ហាប់</strong> ការកាត់បន្ថយទំហំឯកសារមិនសូវមានប្រសិទ្ធភាពទេ ហើយក្នុងករណីខ្លះអាចនឹងកើនឡើងទៀតផង។ លើកលែងតែអ្នកមានតម្រូវការជាក់លាក់សម្រាប់ AVIF ដែលមិនបាត់បង់គុណភាព បើមិនដូច្នេះទេ <strong>PNG (មិនបាត់បង់គុណភាព)</strong> ឬ <strong>WebP (មិនបាត់បង់គុណភាព)</strong> ជាទូទៅគឺជាជម្រើសដ៏ល្អជាង។
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "ប្តូររចនាបថ"
    },
    interactive: {
        store_imageDeletedNotification: "បានលុប៖ {fileName}",
        store_convertingImagesNotification: "កំពុងបម្លែង {number} រូបភាព...",
        store_conversionFailedNotification: "ការបម្លែងបានបរាជ័យ៖ {fileName}",
        store_unsupportedFileTypeNotification: "ទ្រង់ទ្រាយមិនគាំទ្រ, បានលុប៖ {fileName}",
        store_fileReadErrorNotification: "មិនអាចអានឯកសារ, បានលុប៖ {fileName}",
        store_reconvertingNotification: "កំពុងបម្លែងឡើងវិញ៖ {fileName}",
        store_formatOptionAuto: "បង្ហាប់ដោយស្វ័យប្រវត្តិ",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (បាត់បង់គុណភាព)",
        store_formatOptionPngLossless: "PNG (មិនបាត់បង់គុណភាព)",
        store_formatOptionWebpLossy: "WebP (បាត់បង់គុណភាព)",
        store_formatOptionWebpLossless: "WebP (មិនបាត់បង់គុណភាព)",
        store_formatOptionAvifLossy: "AVIF (បាត់បង់គុណភាព)",
        store_formatOptionAvifLossless: "AVIF (មិនបាត់បង់គុណភាព)",
        previewSection_title: "មើលជាមុន និងទាញយក",
        previewSection_downloadAllButton: "ទាញយកទាំងអស់",
        previewSection_deleteAllButton: "លុបទាំងអស់",
        previewSection_placeholder: "មិនទាន់មានរូបភាពទេ។",
        previewSection_statusPending: "រង់ចាំ",
        previewSection_statusConverting: "កំពុងបម្លែង...",
        previewSection_statusFailed: "បរាជ័យ។ សូមផ្ទុកទំព័រឡើងវិញហើយព្យាយាមម្តងទៀត។",
        previewSection_statusCompleted: "បានបញ្ចប់",
        previewSection_noCompletedFilesNotification: "គ្មានរូបភាពដែលបានបញ្ចប់ដើម្បីទាញយកទេ។",
        previewSection_downloadStartedNotification: "កំពុងចាប់ផ្តើមទាញយក {fileCount} ឯកសារ...",
        previewSection_listEmptyNotification: "បញ្ជីនៅទំនេរ។",
        previewSection_allDeletedNotification: "រូបភាពទាំងអស់ត្រូវបានលុបចោល។",
        previewSection_zipCreationNotification: "កំពុងបង្កើត ZIP...",
        previewSection_zipCreationWithSkipsNotification: "កំពុងបង្កើត ZIP: មានរូបភាពមិនទាន់បានបញ្ចប់ ដែលនឹងត្រូវបានរំលង។",
        previewSection_zipCreationErrorNotification: "មានកំហុសកើតឡើងនៅពេលបង្កើត ZIP។",
        previewSection_waitConversionNotification: "សូមរង់ចាំរហូតដល់ការបម្លែងបញ្ចប់។",
        previewSection_downloadingFileNotification: "កំពុងទាញយក៖ {fileName}",
        previewSection_originalSizeLabel: "ទំហំដើម៖",
        previewSection_convertedSizeLabel: "ទំហំក្រោយបម្លែង៖",
        previewSection_downloadTitle: "ទាញយក",
        previewSection_previewTitle: "មើលជាមុន",
        previewSection_deleteTitle: "លុប",
        previewSection_comparisonTab: "ប្រៀបធៀប",
        previewSection_settingsTab: "ការកំណត់",
        previewSection_originalImageLabel: "រូបភាពដើម",
        previewSection_completedImageLabel: "រូបភាពដែលបានបម្លែង",
        previewSection_formatLabel: "ទ្រង់ទ្រាយ៖",
        previewSection_resolutionLabel: "Resolution៖",
        previewSection_viewLargerButton: "មើលក្នុងផ្ទាំងថ្មី",
        previewSection_qualityLabel: "គុណភាពបង្ហាប់",
        previewSection_sizeLabel: "ការកែតម្រូវ Resolution",
        previewSection_outputFormatLabel: "ទ្រង់ទ្រាយលទ្ធផល",
        previewSection_reconvertButton: "បម្លែងឡើងវិញ",
        globalControls_qualityLabel: "គុណភាពបង្ហាប់រួម",
        globalControls_sizeLabel: "ការកែតម្រូវ Resolution រួម",
        globalControls_formatLabel: "ទ្រង់ទ្រាយលទ្ធផលរួម",
        globalControls_reconvertAllButton: "អនុវត្ត និងបម្លែងទាំងអស់",
        globalControls_restoreDefaultsButton: "កំណត់ជម្រើសឡើងវិញ",
        globalControls_noImagesNotification: "សូមបន្ថែមរូបភាពជាមុនសិន។",
        globalControls_reconvertingAllNotification: "កំពុងបម្លែងរូបភាពទាំងអស់ចំនួន {imageCount} ឡើងវិញជាមួយនឹងការកំណត់រួម",
        globalControls_restoredNotification: "ជម្រើសត្រូវបានកំណត់ឡើងវិញទៅតម្លៃដើម។",
        addSection_title: "បន្ថែមរូបភាព",
        addArea_dragDropTitle: "អូសហើយទម្លាក់រូបភាពនៅទីនេះ",
        addArea_supportedFormats: "គាំទ្រទ្រង់ទ្រាយ JPG, PNG, WebP, AVIF, និង HEIC",
        addArea_selectButton: "ជ្រើសរើសរូបភាព",
        addArea_tips: "*អាចបន្ថែមរូបភាពច្រើនក្នុងពេលតែមួយ",
        ui_viewExplanationTitle: "ស្វែងយល់អំពីជម្រើសទាំងនេះ",
    }
};

export default km;