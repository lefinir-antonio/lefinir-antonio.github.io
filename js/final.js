var wCountry;
var saveTable;
var count_loops = 0;
var db, myObj, myJSON, text, obj, line;
var oneReg = {date:"", registers: []};
var aLine;
var aTable=[];
db = {table:[]};
var table = document.getElementById("myTable");
var btnChange = false;
//create footer
window.onload=function()
  {
    slideImg();
    setInterval(slideImg,5000);
    viewReg();
}



//this function use a json file to provide all cities of uruguay
function viewCity() {
  document.getElementById("myLoader").style.visibility = 'visible';
  document.getElementById('myTitle').innerHTML = 'Please wait...';
  cleanTable();
  //document.getElementById('myTable').innerHTML ='<tr><td>City</td><td>Temperature</td><td>Status</td></tr>';
  if(count_loops !=1){ 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        for (i=0; i < myArr.length; i++) {
            viewWeather(myArr[i].id);
        }
        count_loops= count_loops +1;
      }
    };
    xmlhttp.open("GET", "../code_topic4/uruguay.json", true);
    xmlhttp.send();
  }

}

//with this function  I obtain all temperatures and status of every city
function viewWeather(coutryId) { 
    var xmlhttp = new XMLHttpRequest();
    var myF = 0;
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         wCountry = JSON.parse(this.responseText);
         myF = ((wCountry.main.temp.toFixed(2)-273.15) * 9/5) + 32; //convert temperature kelvin to farenheit
   
         //create table with information

         var row = table.insertRow(-1);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
    

         cell1.innerHTML = wCountry.name;
         cell2.innerHTML = myF.toFixed(2) + "F";
         cell3.innerHTML = wCountry.weather[0].description;
         
        /*old way
         myRow = '<td>' + wCountry.name + '</td><td>' + myF.toFixed(2) + ' F</td><td>'+ wCountry.weather[0].description + '</td>';
         document.getElementById("myTable").insertRow(-1).innerHTML = myRow;
          */
         //add row to object
         aLine = {city: wCountry.name, temperature: myF.toFixed(2), status: wCountry.weather[0].description};
         aTable.push(aLine);
         if (coutryId == 3480825) {
           document.getElementById("myLoader").style.visibility = 'hidden';
           document.getElementById('myTitle').innerHTML = 'Uruguay Weather';
         }
         console.log(aLine);
         console.log(aTable);
        }
    };
    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?id=' + coutryId + "&appid=348f31d3a42d06a5db44f7fa4b9f34a9", true);
    xmlhttp.send();

}



//populate the dropdown with old registers
function viewReg(){
    text = localStorage.getItem("testJSON");
    if (!!text) {
    db = JSON.parse(text);
    document.getElementById("registers-dropdown").options.length = 1;
    document.getElementById("registers-dropdown").innerHTML + '<option value="None">-- Select --</option>';
    //console.log(db.table[1].date);
    //console.log(db.table[1].registers[0].city);
  //populate the combo box
    var ele = document.getElementById('registers-dropdown');
    for (var i = 0; i < db.table.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML +
            '<option value="' + i + '">Register at: ' + db.table[i].date + '</option>';
    }
    count_loops = 0;
 }

}


//save registers to storage
function saveReg(){
  if (aTable.length != 0) {
    var d = new Date();  
    oneReg = {date:d.toString().slice(0, 24), registers: aTable};
    db.table.push(oneReg);
    myJSON = JSON.stringify(db);
    localStorage.setItem("testJSON", myJSON);
    aTable=[];
    count_loops = 0;
  }
  viewReg();
}

//clear storage
function clearReg(){
  //document.getElementById('myTable').innerHTML ='<tr><td>City</td><td>Temperature</td><td>Status</td></tr>';
  cleanTable();
  document.getElementById("registers-dropdown").options.length = 1;
  document.getElementById("registers-dropdown").innerHTML + '<option value="None">-- Select --</option>';
  db = {table:[]};
  localStorage.clear();
  count_loops = 0;
}

//draw the new table with the old register selected
function check(){
    var elem = document.getElementById('registers-dropdown');
    document.getElementById('myTable').innerHTML ='<tr><td>Date</td><td>City</td><td>Temperature</td><td>Status</td></tr>';
    if(elem.selectedIndex != 0){
      for (x=0; x < db.table[elem.selectedIndex-1].registers.length; x++) {
              myRow = '<td>' + db.table[elem.selectedIndex-1].date + '</td><td>' + db.table[elem.selectedIndex-1].registers[x].city + '</td><td>' + db.table[elem.selectedIndex-1].registers[x].temperature + '</td><td>'+ db.table[elem.selectedIndex-1].registers[x].status + '</td>';
              document.getElementById("myTable").insertRow(-1).innerHTML = myRow;
          }
          count_loops = 0;
      }        
}

function cleanTable(){
  for(var i = table.rows.length - 1; i > -1; i--){
    table.deleteRow(i);
  }

  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);


  cell1.innerHTML = "City";
  cell2.innerHTML = "Temperature";
  cell3.innerHTML = "Status";

}
//dom manage and css classes
function changeBtn() {
  var btns = document.getElementsByClassName('btn');
  for(i = 0; i < btns.length; i++) {
    console.log(btns[i]);
    if(!btnChange){
      btns[i].style.backgroundColor = '#231f20';
      btns[i].style.color = '#8E793E';
    } else {
      btns[i].style.backgroundColor = '#8E793E';
      btns[i].style.color ='#231f20';      
    }
  }
  btnChange=!btnChange;
}


function createFooter(){
  for (var i = 0; i < 13; i++) {
    var a = document.createElement('a');
    if(i==0){
      a.setAttribute('href',"../index.html");
      a.innerHTML = "Home ";      
    } else{
      a.setAttribute('href',"../code_topic" + i + "/index.html");
      a.innerHTML = "Topic" + i + " ";
    }
    document.getElementById('pFooter').appendChild(a);
  }
}

function slideImg(){
  alert("hola");
}