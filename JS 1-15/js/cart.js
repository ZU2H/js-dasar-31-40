let tblmenu = [
    {idmenu: 1, idkategori: 30, kamar: "Junior Suite", image: "junior-suite-room.jpg", price: 1599000},
    {idmenu: 2, idkategori: 30, kamar: "Standard Room", image: "standard-room-double-bed.jpg", price: 299000},
    {idmenu: 3, idkategori: 30, kamar: "Superior Room", image: "superior-room-king.jpg", price: 399000},
    {idmenu: 4, idkategori: 30, kamar: "Deluxe Room", image: "deluxe-room.jpg", price: 699000},
    {idmenu: 5, idkategori: 30, kamar: "Cabana Room", image: "cabana-room.jpg", price: 1299000},
];

let show = tblmenu.map(function (colom) {
    return `
        <div class="produk-content">
            <div class="image">
                <img src="images/${colom.image}" alt="">
            </div>
            <div class="title">
                <h2>${colom.kamar}</h2>
            </div>
            <div class="harga">
                <h2>${colom.price}</h2>
            </div>
            <div class="btn-buy">
                <button data-idmenu=${colom.idmenu}>Buy</button>
            </div>
        </div>
        `;
});

let fill = document.querySelector(".produk");
fill.innerHTML = show;

let cart = [];

let btnbuy = document.querySelectorAll(".btn-buy > button");

btnbuy.forEach(buy => {
    buy.onclick = function () {
        tblmenu.filter(function (x) {
            if (x.idmenu == buy.dataset["idmenu"]) {
                cart.push(x);
                console.log(cart);
            }
        });
    }
});

// console.log(cart);