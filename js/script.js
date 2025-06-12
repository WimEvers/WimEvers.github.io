function init(){
    //alert("init called");
 }
// deze functie zoomed in op de kaart en laat dan de details zien
function zoomregioa() {
  //alert("clicked in window")
  for (var i = 0;  i< vakregio.length; ++i) {
    if (markerlista[i].isPopupOpen()) {
      //deleten van de marker
      var markerfound = markerlista[i];
      console.log("markerfound :" + markerfound)
      console.log("markerlist :" + markerlista[i])
      mymap.removeLayer(markerfound); // werkt nu
      var regiodetail = vakregio[i][3];
      console.log("regio selected is " + regiodetail);
      //hier komt de loop over een specifiek regio, in eerste instantie alleen voor Canarische eilanden
      if (regiodetail = "Canarische eilanden") {
        console.log("in if statement");
        mymap.setView([vakregio[i][0],vakregio[i][1]], vakregio[i][2]);  // deze regio
        for (var j = 0; j < locaties.length; j++) {
          if (locaties[j][3] = regiodetail) {
            console.log("regiodetail" + regiodetail + ": " + locaties[j][2])
            markerlistb[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
            //markerB = L.marker([locaties[j][0], locaties[j][1]]).addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
          }
        }
      mymap.closePopup()  
      }
    }
    else {
      console.log("popup niet open " + vakregio[i][3])
    }
  }
  console.log("event listener zoomregiob aangezet")
  document.getElementById("map").addEventListener("click", zoomregiob); // wacht tot de gebruiker op een van de nieuwe markers klikt
}

function zoomregiob() {
  console.log("in zoomregiob")
  // laat een of meerdere foto zien die erbij horen
  for (var i = 0;  i < locaties.length; ++i) {
    console.log("aantal locaties: " + locaties.length)
    console.log("checking [" + i + "]: " + markerlistb[i])
    if (markerlistb[i].isPopupOpen()) {
      console.log("popup [" + i + "]: open");
      fotocode = locaties[i][8];
      // text bij foto
      let fotodes = document.getElementById("fototext'");
      alttext = locaties[i][2] + ", " + locaties[i][5];
      console.log(alttext);
      fotodes.innerHTML = alttext;
      // juiste plaatje
      let fotoimage = document.getElementById("foto");
      console.log(fotoimage.scr);
      fotoimage.src = "/image/GHM.png";
      fotoimage.alt = alttext
      // zichtbaar maken
      let imarea = document.getElementById("imagearea")
      console.log("z-index imagearea: ", imarea.style.zIndex)
      imarea.style.zIndex = "5";
      console.log("z-index imagearea: ", imarea.style.zIndex)


      //fotoimage.innerHTML = alttext;
    }
  }
}

/*Data vakanties 
formaat: (0)latitude, (1)langitude, (2)zoom, (3)regio*/
const vakregio = [
[28.276,  -16.9409,  10, "Canarische eilanden"], 
[56.502,   -3.9220,   7, "Schotland"],
[39.371,    2.7430,   9, "Mallorca"]
];

/*Data locaties 
formaat: (0)latitude, (1)langitude, (2)plaatsnaam, (3)regio, (4)land, (5)jaartal, (6)maand, (7)fotocode */
const locaties = [
[28.35221,-16.835699, "Los Silos", "Canarische eilanden", "Spanje", 2025, "April", "TLS"],
[28.28526,-16.43538 , "Guimar",    "Canarische eilanden", "Spanje", 2025, "April", "TGM"],
[28.14428,-17.21317 , "Hermigua",  "Canarische eilanden", "Spanje", 2025, "April", "GHG"] ];

//alert("js initialized");
// initialisatie van de wereld map

var mymap = L.map('map').setView([10.0,15.0], 3);  // hele wereld = geo:37.09,-0.53?z=3
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);

var regionaam;
var regiofound = "none";

const markerlista = [];
for (var i = 0; i < vakregio.length; ++i) {
    regionaam="<p>"+vakregio[i][3]+"</p>";
    console.log(regionaam);
    markerA = L.marker([vakregio[i][0], vakregio[i][1]]).addTo(mymap).bindPopup(regionaam).openPopup();
    console.log("marker :" + markerA)
    markerlista.push(markerA);
}
mymap.closePopup()
console.log("length markerlist a: " + markerlista.length)

var locatienaam;

const markerlistb = [];
for (var i = 0; i < locaties.length; ++i) {
    locatienaam = "<p>" + locaties[i][2] + "</p>";
    console.log(locatienaam);
    markerB = L.marker([locaties[i][0], locaties[i][1]])//.addTo(mymap).bindPopup(locatienaam).openPopup();
    console.log("marker :" + markerB);
    markerlistb.push(markerB);
}

mymap.closePopup()
console.log("length markerlist b: " + markerlistb.length)



/* screen size
var w = window.innerWidth;
var h = window.innerHeight;
const navheight = 28+'px';
const footerheight = 20+'px';
//alert("Browser width: " + w + ", height: " + h + ".");
  var el = document.getElementById("mymap");
  if (el) {
    el.style.height = h - navheight - footerheight;
    el.style.width = w;
      //el.style.height = ""+h+"px";
    } */
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.sourceTarget.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);  


window.addEventListener('load', init); // nog niet in gebruik

document.getElementById("map").addEventListener("click", zoomregioa); // wacht tot de gebruiker op een marker klikt


