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

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
      })
    })
    // const tl = gsap.timeline();
    // tl.from(".second", {xPercent: -100})
    //   .from(".third", {xPercent: 100})
    //   .from(".fourth", {yPercent: -100});

    //   ScrollTrigger.create({
    //     animation: tl,
    //     trigger: ".container",
    //     start: "top top",
    //     end: "+=300",
    //     scrub: true, 
    //     pin: true,
    //     pinSpacing: false,
    //     anticipatePin: 1
    //   });
  })
  return (
    <>
    <Boxes />
    <div className="container">
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    </div>
    </>
  )
}
