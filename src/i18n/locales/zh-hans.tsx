import type { Translation } from './en.tsx';

const zhHans: Translation = {
  static: {
    index_lang: 'zh-hans',
    index_dir: 'ltr',
    index_title: "Image Tool - 高级图片转换工具",
    index_description: "这是一款专业、免费的在线图片处理工具，支持图片压缩、调整图片分辨率，并能在JPG/PNG/WebP/AVIF多种格式的互相转换，能将HEIC转换为这些格式。所有操作均在浏览器本地执行，你的文件绝不会上传至服务器，为您的数据隐私提供完全的安全保障。",
    optionsExplanation: {
      title: "选项指南",
      subtitle: "了解每个选项的功能和使用方法，优化您的图片转换结果",
      options: [
        {
          id: "quality-option",
          title: "压缩质量",
          description: <>
            <p>此选项仅仅在目标格式为 <strong>JPG</strong> 、 <strong>WebP (有损)</strong> 和 <strong>AVIF (有损)</strong> 时生效。</p>
            <p>数值越低，文件越小，但画质损失也越大。推荐值为<strong>75</strong>，可在保证质量的同时显著减小文件体积。</p>
            <p>如果文件依然过大，尝试降低分辨率，这通常能更有效地减小体积。</p>
          </>
        },
        {
          id: "size-option",
          title: "分辨率调整",
          description: <>
            <p>按百分比减小图片的分辨率，保持原始宽高比不变，<strong>100%</strong> 表示保持原始分辨率。</p>
            <p>减小分辨率可 <strong>大幅</strong> 降低文件体积，如果原图片分辨率较高，而你又不需要使用这么高的分辨率，这可能是减小文件体积的 <strong>最有效的方法</strong> 。</p>
            <p>在其他选项相同的情况下，以 <strong>100%分辨率</strong> 为基准。调整至 <strong>75%分辨率</strong> 平均减小 <strong>30%</strong> 的文件体积；调整至 <strong>50%分辨率</strong> 平均减小 <strong>65%</strong> 的文件体积；调整至 <strong>25%分辨率</strong> 平均减小 <strong>88%</strong> 的文件体积；</p>
          </>
        },
        {
          id: "format-option",
          title: "输出格式",
          description: <>
            <p>选择图片的输出格式，不同格式有各自的优势和适用场景。</p>
            <p><strong>自动压缩</strong> : 此选项会按照以下策略来压缩图片:
            </p>
            <ul>
              <li>
                如果输入图片是 <strong>JPG</strong> ，将使用 <strong>JPG</strong> 方案来进行压缩。
              </li>
              <li>
                如果输入图片是 <strong>PNG</strong>，将使用 <strong>PNG (有损)</strong> 方案来进行压缩。
              </li>
              <li>
                如果输入图片是 <strong>WebP</strong> ，将使用 <strong>WebP (有损)</strong> 方案来进行压缩。
              </li>
              <li>
                如果输入图片是 <strong>AVIF</strong> ，将使用 <strong>AVIF (有损)</strong> 方案来进行压缩。
              </li>
              <li>
                如果输入图片是 <strong>HEIC</strong> ，最终将会转换为 <strong>JPG</strong> 。
              </li>
            </ul>

            <p>
              各项方案的详细介绍如下，当然你也可以根据需要来选择方案。
            </p>

            <p>
              <strong>JPG</strong> : 目前最流行的图片格式，但不支持透明通道。相较于 <strong>未压缩PNG</strong>，该格式平均减小 <strong>90%</strong> 的文件体积。在压缩质量是 <strong>75</strong> 时，只有 <strong>难以察觉</strong> 的画质损失。如果不需要透明通道 <strong>（大多数图片都不需要）</strong>，把图片转为 <strong>JPG</strong> 是最常用的选择。
            </p>

            <p>
              <strong>PNG (有损)</strong> : 支持透明通道且有轻微的画质损失。相较于 <strong>未压缩PNG</strong> 平均 <strong>减小70%</strong> 的文件体积。只有在需要保留透明通道且需要PNG时才值得选择。如果 <strong>不需要保留透明通道</strong> ，<strong>JPG</strong> 是更好的选择，因为它的 <strong>画质更好且体积更小</strong>；如果不必须是PNG，<strong>WebP (有损)</strong> 是更好的选择，因为它的 <strong>画质更好、体积更小、同样有透明通道</strong> 。
            </p>

            <p>
              <strong>PNG (无损)</strong> : 支持透明通道且没有画质损失。在保持画质不变的情况下，相较于 <strong>未压缩PNG</strong> 平均 <strong>减小20%</strong> 的文件体积。但如果 <strong>不必须是PNG</strong> 时，<strong>WebP (无损)</strong> 是更好的选择。
            </p>

            <p>
              <strong>WebP (有损)</strong> : 支持透明通道且有轻微的画质损失。相较于 <strong>未压缩PNG</strong> 平均 <strong>减小90%</strong> 的文件体积，是 <strong>PNG (有损)</strong> 更好的替代品，因为画质更好且体积更小。需要注意的是一些老旧设备不兼容WebP。
            </p>

            <p>
              <strong>WebP (无损)</strong> : 支持透明通道且没有画质损失。相较于 <strong>未压缩PNG</strong> 平均减小50%的文件体积，是 <strong>PNG (无损)</strong> 更好的替代品，因为体积更小。需要注意的是一些老旧设备不兼容WebP。
            </p>

            <p>
              <strong>AVIF (有损)</strong>: 支持透明通道且有画质损失。作为WebP的继任者，它拥有更高的压缩率。相较于 <strong>未压缩PNG</strong> 平均 <strong>减小94%</strong> 的文件体积。AVIF作为最新且先进的一种格式，它的画质更好且体积更小，但是其兼容性仍然不够好。因此，该格式最适合高级用户，或在您能确定目标设备支持它时使用。
            </p>

            <p>
              <strong>AVIF (无损)</strong>: 支持透明通道且没有画质损失。相较于 <strong>未压缩PNG</strong>， 其文件体积的减小效果不明显，在某些情况下甚至可能增大。除非你有特定需求，否则 <strong>PNG (无损)</strong> 和 <strong>WebP (无损)</strong> 是更好的选择。
            </p>
          </>
        }
      ]
    },
    themeToggle_title: "切换主题"
  },
  interactive: {
    store_imageDeletedNotification: "已删除图片: {fileName}",
    store_convertingImagesNotification: "正在转换 {number} 张图片，请耐心等候",
    store_conversionFailedNotification: "该图片转换失败: {fileName}",
    store_unsupportedFileTypeNotification: "有不支持的图片格式，已剔除: {fileName}",
    store_fileReadErrorNotification: "无法读取该图片，已剔除: {fileName}",
    store_reconvertingNotification: "正在重新转换图片: {fileName}",
    store_formatOptionAuto: "自动压缩",
    store_formatOptionJpg: "JPG",
    store_formatOptionPngLossy: "PNG (有损)",
    store_formatOptionPngLossless: "PNG (无损)",
    store_formatOptionWebpLossy: "WebP (有损)",
    store_formatOptionWebpLossless: "WebP (无损)",
    store_formatOptionAvifLossy: "AVIF (有损)",
    store_formatOptionAvifLossless: "AVIF (无损)",
    previewSection_title: "预览与下载",
    previewSection_downloadAllButton: "下载全部",
    previewSection_deleteAllButton: "全部删除",
    previewSection_placeholder: "暂无图片",
    previewSection_statusPending: "待转换",
    previewSection_statusConverting: "正在转换...",
    previewSection_statusFailed: "转换失败，请刷新网页重试",
    previewSection_statusCompleted: "转换完成",
    previewSection_noCompletedFilesNotification: "没有已完成转换的图片可以下载",
    previewSection_downloadStartedNotification: "开始下载 {fileCount} 个文件",
    previewSection_listEmptyNotification: "列表已经为空",
    previewSection_allDeletedNotification: "已清空所有图片",
    previewSection_zipCreationNotification: "正在创建ZIP...",
    previewSection_zipCreationWithSkipsNotification: "正在创建 ZIP: 有未完成图片，将被跳过。",
    previewSection_zipCreationErrorNotification: "在创建 ZIP 时发生了错误。",
    previewSection_waitConversionNotification: "请等待图片完成转换",
    previewSection_downloadingFileNotification: "开始下载: {fileName}",
    previewSection_originalSizeLabel: "原大小:",
    previewSection_convertedSizeLabel: "转换后:",
    previewSection_downloadTitle: "下载",
    previewSection_previewTitle: "预览",
    previewSection_deleteTitle: "删除",
    previewSection_comparisonTab: "效果对比",
    previewSection_settingsTab: "单独设置",
    previewSection_originalImageLabel: "原始图片",
    previewSection_completedImageLabel: "转换后图片",
    previewSection_formatLabel: "格式:",
    previewSection_resolutionLabel: "分辨率:",
    previewSection_viewLargerButton: "新标签页查看大图",
    previewSection_qualityLabel: "压缩质量",
    previewSection_sizeLabel: "分辨率调整",
    previewSection_outputFormatLabel: "输出格式",
    previewSection_reconvertButton: "重新转换此图片",
    globalControls_qualityLabel: "全局压缩质量",
    globalControls_sizeLabel: "全局分辨率调整",
    globalControls_formatLabel: "全局输出格式",
    globalControls_reconvertAllButton: "应用并转换全部",
    globalControls_restoreDefaultsButton: "恢复默认设置",
    globalControls_noImagesNotification: "请先添加图片",
    globalControls_reconvertingAllNotification: "正在使用全局设置重新转换所有 {imageCount} 张图片",
    globalControls_restoredNotification: "全局参数已恢复为默认值",
    addSection_title: "添加图片",
    addArea_dragDropTitle: "拖放图片至此区域",
    addArea_supportedFormats: "支持 JPG、PNG、WebP、AVIF、HEIC 格式",
    addArea_selectButton: "选择图片",
    addArea_tips: "*可一次添加多张图片",
    ui_viewExplanationTitle: "了解这些选项",
  }
};

export default zhHans;