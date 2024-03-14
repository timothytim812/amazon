import {calculateCartQuantity} from '../model/cart.js'

/*Alert*/ 

document.addEventListener('alert', function() {
  var hasAlertBeenShown = localStorage.getItem('alertShown');

  if (!hasAlertBeenShown) {
    alert('This website is to showcase my skill \nNote ! clicking any of the product in homepage will take to a general product page'); 
    localStorage.setItem('alertShown', true);
  }
});

/*  Image Slider  */

const slide = document.getElementsByClassName('slide-img');

let n=0;


function slideshow(){

  for(let i=0; i < slide.length; i++ ){
    slide[i].style.display ='none';
  }
  slide[n].style.display ='block';
}
slideshow()


document.querySelector('.slider-left-btn')
.addEventListener('click',()=>{

  if(n>0){
    n--;
  } else{
    n=slide.length-1;
  }
  slideshow() ;
});

document.querySelector('.slider-right-btn')
.addEventListener('click',()=>{
  if(n<slide.length-1){
    n++;
  } else{
    n=0;
  }
  slideshow() ;
});

/* Item Scroll */

const scroll =document.querySelectorAll('.scroll-products');

for(const item of scroll){
  item.addEventListener('wheel',(event)=>{
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  }
  );
}

function scrollProducts(direction) {
  const scrollContainer = document.querySelector('.scroll-products');
  const scrollAmount = 300; 

  if (direction === 'left') {
    scrollContainer.scrollLeft -= scrollAmount;
  } else if (direction === 'right') {
    scrollContainer.scrollLeft += scrollAmount;
  }
}

/* Item Scroll button */

document.querySelector(".scroll-right").addEventListener('click',()=>{
  scrollProducts('right');
});
document.querySelector(".scroll-left").addEventListener('click',()=>{
  scrollProducts('left');
});

/* Sell Scroll  */

const sell =document.querySelectorAll('.sell-products');

for(const item of sell){
  item.addEventListener('wheel',(event)=>{
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  }
  );
}

function sellProducts(direction) {
  const sellContainer = document.querySelector('.sell-products');
  const sellAmount = 300; 

  if (direction === 'left') {
    sellContainer.scrollLeft -= sellAmount;
  } else if (direction === 'right') {
    sellContainer.scrollLeft += sellAmount;
  }
}

/* Sell Scroll buttons */

document.querySelector(".sell-right").addEventListener('click',()=>{
  sellProducts('right');
});
document.querySelector(".sell-left").addEventListener('click',()=>{
  sellProducts('left');
});

/* Timer */

let duration = [86400,57600,39600];

let timer= [
  document.getElementById('timer1'),
  document.getElementById('timer2'),
  document.getElementById('timer3')
];

for (let i = 0; i < duration.length; i++) {
  startCountdown(timer[i], duration[i]);
}

function startCountdown(timer, duration) {
  let countdownInterval = setInterval(function () {
      let hours = Math.floor(duration / 3600);
      let minutes = Math.floor((duration % 3600) / 60);
      let seconds = duration % 60;

      timer.innerHTML = `${hours}:${minutes}:${seconds}`;

      duration--;

      if (duration < 0) {
          clearInterval(countdownInterval);
          timer.textContent = "Deal End";
      }
  }, 1000);
};


/* Page button redirection to product */ 

const mybutton = document.querySelectorAll(".probtn");

mybutton.forEach(function(button) {
  
  button.addEventListener("click", function() {
    location.href = "product.html";
  });
});


/* Cart Value */ 

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector('#cart-value')
    .innerHTML = cartQuantity;
}

updateCartQuantity()