import Icon from "./img/pizzaChief.jpg"

export function createHome(){
    const body = document.querySelector('#content');
    body.innerHTML = " ";

    // Option 1
    const content = `
    <div class="inner-container" style="text-align: center;">
        <p>Best pizza in the world</p>
        <p>Made with passion since 1999</p>
        <img id='pizzaChief' src=${Icon} alt="pizza chief">
        <p>Order online or visit us!</p>
    </div>
    `;

    body.innerHTML = content;

    // Option 2

    // const para1 = document.createElement('p');
    // para1.textContent = "Best pizza in the world";

    // const para2 = document.createElement('p');
    // para2.textContent = "Made with passion since 1999";

    // const img = document.createElement('img');
    // img.src = '';
    // img.alt = 'pizza chief';

    // const para3 = document.createElement('p');
    // para3.textContent = "Order online or visit us!";

    // document.body.appendChild(para1);
    // document.body.appendChild(para2);
    // document.body.appendChild(img);
    // document.body.appendChild(para3);

}

// module.exports = createMenu;