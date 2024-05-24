import phone from './img/phoneIcon.svg';
import home from './img/homeIcon.svg';
import map from './img/Resturant-map.png';

export function createContact() {
  const body = document.querySelector("#content");
  body.innerHTML = " ";
  const content = `
    <div class="inner-container">
        <p><img src=${phone} alt="pizza chief"> 123 465 789</p>
        <p><img src=${home} alt="pizza chief"> 1600 Pennsylvania Avenue, Washington DC</p>
        <img src=${map} alt="pizza">
    </div>
    `;

  body.innerHTML = content;
}
