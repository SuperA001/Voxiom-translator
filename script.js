function updateTranslations(classTranslations) {
    for (var classSelector in classTranslations) {
        if (classTranslations.hasOwnProperty(classSelector)) {
            var elements = document.querySelectorAll(classSelector);
            var translations = classTranslations[classSelector];

            elements.forEach(function (element) {
                for (var key in translations) {
                    if (translations.hasOwnProperty(key) && element.textContent.trim() === key) {
                        element.textContent = translations[key];
                    }
                }
            });
        }
    }
}
function loadTranslations() {
    fetch('https://raw.githubusercontent.com/TheMasterRob4ig/VoxiomTranslated/main/tr.json')
        .then(response => response.json())
        .then(data => updateTranslations(data.translations))
}
var observer = new MutationObserver(function(mutations) {
    loadTranslations();
    console.log("observer загружен")
});

//setInterval(loadTranslations, 100)
const config = { childList: true, subtree: true };
document.addEventListener('DOMContentLoaded', function() {
            observer.observe(document.body, config);
            console.log("Загружено")
        });