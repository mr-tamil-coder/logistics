import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='bg-gray-400'>
        <h1>Login</h1>
        <input type="text" className='input-box' placeholder={"username"}/> <br />
        <input type="text" className='input-box' placeholder={"Password"} /> <br />
        <p>
            Forgot Password
        </p>
        Role:
        <select name="role" id="">
            <option value="Customer">Customer</option>
            <option value="Shipper">Shipper</option> <option value="Agents">Agents</option> <option value="Port">Port</option>
        </select>
        <br />
        <p>New user? Create account</p>
        <button>Login</button>
    </div>
  )
}

export default Login