import React from 'react'
import "./About.scss"
import Card from '../components/Card'

export default function Benefits() {
  return (
    <div className='about-section'>
      <div>Big benefits, readily available</div>
      <div> We help anyone who issues tickets worldwide to take
        advantage of the latest technological innovations</div>

      <div className='card-section'>
        <Card headerText="a" bodyText="b" icon="c"/>
        <Card headerText="a" bodyText="b" icon="c"/>
        <Card headerText="a" bodyText="b" icon="c"/>
        <Card headerText="a" bodyText="b" icon="c"/>

      </div>

    </div>
  )
}
