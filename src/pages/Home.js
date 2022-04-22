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


function Home() {
    const voteReg = () => {
        window.open("https://elections.carrollcountymd.gov/Registration.aspx");
    };
    return (
        <div className="Home p-2">
            <div className='home2'>
                <h1 className="d-flex justify-content-center p-1">ELECT A TRUE LEARDER TO SERVE YOU AS I HAVE DONE FOR 33 YEARS</h1>
                <h3 className="d-flex justify-content-center p-1">Primary Election July 19, 2022</h3>
                <h3 className="d-flex justify-content-center p-1">General Election November 8, 2022</h3>
                <div className="d-flex justify-content-center p-3">
                    <button onClick={voteReg} className="btn btn-info">Register to Vote</button>
                </div>
            </div>
            <div className="d-flex justify-content-center m-2">
                    <Carousel>
                        <Carousel.Item className="carousel-item">
                            <img src={pic2} className="mw-100" alt="Daveand Mascot" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic3} className="mw-100" alt="Dave" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic4} className="mw-100" alt="Dave and Family" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic5} className="mw-100" alt="Dave and Friends" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic6} className="mw-100" alt="Dave and Family" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic7} className="mw-100" alt="Dave and Family" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img src={pic8} className="mw-100" alt="little girl" />
                        </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    )
};

export default Home;