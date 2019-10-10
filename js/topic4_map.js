mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZmluaXIiLCJhIjoiY2sxanF5enhxMG51azNtb2QxY2Mwa215YiJ9.vr6zgo6_9GDWqYoL8xh2lg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-54.383331, -33.23333], // starting position [lng, lat]
zoom: 6 // starting zoom
});