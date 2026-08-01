document.addEventListener("DOMContentLoaded", function () {


    // نمایش جمع کل سفارش

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;


    cart.forEach(item => {

        total += item.price * (item.quantity || 1);

    });


    const totalPrice = document.getElementById("checkout-total-price");


    if (totalPrice) {

        totalPrice.innerHTML = total.toLocaleString() + " تومان";

    }



    // ثبت سفارش

    const form = document.getElementById("checkout-form");


    if (!form) return;



    form.addEventListener("submit", function (e) {

        e.preventDefault();



        const fullname = document.getElementById("fullname").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const province = document.getElementById("province").value.trim();

        const city = document.getElementById("city").value.trim();

        const address = document.getElementById("address").value.trim();




        // اعتبارسنجی

        if (
            fullname === "" ||
            phone === "" ||
            province === "" ||
            city === "" ||
            address === ""
        ) {


            showCheckoutToast("لطفاً تمام فیلدها را تکمیل کنید.");

            return;

        }




        if (!phone.startsWith("09") || phone.length !== 11) {


            showCheckoutToast("شماره موبایل معتبر نیست.");

            return;

        }




        // ساخت شماره سفارش

        const orderNumber = "VN" + Math.floor(Math.random() * 900000 + 100000);


        // ذخیره شماره سفارش

        localStorage.setItem("orderNumber", orderNumber);



        // ذخیره اسم مشتری

        localStorage.setItem("customerName", fullname);
        

// ذخیره محصولات سفارش برای صفحه موفقیت

localStorage.setItem("lastOrder", JSON.stringify(cart));


        // پاک کردن سبد خرید

        localStorage.removeItem("cart");




        // نمایش پیام موفقیت

        showCheckoutToast("سفارش شما با موفقیت ثبت شد 🌸");




        // رفتن به صفحه موفقیت

        setTimeout(() => {

            window.location.href = "success.html";

        }, 1500);



    });


});





function showCheckoutToast(message){


    const toast = document.getElementById("checkout-toast");

    const toastMessage = document.getElementById("checkout-toast-message");



    if(toast && toastMessage){


        toastMessage.innerHTML = message;


        toast.classList.add("show");



        setTimeout(()=>{


            toast.classList.remove("show");


        },3000);



    }


}