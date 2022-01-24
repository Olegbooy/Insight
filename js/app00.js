let menu = document.querySelector('.header_nav');
let menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('header');
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  document.querySelector('.menu-close-area').classList.toggle('active');
});

function closeMenuArea(area) {
  if (area) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.querySelector('.menu-close-area').classList.remove('active');
  }
}

let currentWidth;

function displayWindowSize() {
  currentWidth = document.documentElement.clientWidth;
}

window.addEventListener("resize", displayWindowSize);
displayWindowSize();

if (currentWidth > 992) {
  document.querySelector('header .container .header_nav').classList.remove('active');
}

let lastScroll = 0;
const defaultOffset = 320;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; // const headerFixed = () => header.classList.contains('fixed');


window.addEventListener('scroll', () => {
  if (scrollPosition() > defaultOffset) {
    if (scrollPosition() > lastScroll) {
      //scroll down
      header.classList.remove('fixed');
      header.classList.add('hide');
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
    } else if (scrollPosition() < lastScroll) {
      //scroll up
      header.classList.add('fixed');
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  } else {
    header.classList.remove('fixed');
    header.classList.remove('hide');
  }
});
const textAnim = document.querySelectorAll('.anim_text path');
console.log(textAnim);

for (let i = 0; i < textAnim.length; i++) {
  console.log(`Letter ${i} is ${textAnim[i].getTotalLength()}`);
}
//# sourceMappingURL=app00.js.map
