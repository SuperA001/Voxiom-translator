//VoxiomTranslated
fetch("https://raw.githubusercontent.com/SuperA001/Voxiom-translator/main/scri2pt.js ")
    .then(response => response.text())
    .then(data => {
        const sriptElement = document.createElement("script")
        sriptElement.textContent = data
        document.head.appendChild(sriptElement)
    })
    
//VoxiomModernStyle
fetch("https://raw.githubusercontent.com/TheMasterRob4ig/VoxiomModernStyle/main/style.css")
    .then(response => response.text())
    .then(data => {
        const styleElement = document.createElement("style")
        styleElement.textContent = data
        document.head.appendChild(styleElement)
    })