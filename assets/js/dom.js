import productObject from './data.js';

const productsSection = document.querySelector('.products-cards');

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
