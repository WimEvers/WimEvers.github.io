//TODO
//
// portrait fotos beter afbeelding (zorg voor correcte aspect ratio)
// icon assignment veel korter opschrijven

// global variables
let lokatieNummer = 0; // = rij in array locaties = vakantiemarker
let fotoSum = 0; // = aantal foto's bij deze vakantiemarker
let ditFotoNummer = 0; //het volgnummer van de nu gedisplayde foto
let regioNummer = -1; // = rij in array vakregio = de gekozen region
let fotocode = "000"; // = locatie[locatienummer][7]
let detailLevel = 1; // = inzoom level
// icons
// class definition
myIcons = L.Icon.extend({
  options: {
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
  }
});
// icons LEVEL 1
// blauw        Kleur R 58,   G 197, B 199 https://mapicons.mapsmarker.com/
let vakantieIcon = new myIcons({iconUrl: "mapicons/vakantie.png"});
let tripIcon = L.icon({iconUrl: "mapicons/trip.png"});
let dagtochtIcon = L.icon({iconUrl: "mapicons/dagtocht.png"});
// icons LEVEL 2
// licht groen  Kleur R 103,  G 197, B 71  https://mapicons.mapsmarker.com/
let hotelIcon = L.icon({iconUrl: "mapicons/hotel.png"});
let hikingIcon = L.icon({iconUrl: "mapicons/hiking.png"});
let kloofIcon = L.icon({iconUrl: "mapicons/canyon.png"});
let bosIcon = L.icon({iconUrl: "mapicons/forest.png"});
let natparkIcon = L.icon({iconUrl: "mapicons/natpark.png"});
let parkIcon = L.icon({iconUrl: "mapicons/park.png"});
let stadjeIcon = L.icon({iconUrl: "mapicons/stadje.png"})
let fietsenIcon = L.icon({iconUrl: "mapicons/bicycle.png"})
console.log("icons defined");  

// icons toevoegen aan legenda
debugger;

//Level 1
let img = document.createElement('img');
img.src ="mapicons/vakantie.png";
img.title = "Vakantie";
document.getElementById("img11").appendChild(img);
let txt = document.createElement("p")
txt.innerHTML = " Vakantie";
document.getElementById("txt11").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/trip.png";
img.title = "Trip";
document.getElementById("img12").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Trip";
document.getElementById("txt12").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/dagtocht.png";
img.title = "Dagtocht";
document.getElementById("img13").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Dagtocht";
document.getElementById("txt13").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/miclogo.gif";
img.title = "Source";
document.getElementById("bron1").appendChild(img);

//level 2
img = document.createElement('img');
img.src ="mapicons/hotel.png";
img.title = "Hotel";
document.getElementById("img1").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Hotel, B&B";
document.getElementById("txt1").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/hiking.png";
img.title = "Wandeling";
document.getElementById("img2").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Wandeling";
document.getElementById("txt2").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/canyon.png";
img.title = "Kloof";
document.getElementById("img3").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Kloof";
document.getElementById("txt3").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/natpark.png";
img.title = "National Park";
document.getElementById("img4").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "National Park";
document.getElementById("txt4").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/park.png";
img.title = "Park/Tuin";
document.getElementById("img5").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Park/Tuin";
document.getElementById("txt5").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/museum.png";
img.title = "Museum";
document.getElementById("img6").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Museum";
document.getElementById("txt6").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/stadje.png";
img.title = "Stadje";
document.getElementById("img7").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "Stadje";
document.getElementById("txt7").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/bicycle.png";
img.title = "fietsen";
document.getElementById("img8").appendChild(img);
txt = document.createElement("p")
txt.innerHTML = "fietsen";
document.getElementById("txt8").appendChild(txt);

img = document.createElement('img');
img.src ="mapicons/miclogo.gif";
img.title = "Source";
document.getElementById("bron2").appendChild(img);

// initialisatie van de wereld map

let mymap = L.map('map').setView([10.0,15.0], 3);  // hele wereld = geo:37.09,-0.53?z=3

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);

// lijst van alle regio's, vullen van de markers

let regionaam;
let regiofound = "none";
const markerLevel1 = [];
for (let j = 0; j < vakregio.length; ++j) {
  regionaam="<p>"+vakregio[j][3]+"</p>";
  markerA = L.marker([vakregio[j][0], vakregio[j][1]]);
  iconType = vakregio[j][4];
  console.log("regionaam:" + regionaam + "icon type: " + iconType );
  switch (iconType) {
    case "vakantie":
      markerA.setIcon(vakantieIcon); //hier juiste icon type neerzetten
      break;
    case "trip":
      markerA.setIcon(tripIcon); //hier juiste icon type neerzetten
      break;  
    case "dagtocht":
      markerA.setIcon(dagtochtIcon); //hier juiste icon type neerzetten
      break;
    default: // hier geen explicite default
  }
  console.log(iconType + "Icon bij: ", vakregio[j][2]);
  markerA.addTo(mymap).bindPopup(vakregio[j][3]).openPopup(); //openPopup kan weg?  
  markerLevel1.push(markerA);
};
mymap.closePopup()
console.log("markerlist level1 defined "+markerLevel1.length+" items");

//lijst van alle locaties, vullen van de markers

const markerLevel2 = [];
for (let j = 0; j < locaties.length; ++j) {
    let locatienaam = "<p>" + locaties[j][2] + "</p>";
    console.log(locatienaam);
    markerB = L.marker([locaties[j][0], locaties[j][1]]);
    iconType = locaties[j][8];
    console.log("regiodetail" + locatienaam + "icon type: " + iconType);
    switch (iconType) {
      case "hotel":
        markerB.setIcon(hotelIcon); //hier juiste icon type neerzetten
        break;
      case "hiking":
        markerB.setIcon(hikingIcon); //hier juiste icon type neerzetten
        break;
      case "kloof":
        markerB.setIcon(kloofIcon); //hier juiste icon type neerzetten
        break;
      case "natpark":
        markerB.setIcon(natparkIcon); //hier juiste icon type neerzetten
        break;
      case "park":
        markerB.setIcon(parkIcon); //hier juiste icon type neerzetten
        break;
      case "museum":
        markerB.setIcon(museumIcon); //hier juiste icon type neerzetten
        break;
      case "stadje":
        markerB.setIcon(stadjeIcon); //hier juiste icon type neerzetten
        break;
      case "fietsen":
        markerB.setIcon(fietsenIcon); //hier juiste icon type neerzetten
        break;
      default:
    } // end switch     
    markerLevel2.push(markerB);
};
console.log("markerlist level 2 defined "+markerLevel2.length+" items");

mymap.closePopup() // is dit nog nodig

// zetten van de hoofdlevel markers op de map

if (detailLevel == 1) { 
  for (j = 0; j < markerLevel1.length; j++) { 
    markerLevel1[j].addTo(mymap).bindPopup(vakregio[j][3]); 
  };
}
/* screen size
let w = window.innerWidth;
let h = window.innerHeight;
const navheight = 28+'px';
const footerheight = 20+'px';
//alert("Browser width: " + w + ", height: " + h + ".");
  let el = document.getElementById("mymap");
  if (el) {
    el.style.height = h - navheight - footerheight;
    el.style.width = w;
      //el.style.height = ""+h+"px";
    } */
    
let popup = L.popup();

/*function onMapClick(e) 
{
   popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.sourceTarget.toString())
    .openOn(mymap); 
} */
// eventlisteners aanzetten

//mymap.on('click', stop);  

window.addEventListener('load', init); // nog niet in gebruik

document.getElementById("map").addEventListener("click", zoomregioa); // wacht tot de gebruiker op een marker klikt in de map-area

document.getElementById("prev").addEventListener("click", prev);
document.getElementById("next").addEventListener("click", next);
document.getElementById("stop").addEventListener("click",stop); // knoppen bij de foto's




