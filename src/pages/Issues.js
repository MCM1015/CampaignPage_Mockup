import React from "react";

function Issues() {
    return (
        <div>
            <div className="headers">
                <h1 className="headers1">DAVE ON THE ISSUES</h1>
            </div>
            <div className="Issues">
                <div className="ihead">
                    <h1>My 4 points of focus as your Commissioner will be:</h1>
                </div>
                <div className="row">
                    <div className="col-md" id="icontent1">
                        <div className="card-body itext">
                            <h5 className="issuestitle">Public Safety</h5>
                            <p>Deeply Committed to Public Safety, Police, Fire and Health.</p>
                        </div>
                    </div>
                    <div className="col-md" id="icontent2">
                        <div className="card-body itext">
                            <h5 className="issuestitle">Education</h5>
                            <p>Thoroughly Devoted to Superior Education for our Children.</p>
                        </div>
                    </div>
                    <div className="col-md" id="icontent3">
                        <div className="card-body itext">
                            <h5 className="issuestitle">Business</h5>
                            <p>Profoundly support Business in Carroll County.</p>
                        </div>
                    </div>
                    <div className="col-md" id="icontent4">
                        <div className="card-body itext">
                            <h5 className="issuestitle">Infrastructure</h5>
                            <p>Highly Dedicated in strong infrastructure to keep Carroll moving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Issues;