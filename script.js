// ==UserScript==
// @name         Код Роба
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://voxiom.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voxiom.io
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues

// @run-at       document-end
// @require      https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/9f7f46fc63bc4f25dc99.js
// @downloadURL  https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/script.js
// @updateURL    https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/script.js
// ==/UserScript==
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
    fetch('https://raw.githubusercontent.com/SuperA001/Voxiom-translator/main/translator.json')
        .then(response => response.json())
        .then(data => updateTranslations(data.translations))
}


var observer = new MutationObserver(function(mutations) {
    loadTranslations();
    console.log("observer загружен")
});

//setInterval(loadTranslations, 100)
const config = {attributes: true, childList: true, subtree: true};
document.addEventListener('DOMContentLoaded', function() {
            observer.observe(document.body, config);
            console.log("Загружено")
        });