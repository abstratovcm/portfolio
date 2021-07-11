const button = document.getElementById("random-sentence")
const sentenceEn = document.getElementById("sentenceEn")
const sentenceZh = document.getElementById("sentenceZh")

button.onclick = function() {

    while (true) {
        number = Math.floor(Math.random() * sentences.length)
        if (sentenceZh.innerHTML != sentences[number].zh) break
    }
    sentenceEn.innerHTML = sentences[number].en
    sentenceZh.innerHTML = sentences[number].zh
}