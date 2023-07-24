var audio = document.getElementById('audio')
var playPauseBTN = document.getElementById('playPauseBTN')
var fondo = document.getElementById('kitty')
var texto = document.getElementById('texto')
var count = 0

function playPause() {
    if (count == 0) {
        count = 1
        audio.play()
        texto.innerHTML = "Disfruta tu canción mi amor c:"
    } else {
        count = 0
        audio.pause()
        texto.innerHTML = "Tap Kitty!"
    }
}