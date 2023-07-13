import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className= 'fixed bg-zinc-800 flex top-0 mt-0 mb-8 w-full h-14 justify-center items-center z-50'>
      <div className='flex justify-around w-4/5'>
        <Link to='/'>
          <p className='text-white text-xl py-3 px-6 hover:bg-slate-200 hover:text-sky-700 duration-200'>
          Home
          </p>
        </Link>
        <Link>
          <p className='text-white text-xl py-3 px-6 hover:bg-slate-200 hover:text-sky-700 duration-200'>
          Region
          </p>
        </Link>
        <Link>
          <p className='text-white text-xl py-3 px-6 hover:bg-slate-200 hover:text-sky-700 duration-200'>
          Zone
          </p>
        </Link>
        
      </div>
    </div>
  )
}

export default Header