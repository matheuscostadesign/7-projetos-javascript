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

// função tocar o som
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`); // seleciona o audio dinamicamente (template string)
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

// Funções on-click

// Play Q
function playQ() {
  var q = document.getElementById("s_keyq");
  q.currentTime = 0;
  q.play();
}

// Play W
function playW() {
  var w = document.getElementById("s_keyw");
  w.currentTime = 0;
  w.play();
}

// Play E
function playE() {
  var e = document.getElementById("s_keye");
  e.currentTime = 0;
  e.play();
}

// Play A
function playA() {
  var a = document.getElementById("s_keya");
  a.currentTime = 0;
  a.play();
}

// Play S
function playS() {
  var s = document.getElementById("s_keys");
  s.currentTime = 0;
  s.play();
}

// Play D
function playD() {
  var d = document.getElementById("s_keyd");
  d.currentTime = 0;
  d.play();
}

// Play Z
function playZ() {
  var z = document.getElementById("s_keyz");
  z.currentTime = 0;
  z.play();
}

// Play X
function playX() {
  var x = document.getElementById("s_keyx");
  x.currentTime = 0;
  x.play();
}

// Play C
function playC() {
  var c = document.getElementById("s_keyc");
  c.currentTime = 0;
  c.play();
}
