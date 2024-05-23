import './style.css';
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

createHome();

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



