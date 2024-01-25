import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../sections/HeroHeaderSection";
import About from "../sections/About";
import NFT from "../sections/Nft";
import Footer from "../sections/Footer";

function Home() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Hero />
                <About />
                <NFT />
                <Footer />
            </div>
        </>
    )
}

export default Home