document.addEventListener("DOMContentLoaded", function () {
  var eersteImagesButton = document.querySelector("header button");
  var deNav = document.querySelector("header nav");

  eersteImagesButton.addEventListener("click", function () {
    if (eersteImagesButton.getAttribute("aria-expanded") === "false") {
      eersteImagesButton.setAttribute("aria-expanded", "true");
    } else {
      eersteImagesButton.setAttribute("aria-expanded", "false");
    }
  });

  eersteImagesButton.addEventListener("click", function () {
    deNav.classList.toggle("open");
  });
});







//hoiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii tweede pagina
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

//////////////////////////////////hyieiaef
var imageList = document.querySelector("main section:last-of-type ul");
var prevButton = document.querySelector("main section:last-of-type button:first-of-type");
var nextButton = document.querySelector("main section:last-of-type button:last-of-type");

let currentIndex = 0;

// Add event listeners to the "Next" and "Previous" buttons
nextButton.addEventListener("click", () => {
  currentIndex++;
  scrollToImage(currentIndex);
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  scrollToImage(currentIndex);
});

// Function to scroll to a specific image in the list
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

// Optional: Automatically scroll to the first image on page load
scrollToImage(currentIndex);





