function myPalette(seasons) {
	switch(seasons) {
	  case "fall":
		document.getElementById("body").style.color = "#233714";
		document.getElementById("h1").style.color = "#FDECED";
		document.getElementById("header").style.backgroundColor = "#233714";
		document.getElementById("footer").style.backgroundColor = "#efcfb6";
		document.getElementById("img").src = "../img/fall.png";
	    break;

	  case "winter":
		document.getElementById("body").style.color = "#202040";
		document.getElementById("h1").style.color = "#b030b0";
		document.getElementById("header").style.backgroundColor = "#202040";
		document.getElementById("footer").style.backgroundColor = "#602080"; 
		document.getElementById("img").src = "../img/winter.png";
	    break;
	  case "summer":
		document.getElementById("body").style.color = "#c70d3a";
		document.getElementById("h1").style.color = "#02383c";
		document.getElementById("header").style.backgroundColor = "#c70d3a";
		document.getElementById("footer").style.backgroundColor = "#ed5107"; 
		document.getElementById("img").src = "../img/summer.png";		
	    break;
	  case "spring":
		document.getElementById("body").style.color = "#f66767";
		document.getElementById("h1").style.color = "#b030b0";
		document.getElementById("header").style.backgroundColor = "#f9d5bb";
		document.getElementById("footer").style.backgroundColor = "#3c3d47"; 
		document.getElementById("img").src = "../img/spring.png";		
	    break;	    	    

	}

}