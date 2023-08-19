function trUpdate(words) {
    for (let classes in words) {
        let translations = words[classes]
        document.querySelectorAll(classes).forEach(element => {
            for (let key in translations) {
                if (element.textContent.trim() === key) {
                    element.textContent = translations[key]
                }
            }
        })
    }
}
function trLoad() {
    fetch('https://raw.githubusercontent.com/TheMasterRob4ig/VoxiomTranslated/main/tr.json')
        .then(response => response.json())
        .then(data => trUpdate(data.translations))
}
const observer = new MutationObserver(trLoad)
observer.observe(document.body, { childList: true, subtree: true })
trLoad()
