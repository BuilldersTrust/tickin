import React from 'react'
import "./About.scss"
import Card from '../../components/Card'
import { about } from '../../data/data'


export default function Benefits() {
  return (
    <div className='about-section'>
    <div className='text-section'>
    <div className='main-title'>Big benefits, readily available</div>
      <div className='sub-text'> We help anyone who issues tickets worldwide to take
        advantage of the latest technological innovations</div>

    </div>
      <div className='card-section'>

        {about.map((data, index) => {
          return (
            <div key={index} >
              <Card headerText={data.header} bodyText={data.text} icon={data.icon} />
            </div>
          )
        })}
      </div>

    </div>
  )
}
