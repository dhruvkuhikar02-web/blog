import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BlogContext } from '../context/Blogcontext'
import { AuthContext } from '../context/Authcontext'
import hero from '../assets/hero.jpg'
import { FaArrowUp, FaTrash } from 'react-icons/fa'

const BlogDetail = () => {
  const { id } = useParams()
  const { blog } = useContext(BlogContext)
  const { currentUser } = useContext(AuthContext)
  const [comment, setcomment] = useState('')
  const [comments, setcomments] = useState(() => {
    try {
      const saved = localStorage.getItem('comments')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const blogfilter = blog.find((b) => b.id === Number(id))

  const blogComments = useMemo(() => {
    if (!blogfilter) return []
    return comments.filter((item) => item.blogId === blogfilter.id)
  }, [comments, blogfilter])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const showcomment = () => {
    if (comment.trim() === '' || !blogfilter) return

    const newComment = {
      id: Date.now(),
      text: comment.trim(),
      blogId: blogfilter.id,
      userId: currentUser.id,
      name: currentUser.username,
    }

    setcomments((prev) => [...prev, newComment])
    setcomment('')
  }

  const deletecomment = (commentId) => {
    setcomments((prev) => prev.filter((item) => item.id !== commentId))
  }

  const getAvatarLetter = (name) => {
    if (!name) return 'U'
    return name.trim().charAt(0).toUpperCase()
  }

  if (!blogfilter) {
    return <h1>loading</h1>
  }

  return (
    <section className='md:px-48  bg-slate-100 w-full p-4 md:p-0 md:py-4'>
      <div className="w-full  gap-4 items-start md:flex  md:gap-8 md:flex-row ">
      
        <div className="left-contaioner rounded-md  md:w-[70%] ">
            <div className="bg-white p-5 ">
          <div className="md:w-[80%]  md:h-[500px] mx-auto flex w-full h-[300px]">
            <img src={blogfilter.image} alt="" className='h-full' />
          </div>
          <h1 className='text-2xl font-bold mt-4'>
            {blogfilter.title}?
          </h1>

          <p className='mt-3 text-gray-600'>
            {blogfilter.body}
          </p>
        </div>
        <div className="mt-5 p-5 bg-white rounded-md ">
            <h1 className='text-xl font-semibold'>Comments:</h1>
            {currentUser ? (
              <div className="relative">
                <textarea
                  placeholder="Write your comment..."
                  value={comment}
                  onChange={(e) => setcomment(e.target.value)}
                  className="w-full p-3  border rounded-md mt-2 resize-none h-28"
                />
                <button
                  type="button"
                  onClick={showcomment}
                  className="absolute bottom-4 right-4 bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center"
                  aria-label="Add comment"
                >
                  <FaArrowUp />
                </button>
              </div>
            ) : (
              <div className="mt-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
               please login before comment
                <Link to="/login" className="ml-2 font-semibold text-blue-700">
                  Login here
                </Link>
              </div>
            )}

        </div>
        {blogComments.length === 0 ? (
          <div className="bg-white p-4 my-2 rounded-md text-gray-500">
            No comments yet. Be the first to share your thoughts.
          </div>
        ) : (
          blogComments.map((c) => (
            <div key={c.id} className="bg-white my-2 flex items-center justify-between rounded-md px-5 py-3">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {getAvatarLetter(c.name)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{c.name}</p>
                  <p className="text-slate-600">
                    {c.text}
                  </p>
                </div>
              </div>
              {currentUser?.id === c.userId && (
                <button
                  type="button"
                  className="bg-red-200 flex justify-center items-center rounded-md h-8 w-8"
                  onClick={() => deletecomment(c.id)}
                  aria-label="Delete comment"
                >
                  <FaTrash className='text-red-500' />
                </button>
              )}
            </div>
          ))
        )}
        </div>
       
        <aside className='md:w-[25%] overflow-hidden bg-slate-100 md:shadow-sm md:h-full '>
          <div className="about-author p-4 h-full md:mt-0 my-5 md:h-full bg-white shadow-md rounded-md w-full">
            <h1 className='text-center font-semibold text-2xl mb-4'>About The Author</h1>
            <div className="imgae-and-info ">
              <div className="w-full h-[100px] items-center text-center gap-10  flex">
                <div className='w-[100px] h-full items-center justify-center rounded-full bg-blue-600 font-bold text-white text-5xl flex'>
                  J
                </div>
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
            <div className="flex justify-between items-center">
              <h1 className='text-2xl my-3 font-semibold'>Related posts</h1>
              <Link to={'/blog'} className='text-blue-700 font-medium md:text-xl'>View All</Link>
              </div>
              <div className="grid grid-cols-1 ">
                {blog.filter((b)=>b.tags[0] === blogfilter.tags[0]).slice(1,3).map((b,k)=>{
                  return <Link to={`/blog/${b.id}`}> <div className="w-full rounded-md my-2 shadow-md p-4" key={k}>
                    <img src={b.image} alt="" className='h-[200px] w-full' />
                       <h2 className='text-lg mt-1 font-semibold  md:text-lg md:mt-3'>{b.title} ?</h2>

                       <p className='text-md font-semibold text-gray-500'>{b.author}</p>
                  </div></Link>
                })}
              </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default BlogDetail
