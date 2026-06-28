// ===============================
// SCROLL PROGRESS BAR
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});


// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger =
        window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// PARALLAX IMAGES
// ===============================

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    document.querySelectorAll(".planet").forEach((planet, index) => {

        const speed = 0.03 + (index * 0.01);

        planet.style.translate =
            `0 ${scroll * speed}px`;

    });

    document.querySelectorAll(".astro").forEach(astro => {

        astro.style.translate =
            `0 ${scroll * 0.05}px`;

    });

});


// ===============================
// HIDE SCROLL INDICATOR
// ===============================

const indicator =
document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        indicator.style.opacity="0";

    }

    else{

        indicator.style.opacity="1";

    }

});


// ===============================
// BUTTON SMOOTH SCROLL
// ===============================

const button =
document.querySelector(".btn");

button.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#earth").scrollIntoView({

        behavior:"smooth"

    });

});


// ===============================
// HERO PARALLAX
// ===============================

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    hero.style.backgroundPositionY =
    -(window.scrollY*0.25)+"px";

});