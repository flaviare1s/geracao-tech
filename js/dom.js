const botao = document.createElement("button");
botao.innerText = "Clique aqui!";
botao.style.color = "blue";
botao.style.padding = "10px";
botao.style.cursor = "pointer";

document.body.appendChild(botao);

botao.addEventListener("click", () => {
  const nome = prompt("Olá, qual o seu nome?");
  alert(`Olá ${nome}!`);
});

// apend()
const container = document.getElementById("container");
const novaDiv = document.createElement("div");
novaDiv.textContent = "Nova DIV";

container.append(novaDiv);
