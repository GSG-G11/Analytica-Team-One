import {deleteItems} from './logic.js';

const cartContainer = document.querySelector('.cart-container-items');
const totalPrice = document.querySelector('.cart-total-price');
//Get Cart from Local Storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  const deleteBtns = document.querySelectorAll('.btn-danger');

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const itemElement = e.target.parentElement.parentElement;
      const id = itemElement.getAttribute('data-id');
      const newCart = deleteItems(id, cart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      window.location.reload();
      itemElement.remove();
    });
  });

  //Total Price
  const newTotal = cart.map(item => {
    return +item.price.slice(0, -1);
  });

  const total = newTotal.reduce((acc, curr) => {
    return acc + curr;
  });

  totalPrice.textContent = `$${total}`;
});

if (cart.length === 0) {
  cartContainer.innerHTML = `<h2>Your cart is empty</h2>`;
}

function renderCartItems(arr) {
  arr.forEach(item => {
    const itemElement = document.createElement('tr');
    itemElement.classList.add('cart-items');
    itemElement.setAttribute('data-id', item.id);
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

    const deleteContainer = document.createElement('td');
    itemElement.appendChild(deleteContainer);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-danger');

    deleteContainer.appendChild(deleteButton);
  });
}

renderCartItems(cart);
