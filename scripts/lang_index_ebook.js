// scripts/lang_index.js

function loadTranslations(lang) {
    fetch('scripts/translations_ebook.json')
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
    
    document.getElementById('logoSemFundo').src = pathImages[lang] + "logoSemFundo.png";
    document.getElementById('logo').href = pathImages[lang] + "logo.png";
}

function applyTranslations(translations) {
    const urlParams = new URLSearchParams(window.location.search);
    const listLangsSuport = ["es", "fr", "pt"];
    const ebook = urlParams.get('ebook');
    const navigatorLang = (navigator.language || navigator.userLanguage || 'es').split('-')[0];
    const lang = listLangsSuport.includes(navigatorLang) ? navigatorLang : 'es';

    console.log('Linguagem obitida ', lang);
    
    document.getElementById('pageTitle').textContent = translations.pageTitle;
    document.getElementById('backButton').textContent = translations.backButton;
    document.getElementById('mainHeading').innerHTML = translations.mainHeading;
    document.getElementById('ebookText').textContent = translations.ebookText;

    if (ebook) {
      document.getElementById('ebook_pdf').href = `ebooks/${lang}/${ebook}.pdf`;
      document.getElementById('ebook_html').src = `ebooks/${lang}/${ebook}/${ebook}.html`;
    }
}

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