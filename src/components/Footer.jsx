import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-blue-950 h-full w-full px-2 py-4 md:px-40 '>
        <div className="md:flex">
        <div className="text-white  ">
            <h1 className='text-xl font-semibold md:text-4xl'>BlogSpot</h1>
            <p className='text-sm my-2 md:text-xl md:w-1/2 md:my-4'>Sharing insights and stories from around the world for understanding every thoughts.</p>
            <p className='text-sm font-semibold text-blue-400 cursor-pointer'>BlogSpot@gmail.com</p>
        </div>
        <div className="text-gray-200 flex justify-between text-center mt-5 md:w-full">
            <div className="left">
                <h1 className='text-xl text-white mb-3 font-semibold'>Quick Links</h1>
                <p className='text-sm md:text-lg'>Home</p>
                <p className='text-sm md:text-lg'>About</p>
                <p className='text-sm md:text-lg'>All blogs</p>
                <p className='text-sm md:text-lg'>Create</p>
            </div>
            <div className="right ">
                <h1 className='text-xl text-white font-semibold mb-3'>Categories</h1>
                <p className='text-sm md:text-lg'>Technology</p>
                <p className='text-sm md:text-lg'>Travel</p>
                <p className='text-sm md:text-lg'>Love</p>
                <p className='text-sm md:text-lg'>Food</p>
                <p className='text-sm md:text-lg'>Health</p>
                <p className='text-sm md:text-lg'>Lifestyle</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <h1 className='text-xl text-white font-semibold mb-5 '>Follow Us</h1>
                <FaFacebook className='text-2xl ' /><span className='mb-2'>Facebook</span>
                <FaTwitter className='text-2xl'/><span className='mb-2'>Twitter</span>
                <FaInstagram className='text-2xl '/><span className='mb-2'>Instagram</span>
                <FaGithub className='text-2xl'/><span className='mb-2'>Gitgub</span>
            </div>
        </div>
        </div>
        <p className='text-center text-white mt-6 '>2026 Blogspot, All rights reserved</p>
    </footer>
  )
}

export default Footer
