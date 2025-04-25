const botao = document.createElement("button");
botao.innerText = "Clique aqui!";

document.body.appendChild(botao);

botao.addEventListener("click", () => {
  const nome = prompt("Olá, qual o seu nome?");
  alert(`Olá ${nome}!`)
});
