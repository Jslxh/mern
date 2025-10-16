import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [form,setForm]=useState({
        name:"",
        email:"",
        pass:"",
        dept:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm((prev)=>({
            ...prev,//spread operator
            [name]:value
        }))
    };
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(form)};
  return (
    <div>
        <h3>Contact</h3>
        <form action= "" onSubmit={handlesubmit}>
            <label htmlFor=''>Name:</label>
            <input type ="text" name='name'value={form.name} onChange={handleChange} placeholder='Name'/><br />
            <label htmlFor=''>Email</label>
            <input type ="email" name='email' value={form.email} onChange={handleChange} placeholder='Email'/><br />
            <label htmlFor=''>Password</label>
            <input type ="password" name='pass'value={form.pass} onChange={handleChange} placeholder='Password'/><br />
            <label htmlFor=''>Department</label>
            <input type ="text" name='dept'value={form.dept} onChange={handleChange} placeholder='Department'/><br />
            <label htmlFor=''>Gender:</label>
            <input type ="radio" name='gender' value="male"/> Male
            <input type ="radio" name='gender' value="female"/>Female
            <input type ="radio" name   ='gender' value="other"/>Other<br />
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact