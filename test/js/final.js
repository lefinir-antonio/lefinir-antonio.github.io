let jsonparsed;
function getArticles(){
    req=new XMLHttpRequest();
   req.onreadystatechange=function(){ 
     if (req.readyState === 4 && req.status === 200){ // readyState === 4 significa que está completo y el status === 200 significa que está OK
     jsonparsed = JSON.parse(req.responseText); //Paso 2: Conviertes el JSON en un objeto através de JSON.parse. No te olvides de declarar previamente la variable jsonparsed. 
     } else if (req.readyState === 4 && req.status === 404){
       console.log(req.responseText); //Para ver el error en el caso de que no haya podido traerse el JSON
     }
   
   };
   req.open("GET",'https://lefinir-antonio.github.io/test/articles.json',true);
   req.send();
   }

   function myFunction(){
    getArticles();
    console.log(jsonparsed);
    //document.getElementById('myDiv').innerHTML = 'Uruguay Weather';

    // create divcard
    var divcard = document.createElement('div');
    //create body of divcard
    var divcardbody = document.createElement('div');
    //create h5 and h6
    var dh5 = document.createElement('h5');
    var dh6 = document.createElement('h6');

    //create imagen
    var dimg = document.createElement('img');

    //create paragraph
    var dp = document.createElement('p');

    //create button
    var dbutton = document.createElement('button');

    //add json value to h5 and h6
    dh5.innerHTML = jsonparsed.name;
    dh6.innerHTML = jsonparsed.country;
    dimg.src = 'images/promo1.jpg';
    dp.innerHTML = 'lorem ipsum lorem ipsum lorem ipsum';
    dbutton.innerHTML='Ver Mas!';

    //change bootstrap classes
    divcard.className = 'card card-hotel d-flex flex-column justify-content-between ml-2';  
    divcardbody.className = 'card-body';
    dh5.className ='card-title';
    dh6.className ='card-title text-muted';
    dimg.className = 'card-img-top';
    dp.className = 'card-text';
    dbutton.className = 'btn btn-primary btn-reserva';
  
    //add h5 and h6 to div
    divcardbody.appendChild(dh5);
    divcardbody.appendChild(dh6);
    divcardbody.appendChild(dimg);
    divcardbody.appendChild(dp);
    //add divs to divcard and document
    divcard.appendChild(divcardbody);
    divcard.appendChild(dbutton);
    document.getElementById('myDiv').appendChild(divcard);


      //div.innerHTML = 'Hi there! ' + jsonparsed.name;

   }
