//Objetos y Variables

var showNav = document.getElementById("show-nav"),
	menuNav = document.getElementById("toggle-menu");

//Functions

var mostrarMenu = function() {
	showNav.classList.toggle("show-menu");
}

var mostrarHeader = function(e) {
	var scrollheader = document.getElementById("scroll-header");
	var scrollTop = document.body.scrollTop;

	if(scrollTop > 80) 
	{
		scrollheader.classList.add("show-header");
	}
	else
	{
		scrollheader.classList.remove("show-header");
	}

}



//Asignación de enventos

menuNav.addEventListener('click', mostrarMenu);

window.addEventListener('scroll', mostrarHeader);
