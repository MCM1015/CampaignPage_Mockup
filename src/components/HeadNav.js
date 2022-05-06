import { Link } from "react-router-dom";
import React from "react";
import ReeseLogo from "../images/ReeseLogo.jpg";
import donatebutton from '../images/donatebutton.png';

function HeadNav() {
  return (
    <div className="navContainer navbar navbar-dark bg-dark p-2 flag d-flex justify-content-center">
      <div>
        <ul className="nav">
          <li>
            <Link to={`/`}><img src={ReeseLogo} className="mw-100 logo" alt="logo" /></Link>
          </li>
        </ul>
      </div>
      <div className="head1">
        <ul className="nav">
          <li className="nav-link">
            <Link to={`/AboutDave`} id="links">About Dave</Link>
          </li>
          <li className="nav-link">
            <Link to={`/Issues`} id="links">Issues</Link>
          </li>
          <li className="nav-link">
            <Link to={`/Events`} id="links">Events</Link>
          </li>
          <li className="nav-link">
            <Link to={`/Volunteer`} id="links">Volunteer</Link>
          </li>
          <li className="nav-link">
            <a href="https://elections.carrollcountymd.gov/Registration.aspx" target="_blank" rel="noreferrer" id="links">Register to Vote</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav">
          <li>
            <a href="https://secure.anedot.com/ba37e0a0-7d02-4a64-a713-bd41e37a7683/donate" target="_blank" rel="noreferrer" id="links">
              <img src={donatebutton} className="donate" id="donate" alt="donate" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeadNav;
