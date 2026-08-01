document.addEventListener("DOMContentLoaded", function(){


let cart = JSON.parse(localStorage.getItem("cart")) || [];


// آپدیت تعداد سبد
updateCartCount();



// ======================
// افزودن به سبد خرید
// ======================


const buttons = document.querySelectorAll(".add-cart");


buttons.forEach(button=>{


    button.addEventListener("click",function(){


        const card = this.closest(".card");


        const product = {

            name: card.dataset.name,

            price: Number(card.dataset.price),

            quantity: 1

        };



        cart.push(product);


        localStorage.setItem("cart", JSON.stringify(cart));



        updateCartCount();



        showToast(product.name);



        flyToCart(card);



        let cartIcon = document.querySelector(".cart-icon");


        if(cartIcon){

            cartIcon.classList.add("cart-shake");


            setTimeout(()=>{

                cartIcon.classList.remove("cart-shake");

            },500);

        }



    });


});





// ======================
// نمایش سبد خرید
// ======================


const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");



if(cartItems){


    let total = 0;


    cartItems.innerHTML = "";



    cart.forEach((item,index)=>{


        let quantity = item.quantity || 1;



        total += item.price * quantity;



        cartItems.innerHTML += `


        <div class="cart-item">


            <h3>
            ${item.name}
            </h3>



            <p>
            ${(item.price * quantity).toLocaleString()} تومان
            </p>




            <div class="quantity">


                <button onclick="changeQuantity(${index},-1)">
                    -
                </button>



                <span>
                    ${quantity}
                </span>



                <button onclick="changeQuantity(${index},1)">
                    +
                </button>



            </div>




            <button onclick="removeItem(${index})">
                حذف
            </button>



        </div>


        `;


    });



    if(totalPrice){

        totalPrice.innerHTML = total.toLocaleString();

    }



}



});




// ======================
// تعداد سبد خرید
// ======================


function updateCartCount(){


const cartCount = document.getElementById("cart-count");


if(cartCount){


let cart = JSON.parse(localStorage.getItem("cart")) || [];



let totalCount = cart.reduce((sum,item)=>{

    return sum + (item.quantity || 1);

},0);



cartCount.innerHTML = totalCount;



}


}





// ======================
// Toast
// ======================


function showToast(message){


const toast = document.getElementById("toast");

const toastMessage = document.getElementById("toast-message");



if(toast && toastMessage){


toastMessage.innerHTML = message;


toast.classList.add("show");



setTimeout(()=>{


toast.classList.remove("show");


},3000);



}


}





// ======================
// انیمیشن عکس
// ======================


function flyToCart(card){


const img = card.querySelector("img");


const cartIcon = document.querySelector(".cart-icon");



if(!img || !cartIcon) return;



let fly = img.cloneNode(true);



fly.classList.add("fly-img");



document.body.appendChild(fly);



let start = img.getBoundingClientRect();

let end = cartIcon.getBoundingClientRect();



fly.style.left = start.left+"px";

fly.style.top = start.top+"px";



setTimeout(()=>{


fly.style.left = end.left+"px";

fly.style.top = end.top+"px";

fly.style.width = "20px";

fly.style.height = "20px";



},50);



setTimeout(()=>{


fly.remove();



},1000);



}





// ======================
// تغییر تعداد
// ======================


function changeQuantity(index,amount){


let cart = JSON.parse(localStorage.getItem("cart")) || [];



cart[index].quantity = (cart[index].quantity || 1) + amount;



if(cart[index].quantity < 1){

    cart[index].quantity = 1;

}



localStorage.setItem("cart",JSON.stringify(cart));



location.reload();



}




// ======================
// حذف محصول
// ======================


function removeItem(index){


let cart = JSON.parse(localStorage.getItem("cart")) || [];



cart.splice(index,1);



localStorage.setItem("cart",JSON.stringify(cart));



location.reload();


}
// دسترسی دکمه‌های HTML
window.changeQuantity = changeQuantity;
window.removeItem = removeItem;

const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", function () {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {

            alert("⚠️ سبد خرید شما خالی است.");

            return;

        }

        window.location.href = "checkout.html";

    });

}