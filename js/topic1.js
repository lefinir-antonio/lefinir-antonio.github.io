var myarr = [];
 
function addItem() {
	if (myarr.length >= 12) return;
	if (!document.getElementById("name").value) return;
	if (parseInt(document.getElementById("name").value) < 0 || parseInt(document.getElementById("name").value) > 300) return;	
	myarr.push(document.getElementById("name").value);
	document.getElementById('itemsLength').innerHTML = myarr.length + 1;
	document.getElementById('items').innerHTML = "[" + myarr.join(" , ") + "]";
	document.getElementById("name").focus();
}

function infoArray() {
	max=parseInt(myarr[0]);
	min=parseInt(myarr[0]);
	s=0;
	for (var i = 0; i < myarr.length; i++) {
		if (parseInt(myarr[i]) > max) max = parseInt(myarr[i]);
		if (parseInt(myarr[i]) < min) min = parseInt(myarr[i]);
		s=s+parseInt(myarr[i]);
	}
	console.log(s);
	console.log(i);
	var average=s/i;

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