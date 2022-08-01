import Boxes from "../components/Boxes"
import Scroll from "../components/Scroll"
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
        end: "300px",
        pin: true,
        pinSpacing: false
      })
    })
 
  })
  return (
    <>
    <Scroll />
    <Boxes />
    <FlipPlugin />
    <div className="scrollcontainer">
    
    </div>
    
    </>
  )
}
