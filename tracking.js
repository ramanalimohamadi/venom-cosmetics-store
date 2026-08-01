function trackOrder(){


const input = document.getElementById("tracking-number").value.trim();


const savedOrder = localStorage.getItem("orderNumber");


const result = document.getElementById("tracking-result");



if(input === ""){


result.innerHTML =
"لطفاً شماره سفارش را وارد کنید";


return;


}



if(input === savedOrder){


result.innerHTML = `

<div class="tracking-success">

<i class="fa-solid fa-box"></i>

<h3>
سفارش شما در حال آماده‌سازی است 🌸
</h3>

<p>
وضعیت سفارش: آماده ارسال
</p>


</div>

`;


}else{


result.innerHTML =

"شماره سفارش پیدا نشد ❌";


}


}