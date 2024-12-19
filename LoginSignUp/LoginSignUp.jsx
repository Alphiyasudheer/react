import React, { useState } from 'react'
import './LoginSignUp.css' 
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password2.png'
import email_icon from '../Assets/email-icon.png'
const LoginSignUp = () => {
    const[action,setAction]=useState('Sign Up');






  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>

        </div>
        <div className="inputs">
            {action==='Sign Up'?<div className="input">
                <img src={user_icon} width={20} alt="" />
                <input type="text" placeholder='Name'  />
            </div>:<div></div>}

            
            <div className="input">
                <img src={email_icon} width={20} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password_icon} width='20'alt="" />
                <input type="password" placeholder='Password' />
            </div>
            {action==='Login'?<div className="forgot-password">Lost Password?<span>Click Here!</span></div>:<div></div>}

        </div>
        
        <div className="submit-container">
            <div className={action==='Sign Up'? 'submit':'submit gray'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
            <div className={action==='Login'?'submit':'submit gray'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>

    </div>
  )
}

export default LoginSignUp