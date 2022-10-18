//pedir por pantalla ingrese nombre de alumno 5 y lo ponemos en un bucle while y lo guardamos 
//en un  arreglo llamado alumnos.
//usando el arreglo de alumnos mostrar por consola por cada uno de los alumnos un msj de bienvenido



let alumnos = [];
while(alumnos.length < 5){
 let nombres = prompt("Ingrese el nombre de un alumno")
 alumnos.push(nombres)
}

console.log(alumnos)

for ( let i = 0; i < alumnos.length; i++){
    console.log(`Hola ${alumnos[i]} bienvenido/a al curso de fullstack. 😋`)
    // con `` bart permite escribir un variable dentro de ellas ${variable} ``
 
}