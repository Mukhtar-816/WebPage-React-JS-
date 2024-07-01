import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-15">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Developers Era To
                <span className="bg-gradient-to-r from-violet-400 to-purple-950 text-transparent bg-clip-text">
                   {' '}
                   Code AI.....!
                </span> 
            </h1>
            <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
                We code here to Make AI to code for us, yet no longer binded to be vulnerable in upcoming Surviving Era, along with we our building our team to grow further in horizons.
            </p>
            <div className="flex justify-center my-10 mt-20">
                <a href="#" className="bg-gradient-to-r from-violet-500 to-purple-950 py-3 px-4 mx-3 rounded-md">Start For Free</a>
                <a href="#" className="py-3 px-4 ml-2 rounded-md border">Documentation</a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className='rounded-lg w-2/5 border border-purple-700 shadow-purple-400 mx-2 my-4'>
                <source src={video1} type='video/mp4'/>
                </video>
                <video autoPlay loop muted className='rounded-lg w-2/5 border border-purple-700 shadow-purple-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                </video>
            </div>
        </div>
    )
}

export default HeroSection
