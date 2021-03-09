import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
          
        }

    }
    

    handleLogin = (event) => {
        event.preventDefault()
    }
    // email event 
    handleEmail = (event) => {
        const newState = {
            ...this.state,
            email: event.target.value
        }
        this.setState(newState)
    }

    // password event
    handlePassword = (event) => {
        const newState = {
            ...this.state,
            password: event.target.value
        }
        this.setState(newState)
    }
    
    
   

    render() {
        return (
            <div className='login-page pt-5'>
                {/* heading  */}
                <h1 className='heading'>Login</h1>

                {/* form  */}
                <form className='form' onSubmit={this.handleLogin.bind(this)}>

                    {/* emai id  */}
                    <label>
                        Email Id
                        <span className='form-required'> *</span>
                    </label>
                    <div className='col'>
                        <input type='text' className='form-control' id='email' onChange={this.handleEmail.bind(this)} placeholder='name@example.com' aria-label='email id' required />
                    </div>

                    {/* password */}
                    <label>
                        Password
                        <span className='form-required'> *</span>
                    </label>
                    <div className='col'>
                        <input type='password' className='form-control' id='password' onChange={this.handlePassword.bind(this)} placeholder='Password' aria-label='password' required />
                    </div>

                    {/* login button  */}
                    <div className='submit-btn'>
                        <button type='submit' className='btn btn-primary' id='lbtn'  >Login</button>
                    </div>
               
                    
                     <div>{this.state.email}</div>
                     <div>{this.state.password}</div>
                </form>


            </div>
        )
    }
}
export default Login