import type { Translation } from './en.tsx';

const ptBR: Translation = {
    static: {
        index_lang: 'pt-BR',
        index_dir: 'ltr',
        index_title: "Image Tool - Ferramenta Avançada de Conversão de Imagens",
        index_description: "Uma ferramenta online, profissional e gratuita para compressão, redimensionamento e conversão de formato de imagens. Suporta a conversão mútua entre JPG, PNG, WebP e AVIF, e pode converter HEIC para esses formatos. Todo o processamento acontece localmente no seu navegador — seus arquivos nunca são enviados para um servidor, garantindo total privacidade e segurança dos seus dados.",
        optionsExplanation: {
            title: "Guia de Opções",
            subtitle: "Entenda a função e o uso de cada opção para otimizar os resultados da sua conversão de imagem.",
            options: [
                {
                    id: "quality-option",
                    title: "Qualidade de Compressão",
                    description: <>
                        <p>Esta opção se aplica apenas quando o formato de destino é <strong>JPG</strong>, <strong>WebP (Com perdas)</strong> ou <strong>AVIF (Com perdas)</strong>.</p>
                        <p>Um valor mais baixo cria um arquivo menor, mas reduz a qualidade da imagem. O valor recomendado de <strong>75</strong> oferece um bom equilíbrio entre o tamanho do arquivo e a qualidade.</p>
                        <p>Se o arquivo ainda estiver muito grande após a compressão, tente reduzir a resolução, o que geralmente é mais eficaz para diminuir o tamanho do arquivo.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ajuste de Resolução",
                    description: <>
                        <p>Reduza a resolução da imagem em uma porcentagem, mantendo a proporção original. <strong>100%</strong> preserva as dimensões originais.</p>
                        <p>Reduzir a resolução pode diminuir <strong>significativamente</strong> o tamanho do arquivo. Se você não precisa da alta resolução original, esta é frequentemente a <strong>maneira mais eficaz</strong> de tornar o arquivo menor.</p>
                        <p>Com as outras opções iguais, com base na <strong>resolução de 100%</strong>. Ajustar para <strong>75% de resolução</strong> reduz o tamanho do arquivo em uma média de <strong>30%</strong>; ajustar para <strong>50% de resolução</strong> reduz em uma média de <strong>65%</strong>; e ajustar para <strong>25% de resolução</strong> reduz em uma média de <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Formato de Saída",
                    description: <>
                        <p>Escolha o formato de saída para a imagem. Diferentes formatos têm suas próprias vantagens e casos de uso.</p>
                        <p><strong>Compressão Automática</strong>: Esta opção aplica automaticamente uma estratégia de compressão adequada com base no formato de entrada:</p>
                        <ul>
                            <li>Entradas <strong>JPG</strong> são comprimidas como <strong>JPG</strong>.</li>
                            <li>Entradas <strong>PNG</strong> são comprimidas usando o método <strong>PNG (Com perdas)</strong>.</li>
                            <li>Entradas <strong>WebP</strong> são comprimidas usando o método <strong>WebP (Com perdas)</strong>.</li>
                            <li>Entradas <strong>AVIF</strong> são comprimidas usando o método <strong>AVIF (Com perdas)</strong>.</li>
                            <li>Entradas <strong>HEIC</strong> são convertidas para <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Você também pode selecionar manualmente um formato abaixo com base em suas necessidades específicas. Aqui está um guia detalhado para cada opção:
                        </p>

                        <p>
                            <strong>JPG</strong>: O formato de imagem mais popular, embora não suporte transparência. Ao converter de um <strong>PNG não comprimido</strong>, pode reduzir o tamanho do arquivo em uma média de <strong>90%</strong>. Com uma configuração de qualidade de <strong>75</strong>, a perda de qualidade é frequentemente <strong>imperceptível</strong>. Se você não precisa de um fundo transparente <strong>(o que é o caso da maioria das fotos)</strong>, converter para <strong>JPG</strong> geralmente é a melhor escolha.
                        </p>

                        <p>
                            <strong>PNG (Com perdas)</strong>: Suporta transparência com alguma perda de qualidade, reduzindo o tamanho do arquivo em uma média de <strong>70%</strong> em comparação com um <strong>PNG não comprimido</strong>. Escolha esta opção apenas se precisar de um fundo transparente no formato PNG. Caso contrário, o <strong>JPG</strong> oferece <strong>melhor qualidade por um tamanho menor</strong> (sem transparência), e o <strong>WebP (Com perdas)</strong> fornece <strong>melhor qualidade, tamanho menor e transparência</strong>, tornando-o uma alternativa superior se o formato PNG não for um requisito estrito.
                        </p>

                        <p>
                            <strong>PNG (Sem perdas)</strong>: Suporta transparência sem perda de qualidade. Reduz o tamanho do arquivo em uma média de <strong>20%</strong> em comparação com um <strong>PNG não comprimido</strong>. No entanto, <strong>se o formato PNG não for um requisito estrito</strong>, o <strong>WebP (Sem perdas)</strong> é uma escolha melhor, pois oferece tamanhos de arquivo menores.
                        </p>

                        <p>
                            <strong>WebP (Com perdas)</strong>: Suporta transparência com leve perda de qualidade. Reduz o tamanho do arquivo em uma média de <strong>90%</strong> em comparação com um <strong>PNG não comprimido</strong>. É um excelente substituto para o <strong>PNG (Com perdas)</strong>, oferecendo melhor qualidade e tamanhos menores. Nota: WebP não é suportado em alguns dispositivos mais antigos.
                        </p>

                        <p>
                            <strong>WebP (Sem perdas)</strong>: Suporta transparência sem perda de qualidade. Reduz o tamanho do arquivo em uma média de <strong>50%</strong> em comparação com um <strong>PNG não comprimido</strong>, tornando-o um substituto superior para o <strong>PNG (Sem perdas)</strong>. Nota: WebP não é suportado em alguns dispositivos mais antigos.
                        </p>

                        <p>
                            <strong>AVIF (Com perdas)</strong>: Suporta transparência com leve perda de qualidade. Como sucessor do WebP, oferece uma taxa de compressão ainda maior, reduzindo o tamanho do arquivo em uma média de <strong>94%</strong> em comparação com um <strong>PNG não comprimido</strong>. Como um formato de ponta, o AVIF oferece excelente qualidade com tamanhos de arquivo muito pequenos. No entanto, a compatibilidade com navegadores e dispositivos ainda é limitada. Este formato é melhor para usuários avançados ou quando você tem certeza de que os dispositivos de destino o suportam.
                        </p>
                        <p>
                            <strong>AVIF (Sem perdas)</strong>: Suporta transparência sem perda de qualidade. Em comparação com um <strong>PNG não comprimido</strong>, a redução no tamanho do arquivo não é significativa e, em alguns casos, pode até aumentar. A menos que você tenha uma necessidade específica de AVIF sem perdas, <strong>PNG (Sem perdas)</strong> ou <strong>WebP (Sem perdas)</strong> são geralmente opções melhores.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Alternar Tema"
    },
    interactive: {
        store_imageDeletedNotification: "Imagem removida: {fileName}",
        store_convertingImagesNotification: "Convertendo {number} imagens...",
        store_conversionFailedNotification: "Falha na conversão: {fileName}",
        store_unsupportedFileTypeNotification: "Formato não suportado, imagem removida: {fileName}",
        store_fileReadErrorNotification: "Não foi possível ler o arquivo, imagem removida: {fileName}",
        store_reconvertingNotification: "Reconvertendo: {fileName}",
        store_formatOptionAuto: "Compressão Automática",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Com perdas)",
        store_formatOptionPngLossless: "PNG (Sem perdas)",
        store_formatOptionWebpLossy: "WebP (Com perdas)",
        store_formatOptionWebpLossless: "WebP (Sem perdas)",
        store_formatOptionAvifLossy: "AVIF (Com perdas)",
        store_formatOptionAvifLossless: "AVIF (Sem perdas)",
        previewSection_title: "Pré-visualização e Download",
        previewSection_downloadAllButton: "Baixar Tudo",
        previewSection_deleteAllButton: "Excluir Tudo",
        previewSection_placeholder: "Nenhuma imagem ainda.",
        previewSection_statusPending: "Pendente",
        previewSection_statusConverting: "Convertendo...",
        previewSection_statusFailed: "Falha. Por favor, atualize a página e tente novamente.",
        previewSection_statusCompleted: "Concluído",
        previewSection_noCompletedFilesNotification: "Nenhuma imagem concluída para baixar.",
        previewSection_downloadStartedNotification: "Iniciando o download de {fileCount} arquivos...",
        previewSection_listEmptyNotification: "A lista está vazia.",
        previewSection_allDeletedNotification: "Todas as imagens foram removidas.",
        previewSection_zipCreationNotification: "Criando ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Criando ZIP: Algumas imagens não estão concluídas e serão ignoradas.",
        previewSection_zipCreationErrorNotification: "Ocorreu um erro durante a criação do ZIP.",
        previewSection_waitConversionNotification: "Por favor, aguarde a conclusão da conversão.",
        previewSection_downloadingFileNotification: "Baixando: {fileName}",
        previewSection_originalSizeLabel: "Tamanho original:",
        previewSection_convertedSizeLabel: "Tamanho convertido:",
        previewSection_downloadTitle: "Baixar",
        previewSection_previewTitle: "Pré-visualizar",
        previewSection_deleteTitle: "Excluir",
        previewSection_comparisonTab: "Comparar",
        previewSection_settingsTab: "Configurações",
        previewSection_originalImageLabel: "Imagem Original",
        previewSection_completedImageLabel: "Imagem Convertida",
        previewSection_formatLabel: "Formato:",
        previewSection_resolutionLabel: "Resolução:",
        previewSection_viewLargerButton: "Ver em Nova Aba",
        previewSection_qualityLabel: "Qualidade de Compressão",
        previewSection_sizeLabel: "Ajuste de Resolução",
        previewSection_outputFormatLabel: "Formato de Saída",
        previewSection_reconvertButton: "Reconverter esta imagem",
        globalControls_qualityLabel: "Qualidade de Compressão Global",
        globalControls_sizeLabel: "Ajuste de Resolução Global",
        globalControls_formatLabel: "Formato de Saída Global",
        globalControls_reconvertAllButton: "Aplicar e reconverter tudo",
        globalControls_restoreDefaultsButton: "Redefinir Opções",
        globalControls_noImagesNotification: "Por favor, adicione imagens primeiro.",
        globalControls_reconvertingAllNotification: "Reconvertendo todas as {imageCount} imagens com as configurações globais",
        globalControls_restoredNotification: "As opções foram redefinidas para o padrão.",
        addSection_title: "Adicionar Imagens",
        addArea_dragDropTitle: "Arraste e solte as imagens aqui",
        addArea_supportedFormats: "Suporta os formatos JPG, PNG, WebP, AVIF e HEIC",
        addArea_selectButton: "Selecionar Imagens",
        addArea_tips: "*Você pode adicionar várias imagens de uma vez.",
        ui_viewExplanationTitle: "Saiba mais sobre estas opções",
    }
};

export default ptBR;