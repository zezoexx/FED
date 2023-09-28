$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav:first-of-type");


menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
}



  
  
  
