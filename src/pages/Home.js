import React from 'react';
import mdshapeoutline from '../images/mdshapeoutline.png'

function Home() {
    return (
        <div className="Home p-2">
            <div>
                <div id="hometop">
                    <h2 className="p-1" id="title">ELECT A PROVEN LEADER</h2>
                    <p className="p-1" id="info">RETIRED AS DEPUTY DIRECT OF PUBLIC WORKS FOR CARROLL COUNTY GOVERNMENT OVERSEEING 5 BUREAUS: <br></br>ROADS, ENGINEERING, FLEET, SOLID WASTE AND TRANSIT. <br></br>CURRENTLY EMPLOYED AS PROCUREMENT OFFICER FOR CARROLL COUNTY SHERIFFS OFFICE.</p>
                    <h4 className="p-1" id="title2">ELECT A TRUE LEADER THAT KNOWS THE COUNTY GOVERNMENT AND THE NEEDS OF THE CITIZENS</h4>
                    <div>
                    <img className="homeimg" src={mdshapeoutline} alt="Maryland outline" />
                    </div>
                    <div id="homebottom">
                        <h2 className="p-1">VOTE DAVE REESE COUNTY COMMISSIONER DISTRICT 2</h2>
                        <h4 className="p-1">Primary Election July 19, 2022</h4>
                        <h4 className="p-1">General Election November 8, 2022</h4>
                        <h2 className="p-1">EXPERIENCE | KNOWLEDGE |  COMMITTMENT</h2>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Home;