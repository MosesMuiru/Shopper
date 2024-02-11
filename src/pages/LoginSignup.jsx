import React from 'react'
import "./CSS/LoginSignup.css"
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='You Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />

        </div>

        <button>Continue</button>
        <div className="loginsignup-login">
        <p>  Already have an account <span>Login Here</span></p>
        <div>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By Continuing, I agree to the terms of use  & privacy policy. </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup