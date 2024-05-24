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

homeBtn.addEventListener('click', function() {
    createHome();
});

menuBtn.addEventListener('click', function() {
    createMenu();
})

contactBtn.addEventListener('click', function() {
    createContact();
})



