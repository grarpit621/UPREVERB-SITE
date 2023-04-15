function fadeout(){
    var load=document.querySelector('#loader');
    var site=document.querySelector('.notLoaded');
    site.style.overflow="scroll";
    load.remove();
}
  window.setTimeout('fadeout();', 1000);
  