document.getElementById('search-btn').addEventListener('click', () => {
    const targetWord = document.getElementById('search-field').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`
    const getWord = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => displayWord(data[0]))
            .catch(error => {
                console.log(error);
            })
    }
    const displayWord = word => {
        console.log(word.meanings[1].example);
        const head = document.getElementById('head')
        head.innerText = word.word
        const text = document.getElementById('text')
        text.innerText = word.phonetic
        const meaningContainer = document.getElementById('meaning-container');
        const verbContainer = document.getElementById('verb-container')

        for (const definition of word.meanings[0].definitions) {
            const li = document.createElement('li')
            li.innerText = `${definition.definition}`
            meaningContainer.appendChild(li);
        }
        const synonyms = document.getElementById('synonyms')
        synonyms.innerText = word.meanings[0].synonyms

        for (const definition of word.meanings[1].definitions) {
            const li = document.createElement('li')
            li.innerText = `${definition.definition}`
            verbContainer.appendChild(li);
        }

        const varExample = document.getElementById('example')
        varExample.innerText = word.meanings[1].definitions[].example;



        const sourceDiv = document.getElementById('source-div')
        sourceDiv.innerHTML = `
        <p class="foot-title">Source <a href ="${word.sourceUrls[0]}" id="source"><i class="fa-solid fa-arrow-up-right-from-square"></i></p>
        `



    }
    getWord()
    document.getElementById('search-field').value = ''

})