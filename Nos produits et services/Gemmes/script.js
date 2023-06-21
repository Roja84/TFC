let products = {
  data: [
    {
      productName: "Améthyste brésilienn taille brillant 8.0ct",
      category: "Facettées",
      price: "96",
      image: "Data/amethyste_1.jpg",
    },
	{
		productName: "Lapis Lazuli afghan 17ct",
		category: "Facettées",
		price:"108",
		image: "Data/lapis_lazuli_1.jpg",
	},
	{
		productName: "Lapis Lazuli afghan 11ct",
		category: "Facettées",
		price: "66",
		image: "Data/lapis_lazuli_2.jpg",
	},
    {
      productName: "Lot sphalerites synthétiques 125ct, productio chinoise",
      category: "Brutes",
      price: "49",
      image: "Data/sphalerite_2.jpg",
    },
    {
      productName: "Schalenblende polonaise 18ct",
      category: "Cabochons",
      price: "129",
      image: "Data/schalenblende_1.jpg",
    },
    {
      productName: "Schalenblende polonaise 27ct",
      category: "Cabochons",
      price: "89",
      image: "Data/schalenblende_2.jpg",
    },
    {
      productName: "Sphalerite Orange espagnole 40ct",
      category: "Facettées",
      price: "99",
      image: "Data/sphalerite_3.jpg",
    },
    {
      productName: "Sphalerite Orange espagnole 40ct",
      category: "Facettées",
      price: "29",
      image: "Data/sphalerite_4.jpg",
    },
    {
      productName: "Sphalerite rouge orangé brute 15ct d'Espagne",
      category: "Brutes",
      price: "30",
      image: "Data/sphalerite_1.jpg",
    }/*,
    {
      productName: "nom du produit affiché",
      category: "la catégorie",
      price: "prix en €",
      image: "localisation de l'image",
    },*/
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "€" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};