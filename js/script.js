function init(){
    //alert("init called");
 }

function zoomregio() {
  //kijk welke popup open is
  
}

//alert("js initialized");
var map = L.map('map').setView([37.09,-0.53], 3);  // hele wereld = geo:37.09,-0.53?z=3
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

/*Data vakanties 
formaat: 
latitude, langitude, zoom, regio*/
const vakregio = [
[28.683,  -16.337,  8, "Canarische eilanden"],
[56.502,  -3.9220,  7, "Schotland"],
[39.371,   2.7430,  9, "Mallorca"]
];

var regionaam;
var regiopos;

console.log("length =",vakregio.length);
console.log("depth=", vakregio[0].length);
console.log(vakregio[1][3]);

for (var i = 0; i < vakregio.length; ++i) {
  for (var j = 0; j < vakregio[i].length; ++j) {
    regionaam="<p>"+vakregio[i][3]+"</p>";
    regiopos="["+vakregio[i][0]+","+vakregio[i][1]+"]";
    console.log(regionaam, regiopos)
    L.marker([vakregio[i][0], vakregio[i][1]]).addTo(map).bindPopup(regionaam).openPopup();
  }
}
map.closePopup()

/*Data locaties 
formaat: 
latitude, langitude, plaatsnaam, regio, land, jaartal, maand */
const locaties = [
[28.35221,-16.835699, "Los Silos", "Canarische eilanden", "Spanje", 2025, "April"],
[28.28526,-16.43538 , "Guimar",    "Canarische eilanden", "Spanje", 2025, "April"],
[28.14428,-17.21317 , "Hermigua",  "Canarische eilanden", "Spanje", 2025, "April"] ];

//hier komt de loop over een specifiek regio


/*var markerLS = 
L.marker([28.35221,-16.835699]).addTo(map).bindPopup("<p>Los Silos</p>").openPopup();
var markerG = L.marker([28.28526,-16.43538]).addTo(map).bindPopup("<p>Guimar</p>").openPopup();
var markerH = L.marker([28.14428,-17.21317]).addTo(map).bindPopup("<p>Hermigua</p><div><img src='image/hermigua.png'/></div>").openPopup();
// blijkbaar kan ik ook een functie hier ingeven, deze functie moet dan wel een html element terug geven wat in de overlay gebruikt kan worden

    
//markerLS.bindPopup("Los Silos").openPopup();
//markerG.bindPopup("Guimar").openPopup();
//markerH.bindPopup("Hermigua").openPopup();


// screen size
var w = window.innerWidth;
var h = window.innerHeight;
//alert("Browser width: " + w + ", height: " + h + ".")

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.sourceTarget.toString())
        .openOn(map);
}

map.on('click', onMapClick);  
*/

window.addEventListener('load', init);
window.addEventListenet('click', zoomregio)
