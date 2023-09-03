const arrOfProducts = [];
const list = document.getElementById("list");
const wishlist = document.getElementById("wishlist");

function addItem(id) {
  let message = document.getElementById("message");
  message.classList.add("errorMessage");
  if (arrOfProducts.includes(document.getElementById(id).innerHTML)) {
    message.innerText = "This product already exists in the bag";
  } else {
    const li = document.createElement("li");
    li.innerText = document.getElementById(id).innerHTML;
    
    // Agrega la clase CSS para centrar al elemento de la lista de deseos
    li.classList.add("wishlistProducts");
    
    wishlist.appendChild(li);
    arrOfProducts.push(document.getElementById(id).innerHTML);
    message.innerText = "Item added";
    message.classList.remove("errorMessage");
  }
}