import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useEffect } from 'react';

const TextPluginExample = () => {

    // This is the code for a more simple TextPlugin, uncomment this and the h2 in the return statement to see it
    // useEffect(() => {
    //     gsap.registerPlugin(TextPlugin);
    //     gsap.to(".demo", {
    //         duration: 10,
    //         text: {
    //             value: "This is a 'to' tween, we are using the gsap text plugin to make this sentence look cool :)"
    //         },
    //         ease: "power2"
    //     })
    // })

   let text = "#testing"

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);
        const tl = gsap.timeline({repeat:-1, yoyo:false, repeatDelay:0, onComplete:timelineDone, onCompleteParams:["test1", "test2"]});
            tl.to(text, 1.8, {text:{value:"WEB3 MASTERS", padSpace:true,  ease:"linear"},delay:0});
            tl.to(text, 2.8, {text:{value:"CSS WIZARDS", padSpace:true, ease:"linear"},delay: 2});
            tl.to(text, 3.8, {text:{value:"LONG LOST FRIENDS", padSpace:true, ease:"linear"}, delay:3.5});
            tl.to(text, 3.8, {text:{value:"<3", padSpace:true, ease:"linear"}, delay:3.5});
    }, [text])


    function timelineDone(p1, p2) {
        console.log("timeline done. params: " + p1 + " and " + p2);
    }
    
    return(
        <div className="textpluginbg">
            <h1 className="textplugincenter">TextPlugin</h1>

            {/* This is another plugin, uncomment if you want to see it */}
            {/* <h2 className="demo"></h2> */}

            <div className="textplugin">
            <h3 id="testing"></h3>
            </div>
        </div>
    )
}

export default TextPluginExample 