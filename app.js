//const operation = require('./functions.js');

const { sum,colors } = require('./functions.js');
const result = sum(5,8);

console.log("El resultado de la suma es: ", result);

colors.forEach((color) => {
    console.log(color);
});