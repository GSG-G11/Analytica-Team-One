import productObject from './data.js';
import {filterByCategory, filterByPrice, searchProducts} from './logic.js';

const productsSection = document.querySelector('.products-cards');
const priceSelect = document.querySelector('.price-select');
const categorySelect = document.querySelector('.category-select');
const searchInput = document.getElementsByName('search')[0];
const heroSection = document.querySelector('.hero');
const listIcon = document.querySelector('.list-i');

listIcon.addEventListener('click', () => {
  productsSection.classList.toggle('list');
});

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

function clearInput(element) {
  element.innerHTML = '';
}

searchInput.addEventListener('keyup', () => {
  clearInput(heroSection);
  clearInput(productsSection);

  if (searchInput.value === '') {
    heroSection.innerHTML = hero;
    return renderProducts(productObject);
  }

  const searchArr = searchProducts(productObject, searchInput.value);
  renderProducts(searchArr);
});

categorySelect.addEventListener('change', e => {
  const categoryValue = e.target.value;
  if (categoryValue === '') {
    clearInput(productsSection);
    return renderProducts(productObject);
  }
  clearInput(productsSection);
  renderProducts(filterByCategory(productObject, categoryValue));
});

priceSelect.addEventListener('change', e => {
  const price = e.target.value;
  if (price === '') {
    clearInput(productsSection);
    return renderProducts(productObject);
  }
  clearInput(productsSection);
  renderProducts(filterByPrice(productObject, price));
});

const hero = `<section class="hero" id="deal">
<div class="">
  <div class="row">
    <div class="img-hero">
      <img src="img/Laptop.png" alt="hero-img" />
    </div>
    <div class="info-hero">
      <h1>ANALYTICA <strong> Store</strong></h1>
      <p class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos odit ex
        accusamus eaque vitae!
      </p>
      <div class="clickable">
        <span> -30%</span>
        <a href="#" class="btn"> See More</a>
      </div>
    </div>
  </div>
</div>
</section>`;

renderProducts(productObject);
