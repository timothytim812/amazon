import {cart,removeCart,calculateCartQuantity,updateQuantity} from '../model/cart.js'
import {products} from '../data/itemlist.js'
import {deliveryEstimates} from '../data/delivery.js'
import formatCurrency from '../utils/utility.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


/*Order Review*/

let orderReview ='';

cart.forEach((cartItem) => {

const productId = cartItem.productId;

let matchingProduct;

products.forEach((product) => {

 if(product.id === productId) {

  matchingProduct = product;

 }
});

orderReview  +=
`
  <div class="cart-item-container 
  cart-item-box-${matchingProduct.id}">
    <p class="delivery-date">
      Delivery date: 
    </p>

    <div class="cart-item-details-grid">
      <img class="item-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <h3 class="item-name">
        ${matchingProduct.name}
        </h3>
        <p class="item-price">
          £${formatCurrency(matchingProduct.pricePence)}
        </p>
        <div class="item-quantity">
          <span style="margin-right: 10px">
            Quantity: <span class="quantity-label label-${matchingProduct.id}">${cartItem.quantity}</span>
          </span>
          <span>
          <a class="update-quantity" data-product-id="${matchingProduct.id}">
            Update
          </a>
          <input class="quantity-input input-${matchingProduct.id}">
          <a class="save-quantity" data-product-id="${matchingProduct.id}">
           Save
          </a>
          <a class="delete-quantity" data-product-id="${matchingProduct.id}">
            Delete
          </a>
        </div>
      </div>

      <div class="delivery-options">
        <h3 class="delivery-options-title">
          Choose a delivery option:
        </h3>
       
        ${deliveryHTML(matchingProduct,cartItem)}

      </div>
    </div>
  </div>
`;
});


/* delivery options function*/ 

function deliveryHTML(matchingProduct,cartItem){

  let deliveryHTML = '';

  /* running for each cartitem estimates */ 

  deliveryEstimates.forEach((deliveryEstimate) => {

    /* To get today's date using dayJS*/ 

    const today = dayjs();

     /* Adding the delivery option's shipping dates */ 

    const deliveryDate = today.add(
      deliveryEstimate.shippingDays,'days'
    )

    /* changing to the required format*/ 

    const date = deliveryDate.format('dddd, MMMM D')

    /* Importing price from delivery.js*/ 

    const price = deliveryEstimate.pricePence === 0 ? 'FREE' : `£${formatCurrency(deliveryEstimate.pricePence)}`

    /* To get the default shipping dates in the radio input*/ 

    const checked = deliveryEstimate.id === cartItem.deliveryId;

     /* Delivery Option HTML generator code*/ 

    deliveryHTML +=
  `
    <div class="delivery-option data-product-id="${matchingProduct.id}" data-delivery-id="${deliveryEstimates.id}">
      <input type="radio"
        ${checked ? 'checked':''}
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <p class="delivery-option-date">
          ${date}
        </p>
        <p class="delivery-option-price">
          ${price} - Shipping
        </p>
      </div>
    </div>
  `

  });

  return deliveryHTML;

}


/*Generate overall html*/ 

document.querySelector(".order-summary").innerHTML= orderReview;

/*---------------------------------------------------------------------------------*/

/* Update quantity */ 

document.querySelectorAll('.update-quantity')
.forEach((link) => {
  link.addEventListener('click', () => {

    const productId = link.dataset.productId;

    const container = document.querySelector(
      `.cart-item-box-${productId}`
    );

    container.classList.add('edit-cart-quantity');

  });
});

/* Save quantity */ 

document.querySelectorAll('.save-quantity')
.forEach((link) => {
  link.addEventListener('click', () => {

    const productId = link.dataset.productId;

    const quantityInput = document.querySelector(
      `.input-${productId}`
    );

    const newQuantity = Number(quantityInput.value);

    if (newQuantity < 0 || newQuantity >= 1000) {
      alert('Quantity must be at least 0 and less than 1000');
      return;
    }

    updateQuantity(productId, newQuantity);

    const container = document.querySelector(
      `.cart-item-box-${productId}`
    );
    container.classList.remove('edit-cart-quantity');

    const quantityLabel = document.querySelector(
      `.label-${productId}`
    );
    quantityLabel.innerHTML = newQuantity;

    updateCartQuantity();
  });
});

/* Delete quantity */ 

document.querySelectorAll('.delete-quantity')
.forEach((link) => {

  link.addEventListener('click', () => {

    const productId = link.dataset.productId;
    removeCart(productId);

    const container = document.querySelector(`.cart-item-box-${productId}`);

    container.remove();

    updateCartQuantity();
  });
});

/* header item update*/ 

function updateCartQuantity() {

  const cartQuantity = calculateCartQuantity();

  document.querySelector('.to-product-link')
    .innerHTML = `${cartQuantity} products`;
};
updateCartQuantity();

