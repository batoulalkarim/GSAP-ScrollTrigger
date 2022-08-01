import Boxes from "../components/Boxes"
import Second from "../components/Second"
import Third from '../components/Third'
import Fourth from "../components/Fourth"
import Fifth from "../components/Fifth"
import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease: "none", duration: 2})

    // const tl = gsap.timeline();
    // tl.from(".second", {xPercent: -100})
    //   .from(".third", {xPercent: 100})
    //   .from(".fourth", {yPercent: -100});

      ScrollTrigger.create({
        trigger: ".second",
        start: "top top",
        end: "+=300px",
        pin: true,
        pinSpacing: false
        // animation: tl,
        // trigger: ".second",
        // start: "top top",
        // end: "+=300",
        // scrub: true, 
        // pin: true,
        // anticipatePin: 1
      });
  }, [])
  return (
    <div>
    <h1>Whats new</h1>
    <Boxes />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    </div>
  )
}
