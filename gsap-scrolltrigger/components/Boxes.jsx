import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


const Boxes = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".b", {
            scrollTrigger: {
                trigger: ".a",
                markers: true,
                start: "top 50px",
                endTrigger: ".c",
                end: "bottom 80%",
                scrub: 1,
                pin: true,
                toggleActions: "restart pause reverse pause"
            },
            x: 400,
            rotation: 360,
            duration: 3
        });
    }, [])
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".a", {
            scrollTrigger: {
                trigger: ".a",
                markers: true,
                start: "top 50px",
                endTrigger: ".c",
                end: "bottom 80%",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            x: 400,
            rotation: 360,
            duration: 3
        });
    }, [])

    useEffect(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".c",
            start: "top center",
            end: "top 100px",
            scrub: 3,
            markers: true
        }
    });
    
    tl.to(".c", {
        x: 400,
        rotation: 360,
        ease: "none",
        duration: 3
    })
    .to(".c", {
        backgroundColor: "purple",
        duration: 1
    })
    .to(".c", {
        x: 0,
        duration: 3
    })
})

    return(
        <div className="container">
        <div className="a">

        </div>
        <div className="b">

        </div>
        <div className="c">

        </div>
        </div>
    )
}

export default Boxes