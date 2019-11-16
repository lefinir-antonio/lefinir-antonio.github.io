function playAudio() { 
    document.getElementById("myLoader").style.visibility = 'hidden';
    var image = document.getElementById('myImage');
    if (image.src.match("2.png")) {
        image.src = "../img/3.png";
        image.style.width = '108px';
        image.style.height = '147px';
        var x2 = document.getElementById('myAudio2');        
        x2.play();    
        document.getElementById('myButton').innerHTML="Back!";
        return;
    }
    if (image.src.match("1.png")) {
        image.style.width = '189px';
        image.style.height = '187px';        
        image.src = "../img/2.png";
		var x = document.getElementById('myAudio');
		document.getElementById('myButton').innerHTML="More!";
        x.play();
        return;       	             	
    }
    if (image.src.match("3.png")) {
        image.style.width = '131px';
        image.style.height = '190px';        
        image.src = "../img/1.png";  	             
        document.getElementById('myButton').innerHTML="Hit!"; 	
        return;
    }

}

function() {
    document.getElementById("myLoader").style.visibility = 'visible';
    alert("Welcome!!");
}

