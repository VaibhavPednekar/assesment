import React from 'react'
import {Link} from "react-router-dom";
// import Upgradenav from './Upgradenav'

const Navbar = () => {
  return (
    <div className='flex justify-center m-10px text-sm '>
      <ul className=" w-96 h-6 text-white bg-neutral-700 flex gap-4  justify-center my-8 rounded-2xl ">
        <li><span></span>Comet</li>
        <li>Manifesto</li>
        <li>Discover </li>
        {/* <Link to='/Upgradenav.jsx'>Discover</Link> */}
        <li className="ml-10">Login</li>
        <li>Signup</li>
      </ul>
    </div>
  )
}

export default Navbar
