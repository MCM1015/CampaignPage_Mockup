import React from "react";
import sticker from "../images/sticker.jpg"
import Americanflag from "../images/Americanflag.png"

function Volunteer() {
    return (
        <div className="Volunteer p-2">
            <div className="container">
                <div className=" row p-1 align-items-center">
                    <div className="col-lg">
                        <img src={Americanflag} className="mw-100 h-auto" alt="sticker" />
                    </div>
                    <div className="col-lg">
                        <h4>
                            Thank you all for your support in my campaign for County Commissioner. We are looking for sign installers and door knockers to get our message out. Please contact my Campaign Manager Vince Corsaro at <a href="tel:4105965957">410-596-5957</a> if you are interested in helping out with my campaign. You can also email me at <a className="email" href="mailto:dreese4commissioner@gmail.com?subject=Interested in Volunteering">dreese4commissioner@gmail.com</a>.
                        </h4>
                    </div>
                    <div className="col-lg d-flex justify-content-center">
                        <img src={sticker} className="mw-100 h-auto" alt="sticker" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Volunteer;