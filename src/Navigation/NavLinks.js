import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';
const NavLinks = (props) => {
    return (
        
        <ul className="nav-links">  
            <li><Link to="/search">SEARCH MOVIES</Link></li>
            <li><Link to="/auth">AUTHENTICATE</Link></li>
        </ul>  
    );
}
export default NavLinks;