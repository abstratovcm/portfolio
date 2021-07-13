const form = document.getElementById('form')
const formInput = document.getElementById('formInput')
const root = document.querySelector(':root')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const newInput = formInput.value
    if (newInput === null || newInput === '') return
    render(newInput)
}  )

function searchEn(str) {
    for (e of sentences) {
        if (e.en.toLowerCase().includes(str.toLowerCase())) return e.id
    }
    return -1
}

function searchZh(str) {
    for (e of sentences) {
        if (e.zh.toLowerCase().includes(str.toLowerCase())) return e.id
    }
    return -1
}

function render(newInput) {
    if (newInput.trim()[4] != ' ') number = -1
    else if (newInput.trim().slice(4).trim() == '' || newInput.trim().slice(4).trim() == null) number = -1
    else if (newInput.trim().slice(0,4) == '[en]')  number = searchEn(newInput.trim().slice(5).trim())
    else if (newInput.trim().slice(0,4) == '[zh]') number = searchZh(newInput.trim().slice(5).trim())
    else number = -1
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