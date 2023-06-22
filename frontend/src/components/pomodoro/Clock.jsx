import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Clock = () => {
    
  let t = new Date().toLocaleTimeString().split(":");
  let currTime = t.slice(0, 2);
  const [time, setTime] = useState(currTime);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(currTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', fontFamily: 'Arial' }}>
    {time.join(" : ")} {t[2].split(" ").slice(1)}{" "}
  </div>
  )
}

export default Clock;