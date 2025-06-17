
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





//carosel changes
// var slider = tns({
//   container: '.carousel-testimony',
//   mode: 'carousel',
//   items: 3,
//   gutter: 30,
//   slideBy: 1,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayButtonOutput: false,
//   controls: false,
//   nav: false,
//   mouseDrag: true,
//   loop: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     768: {
//       items: 2
//     },
//     992: {
//       items: 3
//     }
//   }
// });

// Link manual nav buttons
// document.querySelector('.carousel-prev').addEventListener('click', function () {
//   slider.goTo('prev');
// });

// document.querySelector('.carousel-next').addEventListener('click', function () {
//   slider.goTo('next');
// });