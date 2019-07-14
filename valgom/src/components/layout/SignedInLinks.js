import React from 'react'; 
import { NavLink } from 'react-router-dom' 

const SignedInLinks = () => {
    return(
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto"> 
                <li className="nav-item"><NavLink className="nav-link" to='/'>Add new product</NavLink></li> 
                <li className="nav-item"><NavLink className="nav-link" to='/'>Log Out</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to='/'>Testas testauskas</NavLink></li>
            </ul>
        </div>
    );
}
export default SignedInLinks;