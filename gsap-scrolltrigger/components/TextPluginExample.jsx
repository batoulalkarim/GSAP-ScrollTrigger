import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useEffect } from 'react';
// import { EasePack } from 'gsap/dist/EasePack'

const TextPluginExample = () => {

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);
        gsap.to(".demo", {duration: 3, text: "this is a to tween"})
        gsap.from(".second", {duration: 3, text: "This is a from tween"})
    })
    return(
        <div>
            <h1 className="demo"></h1>
            <h2 className="second"></h2>
        </div>
    )
}

export default TextPluginExample 