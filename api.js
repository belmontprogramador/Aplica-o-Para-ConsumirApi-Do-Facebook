   // Define as opções de imagens
   const images = [
    "img/baiano.jpg",
    "img/foguinho.jpg",
    "img/pimentel.jpg",
    "img/ze-da-feira.jpg",
     
];

  // Exibe uma imagem aleatória
  function displayImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let image = new Image();
    image.src = images[randomIndex];
    document.querySelector("#imageContainer").appendChild(image);
}

// Adiciona um evento de clique ao botão Submit
document.querySelector("#submitBtn").addEventListener("click", function() {
    // Exibe a imagem aleatória
    displayImage();
    // Oculta o botão Submit
    document.querySelector("#submitBtn").style.display = "none";
    // Altera o texto da pergunta
    document.querySelector("#question").innerHTML = "Pague meu Litrão!!";
    // Exibe o botão Jogar de Novo
    document.querySelector("#playAgainBtn").style.display = "block";
});

// Adiciona um evento de clique ao botão Jogar de Novo
document.querySelector("#playAgainBtn").addEventListener("click", function() {
    location.reload();
});

// Esconde o botão Jogar de Novo no início
document.querySelector("#playAgainBtn").style.display = "none";