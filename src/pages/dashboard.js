import "./dashboard.scss"
import HeroHeaderSection from "../sections/HeroHeaderSection";
import Navbar from "../components/Navbar"

import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <HeroHeaderSection />
    </div>
  )
}
