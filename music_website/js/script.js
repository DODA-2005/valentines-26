document.addEventListener('DOMContentLoaded', function() {

    /* ===============================
       SLIDESHOW (your existing code)
       =============================== */

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showSlides() {

        if(totalSlides === 0) return; // prevents errors if no slideshow exists

        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });

        slideIndex = (slideIndex + 1) % totalSlides;
    }

    setInterval(showSlides, 3000);



    /* ===============================
       FLIP CARDS + HEARTS
       =============================== */

    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            // stop double flipping spam
            if(card.classList.contains("flipped")) return;

            card.classList.add("flipped");

            spawnHearts(card);

            // optional but GOD-tier on mobile
            if(navigator.vibrate){
                navigator.vibrate(40);
            }

        });

    });



    /* ===============================
       HEART SPAWNER
       =============================== */

    function spawnHearts(card){

        for(let i = 0; i < 14; i++){

            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.className = "heart";

            heart.style.left = Math.random()*90 + "%";

            card.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            }, 2000);
        }
    }

});
