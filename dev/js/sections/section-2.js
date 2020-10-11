import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline()

export function section2Animation(){

section2TL.from("#section-2 img",{duration:1, alpha:0, y:400})
        .from("#section-2 #text h1",{duration: 1, alpha: 0})
        .from("#section-2 #text p",{duration: .5, alpha: 0})
        .from("#section-2 #text h2",{duration: 1, alpha: 0});
}