import React from 'react'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className='h-[70vh] md:h-[90vh] z-0 relative'>
        <div className="h-full w-full">
            <img src={hero} alt="hero section" className='h-full w-full object-fill brightness-[60%]'/>
        </div>
        <div className="text-center w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
            <h1 className='text-2xl font-bold text-white md:text-5xl'>Welcome to BlogSpot</h1>
            <h3 className='text-white text-md text-semibold md:text-2xl my-2'>Discover intersting blogs for reading and understanding</h3>
            <button  className='bg-blue-600 text-white font-bold py-1 text-md rounded-md px-5 my-3 md:px-10 md:py-3 md:text-xl'>Read More</button>
        </div>
    </section>
  )
}

export default Hero
