import {products} from '../data/itemlist.js'
import {addedTimeouts,addtoCart,updateCart,calculateCartQuantity} from '../model/cart.js'
import formatCurrency from '../utils/utility.js'

let productHTML ='';

products.forEach((product) => {

  productHTML += `
  <div class="pro-box"> 
  <div class="pro-img">
    <img class="product-image" src="${product.image}" alt="">
  </div>

  <div class="product-company limit-text-to-2-lines">
    <strong>${product.company}</strong>
  </div>

  <div class="product-name limit-text-to-2-lines">
   ${product.name}
  </div>

  <div class="product-rating">
    <img class="rating-img"
      src="assets/ratings/rating-${product.rating.stars}.png">
    <div class="review-count">
    ${product.rating.review}
    </div>
  </div>

  <div class="product-price">
    £${formatCurrency(product.pricePence)}
  </div>

  <div class="product-quantity">
    <select class="cart-quantity-select-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-cart added-cart-${product.id}">
    <img src="assets/icons/checkmark.png">
    Added Successfully
  </div>

  <button class="add-cart-btn" data-product-id="${product.id}">
    Add to Cart
  </button>

</div>
`;
});

document.getElementById('products')
.innerHTML = productHTML

/*--------------------------------------------------------------------------------  Add to Cart --------------------------------------------------------------------------------*/

/*  Added to cart popup function */ 

export function itemAdded2Cart(productId){
  const itemadded = document.querySelector(
    `.added-cart-${productId}`
  );

  itemadded.classList.add('added-cart-success');
  
  setTimeout(() => {
    const previousaddedTimeout= addedTimeouts[productId];
    if (previousaddedTimeout) {
      clearTimeout(previousaddedTimeout);
    }

    const addedtimeout = setTimeout(() => {
      itemadded.classList.remove('added-cart-success');
    }, 2000);

    addedTimeouts[productId] = addedtimeout;
  });
}

/* Cart Value */ 

export function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector('#cart-value')
    .innerHTML = cartQuantity;
}

updateCartQuantity();

/* Add to cart button function */ 

document.querySelectorAll('.add-cart-btn')
.forEach((button) => {
  button.addEventListener('click',() => {
    const {productId} = button.dataset;

    addtoCart(productId);
    updateCart();
    itemAdded2Cart(productId);
    updateCartQuantity();

  });
});
