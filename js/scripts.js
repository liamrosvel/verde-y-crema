//Objetos y Variables

var showNav = document.getElementById("show-nav");
var menuNav = document.getElementById("toggle-menu");

//Functions

var mostrarMenu = function() {
	showNav.classList.toggle("show-menu");
}

//Asignación de enventos

menuNav.addEventListener('click', mostrarMenu);