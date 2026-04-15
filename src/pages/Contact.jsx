import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react'
import hero from '../assets/hero.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactCards = [
    {
      title: 'Email us',
      value: 'hello@blogspot.com',
      description: 'General queries, partnerships ya feedback ke liye mail drop karo.',
      icon: Mail,
    },
    {
      title: 'Call anytime',
      value: '+91 98765 43210',
      description: 'Working hours ke andar team se direct connect kar sakte ho.',
      icon: Phone,
    },
    {
      title: 'Visit office',
      value: 'Jaipur, Rajasthan',
      description: 'Creative planning aur editorial collaboration ke liye available.',
      icon: MapPin,
    },
    {
      title: 'Working hours',
      value: 'Mon - Sat, 10 AM - 7 PM',
      description: 'Fastest response isi time window me milta hai.',
      icon: Clock3,
    },
  ]

  const reasons = [
    'Content collaboration ya guest posting discuss karna ho',
    'Website par featured categories ya campaigns run karni ho',
    'Design, content flow ya reading experience par feedback dena ho',
  ]

  return (
    <main className="bg-slate-50">
      <section className="relative isolate overflow-hidden">
        <div className="h-[52vh] md:h-[68vh]">
          <img
            src={hero}
            alt="Contact BlogSpot"
            className="h-full w-full object-cover brightness-[35%]"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                Contact BlogSpot
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight md:text-6xl">
                Let&apos;s talk about stories, ideas and better reading experiences.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-lg">
                Agar tum feedback share karna chahte ho, collaboration discuss karni hai ya site ke baare me koi query hai, yahan se directly reach out kar sakte ho.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@blogspot.com"
                  className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Email
                </a>
                <Link
                  to="/blog"
                  className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-6xl px-4 md:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map(({ title, value, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-200/70">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Icon size={22} />
              </div>
              <p className="text-lg font-semibold text-slate-900">{title}</p>
              <p className="mt-2 font-medium text-blue-700">{value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Send a Message
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Tell us what you need and we&apos;ll get back to you.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Yeh form abhi static contact layout ke liye designed hai, so users ko clear structure milta hai. Backend connect karna ho to next step me main submit handling bhi wire kar dunga.
            </p>

            <form className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="min-h-[170px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Submit Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] bg-whitep-6  shadow-xl shadow-slate-300/30 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Why Reach Out
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                We're open to ideas that make BlogSpot stronger.
              </h2>
              <div className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="rounded-2xl border border-gray-00 bg-white/10 px-4 py-4 text-sm leading-6 "
                  >
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Quick Navigation
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                Keep exploring the platform while we stay connected.
              </h2>
              <div className="mt-6 space-y-3">
                <Link
                  to="/about"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Learn more about BlogSpot
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Browse all blogs
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Back to homepage
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
