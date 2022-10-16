import React from "react";
import logo from '../assets/word.png'

function Header() {
    return ( 
        <div className="Navbar">
            <img src={logo} alt=""/>
            <h1>my travel journal.</h1>
        </div>
     );
}

export default Header;