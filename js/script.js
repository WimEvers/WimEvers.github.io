function init(){
    //alert("init called");
 }

function zoomregioa() {
  alert("clicked in window")
  for (var i =0;  i< vakregio.length; ++i) {
    if (markerlist[i].isPopupOpen()) {
      var regiodetail = vakregio[i][3]
      alert("regio selected is " + regiodetail)
      //hier komt de loop over een specifiek regio, in eerste instantie alleen voor Canarische eilanden
      if (regiodetail = "Canarische eilanden") {
        alert("in if statement")
        //mymap.setView([28.683,-16.337], 8);
        mymap.setView([vakregio[i][0],vakregio[i][1]], vakregio[i][2]);  // deze regio
      }
    }
    else {
      console.log("popup niet open "+vakregio[i][3])
    }
  }
}
  /*//kijk welke popup open is
  // Welke regio is popup open?
  if(marker.isPopupOpen()) {
  // do something
  }
  else {
    // do nothing
  }
} */

//alert("js initialized");
var mymap = L.map('map').setView([10.0,15.0], 3);  // hele wereld = geo:37.09,-0.53?z=3
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);

/*Data vakanties 
formaat: 
latitude, langitude, zoom, regio*/
const vakregio = [
[28.683,  -16.337,  9, "Canarische eilanden"],
[56.502,  -3.9220,  7, "Schotland"],
[39.371,   2.7430,  9, "Mallorca"]
];

var regionaam;
var regiofound = "none";

const markerlist = [];
console.log(markerlist.length)
for (var i = 0; i < vakregio.length; ++i) {
    regionaam="<p>"+vakregio[i][3]+"</p>";
    console.log(regionaam);
    markerA = L.marker([vakregio[i][0], vakregio[i][1]]).addTo(mymap).bindPopup(regionaam).openPopup();
    console.log(markerA)
    markerlist.push(markerA);
}

console.log(markerlist.length)

mymap.closePopup()

/*Data locaties 
formaat: 
latitude, langitude, plaatsnaam, regio, land, jaartal, maand */
const locaties = [
[28.35221,-16.835699, "Los Silos", "Canarische eilanden", "Spanje", 2025, "April"],
[28.28526,-16.43538 , "Guimar",    "Canarische eilanden", "Spanje", 2025, "April"],
[28.14428,-17.21317 , "Hermigua",  "Canarische eilanden", "Spanje", 2025, "April"] ];



// screen size
var w = window.innerWidth;
var h = window.innerHeight;
//alert("Browser width: " + w + ", height: " + h + ".")

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.sourceTarget.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);  


window.addEventListener('load', init);
document.getElementById("map").addEventListener("click", zoomregioa);


