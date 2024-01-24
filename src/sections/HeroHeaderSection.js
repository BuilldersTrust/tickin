/* eslint-disable no-unused-vars */
import HeroImg from "../assets/hero11.png"
import react from 'react'
import "./HeroHeaderSection.scss"

function HeroHeaderSection() {
    return (
        <div className=" hero-pattern container">
            <section className='hero-section flex  justify-between  px-20 py-10 ' >
                <div className='hero-txt   '>
                    <h1 className="text-[53px] font-semibold ">Tickin,</h1>
                    <p className='  w-[90%]'>An Event Ticketing Platform That Brings The World Together In Harmony Through Events </p>

                    <div className="hero-btns flex py-10 ">
                        <buttons type='submit' className='bg-[#194486] px-8 py-2 rounded-lg text-white'>Create Event</buttons>
                        <buttons type='submit' className='border-2 border-[#194486] py-2 px-8 ml-6 rounded-lg text-[#194486]'>Buy Ticket</buttons>
                    </div>
                </div>
                <div className='hero-img w-1/2    ' >
                    <img className="ml-64  " src={HeroImg} alt=""/>
                </div>
            </section>
        </div>
    )
}

export default HeroHeaderSection;