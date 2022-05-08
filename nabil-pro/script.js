const body = document.body;
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

const setBackground = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
};



function prev() {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  setBackground();
  setActiveSlide();
}

function next() {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  setBackground();
  setActiveSlide();
}
function start(){
  t= setInterval('next()',2000)
}
function stop(){
  clearInterval(t)
}
  

setBackground();



