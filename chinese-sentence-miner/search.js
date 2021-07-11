const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newInput = newListInput.value
    if (newInput === null || newInput === '') return
    newListInput.value = null
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
    }
}
