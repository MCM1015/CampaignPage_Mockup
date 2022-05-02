import { Link } from "react-router-dom";
import React from "react";
import ReeseLogo from "../images/ReeseLogo.jpg";

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
          {/* <li>
        <button className="btn btn-danger">DONATE</button>
        </li> */}
        </ul>
      </div>
    </div>
  );
}

export default HeadNav;
