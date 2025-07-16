// functies

function init(){
    //alert("init called");
 }
 
// deze functie zoomed in op de kaart en laat dan de details zien

function zoomregioa() {
  //alert("clicked in window")
  console.log("zoomregioa entered with detailLevel: " + detailLevel)
  regioNummer = -1;
  for (let i = 0;  i< vakregio.length; ++i) {
    if (markerLevel1[i].isPopupOpen()) {
      regioNummer = i;
      break;
    }
    else {
      console.log("popup niet open " + vakregio[i][3]);
    } //end else
  } //end for 
  //deleten van all level 1 markers
  if(regioNummer != -1) {
    for (let i = 0;  i< vakregio.length; ++i) { mymap.removeLayer(markerLevel1[i]); }; //end for
  }
  console.log("zoomregioa exit met regioNummer: " + regioNummer)
  if (regioNummer != -1 ){ //geen markers van vakregio open
    let regiodetail = vakregio[regioNummer][3];
    mymap.setView([vakregio[regioNummer][0],vakregio[regioNummer][1]], vakregio[regioNummer][2]);  // deze regio
    console.log("regio selected is " + regiodetail + "vakregio is " + vakregio[regioNummer][3] );
    for (let j = 0; j < locaties.length; j++) {
      if (locaties[j][3] == regiodetail) { // alleen de locaties bij deze vakantie
        markerLevel2[j].addTo(mymap).bindPopup(locaties[j][2]).openPopup();
      } // end if
    } // end for
    mymap.closePopup();
  } //end if
  document.getElementById("legendalevel1").style.zIndex = "2";
  document.getElementById("legendalevel2").style.zIndex = "5";
  document.getElementById("map").addEventListener("click", zoomregiob); // wacht tot de gebruiker op een van de nieuwe markers klikt
  detailLevel = 2;
} // end functie
 // laat een of meerdere foto zien die erbij horen
 
function zoomregiob() { 
  console.log("in zoomregiob")
  for (let i = 0;  i < locaties.length; ++i) {
    console.log("aantal locaties: " + locaties.length)
    console.log("checking [" + i + "]: " + markerLevel2[i])
    if (markerLevel2[i].isPopupOpen()) {
      lokatieNummer = i
      console.log("popup [" + i + "]: open");
      toonAlleFotos()
      break;
    }
  }
}

function toonAlleFotos() {
  fotocode = locaties[lokatieNummer][7];
  console.log("alle foto's bij fotocode :" + fotocode + " locatie element: " + lokatieNummer)
  //check aantal foto's
  // bepalen aantal fotos bij fotocode (indexOf werkt niet bij 2D array)
  let count; //number van de foto die moet worden gezien
  fotoSum = locaties[lokatieNummer][9]// 0  tm fotoaantal
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

  }
}

function showFoto() //foto met fotocode en ditFotoNummer laten zien
{
  let fotoimage = document.getElementById("foto");
  fotocode = locaties[lokatieNummer][7]
  // fotobeschrijving uit array fototext halen
  let filename = fotocode + ditFotoNummer;
  let index = -1;
  for (let j = 0; j < fotoText.length; j++) {
    if (fotoText[j][0] == filename) {
      document.getElementById("onderschrift").innerHTML = fotoText[j][3];
      fotoimage.src = "image/" + fotocode + ditFotoNummer + "." + fotoText[j][4]
      fotoimage.alt = locaties[lokatieNummer][2] + ", " + locaties[lokatieNummer][5];
      index = j
      break;
    }
  }
  // zichtbaar maken
  let imarea = document.getElementById("imagearea")
  imarea.style.zIndex = "5";
  // venstergrootte is afhankelijk van de aspect ratio van de foto zelf (portrait of landscape)
  debugger;
  console.log("image: "+ fotoimage.src + "size  w: " + fotoimage.naturalWidth + " height: " + fotoimage.naturalHeight);
  //newwidth = fotoText[index][1];
  //newheight = fotoText[index][2];
  //fotoimage.width = fotoText[index][1]; 
  //fotoimage.height = fotoText[index][2];
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

