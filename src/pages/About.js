import React from 'react';
import Profilepic from '../images/Profilepic.jpg';

function About() {
    return (
        <div className="About p-2">
            <div className="container">
                <div className="row p-2 align-items-center">
                    <div className="col-lg d-flex justify-content-center">
                        <img src={Profilepic} className="mw-100 h-auto" alt="Headshot" />
                    </div>
                    <div className="col-lg About1">
                        <h4>
                            Hello, my name is Dave Reese. I am running for County Commissioner representing District 2 which is the Hampstead/Finksburg/Gamber district. I have lived in Carroll County for 47 years and recently retired after working over 30 years in the County Government. As a publice servant I have learned the needs of the Citizens of Carroll and grew to be a strong leader for the County. As being Deputy Director of Public Works, I have worked with all the Bureaus in the County which serves YOU, the public. Now, as an employee with the Sheriff's Department, I have learned the aspects of Public Safety that protects all of us.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;