const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

const slides = document.querySelector(".slides");
const itens = document.querySelectorAll(".slides > *");

let index = 0;

document.querySelector(".next").onclick = () => {
    index = (index + 1) % itens.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + itens.length) % itens.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
};
