import "./Statistics.scss"
import { statistics } from "../../data/data"

import React from 'react'

export default function Statistics() {
    return (
        <div className="statistics-section container">
            <div className="row">

                {statistics.map((data, index) => {
                    return (
                            <div key={index} className="col">
                                <div className="small-text">{data.uppertext}</div>
                                <div className="large-text">{data.number}</div>
                                <div className="small-text">{data.lowertext}</div>
                            </div>
                    )
                })}

            </div>
        </div>
    )
}
