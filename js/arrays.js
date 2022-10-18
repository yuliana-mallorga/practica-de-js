//crear un arrays o arreglos

//crar un arreglo vacio de forma literal

let arreglo = [];
//crear un arreglo con datos 

let serie = ["Naruto", "Juego de tronos", 3, 4, true]
console.log(serie)

//crear un array usando el constructor de array
let array = new Array(1, 2, 3);
console.log(array)
//obtener un elemento del array
let array3 = [1, 2, 3, 5]

console.log(array3[3])

//cantidad de elemnetos en array
console.log(array3.length)

//obtenet el ultimo elemento del array

console.log(array3[array3.length-1])

//reasignar el valor a un determinado elemento del array

array3[0] = 4
console.log(array3)

array3[5] = "hola"

console.log(array3)

console.log(array3.length)
//agregar elementos en la ultima posicion o al ultimo
array3.push("chau", false, "bye")
console.log(array3)
//eliminar o sacar del arreglo el ultimo elemnto
array3.pop()
console.log(array3)
//agregar un elemento en la primera posicion 
array3.unshift("martes", 8, true)
console.log(array3)
//eliminar o sacar el elemneto de la primera posicion
array3.shift()
console.log(array3)
//agregar elementos en una determinada posicion
array3.splice(3, 0, 6)
console.log(array3)
array3.splice(7, 2)
console.log(array3)
array3.splice(1)
console.log(array3)
array3.splice(1, 0, 22,33,44)
console.log(array3)
//seleccionar elementos de un array
console.log(array3.slice(1,3))
console.log(array3.slice(1,4))
//recorrer y/o mostrar los elementos del array

for(let i = 0; i <= array3.length - 1; i++){
    console.log(array3[i])
}

//recorrer y/ o mostrar los elementos del array usando for .. of
for(let elemt of array3){
    console.log(elemt)
}
//mostrat los elemntos de un string
for(let elemet of "array3"){
    console.log(elemet)
}
let word = "palabras"
for (let e of word){
    console.log(e)
}

//aperador spread
let vocales = ["a", "e", "i", "o", "u"]
console.log(...vocales)

console.log(...word)
//dado un arreglo para encontrar el mayor
let edades = [45, 34, 6]
console.log(Math.max(...edades))

//dado un arreglo para encontrar el mayor

console.log(Math.min(...edades))

//para transformar en array al string
let palabra = "murcielago"
console.log(palabra.split(''))
let pal = [2,"hola"]
//para transformar el array  al string
console.log(pal.join(""))
//otra forma de convertir  o parsear un string a array
let array5 = ["hola", "adios"]
console.log(Array.from(palabra))

let arrayWord = word.split("")
console.log(arrayWord)
let word2 = ["muela", "hola"]

console.log(String(word2))

 
//concatenar array

console.log(array3.concat(vocales))

//otra forma de concaetnar arreglos con spread operator
let numeros = [40, 66, 47, 3]
console.log([...vocales, ...numeros])

//conocer el indice de un elemnto del array usando indexof
//indexof deuelve la posicion del primer elemento que cumple la condicion dada
//si no devuelve -1 porque no esta lo que le pido del arreglo
console.log(arrayWord)

console.log(vocales.indexOf("a"))

//saber si esta incluido como elemntos de un array
//incluides return un booleano, true si esta incluido y false si no esta
console.log(arrayWord.includes("a"))

//saber si algun elemnto de un array cumple la condicion
// para utilizar el metodo some debo incluir una funcion dentro