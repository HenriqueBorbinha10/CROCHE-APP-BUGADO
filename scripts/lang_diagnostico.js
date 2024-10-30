// scripts/lang_diagnostico.js

function loadTranslations(lang) {
    fetch('scripts/translations_diagnostico.json')
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
    
    document.getElementById('logo').href = pathImages[lang] + "logo.png";
}

function applyTranslations(translations) {
    document.getElementById('page-title').textContent = translations.title;
    document.getElementById('header-text').innerHTML = translations.header;
    document.getElementById('main-button').textContent = translations.button_main;
    document.getElementById('main-button-footer').textContent = translations.button_main;
    document.getElementById('calories-title').textContent = translations.calories_daily;

    document.getElementById('fats-title').textContent = translations.fats_daily;
    document.getElementById('proteins-title').textContent = translations.proteins_daily;
    document.getElementById('carbs-title').textContent = translations.carbs_daily;
    document.getElementById('water-title').textContent = translations.water_daily;
    document.getElementById('bmi-title').textContent = translations.your_bmi;
    document.getElementById('recommended-amount-calories').textContent = translations.recommended_amount;
    document.getElementById('recommended-amount-fats').textContent = translations.recommended_amount;
    document.getElementById('recommended-amount-proteins').textContent = translations.recommended_amount;
    document.getElementById('recommended-amount-carbs').textContent = translations.recommended_amount;
    document.getElementById('recommended-amount-water').textContent = translations.recommended_amount;

    document.getElementById('bmi-status-title').textContent = translations.your_bmi_status;
    document.getElementById('carbs-unit').textContent = translations.carbs;
    document.getElementById('proteins-unit').textContent = translations.proteins;
    document.getElementById('fats-unit').textContent = translations.fats;
    document.getElementById('calories-unit').textContent = translations.calories;
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