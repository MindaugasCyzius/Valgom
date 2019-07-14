import React from 'react'; 
import { Link } from 'react-router-dom'  
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <Link to='/' className="navbar-brand">Valgom</Link> 
                <div class="collapse navbar-collapse" id="navbarResponsive">  
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>    
            </div>
        </nav>
    );
}
export default Navbar;