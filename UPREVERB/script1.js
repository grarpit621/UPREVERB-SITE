function details(){
    des.style.opacity="1";
}
function detail(){
    des.style.opacity="0";
}
var des=document.querySelector('#des');
var pic=document.querySelector('#pic9');
pic.addEventListener('mouseover',details);
pic.addEventListener('mouseout',detail);
