import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenText, Eye, Layers3, Users } from 'lucide-react'
import hero from '../assets/hero.jpg'
import Blogcart from '../components/Blogcart'
import { BlogContext } from '../context/Blogcontext'

const About = () => {
  const { blog } = useContext(BlogContext)

  const totalViews = blog.reduce((sum, item) => sum + item.views, 0)
  const categories = [...new Set(blog.map((item) => item.tags[0]))]
  const popularBlogs = [...blog]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3)

  const highlights = [
    {
      title: 'Fresh stories daily',
      description: 'Har category me readable, short aur engaging posts milte hain jo fast consume bhi hote hain aur useful bhi lagte hain.',
    },
    {
      title: 'Topics for every mood',
      description: 'Technology se lekar food, history, lifestyle aur fashion tak, readers ko ek hi jagah multiple interests cover milte hain.',
    },
    {
      title: 'Built for simple reading',
      description: 'Clean layout, clear sections aur distraction-free reading experience ki wajah se content focus me rehta hai.',
    },
  ]

  const stats = [
    { label: 'Published blogs', value: blog.length, icon: BookOpenText },
    { label: 'Active categories', value: categories.length, icon: Layers3 },
    { label: 'Total views', value: totalViews.toLocaleString(), icon: Eye },
    { label: 'Writers featured', value: new Set(blog.map((item) => item.author)).size, icon: Users },
  ]

  return (
    <main className="bg-slate-50">
      <section className="relative isolate overflow-hidden">
        <div className="h-[55vh] md:h-[72vh]">
          <img
            src={hero}
            alt="About BlogSpot"
            className="h-full w-full object-cover brightness-[38%]"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                About BlogSpot
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight md:text-6xl">
                Stories that make reading feel easy, relevant and worth your time.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-lg">
                BlogSpot ek modern reading space hai jahan hum interesting topics ko simple language me present karte hain so readers explore, learn aur enjoy kar saken.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/blog"
                  className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Blogs
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-14 max-w-6xl px-4 md:px-10 relative z-10">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <article key={label} className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-200/70">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Icon size={22} />
              </div>
              <p className="text-2xl font-bold text-slate-900 md:text-3xl">{value}</p>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </article>
          ))}
        </div>
      </section>

     

      <section className="mx-auto max-w-6xl md:mt-5 px-4 pb-8 md:pb-0 md:px-10">
        <div className="rounded-[32px] bg-white px-6 py-8 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                What We Cover
              </p>
              <h2 className="mt-3 text-3xl text-black font-bold md:text-4xl">
                Wide range of categories, one consistent reading experience.
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 self-start rounded-md bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Browse all posts
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-gray-400 px-4 py-2 text-sm font-medium text-black">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-10 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Editor's Picks
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Some of the most read stories on BlogSpot.
            </h2>
          </div>
          <Link to="/blog" className="hidden font-semibold text-blue-600 md:block">
            View all
          </Link>
        </div>

        <div  className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 ">
          {popularBlogs.map((item) => (
            <Blogcart
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={`${item.body.slice(0, 90)}...`}
              views={item.views}
              tag={item.tags[0]}
              author={item.author}
              
            />
          ))}
        </div>
      </section>

    
    </main>
  )
}

export default About
