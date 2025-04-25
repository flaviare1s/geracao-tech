// 11. Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 
const prompt = require("prompt-sync")();

let preco = Number(prompt("Digite o preço do produto: "));
let codigo = Number(prompt("Digite o código da forma de pagamento (1 a 4): "));
let total;

switch (codigo) {
  case 1:
    total = preco * 0.9;
    console.log(
      "À vista em dinheiro ou cheque. Total com 10% de desconto: R$ " +
        total.toFixed(2)
    );
    break;

  case 2:
    total = preco * 0.85;
    console.log(
      "À vista no cartão de crédito. Total com 15% de desconto: R$ " + total.toFixed(2)
    );
    break;

  case 3:
    total = preco;
    console.log("Em duas vezes sem juros. Total: R$ " + total.toFixed(2));
    break;

  case 4:
    total = preco * 1.1;
    console.log(
      "Em duas vezes com juros. Total com acréscimo de 10% de juros: R$ " + total.toFixed(2)
    );
    break;

  default:
    console.log("Código de pagamento inválido.");
    break;
}
