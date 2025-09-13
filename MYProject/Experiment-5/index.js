// Get dropdown and all product elements
const filter = document.getElementById("filter");
const products = document.querySelectorAll(".product");

// Event listener for dropdown
filter.addEventListener("change", function () {
  const category = this.value; // selected option value

  products.forEach(product => {
    // Show all if "all" is selected OR match category
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
