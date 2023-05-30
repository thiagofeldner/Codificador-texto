/* Troca cor de fundo e cor da logo*/

function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle('light');

  const img = document.querySelector('.logo');
  const alt = document.querySelector('.logo');

  if(html.classList.contains('light')){
    img.setAttribute('src', './imgs/logo.png');
    alt.setAttribute('alt', 'Logo Alura azul');
  } else {
    img.setAttribute('src', './imgs/logo_branco.png')
    alt.setAttribute('alt', 'Logo Alura cinza');
  }
}

/*Codificar texto*/

let textInput = document.getElementById("textInput");
let encrypt = document.getElementById("encrypt");
let decrypt = document.getElementById("decrypt");
let result = document.getElementById("output");
let copyButton = document.getElementById("copy");

document.getElementById("withText").style.display = "none";

encrypt.onclick = encryptText;
decrypt.onclick = decryptText;
copyButton.onclick = copyText;

function encryptText() {
  let text = textInput.value;

  let textResult = text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  result.innerHTML !== undefined && (result.value = textResult);
  result.innerHTML;

  if (result.value !== undefined) {
    document.getElementById("withText").style.display = "block";
    document.getElementById("noText").style.display = "none";
  } else {
    document.getElementById("withText").style.display = "none";
    document.getElementById("noText").style.display = "block";
  }    
}

function decryptText() {
  let text = textInput.value;

  let textResult = text
    .replaceAll(/enter/g, "e")
    .replaceAll(/imes/g, "i")
    .replaceAll(/ai/g, "a")
    .replaceAll(/ober/g, "o")
    .replaceAll(/ufat/g, "u");

  text !== textResult && (result.value = textResult);
}

function copyText() {
  result.select();
  result.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(result.value);

  alert("Texto copiado: " + result.value);
}


function btnCopiar(){
  resultado.select();
  resultado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(resultado.value);

  alert("Texto copiado: " + resultado.value);
}