import type { Translation } from './en.tsx';

const el: Translation = {
    static: {
        index_lang: 'el',
        index_dir: 'ltr',
        index_title: "Image Tool - Προηγμένο Εργαλείο Μετατροπής Εικόνων",
        index_description: "Ένα δωρεάν, επαγγελματικό διαδικτυακό εργαλείο για συμπίεση εικόνων, αλλαγή μεγέθους και μετατροπή μορφής. Υποστηρίζει την αμοιβαία μετατροπή μεταξύ JPG, PNG, WebP και AVIF, και μπορεί να μετατρέψει το HEIC σε αυτές τις μορφές. Όλη η επεξεργασία γίνεται τοπικά στον περιηγητή σας — τα αρχεία σας δεν ανεβαίνουν ποτέ σε διακομιστή, εξασφαλίζοντας απόλυτη ιδιωτικότητα και ασφάλεια δεδομένων.",
        optionsExplanation: {
            title: "Οδηγός Επιλογών",
            subtitle: "Κατανοήστε τη λειτουργία και τη χρήση κάθε επιλογής για να βελτιστοποιήσετε τα αποτελέσματα της μετατροπής των εικόνων σας.",
            options: [
                {
                    id: "quality-option",
                    title: "Ποιότητα Συμπίεσης",
                    description: <>
                        <p>Αυτή η επιλογή εφαρμόζεται μόνο όταν η μορφή εξόδου είναι <strong>JPG</strong>, <strong>WebP (Με απώλειες)</strong> ή <strong>AVIF (Με απώλειες)</strong>.</p>
                        <p>Μια χαμηλότερη τιμή δημιουργεί ένα μικρότερο αρχείο αλλά μειώνει την ποιότητα της εικόνας. Η προτεινόμενη τιμή του <strong>75</strong> προσφέρει μια καλή ισορροπία μεταξύ μεγέθους αρχείου και ποιότητας.</p>
                        <p>Αν το αρχείο είναι ακόμα πολύ μεγάλο μετά τη συμπίεση, δοκιμάστε να μειώσετε την ανάλυση, κάτι που είναι συχνά πιο αποτελεσματικό για τη μείωση του μεγέθους του αρχείου.</p>
                    </>
                },
                {
                    id: "size-option",
                    title: "Προσαρμογή Ανάλυσης",
                    description: <>
                        <p>Μειώστε την ανάλυση της εικόνας κατά ποσοστό, διατηρώντας την αρχική αναλογία διαστάσεων. Το <strong>100%</strong> διατηρεί τις αρχικές διαστάσεις.</p>
                        <p>Η μείωση της ανάλυσης μπορεί να μειώσει <strong>σημαντικά</strong> το μέγεθος του αρχείου. Εάν δεν χρειάζεστε την υψηλή ανάλυση του πρωτοτύπου, αυτός είναι συχνά ο <strong>πιο αποτελεσματικός τρόπος</strong> για να κάνετε το αρχείο μικρότερο.</p>
                        <p>Με τις άλλες επιλογές ίδιες, με βάση την <strong>ανάλυση 100%</strong>. Η προσαρμογή σε <strong>ανάλυση 75%</strong> μειώνει το μέγεθος του αρχείου κατά μέσο όρο <strong>30%</strong>, η προσαρμογή σε <strong>ανάλυση 50%</strong> το μειώνει κατά μέσο όρο <strong>65%</strong>, και η προσαρμογή σε <strong>ανάλυση 25%</strong> το μειώνει κατά μέσο όρο <strong>88%</strong>.</p>
                    </>
                },
                {
                    id: "format-option",
                    title: "Μορφή Εξόδου",
                    description: <>
                        <p>Επιλέξτε τη μορφή εξόδου για την εικόνα. Διαφορετικές μορφές έχουν τα δικά τους πλεονεκτήματα και περιπτώσεις χρήσης.</p>
                        <p><strong>Αυτόματη Συμπίεση</strong>: Αυτή η επιλογή εφαρμόζει αυτόματα μια κατάλληλη στρατηγική συμπίεσης με βάση τη μορφή εισόδου:</p>
                        <ul>
                            <li>Οι εικόνες <strong>JPG</strong> συμπιέζονται ως <strong>JPG</strong>.</li>
                            <li>Οι εικόνες <strong>PNG</strong> συμπιέζονται με τη μέθοδο <strong>PNG (Με απώλειες)</strong>.</li>
                            <li>Οι εικόνες <strong>WebP</strong> συμπιέζονται με τη μέθοδο <strong>WebP (Με απώλειες)</strong>.</li>
                            <li>Οι εικόνες <strong>AVIF</strong> συμπιέζονται με τη μέθοδο <strong>AVIF (Με απώλειες)</strong>.</li>
                            <li>Οι εικόνες <strong>HEIC</strong> μετατρέπονται σε <strong>JPG</strong>.</li>
                        </ul>

                        <p>
                            Μπορείτε επίσης να επιλέξετε χειροκίνητα μια μορφή παρακάτω με βάση τις συγκεκριμένες ανάγκες σας. Ακολουθεί ένας λεπτομερής οδηγός για κάθε επιλογή:
                        </p>

                        <p>
                            <strong>JPG</strong>: Η πιο δημοφιλής μορφή εικόνας, αν και δεν υποστηρίζει διαφάνεια. Κατά τη μετατροπή από ένα <strong>ασυμπίεστο PNG</strong>, μπορεί να μειώσει το μέγεθος του αρχείου κατά μέσο όρο <strong>90%</strong>. Σε ρύθμιση ποιότητας <strong>75</strong>, η απώλεια ποιότητας είναι συχνά <strong>ανεπαίσθητη</strong>. Εάν δεν χρειάζεστε διαφανές φόντο <strong>(πράγμα που ισχύει για τις περισσότερες φωτογραφίες)</strong>, η μετατροπή σε <strong>JPG</strong> είναι συνήθως η καλύτερη επιλογή.
                        </p>

                        <p>
                            <strong>PNG (Με απώλειες)</strong>: Υποστηρίζει διαφάνεια με κάποια απώλεια ποιότητας, μειώνοντας το μέγεθος του αρχείου κατά μέσο όρο <strong>70%</strong> σε σύγκριση με ένα <strong>ασυμπίεστο PNG</strong>. Επιλέξτε το μόνο εάν χρειάζεστε διαφανές φόντο σε μορφή PNG. Διαφορετικά, το <strong>JPG</strong> προσφέρει <strong>καλύτερη ποιότητα για μικρότερο μέγεθος</strong> (χωρίς διαφάνεια), και το <strong>WebP (Με απώλειες)</strong> παρέχει <strong>καλύτερη ποιότητα, μικρότερο μέγεθος και διαφάνεια</strong>, καθιστώντας το μια ανώτερη εναλλακτική λύση εάν η μορφή PNG δεν είναι αυστηρή απαίτηση.
                        </p>

                        <p>
                            <strong>PNG (Χωρίς απώλειες)</strong>: Υποστηρίζει διαφάνεια χωρίς απώλεια ποιότητας. Μειώνει το μέγεθος του αρχείου κατά μέσο όρο <strong>20%</strong> σε σύγκριση με ένα <strong>ασυμπίεστο PNG</strong>. Ωστόσο, <strong>εάν η μορφή PNG δεν είναι αυστηρή απαίτηση</strong>, το <strong>WebP (Χωρίς απώλειες)</strong> είναι μια καλύτερη επιλογή καθώς προσφέρει μικρότερα μεγέθη αρχείων.
                        </p>

                        <p>
                            <strong>WebP (Με απώλειες)</strong>: Υποστηρίζει διαφάνεια με ελαφρά απώλεια ποιότητας. Μειώνει το μέγεθος του αρχείου κατά μέσο όρο <strong>90%</strong> σε σύγκριση με ένα <strong>ασυμπίεστο PNG</strong>. Είναι μια εξαιρετική αντικατάσταση για το <strong>PNG (Με απώλειες)</strong>, προσφέροντας καλύτερη ποιότητα και μικρότερα μεγέθη. Σημείωση: Το WebP δεν υποστηρίζεται σε ορισμένες παλαιότερες συσκευές.
                        </p>

                        <p>
                            <strong>WebP (Χωρίς απώλειες)</strong>: Υποστηρίζει διαφάνεια χωρίς απώλεια ποιότητας. Μειώνει το μέγεθος του αρχείου κατά μέσο όρο <strong>50%</strong> σε σύγκριση με ένα <strong>ασυμπίεστο PNG</strong>, καθιστώντας το μια ανώτερη αντικατάσταση για το <strong>PNG (Χωρίς απώλειες)</strong>. Σημείωση: Το WebP δεν υποστηρίζεται σε ορισμένες παλαιότερες συσκευές.
                        </p>

                        <p>
                            <strong>AVIF (Με απώλειες)</strong>: Υποστηρίζει διαφάνεια με ελαφρά απώλεια ποιότητας. Ως διάδοχος του WebP, προσφέρει ακόμη υψηλότερο ποσοστό συμπίεσης, μειώνοντας το μέγεθος του αρχείου κατά μέσο όρο <strong>94%</strong> σε σύγκριση με ένα <strong>ασυμπίεστο PNG</strong>. Ως μορφή αιχμής, το AVIF παρέχει εξαιρετική ποιότητα σε πολύ μικρά μεγέθη αρχείων. Ωστόσο, η συμβατότητα με προγράμματα περιήγησης και συσκευές είναι ακόμα περιορισμένη. Αυτή η μορφή είναι καλύτερη για προχωρημένους χρήστες ή όταν είστε βέβαιοι ότι οι συσκευές-στόχοι την υποστηρίζουν.
                        </p>
                        <p>
                            <strong>AVIF (Χωρίς απώλειες)</strong>: Υποστηρίζει διαφάνεια χωρίς απώλεια ποιότητας. Σε σύγκριση με ένα <strong>ασυμπίεστο PNG</strong>, η μείωση του μεγέθους του αρχείου δεν είναι σημαντική, και σε ορισμένες περιπτώσεις, μπορεί ακόμη και να αυξηθεί. Εκτός αν έχετε συγκεκριμένη ανάγκη για AVIF χωρίς απώλειες, το <strong>PNG (Χωρίς απώλειες)</strong> ή το <strong>WebP (Χωρίς απώλειες)</strong> είναι γενικά καλύτερες επιλογές.
                        </p>
                    </>
                }
            ]
        },
        themeToggle_title: "Εναλλαγή Θέματος"
    },
    interactive: {
        store_imageDeletedNotification: "Αφαιρέθηκε: {fileName}",
        store_convertingImagesNotification: "Μετατροπή {number} εικόνων σε εξέλιξη...",
        store_conversionFailedNotification: "Η μετατροπή απέτυχε: {fileName}",
        store_unsupportedFileTypeNotification: "Μη υποστηριζόμενη μορφή, αφαιρέθηκε: {fileName}",
        store_fileReadErrorNotification: "Αδυναμία ανάγνωσης αρχείου, αφαιρέθηκε: {fileName}",
        store_reconvertingNotification: "Εκ νέου μετατροπή: {fileName}",
        store_formatOptionAuto: "Αυτόματη Συμπίεση",
        store_formatOptionJpg: "JPG",
        store_formatOptionPngLossy: "PNG (Με απώλειες)",
        store_formatOptionPngLossless: "PNG (Χωρίς απώλειες)",
        store_formatOptionWebpLossy: "WebP (Με απώλειες)",
        store_formatOptionWebpLossless: "WebP (Χωρίς απώλειες)",
        store_formatOptionAvifLossy: "AVIF (Με απώλειες)",
        store_formatOptionAvifLossless: "AVIF (Χωρίς απώλειες)",
        previewSection_title: "Προεπισκόπηση και Λήψη",
        previewSection_downloadAllButton: "Λήψη Όλων",
        previewSection_deleteAllButton: "Διαγραφή Όλων",
        previewSection_placeholder: "Δεν υπάρχουν εικόνες ακόμα.",
        previewSection_statusPending: "Σε αναμονή",
        previewSection_statusConverting: "Μετατροπή...",
        previewSection_statusFailed: "Αποτυχία. Ανανεώστε τη σελίδα και δοκιμάστε ξανά.",
        previewSection_statusCompleted: "Ολοκληρώθηκε",
        previewSection_noCompletedFilesNotification: "Δεν υπάρχουν ολοκληρωμένες εικόνες για λήψη.",
        previewSection_downloadStartedNotification: "Έναρξη λήψης για {fileCount} αρχεία...",
        previewSection_listEmptyNotification: "Η λίστα είναι κενή.",
        previewSection_allDeletedNotification: "Όλες οι εικόνες έχουν αφαιρεθεί.",
        previewSection_zipCreationNotification: "Δημιουργία ZIP...",
        previewSection_zipCreationWithSkipsNotification: "Δημιουργία ZIP: Ορισμένες εικόνες δεν έχουν ολοκληρωθεί και θα παραλειφθούν.",
        previewSection_zipCreationErrorNotification: "Προέκυψε σφάλμα κατά τη δημιουργία του ZIP.",
        previewSection_waitConversionNotification: "Παρακαλώ περιμένετε να ολοκληρωθεί η μετατροπή.",
        previewSection_downloadingFileNotification: "Λήψη: {fileName}",
        previewSection_originalSizeLabel: "Αρχικό μέγεθος:",
        previewSection_convertedSizeLabel: "Μέγεθος μετά τη μετατροπή:",
        previewSection_downloadTitle: "Λήψη",
        previewSection_previewTitle: "Προεπισκόπηση",
        previewSection_deleteTitle: "Διαγραφή",
        previewSection_comparisonTab: "Σύγκριση",
        previewSection_settingsTab: "Ρυθμίσεις",
        previewSection_originalImageLabel: "Αρχική Εικόνα",
        previewSection_completedImageLabel: "Εικόνα Μετά τη Μετατροπή",
        previewSection_formatLabel: "Μορφή:",
        previewSection_resolutionLabel: "Ανάλυση:",
        previewSection_viewLargerButton: "Προβολή σε Νέα Καρτέλα",
        previewSection_qualityLabel: "Ποιότητα Συμπίεσης",
        previewSection_sizeLabel: "Προσαρμογή Ανάλυσης",
        previewSection_outputFormatLabel: "Μορφή Εξόδου",
        previewSection_reconvertButton: "Εκ νέου μετατροπή",
        globalControls_qualityLabel: "Γενική Ποιότητα Συμπίεσης",
        globalControls_sizeLabel: "Γενική Προσαρμογή Ανάλυσης",
        globalControls_formatLabel: "Γενική Μορφή Εξόδου",
        globalControls_reconvertAllButton: "Εφαρμογή και Μετατροπή Όλων",
        globalControls_restoreDefaultsButton: "Επαναφορά Επιλογών",
        globalControls_noImagesNotification: "Παρακαλώ προσθέστε πρώτα εικόνες.",
        globalControls_reconvertingAllNotification: "Εκ νέου μετατροπή όλων των {imageCount} εικόνων με τις γενικές ρυθμίσεις",
        globalControls_restoredNotification: "Οι επιλογές έχουν επαναφερθεί στις προεπιλογές.",
        addSection_title: "Προσθήκη Εικόνων",
        addArea_dragDropTitle: "Σύρετε και αποθέστε εικόνες εδώ",
        addArea_supportedFormats: "Υποστηρίζει μορφές JPG, PNG, WebP, AVIF και HEIC",
        addArea_selectButton: "Επιλογή Εικόνων",
        addArea_tips: "*Μπορείτε να προσθέσετε πολλές εικόνες ταυτόχρονα",
        ui_viewExplanationTitle: "Μάθετε για αυτές τις επιλογές",
    }
};

export default el;