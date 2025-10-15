import React from 'react'

const Hii = ({foods}) => {
  return (
    <div>
        <h3>Hellooo Guyss</h3>
        <ul>
            {foods.map((f)=>(
                <li>{f}</li>
            ))}
        </ul>
    </div>
  )
}

export default Hii