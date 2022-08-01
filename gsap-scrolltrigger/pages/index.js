import Boxes from "../components/Boxes"
import Second from "../components/Second"
import Third from '../components/Third'
import Fourth from "../components/Fourth"
import Fifth from "../components/Fifth"
import FlipPlugin from '../components/FlipPlugin'
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
 
  })
  return (
    <>
    <Boxes />
    <FlipPlugin />
    <div className="scrollcontainer">
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    </div>
    
    </>
  )
}
