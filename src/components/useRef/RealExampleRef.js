import React, { useState } from 'react';
import '../../styles/style.css';
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr/>
      { show && <MultipleCustomHooks />}


      <button 
        className='btn btn-primary mt-2'
        onClick={()=>{
          setShow(!show);
        }}
        >
      { show ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}
