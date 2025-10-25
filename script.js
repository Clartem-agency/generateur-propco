document.getElementById('proposal-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const generateBtn = document.getElementById('generate-btn');
    generateBtn.textContent = 'Génération en cours...';
    generateBtn.disabled = true;

    const genre = document.querySelector('input[name="genre"]:checked').value;
    const salutation = (genre === 'femme') ? 'Chère' : 'Cher';

    const values = {
        nomSocieteClient: document.getElementById('nomSocieteClient').value,
        prenomClient: document.getElementById('prenomClient').value,
        salutation: salutation,
        dateEnvoi: new Date(document.getElementById('dateEnvoi').value).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        objectifPrincipal: document.getElementById('objectifPrincipal').value,
        
        // MODIFICATION ICI : Ajout des variables de la page 4
        raison1_titre: document.getElementById('raison1_titre').value,
        raison1_texte: document.getElementById('raison1_texte').value,
        raison2_titre: document.getElementById('raison2_titre').value,
        raison2_texte: document.getElementById('raison2_texte').value,
        raison3_titre: document.getElementById('raison3_titre').value,
        raison3_texte: document.getElementById('raison3_texte').value,

        situationActuelle: document.getElementById('situationActuelle').value,
        defisConcrets: document.getElementById('defisConcrets').value,
        objectifsCommuns: document.getElementById('objectifsCommuns').value,
    };

    const formatList = (text, type) => {
        return text
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(line => {
                if (type === 'defis') {
                    return `<li class="flex items-start"><span class="text-warm-orange mt-1 mr-3">&#10007;</span>${line.trim()}</li>`;
                }
                if (type === 'objectifs') {
                    return `<li class="flex items-start"><span class="text-success-green mt-1 mr-3">&#10003;</span><strong>${line.trim()}</strong></li>`;
                }
                return '';
            })
            .join('\n');
    };

    values.defisConcrets = formatList(values.defisConcrets, 'defis');
    values.objectifsCommuns = formatList(values.objectifsCommuns, 'objectifs');

    const zip = new JSZip();
    
    const templateFiles = [
        'page1-propco-essentiel.html', 'page2-propco-essentiel.html', 'page3-propco-essentiel.html',
        'page4-propco-essentiel.html', 'page5-propco-essentiel.html', 'page6-propco-essentiel.html',
        'page7-propco-essentiel.html', 'page8-propco-essentiel.html', 'page9-propco-essentiel.html'
    ];

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

document.getElementById('dateEnvoi').valueAsDate = new Date();
