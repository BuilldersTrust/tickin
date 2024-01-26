import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../sections/LandingPage/HeroHeaderSection";
import About from "../sections/LandingPage/About";
import NFT from "../sections/LandingPage/Nft";
import Footer from "../sections/LandingPage/Footer";
import CTA from '../sections/LandingPage/CTA';

function Home() {
    return (
        <>
            <div >
                <Navbar />
                <Hero />
                <About />
                <NFT />
                <CTA/>
                <Footer />
            </div>
        </>
    )
}

export default Home