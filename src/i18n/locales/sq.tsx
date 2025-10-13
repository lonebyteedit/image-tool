import type { Translation } from './en.tsx';

const sq: Translation = {
    static: {
        index_lang: 'sq',
        index_dir: 'ltr',
        index_title: "Image Tool - Mjet i avancuar për konvertimin e imazheve",
        index_description: "Një mjet profesional online falas për kompresimin e imazheve, ndryshimin e madhësisë dhe konvertimin e formatit. Ai mbështet konvertimin e ndërsjellë midis JPG, PNG, WebP dhe AVIF, dhe mund të konvertojë HEIC në këto formate. I gjithë përpunimi ndodh lokalisht në shfletuesin tuaj—skedarët tuaj nuk ngarkohen kurrë, duke siguruar privatësi të plotë dhe siguri të të dhënave.",
        optionsExplanation: {
            title: "Udhëzues i opsioneve",
            subtitle: "Kuptoni funksionin dhe përdorimin e çdo opsioni për të optimizuar rezultatet tuaja të konvertimit të imazheve.",
            options: [
                {
                    id: "quality-option",
                    title: "Cilësia e kompresimit",
                    description: <>
                        <p>Ky opsion zbatohet vetëm kur formati i synuar është <strong>JPG</strong>, <strong>WebP (me humbje)</strong>, ose <strong>AVIF (me humbje)</strong>.</p>
                        <p>Një vlerë më e ulët krijon një skedar më të vogël, por ul cilësinë e imazhit. Vlera e rekomanduar prej <strong>75</strong> ofron një ekuilibër të mirë midis madhësisë së skedarit dhe cilësisë.</p>
                        <p>Nëse skedari është ende shumë i madh pas kompresimit, provoni të zvogëloni rezolucionin, gjë që shpesh është më efektive për të zvogëluar madhësinë e skedarit.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Rregullimi i rezolucionit",
                    description: <>
                        <p>Zvogëloni rezolucionin e imazhit me një përqindje duke ruajtur raportin origjinal të pamjes. <strong>100%</strong> ruan dimensionet origjinale.</p>
                        <p>Zvogëlimi i rezolucionit mund të zvogëlojë <strong>ndjeshëm</strong> madhësinë e skedarit. Nëse nuk ju nevojitet rezolucioni i lartë i origjinalit, kjo është shpesh <strong>mënyra më efektive</strong> për ta bërë skedarin më të vogël.</p>
                        <p>Me opsionet e tjera të njëjta, bazuar në <strong>100% rezolucion</strong>. Rregullimi në <strong>75% rezolucion</strong> e zvogëlon madhësinë e skedarit me një mesatare prej <strong>30%</strong>; rregullimi në <strong>50% rezolucion</strong> e zvogëlon atë me një mesatare prej <strong>65%</strong>; rregullimi në <strong>25% rezolucion</strong> e zvogëlon atë me një mesatare prej <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formati i daljes",
                    description: <>
                        <p>Zgjidhni formatin e daljes për imazhin. Formate të ndryshme kanë avantazhet dhe rastet e tyre të përdorimit.</p>
                        <p><strong>Kompresim automatik</strong>: Ky opsion aplikon automatikisht një strategji të përshtatshme kompresimi bazuar në formatin e hyrjes:</p>
                        <ul>
                            <li>Imazhet hyrëse <strong>JPG</strong> kompresohen si <strong>JPG</strong>.</li>
                            <li>Imazhet hyrëse <strong>PNG</strong> kompresohen duke përdorur metodën <strong>PNG (me humbje)</strong>.</li>
                            <li>Imazhet hyrëse <strong>WebP</strong> kompresohen duke përdorur metodën <strong>WebP (me humbje)</strong>.</li>
                            <li>Imazhet hyrëse <strong>AVIF</strong> kompresohen duke përdorur metodën <strong>AVIF (me humbje)</strong>.</li>
                            <li>Imazhet hyrëse <strong>HEIC</strong> konvertohen në <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Ju gjithashtu mund të zgjidhni manualisht një format më poshtë bazuar në nevojat tuaja specifike. Këtu është një udhëzues i detajuar për çdo opsion:
                        </p>

                        <p>
                            <strong>JPG</strong>: Formati më popullor i imazheve, megjithëse nuk mbështet transparencën. Gjatë konvertimit nga një <strong>PNG i pakompresuar</strong>, ai mund të zvogëlojë madhësinë e skedarit me një mesatare prej <strong>90%</strong>. Me një cilësi prej <strong>75</strong>, humbja e cilësisë është shpesh <strong>pothuajse e padukshme</strong>. Nëse nuk ju nevojitet një sfond transparent <strong>(gjë që është e vërtetë për shumicën e fotografive)</strong>, konvertimi në <strong>JPG</strong> është zakonisht zgjidhja më e mirë.
                        </p>

                        <p>
                            <strong>PNG (me humbje)</strong>: Mbështet transparencën me njëfarë humbjeje cilësie, duke zvogëluar madhësinë e skedarit me një mesatare prej <strong>70%</strong> krahasuar me një <strong>PNG të pakompresuar</strong>. Zgjidhni këtë vetëm nëse ju nevojitet një sfond transparent në formatin PNG. Përndryshe, <strong>JPG</strong> ofron <strong>cilësi më të mirë për një madhësi më të vogël</strong> (pa transparencë), dhe <strong>WebP (me humbje)</strong> ofron <strong>cilësi më të mirë, madhësi më të vogël dhe transparencë</strong>, duke e bërë atë një alternativë superiore nëse formati PNG nuk është një kërkesë strikte.
                        </p>

                        <p>
                            <strong>PNG (pa humbje)</strong>: Mbështet transparencën pa humbje cilësie. Zvogëlon madhësinë e skedarit me një mesatare prej <strong>20%</strong> krahasuar me një <strong>PNG të pakompresuar</strong>. Megjithatë, <strong>nëse formati PNG nuk është një kërkesë strikte</strong>, <strong>WebP (pa humbje)</strong> është një zgjedhje më e mirë pasi ofron madhësi më të vogla skedarësh.
                        </p>

                        <p>
                            <strong>WebP (me humbje)</strong>: Mbështet transparencën me humbje të lehtë cilësie. Zvogëlon madhësinë e skedarit me një mesatare prej <strong>90%</strong> krahasuar me një <strong>PNG të pakompresuar</strong>. Është një zëvendësim i shkëlqyer për <strong>PNG (me humbje)</strong>, duke ofruar cilësi më të mirë dhe madhësi më të vogla. Shënim: WebP nuk mbështetet në disa pajisje të vjetra.
                        </p>

                        <p>
                            <strong>WebP (pa humbje)</strong>: Mbështet transparencën pa humbje cilësie. Zvogëlon madhësinë e skedarit me një mesatare prej <strong>50%</strong> krahasuar me një <strong>PNG të pakompresuar</strong>, duke e bërë atë një zëvendësim superior për <strong>PNG (pa humbje)</strong>. Shënim: WebP nuk mbështetet në disa pajisje të vjetra.
                        </p>

                        <p>
                            <strong>AVIF (me humbje)</strong>: Mbështet transparencën me humbje të lehtë cilësie. Si pasardhës i WebP, ai ofron një normë kompresimi edhe më të lartë, duke zvogëluar madhësinë e skedarit me një mesatare prej <strong>94%</strong> krahasuar me <strong>PNG të pakompresuar</strong>. Si një format i teknologjisë së fundit, AVIF ofron cilësi të shkëlqyer me madhësi skedarësh shumë të vogla. Megjithatë, pajtueshmëria me shfletuesit dhe pajisjet është ende e kufizuar. Ky format është më i miri për përdoruesit e avancuar ose kur jeni të sigurt që pajisjet e synuara e mbështesin atë.
                        </p>
                        <p>
                            <strong>AVIF (pa humbje)</strong>: Mbështet transparencën pa humbje cilësie. Krahasuar me një <strong>PNG të pakompresuar</strong>, zvogëlimi i madhësisë së skedarit nuk është i rëndësishëm, dhe në disa raste, mund edhe të rritet. Përveç nëse keni një nevojë specifike për AVIF pa humbje, <strong>PNG (pa humbje)</strong> ose <strong>WebP (pa humbje)</strong> janë përgjithësisht opsione më të mira.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Ndrysho temën"
    },
    interactive: {
        store_imageDeletedNotification: "U hoq: {fileName}",
        store_convertingImagesNotification: "Duke konvertuar {number} imazhe...",
        store_conversionFailedNotification: "Konvertimi dështoi: {fileName}",
        store_unsupportedFileTypeNotification: "Format i pambështetur, u hoq: {fileName}",
        store_fileReadErrorNotification: "Skedari nuk mund të lexohej, u hoq: {fileName}",
        store_reconvertingNotification: "Duke rikonvertuar: {fileName}",
        store_formatOptionAuto: "Kompresim automatik",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (me humbje)",
        store_formatOptionPngLossless: "PNG (pa humbje)",
        store_formatOptionWebpLossy: "WebP (me humbje)",
        store_formatOptionWebpLossless: "WebP (pa humbje)",
        store_formatOptionAvifLossy: "AVIF (me humbje)",
        store_formatOptionAvifLossless: "AVIF (pa humbje)",
        previewSection_title: "Paraqitje dhe shkarkim",
        previewSection_downloadAllButton: "Shkarko të gjitha",
        previewSection_deleteAllButton: "Fshi të gjitha",
        previewSection_placeholder: "Nuk ka ende imazhe.",
        previewSection_statusPending: "Në pritje",
        previewSection_statusConverting: "Duke konvertuar...",
        previewSection_statusFailed: "Dështoi. Ju lutem rifreskoni faqen dhe provoni përsëri.",
        previewSection_statusCompleted: "Përfunduar",
        previewSection_noCompletedFilesNotification: "Nuk ka imazhe të përfunduara për t'u shkarkuar.",
        previewSection_downloadStartedNotification: "Po fillon shkarkimi i {fileCount} skedarëve...",
        previewSection_listEmptyNotification: "Lista është bosh.",
        previewSection_allDeletedNotification: "Të gjitha imazhet janë hequr.",
        previewSection_zipCreationNotification: "Duke krijuar ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Duke krijuar ZIP: Disa imazhe janë të papërfunduara dhe do të anashkalohen.",
        previewSection_zipCreationErrorNotification: "Një gabim ndodhi gjatë krijimit të ZIP.",
        previewSection_waitConversionNotification: "Ju lutem prisni që konvertimi të përfundojë.",
        previewSection_downloadingFileNotification: "Duke shkarkuar: {fileName}",
        previewSection_originalSizeLabel: "Madhësia origjinale:",
        previewSection_convertedSizeLabel: "Madhësia e konvertuar:",
        previewSection_downloadTitle: "Shkarko",
        previewSection_previewTitle: "Paraqit",
        previewSection_deleteTitle: "Fshi",
        previewSection_comparisonTab: "Krahaso",
        previewSection_settingsTab: "Cilësimet",
        previewSection_originalImageLabel: "Imazhi origjinal",
        previewSection_completedImageLabel: "Imazhi i konvertuar",
        previewSection_formatLabel: "Formati:",
        previewSection_resolutionLabel: "Rezolucioni:",
        previewSection_viewLargerButton: "Shiko në një skedë të re",
        previewSection_qualityLabel: "Cilësia e kompresimit",
        previewSection_sizeLabel: "Rregullimi i rezolucionit",
        previewSection_outputFormatLabel: "Formati i daljes",
        previewSection_reconvertButton: "Rikonverto këtë imazh",
        globalControls_qualityLabel: "Cilësia globale e kompresimit",
        globalControls_sizeLabel: "Rregullimi global i rezolucionit",
        globalControls_formatLabel: "Formati global i daljes",
        globalControls_reconvertAllButton: "Apliko dhe rikonverto të gjitha",
        globalControls_restoreDefaultsButton: "Rivendos cilësimet fillestare",
        globalControls_noImagesNotification: "Ju lutem shtoni imazhe fillimisht.",
        globalControls_reconvertingAllNotification: "Duke rikonvertuar të gjitha {imageCount} imazhet me cilësimet globale",
        globalControls_restoredNotification: "Opsionet janë rivendosur në vlerat e paracaktuara.",
        addSection_title: "Shto imazhe",
        addArea_dragDropTitle: "Zvarrit dhe lësho imazhet këtu",
        addArea_supportedFormats: "Mbështet formatet JPG, PNG, WebP, AVIF dhe HEIC",
        addArea_selectButton: "Zgjidh imazhe",
        addArea_tips: "*Mund të shtoni disa imazhe njëherësh",
        ui_viewExplanationTitle: "Mësoni rreth këtyre opsioneve",
    }
};

export default sq;