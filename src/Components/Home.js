import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    handleEvent = (event) => {
        this.props.history.push('/FormikLogin')
    }

    render() {
        return (
            <div className="pt-5">
                <h1>Home page</h1>
                <div>
                    {/* <Link className='a-link primary' to='/FormikLogin' >Formik Login </Link>  */}
                    <a className='a-link primary' onClick={this.handleEvent.bind(this)}>Formik Login</a>
                </div>
                <div>
                    <Link className='a-link primary' to='/FormikSignup' >Formik SignUp </Link>
                </div>
            </div>

        )
    }
}

export default Home