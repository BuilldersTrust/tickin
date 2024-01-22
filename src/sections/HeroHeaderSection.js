import HeroImg1 from "../assets/heroImgs1.png"
import HeroImg2 from "../assets/heroImgs2.png"
import HeroImg3 from "../assets/heroImgs3.png"

function HeroHeaderSection() {
    return (
        <>           
        <section className='hero-section flex '>
            <div className='hero-txt'>
                <h1 className=" ">Tickin,</h1>
                <p className=''>An Event Ticketing Platform That Brings The World Together In Harmony Through Events </p>

                <div className="hero-btns">
                    <buttons type='submit' className=''>Create Event</buttons>
                    <buttons type='submit' className=''>Buy Ticket</buttons>
                </div>
            </div>
            <div className='hero-img items-end justify-between relative'>
                <img className="w-[300px]  h-[300px]   left-[700px] top-6" src={HeroImg1} alt="disco" />
                <img className="w-[300px]  h-[300px] absolute left-6 top-6" src={HeroImg2} alt="praise" />
                <img className="w-[300px] border-2 h-[300px] absolute left-5 top-6" src={HeroImg3} alt="share" />
            </div>
        </section>
        </>
    )
}

export default HeroHeaderSection;