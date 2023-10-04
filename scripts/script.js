// hamburger menu 

document.addEventListener("DOMContentLoaded", function () {
	var eersteImagesButton = document.querySelector("header button");
	var deNav = document.querySelector("header nav");
	var deTekst = document.querySelector("header section:last-of-type");
	var Telefoonscherm = document.querySelector("h1");
	var body = document.body;
  
	eersteImagesButton.addEventListener("click", function () {
	  if (eersteImagesButton.getAttribute("aria-expanded") === "false") {
		eersteImagesButton.setAttribute("aria-expanded", "true");
		eersteImagesButton.querySelector("img").src = "https://assets.codepen.io/274456/ui-icon-cross.svg";
	  } else {
		eersteImagesButton.setAttribute("aria-expanded", "false");
		eersteImagesButton.querySelector("img").src = "https://assets.codepen.io/274456/ui-icon-hamburger.svg";
	  }
  
	  deNav.classList.toggle("open");
	  body.classList.toggle('menu-open');
	  deTekst.classList.toggle("tekst");
	  Telefoonscherm.classList.toggle("telefoon");
	});
  });
  




// vermeer.html 1e en 2e sectie
var button = document.querySelector("section:first-of-type button");

button.addEventListener("click", function () {
	var section = this.closest("section");
	var moreText = section.querySelector("span");

	if (this.innerHTML === "Lees meer over de Dichterbij Vermeer") {
		moreText.classList.add("more");
		this.innerHTML = "Lees minder";
	} else {
		moreText.classList.remove("more");
		this.innerHTML = "Lees meer over de Dichterbij Vermeer";
	}
});

var button2 = document.querySelector("section:nth-of-type(2) button");

button2.addEventListener("click", function () {
	var section = this.closest("section");
	var moreText = section.querySelector("span");

	if (this.innerHTML === "Meer praktische info") {
		moreText.classList.add("more");
		this.innerHTML = "Lees minder";
	} else {
		moreText.classList.remove("more");
		this.innerHTML = "Meer praktische info";
	}
});





// vermeer.html slideshow
var imageList = document.querySelector("main section:nth-of-type(3) ul");
var prevButton = document.querySelector("main section:nth-of-type(3) button:first-of-type");
var nextButton = document.querySelector("main section:nth-of-type(3) button:last-of-type");
let currentIndex = 0;


nextButton.addEventListener("click", () => {
	currentIndex++;
	scrollToImage(currentIndex);
});

prevButton.addEventListener("click", () => {
	currentIndex--;
	scrollToImage(currentIndex);
});


function scrollToImage(index) {
	const images = imageList.querySelectorAll("li");

	if (index < 0) {
		currentIndex = 0;
	} else if (index >= images.length) {
		currentIndex = images.length - 1;
	}

	const targetImage = images[currentIndex];
	imageList.scrollLeft = targetImage.offsetLeft;
}

scrollToImage(currentIndex);





