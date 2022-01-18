import React from "react";
import './NavigationBar.css';
import { Link } from 'react-router-dom';
class NavigationBar extends React.Component{
    render(){
        return(
            <div className="Navigation-Bar">
                <a className="logo" href="/">Stutor</a>
                <div className='Navigation-Bar-Link-Group'>
                    <Link to="/" className="Navigation-Bar-Link">Home</Link>
                    <Link to="/about-us" className="Navigation-Bar-Link">About Us</Link>
                    
                </div>
                
            </div>
        )
    }
}

export default NavigationBar;