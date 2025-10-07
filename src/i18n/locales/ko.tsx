import type { Translation } from './en.tsx';

const ko: Translation = {
    static: {
        index_lang: 'ko',
        index_dir: 'ltr',
        index_title: "Image Tool - 고급 이미지 변환 도구",
        index_description: "이미지 압축, 리사이징, 포맷 변환을 위한 전문적인 무료 온라인 도구입니다. JPG, PNG, WebP, AVIF 간의 상호 변환을 지원하며, HEIC를 이러한 포맷으로 변환할 수 있습니다. 모든 처리는 브라우저 내에서 로컬로 이루어집니다. 여러분의 파일은 절대 서버에 업로드되지 않으므로, 완벽한 개인정보 보호와 데이터 보안을 보장합니다.",
        optionsExplanation: {
            title: "옵션 안내",
            subtitle: "각 옵션의 기능과 사용법을 이해하여 이미지 변환 결과를 최적화하세요.",
            options: [
                {
                    id: "quality-option",
                    title: "압축 품질",
                    description: <>
                        <p>이 옵션은 대상 포맷이 <strong>JPG</strong>, <strong>WebP (손실)</strong>, 또는 <strong>AVIF (손실)</strong>일 경우에만 적용됩니다.</p>
                        <p>값이 낮을수록 파일 크기는 작아지지만 이미지 품질은 저하됩니다. 권장값인 <strong>75</strong>는 파일 크기와 품질 사이의 좋은 균형을 제공합니다.</p>
                        <p>압축 후에도 파일이 여전히 너무 크다면, 해상도를 낮춰보세요. 이 방법이 파일 크기를 줄이는 데 더 효과적일 때가 많습니다.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "해상도 조절",
                    description: <>
                        <p>원본 비율을 유지하면서 이미지 해상도를 백분율로 줄입니다. <strong>100%</strong>는 원본 크기를 유지합니다.</p>
                        <p>해상도를 낮추면 파일 크기를 <strong>상당히</strong> 줄일 수 있습니다. 원본의 고해상도가 필요 없다면, 이 방법이 파일 크기를 줄이는 <strong>가장 효과적인 방법</strong>인 경우가 많습니다.</p>
                        <p>다른 옵션이 동일할 때, <strong>100% 해상도</strong>를 기준으로, <strong>75% 해상도</strong>로 조절하면 파일 크기가 평균 <strong>30%</strong> 감소하고, <strong>50% 해상도</strong>로 조절하면 평균 <strong>65%</strong>, <strong>25% 해상도</strong>로 조절하면 평균 <strong>88%</strong> 감소합니다.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "출력 포맷",
                    description: <>
                        <p>이미지의 출력 포맷을 선택하세요. 각 포맷은 고유의 장점과 사용 사례를 가집니다.</p>
                        <p><strong>자동 압축</strong>: 이 옵션은 입력 포맷에 따라 적절한 압축 전략을 자동으로 적용합니다:</p>
                        <ul>
                            <li><strong>JPG</strong> 입력은 <strong>JPG</strong>로 압축됩니다.</li>
                            <li><strong>PNG</strong> 입력은 <strong>PNG (손실)</strong> 방식으로 압축됩니다.</li>
                            <li><strong>WebP</strong> 입력은 <strong>WebP (손실)</strong> 방식으로 압축됩니다.</li>
                            <li><strong>AVIF</strong> 입력은 <strong>AVIF (손실)</strong> 방식으로 압축됩니다.</li>
                            <li><strong>HEIC</strong> 입력은 <strong>JPG</strong>로 변환됩니다.</li>
                        </ul>

                        <p>
                            필요에 따라 아래에서 직접 포맷을 선택할 수도 있습니다. 각 옵션에 대한 자세한 안내는 다음과 같습니다:
                        </p>

                        <p>
                            <strong>JPG</strong>: 가장 인기 있는 이미지 포맷이지만 투명도를 지원하지 않습니다. <strong>압축되지 않은 PNG</strong>에 비해 파일 크기를 평균 <strong>90%</strong> 줄일 수 있습니다. 품질 설정이 <strong>75</strong>일 때, 품질 손실은 <strong>거의 감지하기 어렵습니다</strong>. 투명한 배경이 필요 없다면 <strong>(대부분의 사진이 그렇습니다)</strong>, <strong>JPG</strong>로 변환하는 것이 일반적으로 최상의 선택입니다.
                        </p>

                        <p>
                            <strong>PNG (손실)</strong>: 약간의 품질 손실과 함께 투명도를 지원합니다. <strong>압축되지 않은 PNG</strong>에 비해 파일 크기를 평균 <strong>70%</strong> 줄입니다. PNG 포맷으로 투명 배경이 필요한 경우에만 선택하세요. 그렇지 않다면, <strong>JPG</strong>가 <strong>더 작은 크기에 더 나은 품질</strong>을 제공하며(투명도 없음), <strong>WebP (손실)</strong>은 <strong>더 나은 품질, 더 작은 크기, 그리고 투명도를 모두</strong> 제공하므로 PNG 포맷이 필수가 아니라면 더 우수한 대안입니다.
                        </p>

                        <p>
                            <strong>PNG (무손실)</strong>: 품질 손실 없이 투명도를 지원합니다. <strong>압축되지 않은 PNG</strong>에 비해 파일 크기를 평균 <strong>20%</strong> 줄입니다. 하지만 <strong>PNG 포맷이 필수가 아니라면</strong>, 파일 크기가 더 작은 <strong>WebP (무손실)</strong>이 더 나은 선택입니다.
                        </p>

                        <p>
                            <strong>WebP (손실)</strong>: 약간의 품질 손실과 함께 투명도를 지원합니다. <strong>압축되지 않은 PNG</strong>에 비해 파일 크기를 평균 <strong>90%</strong> 줄입니다. <strong>PNG (손실)</strong>을 대체하는 훌륭한 선택지로, 더 나은 품질과 작은 크기를 제공합니다. 참고: 일부 구형 기기에서는 WebP를 지원하지 않습니다.
                        </p>

                        <p>
                            <strong>WebP (무손실)</strong>: 품질 손실 없이 투명도를 지원합니다. <strong>압축되지 않은 PNG</strong>에 비해 파일 크기를 평균 <strong>50%</strong> 줄여, <strong>PNG (무손실)</strong>을 대체하는 더 우수한 선택입니다. 참고: 일부 구형 기기에서는 WebP를 지원하지 않습니다.
                        </p>

                        <p>
                            <strong>AVIF (손실)</strong>: 약간의 품질 손실과 함께 투명도를 지원합니다. WebP의 후속 기술로서 훨씬 높은 압축률을 제공하여, <strong>압축되지 않은 PNG</strong>에 비해 파일 크기를 평균 <strong>94%</strong> 줄입니다. 최신 포맷인 AVIF는 매우 작은 파일 크기에도 뛰어난 품질을 제공합니다. 하지만 브라우저 및 기기 호환성은 아직 제한적입니다. 이 포맷은 고급 사용자나 대상 기기가 이를 지원한다고 확신할 때 사용하는 것이 가장 좋습니다.
                        </p>
                        <p>
                            <strong>AVIF (무손실)</strong>: 품질 손실 없이 투명도를 지원합니다. <strong>압축되지 않은 PNG</strong>와 비교했을 때 파일 크기 감소는 크지 않으며, 경우에 따라 오히려 증가할 수 있습니다. 무손실 AVIF가 특별히 필요한 경우가 아니라면, 일반적으로 <strong>PNG (무손실)</strong>이나 <strong>WebP (무손실)</strong>이 더 나은 선택입니다.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "테마 전환"
    },
    interactive: {
        store_imageDeletedNotification: "삭제됨: {fileName}",
        store_convertingImagesNotification: "{number}개의 이미지를 변환하는 중입니다...",
        store_conversionFailedNotification: "변환 실패: {fileName}",
        store_unsupportedFileTypeNotification: "지원하지 않는 형식, 삭제됨: {fileName}",
        store_fileReadErrorNotification: "파일을 읽을 수 없음, 삭제됨: {fileName}",
        store_reconvertingNotification: "다시 변환하는 중: {fileName}",
        store_formatOptionAuto: "자동 압축",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (손실)",
        store_formatOptionPngLossless: "PNG (무손실)",
        store_formatOptionWebpLossy: "WebP (손실)",
        store_formatOptionWebpLossless: "WebP (무손실)",
        store_formatOptionAvifLossy: "AVIF (손실)",
        store_formatOptionAvifLossless: "AVIF (무손실)",
        previewSection_title: "미리보기 및 다운로드",
        previewSection_downloadAllButton: "전체 다운로드",
        previewSection_deleteAllButton: "전체 삭제",
        previewSection_placeholder: "아직 이미지가 없습니다.",
        previewSection_statusPending: "대기 중",
        previewSection_statusConverting: "변환 중...",
        previewSection_statusFailed: "실패. 페이지를 새로고침하고 다시 시도하세요.",
        previewSection_statusCompleted: "완료",
        previewSection_noCompletedFilesNotification: "다운로드할 완료된 이미지가 없습니다.",
        previewSection_downloadStartedNotification: "{fileCount}개 파일 다운로드를 시작합니다...",
        previewSection_listEmptyNotification: "목록이 비어 있습니다.",
        previewSection_allDeletedNotification: "모든 이미지가 삭제되었습니다.",
        previewSection_zipCreationNotification: "ZIP 생성 중...",
        previewSection_zipCreationWithSkipsNotification: "ZIP 생성 중: 완료되지 않은 이미지가 있어 건너뜁니다.",
        previewSection_zipCreationErrorNotification: "ZIP 생성 중 오류가 발생했습니다.",
        previewSection_waitConversionNotification: "변환이 끝날 때까지 기다려주세요.",
        previewSection_downloadingFileNotification: "다운로드 중: {fileName}",
        previewSection_originalSizeLabel: "원본 크기:",
        previewSection_convertedSizeLabel: "변환 후 크기:",
        previewSection_downloadTitle: "다운로드",
        previewSection_previewTitle: "미리보기",
        previewSection_deleteTitle: "삭제",
        previewSection_comparisonTab: "결과 비교",
        previewSection_settingsTab: "개별 설정",
        previewSection_originalImageLabel: "원본 이미지",
        previewSection_completedImageLabel: "변환된 이미지",
        previewSection_formatLabel: "포맷:",
        previewSection_resolutionLabel: "해상도:",
        previewSection_viewLargerButton: "새 탭에서 보기",
        previewSection_qualityLabel: "압축 품질",
        previewSection_sizeLabel: "해상도 조절",
        previewSection_outputFormatLabel: "출력 포맷",
        previewSection_reconvertButton: "다시 변환",
        globalControls_qualityLabel: "전체 압축 품질",
        globalControls_sizeLabel: "전체 해상도 조절",
        globalControls_formatLabel: "전체 출력 포맷",
        globalControls_reconvertAllButton: "전체 적용 및 변환",
        globalControls_restoreDefaultsButton: "기본값으로 재설정",
        globalControls_noImagesNotification: "먼저 이미지를 추가해주세요.",
        globalControls_reconvertingAllNotification: "전체 설정으로 {imageCount}개의 모든 이미지를 다시 변환합니다.",
        globalControls_restoredNotification: "옵션이 기본값으로 재설정되었습니다.",
        addSection_title: "이미지 추가",
        addArea_dragDropTitle: "여기에 이미지를 드래그 앤 드롭하세요",
        addArea_supportedFormats: "JPG, PNG, WebP, AVIF, HEIC 포맷 지원",
        addArea_selectButton: "이미지 선택",
        addArea_tips: "*한 번에 여러 장을 추가할 수 있습니다.",
        ui_viewExplanationTitle: "옵션에 대해 알아보기",
    }
};

export default ko;