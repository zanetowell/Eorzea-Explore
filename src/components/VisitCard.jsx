import React from 'react'
import { Link } from 'react-router-dom'


const VisitCard = ({ pic, name, desc, to }) => {
  return (
    <Link to={to}>
      <div className='flex flex-col rounded-lg bg-zinc-200 max-w-5xl my-4 shadow-lg px-4 hover:scale-105 duration-300'>
          <div className='flex flex-col rounded-lg justify-around items-center text-center py-4'>
              <div className=''>
                  <img src={pic} className='object-fill rounded-md'/>
              </div>
              <p className='text-2xl font-semibold py-1'>{name}</p>
              <p className='font-style: italic'>{desc}</p>
          </div>
      </div>
    </Link>
  )
}

export default VisitCard