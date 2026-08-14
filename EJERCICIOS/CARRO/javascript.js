// SELECCIÓN DE ELEMENTOS

// Colores
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.getElementsByClassName("gray");

// Imagen
const imageCard = document.querySelector(".product-image");

// Botones
const cartButton = document.getElementById("button");
const feedbackBtn = document.querySelector(".feedback");

// Etiqueta
const itemTag = document.getElementsByTagName("h3")[0];


// EVENTOS DE COLORES

// ROJO
redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/black-benz.jpg")';
});

// GRIS
grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
});

// NEGRO
blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")';
});


// BOTÓN CARRITO

function cart() {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
}

cartButton.addEventListener("click", cart);
 

// BOTÓN FEEDBACK

function feedback() {
  feedbackBtn.style.display = "none";
  cartButton.style.display = "block";
}

feedbackBtn.addEventListener("click", feedback);