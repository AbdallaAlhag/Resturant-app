export function createContact(){
    const body = document.querySelector('#content');
    body.innerHTML = " ";
    const content = `
    <p>(icon) 123 465 789</p>
    <p>(icon)1600 Pennsylvania Avenue, Washington DC</p>
    <img src="" alt="pizza">
    `;

    body.innerHTML = content
}