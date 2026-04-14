import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/hero.jpg'
import Blogcart from '../components/Blogcart';
import { Tags } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/Blogcontext';
const Home = () => {
 
const {blog} = useContext(BlogContext)
  return (
    <main>
      <Hero />
      <section className='px-3 my-8 md:px-56'>
        <div className="flex justify-between items-center">
          <h1 className='text-xl font-semibold md:text-4xl md:my-6'>Latest Blogs</h1>
          <Link className='text-blue-700 font-medium md:text-xl'>View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4   md:gap-4">
            {
              blog.slice(1,5).map((b,k)=>{
                  return <Blogcart title={b.title} hero={hero} key={k} description={b.body.slice(0,90)} views={b.views} tag={b.tags[0]}/>
              })
            }
        </div>
         <div className="flex justify-between items-center">
          <h1 className='text-xl font-semibold md:text-4xl md:my-6'>Latest Blogs</h1>
          <Link className='text-blue-700 font-medium md:text-xl'>View All</Link>
        </div>
         <div className="grid grid-cols-2 gap-2 md:grid-cols-4  md:gap-9">
            {
              blog.slice(1,5).map((b,k)=>{
                  return <Blogcart title={b.title} hero={hero} key={k} description={b.body.slice(0,90)} views={b.views} tag={b.tags[0]}/>
              })
            }
            
        </div>
      </section>
    </main>
  )
}

export default Home
