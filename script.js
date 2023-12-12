function getData() {
    let word = document.getElementById('wordInput').value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
        
        let wordTitle = document.getElementById('wordTitle')
        wordTitle.innerHTML = `Word Title: ${data[0].word}`
        
        let wordMeaning = document.getElementById('wordMeaning')
        wordMeaning.innerHTML = `Meaning: ${data[0].meanings[0].definitions[0].definition}`
        
        let wordAudio = document.getElementById('wordAudio')

        let audio = `<audio controls src = ${data[0].phonetics[0].audio} >
            <a href=${data[0].phonetics[0].audio}>Play audio</a>
            </audio>`

        wordAudio.innerHTML += audio
    })

    wordAudio.innerHTML = ""

    let texte = document.getElementById('description')
    texte.classList.add('hidden')
}

// Fonction pour rechercher le mot quand on appuie sur la touche 'Enter'
function handleKeyPress(event) {
    if (event.key === "Enter") {
        getData();
    }
}