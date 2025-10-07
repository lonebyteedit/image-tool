import type { Translation } from './en.tsx';

const ha: Translation = {
    static: {
        index_lang: 'ha',
        index_dir: 'ltr',
        index_title: "Image Tool - Kayan aiki na zamani don sauya fasalin hoto",
        index_description: "Wannan wani kayan aiki ne na yanar gizo, kyauta kuma na kwararru don matse hoto, canza girmansa, da sauya fasalinsa. Yana goyon bayan sauya fasali tsakanin JPG, PNG, WebP, da AVIF, kuma zai iya maida HEIC zuwa wadannan fasalulluka. Duk aikin sarrafawa yana faruwa ne a cikin burauzarka—ba a taba loda fayilolinka ba, wanda ke tabbatar da cikakken sirri da tsaron bayananka.",
        optionsExplanation: {
            title: "Jagoran Zaɓuɓɓuka",
            subtitle: "Fahimci aiki da amfanin kowane zaɓi don inganta sakamakon sauya hotunanka.",
            options: [
                {
                    id: "quality-option",
                    title: "Ingancin Matsawa",
                    description: <>
                        <p>Wannan zaɓi yana aiki ne kawai idan fasalin da ake so ya zama <strong>JPG</strong>, <strong>WebP (Mai asara)</strong>, ko <strong>AVIF (Mai asara)</strong>.</p>
                        <p>Ƙaramin lamba yana haifar da ƙaramin fayil amma yana rage ingancin hoton. Adadin da aka ba da shawara na <strong>75</strong> yana ba da kyakkyawan daidaito tsakanin girman fayil da inganci.</p>
                        <p>Idan fayil ɗin har yanzu ya yi girma sosai bayan an matse shi, gwada rage *resolution* ɗinsa, wanda galibi ya fi tasiri wajen rage girman fayil.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Gyaran Resolution",
                    description: <>
                        <p>Rage *resolution* ɗin hoto da kaso-kaso (%) yayin da ake kiyaye ainihin yanayin girmansa da faɗinsa. <strong>100%</strong> yana kiyaye ainihin girmansa.</p>
                        <p>Rage *resolution* na iya rage girman fayil <strong>sosai</strong>. Idan ba ka buƙatar babban *resolution* na asali ba, wannan ita ce galibi <strong>hanya mafi inganci</strong> wajen rage girman fayil.</p>
                        <p>A kan sauran zaɓuɓɓuka iri ɗaya, bisa ga <strong>100% resolution</strong>. Daidaitawa zuwa <strong>75%</strong> yana rage girman fayil da kusan <strong>30%</strong> a matsakaita; daidaitawa zuwa <strong>50%</strong> yana rage shi da kusan <strong>65%</strong>; daidaitawa zuwa <strong>25%</strong> yana rage shi da kusan <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Fasalin Fitarwa",
                    description: <>
                        <p>Zaɓi fasalin fitarwa na hoton. Kowanne fasali na da nasa fa'idodi da wuraren amfani.</p>
                        <p><strong>Matsawa ta atomatik</strong>: Wannan zaɓi yana amfani da dabarun matsawa masu dacewa dangane da fasalin hoton da aka shigar:</p>
                        <ul>
                            <li>Ana matse hotunan <strong>JPG</strong> a matsayin <strong>JPG</strong>.</li>
                            <li>Ana matse hotunan <strong>PNG</strong> ta amfani da hanyar <strong>PNG (Mai asara)</strong>.</li>
                            <li>Ana matse hotunan <strong>WebP</strong> ta amfani da hanyar <strong>WebP (Mai asara)</strong>.</li>
                            <li>Ana matse hotunan <strong>AVIF</strong> ta amfani da hanyar <strong>AVIF (Mai asara)</strong>.</li>
                            <li>Ana sauya hotunan <strong>HEIC</strong> zuwa <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Haka kuma, za ka iya zaɓar fasali da kanka daga ƙasa dangane da bukatunka. Ga cikakken bayani kan kowane zaɓi:
                        </p>

                        <p>
                            <strong>JPG</strong>: Shahararren fasalin hoto, amma ba ya goyon bayan fage maras launi (transparency). Idan aka kwatanta da <strong>PNG da ba a matse ba</strong>, yana iya rage girman fayil da kusan <strong>90%</strong>. A saitin inganci na <strong>75</strong>, asarar ingancin <strong>kusan ba a iya gani</strong>. Idan ba ka buƙatar fage maras launi ba <strong>(wanda haka ne ga yawancin hotuna)</strong>, sauyawa zuwa <strong>JPG</strong> shi ne zaɓi mafi dacewa.
                        </p>

                        <p>
                            <strong>PNG (Mai asara)</strong>: Yana goyon bayan fage maras launi tare da ɗan asarar inganci. Yana rage girman fayil da kusan <strong>70%</strong> idan aka kwatanta da <strong>PNG da ba a matse ba</strong>. A zaɓe shi ne kawai idan kana buƙatar fage maras launi a fasalin PNG. In ba haka ba, <strong>JPG</strong> yana ba da <strong>inganci mafi kyau da ƙaramin girma</strong> (ba tare da fage maras launi ba), kuma <strong>WebP (Mai asara)</strong> yana ba da <strong>inganci mafi kyau, ƙaramin girma, da fage maras launi</strong>, wanda ya sa ya zama madadin da ya fi dacewa idan ba lallai sai fasalin PNG ba.
                        </p>

                        <p>
                            <strong>PNG (Maras asara)</strong>: Yana goyon bayan fage maras launi ba tare da asarar inganci ba. Yana rage girman fayil da kusan <strong>20%</strong> idan aka kwatanta da <strong>PNG da ba a matse ba</strong>. Koyaya, idan <strong>ba lallai sai fasalin PNG ba</strong>, <strong>WebP (Maras asara)</strong> ya fi zama zaɓi mai kyau saboda yana samar da fayiloli masu ƙaramin girma.
                        </p>

                        <p>
                            <strong>WebP (Mai asara)</strong>: Yana goyon bayan fage maras launi tare da ɗan asarar inganci. Yana rage girman fayil da kusan <strong>90%</strong> idan aka kwatanta da <strong>PNG da ba a matse ba</strong>. Yana da kyakkyawan madadin <strong>PNG (Mai asara)</strong>, saboda yana ba da inganci mafi kyau da ƙaramin girma. Lura: Wasu tsofaffin na'urori ba sa goyon bayan WebP.
                        </p>

                        <p>
                            <strong>WebP (Maras asara)</strong>: Yana goyon bayan fage maras launi ba tare da asarar inganci ba. Yana rage girman fayil da kusan <strong>50%</strong> idan aka kwatanta da <strong>PNG da ba a matse ba</strong>, wanda ya sa ya zama madadin da ya fi <strong>PNG (Maras asara)</strong>. Lura: Wasu tsofaffin na'urori ba sa goyon bayan WebP.
                        </p>

                        <p>
                            <strong>AVIF (Mai asara)</strong>: Yana goyon bayan fage maras launi tare da ɗan asarar inganci. A matsayinsa na magajin WebP, yana da ƙarfin matsawa mafi girma, yana rage girman fayil da kusan <strong>94%</strong> idan aka kwatanta da <strong>PNG da ba a matse ba</strong>. A matsayin fasali na zamani, AVIF yana ba da inganci mai kyau a ƙananan girman fayil. Koyaya, karɓuwarsa a burauzoci da na'urori har yanzu tana da iyaka. Wannan fasalin ya fi dacewa da ƙwararrun masu amfani ko lokacin da ka tabbata na'urorin da ake son amfani da shi sun goyi bayansa.
                        </p>
                        <p>
                            <strong>AVIF (Maras asara)</strong>: Yana goyon bayan fage maras launi ba tare da asarar inganci ba. Idan aka kwatanta da <strong>PNG da ba a matse ba</strong>, raguwar girman fayil ba ta da yawa, kuma a wasu lokuta ma yana iya ƙaruwa. Sai dai idan kana da wata bukata ta musamman, <strong>PNG (Maras asara)</strong> ko <strong>WebP (Maras asara)</strong> sun fi zama zaɓi mafi kyau.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Canza Jigo"
    },
    interactive: {
        store_imageDeletedNotification: "An cire: {fileName}",
        store_convertingImagesNotification: "Ana kan sauya hotuna {number}...",
        store_conversionFailedNotification: "Sauyawa ya gaza: {fileName}",
        store_unsupportedFileTypeNotification: "Fasali mara tallafi, an cire: {fileName}",
        store_fileReadErrorNotification: "Ba a iya karanta fayil ba, an cire: {fileName}",
        store_reconvertingNotification: "Sake sauyawa: {fileName}",
        store_formatOptionAuto: "Matsawa ta atomatik",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Mai asara)",
        store_formatOptionPngLossless: "PNG (Maras asara)",
        store_formatOptionWebpLossy: "WebP (Mai asara)",
        store_formatOptionWebpLossless: "WebP (Maras asara)",
        store_formatOptionAvifLossy: "AVIF (Mai asara)",
        store_formatOptionAvifLossless: "AVIF (Maras asara)",
        previewSection_title: "Samfoti da Saukewa",
        previewSection_downloadAllButton: "Sauke Duka",
        previewSection_deleteAllButton: "Goge Duka",
        previewSection_placeholder: "Babu hotuna a yanzu.",
        previewSection_statusPending: "Ana jira",
        previewSection_statusConverting: "Ana kan sauyawa...",
        previewSection_statusFailed: "Ya gaza. Da fatan za a sake loda shafin sannan a sake gwadawa.",
        previewSection_statusCompleted: "An kammala",
        previewSection_noCompletedFilesNotification: "Babu hotunan da aka kammala don saukewa.",
        previewSection_downloadStartedNotification: "An fara sauke fayiloli {fileCount}...",
        previewSection_listEmptyNotification: "Jerin babu komai.",
        previewSection_allDeletedNotification: "An cire dukkan hotuna.",
        previewSection_zipCreationNotification: "Ana kan haɗa ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Ana kan haɗa ZIP: Wasu hotuna ba a kammala su ba, don haka za a tsallake su.",
        previewSection_zipCreationErrorNotification: "An samu kuskure yayin haɗa ZIP.",
        previewSection_waitConversionNotification: "Da fatan za a jira a kammala sauyawa.",
        previewSection_downloadingFileNotification: "Ana saukewa: {fileName}",
        previewSection_originalSizeLabel: "Girman asali:",
        previewSection_convertedSizeLabel: "Girman da aka sauya:",
        previewSection_downloadTitle: "Sauke",
        previewSection_previewTitle: "Samfoti",
        previewSection_deleteTitle: "Goge",
        previewSection_comparisonTab: "Kwatanta",
        previewSection_settingsTab: "Saiti",
        previewSection_originalImageLabel: "Hoto na asali",
        previewSection_completedImageLabel: "Hoton da aka sauya",
        previewSection_formatLabel: "Fasali:",
        previewSection_resolutionLabel: "Resolution:",
        previewSection_viewLargerButton: "Duba a sabon shafi",
        previewSection_qualityLabel: "Ingancin Matsawa",
        previewSection_sizeLabel: "Gyaran Resolution",
        previewSection_outputFormatLabel: "Fasalin Fitarwa",
        previewSection_reconvertButton: "Sake sauya wannan hoton",
        globalControls_qualityLabel: "Ingancin Matsawa na Gabaɗaya",
        globalControls_sizeLabel: "Gyaran Resolution na Gabaɗaya",
        globalControls_formatLabel: "Fasalin Fitarwa na Gabaɗaya",
        globalControls_reconvertAllButton: "Aiwatar kuma a Sake Sauya Duka",
        globalControls_restoreDefaultsButton: "Maido da Saitunan Asali",
        globalControls_noImagesNotification: "Da fatan za a fara ƙara hotuna.",
        globalControls_reconvertingAllNotification: "Ana sake sauya dukkan hotuna {imageCount} da saitunan gabaɗaya",
        globalControls_restoredNotification: "An maido da zaɓuɓɓuka zuwa na asali.",
        addSection_title: "Ƙara Hotuna",
        addArea_dragDropTitle: "Jawo ka saki hotuna a nan",
        addArea_supportedFormats: "Yana goyon bayan JPG, PNG, WebP, AVIF, da HEIC",
        addArea_selectButton: "Zaɓi Hotuna",
        addArea_tips: "*Za a iya ƙara hotuna da yawa a lokaci ɗaya",
        ui_viewExplanationTitle: "Koyi game da waɗannan zaɓuɓɓuka",
    }
};

export default ha;