function myMessage() {
	alert("Test");
}
function myMessage2() {
	alert("Test2");
}

var myarr = [];
 
function addItem() {
	myarr.push(document.getElementById("name").value);
	document.getElementById('itemsLength').innerHTML = myarr.length;
	document.getElementById('items').innerHTML = "[" + myarr.join(" , ") + "]";
	console.log(myarr); //to confirm it has been added to the array
}