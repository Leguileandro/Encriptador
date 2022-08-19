function entradaDeTexto(){
  document.getElementById("texto").value="";
  document.getElementById("textoEncriptado").value="";
}
function excepciones(){
  let expReg = /([A-ZáéíóúäëïöüÁÉÍÓÚ|0-9])/g;
  let letra=document.getElementById("texto").value;
  let validar=expReg.exec(letra);
  if(validar){
      letra = letra.substring(0, letra.length - 1); 
      document.getElementById("texto").value=letra; 
    }     
 }
function botonencriptar() {
    
    document.getElementById("imagen").style.visibility = "hidden";
    document.getElementById("resultado").style.visibility = "visible";
    let texto= document.getElementById("texto").value;
    document.getElementById("textoEncriptado").value=texto.replace(/[e]/g,'enter').replace(/[i]/g,'imes').replace(/[a]/g,'ai').replace(/[o]/g,'ober').replace(/[u]/g,'ufat');
}
function  botondesencriptar(){
  let texto= document.getElementById("texto").value;
  document.getElementById("textoEncriptado").value=texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u'); 
}
function copiar(){
  let texto= document.getElementById("textoEncriptado").value;
  document.getElementById("texto").value=texto;
  document.getElementById("textoEncriptado").value="";
}
