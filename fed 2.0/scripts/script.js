// hamburger menu 

document.addEventListener("DOMContentLoaded", function () {
	var eersteImagesButton = document.querySelector("header button");
	var deNav = document.querySelector("header nav");
	var deTekst = document.querySelector("h2");
	var deTekst2 = document.querySelector("section:first-of-type p");
	var deTekst3 = document.querySelector("main > p");
	var ver2 = document.querySelector("main h1:first-child");
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
		deTekst2.classList.toggle("tekst2");
		ver2.classList.toggle("vermeer");
		deTekst3.classList.toggle("tekst3");
	});
});





// vermeer.html 1e en 2e sectie
var button = document.querySelector("section:first-of-type button");

button.addEventListener("click", function () {
	var section = this.closest("section");
	var moreText = section.querySelector("main section:first-of-type div");

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
	var moreText = section.querySelector("main section:nth-of-type(2) div");

	if (this.innerHTML === "Meer praktische info") {
		moreText.classList.add("more");
		this.innerHTML = "Lees minder";
	} else {
		moreText.classList.remove("more");
		this.innerHTML = "Meer praktische info";
	}
});

//bron: How To Create a Read More Read Less Button. (n.d.). https://www.w3schools.com/howto/howto_js_read_more.asp




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

//bronnen: W3.CSS Slideshow. (n.d.). https://www.w3schools.com/w3css/w3css_slideshow.asp
//How To Create a Slideshow. (n.d.). https://www.w3schools.com/howto/howto_js_slideshow.asp
//Learn to build Carousel using pure CSS. (n.d.). YouTube. https://m.youtube.com/watch?time_continue=159&v=vnQNb9fXP9o&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2F&source_ve_path=MTM5MTE3LDI4NjY2&feature=emb_logo
//How To Slide Down a Bar on Scroll. (n.d.). https://www.w3schools.com/howto/howto_js_navbar_slide.asp
//How To Hide Scrollbars With CSS. (n.d.). https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp





