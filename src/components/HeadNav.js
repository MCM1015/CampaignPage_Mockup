import { Link } from "react-router-dom";
import React from "react";

function HeadNav() {
  return (
    <div className="navContainer navbar navbar-dark bg-dark p-2">
      <div className="head1">
        <h3>DAVE REESE FOR CARROLL COUNTY COMMISSIONER DISTRICT 2</h3>
      </div> 
      <div className="head1">
      <ul className="nav">
        <li className="nav-link links">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="nav-link">
          <Link to={`/About`}>About</Link>
        </li>
        <li className="nav-link">
          <Link to={`/Issues`}>Issues</Link>
        </li>
        <li className="nav-link">
          <Link to={`/Events`}>Events</Link>
        </li>
        <li className="nav-link">
          <Link to={`/Volunteer`}>Volunteer</Link>
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
