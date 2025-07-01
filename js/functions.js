/*Funcion para carousel*/
const slides = document.querySelectorAll(".carousel__slide");
const prevBtn = document.querySelector(".carousel__btn.prev");
const nextBtn = document.querySelector(".carousel__btn.next");
let currentIndex = 0;
let autoplayInterval = null;

function showSlides(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlides(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlides(currentIndex);
}

// Botones manuales
if(prevBtn && nextBtn ) {
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });
};

// Autoplay
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 6000); // cambia cada 4 segundos
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

showSlides(currentIndex);
startAutoplay();

/*Desplegar el menu*/
const imgMenu = document.querySelector(".header__img-menu");
const nav = document.querySelector(".header__nav");

imgMenu.addEventListener('mouseover', () => {
  nav.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !imgMenu.contains(e.target)) {
    nav.classList.remove("show");
  }
});

/*Desplegar servicios del footer*/
const servicesMenu = document.querySelector(".socialMedia__nav-services");
const socialMediaText = document.querySelector(".socialMedia__nav-text");


socialMediaText.addEventListener('click', () => {
  servicesMenu.classList.toggle("services");
});


