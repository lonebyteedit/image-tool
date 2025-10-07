import type { Translation } from './en.tsx';

const so: Translation = {
    static: {
        index_lang: 'so',
        index_dir: 'ltr',
        index_title: "Image Tool - Aalad Casri ah oo Sawirrada loo Rogo",
        index_description: "Aalad xirfad leh oo online ah, bilaashna ah, oo loogu talagalay isku-cadaadinta sawirrada, beddelidda cabbirkooda, iyo rogista qaabkooda. Waxay taageertaa is-dhaafsiga qaababka JPG, PNG, WebP, iyo AVIF, waxayna u rogi kartaa HEIC qaababkan. Dhammaan habayntu waxay ka dhacdaa biraawsarkaaga gudihiisa — faylashaada weligood lama soo geliyo server, taasoo dammaanad qaadaysa sirtaada iyo amniga xogtaada oo dhammaystiran.",
        optionsExplanation: {
            title: "Hagaha Doorashooyinka",
            subtitle: "Faham shaqada iyo isticmaalka doorasho kasta si aad u wanaajiso natiijooyinkaaga rogista sawirrada.",
            options: [
                {
                    id: "quality-option",
                    title: "Tayada Isku-cadaadinta",
                    description: <>
                        <p>Doorashadani waxay shaqaynaysaa oo keliya marka qaabka la rabo uu yahay <strong>JPG</strong>, <strong>WebP (Tayo-lumin leh)</strong>, ama <strong>AVIF (Tayo-lumin leh)</strong>.</p>
                        <p>Qiime hooseeya wuxuu abuuraa fayl yar, laakiin wuxuu dhimaa tayada sawirka. Qiimaha lagu taliyay ee <strong>75</strong> wuxuu bixiyaa isku-dheellitir wanaagsan oo u dhexeeya cabbirka faylka iyo tayada.</p>
                        <p>Haddii faylku weli aad u weyn yahay kadib isku-cadaadinta, isku day inaad yareyso xallinta sawirka (resolution), taasoo inta badan waxtar badan u leh yaraynta cabbirka faylka.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Hagaajinta Xallinta (Resolution)",
                    description: <>
                        <p>Yaree xallinta sawirka boqolkiiba adiga oo ilaalinaya saamiga dhererka iyo ballaca asalka ah. <strong>100%</strong> waxay ilaalisaa cabbirrada asalka ah.</p>
                        <p>Yaraynta xallintu waxay si <strong>weyn</strong> u dhimi kartaa cabbirka faylka. Haddii aadan u baahnayn xallinta sare ee asalka ah, tani inta badan waa <strong>habka ugu waxtarka badan</strong> ee lagu yareeyo cabbirka faylka.</p>
                        <p>Iyadoo doorashooyinka kale ay isku mid yihiin, marka la barbar dhigo <strong>xallinta 100%</strong>. Hagaajinta <strong>xallinta 75%</strong> waxay yareysaa cabbirka faylka celcelis ahaan <strong>30%</strong>; hagaajinta <strong>xallinta 50%</strong> waxay yareysaa celcelis ahaan <strong>65%</strong>; hagaajinta <strong>xallinta 25%</strong> waxay yareysaa celcelis ahaan <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Qaabka Wax-soo-saarka",
                    description: <>
                        <p>Dooro qaabka wax-soo-saarka ee sawirka. Qaababka kala duwan waxay leeyihiin faa'iidooyin iyo adeegsiyo u gaar ah.</p>
                        <p><strong>Isku-cadaadin otomaatig ah</strong>: Doorashadani waxay si otomaatig ah u adeegsanaysaa hab isku-cadaadin ku habboon oo ku saleysan qaabka sawirka la soo geliyey:</p>
                        <ul>
                            <li>Sawirrada <strong>JPG</strong> waxaa lagu cadaadinayaa qaabka <strong>JPG</strong>.</li>
                            <li>Sawirrada <strong>PNG</strong> waxaa lagu cadaadinayaa habka <strong>PNG (Tayo-lumin leh)</strong>.</li>
                            <li>Sawirrada <strong>WebP</strong> waxaa lagu cadaadinayaa habka <strong>WebP (Tayo-lumin leh)</strong>.</li>
                            <li>Sawirrada <strong>AVIF</strong> waxaa lagu cadaadinayaa habka <strong>AVIF (Tayo-lumin leh)</strong>.</li>
                            <li>Sawirrada <strong>HEIC</strong> waxaa loo rogaa <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Waxa kale oo aad gacanta ku dooran kartaa qaab hoose oo ku saleysan baahiyahaaga gaarka ah. Waa kan hage faahfaahsan oo ku saabsan doorasho kasta:
                        </p>

                        <p>
                            <strong>JPG</strong>: Waa qaabka sawirrada ugu caansan, inkastoo uusan taageerin daah-furnaanta (transparency). Marka la barbar dhigo <strong>PNG aan la cadaadin</strong>, wuxuu yareyn karaa cabbirka faylka celcelis ahaan <strong>90%</strong>. Marka tayadu tahay <strong>75</strong>, luminta tayadu waa <strong>mid aan la dareemi karin</strong>. Haddii aadan u baahnayn gadaal daah-furan <strong>(taas oo ah xaaladda sawirrada badankooda)</strong>, u rogista <strong>JPG</strong> badanaa waa doorashada ugu fiican.
                        </p>

                        <p>
                            <strong>PNG (Tayo-lumin leh)</strong>: Wuxuu taageeraa daah-furnaanta iyadoo ay jirto tayo-lumin yar, wuxuuna yareeyaa cabbirka faylka celcelis ahaan <strong>70%</strong> marka la barbar dhigo <strong>PNG aan la cadaadin</strong>. Dooro tan kaliya haddii aad u baahan tahay gadaal daah-furan oo qaab PNG ah. Haddii kale, <strong>JPG</strong> wuxuu bixiyaa <strong>tayo wanaagsan iyo cabbir yar</strong> (la'aanta daah-furnaanta), halka <strong>WebP (Tayo-lumin leh)</strong> uu bixiyo <strong>tayo ka fiican, cabbir ka yar, iyo daah-furnaan</strong>, taasoo ka dhigaysa beddel ka sarreeya haddii qaabka PNG uusan ahayn shuruud adag.
                        </p>

                        <p>
                            <strong>PNG (Tayo-lumin la'aan)</strong>: Wuxuu taageeraa daah-furnaanta iyada oo aan tayada waxba laga dhimin. Wuxuu yareeyaa cabbirka faylka celcelis ahaan <strong>20%</strong> marka la barbar dhigo <strong>PNG aan la cadaadin</strong>. Si kastaba ha ahaatee, <strong>haddii qaabka PNG uusan ahayn mid khasab ah</strong>, <strong>WebP (Tayo-lumin la'aan)</strong> waa doorasho ka fiican maadaama uu bixiyo cabbirro fayl oo yaryar.
                        </p>

                        <p>
                            <strong>WebP (Tayo-lumin leh)</strong>: Wuxuu taageeraa daah-furnaanta iyadoo ay jirto tayo-lumin yar. Wuxuu yareeyaa cabbirka faylka celcelis ahaan <strong>90%</strong> marka la barbar dhigo <strong>PNG aan la cadaadin</strong>. Waa beddel aad u fiican oo loogu talagalay <strong>PNG (Tayo-lumin leh)</strong>, isagoo bixinaya tayo ka wanaagsan iyo cabbirro yaryar. Fiiro gaar ah: WebP lagama taageero qaar ka mid ah aaladaha duugoobay.
                        </p>

                        <p>
                            <strong>WebP (Tayo-lumin la'aan)</strong>: Wuxuu taageeraa daah-furnaanta iyada oo aan tayada waxba laga dhimin. Wuxuu yareeyaa cabbirka faylka celcelis ahaan <strong>50%</strong> marka la barbar dhigo <strong>PNG aan la cadaadin</strong>, taasoo ka dhigaysa beddel ka sarreeya <strong>PNG (Tayo-lumin la'aan)</strong>. Fiiro gaar ah: WebP lagama taageero qaar ka mid ah aaladaha duugoobay.
                        </p>

                        <p>
                            <strong>AVIF (Tayo-lumin leh)</strong>: Wuxuu taageeraa daah-furnaanta iyadoo ay jirto tayo-lumin yar. Isagoo ah dhaxalsugaha WebP, wuxuu bixiyaa heer isku-cadaadin oo xitaa ka sarreeya, isagoo yareynaya cabbirka faylka celcelis ahaan <strong>94%</strong> marka la barbar dhigo <strong>PNG aan la cadaadin</strong>. Maadaama uu yahay qaab casri ah, AVIF wuxuu bixiyaa tayo aad u fiican iyo cabbirro fayl oo aad u yar. Si kastaba ha ahaatee, waafaqsanaanta biraawsarrada iyo aaladaha weli waa xaddidan tahay. Qaabkani wuxuu ugu fiican yahay isticmaalayaasha horumarsan ama marka aad hubto in aaladaha loo isticmaalayo ay taageerayaan.
                        </p>
                        <p>
                            <strong>AVIF (Tayo-lumin la'aan)</strong>: Wuxuu taageeraa daah-furnaanta iyada oo aan tayada waxba laga dhimin. Marka la barbar dhigo <strong>PNG aan la cadaadin</strong>, yaraynta cabbirka faylku maaha mid muuqata, xaaladaha qaarkoodna xitaa wuu kordhin karaa. Haddii aadan u baahnayn baahi gaar ah oo AVIF tayo-lumin la'aan ah, <strong>PNG (Tayo-lumin la'aan)</strong> ama <strong>WebP (Tayo-lumin la'aan)</strong> ayaa guud ahaan ah doorashooyin ka fiican.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Beddel Midabka"
    },
    interactive: {
        store_imageDeletedNotification: "Waa la saaray: {fileName}",
        store_convertingImagesNotification: "Waa la rogayaa {number} sawir...",
        store_conversionFailedNotification: "Rogistii way fashilantay: {fileName}",
        store_unsupportedFileTypeNotification: "Qaab aan la taageerin, waa la saaray: {fileName}",
        store_fileReadErrorNotification: "Lama akhrin karin faylka, waa la saaray: {fileName}",
        store_reconvertingNotification: "Dib-u-rogis: {fileName}",
        store_formatOptionAuto: "Isku-cadaadin otomaatig ah",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Tayo-lumin leh)",
        store_formatOptionPngLossless: "PNG (Tayo-lumin la'aan)",
        store_formatOptionWebpLossy: "WebP (Tayo-lumin leh)",
        store_formatOptionWebpLossless: "WebP (Tayo-lumin la'aan)",
        store_formatOptionAvifLossy: "AVIF (Tayo-lumin leh)",
        store_formatOptionAvifLossless: "AVIF (Tayo-lumin la'aan)",
        previewSection_title: "Horudhac iyo Soo Dejiso",
        previewSection_downloadAllButton: "Soo Deji Dhammaan",
        previewSection_deleteAllButton: "Tirtir Dhammaan",
        previewSection_placeholder: "Weli sawirro ma jiraan.",
        previewSection_statusPending: "Sugitaan",
        previewSection_statusConverting: "Waa la rogayaa...",
        previewSection_statusFailed: "Way fashilantay. Fadlan bogga dib u cusboonaysii oo mar kale isku day.",
        previewSection_statusCompleted: "Waa la dhammeeyey",
        previewSection_noCompletedFilesNotification: "Ma jiraan sawirro la dhammeeyey oo la soo dejin karo.",
        previewSection_downloadStartedNotification: "Soo dejinta {fileCount} fayl ayaa bilaabanaysa...",
        previewSection_listEmptyNotification: "Liisku waa madhan yahay.",
        previewSection_allDeletedNotification: "Dhammaan sawirradii waa la saaray.",
        previewSection_zipCreationNotification: "Waa la samaynayaa ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Waa la samaynayaa ZIP: Sawirrada qaar ma dhammaystirna, waana laga boodi doonaa.",
        previewSection_zipCreationErrorNotification: "Cilad ayaa dhacday markii la samaynayay ZIP-ka.",
        previewSection_waitConversionNotification: "Fadlan sug inta rogistu dhammaanayso.",
        previewSection_downloadingFileNotification: "Soo dejin: {fileName}",
        previewSection_originalSizeLabel: "Cabbirka Asalka ah:",
        previewSection_convertedSizeLabel: "Cabbirka La Rogay:",
        previewSection_downloadTitle: "Soo Deji",
        previewSection_previewTitle: "Horudhac",
        previewSection_deleteTitle: "Tirtir",
        previewSection_comparisonTab: "Isbarbardhig",
        previewSection_settingsTab: "Dejinta",
        previewSection_originalImageLabel: "Sawirka Asalka ah",
        previewSection_completedImageLabel: "Sawirka La Rogay",
        previewSection_formatLabel: "Qaabka:",
        previewSection_resolutionLabel: "Xallinta:",
        previewSection_viewLargerButton: "Ku Eeg Bog Cusub",
        previewSection_qualityLabel: "Tayada Isku-cadaadinta",
        previewSection_sizeLabel: "Hagaajinta Xallinta",
        previewSection_outputFormatLabel: "Qaabka Wax-soo-saarka",
        previewSection_reconvertButton: "Dib-u-rogo Sawirkan",
        globalControls_qualityLabel: "Tayada Isku-cadaadinta Guud",
        globalControls_sizeLabel: "Hagaajinta Xallinta Guud",
        globalControls_formatLabel: "Qaabka Wax-soo-saarka Guud",
        globalControls_reconvertAllButton: "Dabag oo Dhammaan Dib-u-rogo",
        globalControls_restoreDefaultsButton: "Dib u celi Dejinta Asalka ah",
        globalControls_noImagesNotification: "Fadlan marka hore sawirro ku dar.",
        globalControls_reconvertingAllNotification: "Dhammaan {imageCount} sawir ayaa dib loogu rogayaa dejinta guud",
        globalControls_restoredNotification: "Doorashooyinkii waxaa lagu celiyey sidii hore.",
        addSection_title: "Kudar Sawirro",
        addArea_dragDropTitle: "Sawirrada halkan ku soo jiid oo ku rid",
        addArea_supportedFormats: "Waxaa la taageeraa qaababka: JPG, PNG, WebP, AVIF, iyo HEIC",
        addArea_selectButton: "Dooro Sawirro",
        addArea_tips: "*Waad ku dari kartaa sawirro badan hal mar",
        ui_viewExplanationTitle: "Baro doorashooyinkan",
    }
};

export default so;