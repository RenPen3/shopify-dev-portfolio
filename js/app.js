import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,TextPlugin);

const ham = document.querySelector('.dot');
const mobileMenu = document.querySelector('.mobile__menu');


ham.addEventListener('click', () => {
    // mobileMenu.classList.toggle('active');
    console.log('working!');
})

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