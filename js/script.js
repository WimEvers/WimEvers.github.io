function init(){
    //alert("init called");
 }

//alert("js initialized");
var map = L.map('map').setView([28.281,-16.927], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
var markerLS = L.marker([28.35221,-16.835699]).addTo(map).bindPopup("<p>Los Silos</p>").openPopup();
var markerG = L.marker([28.28526,-16.43538]).addTo(map).bindPopup("<p>Guimar</p>").openPopup();
var markerH = L.marker([28.14428,-17.21317]).addTo(map).bindPopup("<p>Hermigua</p><div><img src='image/hermigua.png'/></div>").openPopup();
// blijkbaar kan ik ook een functie hier ingeven, deze functie moet dan wel een html element terug geven wat in de overlay gebruikt kan worden
    
//markerLS.bindPopup("Los Silos").openPopup();
//markerG.bindPopup("Guimar").openPopup();
//markerH.bindPopup("Hermigua").openPopup();
//map.closePopup()
  
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.sourceTarget.toString())
        .openOn(map);
}

map.on('click', onMapClick);  

window.addEventListener('load', init);
