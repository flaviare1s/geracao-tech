const form = document.getElementById("pedidoForm");
const resultado = document.getElementById("resultado");

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

  console.log(produtos);

  if (produtos.length === 0) {
    alert("Selecione pelo menos um produtos!");
    return;
  }
});

// Outra forma de fazer, sem ser com spread:
// const produtosSelecionados = document.querySelectorAll('input[name="produto"]:checked')
// const array = Array.from(produtosSelecionados)
