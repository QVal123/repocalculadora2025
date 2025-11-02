// script.js — versión funcional con onclick()
const pantalla = document.getElementById("pantalla");
 
function agregar(valor) {
  pantalla.value += valor;
}
 
function borrar() {
  pantalla.value = "";
}
 
function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "Error";
  }
}