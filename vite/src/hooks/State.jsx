import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count,setCount] = useState(0);
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
  return (
    <div>
        <h3>useState Example</h3>
        <h4>Count: {count}</h4>
        <button onClick={() => setCount(prev=>prev+1)}>Inc</button>
        <button onClick={() => setCount(next=>next-1)}>Dec</button>
        <hr></hr>
        <h3>Like/Dislike</h3>
        <button onClick={() => setLike(pre=>pre+1)}>👍{like}</button>
        <button onClick={() => setDislike(pos=>pos+1)}>👎{dislike}</button>
    </div>
    
  )
}

export default State