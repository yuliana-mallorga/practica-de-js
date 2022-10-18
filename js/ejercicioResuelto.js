// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

/* quiere agregarar una cadena de texto?
si devuelve ok ingresamos la cadena con prompt
guardar las cadenas en un array push
y voy mostrando las cadenas ingresadas */


let resultado = ""
do{
    let palabra = prompt("Ingrese una palbra");
    if(resultado === ""){
        resultado = palabra;
        console.log(resultado)
    } else {
        resultado = resultado + " " + palabra
        console.log(resultado)
    }

} while(confirm("desea seguir ingresando palabras"));

document.write(resultado)