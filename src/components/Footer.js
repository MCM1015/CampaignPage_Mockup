import React from 'react';
import Facebook from '../images/Facebook.png';
import email from '../images/email.png';

function Footer() {
    return (
        <div className="Footer p-2">
            <div>
                <div className='row p-1'>
                    <div className='col p-1'>
                        <a href="https://www.facebook.com/Dave-Reese-for-Carroll-County-Commissioner-146850600848353" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook" className="icon" /></a>
                    </div>
                    <div className='col p-1'>
                        <a href="mailto:dreese4commissioner@gmail.com"><img src={email} alt="email" className="icon" /></a>
                    </div>
                </div>
                {/* <div className='d-flex justify-content-center p-1'>
                    <button className="btn btn-danger">DONATE</button>
                </div> */}
                <div className='d-flex justify-content-center p-1'>
                    <p className="foot">By Authority: Stacey Nash</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;