import type { Translation } from './en.tsx';

const ja: Translation = {
    static: {
        index_lang: 'ja',
        index_dir: 'ltr',
        index_title: "Image Tool - 高度な画像変換ツール",
        index_description: "プロ向けの無料オンライン画像処理ツールです。画像の圧縮、リサイズ、フォーマット変換に対応し、JPG、PNG、WebP、AVIF間の相互変換や、HEICからこれらのフォーマットへの変換が可能です。すべての処理はブラウザ内でローカルに実行され、ファイルがサーバーにアップロードされることは一切ありません。これにより、完全なプライバシーとデータセキュリティが保証されます。",
        optionsExplanation: {
            title: "オプションガイド",
            subtitle: "各オプションの機能と使い方を理解し、画像変換の結果を最適化しましょう。",
            options: [
                {
                    id: "quality-option",
                    title: "圧縮品質",
                    description: <>
                        <p>このオプションは、変換後のフォーマットが<strong>JPG</strong>、<strong>WebP (非可逆)</strong>、または<strong>AVIF (非可逆)</strong>の場合にのみ適用されます。</p>
                        <p>値を低くするとファイルサイズは小さくなりますが、画質は低下します。推奨値の<strong>75</strong>は、ファイルサイズと画質のバランスが取れた良い設定です。</p>
                        <p>圧縮後もファイルサイズが大きすぎる場合は、解像度を下げることをお試しください。多くの場合、こちらの方がファイルサイズを縮小するのにより効果的です。</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "解像度調整",
                    description: <>
                        <p>元の縦横比を維持したまま、画像の解像度をパーセンテージで縮小します。<strong>100%</strong>は元の解像度を維持します。</p>
                        <p>解像度を下げると、ファイルサイズを<strong>大幅に</strong>削減できます。元の高解像度が必要ない場合、これはファイルサイズを小さくするための<strong>最も効果的な方法</strong>です。</p>
                        <p>他のオプションが同じ条件の場合、<strong>100%の解像度</strong>を基準として、<strong>75%</strong>に調整するとファイルサイズが平均<strong>30%</strong>、<strong>50%</strong>にすると平均<strong>65%</strong>、<strong>25%</strong>にすると平均<strong>88%</strong>削減されます。</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "出力フォーマット",
                    description: <>
                        <p>画像の出力フォーマットを選択します。フォーマットごとに、それぞれ利点と最適な用途があります。</p>
                        <p><strong>自動圧縮</strong>：このオプションは、入力フォーマットに基づいて、最適な圧縮戦略を自動的に適用します。</p>
                        <ul>
                            <li><strong>JPG</strong>は<strong>JPG</strong>として圧縮されます。</li>
                            <li><strong>PNG</strong>は<strong>PNG (非可逆)</strong>方式で圧縮されます。</li>
                            <li><strong>WebP</strong>は<strong>WebP (非可逆)</strong>方式で圧縮されます。</li>
                            <li><strong>AVIF</strong>は<strong>AVIF (非可逆)</strong>方式で圧縮されます。</li>
                            <li><strong>HEIC</strong>は<strong>JPG</strong>に変換されます。</li>
                        </ul>

                        <p>
                            また、特定のニーズに合わせて以下のフォーマットを手動で選択することもできます。各オプションの詳細なガイドはこちらです。
                        </p>

                        <p>
                            <strong>JPG</strong>：最も普及している画像フォーマットですが、透明度には対応していません。<strong>非圧縮PNG</strong>と比較して、ファイルサイズを平均<strong>90%</strong>削減できます。品質設定が<strong>75</strong>の場合、画質の低下は<strong>ほとんど知覚できません</strong>。透明な背景が不要な場合<strong>（ほとんどの写真がそうです）</strong>、<strong>JPG</strong>への変換が通常は最良の選択です。
                        </p>

                        <p>
                            <strong>PNG (非可逆)</strong>：透明度をサポートしますが、若干の画質低下があります。<strong>非圧縮PNG</strong>と比較してファイルサイズを平均<strong>70%</strong>削減します。PNGフォーマットで透明な背景が必要な場合にのみ、このオプションを選択してください。そうでなければ、透明度が不要なら<strong>JPG</strong>の方が<strong>より少ないサイズで高品質</strong>です。PNG形式にこだわる必要がなければ、<strong>WebP (非可逆)</strong>は<strong>より高品質、より小さいサイズ、そして透明度をサポート</strong>しているため、優れた代替手段となります。
                        </p>

                        <p>
                            <strong>PNG (可逆)</strong>：透明度をサポートし、画質の低下はありません。<strong>非圧縮PNG</strong>と比較してファイルサイズを平均<strong>20%</strong>削減します。ただし、<strong>PNG形式にこだわる必要がない</strong>場合、<strong>WebP (可逆)</strong>の方がファイルサイズが小さくなるため、より良い選択です。
                        </p>

                        <p>
                            <strong>WebP (非可逆)</strong>：透明度をサポートし、若干の画質低下があります。<strong>非圧縮PNG</strong>と比較してファイルサイズを平均<strong>90%</strong>削減します。<strong>PNG (非可逆)</strong>の優れた代替品であり、より高品質でファイルサイズも小さくなります。注意：一部の古いデバイスではWebPはサポートされていません。
                        </p>

                        <p>
                            <strong>WebP (可逆)</strong>：透明度をサポートし、画質の低下はありません。<strong>非圧縮PNG</strong>と比較してファイルサイズを平均<strong>50%</strong>削減するため、<strong>PNG (可逆)</strong>よりも優れた代替品です。注意：一部の古いデバイスではWebPはサポートされていません。
                        </p>

                        <p>
                            <strong>AVIF (非可逆)</strong>：透明度をサポートし、若干の画質低下があります。WebPの後継として、さらに高い圧縮率を誇り、<strong>非圧縮PNG</strong>と比較してファイルサイズを平均<strong>94%</strong>削減します。最先端のフォーマットとして、AVIFは非常に小さいファイルサイズで優れた品質を提供します。ただし、ブラウザやデバイスの互換性はまだ限定的です。このフォーマットは、上級ユーザーや、ターゲットデバイスが対応していることを確認できる場合に最適です。
                        </p>
                        <p>
                            <strong>AVIF (可逆)</strong>：透明度をサポートし、画質の低下はありません。<strong>非圧縮PNG</strong>と比較して、ファイルサイズの削減効果は大きくなく、場合によっては増加することさえあります。特定のニーズがない限り、通常は<strong>PNG (可逆)</strong>または<strong>WebP (可逆)</strong>の方が良い選択です。
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "テーマを切り替え"
    },
    interactive: {
        store_imageDeletedNotification: "削除しました: {fileName}",
        store_convertingImagesNotification: "{number}件の画像を変換中...",
        store_conversionFailedNotification: "変換に失敗しました: {fileName}",
        store_unsupportedFileTypeNotification: "非対応のフォーマットのため削除しました: {fileName}",
        store_fileReadErrorNotification: "ファイルを読み込めませんでした。削除しました: {fileName}",
        store_reconvertingNotification: "再変換中: {fileName}",
        store_formatOptionAuto: "自動圧縮",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (非可逆)",
        store_formatOptionPngLossless: "PNG (可逆)",
        store_formatOptionWebpLossy: "WebP (非可逆)",
        store_formatOptionWebpLossless: "WebP (可逆)",
        store_formatOptionAvifLossy: "AVIF (非可逆)",
        store_formatOptionAvifLossless: "AVIF (可逆)",
        previewSection_title: "プレビューとダウンロード",
        previewSection_downloadAllButton: "すべてダウンロード",
        previewSection_deleteAllButton: "すべて削除",
        previewSection_placeholder: "まだ画像がありません。",
        previewSection_statusPending: "待機中",
        previewSection_statusConverting: "変換中...",
        previewSection_statusFailed: "失敗しました。ページを更新してもう一度お試しください。",
        previewSection_statusCompleted: "完了",
        previewSection_noCompletedFilesNotification: "ダウンロード可能な変換済み画像がありません。",
        previewSection_downloadStartedNotification: "{fileCount}個のファイルのダウンロードを開始しています...",
        previewSection_listEmptyNotification: "リストは空です。",
        previewSection_allDeletedNotification: "すべての画像が削除されました。",
        previewSection_zipCreationNotification: "ZIPを作成中...",
        previewSection_zipCreationWithSkipsNotification: "ZIPを作成中: 未完了の画像があるため、スキップされます。",
        previewSection_zipCreationErrorNotification: "ZIPの作成中にエラーが発生しました。",
        previewSection_waitConversionNotification: "変換が完了するまでお待ちください。",
        previewSection_downloadingFileNotification: "ダウンロード中: {fileName}",
        previewSection_originalSizeLabel: "元のサイズ:",
        previewSection_convertedSizeLabel: "変換後のサイズ:",
        previewSection_downloadTitle: "ダウンロード",
        previewSection_previewTitle: "プレビュー",
        previewSection_deleteTitle: "削除",
        previewSection_comparisonTab: "比較",
        previewSection_settingsTab: "設定",
        previewSection_originalImageLabel: "元の画像",
        previewSection_completedImageLabel: "変換後の画像",
        previewSection_formatLabel: "フォーマット:",
        previewSection_resolutionLabel: "解像度:",
        previewSection_viewLargerButton: "新しいタブで表示",
        previewSection_qualityLabel: "圧縮品質",
        previewSection_sizeLabel: "解像度調整",
        previewSection_outputFormatLabel: "出力フォーマット",
        previewSection_reconvertButton: "この画像を再変換",
        globalControls_qualityLabel: "全体の圧縮品質",
        globalControls_sizeLabel: "全体の解像度調整",
        globalControls_formatLabel: "全体の出力フォーマット",
        globalControls_reconvertAllButton: "設定を適用してすべて再変換",
        globalControls_restoreDefaultsButton: "初期設定に戻す",
        globalControls_noImagesNotification: "まず画像を追加してください。",
        globalControls_reconvertingAllNotification: "全体設定を適用して{imageCount}件すべての画像を再変換しています",
        globalControls_restoredNotification: "オプションが初期設定にリセットされました。",
        addSection_title: "画像を追加",
        addArea_dragDropTitle: "ここに画像をドラッグ＆ドロップ",
        addArea_supportedFormats: "JPG、PNG、WebP、AVIF、HEIC形式に対応",
        addArea_selectButton: "画像を選択",
        addArea_tips: "*複数の画像をまとめて追加できます。",
        ui_viewExplanationTitle: "オプションの詳細を見る",
    }
};

export default ja;