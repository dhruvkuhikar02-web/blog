import React, { useContext, useEffect, useState } from 'react'


import Blogcart from '../components/Blogcart';

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
              blog.sort((a,b)=>b.id - a.id).slice(0,4).map((b,k)=>{
                  return <Blogcart title={b.title} id={b.id} image={b.image} key={k} description={b.body.slice(0,90)} views={b.views} tag={b.tags[0]}/>
              })
            }
        </div>
         <div className="flex justify-between items-center mt-7">
          <h1 className='text-xl font-semibold md:text-4xl md:my-6 '>Popular Blogs</h1>
          <Link className='text-blue-700 font-medium md:text-xl'>View All</Link>
        </div>
         <div className="grid grid-cols-2 gap-2 md:grid-cols-4  md:gap-9">
            {
              blog.sort((a,b)=>b.views - a.views).slice(0,4).map((b,k)=>{
                  return <Blogcart title={b.title} id={b.id} image={b.image} key={k} description={b.body.slice(0,90)} views={b.views} tag={b.tags[0]}/>
              })
            }
            
        </div>
      </section>
    </main>
  )
}

export default Home
