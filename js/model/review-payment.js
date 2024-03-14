import {cart,calculateCartQuantity} from '../model/cart.js'
import {getProduct} from '../data/itemlist.js'
import {getDeliveryEstimate} from '../data/delivery.js';
import formatCurrency from '../utils/utility.js';


export function reviewPayment() {

  let productPricePence = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    
    const product = getProduct(cartItem.productId);

    productPricePence += product.pricePence * cartItem.quantity;

    const deliveryEstimate = getDeliveryEstimate(cartItem.deliveryEstimateId);
    shippingPrice += deliveryEstimate.pricePence; 

  });

  const totalTaxPence = productPricePence + shippingPrice;
  const taxPence = totalTaxPence * 0.1;

  const totalPence = totalTaxPence + taxPence;

  const paymentHTML = 
  `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <p>Items (${calculateCartQuantity()}):</p>
      <p class="payment-summary-money">
       £${formatCurrency(productPricePence)}
      </p>
    </div>

    <div class="payment-summary-row">
      <p>Shipping &amp; handling:</p>
      <p class="payment-summary-money">
      £${formatCurrency(shippingPrice)}
      </p>
    </div>

    <div class="payment-summary-row subtotal-row">
      <p>Total before tax:</p>
      <p class="payment-summary-money">
      £${formatCurrency(taxPence)}
      </p>
    </div>

    <div class="payment-summary-row">
      <p>Estimated tax (10%):</p>
      <p class="payment-summary-money">
      £${formatCurrency(totalTaxPence)}
      </p>
    </div>

    <div class="payment-summary-row total-row">
      <h3>Order total:</h3>
      <h3 class="payment-summary-money">
      £${formatCurrency(totalPence)}
      </h3>
    </div>

    <div class="order-popup ">
      <img src="assets/icons/checkmark.png">
      Order placed successfully
    </div>
    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector('.payment-summary')
    .innerHTML = paymentHTML;
  
};



// console.log(productPricePence);
  // console.log(shippingPrice);