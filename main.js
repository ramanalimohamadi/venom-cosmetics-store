// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-items");


if(menuBtn && nav){

    menuBtn.addEventListener("click", ()=>{

        nav.classList.toggle("active");

    });

}



// ===============================
// Scroll Animation
// ===============================

const reveals = document.querySelectorAll(".reveal");


if(reveals.length > 0){

    window.addEventListener("scroll", ()=>{


        reveals.forEach((item)=>{


            let windowHeight = window.innerHeight;
            let elementTop = item.getBoundingClientRect().top;
            let revealPoint = 120;


            if(elementTop < windowHeight - revealPoint){

                item.classList.add("active");

            }


        });


    });


}



// ===============================
// Product Search
// ===============================

const searchInput = document.querySelector("#searchInput");
const cards = document.querySelectorAll(".card");


if(searchInput){


    searchInput.addEventListener("input", function(){


        let value = this.value.trim().toLowerCase();



        cards.forEach((card)=>{


            let name = card.dataset.name;


            if(name){

                name = name.toLowerCase();


                if(name.includes(value)){

                    card.style.display = "";

                }
                else{

                    card.style.display = "none";

                }

            }


        });


    });


}



// ===============================
// Cart Counter
// ===============================

function updateCartCount(){


    const cartCount = document.querySelector("#cart-count");


    if(cartCount){


        let cart = JSON.parse(localStorage.getItem("cart")) || [];


        cartCount.innerText = cart.length;


    }


}


updateCartCount();
function showToast(message){

    const toast = document.querySelector("#toast");
    const toastMessage = document.querySelector("#toast-message");


    if(toast && toastMessage){

        toastMessage.innerText = message;

        toast.classList.add("show");


        setTimeout(()=>{

            toast.classList.remove("show");

        },3000);

    }

}