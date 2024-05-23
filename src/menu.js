export function createMenu() {
  const body = document.querySelector("#content");
  body.innerHTML = " ";

  const content = `
    <img src="" alt="pizza">
    <h1>Margherita</h1>
    <p>Tomato sauce, Mozzarella, Tomato, Fresh basil, Olive oil, Salt</p>

    <img src="" alt="pizza">
    <h1>Pepperoni</h1>
    <p>Tomato sauce, Mozzarella, Pepperoni slices.</p>

    <img src="" alt="pizza">
    <h1>BBQ Chicken</h1>
    <p>BBQ sauce, Mozzarella, Grilled chicken, Red onions, Cilantro.</p>

    <img src="" alt="pizza">
    <h1>Hawaiian</h1>
    <p>Tomato sauce, Mozzarella, Ham, Pineapple chunks.</p>
    `;

  body.innerHTML = content;
}
