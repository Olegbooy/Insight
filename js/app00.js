let menu = document.querySelector('.header_nav');
let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
window.addEventListener('scroll', function () {
  let scrollPOs = window.scrollY;
  let header = document.querySelector('header');

  if (header) {
    if (scrollPOs > 250) {
      header.classList.add('show_banner');
    } else {
      header.classList.remove('show_banner');
    }
  }
});
//# sourceMappingURL=app00.js.map
