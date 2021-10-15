
let slider = document.querySelectorAll('#slide-section .slides');
let h1 = document.querySelector('.slides h1');
let slidesec = document.getElementById('slide-section');
let index = 0;

function next() {
    slider[index].classList.remove('active');
    index = (index + 1) % slider.length;
    slider[index].classList.add('active');
    h1.classList.add('up');

}


function prev() {
    slider[index].classList.remove('active');
    index = (index - 1 + slider.length) % slider.length;
    slider[index].classList.add('active');
}

setInterval(next, 5000);

function show() {

    let scroll = window.scrollY;
  

    if (scroll > 200) {

        document.getElementById('scroll-btn').style.display = "block";
        
    }


    if(scroll > 210){
        document.getElementById('nav-section2').classList.add('down');      
        document.getElementById('nav-section2').style.boxShadow="0 0 15px grey";
        
    }else{
document.getElementById('nav-section2').classList.remove('down');      
              document.getElementById('nav-section2').style.boxShadow="0 0 0px grey";
        
            }
        


    if (scroll < 180) {
        document.getElementById('scroll-btn').style.display = "none";




    }


}

let slider2 = document.querySelectorAll('.slider2 .sliders2');
let indexed = 0;

function next2() {
    slider2[indexed].classList.remove('actived');
    indexed = (indexed + 1) % slider2.length;
    slider2[indexed].classList.add('actived');
    let dot2 = document.getElementById('dot2');
    let dot1 = document.getElementById('dot1');


    if (indexed == 0) {

        dot1.style.backgroundColor = "rgb(8, 175, 64)";
    }

else {

    dot1.style.backgroundColor = "white";


}



    if (indexed == 1) {

        dot2.style.backgroundColor = "rgb(8, 175, 64)";
    } else {

        dot2.style.backgroundColor = "white";

    }


}



// setInterval(next2, 5000)


function first() {

    slider2[0].classList.add('actived');
    slider2[1].classList.remove('actived');

}


function second() {


    slider2[1].classList.add('actived');
    slider2[0].classList.remove('actived');


}



setInterval(next2,5000);


let menu=document.querySelector('.menu');
menu.addEventListener('click',function(){

    let popup=document.getElementById('popup');
    let details=document.getElementById('section');
    let body=document.getElementById('body');
    let full=document.getElementById('full');
if(popup.style.height == "0px"){
popup.style.height="400px";
popup.style.borderBottom="1px solid grey";
details.style.display="block";
body.style.overflowY="hidden";
full.style.filter="brightness(20%)";

}else{
    popup.style.height="0px";
details.style.display="none";
body.style.overflowY="visible";
popup.style.borderBottom="none";
full.style.filter="none";



}



});

