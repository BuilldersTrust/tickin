import React from 'react'
import "./CreateEvent.scss"

function CreateEvent() {

  const eventCategories = [
    {
      label: "Corporate Event",
      value: "corporate",
    },
    {
      label: "Ceremonial Event",
      value: "ceremonial",
    },
    {
      label: "Professional Event",
      value: "professional",
    },
    {
      label: "Anniversary",
      value: "anniversary",
    },
    {
      label: "Book-Launch",
      value: "book",
    },
    {
      label: "Cultural",
      value: "cultural",
    },
    {
      label: "Networking",
      value: "networking",
    }
  ]

  return (
    <div className='create-event-page'>
      <div className='container'>
        <div className='row mb-3 page-title'>Create Events</div>
        <form className='row'>
          <div className='col'>

            <div class="mb-3">
              <label for="eventCategorySelector" class="form-label">Event Category</label>
              <select id="eventCategorySelector" class="form-select">
                <option disabled>Select Category</option>
                {eventCategories.map((data, index) => {
                  return (
                    <option key={index} value={data.value}>{data.label}</option>
                  )
                })}
              </select>
            </div>
            <div class="mb-3">
              <label for="eventTag" class="form-label">Event Tag</label>
              <input type="text" class="form-control" id="eventTag" placeholder="Type here" />
            </div>
            <div class="mb-3">
              <label for="location" class="form-label">Location</label>
              <input type="text" class="form-control" id="location" placeholder="Type here" />
            </div>
            <div class="mb-3">
              <label for="eventCapacity" class="form-label">Event Capacity</label>
              <input type="text" class="form-control" id="eventCapacity" placeholder="Type here" />
            </div>
            <div class="mb-3">
              <label for="startDate" class="form-label">Start Date</label>
              <input type="date" class="form-control" id="startDate" placeholder="Type here" />
            </div>
            <div class="mb-3">
              <label for="endDate" class="form-label">End Date</label>
              <input type="date" class="form-control" id="endDate" placeholder="Type here" />
            </div>
            <div class="mb-3">
              <label for="ticketPrice" class="form-label">Ticket Price ($)</label>
              <input type="number" class="form-control" id="ticketPrice" placeholder="Enter Price" />
            </div>
            <div class="mb-3">
              <label for="ticketNumber" class="form-label">Ticket Number</label>
              <input type="number" class="form-control" id="ticketNumber" placeholder="Enter number of tickets" />
            </div>

          </div>
          <div className='col'>
            <div class="mb-3">
              <label for="banner" class="form-label">Event Banner</label>
              <input type="file" class="form-control" id="banner" />
            </div>
            <div class="mt-12">
              <input type="submit" class="submit-button" value="Create Event" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEvent
