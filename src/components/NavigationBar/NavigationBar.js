import React from "react";
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import Logo from "../NavigationBar/Stutor-Logo.png";
class NavigationBar extends React.Component{
    render(){
        return(
            <div className="Navigation-Bar">
                <Link to="/">
                    <img src={Logo} className="Navigation-Bar-Image" alt='Logo'></img>
                </Link>
                <div className='Navigation-Bar-Link-Group'>
                    <Link to="/about-us" className="Navigation-Bar-Link">About Us</Link>
                    <Link to="/contact-us" className="Navigation-Bar-Link">Contact Us</Link>
                </div>
                
            </div>
        )
    }
}

export default NavigationBar;