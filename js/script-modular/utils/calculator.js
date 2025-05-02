export const calcularTotal = (produtos, alplicarTaxa) => {
  let total = 0;
  for (const produto of produtos) {
    total += alplicarTaxa(produto.preco);
  }
  return total;
};
