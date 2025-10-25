document.getElementById('proposal-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const generateBtn = document.getElementById('generate-btn');
    generateBtn.textContent = 'Génération en cours...';
    generateBtn.disabled = true;

    // 1. Récupérer les valeurs brutes du formulaire
    const values = {
        nomSocieteClient: document.getElementById('nomSocieteClient').value,
        prenomClient: document.getElementById('prenomClient').value,
        dateEnvoi: new Date(document.getElementById('dateEnvoi').value).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        objectifPrincipal: document.getElementById('objectifPrincipal').value,
        situationActuelle: document.getElementById('situationActuelle').value,
        defisConcrets: document.getElementById('defisConcrets').value, // Texte brut
        objectifsCommuns: document.getElementById('objectifsCommuns').value, // Texte brut
    };

    // 2. NOUVELLE ÉTAPE : Formater les listes en HTML
    // Fonction pour transformer un texte multi-lignes en une liste d'items <li>
    const formatList = (text, type) => {
        return text
            .split('\n') // Sépare le texte en lignes
            .filter(line => line.trim() !== '') // Supprime les lignes vides
            .map(line => { // Transforme chaque ligne en un <li> formaté
                if (type === 'defis') {
                    return `<li class="flex items-start"><span class="text-warm-orange mt-1 mr-3">&#10007;</span>${line.trim()}</li>`;
                }
                if (type === 'objectifs') {
                    // Note : on ajoute <strong> comme dans le modèle original
                    return `<li class="flex items-start"><span class="text-success-green mt-1 mr-3">&#10003;</span><strong>${line.trim()}</strong></li>`;
                }
                return '';
            })
            .join('\n'); // Rejoint les lignes en une seule chaîne de caractères
    };

    // Appliquer le formatage
    values.defisConcrets = formatList(values.defisConcrets, 'defis');
    values.objectifsCommuns = formatList(values.objectifsCommuns, 'objectifs');

    // 3. Créer une instance de JSZip
    const zip = new JSZip();
    
    // 4. Lister les fichiers modèles à traiter
    const templateFiles = [
        'page1-propco-essentiel.html', 'page2-propco-essentiel.html', 'page3-propco-essentiel.html',
        'page4-propco-essentiel.html', 'page5-propco-essentiel.html', 'page6-propco-essentiel.html',
        'page7-propco-essentiel.html', 'page8-propco-essentiel.html', 'page9-propco-essentiel.html'
    ];

    // 5. Boucler sur chaque modèle, le charger, remplacer les placeholders
    for (const fileName of templateFiles) {
        try {
            const response = await fetch(`templates/${fileName}`);
            if (!response.ok) throw new Error(`Fichier modèle introuvable: ${fileName}`);
            
            let content = await response.text();

            for (const key in values) {
                const regex = new RegExp(`{{${key}}}`, 'g');
                content = content.replace(regex, values[key]);
            }

            zip.file(fileName, content);

        } catch (error) {
            console.error(error);
            alert(`Une erreur est survenue lors du traitement du fichier ${fileName}. Vérifiez la console.`);
            generateBtn.textContent = 'Générer la Proposition (.zip)';
            generateBtn.disabled = false;
            return;
        }
    }

    // 6. Générer le fichier ZIP et déclencher le téléchargement
    zip.generateAsync({ type: 'blob' })
        .then(function(content) {
            const link = document.createElement('a');
            const safeClientName = values.nomSocieteClient.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            link.download = `Proposition_Essentiel_${safeClientName}.zip`;
            link.href = URL.createObjectURL(content);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            
            generateBtn.textContent = 'Générer la Proposition (.zip)';
            generateBtn.disabled = false;
        });
});

// Initialiser la date du jour par défaut
document.getElementById('dateEnvoi').valueAsDate = new Date();
