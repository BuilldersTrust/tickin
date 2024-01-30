import "./Partners.scss"
import React from 'react'
import btc from "../../assets/partners/BTC.png"
import crypto from "../../assets/partners/crypto.png"
import cointelegraph from "../../assets/partners/cointelegraph.png"
import defy from "../../assets/partners/defy.png"
import heroes from "../../assets/partners/heroes.png"
import investing from "../../assets/partners/investing.png"
import ticketing from "../../assets/partners/ticketing.png"
import xtixs from "../../assets/partners/xtixs.png"
import ziggo from "../../assets/partners/ziggo.png"




export default function Partners() {
    return (
        <div className="partners-section">

            <div className="row">
                <div className="col">
                    <img src={crypto} alt="" />
                </div>
                <div className="col">
                    <img src={investing} alt="" />
                </div>
                <div className="col">
                    <img src={cointelegraph} alt="" />
                </div>
                <div className="col">
                    <img src={ticketing} alt="" />
                </div>
                <div className="col">
                    <img src={btc} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={defy} alt="" />

                    </div>
                    <div className="row">
                        <img src={xtixs} alt="" />

                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src={heroes} alt="" />

                    </div>
                    <div className="row">
                        <img src={ziggo} alt="" />

                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>


            </div>


        </div>
    )
}
