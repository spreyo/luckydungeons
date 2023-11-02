import React, { useEffect } from 'react'
import "./Hero.min.css"
import 'animate.css';
import { DungeonsButton } from './DungeonsButton';

export const Hero = () => {
    useEffect(() => {
        console.log(window.screen);
    })
    return (
        <>
            <img src="/images/bg.png" id="hero-img" className=" w-screen h-screen object-cover opacity-70 absolute left-0"></img>
            <div id="hero" className=" w-screen h-screen absolute top-10 left-0 right-0 bottom-0 flex flex-row justify-start align-top">
                <div className='flex flex-col justify-start mt-52 w-max ml-24'>

                    <h1 id="hero-header" className=" text-6xl drop-shadow-2xl animate__animated animate__faster animate__fadeInUp">Lucky Dungeons</h1>
                    <p id="hero-subheader" className=" text-3xl ml-24 mt-5 animate__animated animate__slideInLeft">Where fortune favors the brave!</p>
                    <div className='flex justify-center text-center mt-5'>

                        <DungeonsButton text={"mc.dungeons.bet"} hoverText={"COPY"} onClick={() => { navigator.clipboard.writeText("mc.dungeons.bet") }} />
                    </div>


                </div>
                <img src="/images/skinpose.png" id="skin-img-spreyo"></img>
                <img src="/images/skinpose2.png" id="skin-img-hype"></img>
                <img src="/images/skinpose3.png" id="skin-img-kenny"></img>
                <div id="hero-cards" className=" mt-auto flex w-screen h-screen justify-center gap-8 animate__faster animate__animated animate__slideInUp">
                    <div className='hero-wrap'>
                        <div className="hero-card" style={{ backgroundImage: "url(\"/images/dungeons.png\")" }}>
                            <div>
                                <h1 className='hero-card-text'>DUNGEONS</h1>
                            </div>
                        </div>
                    </div>
                    <div className='hero-wrap'>
                        <div className="hero-card" style={{ backgroundImage: "url(\"/images/crates.png\")" }}>
                            <div>
                                <h1 className='hero-card-text'>CRATES</h1>
                            </div>
                        </div>
                    </div>
                    <div className='hero-wrap'>
                        <div className="hero-card" style={{ backgroundImage: "url(\"/images/dungeons.png\")" }}>
                            <div>
                                <h1 className='hero-card-text'>DUNGEONS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
