document.write("Elemento 1 <br>")
//while

/* while(condicion logica){
    codigo que quiero ejecutar
    variable para cambiar la condicion
} */

let contador = 1


while (contador <=20){
    document.write("elemnto" + " " + contador + "<br>")
    contador++
}

let contador2 = 2
while(contador <=30){
    document.write("elemento"+ contador + "<br>")
    contador = contador + 2;
}
//do
let cont = 30;
do{
    document.write("elemento" + cont + "<br>")
    cont--
}while (cont >=20);


//for
//for (crear variable; cond log; incrementador o decrementador){cod que quiero ejecutar}

for(let i = 0 ; i <= 20 ; i++){
document.write("Estructura for vuelta" + i + "<br>")
}

//recorrer un string usando un bucle
//los strings son iterrables y sus indice empiez en 0
let palabras = "tomate y manzana"
console.log("hola y chau". length) //cuenta la cantidad d caracteres 
//cantidad de caracteres de un string o la longitud
console.log(palabras.length)
for(let c = 0 ; c < palabras.length ; c++){
    document.write("letra de las palabras " + palabras.charAt(c) + "<br>");
}
