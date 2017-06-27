// Ejercico 1.............

function resultado (numInicial, numFinal){

 var objeto = {
	inicio: numInicial,
  fin: numFinal
 };
  //suma lo declaro afuera del for para que inicie en 0 y luego vaya aumentando, por las iteracionesss
	var suma = 0;
 for (var i=objeto.inicio; i<=objeto.fin; i++){
   suma = suma + i;
 }
  return suma;
}



//return resultado(1,10);
	
// Ejercicio 2.....
function señorita (nombre, edad, genero, ocupacion){
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
  this.ocupacion = ocupacion;
  this.mensaje = function(){
    if(this.edad > 17 && this.genero == "femenino")
      if( this.ocupacion == "web developer" || this.ocupacion == "estudiante laboratoria"){
      return "you're awesome";
    }
    else{
      return "upsii";
    }
  
  }
  }
//return objetito.mensaje();


//ejercicio 4....
function informe (nombre, apellido, edad,  genero, ocupacion, ciudad, pais){
  
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ocupacion = ocupacion;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function(){
    
  return "Nombre: " + this.nombre + " " + this.apellido + "\n" + "Edad: " + this.edad + "\n" + "pais: " + this.pais;
  }
}
  
//return objetito.ficha();


//prueba 1
var assert = require('assert');
describe("resultado",function(){
   it("prueba de 1 y 10",function(){
   assert.equal(55, resultado(1,10));
   });
});

//prueba 2
var assert = require("assert");
describe("señorita",function(){
	var objetito = new señorita("gladys",18,"femenino","estudiante laboratoria");
   it("debe insertar los datos",function(){
   assert.equal("you're awesome",objetito.mensaje());
   })
});

//prueba 4
var assert = require("assert");
describe("informe",function(){
	var objetito = new informe("gladys","mamani", 23, "mujer","profesora","arica","chile");
   it("insertar datos a la ficha",function(){
   assert.equal("Nombre: gladys mamani\nEdad: 23\npais: chile",objetito.ficha());
   })
});