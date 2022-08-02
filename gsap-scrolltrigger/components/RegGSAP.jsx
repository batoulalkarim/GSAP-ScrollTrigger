import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RegGSAP = () => {
    const boxRef = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, {rotation: "+=360", repeat: 100});
        gsap.to(boxRef2.current, {rotation: "+=360", repeat: 100});
        gsap.to(boxRef3.current, {rotation: "+=360", repeat: 100});
        gsap.to(boxRef4.current, {rotation: "+=360", repeat: 100});
    }, []);

    return(
        <div>
            <h2 className="center">Just plain old GSAP</h2>
        <span className="flex">
        <div className="greenbox" ref={boxRef}>
            LONG
        </div>
        <div className="greenbox" ref={boxRef2}>
            LOST
        </div>
        <div className="greenbox" ref={boxRef3}>
            FRIENDS
        </div>
        <div className="greenbox" ref={boxRef4}>
            .io
        </div>
        </span>
        </div>
    )
}

export default RegGSAP