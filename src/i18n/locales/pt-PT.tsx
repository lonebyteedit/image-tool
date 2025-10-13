import type { Translation } from './en.tsx';

const ptPT: Translation = {
    static: {
        index_lang: 'pt-PT',
        index_dir: 'ltr',
        index_title: "Image Tool - Ferramenta Avançada de Conversão de Imagens",
        index_description: "Uma ferramenta online, gratuita e profissional para compressão, redimensionamento e conversão de formato de imagens. Suporta a conversão mútua entre JPG, PNG, WebP e AVIF, e consegue converter HEIC para estes formatos. Todo o processamento ocorre localmente no seu navegador — os seus ficheiros nunca são enviados, garantindo total privacidade e segurança dos seus dados.",
        optionsExplanation: {
            title: "Guia de Opções",
            subtitle: "Compreenda a função e utilização de cada opção para otimizar os resultados da conversão de imagens.",
            options: [
                {
                    id: "quality-option",
                    title: "Qualidade da Compressão",
                    description: <>
                        <p>Esta opção aplica-se apenas quando o formato de destino é <strong>JPG</strong>, <strong>WebP (com perdas)</strong> ou <strong>AVIF (com perdas)</strong>.</p>
                        <p>Um valor mais baixo cria um ficheiro mais pequeno, mas reduz a qualidade da imagem. O valor recomendado de <strong>75</strong> oferece um bom equilíbrio entre o tamanho do ficheiro e a qualidade.</p>
                        <p>Se o ficheiro continuar demasiado grande após a compressão, experimente reduzir a resolução, o que é frequentemente mais eficaz para diminuir o tamanho do ficheiro.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ajuste da Resolução",
                    description: <>
                        <p>Reduza a resolução da imagem por uma percentagem, mantendo a proporção original. <strong>100%</strong> preserva as dimensões originais.</p>
                        <p>Reduzir a resolução pode diminuir <strong>significativamente</strong> o tamanho do ficheiro. Se não necessitar da alta resolução original, esta é frequentemente a <strong>forma mais eficaz</strong> de tornar o ficheiro mais pequeno.</p>
                        <p>Com as outras opções iguais, e com base na <strong>resolução de 100%</strong>. Ajustar para <strong>75% de resolução</strong> reduz o tamanho do ficheiro em média <strong>30%</strong>; ajustar para <strong>50% de resolução</strong> reduz em média <strong>65%</strong>; e ajustar para <strong>25% de resolução</strong> reduz em média <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formato de Saída",
                    description: <>
                        <p>Escolha o formato de saída para a imagem. Diferentes formatos têm as suas próprias vantagens e casos de uso.</p>
                        <p><strong>Compressão Automática</strong>: Esta opção aplica automaticamente uma estratégia de compressão adequada com base no formato de entrada:</p>
                        <ul>
                            <li>Entradas <strong>JPG</strong> são comprimidas como <strong>JPG</strong>.</li>
                            <li>Entradas <strong>PNG</strong> são comprimidas usando o método <strong>PNG (com perdas)</strong>.</li>
                            <li>Entradas <strong>WebP</strong> são comprimidas usando o método <strong>WebP (com perdas)</strong>.</li>
                            <li>Entradas <strong>AVIF</strong> são comprimidas usando o método <strong>AVIF (com perdas)</strong>.</li>
                            <li>Entradas <strong>HEIC</strong> são convertidas para <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Pode também selecionar manualmente um formato abaixo com base nas suas necessidades específicas. Aqui está um guia detalhado para cada opção:
                        </p>

                        <p>
                            <strong>JPG</strong>: O formato de imagem mais popular, embora não suporte transparência. Ao converter de um <strong>PNG não comprimido</strong>, pode reduzir o tamanho do ficheiro em média <strong>90%</strong>. Com uma definição de qualidade de <strong>75</strong>, a perda de qualidade é frequentemente <strong>impercetível</strong>. Se não precisar de um fundo transparente <strong>(o que acontece na maioria das fotos)</strong>, converter para <strong>JPG</strong> é geralmente a melhor escolha.
                        </p>

                        <p>
                            <strong>PNG (com perdas)</strong>: Suporta transparência com alguma perda de qualidade, reduzindo o tamanho do ficheiro em média <strong>70%</strong> em comparação com um <strong>PNG não comprimido</strong>. Escolha esta opção apenas se precisar de um fundo transparente no formato PNG. Caso contrário, o <strong>JPG</strong> oferece <strong>melhor qualidade por um tamanho menor</strong> (sem transparência), e o <strong>WebP (com perdas)</strong> proporciona <strong>melhor qualidade, tamanho menor e transparência</strong>, tornando-se uma alternativa superior se o formato PNG não for um requisito estrito.
                        </p>

                        <p>
                            <strong>PNG (sem perdas)</strong>: Suporta transparência sem perda de qualidade. Reduz o tamanho do ficheiro em média <strong>20%</strong> em comparação com um <strong>PNG não comprimido</strong>. No entanto, <strong>se o formato PNG não for um requisito estrito</strong>, o <strong>WebP (sem perdas)</strong> é uma escolha melhor, pois oferece tamanhos de ficheiro menores.
                        </p>

                        <p>
                            <strong>WebP (com perdas)</strong>: Suporta transparência com ligeira perda de qualidade. Reduz o tamanho do ficheiro em média <strong>90%</strong> em comparação com um <strong>PNG não comprimido</strong>. É um excelente substituto para o <strong>PNG (com perdas)</strong>, oferecendo melhor qualidade e tamanhos menores. Nota: O WebP não é suportado em alguns dispositivos mais antigos.
                        </p>

                        <p>
                            <strong>WebP (sem perdas)</strong>: Suporta transparência sem perda de qualidade. Reduz o tamanho do ficheiro em média <strong>50%</strong> em comparação com um <strong>PNG não comprimido</strong>, tornando-o um substituto superior ao <strong>PNG (sem perdas)</strong>. Nota: O WebP não é suportado em alguns dispositivos mais antigos.
                        </p>

                        <p>
                            <strong>AVIF (com perdas)</strong>: Suporta transparência com ligeira perda de qualidade. Como sucessor do WebP, oferece uma taxa de compressão ainda maior, reduzindo o tamanho do ficheiro em média <strong>94%</strong> em comparação com um <strong>PNG não comprimido</strong>. Sendo um formato de ponta, o AVIF proporciona uma excelente qualidade em ficheiros de tamanho muito reduzido. No entanto, a compatibilidade com navegadores e dispositivos ainda é limitada. Este formato é mais adequado para utilizadores avançados ou quando tem a certeza de que os dispositivos de destino o suportam.
                        </p>
                        <p>
                            <strong>AVIF (sem perdas)</strong>: Suporta transparência sem perda de qualidade. Em comparação com um <strong>PNG não comprimido</strong>, a redução do tamanho do ficheiro não é significativa e, em alguns casos, pode até aumentar. A menos que tenha uma necessidade específica para AVIF sem perdas, o <strong>PNG (sem perdas)</strong> ou <strong>WebP (sem perdas)</strong> são geralmente melhores opções.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Alternar Tema"
    },
    interactive: {
        store_imageDeletedNotification: "Removido: {fileName}",
        store_convertingImagesNotification: "A converter {number} imagens...",
        store_conversionFailedNotification: "Falha na conversão: {fileName}",
        store_unsupportedFileTypeNotification: "Formato não suportado, removido: {fileName}",
        store_fileReadErrorNotification: "Não foi possível ler o ficheiro, removido: {fileName}",
        store_reconvertingNotification: "A reconverter: {fileName}",
        store_formatOptionAuto: "Compressão Automática",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (com perdas)",
        store_formatOptionPngLossless: "PNG (sem perdas)",
        store_formatOptionWebpLossy: "WebP (com perdas)",
        store_formatOptionWebpLossless: "WebP (sem perdas)",
        store_formatOptionAvifLossy: "AVIF (com perdas)",
        store_formatOptionAvifLossless: "AVIF (sem perdas)",
        previewSection_title: "Pré-visualizar e Transferir",
        previewSection_downloadAllButton: "Transferir Tudo",
        previewSection_deleteAllButton: "Eliminar Tudo",
        previewSection_placeholder: "Ainda sem imagens.",
        previewSection_statusPending: "Pendente",
        previewSection_statusConverting: "A converter...",
        previewSection_statusFailed: "Falhou. Por favor, atualize a página e tente novamente.",
        previewSection_statusCompleted: "Concluído",
        previewSection_noCompletedFilesNotification: "Não há imagens concluídas para transferir.",
        previewSection_downloadStartedNotification: "A iniciar a transferência de {fileCount} ficheiros...",
        previewSection_listEmptyNotification: "A lista está vazia.",
        previewSection_allDeletedNotification: "Todas as imagens foram removidas.",
        previewSection_zipCreationNotification: "A criar o ZIP...",
        previewSection_zipCreationWithSkipsNotification: "A criar o ZIP: Algumas imagens não estão concluídas e serão ignoradas.",
        previewSection_zipCreationErrorNotification: "Ocorreu um erro durante a criação do ZIP.",
        previewSection_waitConversionNotification: "Por favor, aguarde a conclusão da conversão.",
        previewSection_downloadingFileNotification: "A transferir: {fileName}",
        previewSection_originalSizeLabel: "Tamanho original:",
        previewSection_convertedSizeLabel: "Tamanho convertido:",
        previewSection_downloadTitle: "Transferir",
        previewSection_previewTitle: "Pré-visualizar",
        previewSection_deleteTitle: "Eliminar",
        previewSection_comparisonTab: "Comparar",
        previewSection_settingsTab: "Definições",
        previewSection_originalImageLabel: "Imagem Original",
        previewSection_completedImageLabel: "Imagem Convertida",
        previewSection_formatLabel: "Formato:",
        previewSection_resolutionLabel: "Resolução:",
        previewSection_viewLargerButton: "Ver em novo separador",
        previewSection_qualityLabel: "Qualidade da Compressão",
        previewSection_sizeLabel: "Ajuste da Resolução",
        previewSection_outputFormatLabel: "Formato de Saída",
        previewSection_reconvertButton: "Reconverter",
        globalControls_qualityLabel: "Qualidade da Compressão Global",
        globalControls_sizeLabel: "Ajuste da Resolução Global",
        globalControls_formatLabel: "Formato de Saída Global",
        globalControls_reconvertAllButton: "Aplicar e Reconverter Tudo",
        globalControls_restoreDefaultsButton: "Repor Opções",
        globalControls_noImagesNotification: "Por favor, adicione imagens primeiro.",
        globalControls_reconvertingAllNotification: "A reconverter todas as {imageCount} imagens com as definições globais",
        globalControls_restoredNotification: "As opções foram repostas para os valores predefinidos.",
        addSection_title: "Adicionar Imagens",
        addArea_dragDropTitle: "Arraste e largue as imagens aqui",
        addArea_supportedFormats: "Suporta os formatos JPG, PNG, WebP, AVIF e HEIC",
        addArea_selectButton: "Selecionar Imagens",
        addArea_tips: "*Pode adicionar várias imagens de uma só vez",
        ui_viewExplanationTitle: "Saiba mais sobre estas opções",
    }
};

export default ptPT;