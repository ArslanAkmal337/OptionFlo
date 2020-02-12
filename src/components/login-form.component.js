import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons'
import logo from '../assets/logo.png'

import './logn-form.styles.css'

class LoginForm extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='supermain'>
            <div className="main">
                <div className="main-signup">
                <div className='sidebar-signup'>
                    <h3 style={{fontSize:'23px', fontWeight:'bold' }}>Welcome to Trade</h3>
                    <span>
                    <p>Login to see our Trade</p>
                    <p>Platform in Action</p>
                    </span>
                    <h5 style={{fontSize:'13px', fontWeight:"normal"}}><b>Forgot Password?</b></h5>
                </div>
            <Form style={{display:'flex', justifyContent:'space-around', flexDirection:'column'}}>
            <img src={logo} alt='logo' style={{color:'blue'}}/>
            {/* <h1>OptionFlo</h1> */}

            <span>
                <FormGroup>
                    {/* <label>Email</label> */}
                    <Input type='email' placeholder='Enter Your Email' required className="mb-1" />
                    {/* <Label>Password</Label> */}
                    <Input type='password' placeholder='Enter Your Password' required />
                </FormGroup>
                <Button className='google-button p-1 text-center' style={{width:'100%',backgroundColor:'#120f5d'}}>Login</Button>
                {/* <div className='text-center pt-3'>
                    Or continue with your social account
                </div> */}
                </span>
                <span>          
                    <FacebookLoginButton className='google-button text-center' />
                    <GoogleLoginButton className='google-button' />
                </span>      
                </Form>
            </div>
            </div>
            <footer>Copy Right</footer>
            </div>
        )
    }
}
export default LoginForm