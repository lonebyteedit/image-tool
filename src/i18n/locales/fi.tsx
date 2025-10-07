import type { Translation } from './en.tsx';

const fi: Translation = {
    static: {
        index_lang: 'fi',
        index_dir: 'ltr',
        index_title: "Image Tool - edistynyt kuvien muuntotyökalu",
        index_description: "Ilmainen ja ammattimainen verkkotyökalu kuvien pakkaamiseen, koon muuttamiseen ja tiedostomuotojen muuntamiseen. Se tukee muunnoksia JPG-, PNG-, WebP- ja AVIF-muotojen välillä ja voi muuntaa HEIC-kuvat näihin muotoihin. Kaikki käsittely tapahtuu paikallisesti selaimessasi – tiedostojasi ei koskaan ladata palvelimelle, mikä takaa täydellisen yksityisyyden ja tietoturvan.",
        optionsExplanation: {
            title: "Asetusten opas",
            subtitle: "Ymmärrä kunkin asetuksen toiminta ja käyttö, jotta saat parhaat tulokset kuvien muuntamisessa.",
            options: [
                {
                    id: "quality-option",
                    title: "Pakkauksen laatu",
                    description: <>
                        <p>Tämä asetus koskee ainoastaan, kun kohdemuoto on <strong>JPG</strong>, <strong>WebP (häviöllinen)</strong> tai <strong>AVIF (häviöllinen)</strong>.</p>
                        <p>Matalampi arvo pienentää tiedostokokoa, mutta heikentää kuvanlaatua. Suositeltu arvo <strong>75</strong> tarjoaa hyvän tasapainon tiedostokoon ja laadun välillä.</p>
                        <p>Jos tiedosto on pakkauksen jälkeen yhä liian suuri, kokeile pienentää resoluutiota, mikä on usein tehokkaampi tapa pienentää tiedostokokoa.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Resoluution säätö",
                    description: <>
                        <p>Pienennä kuvan resoluutiota prosentuaalisesti säilyttäen alkuperäisen kuvasuhteen. <strong>100 %</strong> säilyttää alkuperäisen koon.</p>
                        <p>Resoluution pienentäminen voi <strong>merkittävästi</strong> pienentää tiedostokokoa. Jos et tarvitse alkuperäistä korkeaa resoluutiota, tämä on usein <strong>tehokkain tapa</strong> pienentää tiedostoa.</p>
                        <p>Muilla asetuksilla, perustuen <strong>100 % resoluutioon</strong>: säätäminen <strong>75 % resoluutioon</strong> pienentää tiedostokokoa keskimäärin <strong>30 %</strong>; säätäminen <strong>50 % resoluutioon</strong> pienentää sitä keskimäärin <strong>65 %</strong>; ja säätäminen <strong>25 % resoluutioon</strong> pienentää sitä keskimäärin <strong>88 %</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Tulostusmuoto",
                    description: <>
                        <p>Valitse kuvan tulostusmuoto. Eri muodoilla on omat etunsa ja käyttötarkoituksensa.</p>
                        <p><strong>Automaattinen pakkaus</strong>: Tämä asetus käyttää sopivaa pakkausstrategiaa syötemuodon perusteella:</p>
                        <ul>
                            <li><strong>JPG</strong>-kuvat pakataan <strong>JPG</strong>-muotoon.</li>
                            <li><strong>PNG</strong>-kuvat pakataan käyttäen <strong>PNG (häviöllinen)</strong> -menetelmää.</li>
                            <li><strong>WebP</strong>-kuvat pakataan käyttäen <strong>WebP (häviöllinen)</strong> -menetelmää.</li>
                            <li><strong>AVIF</strong>-kuvat pakataan käyttäen <strong>AVIF (häviöllinen)</strong> -menetelmää.</li>
                            <li><strong>HEIC</strong>-kuvat muunnetaan <strong>JPG</strong>-muotoon.</li>
                        </ul>

                        <p>
                            Voit myös valita muodon manuaalisesti alla olevasta listasta tarpeidesi mukaan. Tässä on yksityiskohtainen opas jokaiseen vaihtoehtoon:
                        </p>

                        <p>
                            <strong>JPG</strong>: Suosituin kuvamuoto, vaikka se ei tuekaan läpinäkyvyyttä. Verrattuna <strong>pakkaamattomaan PNG:hen</strong>, se voi pienentää tiedostokokoa keskimäärin <strong>90 %</strong>. Laatuasetuksella <strong>75</strong> laadun heikkeneminen on usein <strong>lähes huomaamatonta</strong>. Jos et tarvitse läpinäkyvää taustaa <strong>(mikä pätee useimpiin valokuviin)</strong>, muuntaminen <strong>JPG</strong>-muotoon on yleensä paras valinta.
                        </p>

                        <p>
                            <strong>PNG (häviöllinen)</strong>: Tukee läpinäkyvyyttä pienen laadun heikkenemisen kustannuksella. Pienentää tiedostokokoa keskimäärin <strong>70 %</strong> verrattuna <strong>pakkaamattomaan PNG:hen</strong>. Valitse tämä vain, jos tarvitset läpinäkyvän taustan PNG-muodossa. Muussa tapauksessa <strong>JPG</strong> tarjoaa <strong>paremman laadun pienemmässä koossa</strong> (ilman läpinäkyvyyttä), ja <strong>WebP (häviöllinen)</strong> tarjoaa <strong>paremman laadun, pienemmän koon ja läpinäkyvyyden</strong>, mikä tekee siitä paremman vaihtoehdon, jos PNG-muoto ei ole ehdoton vaatimus.
                        </p>

                        <p>
                            <strong>PNG (häviötön)</strong>: Tukee läpinäkyvyyttä ilman laadun heikkenemistä. Pienentää tiedostokokoa keskimäärin <strong>20 %</strong> verrattuna <strong>pakkaamattomaan PNG:hen</strong>. Kuitenkin, <strong>jos PNG-muoto ei ole ehdoton vaatimus</strong>, <strong>WebP (häviötön)</strong> on parempi valinta, koska se tarjoaa pienemmät tiedostokoot.
                        </p>

                        <p>
                            <strong>WebP (häviöllinen)</strong>: Tukee läpinäkyvyyttä pienen laadun heikkenemisen kustannuksella. Pienentää tiedostokokoa keskimäärin <strong>90 %</strong> verrattuna <strong>pakkaamattomaan PNG:hen</strong>. Se on erinomainen korvike <strong>PNG (häviöllinen)</strong> -muodolle, tarjoten parempaa laatua ja pienempiä kokoja. Huom: WebP ei ole tuettu joissakin vanhemmissa laitteissa.
                        </p>

                        <p>
                            <strong>WebP (häviötön)</strong>: Tukee läpinäkyvyyttä ilman laadun heikkenemistä. Pienentää tiedostokokoa keskimäärin <strong>50 %</strong> verrattuna <strong>pakkaamattomaan PNG:hen</strong>, mikä tekee siitä paremman korvikkeen <strong>PNG (häviötön)</strong> -muodolle. Huom: WebP ei ole tuettu joissakin vanhemmissa laitteissa.
                        </p>

                        <p>
                            <strong>AVIF (häviöllinen)</strong>: Tukee läpinäkyvyyttä pienen laadun heikkenemisen kustannuksella. WebP:n seuraajana se tarjoaa vielä paremman pakkaussuhteen, pienentäen tiedostokokoa keskimäärin <strong>94 %</strong> verrattuna <strong>pakkaamattomaan PNG:hen</strong>. Huippuluokan muotona AVIF tarjoaa erinomaisen laadun hyvin pienissä tiedostokoissa. Selain- ja laiteyhteensopivuus on kuitenkin vielä rajallinen. Tämä muoto sopii parhaiten edistyneille käyttäjille tai kun olet varma, että kohdelaitteet tukevat sitä.
                        </p>
                        <p>
                            <strong>AVIF (häviötön)</strong>: Tukee läpinäkyvyyttä ilman laadun heikkenemistä. Verrattuna <strong>pakkaamattomaan PNG:hen</strong>, tiedostokoon pieneneminen ei ole merkittävää, ja joissakin tapauksissa se voi jopa kasvaa. Ellei sinulla ole erityistä tarvetta häviöttömälle AVIF-muodolle, <strong>PNG (häviötön)</strong> tai <strong>WebP (häviötön)</strong> ovat yleensä parempia vaihtoehtoja.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Vaihda teemaa"
    },
    interactive: {
        store_imageDeletedNotification: "Poistettu: {fileName}",
        store_convertingImagesNotification: "Muunnetaan {number} kuvaa...",
        store_conversionFailedNotification: "Muunnos epäonnistui: {fileName}",
        store_unsupportedFileTypeNotification: "Tukematon tiedostomuoto, poistettu: {fileName}",
        store_fileReadErrorNotification: "Tiedoston luku epäonnistui, poistettu: {fileName}",
        store_reconvertingNotification: "Muunnetaan uudelleen: {fileName}",
        store_formatOptionAuto: "Automaattinen pakkaus",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (häviöllinen)",
        store_formatOptionPngLossless: "PNG (häviötön)",
        store_formatOptionWebpLossy: "WebP (häviöllinen)",
        store_formatOptionWebpLossless: "WebP (häviötön)",
        store_formatOptionAvifLossy: "AVIF (häviöllinen)",
        store_formatOptionAvifLossless: "AVIF (häviötön)",
        previewSection_title: "Esikatselu ja lataus",
        previewSection_downloadAllButton: "Lataa kaikki",
        previewSection_deleteAllButton: "Poista kaikki",
        previewSection_placeholder: "Ei vielä kuvia.",
        previewSection_statusPending: "Odottaa",
        previewSection_statusConverting: "Muunnetaan...",
        previewSection_statusFailed: "Epäonnistui. Päivitä sivu ja yritä uudelleen.",
        previewSection_statusCompleted: "Valmis",
        previewSection_noCompletedFilesNotification: "Ei ladattavia valmiita kuvia.",
        previewSection_downloadStartedNotification: "Ladataan {fileCount} tiedostoa...",
        previewSection_listEmptyNotification: "Lista on tyhjä.",
        previewSection_allDeletedNotification: "Kaikki kuvat on poistettu.",
        previewSection_zipCreationNotification: "Luodaan ZIP-tiedostoa...",
        previewSection_zipCreationWithSkipsNotification: "Luodaan ZIP-tiedostoa: Osa kuvista on keskeneräisiä ja ne ohitetaan.",
        previewSection_zipCreationErrorNotification: "ZIP-tiedoston luonti epäonnistui.",
        previewSection_waitConversionNotification: "Odota, kunnes muunnos on valmis.",
        previewSection_downloadingFileNotification: "Ladataan: {fileName}",
        previewSection_originalSizeLabel: "Alkuperäinen koko:",
        previewSection_convertedSizeLabel: "Muunnettu koko:",
        previewSection_downloadTitle: "Lataa",
        previewSection_previewTitle: "Esikatsele",
        previewSection_deleteTitle: "Poista",
        previewSection_comparisonTab: "Vertaa",
        previewSection_settingsTab: "Asetukset",
        previewSection_originalImageLabel: "Alkuperäinen kuva",
        previewSection_completedImageLabel: "Muunnettu kuva",
        previewSection_formatLabel: "Muoto:",
        previewSection_resolutionLabel: "Resoluutio:",
        previewSection_viewLargerButton: "Katso uudessa välilehdessä",
        previewSection_qualityLabel: "Pakkauksen laatu",
        previewSection_sizeLabel: "Resoluution säätö",
        previewSection_outputFormatLabel: "Tulostusmuoto",
        previewSection_reconvertButton: "Muunna uudelleen",
        globalControls_qualityLabel: "Yleinen pakkauksen laatu",
        globalControls_sizeLabel: "Yleinen resoluution säätö",
        globalControls_formatLabel: "Yleinen tulostusmuoto",
        globalControls_reconvertAllButton: "Käytä ja muunna kaikki",
        globalControls_restoreDefaultsButton: "Palauta oletusasetukset",
        globalControls_noImagesNotification: "Lisää ensin kuvia.",
        globalControls_reconvertingAllNotification: "Muunnetaan kaikkia {imageCount} kuvaa yleisillä asetuksilla",
        globalControls_restoredNotification: "Asetukset on palautettu oletusarvoihin.",
        addSection_title: "Lisää kuvia",
        addArea_dragDropTitle: "Vedä ja pudota kuvat tähän",
        addArea_supportedFormats: "Tukee muotoja JPG, PNG, WebP, AVIF ja HEIC",
        addArea_selectButton: "Valitse kuvia",
        addArea_tips: "*Voit lisätä useita kuvia kerralla",
        ui_viewExplanationTitle: "Lue lisää näistä asetuksista",
    }
};

export default fi;