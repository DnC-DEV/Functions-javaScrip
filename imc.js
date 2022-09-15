const prompt = require('prompt-sync')();

function calculoImc(peso,altura) {
    calculoImc = peso/(altura*altura);
    console.log(`\n${calculoImc}`)
    }
module.exports = calculoImc