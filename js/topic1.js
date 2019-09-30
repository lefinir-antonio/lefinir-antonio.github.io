var myarr = [];
 
function addItem() {
	if (myarr.length >= 12) return;
	if (!document.getElementById("name").value) return;
	myarr.push(document.getElementById("name").value);
	document.getElementById('itemsLength').innerHTML = myarr.length;
	document.getElementById('items').innerHTML = "[" + myarr.join(" , ") + "]";
	console.log(myarr); //to confirm it has been added to the array
}

function infoArray() {
	max=myarr[0];
	min=myarr[0];
	for (var i = 0; i < myarr.length; i++) {
		if (myarr[i] > max) max = myarr[i];
		if (myarr[i] < min) min = myarr[i];
		console.log(max); //to confirm it has been added to the array
		console.log(min); //to confirm it has been added to the array		
	}
	console.log(max); //to confirm it has been added to the array
	console.log(min); //to confirm it has been added to the array			
}

function myGraph() {
	varx=0;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(0, 150);
	for (var i = 0; i < myarr.length; i++) {
		varx=varx+50;
		ctx.lineTo(varx, 300-myarr[i]);
	}
	ctx.stroke();

}