import formatCurrency from "../js/utils/utility.js";

describe("Test suite: formatCurrency", () => {
  it("converts cents to dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("works with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(5000.5)).toEqual("50.01");
  });
  it("rounds down to the nearest cent", () => {
    expect(formatCurrency(5000.4)).toEqual("50.00");
  });
});
