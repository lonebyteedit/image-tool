import type { Translation } from './en.tsx';

const fr: Translation = {
    static: {
        index_lang: 'fr',
        index_dir: 'ltr',
        index_title: "Image Tool - Outil avancé de conversion d'images",
        index_description: "Un outil en ligne professionnel et gratuit pour la compression d'images, le redimensionnement et la conversion de formats. Il prend en charge la conversion mutuelle entre JPG, PNG, WebP et AVIF, et peut convertir le format HEIC vers ces formats. Tout le traitement est effectué localement dans votre navigateur — vos fichiers ne sont jamais envoyés vers un serveur, garantissant une confidentialité et une sécurité totales de vos données.",
        optionsExplanation: {
            title: "Guide des options",
            subtitle: "Découvrez le fonctionnement de chaque option pour optimiser les résultats de vos conversions d'images.",
            options: [
                {
                    id: "quality-option",
                    title: "Qualité de compression",
                    description: <>
                        <p>Cette option s'applique uniquement lorsque le format de destination est <strong>JPG</strong>, <strong>WebP (avec pertes)</strong> ou <strong>AVIF (avec pertes)</strong>.</p>
                        <p>Une valeur plus faible produit un fichier plus petit, mais au détriment de la qualité de l'image. La valeur recommandée de <strong>75</strong> offre un excellent équilibre entre la taille du fichier et la qualité.</p>
                        <p>Si le fichier est encore trop volumineux, essayez de réduire la résolution, ce qui est souvent plus efficace pour diminuer la taille du fichier.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Ajustement de la résolution",
                    description: <>
                        <p>Réduisez la résolution de l'image en pourcentage tout en conservant ses proportions. <strong>100%</strong> maintient la résolution d'origine.</p>
                        <p>La réduction de la résolution peut diminuer <strong>considérablement</strong> la taille du fichier. Si vous n'avez pas besoin d'une haute résolution, c'est souvent la <strong>méthode la plus efficace</strong> pour alléger le fichier.</p>
                        <p>Avec les autres options identiques, et en se basant sur une résolution de <strong>100%</strong> : un ajustement à <strong>75%</strong> réduit la taille du fichier d'environ <strong>30%</strong> ; un ajustement à <strong>50%</strong> la réduit d'environ <strong>65%</strong> ; et un ajustement à <strong>25%</strong> la réduit d'environ <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Format de sortie",
                    description: <>
                        <p>Choisissez le format de sortie de l'image. Chaque format a ses propres avantages et cas d'utilisation.</p>
                        <p><strong>Compression automatique</strong> : Cette option applique une stratégie de compression adaptée en fonction du format d'entrée :</p>
                        <ul>
                            <li>Les images <strong>JPG</strong> sont compressées en <strong>JPG</strong>.</li>
                            <li>Les images <strong>PNG</strong> sont compressées avec la méthode <strong>PNG (avec pertes)</strong>.</li>
                            <li>Les images <strong>WebP</strong> sont compressées avec la méthode <strong>WebP (avec pertes)</strong>.</li>
                            <li>Les images <strong>AVIF</strong> sont compressées avec la méthode <strong>AVIF (avec pertes)</strong>.</li>
                            <li>Les images <strong>HEIC</strong> sont converties en <strong>JPG</strong>.</li>
                        </ul>

                        <p>Vous pouvez également sélectionner manuellement un format ci-dessous en fonction de vos besoins. Voici un guide détaillé pour chaque option :</p>

                        <p>
                            <strong>JPG</strong> : Le format d'image le plus populaire, mais il ne prend pas en charge la transparence. Par rapport à un <strong>PNG non compressé</strong>, il réduit la taille du fichier d'environ <strong>90%</strong>. Avec une qualité de <strong>75</strong>, la perte de qualité est <strong>presque imperceptible</strong>. Si vous n'avez pas besoin de transparence <strong>(ce qui est le cas pour la plupart des photos)</strong>, la conversion en <strong>JPG</strong> est généralement le meilleur choix.
                        </p>

                        <p>
                            <strong>PNG (avec pertes)</strong> : Prend en charge la transparence avec une légère perte de qualité. Réduit la taille du fichier d'environ <strong>70%</strong> par rapport à un <strong>PNG non compressé</strong>. À choisir uniquement si vous avez besoin de la transparence au format PNG. Sinon, le <strong>JPG</strong> offre une <strong>meilleure qualité pour une taille plus petite</strong> (sans transparence), et le <strong>WebP (avec pertes)</strong> offre une <strong>meilleure qualité, une taille plus réduite et la transparence</strong>, ce qui en fait une meilleure alternative si le format PNG n'est pas une exigence stricte.
                        </p>

                        <p>
                            <strong>PNG (sans perte)</strong> : Prend en charge la transparence sans perte de qualité. Réduit la taille du fichier d'environ <strong>20%</strong> par rapport à un <strong>PNG non compressé</strong>. Cependant, si le <strong>format PNG n'est pas obligatoire</strong>, le <strong>WebP (sans perte)</strong> est un meilleur choix car il produit des fichiers plus légers.
                        </p>

                        <p>
                            <strong>WebP (avec pertes)</strong> : Prend en charge la transparence avec une légère perte de qualité. Réduit la taille du fichier d'environ <strong>90%</strong> par rapport à un <strong>PNG non compressé</strong>. C'est une excellente alternative au <strong>PNG (avec pertes)</strong>, offrant une meilleure qualité et des tailles de fichier plus petites. Remarque : le format WebP n'est pas compatible avec certains anciens appareils.
                        </p>

                        <p>
                            <strong>WebP (sans perte)</strong> : Prend en charge la transparence sans perte de qualité. Réduit la taille du fichier d'environ <strong>50%</strong> par rapport à un <strong>PNG non compressé</strong>, ce qui en fait une meilleure alternative au <strong>PNG (sans perte)</strong>. Remarque : le format WebP n'est pas compatible avec certains anciens appareils.
                        </p>

                        <p>
                            <strong>AVIF (avec pertes)</strong> : Prend en charge la transparence avec une légère perte de qualité. En tant que successeur de <strong>WebP</strong>, il offre un taux de compression encore plus élevé, réduisant la taille du fichier d'environ <strong>94%</strong> par rapport à un <strong>PNG non compressé</strong>. Format de pointe, l'AVIF offre une excellente qualité pour une très petite taille. Cependant, sa compatibilité avec les navigateurs et appareils est encore limitée. Ce format est idéal pour les utilisateurs avancés ou lorsque vous êtes certain que les appareils cibles le supportent.
                        </p>
                        <p>
                            <strong>AVIF (sans perte)</strong> : Prend en charge la transparence sans perte de qualité. Par rapport à un <strong>PNG non compressé</strong>, la réduction de taille est peu significative, et dans certains cas, la taille peut même augmenter. Sauf besoin spécifique, le <strong>PNG (sans perte)</strong> ou le <strong>WebP (sans perte)</strong> sont généralement de meilleures options.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Changer de thème"
    },
    interactive: {
        store_imageDeletedNotification: "Image supprimée : {fileName}",
        store_convertingImagesNotification: "Conversion de {number} images en cours...",
        store_conversionFailedNotification: "Échec de la conversion : {fileName}",
        store_unsupportedFileTypeNotification: "Format non pris en charge, image supprimée : {fileName}",
        store_fileReadErrorNotification: "Impossible de lire le fichier, image supprimée : {fileName}",
        store_reconvertingNotification: "Reconversion : {fileName}",
        store_formatOptionAuto: "Compression automatique",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (avec pertes)",
        store_formatOptionPngLossless: "PNG (sans perte)",
        store_formatOptionWebpLossy: "WebP (avec pertes)",
        store_formatOptionWebpLossless: "WebP (sans perte)",
        store_formatOptionAvifLossy: "AVIF (avec pertes)",
        store_formatOptionAvifLossless: "AVIF (sans perte)",
        previewSection_title: "Aperçu et téléchargement",
        previewSection_downloadAllButton: "Tout télécharger",
        previewSection_deleteAllButton: "Tout supprimer",
        previewSection_placeholder: "Aucune image pour l'instant.",
        previewSection_statusPending: "En attente",
        previewSection_statusConverting: "Conversion...",
        previewSection_statusFailed: "Échec. Veuillez rafraîchir la page et réessayer.",
        previewSection_statusCompleted: "Terminé",
        previewSection_noCompletedFilesNotification: "Aucune image convertie à télécharger.",
        previewSection_downloadStartedNotification: "Début du téléchargement de {fileCount} fichier(s)...",
        previewSection_listEmptyNotification: "La liste est vide.",
        previewSection_allDeletedNotification: "Toutes les images ont été supprimées.",
        previewSection_zipCreationNotification: "Création du ZIP en cours...",
        previewSection_zipCreationWithSkipsNotification: "Création du ZIP en cours : certaines images sont incomplètes et seront ignorées.",
        previewSection_zipCreationErrorNotification: "Une erreur s'est produite lors de la création du ZIP.",
        previewSection_waitConversionNotification: "Veuillez attendre la fin de la conversion.",
        previewSection_downloadingFileNotification: "Téléchargement : {fileName}",
        previewSection_originalSizeLabel: "Taille d'origine :",
        previewSection_convertedSizeLabel: "Taille convertie :",
        previewSection_downloadTitle: "Télécharger",
        previewSection_previewTitle: "Aperçu",
        previewSection_deleteTitle: "Supprimer",
        previewSection_comparisonTab: "Comparer",
        previewSection_settingsTab: "Paramètres",
        previewSection_originalImageLabel: "Image d'origine",
        previewSection_completedImageLabel: "Image convertie",
        previewSection_formatLabel: "Format :",
        previewSection_resolutionLabel: "Résolution :",
        previewSection_viewLargerButton: "Ouvrir dans un nouvel onglet",
        previewSection_qualityLabel: "Qualité de compression",
        previewSection_sizeLabel: "Ajustement de la résolution",
        previewSection_outputFormatLabel: "Format de sortie",
        previewSection_reconvertButton: "Reconvertir cette image",
        globalControls_qualityLabel: "Qualité de compression globale",
        globalControls_sizeLabel: "Ajustement de la résolution global",
        globalControls_formatLabel: "Format de sortie global",
        globalControls_reconvertAllButton: "Appliquer et tout reconvertir",
        globalControls_restoreDefaultsButton: "Réinitialiser les options",
        globalControls_noImagesNotification: "Veuillez d'abord ajouter des images.",
        globalControls_reconvertingAllNotification: "Reconversion des {imageCount} images avec les paramètres globaux",
        globalControls_restoredNotification: "Les options ont été réinitialisées par défaut.",
        addSection_title: "Ajouter des images",
        addArea_dragDropTitle: "Glissez-déposez les images ici",
        addArea_supportedFormats: "Formats pris en charge : JPG, PNG, WebP, AVIF et HEIC",
        addArea_selectButton: "Sélectionner des images",
        addArea_tips: "*Vous pouvez ajouter plusieurs images en une seule fois.",
        ui_viewExplanationTitle: "En savoir plus sur ces options",
    }
};

export default fr;
