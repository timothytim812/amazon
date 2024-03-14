
/* default Cart values */ 

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){

  cart = [{
    productId:
    'dd82ca78-a18b-4e2a-9250-31e67412f91a',
    quantity:1,
    deliveryEstimateId: '1'
  },{
    productId:
    'dd82ca78-a18b-4e2a-9250-31e67412f96a',
    quantity:2,
    deliveryEstimateId: '2'
  },{
    productId:
    'dd82ca78-a18b-4e2a-9250-31e67412f93b',
    quantity:1,
    deliveryEstimateId: '3'
  }]
};


/*Save data to local storage*/ 

function saveCartInStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const addedTimeouts = {};

/* Add to cart function */ 

export function addtoCart(productId) {
  let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    const quantitySelector = document.querySelector(
      `.cart-quantity-select-${productId}`
    );

    const quantity = Number(quantitySelector.value);

    if (matchingItem){
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity,
        deliveryEstimateId: '1',
      });
    }

    saveCartInStorage();
};


/* Cart Quantity function */

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

/* Update Cart Quantity function */

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveCartInStorage();
}

/* Update cart value function */ 

export function updateCart(){
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.getElementById('cart-value')
  .innerHTML = cartQuantity;

  saveCartInStorage();
};

/*Delete Cart Item function*/ 

export function removeCart(productId){

  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart

  saveCartInStorage();
};


/* Update the delivery option date*/

export function updateDeliveryEstimate(productId,deliveryEstimateId){

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryEstimateId = deliveryEstimateId;

  saveCartInStorage();
}

// localStorage.removeItem('cart');