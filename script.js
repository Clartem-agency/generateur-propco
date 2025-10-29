// --- BASE DE DONNÉES DES OFFRES ---
const offerData = {
    essentiel: {
        name: "Site Clarté Essentiel",
        pageCount: 11, // <-- AJOUT : Nombre de pages
        price: "799,00 €",
        deposit: "399,50 €",
        intro_page2: "Suite à notre passionnant Appel Clarté, cette proposition détaille la solution que j'ai conçue pour répondre à votre objectif principal :",
        objective: "moderniser votre image professionnelle pour qu'elle soit enfin à la hauteur de la qualité de vos services.",
        situation: `Lors de notre échange, vous avez mentionné que votre présence en ligne actuelle ne reflète plus la qualité de votre travail. Vous m'avez confié que vous n'osiez "presque plus partager le lien de votre site".`,
        title_defis: "Les Défis Concrets",
        intro_defis: "Cette situation engendre plusieurs frustrations et freins pour votre activité :",
        challenges: `Un manque de crédibilité perçu qui vous oblige à "sur-justifier" votre valeur.\nL'absence d'un message clair qui perd les visiteurs et ne convertit pas leur intérêt.\nLa complexité et l'inquiétude liées aux obligations légales comme le RGPD.`,
        title_objectifs: "Nos Objectifs Communs",
        intro_objectifs: "Notre collaboration visera donc à transformer ces défis en opportunités :",
        goals: `Moderniser votre image professionnelle pour inspirer une confiance immédiate.\nClarifier votre proposition de valeur pour que vos clients idéaux vous comprennent.\nVous offrir une tranquillité d'esprit totale, tant sur le plan technique que légal.`,
        reason1_title: "Réponse Directe",
        reason1_text: "Elle répond directement à votre défi principal en vous dotant d'une vitrine professionnelle sur-mesure qui reflète enfin la qualité de votre travail.",
        reason2_title: "Sérénité Totale",
        reason2_text: "Elle vous offre une tranquillité d'esprit complète, gérant pour vous la technique (Pack Sérénité) et la conformité légale (Pack RGPD).",
        reason3_title: "Meilleur Investissement",
        reason3_text: "Elle représente le meilleur investissement pour établir une fondation digitale solide et professionnelle, rapidement et sans superflu."
    },
    interaction: {
        name: "Site Clarté Interaction",
        pageCount: 11, // <-- AJOUT : Nombre de pages
        price: "999,00 €",
        deposit: "499,50 €",
        intro_page2: "Suite à notre passionnant Appel Clarté, cette proposition détaille la solution que j'ai conçue pour répondre à votre objectif principal :",
        objective: "automatiser votre prise de rendez-vous pour vous libérer un temps administratif précieux.",
        situation: `Lors de notre échange, vous avez souligné que votre processus actuel de prise de rendez-vous est entièrement manuel. Vous m'avez expliqué que les échanges d'emails pour trouver un créneau sont "chronophages et inefficaces".`,
        title_defis: "Les Défis Concrets",
        intro_defis: "Ce fonctionnement manuel a des conséquences directes sur votre productivité :",
        challenges: `Une perte de temps et de charge mentale considérable que vous pourriez dédier à vos clients.\nUn risque de perdre des prospects impatients qui abandonnent face à la complexité du processus.\nUne expérience client qui manque de fluidité et de professionnalisme dès le premier contact.`,
        title_objectifs: "Nos Objectifs Communs",
        intro_objectifs: "Notre collaboration visera donc à transformer votre site en un véritable outil de productivité :",
        goals: `Automatiser 100% de votre prise de rendez-vous pour libérer votre temps et votre esprit.\nOffrir une expérience de réservation fluide et professionnelle qui convertit.\nConstruire votre "assistant digital personnel" qui travaille pour vous 24/7.`,
        reason1_title: "Ciblage Précis",
        reason1_text: "Elle est spécifiquement conçue pour résoudre votre défi n°1 : l'automatisation. Nous ne faisons pas qu'ajouter un bouton, nous construisons un système de conversion.",
        reason2_title: "Gain de Temps Immédiat",
        reason2_text: "Dès le jour de la mise en ligne, votre \"assistant digital\" commencera à vous faire gagner des heures, en gérant vos prises de rendez-vous 24/7.",
        reason3_title: "Meilleur Retour sur Investissement",
        reason3_text: "Le temps que vous allez économiser et les prospects que vous n'allez plus perdre font de cette formule l'investissement le plus rentable pour votre productivité."
    },
    croissance: {
        name: "Site Clarté Croissance",
        pageCount: 12, // <-- AJOUT ET MODIFICATION : Nombre de pages
        price: "1299,00 €",
        deposit: "649,50 €",
        intro_page2: "Suite à notre passionnant Appel Clarté, cette proposition détaille la stratégie que j'ai conçue pour répondre à votre ambition principale :",
        objective: "transformer votre site en un véritable moteur d'acquisition de clients sur le long terme.",
        situation: `Lors de notre échange, vous avez exprimé votre désir d'aller au-delà d'une simple "carte de visite" en ligne. Vous sentez que votre site actuel est passif et ne contribue pas activement à la croissance de votre activité.`,
        title_defis: "Les Opportunités Manquées",
        intro_defis: "Cette passivité se traduit par plusieurs opportunités de croissance manquées :",
        challenges: `Vous ne capturez pas l'intérêt des visiteurs qui ne sont pas encore prêts à acheter, perdant ainsi de futurs clients potentiels.\nVotre expertise et vos actualités ne sont pas mises en avant, ce qui ne vous positionne pas comme une autorité dans votre domaine.\nVous n'avez aucune donnée sur le comportement de vos visiteurs, naviguant "à l'aveugle" sans stratégie claire.`,
        title_objectifs: "Nos Objectifs Stratégiques",
        intro_objectifs: "Notre collaboration visera donc à construire un véritable écosystème marketing :",
        goals: `Transformer votre site en une machine à générer des prospects en capturant l'email de vos visiteurs.\nAsseoir votre statut d'expert en partageant régulièrement votre savoir-faire.\nMettre en place les outils de mesure pour piloter votre croissance sur la base de données concrètes.`,
        reason1_title: "Vision Proactive",
        reason1_text: "Elle ne se contente pas d'être une vitrine passive. Elle intègre les outils pour aller activement chercher et fidéliser vos futurs clients.",
        reason2_title: "Actif à Long Terme",
        reason2_text: "En vous permettant de créer du contenu (blog) et de bâtir une audience (newsletter), vous investissez dans un actif marketing qui prendra de la valeur avec le temps.",
        reason3_title: "Pilotage par la Donnée",
        reason3_text: "Grâce aux outils d'analyse intégrés, vous ne naviguerez plus à l'aveugle. Vous pourrez prendre des décisions marketing basées sur des données réelles."
    },
    'seo-local': {
        name: "Site Clarté + SEO Local",
        pageCount: 13, // <-- AJOUT : Nombre de pages (à vérifier si c'est le bon nombre)
        price: "1999,00 €",
        deposit: "999,50 €",
        intro_page2: "Suite à notre passionnant Appel Clarté, cette proposition détaille le plan d'action que j'ai conçu pour répondre à votre ambition la plus stratégique :",
        objective: "vous positionner comme la référence incontournable sur Google dans votre ville.",
        situation: `Lors de notre échange, vous avez clairement exprimé votre frustration : malgré la qualité de vos services, vous êtes "invisible sur Google" pour les clients de votre propre ville qui ne vous connaissent pas déjà.`,
        title_defis: "Le Coût de l'Invisibilité",
        intro_defis: "Cette invisibilité locale représente un manque à gagner significatif :",
        challenges: `Chaque jour, des clients potentiels dans votre zone de chalandise recherchent vos services et trouvent vos concurrents.\nVous dépendez uniquement du bouche-à-oreille, ce qui rend votre croissance imprévisible et limitée.\nVotre crédibilité locale n'est pas établie en ligne, laissant le champ libre à d'autres acteurs.`,
        title_objectifs: "Notre Mission : La Domination Locale",
        intro_objectifs: "Notre collaboration visera donc à mettre en place une stratégie de domination de votre marché local :",
        goals: `Devenir la référence incontournable pour votre métier dans votre ville sur Google.\nApparaître en tête sur Google et Google Maps lorsque des clients locaux vous cherchent.\nGénérer un flux constant de prospects qualifiés et géographiquement pertinents.`,
        reason1_title: "Approche Hyper-Ciblée",
        reason1_text: "C'est la seule stratégie entièrement conçue pour attirer des clients dans VOTRE zone géographique, là où se trouve votre véritable potentiel de croissance.",
        reason2_title: "Retour sur Investissement Direct",
        reason2_text: "Chaque client gagné grâce à votre meilleure visibilité sur Google Maps ou dans les recherches locales rentabilise directement votre investissement initial.",
        reason3_title: "Actif Marketing Durable",
        reason3_text: "Contrairement à la publicité, un bon référencement local est un actif qui se construit et qui génère des clients de manière continue, avec un effet cumulé dans le temps."
    }
};

// --- FONCTIONS ---
function updateFormDefaults() {
    const selectedOfferKey = document.getElementById('offer-select').value;
    const data = offerData[selectedOfferKey];

    document.getElementById('intro-page2-text').textContent = data.intro_page2;
    document.getElementById('objectifPrincipal').value = data.objective;
    document.getElementById('situationActuelle').value = data.situation;
    document.getElementById('titreDefis').value = data.title_defis;
    document.getElementById('introDefis').value = data.intro_defis;
    document.getElementById('defisConcrets').value = data.challenges;
    document.getElementById('titreObjectifs').value = data.title_objectifs;
    document.getElementById('introObjectifs').value = data.intro_objectifs;
    document.getElementById('objectifsCommuns').value = data.goals;
    document.getElementById('raison1_titre').value = data.reason1_title;
    document.getElementById('raison1_texte').value = data.reason1_text;
    document.getElementById('raison2_titre').value = data.reason2_title;
    document.getElementById('raison2_texte').value = data.reason2_text;
    document.getElementById('raison3_titre').value = data.reason3_title;
    document.getElementById('raison3_texte').value = data.reason3_text;
}

// --- ÉVÉNEMENTS ---
document.getElementById('offer-select').addEventListener('change', updateFormDefaults);

document.getElementById('proposal-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const generateBtn = document.getElementById('generate-btn');
    generateBtn.textContent = 'Génération en cours...';
    generateBtn.disabled = true;

    const selectedOfferKey = document.getElementById('offer-select').value;
    const currentOfferData = offerData[selectedOfferKey];
    
    const genre = document.querySelector('input[name="genre"]:checked').value;
    const salutation = (genre === 'femme') ? 'Chère' : 'Cher';
    const pret_adjectif = (genre === 'femme') ? 'Prête' : 'Prêt';

    const values = {
        nomSocieteClient: document.getElementById('nomSocieteClient').value,
        prenomClient: document.getElementById('prenomClient').value,
        salutation: salutation,
        pret_adjectif: pret_adjectif,
        dateEnvoi: new Date(document.getElementById('dateEnvoi').value).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        
        intro_page2: document.getElementById('intro-page2-text').textContent,
        
        objectifPrincipal: document.getElementById('objectifPrincipal').value,
        raison1_titre: document.getElementById('raison1_titre').value,
        raison1_texte: document.getElementById('raison1_texte').value,
        raison2_titre: document.getElementById('raison2_titre').value,
        raison2_texte: document.getElementById('raison2_texte').value,
        raison3_titre: document.getElementById('raison3_titre').value,
        raison3_texte: document.getElementById('raison3_texte').value,
        situationActuelle: document.getElementById('situationActuelle').value,
        titreDefis: document.getElementById('titreDefis').value,
        introDefis: document.getElementById('introDefis').value,
        defisConcrets: document.getElementById('defisConcrets').value,
        titreObjectifs: document.getElementById('titreObjectifs').value,
        introObjectifs: document.getElementById('introObjectifs').value,
        objectifsCommuns: document.getElementById('objectifsCommuns').value,
        nomOffre: currentOfferData.name,
        prixTotal: currentOfferData.price,
        prixAcompte: currentOfferData.deposit,
    };

    const formatList = (text, type) => {
        return text.split('\n').filter(line => line.trim() !== '').map(line => {
            if (type === 'defis') return `<li style="display: flex;"><span class="text-warm-orange" style="margin-right: 0.75rem;">&#10007;</span>${line.trim()}</li>`;
            if (type === 'objectifs') return `<li style="display: flex;"><span class="text-success-green" style="margin-right: 0.75rem;">&#10003;</span><strong>${line.trim()}</strong></li>`;
            return '';
        }).join('\n');
    };

    values.defisConcrets = formatList(values.defisConcrets, 'defis');
    values.objectifsCommuns = formatList(values.objectifsCommuns, 'objectifs');

    const zip = new JSZip();

    try {
        const cssResponse = await fetch('css/proposal-style.css');
        if (!cssResponse.ok) throw new Error('Fichier css/proposal-style.css introuvable.');
        const cssContent = await cssResponse.text();
        zip.folder('css').file('proposal-style.css', cssContent);
    } catch (error) {
        console.error(error);
        alert(`Erreur critique: Impossible de charger le fichier de style. ${error.message}`);
        generateBtn.textContent = 'Générer la Proposition (.zip)';
        generateBtn.disabled = false;
        return;
    }

    // ==================================================================
    //                  *** DÉBUT DE LA CORRECTION ***
    // On récupère le nombre de pages dynamiquement depuis l'objet de l'offre
    // ==================================================================
    const pageCount = currentOfferData.pageCount;
    if (!pageCount) {
        alert(`Erreur de configuration: Le nombre de pages (pageCount) n'est pas défini pour l'offre "${selectedOfferKey}".`);
        generateBtn.textContent = 'Générer la Proposition (.zip)';
        generateBtn.disabled = false;
        return;
    }
    const templateFiles = Array.from({ length: pageCount }, (_, i) => `page${i + 1}.html`);
    // ==================================================================
    //                   *** FIN DE LA CORRECTION ***
    // ==================================================================


    for (const fileName of templateFiles) {
        try {
            const response = await fetch(`templates/${selectedOfferKey}/${fileName}`);
            if (!response.ok) throw new Error(`Fichier modèle introuvable: templates/${selectedOfferKey}/${fileName}`);
            
            let content = await response.text();
            for (const key in values) {
                const regex = new RegExp(`{{${key}}}`, 'g');
                content = content.replace(regex, values[key]);
            }
            zip.file(fileName, content);
        } catch (error) {
            console.error(error);
            // On s'assure que le bouton est réactivé même en cas d'erreur dans la boucle
            generateBtn.textContent = 'Générer la Proposition (.zip)';
            generateBtn.disabled = false;
            // On arrête l'exécution si un fichier est manquant
            return;
        }
    }

    zip.generateAsync({ type: 'blob' }).then(function(content) {
        const link = document.createElement('a');
        const safeClientName = values.nomSocieteClient.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const safeOfferName = selectedOfferKey.replace('-', '_').toUpperCase();
        link.download = `Proposition_${safeOfferName}_${safeClientName}.zip`;
        link.href = URL.createObjectURL(content);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        
        generateBtn.textContent = 'Générer la Proposition (.zip)';
        generateBtn.disabled = false;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dateEnvoi').valueAsDate = new Date();
    updateFormDefaults();
});
