//   PRELOADER 
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000);
};



/*change header background */
const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// show scrollUp
window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}
