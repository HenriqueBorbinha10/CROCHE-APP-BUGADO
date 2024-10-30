// scripts/lang_index.js

function loadTranslations(lang) {
    fetch('scripts/translations_index.json')
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
    document.getElementById('logo1').src = pathImages[lang] + "logo.png";
}

function applyTranslations(translations) {
    document.getElementById('welcomeMessage').innerHTML = translations.welcome;
    document.getElementById('inputName').placeholder = translations.name;
    document.getElementById('inputEmail').placeholder = translations.email;
    document.getElementById('inputIdade').placeholder = translations.age;
    document.getElementById('inputAltura').placeholder = translations.height;
    document.getElementById('inputPeso').placeholder = translations.weight;
    document.getElementById('inputPesoDesejado').placeholder = translations.desiredWeight;
    document.getElementById('activityQuestion').textContent = translations.activityQuestion;
    document.getElementById('genderQuestion').textContent = translations.genderQuestion;
    document.querySelector('label[for="Masculino"]').textContent = translations.male;
    document.querySelector('label[for="Femenino"]').textContent = translations.female;

    const select = document.getElementById('Actividad');
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    const activities = translations.activities
    activities.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = "valor" + (index + 1);
        option.textContent = item;
        select.appendChild(option);
    });

    // document.querySelector('button[type="submit"]').textContent = translations.submit;
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