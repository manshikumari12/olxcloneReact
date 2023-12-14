
import React, { useState } from 'react'


const Counter = () => {
    const [count, setCounte ] = useState(0)
    const incre = () => setCounte (count+1)
    const decre = () => setCounte (count-1)
  return (
    <div style={
     { display:"flex",border:"1px solid red"}
    }>
        <button disabled={count >=10} onClick={incre}>+</button>
        <p>{count}</p>
        <button  onClick={decre}>-</button>
      
      
    </div>



  )


}


export default Counter

