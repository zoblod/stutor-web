import './About-Us.css';
import React from "react";

class AboutUs extends React.Component{
    render(){
        return(
            <div className='body'>
                <div className='title'>
                    <h1> About Us </h1>
                </div>
                <div className='statement'>
                    <p className='statement-body'>
                        Stutor is an industry leading on-demand tutoring platform connecting students-to-students. Using AI to match you to the perfect tutor, Stutor matches students to other students at your university so they can get the class specific help they need, whenever they need. 
                        <br></br>
                        <br></br>
                        As a student, you get the help you need, as a stutor, you make a living wage in your spare time. It’s a true win-win. 
                        Stay tuned as Stutor comes to your university! 
                    </p>
                </div>
            </div>
            
        );
    }
}

export default AboutUs;