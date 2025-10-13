import type { Translation } from './en.tsx';

const ms: Translation = {
    static: {
        index_lang: 'ms',
        index_dir: 'ltr',
        index_title: "Image Tool - Alat Penukaran Imej Termaju",
        index_description: "Alat dalam talian yang profesional dan percuma untuk pemampatan imej, perubahan saiz dan penukaran format. Ia menyokong penukaran antara format JPG, PNG, WebP, dan AVIF, serta boleh menukar HEIC kepada format-format ini. Semua pemprosesan berlaku secara setempat dalam pelayar anda — fail anda tidak akan dimuat naik, menjamin privasi dan keselamatan data sepenuhnya.",
        optionsExplanation: {
            title: "Panduan Pilihan",
            subtitle: "Fahami fungsi dan penggunaan setiap pilihan untuk mengoptimumkan hasil penukaran imej anda.",
            options: [
                {
                    id: "quality-option",
                    title: "Kualiti Mampatan",
                    description: <>
                        <p>Pilihan ini hanya terpakai apabila format sasaran ialah <strong>JPG</strong>, <strong>WebP (Dengan Kehilangan)</strong>, atau <strong>AVIF (Dengan Kehilangan)</strong>.</p>
                        <p>Nilai yang lebih rendah menghasilkan fail yang lebih kecil tetapi mengurangkan kualiti imej. Nilai yang disyorkan iaitu <strong>75</strong> menawarkan keseimbangan yang baik antara saiz fail dan kualiti.</p>
                        <p>Jika fail masih terlalu besar selepas pemampatan, cuba kurangkan resolusi, yang selalunya lebih berkesan untuk mengecilkan saiz fail.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Pelarasan Resolusi",
                    description: <>
                        <p>Kurangkan resolusi imej mengikut peratusan sambil mengekalkan nisbah aspek asal. <strong>100%</strong> mengekalkan dimensi asal.</p>
                        <p>Mengurangkan resolusi boleh mengurangkan saiz fail dengan <strong>ketara</strong>. Jika anda tidak memerlukan resolusi tinggi yang asal, ini selalunya <strong>cara yang paling berkesan</strong> untuk mengecilkan fail.</p>
                        <p>Dengan pilihan lain yang sama, berdasarkan <strong>resolusi 100%</strong>. Melaraskan kepada <strong>resolusi 75%</strong> mengurangkan saiz fail secara purata sebanyak <strong>30%</strong>; melaraskan kepada <strong>resolusi 50%</strong> mengurangkannya secara purata sebanyak <strong>65%</strong>; melaraskan kepada <strong>resolusi 25%</strong> mengurangkannya secara purata sebanyak <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Format Output",
                    description: <>
                        <p>Pilih format output untuk imej. Setiap format mempunyai kelebihan dan kegunaan tersendiri.</p>
                        <p><strong>Mampat Auto</strong>: Pilihan ini akan menggunakan strategi pemampatan yang sesuai secara automatik berdasarkan format input:</p>
                        <ul>
                            <li>Input <strong>JPG</strong> dimampatkan sebagai <strong>JPG</strong>.</li>
                            <li>Input <strong>PNG</strong> dimampatkan menggunakan kaedah <strong>PNG (Dengan Kehilangan)</strong>.</li>
                            <li>Input <strong>WebP</strong> dimampatkan menggunakan kaedah <strong>WebP (Dengan Kehilangan)</strong>.</li>
                            <li>Input <strong>AVIF</strong> dimampatkan menggunakan kaedah <strong>AVIF (Dengan Kehilangan)</strong>.</li>
                            <li>Input <strong>HEIC</strong> ditukar kepada <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Anda juga boleh memilih format secara manual di bawah berdasarkan keperluan khusus anda. Berikut ialah panduan terperinci untuk setiap pilihan:
                        </p>

                        <p>
                            <strong>JPG</strong>: Format imej paling popular, walaupun tidak menyokong ketelusan. Berbanding dengan <strong>PNG tidak dimampatkan</strong>, ia boleh mengurangkan saiz fail secara purata sebanyak <strong>90%</strong>. Pada tetapan kualiti <strong>75</strong>, kehilangan kualiti <strong>hampir tidak dapat dilihat</strong>. Jika anda tidak memerlukan latar belakang lutsinar <strong>(yang berlaku untuk kebanyakan foto)</strong>, menukar kepada <strong>JPG</strong> biasanya pilihan terbaik.
                        </p>

                        <p>
                            <strong>PNG (Dengan Kehilangan)</strong>: Menyokong ketelusan dengan sedikit kehilangan kualiti, mengurangkan saiz fail secara purata sebanyak <strong>70%</strong> berbanding <strong>PNG tidak dimampatkan</strong>. Pilih ini hanya jika anda memerlukan latar belakang lutsinar dalam format PNG. Jika tidak, <strong>JPG</strong> menawarkan <strong>kualiti lebih baik untuk saiz yang lebih kecil</strong> (tanpa ketelusan), dan <strong>WebP (Dengan Kehilangan)</strong> menyediakan <strong>kualiti lebih baik, saiz lebih kecil, dan ketelusan</strong>, menjadikannya alternatif yang lebih baik jika format PNG bukan keperluan mutlak.
                        </p>

                        <p>
                            <strong>PNG (Tanpa Kehilangan)</strong>: Menyokong ketelusan tanpa kehilangan kualiti. Mengurangkan saiz fail secara purata sebanyak <strong>20%</strong> berbanding <strong>PNG tidak dimampatkan</strong>. Walau bagaimanapun, <strong>jika format PNG bukan satu kemestian</strong>, <strong>WebP (Tanpa Kehilangan)</strong> adalah pilihan yang lebih baik kerana ia menawarkan saiz fail yang lebih kecil.
                        </p>

                        <p>
                            <strong>WebP (Dengan Kehilangan)</strong>: Menyokong ketelusan dengan sedikit kehilangan kualiti. Mengurangkan saiz fail secara purata sebanyak <strong>90%</strong> berbanding <strong>PNG tidak dimampatkan</strong>. Ia adalah pengganti yang sangat baik untuk <strong>PNG (Dengan Kehilangan)</strong>, menawarkan kualiti yang lebih baik dan saiz yang lebih kecil. Nota: WebP tidak disokong pada sesetengah peranti lama.
                        </p>

                        <p>
                            <strong>WebP (Tanpa Kehilangan)</strong>: Menyokong ketelusan tanpa kehilangan kualiti. Mengurangkan saiz fail secara purata sebanyak <strong>50%</strong> berbanding <strong>PNG tidak dimampatkan</strong>, menjadikannya pengganti yang lebih baik untuk <strong>PNG (Tanpa Kehilangan)</strong>. Nota: WebP tidak disokong pada sesetengah peranti lama.
                        </p>

                        <p>
                            <strong>AVIF (Dengan Kehilangan)</strong>: Menyokong ketelusan dengan sedikit kehilangan kualiti. Sebagai pengganti kepada WebP, ia menawarkan kadar mampatan yang lebih tinggi, mengurangkan saiz fail secara purata sebanyak <strong>94%</strong> berbanding <strong>PNG tidak dimampatkan</strong>. Sebagai format termaju, AVIF memberikan kualiti yang cemerlang pada saiz fail yang sangat kecil. Walau bagaimanapun, keserasian pelayar dan peranti masih terhad. Format ini paling sesuai untuk pengguna termaju atau apabila anda pasti peranti sasaran menyokongnya.
                        </p>
                        <p>
                            <strong>AVIF (Tanpa Kehilangan)</strong>: Menyokong ketelusan tanpa kehilangan kualiti. Berbanding dengan <strong>PNG tidak dimampatkan</strong>, pengurangan saiz fail tidak ketara, dan dalam sesetengah kes, mungkin bertambah. Melainkan anda mempunyai keperluan khusus untuk AVIF tanpa kehilangan, <strong>PNG (Tanpa Kehilangan)</strong> atau <strong>WebP (Tanpa Kehilangan)</strong> secara amnya adalah pilihan yang lebih baik.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Tukar Tema"
    },
    interactive: {
        store_imageDeletedNotification: "Telah dialih keluar: {fileName}",
        store_convertingImagesNotification: "Sedang menukar {number} imej...",
        store_conversionFailedNotification: "Penukaran gagal: {fileName}",
        store_unsupportedFileTypeNotification: "Format tidak disokong, telah dialih keluar: {fileName}",
        store_fileReadErrorNotification: "Gagal membaca fail, telah dialih keluar: {fileName}",
        store_reconvertingNotification: "Menukar semula: {fileName}",
        store_formatOptionAuto: "Mampat Auto",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Dengan Kehilangan)",
        store_formatOptionPngLossless: "PNG (Tanpa Kehilangan)",
        store_formatOptionWebpLossy: "WebP (Dengan Kehilangan)",
        store_formatOptionWebpLossless: "WebP (Tanpa Kehilangan)",
        store_formatOptionAvifLossy: "AVIF (Dengan Kehilangan)",
        store_formatOptionAvifLossless: "AVIF (Tanpa Kehilangan)",
        previewSection_title: "Pratonton dan Muat Turun",
        previewSection_downloadAllButton: "Muat Turun Semua",
        previewSection_deleteAllButton: "Padam Semua",
        previewSection_placeholder: "Tiada imej lagi.",
        previewSection_statusPending: "Menunggu",
        previewSection_statusConverting: "Sedang menukar...",
        previewSection_statusFailed: "Gagal. Sila muat semula halaman dan cuba lagi.",
        previewSection_statusCompleted: "Selesai",
        previewSection_noCompletedFilesNotification: "Tiada imej yang selesai untuk dimuat turun.",
        previewSection_downloadStartedNotification: "Memulakan muat turun untuk {fileCount} fail...",
        previewSection_listEmptyNotification: "Senarai kosong.",
        previewSection_allDeletedNotification: "Semua imej telah dialih keluar.",
        previewSection_zipCreationNotification: "Sedang mencipta ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Sedang mencipta ZIP: Terdapat imej yang belum selesai dan akan dilangkau.",
        previewSection_zipCreationErrorNotification: "Satu ralat telah berlaku semasa mencipta ZIP.",
        previewSection_waitConversionNotification: "Sila tunggu penukaran selesai.",
        previewSection_downloadingFileNotification: "Memuat turun: {fileName}",
        previewSection_originalSizeLabel: "Saiz asal:",
        previewSection_convertedSizeLabel: "Saiz hasil:",
        previewSection_downloadTitle: "Muat Turun",
        previewSection_previewTitle: "Pratonton",
        previewSection_deleteTitle: "Padam",
        previewSection_comparisonTab: "Bandingkan",
        previewSection_settingsTab: "Tetapan",
        previewSection_originalImageLabel: "Imej Asal",
        previewSection_completedImageLabel: "Imej Diproses",
        previewSection_formatLabel: "Format:",
        previewSection_resolutionLabel: "Resolusi:",
        previewSection_viewLargerButton: "Lihat dalam Tab Baharu",
        previewSection_qualityLabel: "Kualiti Mampatan",
        previewSection_sizeLabel: "Pelarasan Resolusi",
        previewSection_outputFormatLabel: "Format Output",
        previewSection_reconvertButton: "Tukar Semula",
        globalControls_qualityLabel: "Kualiti Mampatan Global",
        globalControls_sizeLabel: "Pelarasan Resolusi Global",
        globalControls_formatLabel: "Format Output Global",
        globalControls_reconvertAllButton: "Terapkan & Tukar Semua",
        globalControls_restoreDefaultsButton: "Set Semula Pilihan",
        globalControls_noImagesNotification: "Sila tambah imej dahulu.",
        globalControls_reconvertingAllNotification: "Menukar semula semua {imageCount} imej dengan tetapan global",
        globalControls_restoredNotification: "Pilihan telah diset semula kepada lalai.",
        addSection_title: "Tambah Imej",
        addArea_dragDropTitle: "Seret dan lepas imej di sini",
        addArea_supportedFormats: "Menyokong format JPG, PNG, WebP, AVIF, dan HEIC",
        addArea_selectButton: "Pilih Imej",
        addArea_tips: "*Boleh tambah beberapa imej sekaligus",
        ui_viewExplanationTitle: "Ketahui tentang pilihan ini",
    }
};

export default ms;