import React, { useRef, useEffect, useState} from "react";

function Sun() {
    const ref = useRef(null)
    const [i, setI] = useState(0)
    
    useEffect(() => {
      const id = setInterval(() => {
          ref.current.style.transform = `rotate(${i}deg)`
          setI(i+1)
      }, 10)
      return () => {
        clearInterval(id)
      }
    }, [i])

  return (
    <div id="sun" ref={ref}>
      <div id="round"></div>
      <div className="gleam" id="gleam1"></div>
      <div className="gleam" id="gleam2"></div>
      <div className="gleam" id="gleam3"></div>
      <div className="gleam" id="gleam4"></div>
    </div>
  );
}

export default Sun;
