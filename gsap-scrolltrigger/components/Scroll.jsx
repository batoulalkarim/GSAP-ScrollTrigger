import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Scroll = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ease: "none", duration: 2})
    
        //This code is so that the panels gear to right of the screen
        const panels = gsap.utils.toArray('.panel');
        panels.forEach(panel => {
            gsap.to(panel, {
                x:200,
                scrollTrigger: {
                    trigger: panel,
                    scrub:true,
                    // pin: true
                }
            })
        })
//This code below is if you want it to be centered and the pages scroll over one another
        // gsap.utils.toArray(".panel").forEach((panel, i) => {
        //   ScrollTrigger.create({
        //     trigger: panel,
        //     start: "top top",
        //     // end: "300px",
        //     pin: true,
        //     scrub: true,
        //     pinSpacing: false
        //   })
        // })
     
      })
   

    return(
        <div className="scrollContainer">
            <h1 className="center">ScrollTrigger on Panels</h1>
            <div className="panel">
            <h1 className="center">ONE</h1>
            </div>
            <br />
            <div className="panel">
            <h1 className="center">TWO</h1>
            </div>
            <br />
            <div className="panel">
            <h1 className="center">THREE</h1>
            </div>
            <br />
            <div className="panel">
            <h1 className="center">FOUR</h1>
            </div>
        </div>
    
       
    )
}

export default Scroll