import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <div>
                {/* routing */}
                <nav className='nav'>
                    <NavLink className='nav-link' activeClassName='active' to='/home'>Home</NavLink >
                    <NavLink className='nav-link' activeClassName='active' to='/login'>Login</NavLink >
                    <NavLink className='nav-link' activeClassName='active' to='/signup'>Signup</NavLink >
                    <NavLink className='nav-link' activeClassName='active' to='/users' >Users</NavLink >                   
                    <NavLink className='nav-link' activeClassName='active' to='/Box' >Box</NavLink >
                    
                </nav>

            </div>
        )
    }
}

export default Nav
