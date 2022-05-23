//////////////////////////CONTROL DE FLUJO Y MANEJO DE ERRORES////////////////////////

//Sentencia switch:
//es como un if pero simplificado si hay muchos casos

                                                                         /*
let expr = "pera";

switch(expr) {
    case "banana":
        console.log("esta fruta es amarilla");
        break;
    case "pera":
        console.log("tiene forma de mi tio roberto");
        break;
    case "manzana":
        console.log("los primeros humanos pecaron comiendola");
        break;
    default: 
        console.log("no es ninguna");  //el default es como el else, si nada se cumple, se ejecuta eso.
}


//se usa un break; al final de cada caso para que se deje de ejecutar una vez que un caso sea valido.


                                                                           */

//Sentencia de manejo de excepciones:
//el manejo total de los errores.

//try...catch 
//El try debe estar acompañado obligatoriamente por un catch o un finally.

                                                                           /*
try {
    sfdsfsdfsfsd
}

catch(error) {
    console.log("Ocurrio un error de referencia");
}
                                 
//Si el catch tiene una condicion dentro es condicional y sino no.
       
                                                                            */
 
//finally : el finally se ejecuta pase lo que pase.

                                                                           /*

const pruebaTry = ()=> {
    try {
        return 1;
    }
    catch(e) {
        return 2;
    }
    finally {
        return 3;
    }
}

console.log(pruebaTry());


//Sentencia throw:
//el error va a ser igual a lo que pongamos en throw.

try {
    throw ["leyi","pelado"];
}
catch(error) {
    console.log(error[1]);
}

                                                                    */


///////////////////////////////////////PROBLEMA DE COFLA/////////////////////////////////////

const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=>{
    let resultado, mensaje;
    try {
        prevRes = parseInt(document.getElementById("nota").value);
        if(isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,prevRes);
    } catch(e) {
        resultado = "Sos gracioso?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
})


const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes se tan HDP";
        break;
        case 2: resultado = "Sos malisimo";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien, pero puede mejorar";
        break;
        case 8: resultado = "Muy bien";
        break;
        case 9: resultado = "Excelente";
        break;
        case 10: resultado = "Insuperable";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes) =>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        return `<span class="green">APROBADO</span>`;
    }
    return `<span class="red">DESAPROBADO</span>`;

}

const abrirModal = (res,msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}