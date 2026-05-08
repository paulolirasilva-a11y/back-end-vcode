let frases=["Leve o que for leve",
"Ser simples é ser incrível",
"Valorize a simplicidade da vida"];

function toque(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;
}