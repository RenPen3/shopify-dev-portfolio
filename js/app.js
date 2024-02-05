// import { gsap } from "gsap";

// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,TextPlugin);

const ham = document.querySelector('.nav__icons');
const dots = document.querySelectorAll('.dot');
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');


ham.addEventListener('click', () => {
    showDots();
    // console.log('working!');
    // if(nav.style.background == "#000000") {
    //     return nav.style.background = "#FAFAFA";
    // }
})

function showDots() {
    dots.forEach(dot => {
        dot.classList.toggle('show');
        // nav.style.background = "#000000";
        mobileMenu.classList.toggle('active');

    })
}







// let hamTL = gsap.timeline();
// hamTL. fromtTo(
//     ".dot",
//     {
//         x: -100,
//         stagger:2

    
//     },
//     {
//         x: 0
//     }
// );