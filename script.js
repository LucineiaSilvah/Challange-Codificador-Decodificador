
var texto = document.querySelector('#texto').value;
 
let novoTexto = document.querySelector('#novo-texto');
let erro = document.querySelector('.erro');


function criptografar(texto){
   texto = document.querySelector('#texto').value;
   if(texto === texto.toLowerCase()){
   
   
   encode = 
   texto.replace(/a/gi,'ai')
   .replace(/e/gi,'enter')
   .replace(/i/gi,'imes')
   .replace(/o/gi,'ober')
   .replace(/u/gi,'ufat');
    erro.style.display = 'none';
   
    novoTexto.innerHTML = encode;
   limpar();
   }
   else{
    alert("apenas letras minúsculas são permitidas")
   }
   
    
}
function limpar(){
  
  texto = document.querySelector('#texto').value="";
 
}

 
     function decriptografar(){
 texto = document.querySelector('#texto').value;
 if(texto === texto.toLowerCase()){

    encode = 
    texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    erro.style.display = 'none';
    novoTexto.innerHTML = encode;
 } else{
  alert("apenas letras minúsculas são permitidas")
 }

}

function reiniciar(){
 
window.location.reload()

}
function copiar(){

  novoTexto = document.querySelector('#novo-texto');
  novoTexto.select();
  document.execCommand('copy');
  
  alert('copiado');
  limpar();
  
  
}