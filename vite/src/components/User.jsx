// Components types: 1.class components 2.function components
//1st letter caps in components, .jsx
// <> </> - fragment
//props - properties
//props.children - to access the content between opening and closing tags of a component
//props is an object
/*
const User = (props) => {
  return (
    <div>
        <h1>I am {props.name} from {props.dept} department</h1>
    </div>
  )
} - this method is used to access used props
*/
import React from 'react'

const User = ({name,dept,skills}) => {
  return (
    <div>
        <h3>I am {name} from {dept} department</h3>
        <ul>
            {skills.map((s)=>(
                <li>{s}</li>
            ))}
        </ul>
    </div>
  )
}

export default User