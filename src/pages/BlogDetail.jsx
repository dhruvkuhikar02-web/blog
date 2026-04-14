import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../context/Blogcontext'
import hero from '../assets/hero.jpg'
import Blogcart from '../components/Blogcart'

const BlogDetail = () => {
  const { id } = useParams()
  const { blog } = useContext(BlogContext)
  const blogfilter = blog.find((b) => b.id === Number(id))
  if (!blogfilter) {
    return <h1>loading</h1>
  }
  return (
    <section className='md:px-48 h-full bg-slate-100 w-full p-4 md:p-0 md:py-4'>
      <div className="w-full  gap-4 h-full md:flex  md:gap-8 md:flex-row ">
        <div className="left-contaioner rounded-md bg-white md:w-[70%] p-5 md:shadow-md ">
          <div className="md:w-[80%]  md:h-[500px] mx-auto flex w-full h-[300px]">
            <img src={hero} alt="" className='h-full' />
          </div>
          <h1 className='text-2xl font-bold mt-4'>
            {blogfilter.title}?
          </h1>
          <h5></h5>

          <p className='mt-3 text-gray-600'>
            {blogfilter.body}
          </p>
        </div>
        <aside className='md:w-[25%] overflow-hidden bg-slate-100 md:shadow-sm md:h-full '>
          <div className="about-author p-4 h-full md:mt-0 my-5 md:h-full bg-white shadow-md rounded-md w-full">
            <h1 className='text-center font-semibold text-2xl mb-4'>About The Author</h1>
            <div className="imgae-and-info ">
              <div className="w-full h-[100px] items-center text-center gap-10  flex">
                <img src={hero} alt="" className='w-[100px] h-full rounded-full' />
                <div className="flex flex-col">
                  <p className='text-2xl'>{blogfilter.author}</p>
                  <p className='text-sm text-slate-600'>Date : {blogfilter.postdate}</p>
                </div>
              </div>
              <div className="w-full mt-4">

                <p className='text-gray-600 text-sm'>{blogfilter?.authoeDetail}</p>
              </div>
            </div>
          </div>
          <div className="relted-post rounded-md bg-white md:px-8 h-full mt-5 p-4 ">
              <h1 className='text-2xl my-3 font-semibold'>Related posts</h1>
              <div className="grid grid-cols-1 ">
                {blog.filter((b)=>b.tags[0] === blogfilter.tags[0]).slice(1,3).map((b,k)=>{
                  return <div className="w-full rounded-md my-2 shadow-md p-4">
                    <img src={hero} alt="" className='h-[200px] w-full' />
                       <h2 className='text-lg mt-1 font-semibold  md:text-lg md:mt-3'>{b.title} ?</h2>

                       <p className='text-md font-semibold text-gray-500'>{b.author}</p>
                  </div>
                })}
              </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default BlogDetail
