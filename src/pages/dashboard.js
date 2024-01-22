import "./dashboard.scss"
import HeroHeaderSection from "../sections/HeroHeaderSection";
import About from "../sections/About";
import NFT from "../sections/Nft";
import Navbar from "../components/Navbar"

import React from 'react'
import Footer from "../sections/Footer";

export default function Dashboard() {
  return (
    <div className="container">
      <Navbar />

      <HeroHeaderSection />
      <About/>
      <NFT/>
      <Footer/>
    </div>
  )
}
