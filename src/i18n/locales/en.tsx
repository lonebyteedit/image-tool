const en = {
  static: {
    index_lang: 'en',
    index_dir: 'ltr',
    index_title: "Image Tool - Advanced Image Conversion Tool",
    index_description: "A free, professional online tool for image compression, resizing, and format conversion. It supports mutual conversion between JPG, PNG, WebP, and AVIF, and can convert HEIC into these formats. All processing happens locally in your browser—your files are never uploaded, ensuring complete privacy and data security.",
    optionsExplanation: {
      title: "Options Guide",
      subtitle: "Understand the function and usage of each option to optimize your image conversion results.",
      options: [
        {
          id: "quality-option",
          title: "Compression Quality",
          description: <>
            <p>This option only applies when the target format is <strong>JPG</strong>, <strong>WebP (Lossy)</strong>, or <strong>AVIF (Lossy)</strong>.</p>
            <p>A lower value creates a smaller file but reduces image quality. The recommended value of <strong>75</strong> offers a good balance between file size and quality.</p>
            <p>If the file is still too large after compression, try reducing the resolution, which is often more effective for shrinking file size.</p>
          </>
        },
        {
          id: "size-option",
          title: "Resolution Adjustment",
          description: <>
            <p>Reduce the image resolution by a percentage while maintaining the original aspect ratio. <strong>100%</strong> preserves the original dimensions.</p>
            <p>Reducing the resolution can <strong>significantly</strong> reduce the file size. If you don't need the original's high resolution, this is often the <strong>most effective way</strong> to make the file smaller.</p>
            <p>With other options being the same, based on <strong>100% resolution</strong>. Adjusting to <strong>75% resolution</strong> reduces the file size by an average of <strong>30%</strong>; adjusting to <strong>50% resolution</strong> reduces it by an average of <strong>65%</strong>; adjusting to <strong>25% resolution</strong> reduces it by an average of <strong>88%</strong>.</p>
          </>
        },
        {
          id: "format-option",
          title: "Output Format",
          description: <>
            <p>Choose the output format for the image. Different formats have their own advantages and use cases.</p>
            <p><strong>Auto Compress</strong>: This option automatically applies a suitable compression strategy based on the input format:</p>
            <ul>
              <li><strong>JPG</strong> inputs are compressed as <strong>JPG</strong>.</li>
              <li><strong>PNG</strong> inputs are compressed using the <strong>PNG (Lossy)</strong> method.</li>
              <li><strong>WebP</strong> inputs are compressed using the <strong>WebP (Lossy)</strong> method.</li>
              <li><strong>AVIF</strong> inputs are compressed using the <strong>AVIF (Lossy)</strong> method.</li>
              <li><strong>HEIC</strong> inputs are converted to <strong>JPG</strong>.</li>
            </ul>

            <p>
              You can also manually select a format below based on your specific needs. Here’s a detailed guide to each option:
            </p>

            <p>
              <strong>JPG</strong>: The most popular image format, though it doesn't support transparency. When converting from an <strong>uncompressed PNG</strong>, it can reduce file size by an average of <strong>90%</strong>. At a quality setting of <strong>75</strong>, the quality loss is often <strong>imperceptible</strong>. If you don't need a transparent background <strong>(which is true for most photos)</strong>, converting to <strong>JPG</strong> is usually the best choice.
            </p>

            <p>
              <strong>PNG (Lossy)</strong>: Supports transparency with some quality loss, reducing file size by an average of <strong>70%</strong> compared to an <strong>uncompressed PNG</strong>. Choose this only if you need a transparent background in the PNG format. Otherwise, <strong>JPG</strong> offers <strong>better quality for a smaller size</strong> (without transparency), and <strong>WebP (Lossy)</strong> provides <strong>better quality, smaller size, and transparency</strong>, making it a superior alternative if the PNG format isn't a strict requirement.
            </p>

            <p>
              <strong>PNG (Lossless)</strong>: Supports transparency with no quality loss. Reduces file size by an average of <strong>20%</strong> compared to an <strong>uncompressed PNG</strong>. However, <strong>if the PNG format is not a strict requirement</strong>, <strong>WebP (Lossless)</strong> is a better choice as it offers smaller file sizes.
            </p>

            <p>
              <strong>WebP (Lossy)</strong>: Supports transparency with slight quality loss. Reduces file size by an average of <strong>90%</strong> compared to an <strong>uncompressed PNG</strong>. It's an excellent replacement for <strong>PNG (Lossy)</strong>, offering better quality and smaller sizes. Note: WebP is not supported on some older devices.
            </p>

            <p>
              <strong>WebP (Lossless)</strong>: Supports transparency with no quality loss. Reduces file size by an average of <strong>50%</strong> compared to an <strong>uncompressed PNG</strong>, making it a superior replacement for <strong>PNG (Lossless)</strong>. Note: WebP is not supported on some older devices.
            </p>

            <p>
              <strong>AVIF (Lossy)</strong>: Supports transparency with slight quality loss. As the successor to WebP, it offers an even higher compression rate, reducing file size by an average of <strong>94%</strong> compared to <strong>uncompressed PNG</strong>. As a cutting-edge format, AVIF provides excellent quality at very small file sizes. However, browser and device compatibility is still limited. This format is best for advanced users or when you are certain the target devices support it.
            </p>
            <p>
              <strong>AVIF (Lossless)</strong>: Supports transparency with no quality loss. Compared to an <strong>uncompressed PNG</strong>, the file size reduction is not significant, and in some cases, may even increase. Unless you have a specific need for lossless AVIF, <strong>PNG (Lossless)</strong> or <strong>WebP (Lossless)</strong> are generally better options.
            </p>
          </>
        }
      ]
    },
    themeToggle_title: "Toggle Theme"
  },
  interactive: {
    store_imageDeletedNotification: "Removed: {fileName}",
    store_convertingImagesNotification: "Converting {number} images...",
    store_conversionFailedNotification: "Conversion failed: {fileName}",
    store_unsupportedFileTypeNotification: "Unsupported format, removed: {fileName}",
    store_fileReadErrorNotification: "Could not read file, removed: {fileName}",
    store_reconvertingNotification: "Re-converting: {fileName}",
    store_formatOptionAuto: "Auto Compress",
    store_formatOptionJpg: "JPG",
    store_formatOptionPngLossy: "PNG (Lossy)",
    store_formatOptionPngLossless: "PNG (Lossless)",
    store_formatOptionWebpLossy: "WebP (Lossy)",
    store_formatOptionWebpLossless: "WebP (Lossless)",
    store_formatOptionAvifLossy: "AVIF (Lossy)",
    store_formatOptionAvifLossless: "AVIF (Lossless)",
    previewSection_title: "Preview and Download",
    previewSection_downloadAllButton: "Download All",
    previewSection_deleteAllButton: "Delete All",
    previewSection_placeholder: "No images yet.",
    previewSection_statusPending: "Pending",
    previewSection_statusConverting: "Converting...",
    previewSection_statusFailed: "Failed. Please refresh the page and try again.",
    previewSection_statusCompleted: "Completed",
    previewSection_noCompletedFilesNotification: "No completed images to download.",
    previewSection_downloadStartedNotification: "Starting download for {fileCount} files...",
    previewSection_listEmptyNotification: "The list is empty.",
    previewSection_allDeletedNotification: "All images have been removed.",
    previewSection_zipCreationNotification: "Creating ZIP...",
    previewSection_zipCreationWithSkipsNotification: "Creating ZIP: Some images are incomplete and will be skipped.",
    previewSection_zipCreationErrorNotification: "An error occurred while creating the ZIP.",
    previewSection_waitConversionNotification: "Please wait for the conversion to finish.",
    previewSection_downloadingFileNotification: "Downloading: {fileName}",
    previewSection_originalSizeLabel: "Original size:",
    previewSection_convertedSizeLabel: "Converted size:",
    previewSection_downloadTitle: "Download",
    previewSection_previewTitle: "Preview",
    previewSection_deleteTitle: "Delete",
    previewSection_comparisonTab: "Compare",
    previewSection_settingsTab: "Settings",
    previewSection_originalImageLabel: "Original Image",
    previewSection_completedImageLabel: "Converted Image",
    previewSection_formatLabel: "Format:",
    previewSection_resolutionLabel: "Resolution:",
    previewSection_viewLargerButton: "View in New Tab",
    previewSection_qualityLabel: "Compression Quality",
    previewSection_sizeLabel: "Resolution Adjustment",
    previewSection_outputFormatLabel: "Output Format",
    previewSection_reconvertButton: "Re-convert",
    globalControls_qualityLabel: "Global Compression Quality",
    globalControls_sizeLabel: "Global Resolution Adjustment",
    globalControls_formatLabel: "Global Output Format",
    globalControls_reconvertAllButton: "Reconvert All",
    globalControls_restoreDefaultsButton: "Reset Options",
    globalControls_noImagesNotification: "Please add images first.",
    globalControls_reconvertingAllNotification: "Re-converting all {imageCount} images with global settings",
    globalControls_restoredNotification: "Options have been reset to default.",
    addSection_title: "Add Images",
    addArea_dragDropTitle: "Drag and drop images here",
    addArea_supportedFormats: "Supports JPG, PNG, WebP, AVIF, and HEIC",
    addArea_selectButton: "Select Images",
    addArea_tips: "*You can add multiple images at once",
    ui_viewExplanationTitle: "Learn about these options",
  }
};

export type Translation = typeof en;
export default en;
export type InteractiveTranslationKey = keyof typeof en.interactive;
