import React, { Component } from 'react'

class FormikSignup extends Component {
    render() {
        return (
            <div>
                <h1 className='Formik-h1'>Hi pavan</h1>
                <form className='form' >

                    {/* full name */}
                    <div className='row'>
                        <label>Full Name
                        <span className='form-required'> *</span>
                        </label>
                        <div className='col-sm-6'>
                            <input type='text' className='form-control' id='first-name' placeholder='First name' aria-label='First name' maxLength='20' minLength='3' required />
                        </div>
                        <div className='col-sm-6'>
                            <input type='text' className='form-control' id='last-name' placeholder='Last name' aria-label='Last name' maxLength='20' minLength='3' required />
                        </div>

                        {/* email id */}
                        <label>
                            Email Id
                        <span className='form-required'> *</span>
                        </label>
                        <div className='col'>
                            <input type='text' className='form-control' id='email' placeholder='name@example.com' aria-label='email id' required />
                        </div>

                        {/* password */}
                        <label>
                            Password
                        <span className='form-required'> *</span>
                        </label>
                        <div className='col'>
                            <input type='password' className='form-control' id='password' placeholder='Password' aria-label='password' required />
                        </div>

                        {/* phone number */}
                        <label>
                            Phone Number
                            <span className='form-required'> *</span>
                        </label>
                        <div className='col'>
                            <input type='text' className='form-control' id='phone-number' placeholder='Phone Number' aria-label='phone number' required />
                        </div>

                        {/* address */}
                        <label>Address
                        <span className='form-required'> *</span>
                        </label>
                        <div className='col'>
                            <textarea className='form-control' id='address' placeholder='Address' aria-label='Address' required />
                        </div>

                        {/* submit button  */}
                        <div className='submit-btn'>
                            <button type='submit' className='btn btn-primary' id='sbtn'>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}
export default FormikSignup