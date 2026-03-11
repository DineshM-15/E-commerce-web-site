let products = [

{
name:"Shoes",
price:1200,
img:"images/shoe.jpg"
},

{
name:"Watch",
price:2000,
img:"images/watch.jpg"
},

{
name:"Headphone",
price:1500,
img:"images/headphone.jpg"
},

{
name:"Bag",
price:900,
img:"images/bag.jpg"
},
{
name:"mobilephone",
price:1200,
img:"images/mobilephone.jpg"
},

{
name:"laptop",
price:2000,
img:"images/laptop.jpg"
},

{
name:"tablet",
price:1500,
img:"images/tablet.jpg"
},

{
name:"bluetooth speaker",
price:900,
img:"images/bluetooth speaker.jpg"
}


];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartCount").innerText = cart.length;
function displayProducts(list){

let container = document.getElementById("productList");

container.innerHTML = "";

list.forEach(p => {

container.innerHTML += `
<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>&#8377;${p.price}</p>

<button onclick='addToCart(${JSON.stringify(p)})'>
Add to Cart
</button>

</div>
`;

});

}

function addToCart(product){

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

document.getElementById("cartCount").innerText = cart.length;

}

document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});

displayProducts(products);