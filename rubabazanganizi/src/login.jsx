import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

export const Login=({ onFormSwitch })=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const navigate=useNavigate()

    
        const handleSwitch = () => {
          onFormSwitch('Register'); 
           // Navigate to the register page when the switch button is clicked.
        }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(email)

        navigate("/index")
    }

    return(
    <div className='auth-form-center'>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Youremail@gmail.com" required /> 

        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Enter your password" required />
        

        <button type="submit">Login</button>
         </form>

         <p>Don't you have an account? please <a onClick={handleSwitch}>Register</a></p>
    </div>
    )
}


export default Login