import { calcularTotal } from "./utils/calculator.js";
import { aplicarDesconto } from "./utils/discount.js";
import { logger } from "./utils/logger.js";

const form = document.getElementById("pedidoForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value;
  const produtosSelecionados = [
    ...document.querySelectorAll('input[name="produto"]:checked'),
  ];
  const produtos = produtosSelecionados.map((input) => ({
    nome: "Produto",
    preco: Number(input.value),
  }));

  if (produtos.length === 0) {
    alert("Selecione pelo menos um produtos!");
    return;
  }

  const totalComTaxa = calcularTotal(produtos, (preco) => preco * 1.1);

  logger(`Valor com taxa: ${totalComTaxa.toFixed(2)}`);

  const totalFinal = aplicarDesconto(totalComTaxa);

  logger(`Valor com desconto e taxa: ${totalFinal.toFixed(2)}`);

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("d-none");
  resultado.innerHTML = `Valor total com descontos e taxa: R$${totalFinal.toFixed(2).replace('.', ',')}`;
});

// Outra forma de fazer, sem ser com spread:
// const produtosSelecionados = document.querySelectorAll('input[name="produto"]:checked')
// const array = Array.from(produtosSelecionados)
