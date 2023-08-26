function trUpdate(words) { 
     for (let classes in words) { 
         let translations = words[classes] 
         document.querySelectorAll(classes).forEach(element => { 
             for (let key in translations) { 
                 if (element.textContent.trim() === key) { 
                     const translationData = translations[key] 
                     element.textContent = translationData 
                     if (typeof translationData === 'object') { 
                         const imgElement = document.createElement('img') 
                         imgElement.src = translationData.src 
                         const textElement = document.createElement('span') 
                         textElement.textContent = translationData.text 
                         element.innerHTML = '' 
                         element.appendChild(imgElement) 
                         element.appendChild(textElement) 
                     } 
                 } 
             } 
         }) 
     } 
 } 
 fetch('https://raw.githubusercontent.com/SuperA001/Voxiom-translator/main/translator.json') 
     .then(response => response.json()) 
     .then(data => { 
         trUpdate(data.translations) 
         setInterval(() => trUpdate(data.translations), 100) 
     }) 
 fetch("https://raw.githubusercontent.com/TheMasterRob4ig/VoxiomTranslated/main/style.css") 
     .then(response => response.text()) 
     .then(data => { 
         const styleElement = document.createElement("style") 
         styleElement.textContent = data 
         document.head.appendChild(styleElement) 
     })
