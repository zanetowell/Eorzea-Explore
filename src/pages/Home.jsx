import React from 'react'
import Moghorn from '../assets/mog_horn.png'


const Home = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
        {/* Left Text Blurb */}
        <div className='mx-auto ml-4'>
          <div className='text-3xl mb-10 '>
            Welcome to Eorzea Adventurer!
          </div>
          <div className='text-xl text-blue-600 w-2/3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ea alias. Ducimus minima distinctio excepturi odio, debitis eum delectus sed est consequatur deleniti facilis quaerat possimus dignissimos deserunt, magnam nulla?
          </div>
        </div>
        {/* Moogie */}
        <div className='mx-auto w-[40%]'>
          <img src={Moghorn} />
        </div>
      </div>
    </div>
  )
}

export default Home