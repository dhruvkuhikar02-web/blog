import React from 'react'
import hero from '../assets/hero.jpg'
import { Link } from 'react-router-dom'

const Blogcart = ({ image, title, description, tag, views,id, author}) => {
    
    return (
      <Link to={`/blog/${id}`}>  <article className='h-full w-[200px] md:h-[400px] my-3 rounded-md overflow-hidden md:w-[350px] shadow-md hover:scale-[1.03] transition-all '>
            <div className="w-full h-[47%]">
                <img src={image} alt="blog detail" className='h-full w-full' />
            </div>
            <div className="details py-2 px-2 md:py-4 md:px-4">
                <div className=" items-center min-h-[130px] md:min-h-[150px]">
                    <span className=' bg-gray-200 py-1 text-xs px-2 rounded-full md:px-4  md:text-lg'>{tag}</span>
                    <h2 className='text-xs mt-1 font-semibold  md:text-lg md:mt-3'>{title} ?</h2>
                    <h4 className='text-sm text-gray-600 font-semibold'>{author}</h4>
                           <p className='text-xs text-gray-600 my-1 md:text-[13px]'>{description}</p>
                </div>
         
                <label className='text-[12px] font-semibold text-blue-600 md:text-[15px]'>Views : {views}</label>
            </div>
        </article></Link>
    )
}

export default Blogcart
