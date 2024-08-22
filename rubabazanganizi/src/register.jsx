import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const Register=(props)=>{
    const [n, setNames]=useState('')
    const [p,setPhone]=useState('')
    const [e, setEmail]=useState('')
    const [pass, setPassword]=useState('')
    const [confirm, setConfirmPassword]=useState('')

    const navigate=useNavigate()

    const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(n,p,e,pass,confirm)

    navigate("/")
    }

    return(
        <div className="auth-form-center">
        <form onSubmit={handleSubmit}>
            <label htmlFor="names">Names</label>
            <input className="names" value={n} onChange={(e)=>setNames(e.target.value)} type="text" name="names" placeholder="your name" id="names" required />

            <label htmlFor="phone">Phone</label>
            <input className="phone" value={p} onChange={(e)=>setPhone(e.target.value)} type="text" name="phone" placeholder="your phone number" id="phone" required />
            
            <label htmlFor="email">Email</label>
            <input  className="email" value={e} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="youremail@gmail.com" id="email" required />

            <label htmlFor="password">Password</label>
            <input className="password" value={pass} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="your password" id="password" required />

            <label  htmlFor="confirmPassword">Confirm Password</label>
            <input className="confirmPassword"value={confirm} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" name="confirmPassword" placeholder="confirm your password" id="confirmPassword" required />

            <button className="submit" type="submit">Register</button>

        </form>
         <p>already have an account? please <a className="submit" onClick={()=>props.onFormSwitch('Login')}>Login</a></p>
         </div>
    )
}

export default Register