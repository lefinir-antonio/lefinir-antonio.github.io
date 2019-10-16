var wCountry;
var cuenta_loops =0;
function viewCity() { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        for (i=0; i < myArr.length; i++) {
            viewWeather(myArr[i].id);
        }
        cuenta_loops= cuenta_loops +1;
      }
    };
    xmlhttp.open("GET", "../code_topic4/uruguay.json", true);
    xmlhttp.send();

}

/*
function viewWeather(coutryId) {
    var req = new XMLHttpRequest();
    var testigo = 'https://api.openweathermap.org/data/2.5/weather?id=' + coutryId + "&appid=348f31d3a42d06a5db44f7fa4b9f34a9";
    console.log(testigo);
    req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=' + coutryId + "&appid=348f31d3a42d06a5db44f7fa4b9f34a9", true);
    req.onreadystatechange = function (aEvt) {
      if (req.readyState == 4) {
         if(req.status == 200)
          console.log(req.responseText);
          //return JSON.parse(req.responseText);
         else
          console.log("Error loading page\n");
      }
    };
    req.send(null);
  }
*/
//this function shoulbe create the table IMPORTANT
  function viewWeather(coutryId) { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         wCountry = JSON.parse(this.responseText);
         myRow = '<td>' + wCountry.name + '</td><td>' + wCountry.main.temp.toFixed(2) + '</td><td>'+ wCountry.weather[0].description + '</td>';
         document.getElementById("myTable").insertRow(-1).innerHTML = myRow;
         console.log(wCountry);
         console.log(cuenta_loops);
        }
    };
    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?id=' + coutryId + "&appid=348f31d3a42d06a5db44f7fa4b9f34a9", true);
    xmlhttp.send();

}