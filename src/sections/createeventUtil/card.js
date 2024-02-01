import React from 'react'
import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const status = [
    {
        event_name: " Events Created",
        num_bers: 42,
        id: 1
    },
    {
        event_name: "Tickets sold",
        num_bers: 42,
        id: 2,
    },
    {
        event_name: "Ongoing Events",
        num_bers: 42,
        id: 3,
    }
    ,
    {
        event_name: "Outgoing Events",
        num_bers: 42,
        id: 4,
    }
];

function Card() {
    return (
        <div className="status-cards">
            {status.map((stat, index) => (
                <div className="card" key={index}>
                    <div >
                        <h5 className="card-title">{stat.event_name}</h5>
                    </div>
                    <div className="card-header">
                        <p className="card-number">{stat.num_bers}</p> <span className="card-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
export { status, Card };
