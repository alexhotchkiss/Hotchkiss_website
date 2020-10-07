import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline()

section3TL.from("#bottom #img1",{duration: 0.5, alpha: 0, rotation: 180})
        .from("#bottom #img2",{duration: 0.5, alpha: 0, rotation: -180})
        .from("#bottom #img3",{duration: 0.5, alpha: 0, rotation: 180})
        .from("#bottom #box",{duration: 0.6, alpha: 0, x: 900});

export function section3Animation(){
    ScrollTrigger.create({
        markers: false,
        animation: section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 50%"
    })
}