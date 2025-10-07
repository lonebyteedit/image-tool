import type { Translation } from './en.tsx';

const th: Translation = {
    static: {
        index_lang: 'th',
        index_dir: 'ltr',
        index_title: "Image Tool - เครื่องมือแปลงรูปภาพขั้นสูง",
        index_description: "เครื่องมือออนไลน์ระดับมืออาชีพที่ให้บริการฟรี สำหรับการบีบอัด ปรับขนาด และแปลงรูปแบบไฟล์รูปภาพ รองรับการแปลงไฟล์ระหว่าง JPG, PNG, WebP และ AVIF และสามารถแปลงไฟล์ HEIC เป็นรูปแบบเหล่านี้ได้ การประมวลผลทั้งหมดเกิดขึ้นบนเบราว์เซอร์ของคุณ ไฟล์ของคุณจะไม่ถูกอัปโหลดไปยังเซิร์ฟเวอร์ใดๆ รับประกันความเป็นส่วนตัวและความปลอดภัยของข้อมูลอย่างสมบูรณ์",
        optionsExplanation: {
            title: "คู่มือการตั้งค่า",
            subtitle: "ทำความเข้าใจหน้าที่และการใช้งานของแต่ละตัวเลือก เพื่อให้ได้ผลลัพธ์การแปลงรูปภาพที่ดีที่สุด",
            options: [
                {
                    id: "quality-option",
                    title: "คุณภาพการบีบอัด",
                    description: <>
                        <p>ตัวเลือกนี้ใช้ได้เฉพาะเมื่อรูปแบบไฟล์ผลลัพธ์เป็น <strong>JPG</strong>, <strong>WebP (สูญเสียข้อมูล)</strong> หรือ <strong>AVIF (สูญเสียข้อมูล)</strong> เท่านั้น</p>
                        <p>ค่ายิ่งน้อย ไฟล์ยิ่งมีขนาดเล็กลง แต่คุณภาพของภาพก็จะลดลง ค่าที่แนะนำคือ <strong>75</strong> ซึ่งให้ความสมดุลที่ดีระหว่างขนาดไฟล์และคุณภาพ</p>
                        <p>หากไฟล์ยังคงใหญ่เกินไป ลองลดความละเอียดของภาพ ซึ่งมักจะมีประสิทธิภาพมากกว่าในการลดขนาดไฟล์</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "การปรับความละเอียด",
                    description: <>
                        <p>ลดความละเอียดของภาพเป็นเปอร์เซ็นต์ โดยยังคงสัดส่วนเดิมไว้ <strong>100%</strong> คือการคงขนาดเดิม</p>
                        <p>การลดความละเอียดสามารถลดขนาดไฟล์ได้อย่าง<strong>มาก</strong> หากคุณไม่ต้องการความละเอียดสูงเท่าต้นฉบับ นี่คือ<strong>วิธีที่มีประสิทธิภาพที่สุด</strong>ในการลดขนาดไฟล์</p>
                        <p>เมื่อตั้งค่าตัวเลือกอื่นเหมือนกัน โดยอิงจาก<strong>ความละเอียด 100%</strong> การปรับเป็น <strong>75%</strong> จะลดขนาดไฟล์โดยเฉลี่ย <strong>30%</strong>; การปรับเป็น <strong>50%</strong> จะลดขนาดไฟล์โดยเฉลี่ย <strong>65%</strong>; และการปรับเป็น <strong>25%</strong> จะลดขนาดไฟล์โดยเฉลี่ย <strong>88%</strong></p>
                    </>
                },
                {
                    id: "format-option",
                    title: "รูปแบบไฟล์ผลลัพธ์",
                    description: <>
                        <p>เลือกรูปแบบไฟล์ผลลัพธ์สำหรับรูปภาพ แต่ละรูปแบบมีข้อดีและกรณีการใช้งานที่แตกต่างกัน</p>
                        <p><strong>บีบอัดอัตโนมัติ</strong>: ตัวเลือกนี้จะใช้กลยุทธ์การบีบอัดที่เหมาะสมตามรูปแบบไฟล์ต้นฉบับ:</p>
                        <ul>
                            <li>รูปภาพ <strong>JPG</strong> จะถูกบีบอัดเป็น <strong>JPG</strong></li>
                            <li>รูปภาพ <strong>PNG</strong> จะถูกบีบอัดด้วยวิธี <strong>PNG (สูญเสียข้อมูล)</strong></li>
                            <li>รูปภาพ <strong>WebP</strong> จะถูกบีบอัดด้วยวิธี <strong>WebP (สูญเสียข้อมูล)</strong></li>
                            <li>รูปภาพ <strong>AVIF</strong> จะถูกบีบอัดด้วยวิธี <strong>AVIF (สูญเสียข้อมูล)</strong></li>
                            <li>รูปภาพ <strong>HEIC</strong> จะถูกแปลงเป็น <strong>JPG</strong></li>
                        </ul>

                        <p>
                            คุณยังสามารถเลือกรูปแบบไฟล์ได้ด้วยตนเองตามความต้องการของคุณ นี่คือคำแนะนำโดยละเอียดสำหรับแต่ละตัวเลือก:
                        </p>

                        <p>
                            <strong>JPG</strong>: รูปแบบไฟล์ภาพที่นิยมที่สุด แต่ไม่รองรับพื้นหลังโปร่งใส เมื่อเทียบกับไฟล์ <strong>PNG ที่ไม่ถูกบีบอัด</strong> สามารถลดขนาดไฟล์ได้โดยเฉลี่ย <strong>90%</strong> ที่คุณภาพ <strong>75</strong> การสูญเสียคุณภาพ<strong>แทบไม่สามารถสังเกตเห็นได้</strong> หากคุณไม่ต้องการพื้นหลังโปร่งใส <strong>(ซึ่งเป็นกรณีส่วนใหญ่สำหรับภาพถ่าย)</strong> การแปลงเป็น <strong>JPG</strong> มักเป็นตัวเลือกที่ดีที่สุด
                        </p>

                        <p>
                            <strong>PNG (สูญเสียข้อมูล)</strong>: รองรับพื้นหลังโปร่งใสโดยมีการสูญเสียคุณภาพเล็กน้อย ลดขนาดไฟล์ได้โดยเฉลี่ย <strong>70%</strong> เมื่อเทียบกับ <strong>PNG ที่ไม่ถูกบีบอัด</strong> ควรเลือกใช้เมื่อคุณต้องการพื้นหลังโปร่งใสในรูปแบบ PNG เท่านั้น มิฉะนั้น <strong>JPG</strong> ให้<strong>คุณภาพที่ดีกว่าในขนาดที่เล็กกว่า</strong> (แต่ไม่มีพื้นหลังโปร่งใส) และ <strong>WebP (สูญเสียข้อมูล)</strong> ให้<strong>คุณภาพดีกว่า ขนาดเล็กกว่า และมีพื้นหลังโปร่งใส</strong> ทำให้เป็นทางเลือกที่ดีกว่าหากไม่จำเป็นต้องใช้ไฟล์ PNG
                        </p>

                        <p>
                            <strong>PNG (ไม่สูญเสียข้อมูล)</strong>: รองรับพื้นหลังโปร่งใสโดยไม่มีการสูญเสียคุณภาพ ลดขนาดไฟล์ได้โดยเฉลี่ย <strong>20%</strong> เมื่อเทียบกับ <strong>PNG ที่ไม่ถูกบีบอัด</strong> อย่างไรก็ตาม <strong>หากไม่จำเป็นต้องใช้ไฟล์ PNG</strong> <strong>WebP (ไม่สูญเสียข้อมูล)</strong> เป็นตัวเลือกที่ดีกว่าเนื่องจากให้ไฟล์ขนาดเล็กกว่า
                        </p>

                        <p>
                            <strong>WebP (สูญเสียข้อมูล)</strong>: รองรับพื้นหลังโปร่งใสโดยมีการสูญเสียคุณภาพเล็กน้อย ลดขนาดไฟล์ได้โดยเฉลี่ย <strong>90%</strong> เมื่อเทียบกับ <strong>PNG ที่ไม่ถูกบีบอัด</strong> เป็นทางเลือกที่ยอดเยี่ยมแทน <strong>PNG (สูญเสียข้อมูล)</strong> โดยให้คุณภาพที่ดีกว่าและขนาดไฟล์ที่เล็กกว่า หมายเหตุ: WebP ไม่รองรับบนอุปกรณ์รุ่นเก่าบางรุ่น
                        </p>

                        <p>
                            <strong>WebP (ไม่สูญเสียข้อมูล)</strong>: รองรับพื้นหลังโปร่งใสโดยไม่มีการสูญเสียคุณภาพ ลดขนาดไฟล์ได้โดยเฉลี่ย <strong>50%</strong> เมื่อเทียบกับ <strong>PNG ที่ไม่ถูกบีบอัด</strong> ทำให้เป็นทางเลือกที่ดีกว่า <strong>PNG (ไม่สูญเสียข้อมูล)</strong> หมายเหตุ: WebP ไม่รองรับบนอุปกรณ์รุ่นเก่าบางรุ่น
                        </p>

                        <p>
                            <strong>AVIF (สูญเสียข้อมูล)</strong>: รองรับพื้นหลังโปร่งใสโดยมีการสูญเสียคุณภาพเล็กน้อย ในฐานะผู้สืบทอดของ WebP มันมีอัตราการบีบอัดที่สูงกว่า โดยลดขนาดไฟล์ได้โดยเฉลี่ย <strong>94%</strong> เมื่อเทียบกับ <strong>PNG ที่ไม่ถูกบีบอัด</strong> AVIF เป็นรูปแบบไฟล์ที่ล้ำสมัย ให้คุณภาพยอดเยี่ยมในขนาดไฟล์ที่เล็กมาก อย่างไรก็ตาม ความเข้ากันได้กับเบราว์เซอร์และอุปกรณ์ยังคงมีจำกัด เหมาะสำหรับผู้ใช้ขั้นสูงหรือเมื่อคุณแน่ใจว่าอุปกรณ์เป้าหมายรองรับ
                        </p>
                        <p>
                            <strong>AVIF (ไม่สูญเสียข้อมูล)</strong>: รองรับพื้นหลังโปร่งใสโดยไม่มีการสูญเสียคุณภาพ เมื่อเทียบกับ <strong>PNG ที่ไม่ถูกบีบอัด</strong> การลดขนาดไฟล์ไม่มากนัก และในบางกรณีอาจเพิ่มขึ้นด้วยซ้ำ หากไม่มีความต้องการเฉพาะ <strong>PNG (ไม่สูญเสียข้อมูล)</strong> หรือ <strong>WebP (ไม่สูญเสียข้อมูล)</strong> โดยทั่วไปเป็นตัวเลือกที่ดีกว่า
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "สลับธีม"
    },
    interactive: {
        store_imageDeletedNotification: "ลบแล้ว: {fileName}",
        store_convertingImagesNotification: "กำลังแปลง {number} รูปภาพ...",
        store_conversionFailedNotification: "การแปลงล้มเหลว: {fileName}",
        store_unsupportedFileTypeNotification: "ไม่รองรับรูปแบบไฟล์นี้ ถูกลบออกแล้ว: {fileName}",
        store_fileReadErrorNotification: "ไม่สามารถอ่านไฟล์ได้ ถูกลบออกแล้ว: {fileName}",
        store_reconvertingNotification: "กำลังแปลงอีกครั้ง: {fileName}",
        store_formatOptionAuto: "บีบอัดอัตโนมัติ",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (สูญเสียข้อมูล)",
        store_formatOptionPngLossless: "PNG (ไม่สูญเสียข้อมูล)",
        store_formatOptionWebpLossy: "WebP (สูญเสียข้อมูล)",
        store_formatOptionWebpLossless: "WebP (ไม่สูญเสียข้อมูล)",
        store_formatOptionAvifLossy: "AVIF (สูญเสียข้อมูล)",
        store_formatOptionAvifLossless: "AVIF (ไม่สูญเสียข้อมูล)",
        previewSection_title: "ดูตัวอย่างและดาวน์โหลด",
        previewSection_downloadAllButton: "ดาวน์โหลดทั้งหมด",
        previewSection_deleteAllButton: "ลบทั้งหมด",
        previewSection_placeholder: "ยังไม่มีรูปภาพ",
        previewSection_statusPending: "รอดำเนินการ",
        previewSection_statusConverting: "กำลังแปลง...",
        previewSection_statusFailed: "ล้มเหลว กรุณารีเฟรชหน้าแล้วลองอีกครั้ง",
        previewSection_statusCompleted: "เสร็จสมบูรณ์",
        previewSection_noCompletedFilesNotification: "ไม่มีรูปภาพที่แปลงเสร็จแล้วให้ดาวน์โหลด",
        previewSection_downloadStartedNotification: "กำลังเริ่มดาวน์โหลด {fileCount} ไฟล์...",
        previewSection_listEmptyNotification: "รายการว่างเปล่า",
        previewSection_allDeletedNotification: "รูปภาพทั้งหมดถูกลบแล้ว",
        previewSection_zipCreationNotification: "กำลังสร้างไฟล์ ZIP...",
        previewSection_zipCreationWithSkipsNotification: "กำลังสร้างไฟล์ ZIP: รูปภาพบางส่วนยังไม่เสร็จสมบูรณ์ และจะถูกข้ามไป",
        previewSection_zipCreationErrorNotification: "เกิดข้อผิดพลาดขณะสร้างไฟล์ ZIP",
        previewSection_waitConversionNotification: "กรุณารอให้การแปลงเสร็จสิ้น",
        previewSection_downloadingFileNotification: "กำลังดาวน์โหลด: {fileName}",
        previewSection_originalSizeLabel: "ขนาดต้นฉบับ:",
        previewSection_convertedSizeLabel: "ขนาดหลังแปลง:",
        previewSection_downloadTitle: "ดาวน์โหลด",
        previewSection_previewTitle: "ดูตัวอย่าง",
        previewSection_deleteTitle: "ลบ",
        previewSection_comparisonTab: "เปรียบเทียบ",
        previewSection_settingsTab: "ตั้งค่า",
        previewSection_originalImageLabel: "ภาพต้นฉบับ",
        previewSection_completedImageLabel: "ภาพที่แปลงแล้ว",
        previewSection_formatLabel: "รูปแบบ:",
        previewSection_resolutionLabel: "ความละเอียด:",
        previewSection_viewLargerButton: "ดูในแท็บใหม่",
        previewSection_qualityLabel: "คุณภาพการบีบอัด",
        previewSection_sizeLabel: "การปรับความละเอียด",
        previewSection_outputFormatLabel: "รูปแบบไฟล์ผลลัพธ์",
        previewSection_reconvertButton: "แปลงรูปนี้อีกครั้ง",
        globalControls_qualityLabel: "คุณภาพการบีบอัด (ทั้งหมด)",
        globalControls_sizeLabel: "การปรับความละเอียด (ทั้งหมด)",
        globalControls_formatLabel: "รูปแบบไฟล์ผลลัพธ์ (ทั้งหมด)",
        globalControls_reconvertAllButton: "ใช้และแปลงทั้งหมด",
        globalControls_restoreDefaultsButton: "รีเซ็ตการตั้งค่า",
        globalControls_noImagesNotification: "กรุณาเพิ่มรูปภาพก่อน",
        globalControls_reconvertingAllNotification: "กำลังแปลงรูปภาพทั้งหมด {imageCount} รูปอีกครั้งด้วยการตั้งค่าส่วนกลาง",
        globalControls_restoredNotification: "รีเซ็ตตัวเลือกกลับเป็นค่าเริ่มต้นแล้ว",
        addSection_title: "เพิ่มรูปภาพ",
        addArea_dragDropTitle: "ลากและวางรูปภาพที่นี่",
        addArea_supportedFormats: "รองรับ JPG, PNG, WebP, AVIF และ HEIC",
        addArea_selectButton: "เลือกรูปภาพ",
        addArea_tips: "*สามารถเพิ่มรูปภาพได้ครั้งละหลายรูป",
        ui_viewExplanationTitle: "เรียนรู้เกี่ยวกับตัวเลือกเหล่านี้",
    }
};

export default th;