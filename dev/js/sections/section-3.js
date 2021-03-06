import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline()

section3TL.from("#bottom #img1",{duration: 1, alpha: 0, rotation: 180})
        .from("#bottom #img2",{duration: 1, alpha: 0, rotation: -180})
        .from("#bottom #img3",{duration: 1, alpha: 0, rotation: 180})
        .from("#bottom #box",{duration: 0.7, alpha: 0, x: 900});

export function section3Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 50%"
    })
}