import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryEstimates = [{
  id:'1',
  shippingDays:7,
  pricePence:0
},{
  id:'2',
  shippingDays: 3,
  pricePence:599
},{
  id:'3',
  shippingDays: 1,
  pricePence:1199
}];

export function getDeliveryEstimate(deliveryEstimateId){
  let deliveryEstimate;

  deliveryEstimates.forEach((estimate) => {

    if(estimate.id === deliveryEstimateId){

      deliveryEstimate = estimate;

    }
  });

  return deliveryEstimate;
}

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function caculateDeliveryDate(deliveryEstimate){

  let remainingDays = deliveryEstimate.shippingDays;
  let deliveryDate = dayjs();

      /* Adding the delivery option's shipping dates */ 

      while (remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'day');
    
        if (!isWeekend(deliveryDate)) {
          remainingDays--;
        }
      }

      /* changing to the required format*/ 

      const date = deliveryDate.format('dddd, MMMM D');

      return date;
}