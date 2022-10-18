
document.write(5+3);
let numerot = 3
let numt = 5
document.write(`<br>`)
document.write("el resultado de la suma es <br>") 
//forma de parsear sprint a numero
/* 
let number = parseInt(prompt("ingrese un numero"))
let otherNum = parseInt(prompt("ingrese otro numero")) 
 
document.write(number + otherNum)*/
//para convertir un numero en sprint
console.log(""+ 8)
console.log(12+" ")

//otra forma de convertir un sprint a numero es con el +
let numer = 7
console.log(+numer)

//estructuras condiconales

/*
if (condicion){
    sentencia a ejecutar
}
*/

console.log(+numer)
 let numero4 = 5
 let numero6 = 5

 if (numero4 ==numerot){
    console.log("son iguales")
 }else{
    console.log("no son iguales")
 }

 if (numero4 ===numero6){
    console.log("son iguales")
 }

 let edadPablo = 23;
 let edadMarcos = 60;
 let edadmaria = 10;

 if (edadPablo > edadMarcos && edadPablo > edadmaria){
    document.write("Pablo es el mayor")
 }else if (edadMarcos > edadPablo && edadMarcos > edadmaria){
    document.write("Marcos es el mayor")
 }else {
    document.write("maria es la mayor")
 } 