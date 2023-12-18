let selectedProduct = JSON.parse(sessionStorage.selected);

let i = 0;
while (selectedProduct.length) {
    var itemElement = document.getElementById("item");
    const nameOfProduct = selectedProduct[0];
    const colorOfProduct = selectedProduct[1];
    const materialOfProduct = selectedProduct[2];
    const priceOfProduct = selectedProduct[3];
    const imageOfProduct = selectedProduct[4];
    itemElement.innerHTML = "<img alt='Product Image' src='" + imageOfProduct + "'/>" + "<div>" + "<span>" + nameOfProduct + "</span>" + "<h5>" + colorOfProduct + "</h5>" + "<p>" + materialOfProduct + "</p>" +"<h4 class='priceOfProduct'>" + priceOfProduct + "</h4>" + "</div>" +  "<button class='productButtons' onclick='viewDetails("+i+")'>View Product</button>" + "<button  class='productButtons'>Add to cart</button>";
    i++;
}