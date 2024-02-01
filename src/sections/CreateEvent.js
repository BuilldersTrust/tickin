import React from 'react'
import Navbar from '../components/Navbar'
import MiniCard from '../sections/createeventUtil/Card' 
import EventCard from '../sections/createeventUtil/EventCard'

function CreateEvent() {
  return (
    <div>
      <Navbar />
      <MiniCard /> 
      
      <EventCard />
    </div>
  )
}

export default CreateEvent
