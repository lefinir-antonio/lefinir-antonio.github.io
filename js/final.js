var wCountry;
var saveTable;
var count_loops = 0;
var db, myObj, myJSON, text, obj, line;
//object to be saved on storage a table (city name, temperature and status) and the date
var oneReg = {date:"", registers: []};
var aLine;
var aTable=[];
db = {table:[]};
var xSoundClick = document.getElementById('myAudioClick');
var table = document.getElementById("myTable");
var imgCities=new Array(
  ['img/1.jpg','Montevideo'],
  ['img/2.jpg','Colonia'],
  ['img/3.jpg','San Jose'],
  ['img/4.jpg','Rivera'],
  ['img/5.jpg','Salto'],
  ['img/6.jpg','Young'],
  ['img/7.jpg','La Paz'],
  ['img/8.jpg','Cerrito'],
  ['img/9.jpg','Las Piedras'],
  ['img/10.jpg','Durazno']
);
var counter=0;




//create slide img and charge old registers
window.onload=function()
  {
    //declare map
    var map = L.map('mapUY').setView([-32.522779, -55.765835], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    L.marker([-32.522779, -55.765835]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    slideImg();
    setInterval(slideImg,5000);
    viewReg();
}

/*---AJAX---*/
//this function use a json file to provide all cities of uruguay
function viewCity() {
  xSoundClick.play()
  document.getElementById("myLoader").style.visibility = 'visible';
  document.getElementById('myTitle').innerHTML = 'Please wait...';
  cleanTable();

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
    xmlhttp.open("GET", "../final/uruguay.json", true);
    xmlhttp.send();
  }

}

//with this function I obtain all temperatures and status of every city
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
/*---AJAX---*/

/*---LocalStorage---*/
//populate the dropdown with old registers getItems
function viewReg(){
    text = localStorage.getItem("testJSON");
    if (!!text) {
    db = JSON.parse(text);
    document.getElementById("registers-dropdown").options.length = 1;
    document.getElementById("registers-dropdown").innerHTML + '<option value="None">-- Select --</option>';

  //populate the combo box
    var ele = document.getElementById('registers-dropdown');
    for (var i = 0; i < db.table.length; i++) {
        ele.innerHTML = ele.innerHTML +
            '<option value="' + i + '">Register at: ' + db.table[i].date + '</option>';
    }
    count_loops = 0;
 }

}


//save registers to storage setItems
function saveReg(){
  if (aTable.length != 0) {
    xSoundClick.play();
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
  xSoundClick.play();
  cleanTable();
  document.getElementById("registers-dropdown").options.length = 1;
  document.getElementById("registers-dropdown").innerHTML + '<option value="None">-- Select --</option>';
  db = {table:[]};
  localStorage.clear();
  count_loops = 0;
}
/*---LocalStorage---*/

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

//this function wipe all rows of weather table
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


//dom manage and css classes, change skin of buttons and loader
function changeBtn() {
  //change buttons class
  xSoundClick.play();
  document.getElementById("myButton").classList.toggle("btnBlack");
  document.getElementById("savetoDB").classList.toggle("btnBlack");
  document.getElementById("clearReg").classList.toggle("btnBlack");
  document.getElementById("chgBtn").classList.toggle("btnBlack");
  document.getElementById("registers-dropdown").classList.toggle("btnBlack");
  //change loader class also
  document.getElementById("myLoader").classList.toggle("loaderBlack");
}


//this function create a footer dinamically
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

//this function show a slide of images from Uruguay
function slideImg(){
  counter++
  document.getElementById("iCity").src=imgCities[counter%imgCities.length][0];
  document.getElementById("caption").innerHTML=imgCities[counter%imgCities.length][1] + " City";
}

//this function use a json file to provide all cities of uruguay
function viewCityMap() {
  xSoundClick.play()
  document.getElementById("myLoader").style.visibility = 'visible';
  document.getElementById('myTitle').innerHTML = 'Please wait...';
  //cleanTable();

  if(count_loops !=1){ 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        for (i=0; i < myArr.length; i++) {
            viewWeatherMap(myArr[i].id);
            console.log(myArr[i].id);
        }
        count_loops= count_loops +1;
      }
    };
    xmlhttp.open("GET", "../final/uruguay.json", true);
    xmlhttp.send();
  }

}


//with this function I obtain all temperatures and status of every city
function viewWeatherMap(coutryId) { 
  var xmlhttp = new XMLHttpRequest();
  var myF = 0;

  //end declare map

  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
       wCountry = JSON.parse(this.responseText);
       myF = ((wCountry.main.temp.toFixed(2)-273.15) * 9/5) + 32; //convert temperature kelvin to farenheit
 
       /*create table with information

       var row = table.insertRow(-1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
  

       cell1.innerHTML = wCountry.name;
       cell2.innerHTML = myF.toFixed(2) + "F";
       cell3.innerHTML = wCountry.weather[0].description;
       
       //add row to object
       aLine = {city: wCountry.name, temperature: myF.toFixed(2), status: wCountry.weather[0].description};
       aTable.push(aLine);
      */
       var markerText = "<h1>" + wCountry.name + "</h1>" + "<br>" + myF.toFixed(2) + "F" + "<br>" + wCountry.weather[0].description;
       var lon = wCountry.coord.lon;
       var lat = wCountry.coord.lat;
       L.marker([lon, lat]).addTo(map)
       .bindPopup(markerText)
       .openPopup();


       //stop loader
       if (coutryId == 3480825) {
         document.getElementById("myLoader").style.visibility = 'hidden';
         document.getElementById('myTitle').innerHTML = 'Uruguay Weather';
       }
       //console.log(aLine);
       //console.log(aTable);
      }
  };
  xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?id=' + coutryId + "&appid=348f31d3a42d06a5db44f7fa4b9f34a9", true);
  xmlhttp.send();

}