// scripts/lang_app.js

function loadTranslations(lang) {
    if (lang != 'pt'){
        document.getElementById('iconsWpp').remove();
        document.getElementById('iconsBumBum').remove();
    }

    fetch('scripts/translations_app.json')
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations[lang]);
        })
        .catch(error => console.error('Erro ao carregar traduções:', error));
}

function loadImages(lang) {
    const pathImages = {
        "pt": "assets/images_pt/",
        "es": "assets/images/",
        "fr": "assets/images/",
    }

    document.getElementById('imageApp2').src = pathImages[lang] + "APP2.png";
    document.getElementById('imageApp3').src = pathImages[lang] + "APP3.png";
    document.getElementById('imageApp4').src = pathImages[lang] + "APP4.png";
    document.getElementById('logoSemFundo').src = pathImages[lang] + "logoSemFundo.png";
    document.getElementById('logo').href = pathImages[lang] + "logo.png";

    const pathIcons = {
        "pt": "assets/icons_pt/",
        "es": "assets/icons/",
        "fr": "assets/icons/",
    }

    document.getElementById('iconMaca').src = pathIcons[lang] + "maca.png";
    document.getElementById('iconsVegetais').src = pathIcons[lang] + "caixa-de-vegetais.png";
    document.getElementById('iconsRosa').src = pathIcons[lang] + "rosa.png";
    document.getElementById('iconsChaVerde').src = pathIcons[lang] + "cha-verde.png";
    document.getElementById('iconsPerdaPeso').src = pathIcons[lang] + "perda-de-peso.png";
    document.getElementById('iconsMusculo').src = pathIcons[lang] + "musculo.png";
}

function applyTranslations(translations) {
    document.getElementById('title').textContent = translations.title;
    document.getElementById('trucoManzana').textContent = translations.trucoManzana;
    document.getElementById('verdurasRecomendadas').textContent = translations.verdurasRecomendadas;
    document.getElementById('tecnicaAfrodita').textContent = translations.tecnicaAfrodita;
    document.getElementById('teMilenarioAsiatico').textContent = translations.teMilenarioAsiatico;
    document.getElementById('hormonaAdelgazante').textContent = translations.hormonaAdelgazante;
    document.getElementById('tonicoHormonal').textContent = translations.tonicoHormonal;
}

// Detecta o idioma do navegador ou usa 'es' (Espanhol) como padrão
const userLang = navigator.language || navigator.userLanguage || 'es';
if (userLang.startsWith('fr')) {
    loadTranslations('fr');
    loadImages('fr');
} else if (userLang.startsWith('pt')) {
    loadTranslations('pt');
    loadImages('pt');
} else {
    loadTranslations('es'); // Default para Espanhol
    loadImages('es');
}