# Image Tool - Advanced Online Image Converter

**Live Demo: [image-tool.org](https://image-tool.org)**

Image Tool is a free, professional, privacy-focused online image processing tool. It allows you to compress, resize, and convert image formats directly in your browser.

## ✨ Features

*   **🔒 Privacy First**: All image processing is done locally in your browser. Image files are never uploaded to any server, ensuring the security of your data.
*   **🔀 Multi-Format Support**: Supports mutual conversion between JPG, PNG, WebP, and AVIF. It can also read HEIC files and convert them to the above formats.
*   **⚙️ Powerful Processing**:
    *   **Compression**: Effectively reduce image size while maintaining high quality.
    *   **Resizing**: Easily adjust image resolution by percentage.
    *   **Batch Processing**: Add and convert multiple images at once.
*   **🌐 Multi-Language Support**: Built-in support for multiple languages for users worldwide.
*   **🎨 Modern UI**: Clean, intuitive design with both light and dark modes.
*   **🚀 High Performance**: Core processing logic is based on WebAssembly, ensuring near-native speed and efficiency.

## 🛠️ Technology Stack

*   **Framework**: [Astro](https://astro.build/)
*   **UI Library**: [Solid.js](https://www.solidjs.com/)
*   **Styling**: [Vanilla Extract](https://vanilla-extract.style/)
*   **Image Processing**:
    *   [JSquash](https://github.com/jamsinclair/jSquash) (WebAssembly-based image codecs)
    *   `libheif-js` (for HEIC support)
*   **Icons**: [unplugin-icons](https://github.com/unplugin/unplugin-icons)

## 🚀 Getting Started

Please ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or higher is recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/lonebyteedit/image-tool.git
cd image-tool
```

### 2. Install Dependencies
Use `npm` to install the project dependencies.
```bash
npm install
```

### 3. Run the Development Server
This command starts a local development server, available at `http://localhost:4321` by default.
```bash
npm run dev
```

### 4. Build for Production
Bundles the project for production. The output is in the `dist/` directory.
```bash
npm run build
```

### 5. Preview the Production Build
Starts a local server to preview the production build.
```bash
npm run preview
```

## ⚙️ A Note on Configuration

To enable high-performance features required by WebAssembly, this application must be served in a cross-origin isolated context. This is achieved by setting the following HTTP headers in the server configuration:

*   `Cross-Origin-Opener-Policy: same-origin`
*   `Cross-Origin-Embedder-Policy: require-corp`

## 📄 License

This project is licensed under the GPLv3 License. See the `LICENSE` file for details.