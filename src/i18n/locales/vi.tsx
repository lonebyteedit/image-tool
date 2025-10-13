import type { Translation } from './en.tsx';

const vi: Translation = {
    static: {
        index_lang: 'vi',
        index_dir: 'ltr',
        index_title: "Image Tool - Công cụ chuyển đổi ảnh nâng cao",
        index_description: "Một công cụ trực tuyến chuyên nghiệp và miễn phí để nén ảnh, thay đổi kích thước và chuyển đổi định dạng. Hỗ trợ chuyển đổi qua lại giữa các định dạng JPG, PNG, WebP, và AVIF, và có thể chuyển đổi HEIC sang các định dạng này. Mọi quá trình xử lý đều diễn ra cục bộ trên trình duyệt của bạn—tệp của bạn không bao giờ được tải lên, đảm bảo quyền riêng tư và an toàn dữ liệu tuyệt đối.",
        optionsExplanation: {
            title: "Hướng dẫn tùy chọn",
            subtitle: "Tìm hiểu chức năng và cách sử dụng của từng tùy chọn để tối ưu hóa kết quả chuyển đổi ảnh của bạn.",
            options: [
                {
                    id: "quality-option",
                    title: "Chất lượng nén",
                    description: <>
                        <p>Tùy chọn này chỉ áp dụng khi định dạng đầu ra là <strong>JPG</strong>, <strong>WebP (có tổn hao)</strong>, hoặc <strong>AVIF (có tổn hao)</strong>.</p>
                        <p>Giá trị càng thấp, tệp càng nhỏ nhưng chất lượng ảnh sẽ giảm. Giá trị đề xuất là <strong>75</strong>, mang lại sự cân bằng tốt giữa kích thước tệp và chất lượng.</p>
                        <p>Nếu tệp vẫn quá lớn sau khi nén, hãy thử giảm độ phân giải, cách này thường hiệu quả hơn trong việc thu nhỏ kích thước tệp.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Điều chỉnh độ phân giải",
                    description: <>
                        <p>Giảm độ phân giải của ảnh theo tỷ lệ phần trăm trong khi vẫn giữ nguyên tỷ lệ khung hình gốc. <strong>100%</strong> có nghĩa là giữ nguyên kích thước ban đầu.</p>
                        <p>Giảm độ phân giải có thể làm giảm kích thước tệp <strong>một cách đáng kể</strong>. Nếu bạn không cần độ phân giải cao của ảnh gốc, đây thường là <strong>cách hiệu quả nhất</strong> để làm cho tệp nhỏ hơn.</p>
                        <p>Với các tùy chọn khác giữ nguyên, dựa trên <strong>độ phân giải 100%</strong>. Điều chỉnh xuống <strong>75% độ phân giải</strong> sẽ giảm kích thước tệp trung bình <strong>30%</strong>; điều chỉnh xuống <strong>50% độ phân giải</strong> sẽ giảm trung bình <strong>65%</strong>; và điều chỉnh xuống <strong>25% độ phân giải</strong> sẽ giảm trung bình <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Định dạng đầu ra",
                    description: <>
                        <p>Chọn định dạng đầu ra cho ảnh. Các định dạng khác nhau có ưu điểm và trường hợp sử dụng riêng.</p>
                        <p><strong>Nén tự động</strong>: Tùy chọn này sẽ tự động áp dụng một chiến lược nén phù hợp dựa trên định dạng đầu vào:</p>
                        <ul>
                            <li>Ảnh đầu vào là <strong>JPG</strong> sẽ được nén dưới dạng <strong>JPG</strong>.</li>
                            <li>Ảnh đầu vào là <strong>PNG</strong> sẽ được nén bằng phương pháp <strong>PNG (có tổn hao)</strong>.</li>
                            <li>Ảnh đầu vào là <strong>WebP</strong> sẽ được nén bằng phương pháp <strong>WebP (có tổn hao)</strong>.</li>
                            <li>Ảnh đầu vào là <strong>AVIF</strong> sẽ được nén bằng phương pháp <strong>AVIF (có tổn hao)</strong>.</li>
                            <li>Ảnh đầu vào là <strong>HEIC</strong> sẽ được chuyển đổi sang <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Bạn cũng có thể chọn một định dạng theo cách thủ công bên dưới dựa trên nhu cầu cụ thể của mình. Dưới đây là hướng dẫn chi tiết cho từng tùy chọn:
                        </p>

                        <p>
                            <strong>JPG</strong>: Định dạng ảnh phổ biến nhất, mặc dù không hỗ trợ độ trong suốt. So với ảnh <strong>PNG không nén</strong>, nó có thể giảm kích thước tệp trung bình <strong>90%</strong>. Ở mức chất lượng <strong>75</strong>, sự suy giảm chất lượng thường <strong>khó nhận thấy</strong>. Nếu bạn không cần nền trong suốt <strong>(điều này đúng với hầu hết các bức ảnh)</strong>, chuyển đổi sang <strong>JPG</strong> thường là lựa chọn tốt nhất.
                        </p>

                        <p>
                            <strong>PNG (có tổn hao)</strong>: Hỗ trợ độ trong suốt với một chút suy giảm chất lượng, giảm kích thước tệp trung bình <strong>70%</strong> so với ảnh <strong>PNG không nén</strong>. Chỉ chọn tùy chọn này nếu bạn cần nền trong suốt ở định dạng PNG. Nếu không, <strong>JPG</strong> cung cấp <strong>chất lượng tốt hơn với kích thước nhỏ hơn</strong> (không có độ trong suốt), và <strong>WebP (có tổn hao)</strong> cung cấp <strong>chất lượng tốt hơn, kích thước nhỏ hơn và hỗ trợ độ trong suốt</strong>, làm cho nó trở thành một sự thay thế vượt trội nếu định dạng PNG không phải là yêu cầu bắt buộc.
                        </p>

                        <p>
                            <strong>PNG (không tổn hao)</strong>: Hỗ trợ độ trong suốt mà không làm giảm chất lượng. Giảm kích thước tệp trung bình <strong>20%</strong> so với ảnh <strong>PNG không nén</strong>. Tuy nhiên, <strong>nếu định dạng PNG không phải là yêu cầu bắt buộc</strong>, <strong>WebP (không tổn hao)</strong> là một lựa chọn tốt hơn vì nó cung cấp kích thước tệp nhỏ hơn.
                        </p>

                        <p>
                            <strong>WebP (có tổn hao)</strong>: Hỗ trợ độ trong suốt với một chút suy giảm chất lượng. Giảm kích thước tệp trung bình <strong>90%</strong> so với ảnh <strong>PNG không nén</strong>. Đây là một sự thay thế tuyệt vời cho <strong>PNG (có tổn hao)</strong>, cung cấp chất lượng tốt hơn và kích thước nhỏ hơn. Lưu ý: WebP không được hỗ trợ trên một số thiết bị cũ.
                        </p>

                        <p>
                            <strong>WebP (không tổn hao)</strong>: Hỗ trợ độ trong suốt mà không làm giảm chất lượng. Giảm kích thước tệp trung bình <strong>50%</strong> so với ảnh <strong>PNG không nén</strong>, làm cho nó trở thành một sự thay thế vượt trội cho <strong>PNG (không tổn hao)</strong>. Lưu ý: WebP không được hỗ trợ trên một số thiết bị cũ.
                        </p>

                        <p>
                            <strong>AVIF (có tổn hao)</strong>: Hỗ trợ độ trong suốt với một chút suy giảm chất lượng. Là định dạng kế thừa của WebP, nó cung cấp tỷ lệ nén cao hơn nữa, giảm kích thước tệp trung bình <strong>94%</strong> so với ảnh <strong>PNG không nén</strong>. Là một định dạng tiên tiến, AVIF cung cấp chất lượng tuyệt vời với kích thước tệp rất nhỏ. Tuy nhiên, khả năng tương thích với trình duyệt và thiết bị vẫn còn hạn chế. Định dạng này phù hợp nhất cho người dùng nâng cao hoặc khi bạn chắc chắn rằng các thiết bị đích hỗ trợ nó.
                        </p>
                        <p>
                            <strong>AVIF (không tổn hao)</strong>: Hỗ trợ độ trong suốt mà không làm giảm chất lượng. So với ảnh <strong>PNG không nén</strong>, việc giảm kích thước tệp không đáng kể, và trong một số trường hợp, thậm chí có thể tăng lên. Trừ khi bạn có nhu cầu cụ thể về AVIF không tổn hao, <strong>PNG (không tổn hao)</strong> hoặc <strong>WebP (không tổn hao)</strong> thường là những lựa chọn tốt hơn.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Chuyển đổi giao diện"
    },
    interactive: {
        store_imageDeletedNotification: "Đã xóa: {fileName}",
        store_convertingImagesNotification: "Đang chuyển đổi {number} ảnh, vui lòng chờ...",
        store_conversionFailedNotification: "Chuyển đổi thất bại: {fileName}",
        store_unsupportedFileTypeNotification: "Định dạng không được hỗ trợ, đã xóa: {fileName}",
        store_fileReadErrorNotification: "Không thể đọc tệp, đã xóa: {fileName}",
        store_reconvertingNotification: "Đang chuyển đổi lại: {fileName}",
        store_formatOptionAuto: "Nén tự động",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (có tổn hao)",
        store_formatOptionPngLossless: "PNG (không tổn hao)",
        store_formatOptionWebpLossy: "WebP (có tổn hao)",
        store_formatOptionWebpLossless: "WebP (không tổn hao)",
        store_formatOptionAvifLossy: "AVIF (có tổn hao)",
        store_formatOptionAvifLossless: "AVIF (không tổn hao)",
        previewSection_title: "Xem trước và Tải về",
        previewSection_downloadAllButton: "Tải về tất cả",
        previewSection_deleteAllButton: "Xóa tất cả",
        previewSection_placeholder: "Chưa có ảnh nào.",
        previewSection_statusPending: "Đang chờ",
        previewSection_statusConverting: "Đang chuyển đổi...",
        previewSection_statusFailed: "Thất bại. Vui lòng tải lại trang và thử lại.",
        previewSection_statusCompleted: "Hoàn thành",
        previewSection_noCompletedFilesNotification: "Không có ảnh đã hoàn thành để tải về.",
        previewSection_downloadStartedNotification: "Bắt đầu tải về {fileCount} tệp...",
        previewSection_listEmptyNotification: "Danh sách trống.",
        previewSection_allDeletedNotification: "Tất cả ảnh đã được xóa.",
        previewSection_zipCreationNotification: "Đang tạo ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Đang tạo ZIP: Có ảnh chưa hoàn thành, sẽ bị bỏ qua.",
        previewSection_zipCreationErrorNotification: "Đã xảy ra lỗi khi tạo ZIP.",
        previewSection_waitConversionNotification: "Vui lòng đợi quá trình chuyển đổi hoàn tất.",
        previewSection_downloadingFileNotification: "Đang tải về: {fileName}",
        previewSection_originalSizeLabel: "Kích thước gốc:",
        previewSection_convertedSizeLabel: "Kích thước sau chuyển đổi:",
        previewSection_downloadTitle: "Tải về",
        previewSection_previewTitle: "Xem trước",
        previewSection_deleteTitle: "Xóa",
        previewSection_comparisonTab: "So sánh",
        previewSection_settingsTab: "Cài đặt riêng",
        previewSection_originalImageLabel: "Ảnh gốc",
        previewSection_completedImageLabel: "Ảnh đã chuyển đổi",
        previewSection_formatLabel: "Định dạng:",
        previewSection_resolutionLabel: "Độ phân giải:",
        previewSection_viewLargerButton: "Xem trong tab mới",
        previewSection_qualityLabel: "Chất lượng nén",
        previewSection_sizeLabel: "Điều chỉnh độ phân giải",
        previewSection_outputFormatLabel: "Định dạng đầu ra",
        previewSection_reconvertButton: "Chuyển đổi lại ảnh này",
        globalControls_qualityLabel: "Chất lượng nén chung",
        globalControls_sizeLabel: "Điều chỉnh độ phân giải chung",
        globalControls_formatLabel: "Định dạng đầu ra chung",
        globalControls_reconvertAllButton: "Áp dụng và chuyển đổi lại tất cả",
        globalControls_restoreDefaultsButton: "Khôi phục cài đặt gốc",
        globalControls_noImagesNotification: "Vui lòng thêm ảnh trước.",
        globalControls_reconvertingAllNotification: "Đang chuyển đổi lại tất cả {imageCount} ảnh với cài đặt chung",
        globalControls_restoredNotification: "Các tùy chọn đã được khôi phục về mặc định.",
        addSection_title: "Thêm ảnh",
        addArea_dragDropTitle: "Kéo và thả ảnh vào đây",
        addArea_supportedFormats: "Hỗ trợ các định dạng JPG, PNG, WebP, AVIF, và HEIC",
        addArea_selectButton: "Chọn ảnh",
        addArea_tips: "*Có thể thêm nhiều ảnh cùng một lúc",
        ui_viewExplanationTitle: "Tìm hiểu về các tùy chọn này",
    }
};

export default vi;