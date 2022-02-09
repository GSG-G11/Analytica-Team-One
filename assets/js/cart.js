import {deleteItems} from './logic.js';

const cartContainer = document.querySelector('.cart-container-items');

//Get Cart from Local Storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

console.log(cart);

if (cart.length === 0) {
  cartContainer.innerHTML = `<h2>Your cart is empty</h2>`;
}

renderCartItems(cart);

function renderCartItems(arr) {
  arr.forEach(item => {
    const itemElement = document.createElement('tr');
    itemElement.classList.add('cart-items');
    cartContainer.appendChild(itemElement);

    const itemImage = document.createElement('td');
    const imgContainer = document.createElement('div');
    itemElement.appendChild(itemImage);
    itemImage.appendChild(imgContainer);

    const image = document.createElement('img');
    image.src = item.imgUrl;
    imgContainer.appendChild(image);

    const itemName = document.createElement('td');
    itemName.textContent = item.name;
    itemElement.appendChild(itemName);

    const itemPrice = document.createElement('td');
    itemElement.appendChild(itemPrice);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${item.price}`;
    itemPrice.appendChild(price);

    const itemQuantity = document.createElement('td');
    itemElement.appendChild(itemQuantity);

    const quantity = document.createElement('input');
    quantity.type = 'number';

    itemQuantity.appendChild(quantity);

    const deleteContainer = document.createElement('td');
    itemElement.appendChild(deleteContainer);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-danger');

    deleteContainer.appendChild(deleteButton);
  });
}

// let deleteBtn = document.querySelectorAll('.delete-btn');

// if (deleteBtn) {
//   deleteBtn.forEach(ele => {
//     ele.addEventListener('click', e => {
//       e.target.parentElement.parentElement.remove();
//     });
//   });
// }
