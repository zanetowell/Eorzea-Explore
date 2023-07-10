import React from 'react'
import Moghorn from '../assets/mog_horn.png'
import MapBackground from '../assets/mapbackground.jpg'
import Group from '../assets/ffxivgroup.png'
import Gridania from '../assets/Gridania.jpg'


const Home = () => {
  return (
    <div className='w-full h-full mt-10' id='home'>
      {/* Container */}
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md h-[800px]`}>

        <div className='flex justify-center items-end'>
          <p className='text-6xl font-cinzel text-yellow-500 font-extrabold text-center mr-6' id='welcome'>
            Welcome to Eorzea Adventurer!
          </p>
          <img src={Moghorn} className='h-[100px]'/>
        </div>

        <div className='text-center my-8 text-2xl font-bold'>
          <p>
            Embark on a thrilling journey through the enchanting realm of Eorzea, where epic tales unfold, brave heroes rise, and treacherous villains scheme. Immerse yourself in a meticulously crafted universe where stunning landscapes, vibrant  cities, and ancient ruins await your exploration. From the bustling streets of Limsa Lominsa to the majestic spires of Ishgard, every corner of Eorzea is teeming with wonders to behold.
          </p>
        </div>

        <img src={Group} />

        <div className='text-center my-6 text-2xl font-bold'>
          Eorzea awaits your arrival, beckoning you to embark on an extraordinary odyssey filled with excitement, danger, and unforgettable memories. Begin your adventure here, and let our website be your guide to the fantastical realm of Final Fantasy XIV's Eorzea!
        </div>
      </div>
    </div>
  )
}

export default Home