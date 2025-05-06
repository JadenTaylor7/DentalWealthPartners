
function toggleHeaderScrolled() {
  const header = document.getElementById('header');
  if (window.scrollY > 300) { //The 300px determines how far down you've scrolled until navbar appears
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', toggleHeaderScrolled);
window.addEventListener('load', toggleHeaderScrolled);
