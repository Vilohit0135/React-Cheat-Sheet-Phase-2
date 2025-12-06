import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const NavLinkCSS = ({isActive})=>{
        return{
            fontWeight:isActive ?'bold':'normal',
            fontSize:isActive ?'23px':'20px'
        }
    }
    return(
        <nav className="main-nav">
            <NavLink style={NavLinkCSS} to="/"> Home </NavLink>
            <NavLink style={NavLinkCSS} to="/about"> About </NavLink>
            <NavLink style={NavLinkCSS} to="/products"> Products </NavLink>
            <NavLink style={NavLinkCSS} to="/contact">Contant</NavLink>
        </nav>
    )
};

export default NavBar;