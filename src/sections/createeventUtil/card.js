import React from 'react'

const status = [
    {
        event_name: " Events Created",
        num_bers: 42,
        id:1
    },
    {
        event_name: "Tickets sold",
        num_bers: 42,
        id:2,
    },
    {
        event_name: "Ongoing Events",
        num_bers: 42,
        id:3,
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
        <div>
            {status.map((stat, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{stat.event_name}</h5>
                        <p className="card-text">{stat.num_bers}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card; 
export { status, Card };
