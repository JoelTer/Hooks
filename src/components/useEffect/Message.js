import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({
    x:0,
    y:0
  });
  const {x,y} = coords;

  useEffect(() => {
    // console.log('Component mounted');
    const mouseMove = (e) => {
      const coords = {x: e.x, y: e.y};
      setCoords(coords);
      console.log("Event", coords);
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      console.log('Component unmounted');
    }
  }, []);
  return (
    <div>
      <h3>Message</h3>
      <p>
        X: {x} <br/>
        Y: {y}
      </p>
    </div>
  )
}
