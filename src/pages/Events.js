import React from "react";
import cashBingo from '../images/cashBingo.png';
import eventpic1 from '../images/eventpic1.jpg';
import eventpic2 from '../images/eventpic2.jpg';


function Events() {
    return (
        <div className="Events p-2">
            <div className="d-flex justify-content-center">
                <h2>Events:</h2>
            </div>
            <div className="row">
                <div className="col-sm-6" id="events">
                    <div>
                        <h3>Interview March 6th @ 9am</h3>
                    </div>
                    <iframe
                        className="h-50 w-75"
                        src="https://www.youtube.com/embed/2hao2VJROOE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
                <div className="col-sm-6" id="events">
                    <div>
                        <h3>CASH BINGO</h3>
                    </div>
                    <img src={cashBingo} className="mw-100 h-auto" alt="Cash Bingo" />
                </div>
                <div className="col-sm-6" id="events">
                    <div>
                        <h3>Walk in the Park at Cape Horn Park</h3>
                    </div>
                    <img src={eventpic1} className="mw-100 h-auto" alt="walk in the park" />
                </div>
                <div className="col-sm-6" id="events">
                    <div>
                        <h3>Groundbreaking Ceremony - Hampstead Volunteer Fire Company</h3>
                    </div>
                    <img src={eventpic2} className="mw-100 h-auto" alt="Hampstead Vol Fire Company" />
                </div>
            </div>
        </div>
    );
}

export default Events;