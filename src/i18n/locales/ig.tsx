import type { Translation } from './en.tsx';

const ig: Translation = {
    static: {
        index_lang: 'ig',
        index_dir: 'ltr',
        index_title: "Image Tool - Ngwaọrụ Ntụgharị Foto Dị Elu",
        index_description: "Nke a bụ ngwá ọrụ ịntanetị efu na nke ọkachamara maka mkpakọ foto, ịhazigharị nha, na ntụgharị ụdị. Ọ na-akwado ntụgharị n'etiti JPG, PNG, WebP, na AVIF, ma nwee ike ịtụgharị HEIC gaa n'ụdị ndị a. A na-eme nhazi niile na ihe nchọgharị gị — anaghị ebugo faịlụ gị na sava ma ọlị, na-ahụ na nzuzo na nchekwa data gị zuru oke.",
        optionsExplanation: {
            title: "Nduzi Nhọrọ",
            subtitle: "Ghọta ọrụ na ojiji nke nhọrọ ọ bụla iji nweta nsonaazụ ntụgharị foto kacha mma.",
            options: [
                {
                    id: "quality-option",
                    title: "Ogo Mkpakọ",
                    description: <>
                        <p>Nhọrọ a na-arụ ọrụ naanị mgbe ụdị a na-achọ bụ <strong>JPG</strong>, <strong>WebP (Nwere mfu)</strong>, ma ọ bụ <strong>AVIF (Nwere mfu)</strong>.</p>
                        <p>Ọnụọgụ dị ala na-eme ka faịlụ pere mpe mana ọ na-ebelata ogo foto. A na-atụ aro ka iji <strong>75</strong>, nke na-enye ezigbo nguzozi n'etiti nha faịlụ na ogo ya.</p>
                        <p>Ọ bụrụ na faịlụ ka buru oke ibu mgbe a kpakọchara ya, nwaa ibelata ndoanya ya; nke a na-akakarị arụ ọrụ n'ibelata nha faịlụ.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ndozigharị Ndoanya",
                    description: <>
                        <p>Belata ndoanya foto site na pasentị mana ka ọ nọgide n'ogo mbụ ya. <strong>100%</strong> pụtara idobe nha mbụ.</p>
                        <p>Ibelata ndoanya nwere ike belata nha faịlụ n'ụzọ <strong>pụtara ìhè</strong>. Ọ bụrụ na ịchọghị ndoanya dị elu nke mbụ, nke a bụkarị <strong>ụzọ kacha dị irè</strong> isi mee ka faịlụ pere mpe.</p>
                        <p>Mgbe nhọrọ ndị ọzọ bụ otu, dabere na <strong>ndoanya 100%</strong>. Idozigharị ya na <strong>ndoanya 75%</strong> na-ebelata nha faịlụ ihe dịka <strong>30%</strong>; idozigharị ya na <strong>ndoanya 50%</strong> na-ebelata ya ihe dịka <strong>65%</strong>; na idozigharị ya na <strong>ndoanya 25%</strong> na-ebelata ya ihe dịka <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Ụdị Mmepụta",
                    description: <>
                        <p>Họrọ ụdị mmepụta maka foto ahụ. Ụdị dị iche iche nwere uru na ojiji nke ha.</p>
                        <p><strong>Mkpakọ akpaghị aka</strong>: Nhọrọ a na-eji usoro mkpakọ dabara adaba dabere na ụdị ntinye:</p>
                        <ul>
                            <li>A na-akpakọ ntinye <strong>JPG</strong> dịka <strong>JPG</strong>.</li>
                            <li>A na-akpakọ ntinye <strong>PNG</strong> site na iji usoro <strong>PNG (Nwere mfu)</strong>.</li>
                            <li>A na-akpakọ ntinye <strong>WebP</strong> site na iji usoro <strong>WebP (Nwere mfu)</strong>.</li>
                            <li>A na-akpakọ ntinye <strong>AVIF</strong> site na iji usoro <strong>AVIF (Nwere mfu)</strong>.</li>
                            <li>A na-atụgharị ntinye <strong>HEIC</strong> gaa na <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Ị nwekwara ike iji aka họrọ ụdị dị n'okpuru dabere na mkpa gị. Nke a bụ nkọwa zuru ezu maka nhọrọ ọ bụla:
                        </p>

                        <p>
                            <strong>JPG</strong>: Ụdị foto kachasị ewu ewu, n'agbanyeghị na ọ naghị akwado ihe a na-ahụ anya n'ofe (transparency). O nwere ike belata nha faịlụ ihe ruru <strong>90%</strong> ma e jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>. Na ntọala ogo nke <strong>75</strong>, mfu ogo ya <strong>anaghị ahụ anya</strong>. Ọ bụrụ na ịchọghị ndabere a na-ahụ anya n'ofe <strong>(nke bụ eziokwu maka ọtụtụ foto)</strong>, ịtụgharị gaa na <strong>JPG</strong> na-abụkarị nhọrọ kacha mma.
                        </p>

                        <p>
                            <strong>PNG (Nwere mfu)</strong>: Na-akwado ihe a na-ahụ anya n'ofe na ntakịrị mfu ogo, na-ebelata nha faịlụ ihe ruru <strong>70%</strong> ma e jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>. Họrọ nke a naanị ma ọ bụrụ na ịchọrọ ndabere a na-ahụ anya n'ofe n'ụdị PNG. Ma ọ bụghị ya, <strong>JPG</strong> na-enye <strong>ogo ka mma maka nha pere mpe</strong> (na-enweghị transparency), na <strong>WebP (Nwere mfu)</strong> na-enye <strong>ogo ka mma, nha pere mpe, na transparency</strong>, na-eme ka ọ bụrụ ihe nnọchi ka mma ma ọ bụrụ na achọghị ụdị PNG.
                        </p>

                        <p>
                            <strong>PNG (Enweghị mfu)</strong>: Na-akwado ihe a na-ahụ anya n'ofe na-enweghị mfu ogo. Na-ebelata nha faịlụ ihe ruru <strong>20%</strong> ma e jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>. Otú ọ dị, <strong>ọ bụrụ na ụdị PNG abụghị iwu</strong>, <strong>WebP (Enweghị mfu)</strong> bụ nhọrọ ka mma n'ihi na ọ na-enye nha faịlụ pere mpe.
                        </p>

                        <p>
                            <strong>WebP (Nwere mfu)</strong>: Na-akwado ihe a na-ahụ anya n'ofe na ntakịrị mfu ogo. Na-ebelata nha faịlụ ihe ruru <strong>90%</strong> ma e jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>. Ọ bụ nnọchi dị mma maka <strong>PNG (Nwere mfu)</strong>, na-enye ogo ka mma na nha pere mpe. Mara: A naghị akwado WebP na ụfọdụ ngwaọrụ ochie.
                        </p>

                        <p>
                            <strong>WebP (Enweghị mfu)</strong>: Na-akwado ihe a na-ahụ anya n'ofe na-enweghị mfu ogo. Na-ebelata nha faịlụ ihe ruru <strong>50%</strong> ma e jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>, na-eme ka ọ bụrụ nnọchi ka mma maka <strong>PNG (Enweghị mfu)</strong>. Mara: A naghị akwado WebP na ụfọdụ ngwaọrụ ochie.
                        </p>

                        <p>
                            <strong>AVIF (Nwere mfu)</strong>: Na-akwado ihe a na-ahụ anya n'ofe na ntakịrị mfu ogo. Dị ka onye nọchiri WebP, ọ na-enye ọnụego mkpakọ dị elu karị, na-ebelata nha faịlụ ihe ruru <strong>94%</strong> ma e jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>. Dị ka ụdị ọgbara ọhụrụ, AVIF na-enye ogo dị mma na nha faịlụ dị obere. Agbanyeghị, ndakọrịta ihe nchọgharị na ngwaọrụ ka dị ole na ole. Ụdị a kacha mma maka ndị ọrụ dị elu ma ọ bụ mgbe ị maara n'ezie na ngwaọrụ a na-achọ iji ya na-akwado ya.
                        </p>
                        <p>
                            <strong>AVIF (Enweghị mfu)</strong>: Na-akwado ihe a na-ahụ anya n'ofe na-enweghị mfu ogo. E jiri ya tụnyere <strong>PNG a na-akpakọghị</strong>, mbelata nha faịlụ adịghị ukwuu, na n'ọnọdụ ụfọdụ, nwere ike ịbawanye. Ọ gwụla ma ị nwere mkpa pụrụ iche maka AVIF na-enweghị mfu, <strong>PNG (Enweghị mfu)</strong> ma ọ bụ <strong>WebP (Enweghị mfu)</strong> na-abụkarị nhọrọ ka mma.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Gbanwee Isiokwu"
    },
    interactive: {
        store_imageDeletedNotification: "Ewepụla: {fileName}",
        store_convertingImagesNotification: "Na-atụgharị foto {number}...",
        store_conversionFailedNotification: "Ntụgharị kụrụ afọ n'ala: {fileName}",
        store_unsupportedFileTypeNotification: "Ụdị anaghị akwado, ewepụla: {fileName}",
        store_fileReadErrorNotification: "Enweghị ike ịgụ faịlụ, ewepụla: {fileName}",
        store_reconvertingNotification: "Na-atụgharị ọzọ: {fileName}",
        store_formatOptionAuto: "Mkpakọ akpaghị aka",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Nwere mfu)",
        store_formatOptionPngLossless: "PNG (Enweghị mfu)",
        store_formatOptionWebpLossy: "WebP (Nwere mfu)",
        store_formatOptionWebpLossless: "WebP (Enweghị mfu)",
        store_formatOptionAvifLossy: "AVIF (Nwere mfu)",
        store_formatOptionAvifLossless: "AVIF (Enweghị mfu)",
        previewSection_title: "Nlele na Nbudata",
        previewSection_downloadAllButton: "Budata niile",
        previewSection_deleteAllButton: "Hichapụ niile",
        previewSection_placeholder: "Onweghị foto ọ bụla.",
        previewSection_statusPending: "Na-eche",
        previewSection_statusConverting: "Na-atụgharị...",
        previewSection_statusFailed: "Ntụgharị akụrụ afọ n'ala. Biko megharịa peeji a ma nwaa ọzọ.",
        previewSection_statusCompleted: "Emechara",
        previewSection_noCompletedFilesNotification: "Onweghị foto emechara iji budata.",
        previewSection_downloadStartedNotification: "Na-amalite nbudata faịlụ {fileCount}...",
        previewSection_listEmptyNotification: "Ndepụta a tọgbọrọ n'efu.",
        previewSection_allDeletedNotification: "Ewepụla foto niile.",
        previewSection_zipCreationNotification: "Na-emepụta ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Na-emepụta ZIP: Ụfọdụ foto emechabeghị, a ga-amafere ha.",
        previewSection_zipCreationErrorNotification: "Njehie mere mgbe a na-emepụta ZIP.",
        previewSection_waitConversionNotification: "Biko chere ka ntụgharị gwụ.",
        previewSection_downloadingFileNotification: "Na-ebudata: {fileName}",
        previewSection_originalSizeLabel: "Nha mbụ:",
        previewSection_convertedSizeLabel: "Nha atụgharịrị:",
        previewSection_downloadTitle: "Budata",
        previewSection_previewTitle: "Lelee",
        previewSection_deleteTitle: "Hichapụ",
        previewSection_comparisonTab: "Tụnyere",
        previewSection_settingsTab: "Ntọala",
        previewSection_originalImageLabel: "Foto Mbụ",
        previewSection_completedImageLabel: "Foto Atụgharịrị",
        previewSection_formatLabel: "Ụdị:",
        previewSection_resolutionLabel: "Ndoanya:",
        previewSection_viewLargerButton: "Lelee na Taabụ Ọhụrụ",
        previewSection_qualityLabel: "Ogo Mkpakọ",
        previewSection_sizeLabel: "Ndozigharị Ndoanya",
        previewSection_outputFormatLabel: "Ụdị Mmepụta",
        previewSection_reconvertButton: "Tụgharịa foto a ọzọ",
        globalControls_qualityLabel: "Ogo Mkpakọ Izugbe",
        globalControls_sizeLabel: "Ndozigharị Ndoanya Izugbe",
        globalControls_formatLabel: "Ụdị Mmepụta Izugbe",
        globalControls_reconvertAllButton: "Tinye Ntọala ma Tụgharịa Ha Nile",
        globalControls_restoreDefaultsButton: "Weghachi na Ntọala Mbụ",
        globalControls_noImagesNotification: "Biko buru ụzọ tinye foto.",
        globalControls_reconvertingAllNotification: "Na-atụgharị foto niile ({imageCount}) na ntọala izugbe",
        globalControls_restoredNotification: "Eweghachila nhọrọ na ndabara.",
        addSection_title: "Tinye Foto",
        addArea_dragDropTitle: "Dọrọ ma tụba foto ebe a",
        addArea_supportedFormats: "Na-akwado JPG, PNG, WebP, AVIF, na HEIC",
        addArea_selectButton: "Họrọ Foto",
        addArea_tips: "*Ị nwere ike itinye ọtụtụ foto n'otu oge.",
        ui_viewExplanationTitle: "Mụtakwuo maka nhọrọ ndị a",
    }
};

export default ig;