//switch: se usan para reemplazar if else anidados
//varias opciones para elegir
//estructura de un switch

/*switch(opcion){
    case 1:
        todo lo que quiero que se ejecute 
    break
    case 2:
        todo lo que quiero que se ejecute 
    break
    ..
default
    codigo a ejecutar por defecto
} 
*/

//permitir al usuario elegir su estacion favorita

let estacion = prompt("Ingrese su estaciòn del año favorira segùn su nro, por ej 1. verano, 2. otoño, 3. primavera, 4. invierno");

switch (estacion?.toLowerCase()){
    case "1":
    case "verano":
        document.write("su estacion favorita es: verano");
        break;
    case "2":
    case "otoño":
        document.write("su estacion favorita es: otoño");
        break;
    case "3":
    case "primavera":
        document.write("su estacion favorita es: primavera");
        break;
    case "4":
    case "invierno":
        document.write("su estacion favorita es: invierno");
        break;
    default:
        alert("Ingrese una opcion valida");
        break;
   
}



