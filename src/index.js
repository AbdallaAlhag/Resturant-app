import './style.css';
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";
import githubIcon from './img/github-mark.png';

createHome();
document.getElementById('github-icon').innerHTML = `<img src="${githubIcon}" alt="github icon" />`;


const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.classList.add('active');
// Get all buttons
const buttons = document.querySelectorAll('.header-button');

homeBtn.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    createHome();
    homeBtn.classList.add('active');
});

menuBtn.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    createMenu();
    menuBtn.classList.add('active');
})

contactBtn.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    createContact();
    contactBtn.classList.add('active');
})



