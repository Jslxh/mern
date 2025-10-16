import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h3>Home</h3>
        <ul>
            <li>
                <Link to ="/state">useState</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home