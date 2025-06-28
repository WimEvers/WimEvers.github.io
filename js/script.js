//TODO
//
// portrait fotos beter afbeelding (zorg voor correcte aspect ratio)
// icon assignment veel korter opschrijven

// global variables
var lokatieNummer = 0; // = rij in array locaties = vakantiemarker
var fotoSum = 0; // = aantal foto's bij deze vakantiemarker
var ditFotoNummer = 0; //het volgnummer van de nu gedisplayde foto
var regioNummer = -1; // = rij in array vakregio = de gekozen region
var fotocode = "000"; // = locatie[locatienummer][7]

// functies

function init(){
    //alert("init called");
 }
 
// deze functie zoomed in op de kaart en laat dan de details zien

function zoomregioa() {
  //alert("clicked in window")
  debugger;
  regioNummer = -1;
  for (let i = 0;  i< vakregio.length; ++i) {
    if (markerListA[i].isPopupOpen()) {
      regioNummer = i;
      //deleten van de markers
      let markerfound = markerListA[i];
      console.log("markerfound :" + markerfound);
      console.log("markerlist :" + markerListA[i]);
      mymap.removeLayer(markerfound); // werkt nu
    }
    else {
      console.log("popup niet open " + vakregio[i][3]);
    } //end else
  } //end for
  console.log("zoomregioa exit met regioNummer: " + regioNummer)
  if (regioNummer != -1 ){ //geen markers van vakregio open
    let regiodetail = vakregio[regioNummer][3];
    mymap.setView([vakregio[regioNummer][0],vakregio[regioNummer][1]], vakregio[regioNummer][2]);  // deze regio
    console.log("regio selected is " + regiodetail + "vakregio is " + vakregio[regioNummer][3] );
    //hier komt de loop over een specifiek regio, in eerste instantie alleen voor Canarische eilanden
    // TODO uitbreiden met willekeurige regio
    //if (regiodetail == "Canarische eilanden") {
      for (var j = 0; j < locaties.length; j++) {
        if (locaties[j][3] = regiodetail) { // alleen de locaties bij deze vakantie
          iconType = locaties[j][8];
          console.log("regiodetail" + regiodetail + ": " + locaties[j][2]);
          console.log("icon type: ", iconType)
          switch (iconType) {
            case "hotel":
              markerListB[j].setIcon(hotelIcon); //hier juiste icon type neerzetten
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
              console.log("hotelIcon bij: ", locaties[j][2]);
              break;
            case "hiking":
              markerListB[j].setIcon(hikingIcon); //hier juiste icon type neerzetten
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
              console.log("hikingIcon bij: ", locaties[j][2]);
              break;
            case "kloof":
              markerListB[j].setIcon(kloofIcon); //hier juiste icon type neerzetten
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
              console.log("kloofIcon bij: ", locaties[j][2]);
              break;
            case "natpark":
              markerListB[j].setIcon(natparkIcon); //hier juiste icon type neerzetten
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
              console.log("kloofIcon bij: ", locaties[j][2]);
              break;
            case "park":
              markerListB[j].setIcon(parkIcon); //hier juiste icon type neerzetten
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
              console.log("parkIcon bij: ", locaties[j][2]);
              break;
            case "museum":
              markerListB[j].setIcon(museumIcon); //hier juiste icon type neerzetten
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
              console.log("museumIcon bij: ", locaties[j][2]);
              break;
            default:
              markerListB[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?
          } // end switch     
          mymap.closePopup();
        } // end if
      } // end for
    } //end if
  //document.getElementById("map").removeEventListener()
  document.getElementById("map").addEventListener("click", zoomregiob); // wacht tot de gebruiker op een van de nieuwe markers klikt
} // end functie
 // laat een of meerdere foto zien die erbij horen
 
function zoomregiob() { 
  console.log("in zoomregiob")
  for (var i = 0;  i < locaties.length; ++i) {
    console.log("aantal locaties: " + locaties.length)
    console.log("checking [" + i + "]: " + markerListB[i])
    if (markerListB[i].isPopupOpen()) {
      lokatieNummer = i
      console.log("popup [" + i + "]: open");
      fotocode = locaties[i][7];
      toonAlleFotos()
    }
  }
}

function toonAlleFotos() 
{
  fotocode = locaties[lokatieNummer][7];
  console.log("alle foto's bij fotocode :" + fotocode + " locatie element: " + lokatieNummer)
  //check aantal foto's
  // bepalen aantal fotos bij fotocode (indexOf werkt niet bij 2D array)
  let count; //number van de foto die moet worden gezien
  debugger;
  fotoSum = locaties[lokatieNummer][9]// 0  tm fotoaantal
  console.log("aantal foto's: ",fotoSum);
  console.log("er zijn " + fotoSum + " fotos bij fotocode " + fotocode)
  let vakantiePlaatsJaar = document.getElementById("fototext");
  alttext = locaties[lokatieNummer][2] + ", " + locaties[lokatieNummer][5];
  console.log(alttext);
  vakantiePlaatsJaar.innerHTML = alttext;
  if (fotoSum > 0) 
  {
    //stop button laten zien
    buttonStop = document.getElementById("stop");
    buttonStop.style.display = "block"
    ditFotoNummer = 0;
    if (fotoSum > 1) 
    {
      // er zijn meer dan 1 fotos, nog 2 buttons zichtbaar maken
      let buttonPrev = document.getElementById("prev");
      buttonPrev.style.display = "block";
      let buttonNext = document.getElementById("next");
      buttonNext.style.display = "block";
    }
    let  fotoBeschrijving = document.getElementById("onderschrift");
    alttext = locaties[lokatieNummer][2] + ", " + locaties[lokatieNummer][5];
    console.log(alttext);
    fotoBeschrijving.innerHTML = alttext;
    // juiste plaatje
    showFoto()
    // zichtbaar maken
    let imarea = document.getElementById("imagearea")
    imarea.style.zIndex = "5";
  }
}
 
// functies bij de foto buttons

function stop() // venster met fotos sluiten
{
  let imarea = document.getElementById("imagearea")
  console.log("stop called")
  imarea.style.zIndex = "2";
  document.getElementById("prev").style.display = "none";
  document.getElementById("next").style.display = "none";
  mymap.closePopup();
  //document.getElementById("map").addEventListener("click", zoomregioa); // wacht tot de gebruiker op een marker klikt in de map-area
}

function next() // volgende foto tonen
{
  console.log("next - count = ",ditFotoNummer)
  if (ditFotoNummer < fotoSum - 1) 
  {
    ditFotoNummer = ditFotoNummer + 1;
    showFoto();
  }
}
function prev() // vorige foto tonen
{
  console.log("prev - count = ",ditFotoNummer)
  if(ditFotoNummer > 0) 
  {
    ditFotoNummer = ditFotoNummer - 1;
    showFoto();
  }
}
function showFoto() //foto met fotocode en ditFotoNummer laten zien
{
  let fotoimage = document.getElementById("foto");
  console.log(fotoimage.scr);
  fotocode = locaties[lokatieNummer][7]
  fotoimage.src = "image/" + fotocode + ditFotoNummer +".png";
  fotoimage.alt = locaties[lokatieNummer][2] + ", " + locaties[lokatieNummer][5];
  // fotobeschrijving uit array fototext halen
  let filename = fotocode + ditFotoNummer;
  let index = -1;
  for (let j = 0; j < fotoText.length; j++) {
    if (fotoText[j][0] == filename) {
      document.getElementById("onderschrift").innerHTML = fotoText[j][1];
      break;
    }
  }
} 

// icons LEVEL 1
// blauw        Kleur R 58,   G 197, B 199
var vakantieIcon = L.icon({
    iconUrl: "mapicons/vakantie.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
var tripIcon = L.icon({
    iconUrl: "mapicons/trip.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
var dagtochtIcon = L.icon({
    iconUrl: "mapicons/dagtocht.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});

// icons LEVEL 2
// licht groen  Kleur R 103,  G 197, B 71  https://mapicons.mapsmarker.com/
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
var kloofIcon = L.icon({
    iconUrl: "mapicons/canyon.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
var bosIcon = L.icon({
    iconUrl: "mapicons/forest.png",
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
var natparkIcon = L.icon({
    iconUrl: "mapicons/natpark.png", //national park
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
var parkIcon = L.icon({
    iconUrl: "mapicons/park.png", //national park
    iconSize:     [38, 44], // size of the icon
    iconAnchor:   [19, 44], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});
console.log("icons defined");  
// icons toevoegen aan legenda
debugger;
/*
let legenda = document.getElementById("legenda")
let addeddiv = document.createElement('div');
addeddiv.id = "div" + 1;
let img = document.createElement('img');
img.src ="mapicons/hotel.png";
img.title = "Hotel";
addeddiv.appendChild(img);
addeddiv = document.createElement('div');
addeddiv.id = "div" + 2;
let txt = document.createElement("p")
txt.innerHTML = "Hotel, B&B";
addeddiv.appendChild(txt);
*/
let img = document.createElement('img');
img.src ="mapicons/hotel.png";
img.title = "Hotel";
document.getElementById("img1").appendChild(img);
let txt = document.createElement("p")
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
img.src ="mapicons/miclogo.gif";
img.title = "Source";
document.getElementById("bron").appendChild(img);

// initialisatie van de wereld map

var mymap = L.map('map').setView([10.0,15.0], 3);  // hele wereld = geo:37.09,-0.53?z=3

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);

// lijst van alle regio's

let regionaam;
let regiofound = "none";
const markerListA = [];
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
  markerA.addTo(mymap).bindPopup(locaties[j][2]).openPopup(); //openPopup kan weg?  
  markerListA.push(markerA);
};
mymap.closePopup()
console.log("markerlist a defined "+markerListA.length+" items");

//lijst van alle locatiemarkers

const markerListB = [];
for (let j = 0; j < locaties.length; ++j) {
    let locatienaam = "<p>" + locaties[lokatieNummer][2] + "</p>";
    console.log(locatienaam);
    markerB = L.marker([locaties[j][0], locaties[j][1]]);//.addTo(mymap).bindPopup(locatienaam).openPopup();
    markerListB.push(markerB);
};
mymap.closePopup() // is dit nog nodig
console.log("markerlist b defined "+markerListB.length+" items");

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
    
let popup = L.popup();

/*function onMapClick(e) 
{
   popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.sourceTarget.toString())
    .openOn(mymap); 
} */
// eventlisteners aanzetten

mymap.on('click', stop);  
window.addEventListener('load', init); // nog niet in gebruik

document.getElementById("map").addEventListener("click", zoomregioa); // wacht tot de gebruiker op een marker klikt in de map-area

document.getElementById("prev").addEventListener("click", prev);
document.getElementById("next").addEventListener("click", next);
document.getElementById("stop").addEventListener("click",stop); // knoppen bij de foto's




