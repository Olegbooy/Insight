let menu = document.querySelector('.header_nav');
let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
document.querySelectorAll(".point_menu").forEach(function (item) {
  item.addEventListener('click', function (el) {
    removeAllactive(document.querySelectorAll(".point_menu"));
    el.currentTarget.classList.add("_active");
  });
});
//# sourceMappingURL=app00.js.map
