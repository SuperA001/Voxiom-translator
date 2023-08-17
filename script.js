function updateTranslations(translations) {
    var elements = document.querySelectorAll('[class]')
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        var classTranslations = translations[element.getAttribute('class')]
        if (!classTranslations) {
            continue
        }
        for (var key in classTranslations) {
            if (classTranslations.hasOwnProperty(key)) {
                var value = classTranslations[key]
                if (element.textContent.trim() === key) {
                    element.textContent = value
                }
            }
        }
    }
    let mainTitle = document.querySelectorAll('.sc-hiCibw.igNAJT > div')
    for (var m = 0; m < mainTitle.length; m++) {
        var mainTitleTranslations = translations.MainTitles
        if (mainTitleTranslations.hasOwnProperty(mainTitle[m].textContent)) {
            mainTitle[m].innerText = mainTitleTranslations[mainTitle[m].textContent]
        }
    }
}

function loadTranslations() {
    fetch('https://raw.githubusercontent.com/SuperA001/Voxiom-translator/main/translator.json')
        .then(response => response.json())
        .then(data => updateTranslations(data.translations))
}

setInterval(loadTranslations, 100)