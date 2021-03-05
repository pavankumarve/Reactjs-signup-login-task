import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            emailid: '',
            password: '',
            phonenumber: '',
            address: ''
        }
    }
    handleSignUp = (event) => {
        event.preventDefault();
        message:alert('Signup Completed');
        
        window.location.reload();
    }

    // firstname event
    handleFirstName = (event) => {
        const newState = {
            ...this.state,
            firstname: event.target.value
        }
        this.setState(newState)
    }

    // lastname event
    handleLastName = (event) => {
        const newState = {
            ...this.state,
            firstname: event.target.value
        }
        this.setState(newState)
    }

    //email event
    handleEmail = (event) => {
        const newState = {
            ...this.state,
            emailid: event.target.value
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

    // phonenumber event
    handlePhoneNumber = (event) => {
        const newState = {
            ...this.state,
            phonenumber: event.target.value
        }
        this.setState(newState)
    }

    //address event
    handleAddress = (event) => {
        const newState = {
            ...this.state,
            address: event.target.value
        }
        this.setState(newState)
    }
   

    render() {
        return (
            <div className='signup-page pt-5'>

                {/* heading */}
                <h1 className='heading'>Signup</h1>

                {/* form */}
                <form className='form' onSubmit={this.handleSignUp.bind()}>

                    {/* full name */}
                    <div className='row'>
                        <label>Full Name
                        <span className='form-required'> *</span>
                        </label>
                        <div className='col-sm-6'>
                            <input type='text' className='form-control' id='first-name' onChange={this.handleFirstName.bind(this)} placeholder='First name' aria-label='First name' maxLength='20' minLength='3' required />
                        </div>
                        <div className='col-sm-6'>
                            <input type='text' className='form-control' id='last-name' onChange={this.handleLastName.bind(this)} placeholder='Last name' aria-label='Last name' maxLength='20' minLength='3' required />
                        </div>

                        {/* email id */}
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

                        {/* phone number */}
                        <label>
                            Phone Number
                            <span className='form-required'> *</span>
                        </label>
                        <div className='col'>
                            <input type='text' className='form-control' id='phone-number' onChange={this.handlePhoneNumber.bind(this)} placeholder='Phone Number' aria-label='phone number' required />
                        </div>

                        {/* address */}
                        <label>Address
                        <span className='form-required'> *</span>
                        </label>
                        <div className='col'>
                            <textarea className='form-control' id='address' onChange={this.handleAddress.bind(this)} placeholder='Address' aria-label='Address' required />
                        </div>

                        {/* submit button  */}
                        <div className='submit-btn'>
                            <button type='submit'  className='btn btn-primary'  id='sbtn'>Submit</button>
                        </div>
{/* 
        localStorage. setItem('myData', data);
        console.log(newState);   */}
                        <div>{this.state.firstname}</div>
                        <div>{this.state.lastname}</div>
                        <div>{this.state.emailid}</div>
                        <div>{this.state.password}</div>
                        <div>{this.state.phonenumber}</div>
                        <div>{this.state.address}</div>





                    </div>
                </form>
            </div>
        )
    }
}

export default Signup
