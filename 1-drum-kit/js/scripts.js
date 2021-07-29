// reconhece quando uma tecla é pressionada (keyup)
document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLocaleLowerCase());
});

// faz a composição
document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;
  if (song !== "") {
    // converte string em array
    let songArray = song.split("");
    playComposition(songArray);
  }
});

// função tocar
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");

    // Depois de 300 milisegundos remove a classe CSS
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

// função composição
function playComposition(songArray) {
  let wait = 0;
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 340; // tempo em ms para repetir cada toque da composição
  }
}
