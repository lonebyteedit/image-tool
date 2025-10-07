import type { Translation } from './en.tsx';

const kn: Translation = {
    static: {
        index_lang: 'kn',
        index_dir: 'ltr',
        index_title: "Image Tool - ಸುಧಾರಿತ ಚಿತ್ರ ಪರಿವರ್ತನಾ ಸಾಧನ",
        index_description: "ಚಿತ್ರ ಸಂಕೋಚನ, ಮರುಗಾತ್ರಗೊಳಿಸುವಿಕೆ, ಮತ್ತು ಫಾರ್ಮ್ಯಾಟ್ ಪರಿವರ್ತನೆಗಾಗಿ ಒಂದು ಉಚಿತ, ವೃತ್ತಿಪರ ಆನ್‌ಲೈನ್ ಸಾಧನ. ಇದು JPG, PNG, WebP, ಮತ್ತು AVIF ನಡುವೆ ಪರಸ್ಪರ ಪರಿವರ್ತನೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ, ಮತ್ತು HEIC ಅನ್ನು ಈ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳಿಗೆ ಪರಿವರ್ತಿಸಬಲ್ಲದು. ಎಲ್ಲಾ ಸಂಸ್ಕರಣೆಯು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸ್ಥಳೀಯವಾಗಿ ನಡೆಯುತ್ತದೆ — ನಿಮ್ಮ ಫೈಲ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುವುದಿಲ್ಲ, ಇದು ನಿಮ್ಮ ಡೇಟಾದ ಸಂಪೂರ್ಣ ಗೌಪ್ಯತೆ ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
        optionsExplanation: {
            title: "ಆಯ್ಕೆಗಳ ಮಾರ್ಗದರ್ಶಿ",
            subtitle: "ನಿಮ್ಮ ಚಿತ್ರ ಪರಿವರ್ತನೆ ಫಲಿತಾಂಶಗಳನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಪ್ರತಿಯೊಂದು ಆಯ್ಕೆಯ ಕಾರ್ಯ ಮತ್ತು ಬಳಕೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
            options: [
                {
                    id: "quality-option",
                    title: "ಸಂಕೋಚನ ಗುಣಮಟ್ಟ",
                    description: <>
                        <p>ಈ ಆಯ್ಕೆಯು ಗುರಿ ಫಾರ್ಮ್ಯಾಟ್ <strong>JPG</strong>, <strong>WebP (ನಷ್ಟ ಸಹಿತ)</strong>, ಅಥವಾ <strong>AVIF (ನಷ್ಟ ಸಹಿತ)</strong> ಆಗಿದ್ದಾಗ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ.</p>
                        <p>ಕಡಿಮೆ ಮೌಲ್ಯವು ಚಿಕ್ಕ ಫೈಲ್ ಅನ್ನು ರಚಿಸುತ್ತದೆ ಆದರೆ ಚಿತ್ರದ ಗುಣಮಟ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ಶಿಫಾರಸು ಮಾಡಲಾದ <strong>75</strong> ಮೌಲ್ಯವು ಫೈಲ್ ಗಾತ್ರ ಮತ್ತು ಗುಣಮಟ್ಟದ ನಡುವೆ ಉತ್ತಮ ಸಮತೋಲನವನ್ನು ನೀಡುತ್ತದೆ.</p>
                        <p>ಸಂಕೋಚನದ ನಂತರವೂ ಫೈಲ್ ತುಂಬಾ ದೊಡ್ಡದಾಗಿದ್ದರೆ, ರೆಸಲ್ಯೂಶನ್ ಕಡಿಮೆ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ, ಇದು ಫೈಲ್ ಗಾತ್ರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆ.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "ರೆಸಲ್ಯೂಶನ್ ಹೊಂದಾಣಿಕೆ",
                    description: <>
                        <p>ಮೂಲ ಆಕಾರ ಅನುಪಾತವನ್ನು ಕಾಪಾಡಿಕೊಂಡು ಚಿತ್ರದ ರೆಸಲ್ಯೂಶನ್ ಅನ್ನು ಶೇಕಡಾವಾರು ಕಡಿಮೆ ಮಾಡಿ. <strong>100%</strong> ಮೂಲ ಆಯಾಮಗಳನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ.</p>
                        <p>ರೆಸಲ್ಯೂಶನ್ ಕಡಿಮೆ ಮಾಡುವುದರಿಂದ ಫೈಲ್ ಗಾತ್ರವನ್ನು <strong>ಗಮನಾರ್ಹವಾಗಿ</strong> ಕಡಿಮೆ ಮಾಡಬಹುದು. ನಿಮಗೆ ಮೂಲದ ಹೆಚ್ಚಿನ ರೆಸಲ್ಯೂಶನ್ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ, ಫೈಲ್ ಅನ್ನು ಚಿಕ್ಕದಾಗಿಸಲು ಇದು <strong>ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಮಾರ್ಗವಾಗಿದೆ</strong>.</p>
                        <p>ಇತರ ಆಯ್ಕೆಗಳು ಒಂದೇ ಆಗಿರುವಾಗ, <strong>100% ರೆಸಲ್ಯೂಶನ್</strong> ಆಧರಿಸಿ, <strong>75% ರೆಸಲ್ಯೂಶನ್‌ಗೆ</strong> ಹೊಂದಿಸುವುದರಿಂದ ಫೈಲ್ ಗಾತ್ರವು ಸರಾಸರಿ <strong>30%</strong> ರಷ್ಟು ಕಡಿಮೆಯಾಗುತ್ತದೆ; <strong>50% ರೆಸಲ್ಯೂಶನ್‌ಗೆ</strong> ಹೊಂದಿಸುವುದರಿಂದ ಸರಾಸರಿ <strong>65%</strong> ರಷ್ಟು ಕಡಿಮೆಯಾಗುತ್ತದೆ; ಮತ್ತು <strong>25% ರೆಸಲ್ಯೂಶನ್‌ಗೆ</strong> ಹೊಂದಿಸುವುದರಿಂದ ಸರಾಸರಿ <strong>88%</strong> ರಷ್ಟು ಕಡಿಮೆಯಾಗುತ್ತದೆ.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "ಔಟ್‌ಪುಟ್ ಫಾರ್ಮ್ಯಾಟ್",
                    description: <>
                        <p>ಚಿತ್ರಕ್ಕಾಗಿ ಔಟ್‌ಪುಟ್ ಫಾರ್ಮ್ಯಾಟ್ ಆಯ್ಕೆಮಾಡಿ. ವಿಭಿನ್ನ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು ತಮ್ಮದೇ ಆದ ಅನುಕೂಲಗಳು ಮತ್ತು ಬಳಕೆಯ ಸಂದರ್ಭಗಳನ್ನು ಹೊಂದಿವೆ.</p>
                        <p><strong>ಸ್ವಯಂ ಸಂಕೋಚನ</strong>: ಈ ಆಯ್ಕೆಯು ಇನ್‌ಪುಟ್ ಫಾರ್ಮ್ಯಾಟ್ ಆಧರಿಸಿ ಸೂಕ್ತವಾದ ಸಂಕೋಚನ ತಂತ್ರವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ:</p>
                        <ul>
                            <li><strong>JPG</strong> ಇನ್‌ಪುಟ್‌ಗಳನ್ನು <strong>JPG</strong> ಆಗಿ ಸಂಕುಚಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.</li>
                            <li><strong>PNG</strong> ಇನ್‌ಪುಟ್‌ಗಳನ್ನು <strong>PNG (ನಷ್ಟ ಸಹಿತ)</strong> ವಿಧಾನವನ್ನು ಬಳಸಿ ಸಂಕುಚಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.</li>
                            <li><strong>WebP</strong> ಇನ್‌ಪುಟ್‌ಗಳನ್ನು <strong>WebP (ನಷ್ಟ ಸಹಿತ)</strong> ವಿಧಾನವನ್ನು ಬಳಸಿ ಸಂಕುಚಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.</li>
                            <li><strong>AVIF</strong> ಇನ್‌ಪುಟ್‌ಗಳನ್ನು <strong>AVIF (ನಷ್ಟ ಸಹಿತ)</strong> ವಿಧಾನವನ್ನು ಬಳಸಿ ಸಂಕುಚಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.</li>
                            <li><strong>HEIC</strong> ಇನ್‌ಪುಟ್‌ಗಳನ್ನು <strong>JPG</strong> ಗೆ ಪರಿವರ್ತಿಸಲಾಗುತ್ತದೆ.</li>
                        </ul>

                        <p>
                            ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯಗಳ ಆಧಾರದ ಮೇಲೆ ನೀವು ಕೆಳಗೆ ಒಂದು ಫಾರ್ಮ್ಯಾಟ್ ಅನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಪ್ರತಿಯೊಂದು ಆಯ್ಕೆಗೆ ವಿವರವಾದ ಮಾರ್ಗದರ್ಶಿ ಇಲ್ಲಿದೆ:
                        </p>

                        <p>
                            <strong>JPG</strong>: ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಚಿತ್ರ ಫಾರ್ಮ್ಯಾಟ್, ಆದರೆ ಇದು ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ. <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ, ಇದು ಫೈಲ್ ಗಾತ್ರವನ್ನು ಸರಾಸರಿ <strong>90%</strong> ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. <strong>75</strong> ರ ಗುಣಮಟ್ಟದ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ, ಗುಣಮಟ್ಟದ ನಷ್ಟವು ಸಾಮಾನ್ಯವಾಗಿ <strong>ಅಗೋಚರವಾಗಿರುತ್ತದೆ</strong>. ನಿಮಗೆ ಪಾರದರ್ಶಕ ಹಿನ್ನೆಲೆ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ <strong>(ಹೆಚ್ಚಿನ ಫೋಟೋಗಳಿಗೆ ಇದು ಸತ್ಯ)</strong>, <strong>JPG</strong> ಗೆ ಪರಿವರ್ತಿಸುವುದು ಸಾಮಾನ್ಯವಾಗಿ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆಯಾಗಿದೆ.
                        </p>

                        <p>
                            <strong>PNG (ನಷ್ಟ ಸಹಿತ)</strong>: ಕೆಲವು ಗುಣಮಟ್ಟದ ನಷ್ಟದೊಂದಿಗೆ ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ, <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ ಫೈಲ್ ಗಾತ್ರವನ್ನು ಸರಾಸರಿ <strong>70%</strong> ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ನಿಮಗೆ PNG ಫಾರ್ಮ್ಯಾಟ್‌ನಲ್ಲಿ ಪಾರದರ್ಶಕ ಹಿನ್ನೆಲೆ ಅಗತ್ಯವಿದ್ದರೆ ಮಾತ್ರ ಇದನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಇಲ್ಲದಿದ್ದರೆ, <strong>JPG</strong> <strong>ಚಿಕ್ಕ ಗಾತ್ರಕ್ಕೆ ಉತ್ತಮ ಗುಣಮಟ್ಟವನ್ನು</strong> ನೀಡುತ್ತದೆ (ಪಾರದರ್ಶಕತೆ ಇಲ್ಲದೆ), ಮತ್ತು <strong>WebP (ನಷ್ಟ ಸಹಿತ)</strong> <strong>ಉತ್ತಮ ಗುಣಮಟ್ಟ, ಚಿಕ್ಕ ಗಾತ್ರ, ಮತ್ತು ಪಾರದರ್ಶಕತೆಯನ್ನು</strong> ಒದಗಿಸುತ್ತದೆ, ಇದು PNG ಫಾರ್ಮ್ಯಾಟ್ ಕಡ್ಡಾಯವಲ್ಲದಿದ್ದರೆ ಉತ್ತಮ ಪರ್ಯಾಯವಾಗಿದೆ.
                        </p>

                        <p>
                            <strong>PNG (ನಷ್ಟ ರಹಿತ)</strong>: ಗುಣಮಟ್ಟದ ನಷ್ಟವಿಲ್ಲದೆ ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ ಫೈಲ್ ಗಾತ್ರವನ್ನು ಸರಾಸರಿ <strong>20%</strong> ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ಆದಾಗ್ಯೂ, <strong>PNG ಫಾರ್ಮ್ಯಾಟ್ ಕಡ್ಡಾಯವಲ್ಲದಿದ್ದರೆ</strong>, <strong>WebP (ನಷ್ಟ ರಹಿತ)</strong> ಉತ್ತಮ ಆಯ್ಕೆಯಾಗಿದೆ ಏಕೆಂದರೆ ಇದು ಚಿಕ್ಕ ಫೈಲ್ ಗಾತ್ರಗಳನ್ನು ನೀಡುತ್ತದೆ.
                        </p>

                        <p>
                            <strong>WebP (ನಷ್ಟ ಸಹಿತ)</strong>: ಸ್ವಲ್ಪ ಗುಣಮಟ್ಟದ ನಷ್ಟದೊಂದಿಗೆ ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ ಫೈಲ್ ಗಾತ್ರವನ್ನು ಸರಾಸರಿ <strong>90%</strong> ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ಇದು <strong>PNG (ನಷ್ಟ ಸಹಿತ)</strong> ಗೆ ಅತ್ಯುತ್ತಮ ಬದಲಿಯಾಗಿದೆ, ಉತ್ತಮ ಗುಣಮಟ್ಟ ಮತ್ತು ಚಿಕ್ಕ ಗಾತ್ರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಗಮನಿಸಿ: ಕೆಲವು ಹಳೆಯ ಸಾಧನಗಳಲ್ಲಿ WebP ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.
                        </p>

                        <p>
                            <strong>WebP (ನಷ್ಟ ರಹಿತ)</strong>: ಗುಣಮಟ್ಟದ ನಷ್ಟವಿಲ್ಲದೆ ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ ಫೈಲ್ ಗಾತ್ರವನ್ನು ಸರಾಸರಿ <strong>50%</strong> ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಇದು <strong>PNG (ನಷ್ಟ ರಹಿತ)</strong> ಗೆ ಉತ್ತಮ ಬದಲಿಯಾಗಿದೆ. ಗಮನಿಸಿ: ಕೆಲವು ಹಳೆಯ ಸಾಧನಗಳಲ್ಲಿ WebP ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.
                        </p>

                        <p>
                            <strong>AVIF (ನಷ್ಟ ಸಹಿತ)</strong>: ಸ್ವಲ್ಪ ಗುಣಮಟ್ಟದ ನಷ್ಟದೊಂದಿಗೆ ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. WebP ಯ ಉತ್ತರಾಧಿಕಾರಿಯಾಗಿ, ಇದು ಇನ್ನೂ ಹೆಚ್ಚಿನ ಸಂಕೋಚನ ದರವನ್ನು ನೀಡುತ್ತದೆ, <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ ಫೈಲ್ ಗಾತ್ರವನ್ನು ಸರಾಸರಿ <strong>94%</strong> ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ಅತ್ಯಾಧುನಿಕ ಫಾರ್ಮ್ಯಾಟ್ ಆಗಿ, AVIF ಅತ್ಯಂತ ಚಿಕ್ಕ ಫೈಲ್ ಗಾತ್ರಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಆದಾಗ್ಯೂ, ಬ್ರೌಸರ್ ಮತ್ತು ಸಾಧನ ಹೊಂದಾಣಿಕೆ ಇನ್ನೂ ಸೀಮಿತವಾಗಿದೆ. ಈ ಫಾರ್ಮ್ಯಾಟ್ ಮುಂದುವರಿದ ಬಳಕೆದಾರರಿಗೆ ಅಥವಾ ಗುರಿ ಸಾಧನಗಳು ಅದನ್ನು ಬೆಂಬಲಿಸುತ್ತವೆ ಎಂದು ನಿಮಗೆ ಖಚಿತವಾದಾಗ ಉತ್ತಮವಾಗಿದೆ.
                        </p>
                        <p>
                            <strong>AVIF (ನಷ್ಟ ರಹಿತ)</strong>: ಗುಣಮಟ್ಟದ ನಷ್ಟವಿಲ್ಲದೆ ಪಾರದರ್ಶಕತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. <strong>ಸಂಕುಚಿತಗೊಳಿಸದ PNG</strong> ಗೆ ಹೋಲಿಸಿದರೆ, ಫೈಲ್ ಗಾತ್ರ ಕಡಿತವು ಗಮನಾರ್ಹವಾಗಿಲ್ಲ, ಮತ್ತು ಕೆಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ, ಹೆಚ್ಚಾಗಬಹುದು. ನಿಮಗೆ ನಷ್ಟ ರಹಿತ AVIF ಗಾಗಿ ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ, <strong>PNG (ನಷ್ಟ ರಹಿತ)</strong> ಅಥವಾ <strong>WebP (ನಷ್ಟ ರಹಿತ)</strong> ಸಾಮಾನ್ಯವಾಗಿ ಉತ್ತಮ ಆಯ್ಕೆಗಳಾಗಿವೆ.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "ಥೀಮ್ ಬದಲಾಯಿಸಿ"
    },
    interactive: {
        store_imageDeletedNotification: "ತೆಗೆದುಹಾಕಲಾಗಿದೆ: {fileName}",
        store_convertingImagesNotification: "{number} ಚಿತ್ರಗಳನ್ನು ಪರಿವರ್ತಿಸಲಾಗುತ್ತಿದೆ...",
        store_conversionFailedNotification: "ಪರಿವರ್ತನೆ ವಿಫಲವಾಗಿದೆ: {fileName}",
        store_unsupportedFileTypeNotification: "ಬೆಂಬಲಿಸದ ಫಾರ್ಮ್ಯಾಟ್, ತೆಗೆದುಹಾಕಲಾಗಿದೆ: {fileName}",
        store_fileReadErrorNotification: "ಫೈಲ್ ಓದಲಾಗಲಿಲ್ಲ, ತೆಗೆದುಹಾಕಲಾಗಿದೆ: {fileName}",
        store_reconvertingNotification: "ಮರು-ಪರಿವರ್ತಿಸಲಾಗುತ್ತಿದೆ: {fileName}",
        store_formatOptionAuto: "ಸ್ವಯಂ ಸಂಕೋಚನ",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (ನಷ್ಟ ಸಹಿತ)",
        store_formatOptionPngLossless: "PNG (ನಷ್ಟ ರಹಿತ)",
        store_formatOptionWebpLossy: "WebP (ನಷ್ಟ ಸಹಿತ)",
        store_formatOptionWebpLossless: "WebP (ನಷ್ಟ ರಹಿತ)",
        store_formatOptionAvifLossy: "AVIF (ನಷ್ಟ ಸಹಿತ)",
        store_formatOptionAvifLossless: "AVIF (ನಷ್ಟ ರಹಿತ)",
        previewSection_title: "ಮುನ್ನೋಟ ಮತ್ತು ಡೌನ್‌ಲೋಡ್",
        previewSection_downloadAllButton: "ಎಲ್ಲವನ್ನೂ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        previewSection_deleteAllButton: "ಎಲ್ಲವನ್ನೂ ಅಳಿಸಿ",
        previewSection_placeholder: "ಇನ್ನೂ ಯಾವುದೇ ಚಿತ್ರಗಳಿಲ್ಲ.",
        previewSection_statusPending: "ಬಾಕಿ ಇದೆ",
        previewSection_statusConverting: "ಪರಿವರ್ತಿಸಲಾಗುತ್ತಿದೆ...",
        previewSection_statusFailed: "ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಪುಟವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        previewSection_statusCompleted: "ಪೂರ್ಣಗೊಂಡಿದೆ",
        previewSection_noCompletedFilesNotification: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಯಾವುದೇ ಪೂರ್ಣಗೊಂಡ ಚಿತ್ರಗಳಿಲ್ಲ.",
        previewSection_downloadStartedNotification: "{fileCount} ಫೈಲ್‌ಗಳ ಡೌನ್‌ಲೋಡ್ ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ...",
        previewSection_listEmptyNotification: "ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ.",
        previewSection_allDeletedNotification: "ಎಲ್ಲಾ ಚಿತ್ರಗಳನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ.",
        previewSection_zipCreationNotification: "ZIP ರಚಿಸಲಾಗುತ್ತಿದೆ...",
        previewSection_zipCreationWithSkipsNotification: "ZIP ರಚಿಸಲಾಗುತ್ತಿದೆ: ಕೆಲವು ಚಿತ್ರಗಳು ಪೂರ್ಣಗೊಂಡಿಲ್ಲ, ಅವುಗಳನ್ನು ತಪ್ಪಿಸಲಾಗುವುದು.",
        previewSection_zipCreationErrorNotification: "ZIP ರಚಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ.",
        previewSection_waitConversionNotification: "ಪರಿವರ್ತನೆ ಮುಗಿಯುವವರೆಗೆ ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ.",
        previewSection_downloadingFileNotification: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ: {fileName}",
        previewSection_originalSizeLabel: "ಮೂಲ ಗಾತ್ರ:",
        previewSection_convertedSizeLabel: "ಪರಿವರ್ತಿತ ಗಾತ್ರ:",
        previewSection_downloadTitle: "ಡೌನ್‌ಲೋಡ್",
        previewSection_previewTitle: "ಮುನ್ನೋಟ",
        previewSection_deleteTitle: "ಅಳಿಸಿ",
        previewSection_comparisonTab: "ಹೋಲಿಕೆ",
        previewSection_settingsTab: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        previewSection_originalImageLabel: "ಮೂಲ ಚಿತ್ರ",
        previewSection_completedImageLabel: "ಪರಿವರ್ತಿತ ಚಿತ್ರ",
        previewSection_formatLabel: "ಫಾರ್ಮ್ಯಾಟ್:",
        previewSection_resolutionLabel: "ರೆಸಲ್ಯೂಶನ್:",
        previewSection_viewLargerButton: "ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
        previewSection_qualityLabel: "ಸಂಕೋಚನ ಗುಣಮಟ್ಟ",
        previewSection_sizeLabel: "ರೆಸಲ್ಯೂಶನ್ ಹೊಂದಾಣಿಕೆ",
        previewSection_outputFormatLabel: "ಔಟ್‌ಪುಟ್ ಫಾರ್ಮ್ಯಾಟ್",
        previewSection_reconvertButton: "ಮರು-ಪರಿವರ್ತಿಸಿ",
        globalControls_qualityLabel: "ಜಾಗತಿಕ ಸಂಕೋಚನ ಗುಣಮಟ್ಟ",
        globalControls_sizeLabel: "ಜಾಗತಿಕ ರೆಸಲ್ಯೂಶನ್ ಹೊಂದಾಣಿಕೆ",
        globalControls_formatLabel: "ಜಾಗತಿಕ ಔಟ್‌ಪುಟ್ ಫಾರ್ಮ್ಯಾಟ್",
        globalControls_reconvertAllButton: "ಎಲ್ಲವನ್ನೂ ಅನ್ವಯಿಸಿ ಮತ್ತು ಪರಿವರ್ತಿಸಿ",
        globalControls_restoreDefaultsButton: "ಆಯ್ಕೆಗಳನ್ನು ಮರುಹೊಂದಿಸಿ",
        globalControls_noImagesNotification: "ದಯವಿಟ್ಟು ಮೊದಲು ಚಿತ್ರಗಳನ್ನು ಸೇರಿಸಿ.",
        globalControls_reconvertingAllNotification: "ಜಾಗತಿಕ ಸೆಟ್ಟಿಂಗ್‌ಗಳೊಂದಿಗೆ ಎಲ್ಲಾ {imageCount} ಚಿತ್ರಗಳನ್ನು ಮರು-ಪರಿವರ್ತಿಸಲಾಗುತ್ತಿದೆ",
        globalControls_restoredNotification: "ಆಯ್ಕೆಗಳನ್ನು ಡೀಫಾಲ್ಟ್‌ಗೆ ಮರುಹೊಂದಿಸಲಾಗಿದೆ.",
        addSection_title: "ಚಿತ್ರಗಳನ್ನು ಸೇರಿಸಿ",
        addArea_dragDropTitle: "ಚಿತ್ರಗಳನ್ನು ಇಲ್ಲಿಗೆ ಎಳೆದು ತನ್ನಿ",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, ಮತ್ತು HEIC ಫಾರ್ಮ್ಯಾಟ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ",
        addArea_selectButton: "ಚಿತ್ರಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        addArea_tips: "*ಒಂದೇ ಬಾರಿಗೆ ಹಲವಾರು ಚಿತ್ರಗಳನ್ನು ಸೇರಿಸಬಹುದು",
        ui_viewExplanationTitle: "ಈ ಆಯ್ಕೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
    }
};

export default kn;