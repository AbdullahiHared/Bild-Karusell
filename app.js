const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const albums = document.querySelector(".albums");
const images = document.querySelectorAll("img");
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

let currentIndex = 0;

leftBtn.addEventListener("click", function () {
    img3.style.translate = "-230px";
    img2.style.translate = "-230px";
    img1.style.translate = "480px";
});

rightBtn.addEventListener("click", function () {
    img3.style.translate = "-480px";
    img2.style.translate = "230px";
    img1.style.translate = "230px";
});
  


