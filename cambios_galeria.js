
/*------------Cerrar ventana de muestra-------------*/
function cerrar(){
document.getElementById('botones1').style.display = 'none';
document.getElementById('botones2').style.display = 'none';
}


/*------------Click en la imagen de muestra-------------*/
function mostrar(){
document.getElementById('botones1').style.display = 'flex';
document.getElementById('botones2').style.display = 'flex';

}

/*------------Retroceder-------------*/
function cambio1(){
indice--;
if (indice < 0){indice= 7};
document.getElementById("img100").src=numImg[indice];
}

/*------------Avanzar------------*/
function cambio2(){
indice++;
if (indice > 7){indice= 0};
document.getElementById("img100").src=numImg[indice];
}

function cambi1(){
mostrar();	/*------------Hago click y veo la imagen elegida-------------*/
indice = 0 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi2(){
mostrar();
indice = 1 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi3(){
mostrar();	
indice = 2 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi4(){
mostrar();
indice = 3 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi5(){
mostrar();
indice = 4 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi6(){
mostrar();	
indice = 5 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi7(){
mostrar();
indice = 6 ;
document.getElementById("img100").src=numImg[indice];
}
function cambi8(){
mostrar();
indice = 7 ;
document.getElementById("img100").src=numImg[indice];
}

/*-------------------FORMULARIO-------------------*/


////////////////// VALIDACION DEL FORMULARIO DE CONTACTO ///////////

var f_nombre , f_mail , f_telefono , f_consulta ;
 
function validar(){
	
f_nombre = document.getElementById('f_nombre').value;
f_mail = document.getElementById('f_mail').value;
f_telefono = document.getElementById('f_telefono').value;
f_consulta = document.getElementById('f_consulta').value;

let exp_consulta=/^[a-zA-Z0-9.+\s\_\-]{1,200}$/ ; // Letras, numeros,puntos , guion y guion_bajo . de 1 a 200caracteres
let exp_nombre=/^[a-zA-ZÀ-ÿ\s]{1,20}$/  ; // Letras y espacios, pueden llevar acentos. de 1 a 20caracteres
let exp_mail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/  ;
let exp_telefono=/^\d{10}$/ ;// 10 numeros.
	
	 if(f_nombre ==="" || f_mail ==="" || f_telefono ==="" || f_consulta ==="" ){
		// if(nombre ==="pepe"){
		alert("Debe completar todos los campos  ");
		// return = false ; 
	}
	 else if (!exp_nombre.test(f_nombre)){
		alert("El nombre admite letras con o sin acento y espacios en blanco //de 1 a 20caracteres ");
	 // return = false ; 
	 
	 }
	else if (!exp_telefono.test(f_telefono)){
		alert("El telefono admite solo numeros // deben ser 10 digitos (codigo de area sin cero + numero)");
	 // return = false ; 
	 
	 }
	 else if (!exp_mail.test(f_mail)){
		alert("Debe ingresar un mail valido");
	 // return = false ; 
	 
	 }
	 else if (!exp_consulta.test(f_consulta)){
		alert("La consulta debe contener de 1 a 200 caracteres // admite letras,numeros,puntos,guion y guion_bajo");
	 // return = false ; 
	 
	 }
	 else {
	alert("Su mensaje a sido enviado exitosamente.\n\ Nos comunicaremos a la brevedad \n\ Gracias."); 
document.getElementById('f_nombre').value="";
document.getElementById('f_mail').value="";
document.getElementById('f_telefono').value="";
document.getElementById('f_consulta').value="";
	 }
	
}





////////////////// VENTANA MODAL ///////////

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