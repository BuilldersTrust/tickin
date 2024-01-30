import React from 'react';
import TicketCardData from '../data/ticketsCardData';
import './BuyTicketCard.scss'

function BuyTicketCard() {
    return (
        <div className="ticket-cards-container">
            {TicketCardData.event_data.event_listings.map((ticket) => (
                <div key={ticket.id} className="ticket-card">
                    <div className="ticket-card-text">
                        <h1 className="ticket-card-title">{ticket.event_name}</h1>
                        <div className={`status ${ticket.status}`}>{ticket.status}</div>
                        <button className="ticket-card-button">Buy Ticket</button>
                    </div>
                    <div className="ticket-card-img">
                        <img src={ticket.url} alt="event" />
                    </div>
                    <div className="ticket-card-body">
                        <div className="ticket-card-info">
                            <p>Category: {ticket.category}</p>
                            <p>Price: {ticket.price}</p>
                        </div>
                        <p>Location: {ticket.location}</p>
                        <p>Event Dates: {ticket.event_dates ? `${ticket.event_dates.start_date} - ${ticket.event_dates.end_date}` : `${ticket.start_date} - ${ticket.end_date}`}</p>
                        <p>Sales End: {ticket.sales_end}</p>
                    </div>
                    <div className="ticket-card-footer">
                        <a href={ticket.url} className="ticket-card-link">More Info</a>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default BuyTicketCard;
