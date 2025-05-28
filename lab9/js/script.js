function init(){

  var button = document.getElementById('entrybutton');

  var h2out = document.getElementById('textoutput');

  var fc = document.getElementById('entryinput');

  var toutp = "Wim Evers: "
  
  function myfunction() {
    alert(toutp+fc.value);
  }
  
  button.addEventListener('click',function(){
    var outtext = toutp + fc.value;
    h2out.innerHTML = fc.value;
    });
  
  button.addEventListener('click',myfunction);
}
alert("alert before load")
window.addEventListener('load', init);
