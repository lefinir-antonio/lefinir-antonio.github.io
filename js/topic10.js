function playAudio() { 
    var image = document.getElementById('myImage');
    if (image.src.match("2.png")) {
        image.src = "../img/1.png";
        image.style.height = '190px';
    	image.style.width = '131px';
    	document.getElementById('myButton').innerHTML="Hit!";
    }
    else {
        image.src = "../img/2.png";
        image.style.height = '187px';
    	image.style.width = '189px';
		var x = document.getElementById('myAudio');
		document.getElementById('myButton').innerHTML="Back!";
		x.play();       	             	
    }
} 

