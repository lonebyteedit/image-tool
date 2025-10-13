import type { Translation } from './en.tsx';

const et: Translation = {
    static: {
        index_lang: 'et',
        index_dir: 'ltr',
        index_title: "Image Tool - Täiustatud pilditeisendustööriist",
        index_description: "Tasuta ja professionaalne veebipõhine tööriist piltide tihendamiseks, suuruse muutmiseks ja vormingu teisendamiseks. See toetab vastastikust teisendamist JPG, PNG, WebP ja AVIF vormingute vahel ning suudab teisendada HEIC-faile nendesse vormingutesse. Kogu töötlus toimub lokaalselt teie brauseris – teie faile ei laadita kunagi serverisse üles, tagades täieliku privaatsuse ja andmete turvalisuse.",
        optionsExplanation: {
            title: "Valikute juhend",
            subtitle: "Mõistke iga valiku funktsiooni ja kasutust, et optimeerida oma piltide teisendamise tulemusi.",
            options: [
                {
                    id: "quality-option",
                    title: "Tihendamise kvaliteet",
                    description: <>
                        <p>See valik kehtib ainult siis, kui sihtvorming on <strong>JPG</strong>, <strong>WebP (kadudega)</strong> või <strong>AVIF (kadudega)</strong>.</p>
                        <p>Madalam väärtus loob väiksema faili, kuid vähendab pildikvaliteeti. Soovitatav väärtus <strong>75</strong> pakub head tasakaalu faili suuruse ja kvaliteedi vahel.</p>
                        <p>Kui fail on pärast tihendamist endiselt liiga suur, proovige vähendada eraldusvõimet, mis on sageli faili suuruse vähendamiseks tõhusam.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Eraldusvõime reguleerimine",
                    description: <>
                        <p>Vähendage pildi eraldusvõimet protsentuaalselt, säilitades algse kuvasuhte. <strong>100%</strong> säilitab algsed mõõtmed.</p>
                        <p>Eraldusvõime vähendamine võib faili suurust <strong>märkimisväärselt</strong> vähendada. Kui te ei vaja originaali kõrget eraldusvõimet, on see sageli <strong>kõige tõhusam viis</strong> faili väiksemaks muutmiseks.</p>
                        <p>Võrreldes <strong>100% eraldusvõimega</strong> ja eeldades, et teised valikud jäävad samaks, vähendab eraldusvõime reguleerimine <strong>75%</strong>-le faili suurust keskmiselt <strong>30%</strong>; <strong>50%</strong>-le keskmiselt <strong>65%</strong>; ja <strong>25%</strong>-le keskmiselt <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Väljundvorming",
                    description: <>
                        <p>Valige pildi väljundvorming. Erinevatel vormingutel on oma eelised ja kasutusjuhud.</p>
                        <p><strong>Automaatne tihendamine</strong>: See valik rakendab sobiva tihendamisstrateegia vastavalt sisendvormingule:</p>
                        <ul>
                            <li><strong>JPG</strong> sisendid tihendatakse <strong>JPG</strong>-vormingusse.</li>
                            <li><strong>PNG</strong> sisendid tihendatakse, kasutades <strong>PNG (kadudega)</strong> meetodit.</li>
                            <li><strong>WebP</strong> sisendid tihendatakse, kasutades <strong>WebP (kadudega)</strong> meetodit.</li>
                            <li><strong>AVIF</strong> sisendid tihendatakse, kasutades <strong>AVIF (kadudega)</strong> meetodit.</li>
                            <li><strong>HEIC</strong> sisendid teisendatakse <strong>JPG</strong>-vormingusse.</li>
                        </ul>

                        <p>
                            Võite ka allpool käsitsi valida vormingu vastavalt oma konkreetsetele vajadustele. Siin on iga valiku üksikasjalik juhend:
                        </p>

                        <p>
                            <strong>JPG</strong>: Kõige populaarsem pildivorming, kuigi see ei toeta läbipaistvust. Võrreldes <strong>tihendamata PNG-ga</strong>, võib see faili suurust vähendada keskmiselt <strong>90%</strong>. Kvaliteediseadistusega <strong>75</strong> on kvaliteedikadu sageli <strong>märkamatu</strong>. Kui te ei vaja läbipaistvat tausta <strong>(mis kehtib enamiku fotode puhul)</strong>, on <strong>JPG</strong>-vormingusse teisendamine tavaliselt parim valik.
                        </p>

                        <p>
                            <strong>PNG (kadudega)</strong>: Toetab läbipaistvust mõningase kvaliteedikaoga, vähendades faili suurust keskmiselt <strong>70%</strong> võrreldes <strong>tihendamata PNG-ga</strong>. Valige see ainult siis, kui vajate PNG-vormingus läbipaistvat tausta. Vastasel juhul pakub <strong>JPG</strong> <strong>paremat kvaliteeti väiksema suurusega</strong> (ilma läbipaistvuseta) ja <strong>WebP (kadudega)</strong> pakub <strong>paremat kvaliteeti, väiksemat suurust ja läbipaistvust</strong>, muutes selle paremaks alternatiiviks, kui PNG-vorming pole range nõue.
                        </p>

                        <p>
                            <strong>PNG (kadudeta)</strong>: Toetab läbipaistvust ilma kvaliteedikaota. Vähendab faili suurust keskmiselt <strong>20%</strong> võrreldes <strong>tihendamata PNG-ga</strong>. Kui <strong>PNG-vorming pole aga range nõue</strong>, on <strong>WebP (kadudeta)</strong> parem valik, kuna see pakub väiksemaid faile.
                        </p>

                        <p>
                            <strong>WebP (kadudega)</strong>: Toetab läbipaistvust kerge kvaliteedikaoga. Vähendab faili suurust keskmiselt <strong>90%</strong> võrreldes <strong>tihendamata PNG-ga</strong>. See on suurepärane asendus <strong>PNG (kadudega)</strong> vormingule, pakkudes paremat kvaliteeti ja väiksemaid faile. Märkus: WebP ei ole mõnedes vanemates seadmetes toetatud.
                        </p>

                        <p>
                            <strong>WebP (kadudeta)</strong>: Toetab läbipaistvust ilma kvaliteedikaota. Vähendab faili suurust keskmiselt <strong>50%</strong> võrreldes <strong>tihendamata PNG-ga</strong>, muutes selle paremaks asenduseks <strong>PNG (kadudeta)</strong> vormingule. Märkus: WebP ei ole mõnedes vanemates seadmetes toetatud.
                        </p>

                        <p>
                            <strong>AVIF (kadudega)</strong>: Toetab läbipaistvust kerge kvaliteedikaoga. WebP järeltulijana pakub see veelgi kõrgemat tihendusmäära, vähendades faili suurust keskmiselt <strong>94%</strong> võrreldes <strong>tihendamata PNG-ga</strong>. Tipptasemel vorminguna pakub AVIF suurepärast kvaliteeti väga väikeste failisuuruste juures. Siiski on brauseri ja seadmete ühilduvus endiselt piiratud. See vorming sobib kõige paremini edasijõudnud kasutajatele või siis, kui olete kindel, et sihtseadmed seda toetavad.
                        </p>
                        <p>
                            <strong>AVIF (kadudeta)</strong>: Toetab läbipaistvust ilma kvaliteedikaota. Võrreldes <strong>tihendamata PNG-ga</strong> pole faili suuruse vähenemine märkimisväärne ja mõnel juhul võib see isegi suureneda. Kui teil pole spetsiifilist vajadust kadudeta AVIF-i järele, on <strong>PNG (kadudeta)</strong> või <strong>WebP (kadudeta)</strong> üldiselt paremad valikud.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Vaheta teemat"
    },
    interactive: {
        store_imageDeletedNotification: "Eemaldatud: {fileName}",
        store_convertingImagesNotification: "Teisendatakse {number} pilti...",
        store_conversionFailedNotification: "Teisendamine ebaõnnestus: {fileName}",
        store_unsupportedFileTypeNotification: "Toetamata vorming, eemaldatud: {fileName}",
        store_fileReadErrorNotification: "Faili lugemine ebaõnnestus, eemaldatud: {fileName}",
        store_reconvertingNotification: "Teisendan uuesti: {fileName}",
        store_formatOptionAuto: "Automaatne tihendamine",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (kadudega)",
        store_formatOptionPngLossless: "PNG (kadudeta)",
        store_formatOptionWebpLossy: "WebP (kadudega)",
        store_formatOptionWebpLossless: "WebP (kadudeta)",
        store_formatOptionAvifLossy: "AVIF (kadudega)",
        store_formatOptionAvifLossless: "AVIF (kadudeta)",
        previewSection_title: "Eelvaade ja allalaadimine",
        previewSection_downloadAllButton: "Laadi kõik alla",
        previewSection_deleteAllButton: "Kustuta kõik",
        previewSection_placeholder: "Pilte veel pole.",
        previewSection_statusPending: "Ootel",
        previewSection_statusConverting: "Teisendamine...",
        previewSection_statusFailed: "Ebaõnnestus. Palun värskendage lehte ja proovige uuesti.",
        previewSection_statusCompleted: "Valmis",
        previewSection_noCompletedFilesNotification: "Allalaadimiseks pole valmis pilte.",
        previewSection_downloadStartedNotification: "Alustan {fileCount} faili allalaadimist...",
        previewSection_listEmptyNotification: "Nimekiri on tühi.",
        previewSection_allDeletedNotification: "Kõik pildid on eemaldatud.",
        previewSection_zipCreationNotification: "ZIP-i loomine...",
        previewSection_zipCreationWithSkipsNotification: "ZIP-i loomine: Mõned pildid on lõpetamata ja jäetakse vahele.",
        previewSection_zipCreationErrorNotification: "ZIP-i loomisel tekkis viga.",
        previewSection_waitConversionNotification: "Palun oodake, kuni teisendamine lõpeb.",
        previewSection_downloadingFileNotification: "Laadin alla: {fileName}",
        previewSection_originalSizeLabel: "Algne suurus:",
        previewSection_convertedSizeLabel: "Teisendatud suurus:",
        previewSection_downloadTitle: "Laadi alla",
        previewSection_previewTitle: "Eelvaade",
        previewSection_deleteTitle: "Kustuta",
        previewSection_comparisonTab: "Võrdlus",
        previewSection_settingsTab: "Seaded",
        previewSection_originalImageLabel: "Algne pilt",
        previewSection_completedImageLabel: "Teisendatud pilt",
        previewSection_formatLabel: "Vorming:",
        previewSection_resolutionLabel: "Eraldusvõime:",
        previewSection_viewLargerButton: "Vaata uuel vahelehel",
        previewSection_qualityLabel: "Tihendamise kvaliteet",
        previewSection_sizeLabel: "Eraldusvõime reguleerimine",
        previewSection_outputFormatLabel: "Väljundvorming",
        previewSection_reconvertButton: "Teisenda uuesti",
        globalControls_qualityLabel: "Üldine tihendamise kvaliteet",
        globalControls_sizeLabel: "Üldine eraldusvõime reguleerimine",
        globalControls_formatLabel: "Üldine väljundvorming",
        globalControls_reconvertAllButton: "Rakenda ja teisenda kõik uuesti",
        globalControls_restoreDefaultsButton: "Taasta vaikeseaded",
        globalControls_noImagesNotification: "Palun lisage kõigepealt pildid.",
        globalControls_reconvertingAllNotification: "Teisendan kõiki {imageCount} pilti uuesti üldiste seadetega.",
        globalControls_restoredNotification: "Valikud on taastatud vaikeseadetele.",
        addSection_title: "Lisa pilte",
        addArea_dragDropTitle: "Lohista pildid siia",
        addArea_supportedFormats: "Toetatud vormingud: JPG, PNG, WebP, AVIF ja HEIC",
        addArea_selectButton: "Vali pildid",
        addArea_tips: "*Saab lisada mitu pilti korraga",
        ui_viewExplanationTitle: "Loe nende valikute kohta",
    }
};

export default et;