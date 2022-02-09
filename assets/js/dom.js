import productObject from './data.js';

const productsSection = document.querySelector('.products-cards');
const priceSelect = document.querySelector('.price-select');
const categorySelect = document.querySelector('.category-select');

console.log(priceSelect);

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

function filterByCategory(arr, category) {
  const filteredArr = arr.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
  return filteredArr;
}

function filterByPrice(arr, price) {
  const filteredArr = arr.filter(product => product.price <= price);
  return filteredArr;
}

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

renderProducts(productObject);
