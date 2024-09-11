import React, { useState } from 'react'
import "./LoginSignup.css"

import email_icon from "../Assets/email.png"
import psw_icon from "../Assets/password.png"
import user_icon from "../Assets/person.png"

const LoginSignup = () => {
    const[action,setAction]=useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Name'/>
                </div>}

                
                <div className="input">
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email Id'/>
                </div>
                <div className="input">
                    <img src={psw_icon} alt=''/>
                    <input type='password' placeholder='password'/>
                </div>
            </div>
            {action==="sign up"? <div></div>:<div className="forgot-password">


Lost password ? <span>click here</span>
</div>  }
             
                

            <div className="submit-container">
         
            <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("sign up")}}>sign up</div>
                <div className={action==="Sign up"? "submit gray":"submit"}  onClick={()=>{setAction("Login")}}>Login</div>

            </div>


            </div>
  )
}

export default LoginSignup

