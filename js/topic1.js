var myarr = [];
var average = 0;
var xSoundCalc = document.getElementById('myAudioCalc');        
var xSoundClick = document.getElementById('myAudioClick');        
var xSoundError = document.getElementById('myAudioError');    
 
function addItem() {
	//some checks
	if (myarr.length >= 12) {
		xSoundError.play()
		return;
	};
	if (!document.getElementById("name").value) {
		xSoundError.play()
		return;
	};
	if (parseInt(document.getElementById("name").value) < 0 || parseInt(document.getElementById("name").value) > 300){
		xSoundError.play()
		return;
	};
	//enable loader during the charge of data
	if (myarr.length < 12) {
		document.getElementById("myLoader").style.visibility = 'visible';
	} else {
		document.getElementById("myLoader").style.visibility = 'hidden';
	};
	//save value into the array
	myarr.push(document.getElementById("name").value);
	xSoundClick.play()
	//prints result
	if (myarr.length != 12) document.getElementById('itemsLength').innerHTML = myarr.length + 1;
	document.getElementById('items').innerHTML = "[" + myarr.join(" , ") + "]";
	//set focus over textbox
	document.getElementById("name").focus();
}

function infoArray() {
	//I assume that the first item is the max and the min
	xSoundCalc.play()
	max=parseInt(myarr[0]);
	min=parseInt(myarr[0]);
	//I create an variable to sums items
	s=0;
	//I search the max/min values and adds items
	for (var i = 0; i < myarr.length; i++) {
		if (parseInt(myarr[i]) > max) max = parseInt(myarr[i]);
		if (parseInt(myarr[i]) < min) min = parseInt(myarr[i]);
		s=s+parseInt(myarr[i]);
	}
	//calculate the average
	average=s/i;
	//check that the array is not empty
	if(s!=0) document.getElementById('results').innerHTML = "Results: " + "Max: " + max + " || " + "Min: " + min + " || " + "Average: " + average.toFixed(2);
	myGraph();
}

function myGraph() {
	document.getElementById("myLoader").style.visibility = 'hidden';
	varx=0;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, 650, 300);
	ctx.strokeStyle = '#000000';
	ctx.fillStyle = '#000000';
	ctx.font = "15px Arial";
	ctx.beginPath();
	for (var i = 0; i < myarr.length; i++) {
		varx=varx+50;
		ctx.lineTo(varx, 300-parseInt(myarr[i]));
		ctx.fillText(myarr[i],varx+5, 300-parseInt(myarr[i]));		
	}
	ctx.stroke();
	//draw the average in red color
	if(average != 0){
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#ff0000';
		ctx.moveTo(0,300-Math.round(average));
		ctx.lineTo(650,300-Math.round(average));
		ctx.fillStyle = '#ff0000';
		ctx.fillText("AVG:" + Math.round(average),325,300-Math.round(average)-5);
		ctx.stroke();
	}
}