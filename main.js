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

const textArea = document.querySelector(".texto");
const msg = document.querySelector(".msg");

function btnCriptografar() {
  const textoCript = criptografar(textArea.value);
  msg.value = textoCript;
  textArea.value = "";
}

function criptografar(stringCriptografada){
  let matriz = [
    ['e' , 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ];

  stringCriptografada = stringCriptografada.toLowerCase();

  for(let i = 0; i < matriz.length; i++) {
    if(stringCriptografada.includes(matriz[i][0])){
      stringCriptografada = stringCriptografada.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }
  return stringCriptografada;
}

/*Descodificar texto*/

function btnDescriptografar() {
  const textoDescript = descriptografar(textArea.value);
  msg.value = textoDescript;
  textArea.value = "";
}

function descriptografar(stringDescriptografada){
  let matriz = [
    ['e' , 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ];

  stringDescriptografada = stringDescriptografada.toLowerCase();

  for(let i = 0; i < matriz.length; i++) {
    if(stringDescriptografada.includes(matriz[i][1])){
      stringDescriptografada = stringDescriptografada.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }
  return stringDescriptografada;
}