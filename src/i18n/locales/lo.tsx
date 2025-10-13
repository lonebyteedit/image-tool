import type { Translation } from './en.tsx';

const lo: Translation = {
    static: {
        index_lang: 'lo',
        index_dir: 'ltr',
        index_title: "Image Tool - ເຄື່ອງມືປ່ຽນຮູບພາບຂັ້ນສູງ",
        index_description: "ເຄື່ອງມືອອນໄລນ໌ແບບມືອາຊີບ ແລະ ບໍ່ເສຍຄ່າ ສຳລັບການບີບອັດ, ປັບຂະໜາດ, ແລະ ປ່ຽນຮູບແບບຂອງຮູບພາບ. ຮອງຮັບການປ່ຽນແປງລະຫວ່າງ JPG, PNG, WebP, ແລະ AVIF, ແລະ ສາມາດປ່ຽນ HEIC ໄປເປັນຮູບແບບເຫຼົ່ານີ້ໄດ້. ການປະມວນຜົນທັງໝົດເກີດຂຶ້ນໃນບຣາວເຊີຂອງທ່ານ — ໄຟລ໌ຂອງທ່ານຈະບໍ່ຖືກອັບໂຫລດເລີຍ, ເຊິ່ງຮັບປະກັນຄວາມເປັນສ່ວນຕົວ ແລະ ຄວາມປອດໄພຂອງຂໍ້ມູນຢ່າງສົມບູນ.",
        optionsExplanation: {
            title: "ຄຳແນະນຳກ່ຽວກັບຕົວເລືອກ",
            subtitle: "ທຳຄວາມເຂົ້າໃຈໜ້າທີ່ ແລະ ການນຳໃຊ້ຂອງແຕ່ລະຕົວເລືອກເພື່ອໃຫ້ໄດ້ຜົນລັບທີ່ດີທີ່ສຸດໃນການປ່ຽນຮູບພາບຂອງທ່ານ.",
            options: [
                {
                    id: "quality-option",
                    title: "ຄຸນນະພາບການບີບອັດ",
                    description: <>
                        <p>ຕົວເລືອກນີ້ມີຜົນສະເພາະເມື່ອຮູບແບບປາຍທາງເປັນ <strong>JPG</strong>, <strong>WebP (ມີການສູນເສຍ)</strong>, ຫຼື <strong>AVIF (ມີການສູນເສຍ)</strong> ເທົ່ານັ້ນ.</p>
                        <p>ຄ່າທີ່ຕ່ຳກວ່າຈະເຮັດໃຫ້ໄຟລ໌ມີຂະໜາດນ້ອຍລົງ ແຕ່ຄຸນນະພາບຂອງຮູບກໍຈະຫຼຸດລົງ. ຄ່າທີ່ແນະນຳແມ່ນ <strong>75</strong> ເຊິ່ງເປັນການດຸ່ນດ່ຽງທີ່ດີລະຫວ່າງຂະໜາດໄຟລ໌ ແລະ ຄຸນນະພາບ.</p>
                        <p>ຖ້າໄຟລ໌ຍັງໃຫຍ່ເກີນໄປຫຼັງຈາກບີບອັດແລ້ວ, ລອງຫຼຸດຄວາມລະອຽດຂອງຮູບລົງ, ເຊິ່ງມັກຈະມີປະສິດທິພາບຫຼາຍກວ່າໃນການຫຼຸດຂະໜາດໄຟລ໌.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "ການປັບຄວາມລະອຽດ",
                    description: <>
                        <p>ຫຼຸດຄວາມລະອຽດຂອງຮູບພາບເປັນເປີເຊັນ ໂດຍຮັກສາອັດຕາສ່ວນເດີມໄວ້. <strong>100%</strong> ໝາຍເຖິງການຮັກສາຂະໜາດເດີມ.</p>
                        <p>ການຫຼຸດຄວາມລະອຽດສາມາດຫຼຸດຂະໜາດໄຟລ໌ໄດ້ຢ່າງ <strong>ຫຼວງຫຼາຍ</strong>. ຖ້າທ່ານບໍ່ຕ້ອງການຄວາມລະອຽດສູງເທົ່າກັບຕົ້ນສະບັບ, ວິທີນີ້ມັກຈະເປັນ <strong>ວິທີທີ່ມີປະສິດທິພາບສູງສຸດ</strong> ໃນການເຮັດໃຫ້ໄຟລ໌ນ້ອຍລົງ.</p>
                        <p>ເມື່ອຕົວເລືອກອື່ນຄືກັນ, ໂດຍອີງໃສ່ <strong>ຄວາມລະອຽດ 100%</strong>. ການປັບເປັນ <strong>75%</strong> ຈະຫຼຸດຂະໜາດໄຟລ໌ໂດຍສະເລ່ຍ <strong>30%</strong>; ການປັບເປັນ <strong>50%</strong> ຈະຫຼຸດລົງໂດຍສະເລ່ຍ <strong>65%</strong>; ແລະ ການປັບເປັນ <strong>25%</strong> ຈະຫຼຸດລົງໂດຍສະເລ່ຍ <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "ຮູບແບບໄຟລ໌ອອກ",
                    description: <>
                        <p>ເລືອກຮູບແບບໄຟລ໌ອອກສຳລັບຮູບພາບ. ຮູບແບບທີ່ແຕກຕ່າງກັນມີຂໍ້ດີ ແລະ ກໍລະນີການນຳໃຊ້ທີ່ຕ່າງກັນ.</p>
                        <p><strong>ບີບອັດອັດຕະໂນມັດ</strong>: ຕົວເລືອກນີ້ຈະນຳໃຊ້ກົນລະຍຸດການບີບອັດທີ່ເໝາະສົມໂດຍອີງໃສ່ຮູບແບບໄຟລ໌ເຂົ້າ:</p>
                        <ul>
                            <li>ໄຟລ໌ <strong>JPG</strong> ຈະຖືກບີບອັດເປັນ <strong>JPG</strong>.</li>
                            <li>ໄຟລ໌ <strong>PNG</strong> ຈະຖືກບີບອັດໂດຍໃຊ້ວິທີ <strong>PNG (ມີການສູນເສຍ)</strong>.</li>
                            <li>ໄຟລ໌ <strong>WebP</strong> ຈະຖືກບີບອັດໂດຍໃຊ້ວິທີ <strong>WebP (ມີການສູນເສຍ)</strong>.</li>
                            <li>ໄຟລ໌ <strong>AVIF</strong> ຈະຖືກບີບອັດໂດຍໃຊ້ວິທີ <strong>AVIF (ມີການສູນເສຍ)</strong>.</li>
                            <li>ໄຟລ໌ <strong>HEIC</strong> ຈະຖືກປ່ຽນເປັນ <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            ທ່ານຍັງສາມາດເລືອກຮູບແບບດ້ວຍຕົນເອງຂ້າງລຸ່ມນີ້ຕາມຄວາມຕ້ອງການຂອງທ່ານ. ນີ້ແມ່ນຄຳແນະນຳລະອຽດສຳລັບແຕ່ລະຕົວເລືອກ:
                        </p>

                        <p>
                            <strong>JPG</strong>: ເປັນຮູບແບບຮູບພາບທີ່ນິຍົມທີ່ສຸດ, ເຖິງແມ່ນວ່າຈະບໍ່ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສ. ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>, ມັນສາມາດຫຼຸດຂະໜາດໄຟລ໌ໄດ້ໂດຍສະເລ່ຍ <strong>90%</strong>. ທີ່ຄຸນນະພາບ <strong>75</strong>, ການສູນເສຍຄຸນນະພາບແມ່ນ <strong>ແທບຈະເບິ່ງບໍ່ເຫັນ</strong>. ຖ້າທ່ານບໍ່ຕ້ອງການພື້ນຫຼັງໂປ່ງໃສ <strong>(ເຊິ່ງເປັນກໍລະນີສ່ວນໃຫຍ່ຂອງຮູບຖ່າຍ)</strong>, ການປ່ຽນເປັນ <strong>JPG</strong> ມັກຈະເປັນຕົວເລືອກທີ່ດີທີ່ສຸດ.
                        </p>

                        <p>
                            <strong>PNG (ມີການສູນເສຍ)</strong>: ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສໂດຍມີການສູນເສຍຄຸນນະພາບບາງສ່ວນ, ຫຼຸດຂະໜາດໄຟລ໌ໂດຍສະເລ່ຍ <strong>70%</strong> ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>. ເລືອກຕົວເລືອກນີ້ສະເພາະເມື່ອທ່ານຕ້ອງການພື້ນຫຼັງໂປ່ງໃສໃນຮູບແບບ PNG ເທົ່ານັ້ນ. ຖ້າບໍ່ດັ່ງນັ້ນ, <strong>JPG</strong> ໃຫ້ <strong>ຄຸນນະພາບທີ່ດີກວ່າໃນຂະໜາດທີ່ນ້ອຍກວ່າ</strong> (ບໍ່ມີພື້ນຫຼັງໂປ່ງໃສ), ແລະ <strong>WebP (ມີການສູນເສຍ)</strong> ໃຫ້ <strong>ຄຸນນະພາບດີກວ່າ, ຂະໜາດນ້ອຍກວ່າ, ແລະ ມີພື້ນຫຼັງໂປ່ງໃສ</strong>, ເຮັດໃຫ້ມັນເປັນທາງເລືອກທີ່ເໜືອກວ່າຖ້າບໍ່ຈຳເປັນຕ້ອງໃຊ້ຮູບແບບ PNG.
                        </p>

                        <p>
                            <strong>PNG (ບໍ່ສູນເສຍ)</strong>: ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສໂດຍບໍ່ມີການສູນເສຍຄຸນນະພາບ. ຫຼຸດຂະໜາດໄຟລ໌ໂດຍສະເລ່ຍ <strong>20%</strong> ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>. ແນວໃດກໍຕາມ, <strong>ຖ້າບໍ່ຈຳເປັນຕ້ອງໃຊ້ຮູບແບບ PNG</strong>, <strong>WebP (ບໍ່ສູນເສຍ)</strong> ເປັນຕົວເລືອກທີ່ດີກວ່າ ເພາະມັນໃຫ້ຂະໜາດໄຟລ໌ທີ່ນ້ອຍກວ່າ.
                        </p>

                        <p>
                            <strong>WebP (ມີການສູນເສຍ)</strong>: ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສໂດຍມີການສູນເສຍຄຸນນະພາບບາງສ່ວນ. ຫຼຸດຂະໜາດໄຟລ໌ໂດຍສະເລ່ຍ <strong>90%</strong> ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>. ມັນເປັນຕົວແທນທີ່ດີເລີດສຳລັບ <strong>PNG (ມີການສູນເສຍ)</strong>, ໂດຍໃຫ້ຄຸນນະພາບທີ່ດີກວ່າ ແລະ ຂະໜາດທີ່ນ້ອຍກວ່າ. ໝາຍເຫດ: WebP ບໍ່ຮອງຮັບໃນອຸປະກອນເກົ່າບາງລຸ້ນ.
                        </p>

                        <p>
                            <strong>WebP (ບໍ່ສູນເສຍ)</strong>: ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສໂດຍບໍ່ມີການສູນເສຍຄຸນນະພາບ. ຫຼຸດຂະໜາດໄຟລ໌ໂດຍສະເລ່ຍ <strong>50%</strong> ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>, ເຮັດໃຫ້ມັນເປັນຕົວແທນທີ່ເໜືອກວ່າສຳລັບ <strong>PNG (ບໍ່ສູນເສຍ)</strong>. ໝາຍເຫດ: WebP ບໍ່ຮອງຮັບໃນອຸປະກອນເກົ່າບາງລຸ້ນ.
                        </p>

                        <p>
                            <strong>AVIF (ມີການສູນເສຍ)</strong>: ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສໂດຍມີການສູນເສຍຄຸນນະພາບບາງສ່ວນ. ໃນຖານະຜູ້ສືບທອດຂອງ WebP, ມັນມີອັດຕາການບີບອັດທີ່ສູງກວ່າ, ຫຼຸດຂະໜາດໄຟລ໌ໂດຍສະເລ່ຍ <strong>94%</strong> ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>. ໃນຖານະທີ່ເປັນຮູບແບບທີ່ທັນສະໄໝ, AVIF ໃຫ້ຄຸນນະພາບທີ່ດີເລີດໃນຂະໜາດໄຟລ໌ທີ່ນ້ອຍຫຼາຍ. ແນວໃດກໍຕາມ, ການຮອງຮັບໃນບຣາວເຊີ ແລະ ອຸປະກອນຍັງມີຈຳກັດ. ຮູບແບບນີ້ເໝາະສົມທີ່ສຸດສຳລັບຜູ້ໃຊ້ຂັ້ນສູງ ຫຼື ເມື່ອທ່ານແນ່ໃຈວ່າອຸປະກອນປາຍທາງຮອງຮັບມັນ.
                        </p>
                        <p>
                            <strong>AVIF (ບໍ່ສູນເສຍ)</strong>: ຮອງຮັບພື້ນຫຼັງໂປ່ງໃສໂດຍບໍ່ມີການສູນເສຍຄຸນນະພາບ. ເມື່ອທຽບກັບ <strong>PNG ທີ່ບໍ່ໄດ້ບີບອັດ</strong>, ການຫຼຸດຂະໜາດໄຟລ໌ແມ່ນບໍ່ເຫັນຜົນຊັດເຈນ, ແລະ ໃນບາງກໍລະນີອາດຈະໃຫຍ່ຂຶ້ນ. ຍົກເວັ້ນແຕ່ທ່ານມີຄວາມຕ້ອງການສະເພາະ, <strong>PNG (ບໍ່ສູນເສຍ)</strong> ຫຼື <strong>WebP (ບໍ່ສູນເສຍ)</strong> ໂດຍທົ່ວໄປແລ້ວເປັນຕົວເລືອກທີ່ດີກວ່າ.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "ປ່ຽນທີມ"
    },
    interactive: {
        store_imageDeletedNotification: "ລຶບແລ້ວ: {fileName}",
        store_convertingImagesNotification: "ກຳລັງປ່ຽນ {number} ຮູບພາບ...",
        store_conversionFailedNotification: "ການປ່ຽນລົ້ມເຫຼວ: {fileName}",
        store_unsupportedFileTypeNotification: "ບໍ່ຮອງຮັບຮູບແບບນີ້, ລຶບອອກແລ້ວ: {fileName}",
        store_fileReadErrorNotification: "ບໍ່ສາມາດອ່ານໄຟລ໌ໄດ້, ລຶບອອກແລ້ວ: {fileName}",
        store_reconvertingNotification: "ກຳລັງປ່ຽນໃໝ່: {fileName}",
        store_formatOptionAuto: "ບີບອັດອັດຕະໂນມັດ",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (ມີການສູນເສຍ)",
        store_formatOptionPngLossless: "PNG (ບໍ່ສູນເສຍ)",
        store_formatOptionWebpLossy: "WebP (ມີການສູນເສຍ)",
        store_formatOptionWebpLossless: "WebP (ບໍ່ສູນເສຍ)",
        store_formatOptionAvifLossy: "AVIF (ມີການສູນເສຍ)",
        store_formatOptionAvifLossless: "AVIF (ບໍ່ສູນເສຍ)",
        previewSection_title: "ເບິ່ງຕົວຢ່າງ ແລະ ດາວໂຫລດ",
        previewSection_downloadAllButton: "ດາວໂຫລດທັງໝົດ",
        previewSection_deleteAllButton: "ລຶບທັງໝົດ",
        previewSection_placeholder: "ຍັງບໍ່ມີຮູບພາບ.",
        previewSection_statusPending: "ລໍຖ້າ",
        previewSection_statusConverting: "ກຳລັງປ່ຽນ...",
        previewSection_statusFailed: "ລົ້ມເຫຼວ. ກະລຸນາໂຫຼດໜ້າເວັບໃໝ່ ແລະ ລອງອີກຄັ້ງ.",
        previewSection_statusCompleted: "ສຳເລັດ",
        previewSection_noCompletedFilesNotification: "ບໍ່ມີຮູບພາບທີ່ປ່ຽນສຳເລັດໃຫ້ດາວໂຫລດ.",
        previewSection_downloadStartedNotification: "ກຳລັງເລີ່ມດາວໂຫລດ {fileCount} ໄຟລ໌...",
        previewSection_listEmptyNotification: "ລາຍການວ່າງເປົ່າ.",
        previewSection_allDeletedNotification: "ຮູບພາບທັງໝົດຖືກລຶບແລ້ວ.",
        previewSection_zipCreationNotification: "ກຳລັງສ້າງ ZIP...",
        previewSection_zipCreationWithSkipsNotification: "ກຳລັງສ້າງ ZIP: ມີຮູບພາບທີ່ຍັງບໍ່ສຳເລັດ, ຈະຖືກຂ້າມໄປ.",
        previewSection_zipCreationErrorNotification: "ເກີດຂໍ້ຜິດພາດໃນການສ້າງ ZIP.",
        previewSection_waitConversionNotification: "ກະລຸນາລໍຖ້າໃຫ້ການປ່ຽນສຳເລັດ.",
        previewSection_downloadingFileNotification: "ກຳລັງດາວໂຫລດ: {fileName}",
        previewSection_originalSizeLabel: "ຂະໜາດເດີມ:",
        previewSection_convertedSizeLabel: "ຂະໜາດໃໝ່:",
        previewSection_downloadTitle: "ດາວໂຫລດ",
        previewSection_previewTitle: "ເບິ່ງຕົວຢ່າງ",
        previewSection_deleteTitle: "ລຶບ",
        previewSection_comparisonTab: "ສົມທຽບ",
        previewSection_settingsTab: "ຕັ້ງຄ່າ",
        previewSection_originalImageLabel: "ຮູບຕົ້ນສະບັບ",
        previewSection_completedImageLabel: "ຮູບທີ່ປ່ຽນແລ້ວ",
        previewSection_formatLabel: "ຮູບແບບ:",
        previewSection_resolutionLabel: "ຄວາມລະອຽດ:",
        previewSection_viewLargerButton: "ເບິ່ງໃນແຖບໃໝ່",
        previewSection_qualityLabel: "ຄຸນນະພາບການບີບອັດ",
        previewSection_sizeLabel: "ການປັບຄວາມລະອຽດ",
        previewSection_outputFormatLabel: "ຮູບແບບໄຟລ໌ອອກ",
        previewSection_reconvertButton: "ປ່ຽນຮູບນີ້ໃໝ່",
        globalControls_qualityLabel: "ຄຸນນະພາບການບີບອັດທົ່ວໄປ",
        globalControls_sizeLabel: "ການປັບຄວາມລະອຽດທົ່ວໄປ",
        globalControls_formatLabel: "ຮູບແບບໄຟລ໌ອອກທົ່ວໄປ",
        globalControls_reconvertAllButton: "ນຳໃຊ້ ແລະ ປ່ຽນທັງໝົດ",
        globalControls_restoreDefaultsButton: "ຣີເຊັດການຕັ້ງຄ່າ",
        globalControls_noImagesNotification: "ກະລຸນາເພີ່ມຮູບພາບກ່ອນ.",
        globalControls_reconvertingAllNotification: "ກຳລັງປ່ຽນຮູບພາບທັງໝົດ {imageCount} ຮູບດ້ວຍການຕັ້ງຄ່າທົ່ວໄປ",
        globalControls_restoredNotification: "ການຕັ້ງຄ່າຖືກຣີເຊັດເປັນຄ່າເລີ່ມຕົ້ນແລ້ວ.",
        addSection_title: "ເພີ່ມຮູບພາບ",
        addArea_dragDropTitle: "ລາກ ແລະ ວາງຮູບພາບໃສ່ບ່ອນນີ້",
        addArea_supportedFormats: "ຮອງຮັບ: JPG, PNG, WebP, AVIF, ແລະ HEIC",
        addArea_selectButton: "ເລືອກຮູບພາບ",
        addArea_tips: "*ເພີ່ມໄດ້ຫຼາຍຮູບພ້ອມກັນ",
        ui_viewExplanationTitle: "ຮຽນຮູ້ກ່ຽວກັບຕົວເລືອກເຫຼົ່ານີ້",
    }
};

export default lo;