import loadHomePage from './home-page-builder.js';
import loadMenuPage from './menu-page-builder.js';
import loadContactPage from './contact-page-builder.js';

import "./styles.css";
//Variables
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

document.addEventListener("DOMContentLoaded", ()=>{loadHomePage()});
homeBtn.addEventListener("click",()=>{
    document.getElementById("content").innerHTML = '';
    loadHomePage();
})
menuBtn.addEventListener("click",()=>{
    document.getElementById("content").innerHTML = '';
    loadMenuPage();
})
contactBtn.addEventListener("click",()=>{
    document.getElementById("content").innerHTML = '';
    loadContactPage();
})