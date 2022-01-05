import React, { useCallback, useEffect, useState } from 'react';
import '../../styles/style.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);


  const increment = useCallback(
    (num) => {
      setCounter(c => c + num);
    },[setCounter]
  )

  useEffect(() => {
    
  }, [increment])
  return (
    <div>
      <h1> useCallback Hook</h1>
      <hr />
      <h3>Counter: { counter } </h3>
      <ShowIncrement increment={increment}/>
    </div>
  )
}
