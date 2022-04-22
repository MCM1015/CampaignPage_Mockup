import React from "react";

function Issues() {
    return (
        <div className="Issues p-2">
            <div className="d-flex justify-content-center p-2 About1">
                <h2>My 4 points of focus as your Commissioner will be:</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-50">
                    <div className="col-sm-12">
                        <div className="card" id="issues" >
                            <div className="card-body">
                                <h5 className="card-title">Public Safety</h5>
                                <p className="card-text">Deeply Committed to Public Safety, Police, Fire and Health.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card" id="issues">
                            <div className="card-body">
                                <h5 className="card-title">Education</h5>
                                <p className="card-text">Thoroughly Devoted to Superior Education for our Children.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card" id="issues">
                            <div className="card-body">
                                <h5 className="card-title">Business</h5>
                                <p className="card-text">Profoundly support Business in Carroll County.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card" id="issues">
                            <div className="card-body">
                                <h5 className="card-title">Infrastructure</h5>
                                <p className="card-text">Highly Dedicated in strong infrastructure to keep Carroll moving.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Issues;