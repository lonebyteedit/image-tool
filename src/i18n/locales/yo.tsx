import type { Translation } from './en.tsx';

const yo: Translation = {
    static: {
        index_lang: 'yo',
        index_dir: 'ltr',
        index_title: "Image Tool - Ohun Èlò Onítẹ̀siwájú fún Ìyípadà Àwòrán",
        index_description: "Ohun èlò orí ayélujára ọ̀fẹ́ àti gbámúṣé fún fífúnpọ̀ àwòrán, ṣíṣe àtúnṣe ìwọ̀n, àti yíyí irúfẹ́ rẹ̀ padà. Ó ṣeé lò fún ìyípadà láàárín JPG, PNG, WebP, àti AVIF, ó sì le yí HEIC padà sí àwọn irúfẹ́ wọ̀nyí. Gbogbo ìgbésẹ̀ náà ló ń wáyé lórí pèpéle ìṣàwárí rẹ — a kò ní gbé àwọn fáìlì rẹ sókè síbi kankan, èyí tó ń fún ọ ní ààbò tó kúnná fún àṣírí àti dátà rẹ.",
        optionsExplanation: {
            title: "Ìtọ́sọ́nà Àwọn Àṣàyàn",
            subtitle: "Mọ iṣẹ́ àti lílo àṣàyàn kọ̀ọ̀kan láti jẹ́ kí àbájáde ìyípadà àwòrán rẹ dára jùlọ.",
            options: [
                {
                    id: "quality-option",
                    title: "Dídára Fífúnpọ̀",
                    description: <>
                        <p>Àṣàyàn yíì wà fún ìgbà tí irúfẹ́ àbájáde bá jẹ́ <strong>JPG</strong>, <strong>WebP (Pẹ̀lú àdánù díẹ̀)</strong>, tàbí <strong>AVIF (Pẹ̀lú àdánù díẹ̀)</strong> nìkan.</p>
                        <p>Bí nọ́mbà bá ṣe kéré sí, ní fáìlì yóò ṣe kéré sí, àmọ́ dídára àwòrán yóò dínkù. A gba ọ níyànjú láti lo <strong>75</strong>, nítorí ó jẹ́ ìwọ̀ntúnwọ̀nsì tó dára láàárín ìwọ̀n fáìlì àti dídára rẹ̀.</p>
                        <p>Bí fáìlì bá ṣì tóbi jù lẹ́yìn fífúnpọ̀, gbìyànjú láti dín ìwọ̀n rẹ̀ kù, èyí sábà máa ń ṣiṣẹ́ jù láti mú kí fáìlì kéré.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Àtúnṣe Ìwọ̀n",
                    description: <>
                        <p>Dín ìwọ̀n àwòrán kù ní ìwọ̀n ìdá ọgọ́rùn-ún, yóò sì jẹ́ kí ìbámu rẹ̀ wà gẹ́gẹ́ bí ti àtètèkọ́ṣe. <strong>100%</strong> túmọ̀ sí pé ìwọ̀n àkọ́kọ́ ni yóò lò.</p>
                        <p>Dídín ìwọ̀n kù le mú kí fáìlì kéré <strong>púpọ̀</strong>. Bí o kò bá nílò ìwọ̀n gíga ti àtètèkọ́ṣe, èyí sábà máa ń jẹ́ <strong>ọ̀nà tó ṣiṣẹ́ jùlọ</strong> láti mú kí fáìlì kéré.</p>
                        <p>Láì yí àwọn àṣàyàn yòókù padà, tí a bá fi wé <strong>ìwọ̀n 100%</strong>. Yíyí sí <strong>75%</strong> yóò dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>30%</strong>; yíyí sí <strong>50%</strong> yóò dín kù ní nǹkan bí <strong>65%</strong>; yíyí sí <strong>25%</strong> yóò sì dín kù ní nǹkan bí <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Irúfẹ́ Àbájáde",
                    description: <>
                        <p>Yan irúfẹ́ àbájáde fún àwòrán rẹ. Irúfẹ́ kọ̀ọ̀kan ló ní àǹfààní àti lílò tirẹ̀.</p>
                        <p><strong>Fífúnpọ̀ Aládàáṣe</strong>: Àṣàyàn yìí yóò lo ọgbọ́n fífúnpọ̀ tó yẹ ní ìbámu pẹ̀lú irúfẹ́ àwòrán tó o bá gbé wọlé:</p>
                        <ul>
                            <li>Àwọn àwòrán <strong>JPG</strong> ni a ó fún pọ̀ gẹ́gẹ́ bíi <strong>JPG</strong>.</li>
                            <li>Àwọn àwòrán <strong>PNG</strong> ni a ó fún pọ̀ pẹ̀lú ọ̀nà <strong>PNG (Pẹ̀lú àdánù díẹ̀)</strong>.</li>
                            <li>Àwọn àwòrán <strong>WebP</strong> ni a ó fún pọ̀ pẹ̀lú ọ̀nà <strong>WebP (Pẹ̀lú àdánù díẹ̀)</strong>.</li>
                            <li>Àwọn àwòrán <strong>AVIF</strong> ni a ó fún pọ̀ pẹ̀lú ọ̀nà <strong>AVIF (Pẹ̀lú àdánù díẹ̀)</strong>.</li>
                            <li>Àwọn àwòrán <strong>HEIC</strong> ni a ó yí padà sí <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            O tún le yan irúfẹ́ tí o fẹ́ fúnra rẹ ní ìsàlẹ̀ ní ìbámu pẹ̀lú àìní rẹ. Èyí ni ìtọ́sọ́nà kíkún fún àṣàyàn kọ̀ọ̀kan:
                        </p>

                        <p>
                            <strong>JPG</strong>: Ó jẹ́ irúfẹ́ àwòrán tó gbajúmọ̀ jùlọ, àmọ́ kò ṣeé lò fún àwòrán aláìní-lẹ́yìn. Tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>, ó le dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>90%</strong>. Ní ìwọ̀n dídára <strong>75</strong>, àdánù dídára rẹ̀ <strong>kò ṣeé fojú rí</strong>. Bí o kò bá nílò àwòrán aláìní-lẹ́yìn <strong>(gẹ́gẹ́ bí ọ̀pọ̀lọpọ̀ àwòrán)</strong>, yíyí sí <strong>JPG</strong> ni àṣàyàn tó dára jùlọ.
                        </p>

                        <p>
                            <strong>PNG (Pẹ̀lú àdánù díẹ̀)</strong>: Ó ṣeé lò fún àwòrán aláìní-lẹ́yìn pẹ̀lú àdánù díẹ̀ nínú dídára rẹ̀. Ó ń dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>70%</strong> tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>. Yan èyí nìkan bí o bá fẹ́ lo irúfẹ́ PNG fún àwòrán aláìní-lẹ́yìn. Bí bẹ́ẹ̀ kọ́, <strong>JPG</strong> ní <strong>dídára tó ga jù ní ìwọ̀n kékeré</strong> (láìsí ẹ̀yìn), <strong>WebP (Pẹ̀lú àdánù díẹ̀)</strong> sì ní <strong>dídára tó ga, ìwọ̀n tó kéré, ó sì ṣeé lò fún àwòrán aláìní-lẹ́yìn</strong>, èyí mú kó jẹ́ àṣàyàn tó dára jù bí kò bá jẹ́ dandan láti lo PNG.
                        </p>

                        <p>
                            <strong>PNG (Láìsí àdánù)</strong>: Ó ṣeé lò fún àwòrán aláìní-lẹ́yìn láì dín dídára kù rárá. Ó ń dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>20%</strong> tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>. Àmọ́, <strong>bí kò bá jẹ́ dandan láti lo PNG</strong>, <strong>WebP (Láìsí àdánù)</strong> jẹ́ àṣàyàn tó dára jù nítorí ó ní ìwọ̀n tó kéré jù.
                        </p>

                        <p>
                            <strong>WebP (Pẹ̀lú àdánù díẹ̀)</strong>: Ó ṣeé lò fún àwòrán aláìní-lẹ́yìn pẹ̀lú àdánù díẹ̀. Ó ń dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>90%</strong> tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>. Ó jẹ́ arọ́pò tó tayọ fún <strong>PNG (Pẹ̀lú àdánù díẹ̀)</strong>, nítorí dídára rẹ̀ ga jù, ìwọ̀n rẹ̀ sì kéré jù. Àkíyèsí: Àwọn ẹ̀rọ ayé àtijọ́ kan kò ṣeé lò pẹ̀lú WebP.
                        </p>

                        <p>
                            <strong>WebP (Láìsí àdánù)</strong>: Ó ṣeé lò fún àwòrán aláìní-lẹ́yìn láìsí àdánù kankan. Ó ń dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>50%</strong> tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>, èyí mú kó jẹ́ arọ́pò tó dára ju <strong>PNG (Láìsí àdánù)</strong>. Àkíyèsí: Àwọn ẹ̀rọ ayé àtijọ́ kan kò ṣeé lò pẹ̀lú WebP.
                        </p>

                        <p>
                            <strong>AVIF (Pẹ̀lú àdánù díẹ̀)</strong>: Ó ṣeé lò fún àwòrán aláìní-lẹ́yìn pẹ̀lú àdánù díẹ̀. Gẹ́gẹ́ bí arọ́pò WebP, ó ní agbára fífúnpọ̀ tó ga jù, ó ń dín ìwọ̀n fáìlì kù ní nǹkan bí <strong>94%</strong> tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>. Gẹ́gẹ́ bí irúfẹ́ tuntun, AVIF ní dídára tó pọ̀ ní ìwọ̀n kékeré púpọ̀. Àmọ́, kò tíì sí ní ọ̀pọ̀ pèpéle ìṣàwárí àti ẹ̀rọ. Irúfẹ́ yìí dára jùlọ fún àwọn tó gbájúmọ́, tàbí nígbà tó o bá mọ̀ dájú pé àwọn ẹ̀rọ tí o fẹ́ lò ó fún yóò ṣiṣẹ́ pẹ̀lú rẹ̀.
                        </p>
                        <p>
                            <strong>AVIF (Láìsí àdánù)</strong>: Ó ṣeé lò fún àwòrán aláìní-lẹ́yìn láìsí àdánù kankan. Tí a bá fi wé <strong>PNG tí a kò fún pọ̀</strong>, ìdínkù ìwọ̀n fáìlì rẹ̀ kò pọ̀, nígbà mìíràn ó tiẹ̀ le pọ̀ síi. Láìjẹ́ pé o nílò rẹ̀ fún ìdí pàtàkì kan, <strong>PNG (Láìsí àdánù)</strong> tàbí <strong>WebP (Láìsí àdánù)</strong> jẹ́ àṣàyàn tó dára jù.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Yí Àwọ̀ Padà"
    },
    interactive: {
        store_imageDeletedNotification: "A ti pa á rẹ́: {fileName}",
        store_convertingImagesNotification: "Ó ń yí àwòrán {number} padà...",
        store_conversionFailedNotification: "Ìyípadà kùnà: {fileName}",
        store_unsupportedFileTypeNotification: "Irúfẹ́ yìí kò sí, a ti pa á rẹ́: {fileName}",
        store_fileReadErrorNotification: "A kò le kà á, a ti pa á rẹ́: {fileName}",
        store_reconvertingNotification: "Ó ń tún un yípadà: {fileName}",
        store_formatOptionAuto: "Fífúnpọ̀ Aládàáṣe",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Pẹ̀lú àdánù díẹ̀)",
        store_formatOptionPngLossless: "PNG (Láìsí àdánù)",
        store_formatOptionWebpLossy: "WebP (Pẹ̀lú àdánù díẹ̀)",
        store_formatOptionWebpLossless: "WebP (Láìsí àdánù)",
        store_formatOptionAvifLossy: "AVIF (Pẹ̀lú àdánù díẹ̀)",
        store_formatOptionAvifLossless: "AVIF (Láìsí àdánù)",
        previewSection_title: "Àkọ́kọ́-wò àti Gbígbà-sílẹ̀",
        previewSection_downloadAllButton: "Gba Gbogbo Rẹ̀ Sílẹ̀",
        previewSection_deleteAllButton: "Pa Gbogbo Rẹ̀ Rẹ́",
        previewSection_placeholder: "Kò sí àwòrán kankan síbẹ̀.",
        previewSection_statusPending: "Ní ìdúró",
        previewSection_statusConverting: "Ó ń yípadà...",
        previewSection_statusFailed: "Ó kùnà. Jọ̀wọ́, ṣe àtúnṣe ojú-ewé, kí o tún gbìyànjú.",
        previewSection_statusCompleted: "Ó ti parí",
        previewSection_noCompletedFilesNotification: "Kò sí àwòrán tó ti parí láti gbà sílẹ̀.",
        previewSection_downloadStartedNotification: "Ó bẹ̀rẹ̀ sí ní gba fáìlì {fileCount} sílẹ̀...",
        previewSection_listEmptyNotification: "Àkójọ òfo ni.",
        previewSection_allDeletedNotification: "A ti pa gbogbo àwòrán rẹ́.",
        previewSection_zipCreationNotification: "Ó ń dá ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Ó ń dá ZIP: Àwọn àwòrán kan kò ì tíì parí, a ó sì pa wọ́n tì.",
        previewSection_zipCreationErrorNotification: "Àṣìṣe kan ṣẹlẹ̀ lásìkò ṣíṣẹ̀dá ZIP.",
        previewSection_waitConversionNotification: "Jọ̀wọ́, dúró de ìparí ìyípadà.",
        previewSection_downloadingFileNotification: "Ó ń gba sílẹ̀: {fileName}",
        previewSection_originalSizeLabel: "Ìwọ̀n àkọ́kọ́:",
        previewSection_convertedSizeLabel: "Ìwọ̀n lẹ́yìn ìyípadà:",
        previewSection_downloadTitle: "Gba Sílẹ̀",
        previewSection_previewTitle: "Àkọ́kọ́-wò",
        previewSection_deleteTitle: "Pa á Rẹ́",
        previewSection_comparisonTab: "Ṣe Àfiwé",
        previewSection_settingsTab: "Ètò",
        previewSection_originalImageLabel: "Àwòrán Àkọ́kọ́",
        previewSection_completedImageLabel: "Àwòrán Lẹ́yìn Ìyípadà",
        previewSection_formatLabel: "Irúfẹ́:",
        previewSection_resolutionLabel: "Ìwọ̀n:",
        previewSection_viewLargerButton: "Wò ó ní ojú-ewé tuntun",
        previewSection_qualityLabel: "Dídára Fífúnpọ̀",
        previewSection_sizeLabel: "Àtúnṣe Ìwọ̀n",
        previewSection_outputFormatLabel: "Irúfẹ́ Àbájáde",
        previewSection_reconvertButton: "Tún Àwòrán Yìí Yípadà",
        globalControls_qualityLabel: "Dídára Fífúnpọ̀ Gbogbogbòò",
        globalControls_sizeLabel: "Àtúnṣe Ìwọ̀n Gbogbogbòò",
        globalControls_formatLabel: "Irúfẹ́ Àbájáde Gbogbogbòò",
        globalControls_reconvertAllButton: "Lo Ètò, kí o Tún Gbogbo Rẹ̀ Yípadà",
        globalControls_restoreDefaultsButton: "Padà sí Ètò Ìpilẹ̀ṣẹ̀",
        globalControls_noImagesNotification: "Jọ̀wọ́, kọ́kọ́ fi àwòrán kún un.",
        globalControls_reconvertingAllNotification: "Ó ń lo ètò gbogbogbòò láti tún gbogbo àwòrán {imageCount} yípadà",
        globalControls_restoredNotification: "A ti mú ètò padà sí ti ìpilẹ̀ṣẹ̀.",
        addSection_title: "Fi Àwòrán Kún un",
        addArea_dragDropTitle: "Fà àwọn àwòrán, kí o sì jù wọ́n síbí",
        addArea_supportedFormats: "Ó ṣeé lò fún irúfẹ́ JPG, PNG, WebP, AVIF, àti HEIC",
        addArea_selectButton: "Yan Àwòrán",
        addArea_tips: "*A le fi àwòrán púpọ̀ kún un lẹ́ẹ̀kan náà.",
        ui_viewExplanationTitle: "Kọ́ nípa àwọn àṣàyàn wọ̀nyí",
    }
};

export default yo;