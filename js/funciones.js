//para declarar una funcion

/* function nombreFuncion(){
    codigo a ejecutar
} */

function helloWorld(){
    console.log("Hello world, how are you?")
}
//ejecutar o llamar a una funcion
helloWorld()
//for(let i =0, i < .length; i++)
//funciones con parametros 
/* function nombreFuncion(parametro1, parametro 2){
    codigo a ejecutar
} */
function saludo(name, lastname){

    console.log(`hola el nombre ${name} y el apellido es ${lastname}`)
}
saludo('abel', "cordoba")

//ejemplo de function con paraemetros

function sumarVariables(valor1, valor2){
    if(typeof valor1 != "number" || valor2 != "number" ){
        //comprobamos el tipo de dato
        console.warn("debe ingresar un valor numerico")
    } else{
    return(`${valor1} + ${valor2} = ${valor1 + valor2}`)
    }
}
console.log(sumarVariables(3, 7) )

//funciones que nos retornan un valor

function convertirDolareaPesos(dolares){
    let pesos = dolares * 290
    //si tengo return, siempre la ultima linea sera de return, lo que se ponga despues de return no se toma
    return pesos;
}

let precioCelular = convertirDolareaPesos(100)
console.log(precioCelular)

console.log('precio de la play 5 es' + ' ' + convertirDolareaPesos(300))

//funciones flecha o arrows function
/* 
let nombreFuncion = () =>{
    codigo a ejecutar
} */

/* let sumar = (num1, num2)=>{
    return num1 + num2
} */
//esta implicito el return
let sumar = (num1, num2)=> num1 + num2

console.log(sumar(8,9))

//scope de una funcion;
let heroe = 'batman'
function mostrarHeroe(){
    //si declaro aqui la variable heroe toma esta, pero es variable global
    return `bienvenido ${heroe}`
}
console.log(mostrarHeroe())

//funciones anonimas: se declaran como constante
const square = function(num){
    //Math.pow() calcula potencia
    return Math.pow(num, 2)
}
console.log(square(9))
//se puede invocar funciones dentro de otra funcion

let sumSquare = (num1, num2) =>{
    return square(num1) + square(num2)
}

console.log( sumSquare(2, 5))

const hola = function(){
    console.log('hola como estas?')
}

console.log(hola())