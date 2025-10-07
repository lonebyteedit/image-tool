import type { Translation } from './en.tsx';

const tr: Translation = {
    static: {
        index_lang: 'tr',
        index_dir: 'ltr',
        index_title: "Image Tool - Gelişmiş Resim Dönüştürme Aracı",
        index_description: "Resim sıkıştırma, yeniden boyutlandırma ve format dönüştürme için ücretsiz, profesyonel bir çevrimiçi araç. JPG, PNG, WebP ve AVIF arasında karşılıklı dönüşümü destekler ve HEIC formatını bu formatlara dönüştürebilir. Tüm işlemler yerel olarak tarayıcınızda gerçekleşir—dosyalarınız asla sunucuya yüklenmez, bu da tam gizlilik ve veri güvenliği sağlar.",
        optionsExplanation: {
            title: "Seçenekler Kılavuzu",
            subtitle: "Resim dönüştürme sonuçlarınızı optimize etmek için her seçeneğin işlevini ve kullanımını anlayın.",
            options: [
                {
                    id: "quality-option",
                    title: "Sıkıştırma Kalitesi",
                    description: <>
                        <p>Bu seçenek yalnızca hedef format <strong>JPG</strong>, <strong>WebP (Kayıplı)</strong> veya <strong>AVIF (Kayıplı)</strong> olduğunda geçerlidir.</p>
                        <p>Daha düşük bir değer daha küçük bir dosya oluşturur ancak resim kalitesini düşürür. Önerilen <strong>75</strong> değeri, dosya boyutu ve kalite arasında iyi bir denge sunar.</p>
                        <p>Dosya sıkıştırma sonrası hala çok büyükse, çözünürlüğü düşürmeyi deneyin; bu genellikle dosya boyutunu küçültmede daha etkilidir.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Çözünürlük Ayarı",
                    description: <>
                        <p>Orijinal en boy oranını koruyarak resim çözünürlüğünü yüzde olarak azaltın. <strong>%100</strong> orijinal boyutları korur.</p>
                        <p>Çözünürlüğü azaltmak, dosya boyutunu <strong>önemli ölçüde</strong> düşürebilir. Orijinalin yüksek çözünürlüğüne ihtiyacınız yoksa, bu genellikle dosyayı küçültmenin <strong>en etkili yoludur</strong>.</p>
                        <p>Diğer seçenekler aynıyken, <strong>%100 çözünürlük</strong> temel alındığında: <strong>%75'e</strong> ayarlamak dosya boyutunu ortalama <strong>%30</strong> azaltır; <strong>%50'ye</strong> ayarlamak ortalama <strong>%65</strong> azaltır; <strong>%25'e</strong> ayarlamak ise ortalama <strong>%88</strong> azaltır.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Çıktı Formatı",
                    description: <>
                        <p>Resmin çıktı formatını seçin. Farklı formatların kendine özgü avantajları ve kullanım alanları vardır.</p>
                        <p><strong>Otomatik Sıkıştır</strong>: Bu seçenek, girdi formatına göre uygun bir sıkıştırma stratejisi uygular:</p>
                        <ul>
                            <li><strong>JPG</strong> girdileri <strong>JPG</strong> olarak sıkıştırılır.</li>
                            <li><strong>PNG</strong> girdileri <strong>PNG (Kayıplı)</strong> yöntemiyle sıkıştırılır.</li>
                            <li><strong>WebP</strong> girdileri <strong>WebP (Kayıplı)</strong> yöntemiyle sıkıştırılır.</li>
                            <li><strong>AVIF</strong> girdileri <strong>AVIF (Kayıplı)</strong> yöntemiyle sıkıştırılır.</li>
                            <li><strong>HEIC</strong> girdileri <strong>JPG</strong>'ye dönüştürülür.</li>
                        </ul>

                        <p>
                            Ayrıca ihtiyaçlarınıza göre aşağıdan manuel olarak bir format seçebilirsiniz. İşte her seçenek için ayrıntılı bir rehber:
                        </p>

                        <p>
                            <strong>JPG</strong>: En popüler resim formatıdır, ancak şeffaflığı desteklemez. <strong>Sıkıştırılmamış bir PNG</strong>'ye kıyasla dosya boyutunu ortalama <strong>%90</strong> azaltabilir. <strong>75</strong> kalite ayarında kalite kaybı genellikle <strong>fark edilemez</strong>. Şeffaf bir arka plana ihtiyacınız yoksa <strong>(ki çoğu fotoğraf için bu geçerlidir)</strong>, <strong>JPG</strong>'ye dönüştürmek genellikle en iyi seçimdir.
                        </p>

                        <p>
                            <strong>PNG (Kayıplı)</strong>: Bir miktar kalite kaybıyla şeffaflığı destekler, <strong>sıkıştırılmamış bir PNG</strong>'ye kıyasla dosya boyutunu ortalama <strong>%70</strong> azaltır. Yalnızca PNG formatında şeffaf bir arka plana ihtiyacınız varsa bu seçeneği tercih edin. Aksi takdirde, <strong>JPG</strong> <strong>daha küçük boyutta daha iyi kalite</strong> sunar (şeffaflık olmadan) ve <strong>WebP (Kayıplı)</strong> <strong>daha iyi kalite, daha küçük boyut ve şeffaflık</strong> sağlar, bu da PNG formatı katı bir gereklilik değilse onu daha üstün bir alternatif yapar.
                        </p>

                        <p>
                            <strong>PNG (Kayıpsız)</strong>: Kalite kaybı olmadan şeffaflığı destekler. <strong>Sıkıştırılmamış bir PNG</strong>'ye kıyasla dosya boyutunu ortalama <strong>%20</strong> azaltır. Ancak, <strong>PNG formatı katı bir gereklilik değilse</strong>, daha küçük dosya boyutları sunduğu için <strong>WebP (Kayıpsız)</strong> daha iyi bir seçimdir.
                        </p>

                        <p>
                            <strong>WebP (Kayıplı)</strong>: Hafif kalite kaybıyla şeffaflığı destekler. <strong>Sıkıştırılmamış bir PNG</strong>'ye kıyasla dosya boyutunu ortalama <strong>%90</strong> azaltır. Daha iyi kalite ve daha küçük boyutlar sunduğu için <strong>PNG (Kayıplı)</strong>'nin mükemmel bir alternatifidir. Not: WebP bazı eski cihazlarda desteklenmemektedir.
                        </p>

                        <p>
                            <strong>WebP (Kayıpsız)</strong>: Kalite kaybı olmadan şeffaflığı destekler. <strong>Sıkıştırılmamış bir PNG</strong>'ye kıyasla dosya boyutunu ortalama <strong>%50</strong> azaltır, bu da onu <strong>PNG (Kayıpsız)</strong> için daha üstün bir alternatif yapar. Not: WebP bazı eski cihazlarda desteklenmemektedir.
                        </p>

                        <p>
                            <strong>AVIF (Kayıplı)</strong>: Hafif kalite kaybıyla şeffaflığı destekler. WebP'nin halefi olarak, daha da yüksek bir sıkıştırma oranı sunar ve <strong>sıkıştırılmamış PNG</strong>'ye kıyasla dosya boyutunu ortalama <strong>%94</strong> azaltır. En yeni nesil bir format olarak AVIF, çok küçük dosya boyutlarında mükemmel kalite sağlar. Ancak, tarayıcı ve cihaz uyumluluğu hala sınırlıdır. Bu format, en çok ileri düzey kullanıcılar veya hedef cihazların onu desteklediğinden emin olduğunuz durumlar için uygundur.
                        </p>
                        <p>
                            <strong>AVIF (Kayıpsız)</strong>: Kalite kaybı olmadan şeffaflığı destekler. <strong>Sıkıştırılmamış bir PNG</strong>'ye kıyasla dosya boyutu azalması önemli değildir ve bazı durumlarda artabilir bile. Kayıpsız AVIF için özel bir ihtiyacınız olmadıkça, <strong>PNG (Kayıpsız)</strong> veya <strong>WebP (Kayıpsız)</strong> genellikle daha iyi seçeneklerdir.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Temayı Değiştir"
    },
    interactive: {
        store_imageDeletedNotification: "Kaldırıldı: {fileName}",
        store_convertingImagesNotification: "{number} resim dönüştürülüyor...",
        store_conversionFailedNotification: "Dönüştürme başarısız: {fileName}",
        store_unsupportedFileTypeNotification: "Desteklenmeyen format, kaldırıldı: {fileName}",
        store_fileReadErrorNotification: "Dosya okunamadı, kaldırıldı: {fileName}",
        store_reconvertingNotification: "Yeniden dönüştürülüyor: {fileName}",
        store_formatOptionAuto: "Otomatik Sıkıştır",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Kayıplı)",
        store_formatOptionPngLossless: "PNG (Kayıpsız)",
        store_formatOptionWebpLossy: "WebP (Kayıplı)",
        store_formatOptionWebpLossless: "WebP (Kayıpsız)",
        store_formatOptionAvifLossy: "AVIF (Kayıplı)",
        store_formatOptionAvifLossless: "AVIF (Kayıpsız)",
        previewSection_title: "Önizleme ve İndirme",
        previewSection_downloadAllButton: "Tümünü İndir",
        previewSection_deleteAllButton: "Tümünü Sil",
        previewSection_placeholder: "Henüz resim yok.",
        previewSection_statusPending: "Bekliyor",
        previewSection_statusConverting: "Dönüştürülüyor...",
        previewSection_statusFailed: "Başarısız. Lütfen sayfayı yenileyip tekrar deneyin.",
        previewSection_statusCompleted: "Tamamlandı",
        previewSection_noCompletedFilesNotification: "İndirilecek tamamlanmış resim yok.",
        previewSection_downloadStartedNotification: "{fileCount} dosyanın indirilmesi başlatılıyor...",
        previewSection_listEmptyNotification: "Liste boş.",
        previewSection_allDeletedNotification: "Tüm resimler kaldırıldı.",
        previewSection_zipCreationNotification: "ZIP oluşturuluyor...",
        previewSection_zipCreationWithSkipsNotification: "ZIP oluşturuluyor: Bazı resimler henüz tamamlanmadı ve atlanacak.",
        previewSection_zipCreationErrorNotification: "ZIP oluşturulurken bir hata oluştu.",
        previewSection_waitConversionNotification: "Lütfen dönüştürmenin bitmesini bekleyin.",
        previewSection_downloadingFileNotification: "İndiriliyor: {fileName}",
        previewSection_originalSizeLabel: "Orijinal boyut:",
        previewSection_convertedSizeLabel: "Dönüştürülen boyut:",
        previewSection_downloadTitle: "İndir",
        previewSection_previewTitle: "Önizle",
        previewSection_deleteTitle: "Sil",
        previewSection_comparisonTab: "Karşılaştır",
        previewSection_settingsTab: "Ayarlar",
        previewSection_originalImageLabel: "Orijinal Resim",
        previewSection_completedImageLabel: "Dönüştürülen Resim",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Çözünürlük:",
        previewSection_viewLargerButton: "Yeni Sekmede Görüntüle",
        previewSection_qualityLabel: "Sıkıştırma Kalitesi",
        previewSection_sizeLabel: "Çözünürlük Ayarı",
        previewSection_outputFormatLabel: "Çıktı Formatı",
        previewSection_reconvertButton: "Yeniden Dönüştür",
        globalControls_qualityLabel: "Genel Sıkıştırma Kalitesi",
        globalControls_sizeLabel: "Genel Çözünürlük Ayarı",
        globalControls_formatLabel: "Genel Çıktı Formatı",
        globalControls_reconvertAllButton: "Tümüne Uygula ve Dönüştür",
        globalControls_restoreDefaultsButton: "Ayarları Sıfırla",
        globalControls_noImagesNotification: "Lütfen önce resim ekleyin.",
        globalControls_reconvertingAllNotification: "Tüm {imageCount} resim genel ayarlarla yeniden dönüştürülüyor",
        globalControls_restoredNotification: "Seçenekler varsayılana sıfırlandı.",
        addSection_title: "Resim Ekle",
        addArea_dragDropTitle: "Resimleri buraya sürükleyip bırakın",
        addArea_supportedFormats: "Desteklenen formatlar: JPG, PNG, WebP, AVIF ve HEIC",
        addArea_selectButton: "Resim Seç",
        addArea_tips: "*Aynı anda birden fazla resim ekleyebilirsiniz.",
        ui_viewExplanationTitle: "Bu seçenekler hakkında bilgi edinin",
    }
};

export default tr;