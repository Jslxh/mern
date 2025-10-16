import React from 'react'

const For = ({num}) => {
  return (
    <div>
        <h4>Numbers</h4>
        <ul>
            {num.map((n)=>(
                <li>{n}</li>
            ))}
        </ul>
    </div>
  )
}

export default For