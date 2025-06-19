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
            console.log("regiodetail" + regiodetail + ": " + locaties[j][2]);
            switch (locaties[j][8]) {
              case "hotel":
                markerlistb[j].setIcon(hotelIcon); //hier juiste icon type neerzetten
                markerlistb[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
                console.log("hotelIcon bij: ", locaties[i][2]);
              default:
                markerlistb[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
            }         
          } // end if
        } //end for loop
      mymap.closePopup();
      } // end if
    } // end if
    else {
      console.log("popup niet open " + vakregio[i][3]);
    }
  }
  //console.log("event listener zoomregiob aangezet")
  document.getElementById("map").addEventListener("click", zoomregiob); // wacht tot de gebruiker op een van de nieuwe markers klikt
}
 // laat een of meerdere foto zien die erbij horen
function zoomregiob() { 
  console.log("in zoomregiob")
  for (var i = 0;  i < locaties.length; ++i) {
    console.log("aantal locaties: " + locaties.length)
    console.log("checking [" + i + "]: " + markerlistb[i])
    if (markerlistb[i].isPopupOpen()) {
      console.log("popup [" + i + "]: open");
      fotocode = locaties[i][7];
      toonAlleFotos(fotocode, i)
    }
  }
}

function toonAlleFotos(fotocode, i) {
  console.log("alle foto's bij fotocode :" + fotocode + " locatie element: " + i)
       //check aantal foto's
  var count = 0;
  fotofound = true;
  var urlImage;
  while (fotofound) {
    console.log(fotofound + " count: " + count);
    var image = new Image();
    urlImage = 'image/' + fotocode + count + '.png';
    console.log("checking image " + urlImage);
    image.src = urlImage;
    console.log("image " + urlImage + " width " + image.width);
    if (image.width == 0) { 
      fotofound = false;
      console.log("image " + urlImage + " not found");
      } 
    else { 
      fotofound = true; 
      console.log("image " + urlImage + " found");
      }
    count = count + 1;
    if (count == 5) {
      fotofound = false;
    }
  }
  count = count - 1; // de laatste foto was er niet
  // als count niet nul is moeten de button next en previous er komen
  console.log("er zijn " + count + " fotos bij fotocode " + fotocode)
  let vakantiePlaatsJaar = document.getElementById("fototext");
  alttext = locaties[i][2] + ", " + locaties[i][5];
  console.log(alttext);
  vakantiePlaatsJaar.innerHTML = alttext;
  let  fotoBeschrijving = document.getElementById("onderschrift");
  // TODO fotobeschrijving uit filenaam halen, wordt moeilijk
  alttext = locaties[i][2] + ", " + locaties[i][5];
  console.log(alttext);
  fotoBeschrijving.innerHTML = alttext;
  // juiste plaatje
  let fotoimage = document.getElementById("foto");
  console.log(fotoimage.scr);
  fotoimage.src = "image/" + fotocode + 0 +".png";
  fotoimage.alt = alttext
  console.log(fotoimage.scr);
  // zichtbaar maken
  let imarea = document.getElementById("imagearea")
  imarea.style.zIndex = "5";
}
 
// functies bij de foto buttons
function stop() {
  let imarea = document.getElementById("imagearea")
  imarea.style.zIndex = "2";
  mymap.closePopup();
}

function volgende() {
}

function vorige () {
}

// initialisatie van de wereld map

var mymap = L.map('map').setView([10.0,15.0], 3);  // hele wereld = geo:37.09,-0.53?z=3

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);
  
// icons
var hotelIcon = L.icon({
    iconUrl: "mapicons/hotel.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
var hikingIcon = L.icon({
    iconUrl: "mapicons/hiking.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
console.log("icons defined");

/*Data vakanties 
formaat: (0)latitude, (1)langitude, (2)zoom, (3)regio*/
const vakregio = [
[28.276,  -16.9409,  10, "Canarische eilanden"], 
[56.502,   -3.9220,   7, "Schotland"],
[39.371,    2.7430,   9, "Mallorca"]];

var regionaam;
var regiofound = "none";
const markerlista = [];
for (var i = 0; i < vakregio.length; ++i) {
    regionaam="<p>"+vakregio[i][3]+"</p>";
    console.log(regionaam);
    markerA = L.marker([vakregio[i][0], vakregio[i][1]]).addTo(mymap).bindPopup(regionaam).openPopup();
    console.log("marker A:" + markerA);
    markerlista.push(markerA);
};
mymap.closePopup()
console.log("markerlist a defined "+markerlista.length+" items");

/*Data locaties 
formaat: (0)latitude, (1)langitude, (2)plaatsnaam, (3)regio, (4)land, (5)jaartal, (6)maand, (7)fotocode (8) icon*/
const locaties = [
[28.35221,  -16.835699, "Los Silos", "Canarische eilanden", "Spanje", 2025, "April", "TLS", "hotel"],
[28.28526,  -16.43538 , "Guimar", "Canarische eilanden", "Spanje", 2025, "April", "TGM", "hotel"],
[28.14428,  -17.21317 , "Hermigua", "Canarische eilanden", "Spanje", 2025, "April", "GHG", "hotel"],
[28.185232, -17.200588, "Camino de los Pasos",  "Canarische eilanden", "Spanje", 2025, "April", "WAG", "hiking"] ]

const markerlistb = [];
for (var i = 0; i < locaties.length; ++i) {
    var locatienaam = "<p>" + locaties[i][2] + "</p>";
    console.log(locatienaam);
    markerB = L.marker([locaties[i][0], locaties[i][1]]);//.addTo(mymap).bindPopup(locatienaam).openPopup();
    markerlistb.push(markerB);
};
mymap.closePopup() // is dit nog nodig
console.log("markerlist b defined "+markerlistb.length+" items");



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
// eventlisteners aanzetten

mymap.on('click', onMapClick);  
window.addEventListener('load', init); // nog niet in gebruik
document.getElementById("map").addEventListener("click", zoomregioa); // wacht tot de gebruiker op een marker klikt in de map-area


