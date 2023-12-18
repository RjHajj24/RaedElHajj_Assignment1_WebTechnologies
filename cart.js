if (localStorage.cart) {

    var cart = JSON.parse(localStorage.cart);

    let i = 0;
    while (cart.length) {
        const cartElement = document.getElementById("cart");
        const nameOfProduct = cart[i][0];
        const colorOfProduct = cart[i][1];
        const materialOfProduct = cart[i][2];
        const priceOfProduct = cart[i][3];
        const imageOfProduct = cart[i][4];
        cartElement.innerHTML += "<div class='cartItem'>" + "<img class='cartProductImage' alt='Product Image' src='" + imageOfProduct + "'/>" + "<div class='cartProductName'>" + "<span>" + nameOfProduct + "</span>" + "<h5 class='cartProductColor'>" + colorOfProduct + "</h5>" + "<p class='cartProductMaterial'>" + materialOfProduct + "</p>" +"<h4 class='cartProductPrice' product price>" + priceOfProduct + "</h4>" + "</div>" +  "<button id='cartButton'>Remove Product</button>" + "</div>";
        i++;
    }
}