import React from "react";

function Issues() {
    return (
        <div>
            <div className="headers">
                <h1 className="headers1">DAVE ON THE ISSUES</h1>
            </div>
            <div className="Issues">
                <div className="d-flex justify-content-center p-2 ihead">
                    <h2>My 4 points of focus as your Commissioner will be:</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row m-2">
                        <div className="col-md C" id="c1">
                            <div className="card" id="issues" >
                                <div className="card-body">
                                    <h5 className="card-title" id="issuestitle">Public Safety</h5>
                                    <p className="card-text">Deeply Committed to Public Safety, Police, Fire and Health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md C" id="c2">
                            <div className="card" id="issues">
                                <div className="card-body">
                                    <h5 className="card-title" id="issuestitle">Education</h5>
                                    <p className="card-text">Thoroughly Devoted to Superior Education for our Children.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md C" id="c3">
                            <div className="card" id="issues">
                                <div className="card-body">
                                    <h5 className="card-title" id="issuestitle">Business</h5>
                                    <p className="card-text">Profoundly support Business in Carroll County.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md C" id="c4">
                            <div className="card" id="issues">
                                <div className="card-body">
                                    <h5 className="card-title" id="issuestitle">Infrastructure</h5>
                                    <p className="card-text">Highly Dedicated in strong infrastructure to keep Carroll moving.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Issues;