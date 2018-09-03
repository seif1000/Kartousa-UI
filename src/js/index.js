import '../scss/main.scss';
import 'bootstrap';


const navbar  = document.querySelector("#navbar");

document.onscroll = function(){
    if(window.pageYOffset>300 ){
        navbar.style.top = '0px';
        navbar.style.opacity = '1';
        navbar.style.position = 'fixed'
        console.log('nj')
    }else{
        navbar.style.top = '-100px';
        navbar.style.opacity = '0';
        navbar.style.position = 'absolute'
    }

    
}
const countDown= document.querySelector(".count");


const launchDate = new Date('dec 31,2019 00:00:00').getTime();


const intvl = setInterval(() => {
  
  const now = new Date().getTime();


  const distance = launchDate - now;


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


 countDown.innerHTML = `
  <div class='d-lg-block' >${days}<span class='mx-3'>:</span></div> 
  <div  >${hours}<span class='mx-3'>:</span></div>
  <div >${mins}<span class='mx-3' >:</span></div>
  <div >${seconds}</div>
  `;

 
  if (distance < 0) {
   
    clearInterval(intvl);
    countDown.style.color = '#17a2b8';
    countDown.innerHTML = 'Launched!';
  }


  
},1000);





