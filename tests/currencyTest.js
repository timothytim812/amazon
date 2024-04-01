import formatCurrency from "../js/utils/utility.js";

console.log("Test suite: formatCurrency");

// basic test case

console.log("converts cents to dollars");

if (formatCurrency(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

// edge test case
console.log("works with zero");
if (formatCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("rounds up to the nearest cent");

if (formatCurrency(5000.5) === "50.01") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("rounds down to the nearest cent");

if (formatCurrency(5000.4) === "50.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
