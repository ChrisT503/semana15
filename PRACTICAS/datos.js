const nombre = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout,

});

nombre.question("Cual es su nombre?",nombre => {
    console.log(`Bienvenido ${nombre}`);
  
});


