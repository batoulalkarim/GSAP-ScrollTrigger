import React, {useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'

const FlipGame = () => {

let count = 0;

gsap.registerPlugin(Flip);
gsap.config({ trialWarn: false });

const wrapColor = gsap.utils.wrap(["blue", "yellow", "purple", "green"])
// const wrapColor = gsap.set('.boxes', {
//     color: gsap.utils.random(["blue", "red", "yellow", "purple"])
// })

function createItem() {
  return { id: count++, color: wrapColor(count), status: "entered" }
}
  
  const el = useRef();
  const q = gsap.utils.selector(el);
    
  const [layout, setLayout] = useState(() => {    
    return {
      items: [
        createItem(),
        createItem(),
        createItem()
      ]
    };
  })

  useLayoutEffect(() => {
    if (!layout.state) return;
    
    // get the items that are exiting in this batch
    const exiting = layout.items.filter(item => item.status === "exiting");
    
    // Flip.from returns a timeline
    const timeline = Flip.from(layout.state, {
      absolute: true, 
      ease: "power1.inOut",
      targets: q(".box, .button"),
      scale: true,
      simple: true,
      onEnter: elements => {
        return gsap.fromTo(elements, { 
          opacity: 0,
          scale: 0
        }, { 
          opacity: 1,
          scale: 1,
          delay: 0.2,
          duration: 0.3
        });
      },
      onLeave: elements => {
        return gsap.to(elements, { 
          opacity: 0, 
          scale: 0 
        });
      }
    });
    // ask if this needs a different cleanup function or if removeItems is enough
    // remove the exiting items from the DOM after the animation is done
    timeline.add(() => removeItems(exiting));

    
  }, [layout]);
  
  const removeItems = (exitingItems) => {
    
    if (!exitingItems.length) return;
    
    setLayout(prev => ({
      state: Flip.getState(q(".box, .button")),
      items: prev.items.filter(item => !exitingItems.includes(item))
    }));
  };
    
  const addItem = () => {    
    setLayout({
      state: Flip.getState(q(".box, .button")),
      items: [createItem(), ...layout.items]
    });
  };
  
  const shuffle = () => {    
    setLayout({
      state: Flip.getState(q(".box, .button")),
      items: [...gsap.utils.shuffle(layout.items)]
    });
  };
    
  const remove = (item) => {    
    
    // set the item as exiting which will add a CSS class for display: none;
    item.status = "exiting";    
    
    setLayout({
      ...layout,
      state: Flip.getState(q(".box, .button")),
    });  
  };

  
  
  return (
    <div className="center" ref={el}>
        <h2>GSAP Flip Game</h2>
      <div>
        <button className="button" onClick={addItem}>Add Box</button>
        <button className="button" onClick={shuffle}>Shuffle</button>
      </div>      
      <div className="boxes center">
        {layout.items.map((item) => (
          <div      
            id={`box-${item.id}`} 
            key={item.id}
            className={`box ${item.color} ${item.status}`} 
            onClick={() => remove(item)} 
          >
            Click Me
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlipGame

