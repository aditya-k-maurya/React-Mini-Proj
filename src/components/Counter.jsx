import { useState } from 'react'
import '../App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const increase= ()=>{
    if(count<20){
      setCount(count+1)
    }
  }
  const decrease= ()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>

      <h1>Counter</h1>
      <p>count value: {count}</p>
      <button onClick={increase}>
          Increment
      </button>
      <button onClick={decrease}>
          Decrement
      </button>

    </>
  )
}

export default Counter