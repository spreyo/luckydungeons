import React from 'react'
import "./Hero.min.css"
import 'animate.css';

export const Hero = () => {
    return (
        <>
            <img src="/images/bg.png" id="hero-img" className=" w-screen h-screen object-cover opacity-70 absolute left-0"></img>
            <div id="hero" className=" w-screen h-screen absolute top-10 left-0 right-0 bottom-0 flex flex-col justify-start align-top">
                <div>

                    <h1 id="hero-header" className=" text-6xl mt-52 ml-24 drop-shadow-2xl animate__animated animate__faster animate__fadeInUp">Lucky Dungeons</h1>
                    <p id="hero-subheader" className=" text-3xl ml-44 mt-5 animate__animated animate__slideInLeft">Where fortune favors the brave!</p>
                </div>
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
