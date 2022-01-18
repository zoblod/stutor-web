import './Home.css';
import React from "react";
import FirstImage from './38.png';
import SecondImage from './6.png';
import Logo from './logo.png';

import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className='body'>
                <div className='logo-container'>
                    <img src={Logo} className='logo-img' alt='banner'></img>
                </div>
                <div className='container-group-1'>
                    <div className='container-1'>
                        <h1 className='title'> Stutor </h1>
                        <h2 className='sub-title'> A whole new way to learn & connect. </h2>
                        <div className='action-button-container'>
                            <Link to="/about-us" className='action-button-1'> Learn More </Link>
                        </div>
                        
                    </div>
                    <div className='container-2'>
                        <img src={FirstImage} className='container-1-img' alt='demonstration'></img>
                    </div>
                </div>
                
                <div className='container-group-2'>
                    <div className='container-1-group2'>
                        <img src={SecondImage} className='container-2-img' alt='demonstration'></img>
                    </div>
                    <div className='container-2-group-2'>
                        <h1 className='title'> Coming Soon To Your University</h1>
                        <h2 className='sub-title'> Early 2022 </h2>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;