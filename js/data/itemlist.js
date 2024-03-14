export function getProduct(productId){
  let matchingProduct;

  products.forEach((product) => {

  if(product.id === productId) {

    matchingProduct = product;

  }
  });

  return matchingProduct;
}

export const products = [
  {
    image:"assets/poducts/sofa/Inlendish-3-seater-sofa-(silver-grey).jpg",
    company:"Inlendish",
    name:"3 Seater Sofa (silver gray)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f91a",
    rating: {
      stars: 4.5,
      review: 54
    },
    pricePence: 28025,
    keywords: [
      "sofa",
      "cushion",
      "3 seater"
    ]
  },
  {
    image:"assets/poducts/sofa/Casacomfort-wood-Lexus-5-seater-(dark-grey).jpg",
    company:"Casacomfort",
    name:"Wood Lexus 5 seater (dark grey)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f92a",
    rating: {
      stars: 3.5,
      review: 125
    },
    pricePence: 18219,
    keywords: [
      "sofa",
      "cushion",
      "5 seater"
    ]
  },
  {
    image:"assets/poducts/sofa/Techno-wood-5-to-6-persons-sofa-set-(light-grey).jpg",
    company:"Techno",
    name:"Wood 5 to 6 person sofa set (light grey)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f93a",
    rating: {
      stars:4,
      review: 15
    },
    pricePence: 14799,
    keywords: [
      "sofa",
      "cushion",
      "5 & 6 seater"
    ]
  },
  {
    image:"assets/poducts/sofa/CasaLiving-Minta-4-seater-L-shape-sofa-(grey-fabric).jpg",
    company:"CasaLiving",
    name:"Minta 4 seater L shape sofa (grey fabric)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f94a",
    rating: {
      stars:5,
      review: 5
    },
    pricePence: 16999,
    keywords: [
      "sofa",
      "cushion",
      "5 seater"
    ]
  },
  {
    image:"assets/poducts/sofa/Generic-7-seater-U-shape-sofa-(light-brown).jpg",
    company:"Generic",
    name:"7 seater U shape sofa (light brown)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f95a",
    rating: {
      stars: 4.5,
      review: 1
    },
    pricePence: 105000,
    keywords: [
      "sofa",
      "cushion",
      "7 seater"
    ]
  },
  {
    image:"assets/poducts/mobiles/oneplus-12.jpg",
    company:"oneplus",
    name:"OnePlus 12 (Silky Black, 12GB RAM, 256GB Storage)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f96a",
    rating: {
      stars: 4.5,
      review: 539
    },
    pricePence: 64999,
    keywords: [
      "smatphone",
      "oneplus",
      "12"
    ]
  },
  {
    image:"assets/poducts/mobiles/iQOO-Z6-Lite-5G.jpg",
    company:"IQOO",
    name:"iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger| Qualcomm Snapdragon 4 Gen 1 Processor | 120Hz FHD+ Display | Travel Adaptor Included in The Box",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f97a",
    rating: {
      stars: 3.5,
      review: 10
    },
    pricePence: 11499,
    keywords: [
      "smatphone",
      "iqoo",
      "mobile"
    ]
  },
  {
    image:"assets/poducts/mobiles/redmi-12-5g.jpg",
    company:"Redmi",
    name:"Redmi 12 5G Jade Black 4GB RAM 128GB ROM",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98a",
    rating: {
      stars: 4,
      review: 13970
    },
    pricePence: 11999,
    keywords: [
      "smatphone",
      "redmi",
      "mobile"
    ]
  },
  {
    image:"assets/poducts/mobiles/oneplus-nord-CE-3-lite-5G.jpg",
    company:"redmi",
    name:"OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f99a",
    rating: {
      stars: 4,
      review: 45678
    },
    pricePence:17999,
    keywords: [
      "smatphone",
      "Oneplus",
      "mobile"
    ]
  },
  {
    image:"assets/poducts/mobiles/Redmi-13-C.jpg",
    company:"redmi",
    name:"Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f910a",
    rating: {
      stars: 4,
      review: 1932
    },
    pricePence: 7799,
    keywords: [
      "smatphone",
      "redmi",
      "mobile"
    ]
  },
  {
    image:"assets/poducts/headphones/Noise-Two.webp",
    company:"Noise",
    name:"Noise Two Wireless On-Ear Headphones with 50 Hours Playtime, Low Latency(up to 40ms), 4 Play Modes, Dual Pairing, BT v5.3 (Bold Black)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f91b",
    rating: {
      stars: 3.5,
      review: 2085
    },
    pricePence: 1699,
    keywords: [
      "headphone",
      "noise",
      "wireless"
    ]
  },
  {
    image:"assets/poducts/headphones/Sony-WH-1000XM4.webp",
    company:"Sony",
    name:"Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Bluetooth Over Ear Headphones with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, AUX, Touch Control and Voice Control - Black",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f92b",
    rating: {
      stars: 4.5,
      review: 50817
    },
    pricePence: 22989,
    keywords: [
      "headphone",
      "sony",
      "wireless"
    ]
  },
  {
    image:"assets/poducts/headphones/Skullcandy-Crusher-ANC-2.webp",
    company:"skullcandy",
    name:"Skullcandy Crusher ANC 2 Over-Ear Noise Cancelling Wireless Headphones with Sensory Bass | 50 Hours Battery Life |Skull-iQ, Alexa Support, Micro, Bluetooth Compatible - Black",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f93b",
    rating: {
      stars: 4.5,
      review: 978
    },
    pricePence: 19499,
    keywords: [
      "headphone",
      "skullcandy",
      "wireless"
    ]
  },
  {
    image:"assets/poducts/headphones/Sennheiser-ACCENTUM-Plus.webp",
    company:"Sennheiser",
    name:"Sennheiser ACCENTUM Plus Wireless Bluetooth Over Ear Headphones - Quick-Charge, 50h Battery, Adaptive Hybrid ANC, Sound Personalization and 2 Yr Warranty - Black",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f94b",
    rating: {
      stars: 4,
      review: 18
    },
    pricePence: 15990,
    keywords: [
      "headphone",
      "Sennheiser",
      "wireless"
    ]
  },
  {
    image:"assets/poducts/headphones/boAt-Airdopes-Atom-81-TWS-Earbuds.webp",
    company:"Boat",
    name:"boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
    id: "dd82ca78-a18b-4e2a-9250-31e67412f95b",
    rating: {
      stars: 3.5,
      review: 27819
    },
    pricePence: 1099,
    keywords: [
      "headphone",
      "boat",
      "wireless"
    ]
  },
];


