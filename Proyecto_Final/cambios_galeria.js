
////////////////// OCULTAR LA VENTANA MODAL ///////////
function cerrar(){
document.getElementById('botones1').style.display = 'none';
document.getElementById('botones2').style.display = 'none';
}

////////////////// MOSTAR LA VENTANA MODAL ///////////
function mostrar(){
document.getElementById('botones1').style.display = 'flex';
document.getElementById('botones2').style.display = 'flex';

}

///////////////  BOTON RETROCEDER  /////////
function cambio1(){
indice--;
if (indice < 0){indice= 7};
document.getElementById("img100").src=numImg[indice];
}

///////////////  BOTON AVANZAR  /////////
function cambio2(){
indice++;
if (indice > 7){indice= 0};
document.getElementById("img100").src=numImg[indice];
}



function cambi1(){
mostrar();	//// MOSTAR LA VENTANA MODAL //// 
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 0 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi2(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 1 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi3(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 2 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi4(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 3 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi5(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 4 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi6(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 5 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi7(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 6 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi8(){
mostrar();	//// MOSTAR LA VENTANA MODAL ////
//// CARGAR LA IMAGEN CLICKEADA  ////
indice = 7 ;
document.getElementById("img100").src=numImg[indice];
}



