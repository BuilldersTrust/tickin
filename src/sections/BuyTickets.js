import React from 'react';
import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import './BuyTickets.scss';
import BuyTicketCard from '../components/BuyTicketCard';

function BuyTickets() {
  return (
    <>
      <Navbar />
        <div className='buyticket_hero'>
          <div className='search' >
          <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
          <input type="text" placeholder='Search for event title or seller' />
          <button type='submit'>Search</button>
          </div>
          <h1>Clean Energy For Your Home And Business</h1>
        </div>
        <section>
          <BuyTicketCard />
        </section>
    </>
  );
}

export default BuyTickets;
