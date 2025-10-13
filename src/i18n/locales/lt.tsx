import type { Translation } from './en.tsx';

const lt: Translation = {
    static: {
        index_lang: 'lt',
        index_dir: 'ltr',
        index_title: "Image Tool - Išplėstinis vaizdų konvertavimo įrankis",
        index_description: "Nemokamas, profesionalus internetinis įrankis, skirtas vaizdų glaudinimui, dydžio keitimui ir formato konvertavimui. Jis palaiko abipusį konvertavimą tarp JPG, PNG, WebP ir AVIF formatų bei gali konvertuoti HEIC į šiuos formatus. Visas apdorojimas vyksta jūsų naršyklėje – jūsų failai niekada nėra įkeliami į serverį, taip užtikrinant visišką privatumą ir duomenų saugumą.",
        optionsExplanation: {
            title: "Parinkčių gidas",
            subtitle: "Supraskite kiekvienos parinkties funkciją ir naudojimą, kad optimizuotumėte savo vaizdų konvertavimo rezultatus.",
            options: [
                {
                    id: "quality-option",
                    title: "Glaudinimo kokybė",
                    description: <>
                        <p>Ši parinktis taikoma tik tada, kai galutinis formatas yra <strong>JPG</strong>, <strong>WebP (su praradimais)</strong> arba <strong>AVIF (su praradimais)</strong>.</p>
                        <p>Mažesnė vertė sukuria mažesnį failą, bet sumažina vaizdo kokybę. Rekomenduojama <strong>75</strong> vertė suteikia gerą pusiausvyrą tarp failo dydžio ir kokybės.</p>
                        <p>Jei failas po glaudinimo vis dar per didelis, pabandykite sumažinti raišką – tai dažnai yra efektyvesnis būdas sumažinti failo dydį.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Raiškos koregavimas",
                    description: <>
                        <p>Sumažinkite vaizdo raišką procentais, išlaikydami originalų kraštinių santykį. <strong>100%</strong> išsaugo originalius matmenis.</p>
                        <p>Sumažinus raišką, galima <strong>ženkliai</strong> sumažinti failo dydį. Jei jums nereikia originalios aukštos raiškos, tai dažnai yra <strong>efektyviausias būdas</strong> failui sumažinti.</p>
                        <p>Esant toms pačioms kitoms parinktims ir remiantis <strong>100% raiška</strong>. Pakeitus į <strong>75% raišką</strong>, failo dydis sumažėja vidutiniškai <strong>30%</strong>; pakeitus į <strong>50% raišką</strong>, sumažėja vidutiniškai <strong>65%</strong>; o pakeitus į <strong>25% raišką</strong>, sumažėja vidutiniškai <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Išvesties formatas",
                    description: <>
                        <p>Pasirinkite vaizdo išvesties formatą. Skirtingi formatai turi savų privalumų ir naudojimo atvejų.</p>
                        <p><strong>Automatinis glaudinimas</strong>: Ši parinktis automatiškai taiko tinkamą glaudinimo strategiją, atsižvelgiant į įvesties formatą:</p>
                        <ul>
                            <li><strong>JPG</strong> įvestys glaudinamos kaip <strong>JPG</strong>.</li>
                            <li><strong>PNG</strong> įvestys glaudinamos naudojant <strong>PNG (su praradimais)</strong> metodą.</li>
                            <li><strong>WebP</strong> įvestys glaudinamos naudojant <strong>WebP (su praradimais)</strong> metodą.</li>
                            <li><strong>AVIF</strong> įvestys glaudinamos naudojant <strong>AVIF (su praradimais)</strong> metodą.</li>
                            <li><strong>HEIC</strong> įvestys konvertuojamos į <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Taip pat galite rankiniu būdu pasirinkti formatą žemiau, atsižvelgdami į savo konkrečius poreikius. Pateikiame išsamų kiekvienos parinkties vadovą:
                        </p>

                        <p>
                            <strong>JPG</strong>: Populiariausias vaizdų formatas, nors ir nepalaiko skaidrumo. Lyginant su <strong>nesuglaudintu PNG</strong>, jis gali sumažinti failo dydį vidutiniškai <strong>90%</strong>. Esant <strong>75</strong> kokybės nustatymui, kokybės praradimas dažnai yra <strong>beveik nepastebimas</strong>. Jei jums nereikia skaidraus fono <strong>(kas tinka daugumai nuotraukų)</strong>, konvertavimas į <strong>JPG</strong> dažniausiai yra geriausias pasirinkimas.
                        </p>

                        <p>
                            <strong>PNG (su praradimais)</strong>: Palaiko skaidrumą su tam tikru kokybės praradimu, sumažindamas failo dydį vidutiniškai <strong>70%</strong>, palyginti su <strong>nesuglaudintu PNG</strong>. Rinkitės šį formatą tik tada, jei jums būtinas skaidrus fonas PNG formatu. Kitu atveju <strong>JPG</strong> siūlo <strong>geresnę kokybę mažesniame faile</strong> (be skaidrumo), o <strong>WebP (su praradimais)</strong> suteikia <strong>geresnę kokybę, mažesnį dydį ir skaidrumą</strong>, todėl yra pranašesnė alternatyva, jei PNG formatas nėra griežtas reikalavimas.
                        </p>

                        <p>
                            <strong>PNG (be praradimų)</strong>: Palaiko skaidrumą be kokybės praradimo. Sumažina failo dydį vidutiniškai <strong>20%</strong>, palyginti su <strong>nesuglaudintu PNG</strong>. Tačiau, <strong>jei PNG formatas nėra griežtas reikalavimas</strong>, <strong>WebP (be praradimų)</strong> yra geresnis pasirinkimas, nes siūlo mažesnius failų dydžius.
                        </p>

                        <p>
                            <strong>WebP (su praradimais)</strong>: Palaiko skaidrumą su nedideliu kokybės praradimu. Sumažina failo dydį vidutiniškai <strong>90%</strong>, palyginti su <strong>nesuglaudintu PNG</strong>. Tai puikus pakaitalas <strong>PNG (su praradimais)</strong>, siūlantis geresnę kokybę ir mažesnius failus. Pastaba: WebP formato nepalaiko kai kurie senesni įrenginiai.
                        </p>

                        <p>
                            <strong>WebP (be praradimų)</strong>: Palaiko skaidrumą be kokybės praradimo. Sumažina failo dydį vidutiniškai <strong>50%</strong>, palyginti su <strong>nesuglaudintu PNG</strong>, todėl tai yra pranašesnis pakaitalas <strong>PNG (be praradimų)</strong>. Pastaba: WebP formato nepalaiko kai kurie senesni įrenginiai.
                        </p>

                        <p>
                            <strong>AVIF (su praradimais)</strong>: Palaiko skaidrumą su nedideliu kokybės praradimu. Kaip WebP įpėdinis, jis siūlo dar didesnį glaudinimo laipsnį, sumažindamas failo dydį vidutiniškai <strong>94%</strong>, palyginti su <strong>nesuglaudintu PNG</strong>. Kaip pažangiausias formatas, AVIF suteikia puikią kokybę esant labai mažiems failų dydžiams. Tačiau naršyklių ir įrenginių suderinamumas vis dar ribotas. Šis formatas labiausiai tinka pažengusiems vartotojams arba kai esate tikri, kad tiksliniai įrenginiai jį palaiko.
                        </p>
                        <p>
                            <strong>AVIF (be praradimų)</strong>: Palaiko skaidrumą be kokybės praradimo. Palyginti su <strong>nesuglaudintu PNG</strong>, failo dydžio sumažėjimas nėra reikšmingas, o kai kuriais atvejais jis gali net padidėti. Nebent turite specifinį poreikį AVIF be praradimų formatui, <strong>PNG (be praradimų)</strong> arba <strong>WebP (be praradimų)</strong> paprastai yra geresni pasirinkimai.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Perjungti temą"
    },
    interactive: {
        store_imageDeletedNotification: "Pašalinta: {fileName}",
        store_convertingImagesNotification: "Konvertuojama {number} vaizdų...",
        store_conversionFailedNotification: "Konvertavimas nepavyko: {fileName}",
        store_unsupportedFileTypeNotification: "Nepalaikomas formatas, pašalinta: {fileName}",
        store_fileReadErrorNotification: "Nepavyko nuskaityti failo, pašalinta: {fileName}",
        store_reconvertingNotification: "Perkonvertuojama: {fileName}",
        store_formatOptionAuto: "Automatinis glaudinimas",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (su praradimais)",
        store_formatOptionPngLossless: "PNG (be praradimų)",
        store_formatOptionWebpLossy: "WebP (su praradimais)",
        store_formatOptionWebpLossless: "WebP (be praradimų)",
        store_formatOptionAvifLossy: "AVIF (su praradimais)",
        store_formatOptionAvifLossless: "AVIF (be praradimų)",
        previewSection_title: "Peržiūra ir atsisiuntimas",
        previewSection_downloadAllButton: "Atsisiųsti visus",
        previewSection_deleteAllButton: "Ištrinti visus",
        previewSection_placeholder: "Kol kas nėra vaizdų.",
        previewSection_statusPending: "Laukiama",
        previewSection_statusConverting: "Konvertuojama...",
        previewSection_statusFailed: "Nepavyko. Atnaujinkite puslapį ir bandykite dar kartą.",
        previewSection_statusCompleted: "Užbaigta",
        previewSection_noCompletedFilesNotification: "Nėra užbaigtų vaizdų, kuriuos būtų galima atsisiųsti.",
        previewSection_downloadStartedNotification: "Pradedamas {fileCount} failų atsisiuntimas...",
        previewSection_listEmptyNotification: "Sąrašas tuščias.",
        previewSection_allDeletedNotification: "Visi vaizdai buvo pašalinti.",
        previewSection_zipCreationNotification: "Kuriama ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Kuriama ZIP: Kai kurie vaizdai neužbaigti ir bus praleisti.",
        previewSection_zipCreationErrorNotification: "Kuriant ZIP, įvyko klaida.",
        previewSection_waitConversionNotification: "Palaukite, kol konvertavimas bus baigtas.",
        previewSection_downloadingFileNotification: "Atsisiunčiama: {fileName}",
        previewSection_originalSizeLabel: "Originalus dydis:",
        previewSection_convertedSizeLabel: "Dydis po konvertavimo:",
        previewSection_downloadTitle: "Atsisiųsti",
        previewSection_previewTitle: "Peržiūrėti",
        previewSection_deleteTitle: "Ištrinti",
        previewSection_comparisonTab: "Palyginimas",
        previewSection_settingsTab: "Nustatymai",
        previewSection_originalImageLabel: "Originalus vaizdas",
        previewSection_completedImageLabel: "Konvertuotas vaizdas",
        previewSection_formatLabel: "Formatas:",
        previewSection_resolutionLabel: "Raiška:",
        previewSection_viewLargerButton: "Žiūrėti naujame skirtuke",
        previewSection_qualityLabel: "Glaudinimo kokybė",
        previewSection_sizeLabel: "Raiškos koregavimas",
        previewSection_outputFormatLabel: "Išvesties formatas",
        previewSection_reconvertButton: "Perkonvertuoti šį vaizdą",
        globalControls_qualityLabel: "Visuotinė glaudinimo kokybė",
        globalControls_sizeLabel: "Visuotinis raiškos koregavimas",
        globalControls_formatLabel: "Visuotinis išvesties formatas",
        globalControls_reconvertAllButton: "Taikyti ir perkonvertuoti visus",
        globalControls_restoreDefaultsButton: "Atstatyti parinktis",
        globalControls_noImagesNotification: "Pirmiausia pridėkite vaizdų.",
        globalControls_reconvertingAllNotification: "Perkonvertuojami visi {imageCount} vaizdai su visuotiniais nustatymais",
        globalControls_restoredNotification: "Parinktys buvo atstatytos į numatytąsias.",
        addSection_title: "Pridėti vaizdus",
        addArea_dragDropTitle: "Vilkite vaizdus čia",
        addArea_supportedFormats: "Palaikomi formatai: JPG, PNG, WebP, AVIF ir HEIC",
        addArea_selectButton: "Pasirinkti vaizdus",
        addArea_tips: "*Galima pridėti kelis vaizdus vienu metu",
        ui_viewExplanationTitle: "Sužinokite apie šias parinktis",
    }
};

export default lt;