let cart = JSON.parse(localStorage.getItem("cart")) || [];

function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){
window.location.href = "index.html";
}else{
document.getElementById("error").innerText="Invalid login";
}

}

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product added to cart");

}

function showCart(){

let cartDiv = document.getElementById("cartItems");

if(!cartDiv) return;

cartDiv.innerHTML="";

cart.forEach(item=>{
cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
});

}

function clearCart(){

localStorage.removeItem("cart");

location.reload();

}

showCart();