const serverPath = 'https://localhost:9091/'

function $$(x) {
    return document.getElementById(x)
}

window.onload = function () {
    $$("date-today").innerText += " " + new Date().toDateString()
    $$("days-since").innerText += " " + (((new Date() - new Date('2022-12-08')) / 1000 / 60 / 60 / 24 - 0.5).toFixed(0)) + " days ago"
    loadWords()
}

function loadWords() {
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
            const word = $$('daily-words')
            word.href = 'https://hitokoto.cn/?uuid=' + data.uuid
            word.innerText += data.hitokoto
        })
        .catch(console.error)
}