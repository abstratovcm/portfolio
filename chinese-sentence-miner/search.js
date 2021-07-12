const form = document.getElementById('form')
const formInput = document.getElementById('formInput')
const root = document.querySelector(':root')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const newInput = formInput.value
    if (newInput === null || newInput === '') return
    render(newInput)
}  )

function search(str) {
    for (e of sentences) {
        if (e.en.toLowerCase().includes(str.toLowerCase())) return e.id
    }
    return -1
}

function render(newInput) {
    number = search(newInput)
    if (number >= 0) {
        sentenceEn.innerHTML = sentences[number].en
        sentenceZh.innerHTML = sentences[number].zh
        formInput.value = null
    }
    else colorWarning(newInput)
}

function colorWarning(newInput) {
    root.style.setProperty('--main-color', '#e2a596')
    formInput.value = "nothing here"
    setTimeout(function(){
        root.style.setProperty('--main-color','#96d3e2')
        formInput.value = newInput
    },400)
}