const interface = require('readline-sync');
let response="";




do{
    console.log('\033[2J')
    console.log("1.- Suma");
    console.log("2.- Resta");
    console.log("3.- Division");
    console.log("4.- Multiplicacion");
    console.log("5.- Salir");
    response = interface.question("Que operacion desea realizar, escribe el numero: ");



    if (response != "5"){
        const num1= interface.question("Ingrese el primer numero: ");
        const num2= interface.question("Ingrese el segundo numero: ");


        switch(response){
            case "1":
                var resultado = parseInt(num1)+parseInt(num2);
                console.log("La respuesta es:"+resultado);
                break;
            case "2":
                var resultado = parseInt(num1)-parseInt(num2);
                console.log("La respuesta es:"+resultado);
                break;
            case "3":
                var resultado = parseInt(num1)/parseInt(num2);
                console.log("La respuesta es:"+resultado);
                break;

            case "4":
                var resultado = parseInt(num1)*parseInt(num2);
                console.log("La respuesta es:"+resultado);
                break;

            default:
                break;    
        }


        interface.question("Presione enter para continuar ");
    }
}while(response != "5");