import p1 from './img/pizza1.png';
import p2 from './img/pizza2.png';
import p3 from './img/pizza3.png';
import p4 from './img/pizza4.png';


export function createMenu() {
  const body = document.querySelector("#content");
  body.innerHTML = " ";

  const content = `
    <div class="menu-container">
      
      <div class="grid">
        <img src=${p1} alt="Margherita Pizza">
        <h3>Margherita</h3>
        <p>Tomato sauce, Mozzarella, Tomato, Fresh basil, Olive oil, Salt</p>
      </div>

      <div class="grid">
        <img src=${p2} alt="Pepperoni Pizza">
        <h3>Pepperoni</h3>
        <p>Tomato sauce, Mozzarella, Pepperoni slices.</p>
      </div>

      <div class="grid">
        <img src=${p3} alt="BBQ Chicken Pizza">
        <h3>BBQ Chicken</h3>
        <p>BBQ sauce, Mozzarella, Grilled chicken, Red onions, Cilantro.</p>
      </div>
    
      <div class="grid">
        <img src=${p4} alt="Hawaiian Pizza">
        <h3>Hawaiian</h3>
        <p>Tomato sauce, Mozzarella, Ham, Pineapple chunks.</p>
      </div>

    </div>
    `;

  body.innerHTML = content;
}
