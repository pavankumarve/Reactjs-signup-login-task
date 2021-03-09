import React, { Component } from 'react'

class FormikLogin extends Component {
    handleLogin = (event) => {
        event.preventDefault()
        this.props.history.push('/home')
        window.alert('Login Sucess')
    }
    render() {
        return (
            <div>
                <h1 className='Formik-h1'>Hi kumar</h1>
                <form onSubmit={this.handleLogin.bind(this)}>
                    <div className='form'>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className='form'>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className='submit-btn-formik'>
                        <button type="submit" className='btn btn-primary' btn-primary >Submit</button>
                    </div>
                </form>


            </div>
        )
    }
}
export default FormikLogin
