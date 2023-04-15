function callMe(){
    var reveals=document.querySelectorAll("#para");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight-100) {
            reveals[i].style.opacity="1";
            reveals[i].style.transform="translateY(0)";
        }
    }
}
function nowMe(){
    var reveals=document.querySelector("#image");
    var windowHeight = window.innerHeight;
    var elementTop = reveals.getBoundingClientRect().top;
    if (elementTop > windowHeight) {
        reveals.style.opacity="1";
        reveals.style.transform="translateY(0)";
    }
}
window.addEventListener('scroll',callMe);
window.addEventListener('scroll',nowMe);

