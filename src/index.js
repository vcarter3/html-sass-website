import "./style.scss";
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/js/solid.js";

const bars = document.querySelector("body > header > a");
const header = document.querySelector("body > header > .nav-bar");
const titles = document.querySelectorAll("header .nav-bar > div .title");

bars.addEventListener("click", ()=>{
    header.classList.toggle("active");
})

titles.forEach(title =>{
    title.addEventListener("mouseover", ()=>{
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        let onRight = (title.getBoundingClientRect().x > vw/2);

        if(onRight){
            title.parentElement.children[1].classList.remove("left");
            title.parentElement.children[1].classList.add("right");
        }else{
            title.parentElement.children[1].classList.remove("right");
            title.parentElement.children[1].classList.add("left");

        }
    })
})