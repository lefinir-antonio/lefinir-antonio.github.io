var myarr = [];
var average = 0;
var actSound = false;
var xSound = document.getElementById('myAudio');        
function gSound() {
	if(actSound){
		actSound = false;
		document.getElementById('soundBtn').innerHTML = "No Sound";
	}else{
		actSound = true;
		document.getElementById('soundBtn').innerHTML = "Sound";
	}

}
 
function addItem() {
	//some checks 
	if (myarr.length >= 12) return;
	if (!document.getElementById("name").value) return;
	if (parseInt(document.getElementById("name").value) < 0 || parseInt(document.getElementById("name").value) > 300) return;
	//save value into the array
	myarr.push(document.getElementById("name").value);
	//prints result
	if (myarr.length != 12) document.getElementById('itemsLength').innerHTML = myarr.length + 1;
	document.getElementById('items').innerHTML = "[" + myarr.join(" , ") + "]";
	//set focus over textbox
	document.getElementById("name").focus();
}

function infoArray() {
	//I assume that the first item is the max and the min
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
		ctx.stroke();
		if(actSound){
			setTimeout(xSound.play(), 1000);
		}
	}

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