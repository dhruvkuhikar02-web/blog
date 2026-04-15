import { Search } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/Blogcontext'
import Blogcart from '../components/Blogcart'
import hero from '../assets/hero.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Blog = () => {
  const {blog} = useContext(BlogContext)
const [sort,setsort] = useState('')
  const [filtervalue,setfiltervalue] = useState('All')
  const [search,setsearch] = useState('')


  const showblog = blog.filter((b)=>{
        const filterblog = filtervalue === 'All' || filtervalue === '' ? true : b.tags[0].toLowerCase().includes(filtervalue.toLowerCase());
          const searchBlog = b.tags[0].toLowerCase().includes(search.toLowerCase())
        
         
          return filterblog && searchBlog
  }  )
  const sortbytype = [...showblog].sort((a,b)=>{
 if(sort === 'Latest'){
  return b.id - a.id;
 }
  if(sort === 'Old'){
  return a.id - b.id;
 }
 if(sort === 'Popular'){
  return b.views - a.views;
 }

})

  const categories = [
    {'name':'All', 'value':'All'},
    {'name':'Love', 'value':'Love'},
     {'name':'History','value':'History'},
      {'name':'Lifestyle','value':'Lifestyle'},
       {'name':'Food','value':'Food'},
        {'name':'Technology','value':'Technology'},
         {'name':'Fashion','value':'Fashion'}
  ]

  
const [currentpage,setcurrentpage] = useState(1)
const itemperpage = 10
const lastindex = currentpage * itemperpage
const startindex = lastindex - itemperpage
const totalpage = Math.ceil(sortbytype.length/itemperpage)



  useEffect(()=>{
    showblog
  },[])
 
  return (
    <section className='px-2 md:px-48'>
      <div className="relative ">
        <input type="search" name="" id="" className='my-5 w-full  h-10 rounded-md border border-gray-300 focus:outline-none pl-10' placeholder='Search Blogs...' value={search} onChange={(e)=>{setsearch(e.target.value)}} />
        <Search className='absolute top-7 left-2 text-gray-500' />
        <button className='bg-blue-600 absolute text-white font-semibold h-10 w-20 md:w-28 top-5 rounded-e-md right-0' onClick={()=>searchBlog}>Search</button>
      </div>
      <div className="flex w-full justify-between items-center md:border-b md:border-gray-300">
        <h1 className='text-xl font-semibold md:text-3xl md:mb-4 '>All Blogs</h1>
        <div className="">
          <label htmlFor="">Sort by : </label>
          <select name="" id="" className='border border-gray-300 h-8 text-md' value={sort} onChange={(e)=>setsort(e.target.value)}>
            <option value="Latest">Latest</option>
            <option value="Old">Old</option>
            <option value="Popular">Popular</option>
          </select>
        </div>
      </div>
      <div className="categories flex overflow-x-auto mb-3 whitespace-nowrap scrollbar-hide  mt-6 shadow-sm h-full">
        {categories.map((c)=> (
          <button className={`${filtervalue === c.value ? 'bg-blue-600 text-white' :''} font-semibold px-5 py-1 rounded-md`} key={c.value} value={c.value} onClick={(e)=>setfiltervalue(e.target.value)}>{c.name}</button>
        ))}
      </div>
      <div className='md:w-full md:flex md:mt-6  '>
      
      <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:w-full ">
        {sortbytype.slice(startindex,lastindex).map((b)=>{
          return <Blogcart key={b.id} title={b.title} image={b.image} id={b.id} description={`${b.body.slice(0,90)}...`} views={b.views} tag={b.tags[0]}/>
        })}
        </div>
       
      
      
      </div>
      {sortbytype.length > 0 ? 
       <div className="Pagination flex text-center items-center md:justify-center md:gap-10 w-full justify-between my-16">
        <button  className={`p-2 ${currentpage === 1 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={()=>setcurrentpage(prev=> prev - 1)} disabled={currentpage === 1} ><FaArrowLeft/></button>
        
        <div className="flex  gap-3">
          {[...Array(totalpage).keys()].map((p,k)=> <div key={k} className={`h-10 w-10 flex items-center justify-center shadow-md  ${currentpage === p + 1 ? 'bg-blue-600 text-white':'bg-slate-200'}`} onClick={()=>setcurrentpage(p+1)}>{p + 1}</div> )}
        </div>

        
        <button  className={`p-2 ${currentpage === totalpage ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={()=>setcurrentpage(prev=>Math.min(prev + 1),totalpage)} disabled={currentpage === totalpage}><FaArrowRight /></button>
       </div> :''}
    </section>
  )
}

export default Blog
