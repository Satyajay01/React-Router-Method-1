import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

    <nav className='w-screen flex justify-center gap-5'>
    <Link to="/"><li>Home</li></Link>
    <Link to="/contact"><li>contact</li></Link>
    <Link to="/About"><li>About</li></Link>
    </nav>

    </div>
  )
}

export default NavBar