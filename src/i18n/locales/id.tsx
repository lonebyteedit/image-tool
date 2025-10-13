import type { Translation } from './en.tsx';

const id: Translation = {
    static: {
        index_lang: 'id',
        index_dir: 'ltr',
        index_title: "Image Tool - Alat Konversi Gambar Canggih",
        index_description: "Alat online profesional dan gratis untuk kompresi, pengubahan ukuran, dan konversi format gambar. Mendukung konversi antara JPG, PNG, WebP, dan AVIF, serta dapat mengonversi HEIC ke format-format tersebut. Semua pemrosesan terjadi secara lokal di browser Anda—file Anda tidak akan pernah diunggah, menjamin privasi dan keamanan data sepenuhnya.",
        optionsExplanation: {
            title: "Panduan Opsi",
            subtitle: "Pahami fungsi dan penggunaan setiap opsi untuk mengoptimalkan hasil konversi gambar Anda.",
            options: [
                {
                    id: "quality-option",
                    title: "Kualitas Kompresi",
                    description: <>
                        <p>Opsi ini hanya berlaku jika format tujuan adalah <strong>JPG</strong>, <strong>WebP (Lossy)</strong>, atau <strong>AVIF (Lossy)</strong>.</p>
                        <p>Nilai yang lebih rendah menghasilkan file yang lebih kecil tetapi mengurangi kualitas gambar. Nilai yang disarankan, yaitu <strong>75</strong>, menawarkan keseimbangan yang baik antara ukuran file dan kualitas.</p>
                        <p>Jika file masih terlalu besar setelah kompresi, coba kurangi resolusi, yang seringkali lebih efektif untuk memperkecil ukuran file.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Penyesuaian Resolusi",
                    description: <>
                        <p>Kurangi resolusi gambar berdasarkan persentase sambil mempertahankan rasio aspek asli. <strong>100%</strong> berarti mempertahankan dimensi asli.</p>
                        <p>Mengurangi resolusi dapat <strong>secara signifikan</strong> mengurangi ukuran file. Jika Anda tidak memerlukan resolusi tinggi dari gambar asli, ini seringkali menjadi <strong>cara paling efektif</strong> untuk membuat file lebih kecil.</p>
                        <p>Dengan opsi lain yang sama, berdasarkan <strong>resolusi 100%</strong>. Menyesuaikan ke <strong>resolusi 75%</strong> mengurangi ukuran file rata-rata sebesar <strong>30%</strong>; menyesuaikan ke <strong>resolusi 50%</strong> menguranginya rata-rata sebesar <strong>65%</strong>; dan menyesuaikan ke <strong>resolusi 25%</strong> menguranginya rata-rata sebesar <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Format Output",
                    description: <>
                        <p>Pilih format output untuk gambar. Format yang berbeda memiliki kelebihan dan kasus penggunaan masing-masing.</p>
                        <p><strong>Kompresi Otomatis</strong>: Opsi ini secara otomatis menerapkan strategi kompresi yang sesuai berdasarkan format input:</p>
                        <ul>
                            <li>Input <strong>JPG</strong> akan dikompresi sebagai <strong>JPG</strong>.</li>
                            <li>Input <strong>PNG</strong> akan dikompresi menggunakan metode <strong>PNG (Lossy)</strong>.</li>
                            <li>Input <strong>WebP</strong> akan dikompresi menggunakan metode <strong>WebP (Lossy)</strong>.</li>
                            <li>Input <strong>AVIF</strong> akan dikompresi menggunakan metode <strong>AVIF (Lossy)</strong>.</li>
                            <li>Input <strong>HEIC</strong> akan dikonversi menjadi <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Anda juga dapat memilih format secara manual di bawah ini sesuai dengan kebutuhan spesifik Anda. Berikut adalah panduan terperinci untuk setiap opsi:
                        </p>

                        <p>
                            <strong>JPG</strong>: Format gambar paling populer, meskipun tidak mendukung transparansi. Dibandingkan dengan <strong>PNG tanpa kompresi</strong>, format ini dapat mengurangi ukuran file rata-rata sebesar <strong>90%</strong>. Pada pengaturan kualitas <strong>75</strong>, penurunan kualitas seringkali <strong>hampir tidak terlihat</strong>. Jika Anda tidak memerlukan latar belakang transparan <strong>(yang berlaku untuk sebagian besar foto)</strong>, mengonversi ke <strong>JPG</strong> biasanya merupakan pilihan terbaik.
                        </p>

                        <p>
                            <strong>PNG (Lossy)</strong>: Mendukung transparansi dengan sedikit penurunan kualitas. Mengurangi ukuran file rata-rata sebesar <strong>70%</strong> dibandingkan dengan <strong>PNG tanpa kompresi</strong>. Pilih ini hanya jika Anda memerlukan latar belakang transparan dalam format PNG. Jika tidak, <strong>JPG</strong> menawarkan <strong>kualitas lebih baik dengan ukuran lebih kecil</strong> (tanpa transparansi), dan <strong>WebP (Lossy)</strong> memberikan <strong>kualitas lebih baik, ukuran lebih kecil, dan transparansi</strong>, menjadikannya alternatif yang lebih unggul jika format PNG bukan persyaratan mutlak.
                        </p>

                        <p>
                            <strong>PNG (Lossless)</strong>: Mendukung transparansi tanpa penurunan kualitas. Mengurangi ukuran file rata-rata sebesar <strong>20%</strong> dibandingkan dengan <strong>PNG tanpa kompresi</strong>. Namun, <strong>jika format PNG bukan persyaratan mutlak</strong>, <strong>WebP (Lossless)</strong> adalah pilihan yang lebih baik karena menawarkan ukuran file yang lebih kecil.
                        </p>

                        <p>
                            <strong>WebP (Lossy)</strong>: Mendukung transparansi dengan sedikit penurunan kualitas. Mengurangi ukuran file rata-rata sebesar <strong>90%</strong> dibandingkan dengan <strong>PNG tanpa kompresi</strong>. Ini adalah pengganti yang sangat baik untuk <strong>PNG (Lossy)</strong>, menawarkan kualitas lebih baik dan ukuran lebih kecil. Catatan: WebP tidak didukung di beberapa perangkat lama.
                        </p>

                        <p>
                            <strong>WebP (Lossless)</strong>: Mendukung transparansi tanpa penurunan kualitas. Mengurangi ukuran file rata-rata sebesar <strong>50%</strong> dibandingkan dengan <strong>PNG tanpa kompresi</strong>, menjadikannya pengganti yang lebih unggul untuk <strong>PNG (Lossless)</strong>. Catatan: WebP tidak didukung di beberapa perangkat lama.
                        </p>

                        <p>
                            <strong>AVIF (Lossy)</strong>: Mendukung transparansi dengan sedikit penurunan kualitas. Sebagai penerus WebP, format ini menawarkan tingkat kompresi yang lebih tinggi lagi, mengurangi ukuran file rata-rata sebesar <strong>94%</strong> dibandingkan dengan <strong>PNG tanpa kompresi</strong>. Sebagai format mutakhir, AVIF memberikan kualitas luar biasa dengan ukuran file yang sangat kecil. Namun, kompatibilitas browser dan perangkat masih terbatas. Format ini paling cocok untuk pengguna tingkat lanjut atau ketika Anda yakin perangkat target mendukungnya.
                        </p>
                        <p>
                            <strong>AVIF (Lossless)</strong>: Mendukung transparansi tanpa penurunan kualitas. Dibandingkan dengan <strong>PNG tanpa kompresi</strong>, pengurangan ukuran file tidak signifikan, dan dalam beberapa kasus, bahkan dapat meningkat. Kecuali Anda memiliki kebutuhan spesifik untuk AVIF lossless, <strong>PNG (Lossless)</strong> atau <strong>WebP (Lossless)</strong> umumnya merupakan pilihan yang lebih baik.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Ganti Tema"
    },
    interactive: {
        store_imageDeletedNotification: "Dihapus: {fileName}",
        store_convertingImagesNotification: "Mengonversi {number} gambar...",
        store_conversionFailedNotification: "Konversi gagal: {fileName}",
        store_unsupportedFileTypeNotification: "Format tidak didukung, dihapus: {fileName}",
        store_fileReadErrorNotification: "Tidak dapat membaca file, dihapus: {fileName}",
        store_reconvertingNotification: "Mengonversi ulang: {fileName}",
        store_formatOptionAuto: "Kompresi Otomatis",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Lossy)",
        store_formatOptionPngLossless: "PNG (Lossless)",
        store_formatOptionWebpLossy: "WebP (Lossy)",
        store_formatOptionWebpLossless: "WebP (Lossless)",
        store_formatOptionAvifLossy: "AVIF (Lossy)",
        store_formatOptionAvifLossless: "AVIF (Lossless)",
        previewSection_title: "Pratinjau dan Unduh",
        previewSection_downloadAllButton: "Unduh Semua",
        previewSection_deleteAllButton: "Hapus Semua",
        previewSection_placeholder: "Belum ada gambar.",
        previewSection_statusPending: "Tertunda",
        previewSection_statusConverting: "Mengonversi...",
        previewSection_statusFailed: "Gagal. Harap segarkan halaman dan coba lagi.",
        previewSection_statusCompleted: "Selesai",
        previewSection_noCompletedFilesNotification: "Tidak ada gambar yang selesai dikonversi untuk diunduh.",
        previewSection_downloadStartedNotification: "Mulai mengunduh {fileCount} file...",
        previewSection_listEmptyNotification: "Daftar kosong.",
        previewSection_allDeletedNotification: "Semua gambar telah dihapus.",
        previewSection_zipCreationNotification: "Membuat ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Membuat ZIP: Ada gambar yang belum selesai, akan dilewati.",
        previewSection_zipCreationErrorNotification: "Terjadi kesalahan saat membuat ZIP.",
        previewSection_waitConversionNotification: "Harap tunggu hingga konversi selesai.",
        previewSection_downloadingFileNotification: "Mengunduh: {fileName}",
        previewSection_originalSizeLabel: "Ukuran asli:",
        previewSection_convertedSizeLabel: "Ukuran baru:",
        previewSection_downloadTitle: "Unduh",
        previewSection_previewTitle: "Pratinjau",
        previewSection_deleteTitle: "Hapus",
        previewSection_comparisonTab: "Bandingkan",
        previewSection_settingsTab: "Pengaturan",
        previewSection_originalImageLabel: "Gambar Asli",
        previewSection_completedImageLabel: "Gambar Hasil Konversi",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Resolusi:",
        previewSection_viewLargerButton: "Lihat di Tab Baru",
        previewSection_qualityLabel: "Kualitas Kompresi",
        previewSection_sizeLabel: "Penyesuaian Resolusi",
        previewSection_outputFormatLabel: "Format Output",
        previewSection_reconvertButton: "Konversi Ulang",
        globalControls_qualityLabel: "Kualitas Kompresi Global",
        globalControls_sizeLabel: "Penyesuaian Resolusi Global",
        globalControls_formatLabel: "Format Output Global",
        globalControls_reconvertAllButton: "Terapkan & Konversi Ulang Semua",
        globalControls_restoreDefaultsButton: "Atur Ulang Opsi",
        globalControls_noImagesNotification: "Silakan tambahkan gambar terlebih dahulu.",
        globalControls_reconvertingAllNotification: "Mengonversi ulang semua {imageCount} gambar dengan pengaturan global",
        globalControls_restoredNotification: "Opsi telah direset ke pengaturan default.",
        addSection_title: "Tambah Gambar",
        addArea_dragDropTitle: "Seret dan lepas gambar di sini",
        addArea_supportedFormats: "Mendukung format JPG, PNG, WebP, AVIF, dan HEIC",
        addArea_selectButton: "Pilih Gambar",
        addArea_tips: "*Dapat menambahkan beberapa gambar sekaligus",
        ui_viewExplanationTitle: "Pelajari tentang opsi ini",
    }
};

export default id;