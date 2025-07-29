//navbar changes
function toggleHeaderScrolled() {
  const header = document.getElementById('header');
  if (window.scrollY > 200) { //The 200px determines how far down you've scrolled until navbar appears
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', toggleHeaderScrolled);
window.addEventListener('load', toggleHeaderScrolled);



/*--------------------------------------------------------------
# Carousel changes
--------------------------------------------------------------*/

//carousel attributes
var slider = tns({
  container: '.carousel-testimony',
  mode: 'carousel',
  items: 3,
  gutter: 30,
  slideBy: 1,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  rewind: true,
  controls: false,
  nav: false,
  mouseDrag: true,
  loop: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
});


//Link carousel manual nav buttons
function toggleCarouselButtons() {
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  

  if (window.innerWidth >= 992) { //hide the arrow buttons if all three services are showing 
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  }
}

window.addEventListener('load', toggleCarouselButtons);
window.addEventListener('resize', toggleCarouselButtons);



document.querySelector('.carousel-prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.carousel-next').addEventListener('click', function () {
  slider.goTo('next');
});






