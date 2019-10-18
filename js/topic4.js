var wCountry;
var saveTable;
var count_loops = 0;
var db, myObj, myJSON, text, obj, line;

//this function use a json file to provide all cities of uruguay
function viewCity() {
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
         myRow = '<td>' + wCountry.name + '</td><td>' + myF.toFixed(2) + ' F</td><td>'+ wCountry.weather[0].description + '</td>';
         document.getElementById("myTable").insertRow(-1).innerHTML = myRow;
         console.log(wCountry);
         console.log(count_loops);
        }
    };
    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?id=' + coutryId + "&appid=348f31d3a42d06a5db44f7fa4b9f34a9", true);
    xmlhttp.send();

}

//save registers to storage
function saveReg(){
  myJSON = JSON.stringify(db);
  localStorage.setItem("testJSON", myJSON);
 
}

