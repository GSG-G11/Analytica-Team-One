import productObject from '../assets/js/data.js';
// add product to data file
const pName = document.querySelector('#name');
const pDescription = document.querySelector('#description');
const pCategory = document.querySelector('#category');
const pPhoto = document.querySelector('#photo');
const pPrice = document.querySelector('#Price');
const PSubmit = document.querySelector('#submit');
const pForm = document.getElementById('form');
const productsSection = document.querySelector('.products-cards');

let arr = [...productObject];

//get data from local storage
const productStorage = localStorage.getItem('products'); // to get data in local storage

if (!productStorage || productStorage === '[]') {
  //if no storage found make new one
  localStorage.setItem('products', JSON.stringify(arr)); // to add datd file to local storage
} //else convert it to array

const productStorageArr = JSON.parse(productStorage); // to convert to array of object

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productStorageArr);
});

//add new object to array include the new product detailes

const addProduct = ev => {
  ev.preventDefault();
  let product = {
    id: Date.now(),
    name: pName.value,
    price: pPrice.value,
    category: pCategory.value,
    description: pDescription.value,
    imgUrl: pPhoto.value,
  };

  productStorageArr.push(product);
  pForm.reset();
  // console.log(arr);

  //add product to local storage

  localStorage.setItem('products', JSON.stringify(productStorageArr));
  productsSection.innerHTML = '';
  renderProducts(productStorageArr);
};

PSubmit.addEventListener('click', () => {
  if (PSubmit.value === 'Add Product') {
    addProduct();
  }
});

//delete product

function removeProduct(e) {
  // localStorage.removeItem(e);
  console.log('clicked');
  e.target.parentElement.parentElement.remove();

  //remove from local storage
  const productStorage = localStorage.getItem('products');
  const productStorageArr = JSON.parse(productStorage);
  const index = productStorageArr.findIndex(
    product => product.id == e.target.parentElement.parentElement.id
  );
  productStorageArr.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(productStorageArr));
}

// add products to seller page

const priceSelect = document.querySelector('.price-select');
const categorySelect = document.querySelector('.category-select');
const searchInput = document.getElementsByName('search')[0];
const heroSection = document.querySelector('.hero');

//Render Products
function renderProducts(arr) {
  arr.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('data-id', product.id);
    productsSection.appendChild(productCard);

    const icons = document.createElement('div');
    icons.classList.add('delete-edit');
    const dele = document.createElement('i');
    dele.classList.add('fa-solid', 'fa-circle-xmark');
    icons.appendChild(dele);
    const edit = document.createElement('i');
    edit.classList.add('fas', 'fa-edit');
    icons.appendChild(edit);
    productCard.appendChild(icons);

    const productImageDiv = document.createElement('div');
    productImageDiv.classList.add('product-card-image');
    productCard.appendChild(productImageDiv);

    const productImage = document.createElement('img');
    productImage.src = product.imgUrl;
    productImageDiv.appendChild(productImage);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-card-info');
    productCard.appendChild(productInfo);

    const productName = document.createElement('p');
    productName.classList.add('product-card-title');
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-card-description');
    productDescription.textContent = product.description;
    productInfo.appendChild(productDescription);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('product-card-footer');
    productInfo.appendChild(cardFooter);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-card-price');
    productPrice.textContent = `${product.price}$`;

    cardFooter.appendChild(productPrice);

    const productAddCart = document.createElement('button');
    productAddCart.classList.add('product-card-button');
    cardFooter.appendChild(productAddCart);

    const productAddCartIcon = document.createElement('i');
    productAddCartIcon.classList.add('fas', 'fa-cart-plus');
    productAddCart.appendChild(productAddCartIcon);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const pDelete = document.querySelectorAll('.fa-circle-xmark');
  const editBtns = document.querySelectorAll('.fa-edit');

  console.log(editBtns);

  editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', e => {
      //Take values of the product by data-id and put it in the above form
      const productId = e.target.parentElement.parentElement.getAttribute('data-id');
      const product = productStorageArr.find(product => product.id == productId);

      //put values
      pName.value = product.name;
      pDescription.value = product.description;
      pCategory.value = product.category;
      pPhoto.value = product.imgUrl;
      pPrice.value = product.price;

      //Scroll to the form
      window.scrollTo(0, pForm.offsetTop);

      //Update button
      PSubmit.value = 'Update';
      PSubmit.addEventListener('click', () => {
        //update the product
        product.name = pName.value;
        product.description = pDescription.value;
        product.category = pCategory.value;
        product.imgUrl = pPhoto.value;
        product.price = pPrice.value;

        //update local storage
        localStorage.setItem('products', JSON.stringify(productStorageArr));

        //update the page
        productsSection.innerHTML = '';
        renderProducts(productStorageArr);
      });

      console.log(productId);
    });

    pDelete.forEach(btn => {
      btn.addEventListener('click', removeProduct);
    });
  });
});
