import "./style.scss";

import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/js/solid.js";

const bars = document.querySelector("body > header > a");
const header = document.querySelector("body > header > .nav-bar")

bars.addEventListener("click", ()=>{
    header.classList.toggle("active");
})
