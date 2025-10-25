document.getElementById('proposal-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    const generateBtn = document.getElementById('generate-btn');
    generateBtn.textContent = 'Génération en cours...';
    generateBtn.disabled = true;

    // 1. Récupérer les valeurs du formulaire
    const values = {
        nomSocieteClient: document.getElementById('nomSocieteClient').value,
        prenomClient: document.getElementById('prenomClient').value,
        dateEnvoi: new Date(document.getElementById('dateEnvoi').value).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        objectifPrincipal: document.getElementById('objectifPrincipal').value,
        situationActuelle: document.getElementById('situationActuelle').value,
        defisConcrets: document.getElementById('defisConcrets').value,
        objectifsCommuns: document.getElementById('objectifsCommuns').value,
    };

    // 2. Créer une instance de JSZip
    const zip = new JSZip();
    
    // 3. Lister les fichiers modèles à traiter
    const templateFiles = [
        'page1-propco-essentiel.html', 'page2-propco-essentiel.html', 'page3-propco-essentiel.html',
        'page4-propco-essentiel.html', 'page5-propco-essentiel.html', 'page6-propco-essentiel.html',
        'page7-propco-essentiel.html', 'page8-propco-essentiel.html', 'page9-propco-essentiel.html'
    ];

    // 4. Boucler sur chaque modèle, le charger, remplacer les placeholders
    for (const fileName of templateFiles) {
        try {
            // Charger le contenu du fichier modèle
            const response = await fetch(`templates/${fileName}`);
            if (!response.ok) {
                throw new Error(`Fichier modèle introuvable: ${fileName}`);
            }
            let content = await response.text();

            // Remplacer chaque placeholder par sa valeur
            for (const key in values) {
                // Utilise une expression régulière avec le flag 'g' pour remplacer TOUTES les occurrences
                const regex = new RegExp(`{{${key}}}`, 'g');
                content = content.replace(regex, values[key]);
            }

            // Ajouter le fichier modifié au ZIP
            zip.file(fileName, content);

        } catch (error) {
            console.error(error);
            alert(`Une erreur est survenue lors du traitement du fichier ${fileName}. Vérifiez la console.`);
            generateBtn.textContent = 'Générer la Proposition (.zip)';
            generateBtn.disabled = false;
            return; // Arrêter le processus
        }
    }

    // 5. Générer le fichier ZIP et déclencher le téléchargement
    zip.generateAsync({ type: 'blob' })
        .then(function(content) {
            const link = document.createElement('a');
            const safeClientName = values.nomSocieteClient.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            link.download = `Proposition_Essentiel_${safeClientName}.zip`;
            link.href = URL.createObjectURL(content);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href); // Libérer la mémoire
            
            generateBtn.textContent = 'Générer la Proposition (.zip)';
            generateBtn.disabled = false;
        });
});

// Initialiser la date du jour par défaut
document.getElementById('dateEnvoi').valueAsDate = new Date();
