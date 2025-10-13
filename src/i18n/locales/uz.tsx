import type { Translation } from './en.tsx';

const uz: Translation = {
    static: {
        index_lang: 'uz',
        index_dir: 'ltr',
        index_title: "Image Tool - Murakkab rasmlarni konvertatsiya qilish vositasi",
        index_description: "Rasmlarni siqish, o'lchamini o'zgartirish va formatini almashtirish uchun professional, bepul onlayn vosita. JPG, PNG, WebP va AVIF formatlari o'rtasida o'zaro konvertatsiyani qo'llab-quvvatlaydi hamda HEIC formatini ushbu formatlarga o'tkaza oladi. Barcha amallar mahalliy tarzda brauzeringizda bajariladi — fayllaringiz hech qachon serverga yuklanmaydi, bu sizning ma'lumotlaringiz maxfiyligi va xavfsizligini to'liq ta'minlaydi.",
        optionsExplanation: {
            title: "Opsiyalar bo'yicha qo'llanma",
            subtitle: "Rasm konvertatsiya natijalarini optimallashtirish uchun har bir opsiyaning funksiyasi va ishlatilishini tushunib oling.",
            options: [
                {
                    id: "quality-option",
                    title: "Siqish sifati",
                    description: <>
                        <p>Ushbu opsiyaga faqat maqsadli format <strong>JPG</strong>, <strong>WebP (yo'qotishli)</strong> yoki <strong>AVIF (yo'qotishli)</strong> bo'lganda amal qilinadi.</p>
                        <p>Qiymat qanchalik past bo'lsa, fayl hajmi shunchalik kichik bo'ladi, lekin tasvir sifati pasayadi. Tavsiya etilgan <strong>75</strong> qiymati fayl hajmi va sifat o'rtasida yaxshi muvozanatni ta'minlaydi.</p>
                        <p>Agar siqishdan keyin ham fayl hajmi katta bo'lsa, rezolyutsiyani pasaytirishga harakat qiling, bu odatda fayl hajmini kamaytirishda samaraliroq usuldir.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Rezolyutsiyani sozlash",
                    description: <>
                        <p>Rasmning asl nisbatlarini saqlagan holda uning rezolyutsiyasini foizda kamaytiring. <strong>100%</strong> asl o'lchamlarni saqlab qoladi.</p>
                        <p>Rezolyutsiyani pasaytirish fayl hajmini <strong>sezilarli darajada</strong> kamaytirishi mumkin. Agar sizga asl yuqori rezolyutsiya kerak bo'lmasa, bu faylni kichraytirishning <strong>eng samarali usuli</strong> hisoblanadi.</p>
                        <p>Boshqa opsiyalar bir xil bo'lganda, <strong>100% rezolyutsiya</strong> asosida: <strong>75% rezolyutsiyaga</strong> sozlash fayl hajmini o'rtacha <strong>30%</strong> ga kamaytiradi; <strong>50% rezolyutsiyaga</strong> sozlash o'rtacha <strong>65%</strong> ga kamaytiradi; <strong>25% rezolyutsiyaga</strong> sozlash esa o'rtacha <strong>88%</strong> ga kamaytiradi.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Chiqish formati",
                    description: <>
                        <p>Rasm uchun chiqish formatini tanlang. Har bir formatning o'z afzalliklari va qo'llanilish sohalari mavjud.</p>
                        <p><strong>Avtomatik siqish</strong>: Ushbu opsiya kiruvchi fayl formatiga qarab mos siqish strategiyasini avtomatik ravishda qo'llaydi:</p>
                        <ul>
                            <li><strong>JPG</strong> formatidagi rasmlar <strong>JPG</strong> sifatida siqiladi.</li>
                            <li><strong>PNG</strong> formatidagi rasmlar <strong>PNG (yo'qotishli)</strong> usulida siqiladi.</li>
                            <li><strong>WebP</strong> formatidagi rasmlar <strong>WebP (yo'qotishli)</strong> usulida siqiladi.</li>
                            <li><strong>AVIF</strong> formatidagi rasmlar <strong>AVIF (yo'qotishli)</strong> usulida siqiladi.</li>
                            <li><strong>HEIC</strong> formatidagi rasmlar <strong>JPG</strong> formatiga o'tkaziladi.</li>
                        </ul>

                        <p>
                            Shuningdek, o'z ehtiyojlaringizga qarab quyidagi formatlardan birini qo'lda tanlashingiz mumkin. Har bir opsiya uchun batafsil qo'llanma:
                        </p>

                        <p>
                            <strong>JPG</strong>: Eng mashhur rasm formati, ammo shaffoflikni qo'llab-quvvatlamaydi. <strong>Siqilmagan PNG</strong> bilan solishtirganda, fayl hajmini o'rtacha <strong>90%</strong> ga kamaytiradi. Sifat darajasi <strong>75</strong> bo'lganda, sifatdagi yo'qotish deyarli <strong>sezilmaydi</strong>. Agar sizga shaffof fon kerak bo'lmasa <strong>(ko'pchilik fotosuratlar uchun shunday)</strong>, <strong>JPG</strong> formatiga o'tkazish odatda eng yaxshi tanlovdir.
                        </p>

                        <p>
                            <strong>PNG (yo'qotishli)</strong>: Shaffoflikni biroz sifat yo'qotish bilan qo'llab-quvvatlaydi va <strong>siqilmagan PNG</strong> ga nisbatan fayl hajmini o'rtacha <strong>70%</strong> ga kamaytiradi. Faqat PNG formatida shaffof fon kerak bo'lgandagina ushbu formatni tanlang. Aks holda, <strong>JPG</strong> kichikroq hajmda <strong>yaxshiroq sifatni</strong> taklif etadi (shaffofliksiz), <strong>WebP (yo'qotishli)</strong> esa <strong>yaxshiroq sifat, kichikroq hajm va shaffoflikni</strong> ta'minlaydi, bu esa PNG formati qat'iy talab bo'lmasa, uni ajoyib alternativaga aylantiradi.
                        </p>

                        <p>
                            <strong>PNG (yo'qotishsiz)</strong>: Shaffoflikni sifatni yo'qotmasdan qo'llab-quvvatlaydi. <strong>Siqilmagan PNG</strong> ga nisbatan fayl hajmini o'rtacha <strong>20%</strong> ga kamaytiradi. Biroq, <strong>agar PNG formati majburiy bo'lmasa</strong>, <strong>WebP (yo'qotishsiz)</strong> kichikroq fayl hajmini taklif qilgani uchun yaxshiroq tanlovdir.
                        </p>

                        <p>
                            <strong>WebP (yo'qotishli)</strong>: Shaffoflikni biroz sifat yo'qotish bilan qo'llab-quvvatlaydi. <strong>Siqilmagan PNG</strong> ga nisbatan fayl hajmini o'rtacha <strong>90%</strong> ga kamaytiradi. Bu <strong>PNG (yo'qotishli)</strong> formatiga ajoyib muqobil bo'lib, yaxshiroq sifat va kichikroq hajmni ta'minlaydi. Eslatma: WebP ba'zi eski qurilmalarda qo'llab-quvvatlanmaydi.
                        </p>

                        <p>
                            <strong>WebP (yo'qotishsiz)</strong>: Shaffoflikni sifatni yo'qotmasdan qo'llab-quvvatlaydi. <strong>Siqilmagan PNG</strong> ga nisbatan fayl hajmini o'rtacha <strong>50%</strong> ga kamaytiradi, bu esa uni <strong>PNG (yo'qotishsiz)</strong> formatiga nisbatan yaxshiroq alternativaga aylantiradi. Eslatma: WebP ba'zi eski qurilmalarda qo'llab-quvvatlanmaydi.
                        </p>

                        <p>
                            <strong>AVIF (yo'qotishli)</strong>: Shaffoflikni biroz sifat yo'qotish bilan qo'llab-quvvatlaydi. WebP ning vorisi sifatida u yanada yuqori siqish darajasini taklif etadi va <strong>siqilmagan PNG</strong> ga nisbatan fayl hajmini o'rtacha <strong>94%</strong> ga kamaytiradi. Eng zamonaviy format sifatida AVIF juda kichik fayl hajmida a'lo darajadagi sifatni taqdim etadi. Biroq, brauzer va qurilmalar bilan mosligi hali ham cheklangan. Ushbu format ilg'or foydalanuvchilar yoki maqsadli qurilmalar uni qo'llab-quvvatlashiga amin bo'lganingizda eng yaxshi tanlovdir.
                        </p>
                        <p>
                            <strong>AVIF (yo'qotishsiz)</strong>: Shaffoflikni sifatni yo'qotmasdan qo'llab-quvvatlaydi. <strong>Siqilmagan PNG</strong> bilan solishtirganda, fayl hajmining kamayishi sezilarli emas va ba'zi hollarda hatto ortishi ham mumkin. Agar sizda yo'qotishsiz AVIF uchun maxsus ehtiyoj bo'lmasa, <strong>PNG (yo'qotishsiz)</strong> yoki <strong>WebP (yo'qotishsiz)</strong> odatda yaxshiroq variantlardir.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Mavzuni o'zgartirish"
    },
    interactive: {
        store_imageDeletedNotification: "O'chirildi: {fileName}",
        store_convertingImagesNotification: "{number} ta rasm konvertatsiya qilinmoqda...",
        store_conversionFailedNotification: "Konvertatsiya amalga oshmadi: {fileName}",
        store_unsupportedFileTypeNotification: "Qo'llab-quvvatlanmaydigan format, o'chirildi: {fileName}",
        store_fileReadErrorNotification: "Faylni o'qib bo'lmadi, o'chirildi: {fileName}",
        store_reconvertingNotification: "Qayta konvertatsiya qilinmoqda: {fileName}",
        store_formatOptionAuto: "Avtomatik siqish",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (yo'qotishli)",
        store_formatOptionPngLossless: "PNG (yo'qotishsiz)",
        store_formatOptionWebpLossy: "WebP (yo'qotishli)",
        store_formatOptionWebpLossless: "WebP (yo'qotishsiz)",
        store_formatOptionAvifLossy: "AVIF (yo'qotishli)",
        store_formatOptionAvifLossless: "AVIF (yo'qotishsiz)",
        previewSection_title: "Ko'rib chiqish va yuklab olish",
        previewSection_downloadAllButton: "Barchasini yuklab olish",
        previewSection_deleteAllButton: "Barchasini o'chirish",
        previewSection_placeholder: "Hozircha rasmlar yo'q.",
        previewSection_statusPending: "Kutilmoqda",
        previewSection_statusConverting: "Konvertatsiya qilinmoqda...",
        previewSection_statusFailed: "Xatolik. Iltimos, sahifani yangilab, qayta urunib ko'ring.",
        previewSection_statusCompleted: "Bajarildi",
        previewSection_noCompletedFilesNotification: "Yuklab olish uchun tayyor rasmlar yo'q.",
        previewSection_downloadStartedNotification: "{fileCount} ta faylni yuklab olish boshlanmoqda...",
        previewSection_listEmptyNotification: "Ro'yxat bo'sh.",
        previewSection_allDeletedNotification: "Barcha rasmlar o'chirildi.",
        previewSection_zipCreationNotification: "ZIP yaratilmoqda...",
        previewSection_zipCreationWithSkipsNotification: "ZIP yaratilmoqda: Ba'zi rasmlar tugallanmagan va o'tkazib yuboriladi.",
        previewSection_zipCreationErrorNotification: "ZIP yaratish paytida xatolik yuz berdi.",
        previewSection_waitConversionNotification: "Iltimos, konvertatsiya tugashini kuting.",
        previewSection_downloadingFileNotification: "Yuklab olinmoqda: {fileName}",
        previewSection_originalSizeLabel: "Asl hajmi:",
        previewSection_convertedSizeLabel: "Yangi hajmi:",
        previewSection_downloadTitle: "Yuklab olish",
        previewSection_previewTitle: "Ko'rish",
        previewSection_deleteTitle: "O'chirish",
        previewSection_comparisonTab: "Taqqoslash",
        previewSection_settingsTab: "Sozlamalar",
        previewSection_originalImageLabel: "Asl rasm",
        previewSection_completedImageLabel: "Konvertatsiya qilingan rasm",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Rezolyutsiya:",
        previewSection_viewLargerButton: "Yangi oynada ochish",
        previewSection_qualityLabel: "Siqish sifati",
        previewSection_sizeLabel: "Rezolyutsiyani sozlash",
        previewSection_outputFormatLabel: "Chiqish formati",
        previewSection_reconvertButton: "Qayta konvertatsiya qilish",
        globalControls_qualityLabel: "Umumiy siqish sifati",
        globalControls_sizeLabel: "Umumiy rezolyutsiyani sozlash",
        globalControls_formatLabel: "Umumiy chiqish formati",
        globalControls_reconvertAllButton: "Qo'llash va barchasini konvertatsiya qilish",
        globalControls_restoreDefaultsButton: "Sozlamalarni tiklash",
        globalControls_noImagesNotification: "Iltimos, avval rasm qo'shing.",
        globalControls_reconvertingAllNotification: "Barcha {imageCount} ta rasm umumiy sozlamalar bilan qayta konvertatsiya qilinmoqda",
        globalControls_restoredNotification: "Opsiyalar standart holatiga qaytarildi.",
        addSection_title: "Rasmlarni qo'shish",
        addArea_dragDropTitle: "Rasmlarni shu yerga sudrab olib keling",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF va HEIC formatlari qo'llab-quvvatlanadi",
        addArea_selectButton: "Rasmlarni tanlash",
        addArea_tips: "*Bir vaqtda bir nechta rasm qo'shish mumkin",
        ui_viewExplanationTitle: "Ushbu opsiyalar haqida bilib oling",
    }
};

export default uz;