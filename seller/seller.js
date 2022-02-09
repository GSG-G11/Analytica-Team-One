import productObject from '../assets/js/data.js';
// add product to data file
const pName = document.querySelector("#name");
const pDescription = document.querySelector("#description");
const pCategory = document.querySelector("#category");
const pPhoto = document.querySelector("#photo");
const pPrice = document.querySelector("#Price");
const PSubmit = document.querySelector("#submit");
const pForm = document.getElementById("form")

let arr=[...productObject];

//add new object to array include the new product detailes

const addProduct = (ev)=> {
    ev.preventDefault(); 
    let product={
        id : Date.now(),
        name : pName.value,
        price : pPrice.value,
        category : pCategory.value,
        description : pDescription.value,
        imgUrl : pPhoto.value
    }

    arr.push(product);
    pForm.reset();
    // console.log(arr);
}

PSubmit.addEventListener('click', addProduct)


// add products to seller page

const productsSection = document.querySelector('.products-cards');
const priceSelect = document.querySelector('.price-select');
const categorySelect = document.querySelector('.category-select');
const searchInput = document.getElementsByName('search')[0];
const heroSection = document.querySelector('.hero');

//Render Products
function renderProducts(arr) {
  arr.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productsSection.appendChild(productCard);

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

renderProducts(productObject);
