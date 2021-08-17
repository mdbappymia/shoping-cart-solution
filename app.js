function updateProductNumber(product, isIncrising, price, total) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncrising == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //update total

  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  //calculate sub-total
  calculateSubTotal();
}
//case increse decrese event
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", false, 1219);
});
//case increse decrese event
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", false, 59);
});

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateSubTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax.toFixed(1);
  document.getElementById("total-price").innerText = subTotal + parseFloat(tax);
}
