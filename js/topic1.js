var myarr = [];
 
function addItem() {
	//some checks 
	if (myarr.length >= 12) return;
	if (!document.getElementById("name").value) return;
	if (parseInt(document.getElementById("name").value) < 0 || parseInt(document.getElementById("name").value) > 300) return;
	//save value into the array
	myarr.push(document.getElementById("name").value);
	//prints result
	document.getElementById('itemsLength').innerHTML = myarr.length + 1;
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
	var average=s/i;
	//check that the array is not empty
	if(s!=0) document.getElementById('results').innerHTML = "Results: " + "Max: " + max + " || " + "Min: " + min + " || " + "Average: " + average.toFixed(2);
		
}

function myGraph() {
	varx=0;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	for (var i = 0; i < myarr.length; i++) {
		varx=varx+50;
		ctx.lineTo(varx, 300-parseInt(myarr[i]));
	}
	ctx.stroke();
}