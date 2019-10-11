function viewCity() { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        //document.getElementById("demo").innerHTML = myArr[0];
        for (i=0; i < myArr.length; i++) {
            myRow = '<td>' + myArr[i].name + '</td><td>Lon: '+ myArr[i].coord.lon.toFixed(2) + " -- Lat: " + myArr[i].coord.lat.toFixed(2) + '</td><td></td><td></td>';
            document.getElementById("myTable").insertRow(-1).innerHTML = myRow;
        }
        }
    };
    xmlhttp.open("GET", "../code_topic4/uruguay.json", true);
    xmlhttp.send();
//---------------crear la tabla
}
function viewWeather() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22', true);
    req.onreadystatechange = function (aEvt) {
      if (req.readyState == 4) {
         if(req.status == 200)
          console.log(req.responseText);
         else
          console.log("Error loading page\n");
      }
    };
    req.send(null);
  }