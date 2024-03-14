
export default function formatCurrency(pricePence){
 return ( Math.round(pricePence) / 100 ).toFixed(2);
}