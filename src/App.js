import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Users from './Components/Users'
import Nav from './Components/Nav'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useFormik } from 'Formik' ;
// import UsersData from './Components/UsersData'
// import FormData from './Components/FormDataComponent'
import Box from './Components/Box';


function App() {
  return (
    <Router>
        <div className='App'>
        <Nav />
        {/* routing  */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/users' component={Users} />
          <Route path='/Box' component={Box} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
