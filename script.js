const prompt = require('prompt-sync')();
const mostrarMenu = require('./menu');
const calculoImc = require('./imc');

mostrarMenu();
const imc = [];
let opcao = 0;

do {
    opcao = Number(prompt());
    const peso = Number(prompt('Digite seu peso: '));
    const altura = Number(prompt('Digite sua altura: '));

    calculoImc(peso,altura);

//console.clear();

switch (opcao) {
    case 1:
        calculoImc(imc)
        break;
    default:
        console.log('Opção invalida');
        break;
}
} while (opcao != 1);