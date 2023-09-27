// JavaScript Document
console.log("hi");

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav:first-of-type");


menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
}


functionElement.addEventListener('click', function() {
	if (deNav.classList.contains('open')) {
	  firstThreeListItems.classList.add('hide');
	}
  });

  
  var menuButton = document.querySelector("header button");
  var deNav = document.querySelector("header nav:first-of-type");
  const firstUl = document.querySelector('header nav ul:first-child');
  const firstThreeListItems = firstUl.querySelectorAll('li:nth-child(-n+3)');
  
  menuButton.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
	deNav.classList.toggle("open");
	if (deNav.classList.contains("open")) {
		firstThreeListItems.classList.add('hide');
	
	}
  }
  
