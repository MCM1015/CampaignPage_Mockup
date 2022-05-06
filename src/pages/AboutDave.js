// "start": "node server/server.js",

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';
import pic9 from '../images/pic9.jpg';
import pic10 from '../images/pic10.png';
import pic11 from '../images/pic11.png';
import strawpoll from '../images/strawpoll.jpg';


function AboutDave() {
    return (
        <div>
            <div className="headers">
                <h1 className="headers1">ABOUT DAVE</h1>
            </div>
            <div className="About">
                <div className="bio">
                    <p>
                        Hello, my name is Dave Reese. I am running for County Commissioner representing District 2 which is the Hampstead/Finksburg/Gamber district.I have lived in Carroll County for 47 years and recently retired after working over 30 years in the County Government.
                    </p>
                </div>
                <div className="d-flex justify-content-center m-auto">
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/2hao2VJROOE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
                <div className="bio">
                    <p>
                        As a publice servant I have learned the needs of the Citizens of Carroll and grew to be a strong leader for the County. As being Deputy Director of Public Works, I have worked with all the Bureaus in the County which serves YOU, the public. Now, as an employee with the Sheriff's Department, I have learned the aspects of Public Safety that protects all of us.
                    </p>
                </div>
                <div className="d-flex justify-content-center m-2">
                    <Carousel>
                        <Carousel.Item className="carousel-item">
                            <img src={strawpoll} id="carousel" alt="straw poll" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic9} id="carousel" alt="endorsement" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic10} id="carousel" alt="endorsement" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic11} id="carousel" alt="endorsement" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic5} id="carousel" alt="Dave and Friends" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic2} id="carousel" alt="Daveand Mascot" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic3} id="carousel" alt="Dave" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic4} id="carousel" alt="Dave and Family" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic6} id="carousel" alt="Dave and Family" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic7} id="carousel" alt="Dave and Family" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic8} id="carousel" alt="little girl" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="bio">
                    <p>
                        "We are pleased to announce our endorsement of Dave Reese for Carroll County Commissioner, District 2. Mr. Reese has over 30 years of experience in County Government who promoted his way from a Road Maintenance worker through several management positions and eventually to Deputy Director of Public Works. This front line experience will help him serve the citizens of Carroll County greatly."
                        <br></br>
                        -Carroll County FOP Lodge 20
                    </p>
                </div>
                <div className="bio">
                    <p>
                        "Mr. Reese brings a wealth of experience in local government.  Additionally, education funding is one of his highest priorities."
                        <br></br>
                        -CCEA
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutDave;