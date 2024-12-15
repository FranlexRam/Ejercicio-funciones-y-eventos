//Variables
let contador=1;
//Boton 1
document.querySelector(".boton1").onclick=empezar;
//Boton 2

//Funcion empezar
function empezar() {
    document.querySelector(".caja").innerHTML=`
    <button class="boton2">Agregar 1</button>
    <button class="boton3">Reiniciar</button>
    <div class="contador"></div>
    `
      actualizar();
    document.querySelector(".boton2").onclick=agregar;
    document.querySelector(".boton3").onclick=reiniciar;
}

//Funcion agregar
function agregar() {
    ++contador;
    actualizar();
}    


//Funcion reiniciar
function reiniciar() {
    contador=1;
    actualizar();

}

//Funcion actualizar
function actualizar() {
    document.querySelector(".contador").innerHTML=contador;
}