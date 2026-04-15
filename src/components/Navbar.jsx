import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from "lucide-react";
import { AuthContext } from '../context/Authcontext';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { currentUser, logoutUser } = useContext(AuthContext)

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className="w-full md:px-24 shadow-lg bg-white  z-50">
      <nav className="md:w-full mx-auto px-4 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
       <Link to='/'> <div className="font-bold text-xl md:text-2xl cursor-pointer">
          Blog<span className="text-blue-600">Spot</span>
        </div></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center gap-6 font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Blogs</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Contact</NavLink>
          {currentUser ? (
            <>
            
              <button type="button" onClick={logoutUser} className='bg-blue-600 text-white font-semibold py-1 px-3 rounded-md'>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className='bg-blue-600 text-white font-semibold py-1 px-2 rounded-md'>Login</NavLink>
          )}
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          {
            open
              ? <X onClick={() => setOpen(false)} />
              : <Menu onClick={() => setOpen(true)} />
          }
        </div>

      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${open ? "max-h-60 py-3" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-4 font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Blogs</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Contact</NavLink>
          {currentUser ? (
            <>
              <span className='text-sm text-slate-600'>Hi, {currentUser.username}</span>
              <button type="button" onClick={logoutUser} className='bg-blue-600 text-white font-semibold py-1 px-3 rounded-md'>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Login</NavLink>
          )}
        </div>
      </div>

    </header>
  )
}

export default Navbar
