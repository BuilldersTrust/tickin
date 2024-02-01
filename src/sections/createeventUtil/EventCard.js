import React from 'react';
import './EventCard.scss'; // Import the SCSS stylesheet

const EventCard = ({ event }) => {
    return (
        <div className="event-card" key={event.id}>
            <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span className={`status ${event.status}`}>{event.status}</span>
            </div>
            <div className="event-content">
                <div className="event-header">
                    <h2>{event.title}</h2>
                    <div className="menu">...</div>
                </div>
                <div className="event-info">
                    <p className="category">Event Category: <span>{event.category}</span></p>
                    <div className="details">
                        <p className="location">{event.location}</p>
                        <p className="date">Start Date: <span>{event.startDate}</span></p>
                        <p className="date">End Date: <span>{event.endDate}</span></p>
                    </div>
                </div>
                <div className="event-footer">
                    <div className="tickets">
                        <div className="available-tickets">
                            <p>Available Ticket</p>
                            <span>{event.availableTickets}</span>
                        </div>
                        <div className="ticket-sales">
                            <p>Ticket Sales</p>
                            <span>{event.ticketSales}</span>
                        </div>
                    </div>
                    <div className="revenue">
                        <p>Revenue</p>
                        <span>${event.revenue.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
