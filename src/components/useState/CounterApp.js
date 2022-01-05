import React, { useState } from 'react';
import '../../styles/style.css';

const CounterApp = () => {
  const [counters, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const { counter1, counter2, counter3, counter4 } = counters;
  return (
    <div>
      <h1>Counter { counter1 } </h1>
      <h1>Counter { counter2 } </h1>
      <h1>Counter { counter3 } </h1>
      <h1>Counter { counter4 } </h1>
      <hr/>

      <button onClick={()=>{
        setCounter({
          ...counters,
          counter1: counter1 + 1,
        })
      }} className='btn btn-primary'>
        +1
      </button>
    </div>
  )
}

export default CounterApp;
