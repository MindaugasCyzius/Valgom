import React from 'react'; 
import { NavLink } from 'react-router-dom' 

const SignedOutLinks = () => {
    return( 
            <ul class="navbar-nav ml-auto"> 
                <li className="nav-item"><NavLink className="nav-link" to='/'>Sign Up</NavLink></li> 
                <li className="nav-item"><NavLink className="nav-link" to='/'>Log In</NavLink></li> 
            </ul> 
    );
}
export default SignedOutLinks;