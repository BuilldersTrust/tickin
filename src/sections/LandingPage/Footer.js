import React from 'react';
import './Footer.scss'

export default function Footer() {


    return (
        <footer className='footer-section'>
            <div className='footer-overlay'></div>
            <div className='footer-content'>
                <div className='row'>
                    <div className='col'>
                        <p>Tickin</p>
                    </div>
                    <div className='col'>
                        <p>How It Works</p>
                    </div>
                    <div className='col'>
                        <p>About Tickin</p>

                    </div>
                    <div className='col'>
                        <p>Events</p>

                    </div>
                    <div className='col'>
                        <p>Connect With Us</p>

                    </div>
                </div>

            </div>
            <div className="foot-note">
                <p className="mb-0">&copy;TICKIN - 2023 All Rights Reserved.</p>
            </div>
        </footer>
    )
}
