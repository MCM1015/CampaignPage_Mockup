import React from "react";
import cashBingo from '../images/cashBingo.jpg';
import eventpic1 from '../images/eventpic1.jpg';
import eventpic2 from '../images/eventpic2.jpg';
import eventpic3 from '../images/eventpic3.jpg';
import eventpic4 from '../images/eventpic4.jpg';
import eventpic5 from '../images/eventpic5.jpg';
import mdshapeoutline from '../images/mdshapeoutline.png'


function Events() {
    return (
        <div>
            <div className="headers">
                <h1 className="headers1">EVENTS</h1>
            </div>
            <div className="col contain">
                <img className="scrollimg" src={mdshapeoutline} alt="Maryland outline" />
                <div className="row left">
                    <div className="cards">
                        <img className="image" src={eventpic4} alt="Lincoln/Reagan Dinner" />
                        <div>
                            <h4 className="heading-left">Lincoln/Reagan Dinner</h4>
                            <p className="text-left">Had a great time at the Lincoln/Reagan Dinner sponsored by the Republican Central Committee. Thank you Sheriff DeWees and Commissioner Weaver for your endorsement. I appreciate the conversations with everyone</p>
                        </div>
                    </div>
                </div>
                <div className="row right">
                    <div className="p-2 cards">
                        <img src={eventpic3} className="image" alt="charles carroll community center" />
                        <h4 className="heading-right">Charles Carroll Community Center</h4>
                        <p className="text-right">Attended the ceremonial groundbreaking for the new Charles Carroll Community Center. The community will benefit from this for many years. Construction to be started soon and planned on a finish product about this time next year. This is one of the projects I plan on seeing to the end and dedicating its opening next year as your Commissioner.</p>
                    </div>
                </div>
                <div className="row left">
                    <div className="cards">
                        <img className="image" src={cashBingo} alt="Cash Bingo" />
                        <div>
                            <h4>Cash Bingo</h4>
                            <p className="text-left">Bingo night was a huge success! Thank you everyone for coming out and supporting me as your next Carroll County Commissioner. Special thank you to my campaign team, my wife and all my friends that came</p>
                        </div>
                    </div>
                </div>
                <div className="row right">
                    <div className="p-2 cards">
                        <img src={eventpic5} className="image" alt="Reese & Community Fire Company Annual awards dinner" />
                        <h4 className="heading-right">Reese & Community Fire Company Annual Awards Dinner</h4>
                        <p className="text-right">Had the pleasure of attending the Reese & Community Fire Company Annual Awards Dinner and ET-94 dedication at their social hall. The men and women of this company have been outstanding in serving the community throughout many years of service. One was recognized for 40 years of service and several were recognized for being top suppression/rescue responders with the top being 946 responses. There was a very heart felt dedication of the engine in honor of our fallen hero Robert A “Bobby” Jones. I am honored to support all of our Fire companies and the hard work and dedication they all do for the Citizens.</p>
                    </div>
                </div>
                <div className="row left">
                    <div className="cards">
                        <img className="image" src={eventpic2} alt="Hampstead Vol Fire Company" />
                        <div>
                            <h4 className="heading-left">Groundbreaking Ceremony - Hampstead Volunteer Fire Company</h4>
                            <p className="text-left">I was honored to be a part of the groundbreaking ceremony at Hampstead Volunteer Fire Company. Although this particular building has been here since 1975, Hampstead Volunteer Fire Company has been serving the community for well over 100 years. This dedication was near and dear to me being a resident of Hampstead for over 48 years and I am proud to see the building turning into a state of the art facility</p>
                        </div>
                    </div>
                </div>
                <div className="row right">
                    <div className="p-2 cards">
                        <img src={eventpic1} className="image" alt="walk in the park" />
                        <h4 className="heading-right">Walk in the Park at Cape Horn Park</h4>
                        <p className="text-right">Had a good night tonight meeting people at the first night at Walk in the Park at Cape Horn Park tonight. The trail is 1.04 miles. In cooperation and sponsorship from the County’s Rec and Parks Department, The Partnership for a Healthier Carroll County and Walk Carroll, each month at a different park in Carroll County they welcome everyone to come walk the park. The next scheduled walk is April 25th, 10 am at Sandymount Park</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;