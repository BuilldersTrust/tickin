import React from 'react'
import Navbar from '../components/Navbar'
import MiniCard from './createeventUtil/Card'
import EventCard from '../sections/createeventUtil/EventCard'

function EventCreatorDashboard() {
  return (
    <div>
      <Navbar />
      <MiniCard />

      <EventCard />
    </div>
  )
}

export default EventCreatorDashboard