import React from 'react'
import Moghorn from '../assets/mog_horn.png'
import Eorzea from '../assets/eorzea-map.jpeg'
import Group from '../assets/ffxivgroup.png'
import Gridania from '../assets/BlackShroud/Gridania.jpg'
import Limsa from '../assets/LaNoscea/Limsa.jpg'
import Uldah from '../assets/Thanalan/Uldah.jpeg'
import Ishgard from '../assets/Coerthas/Ishgard.jpg'
import { FiChevronsDown } from 'react-icons/fi'
import VisitCard from '../components/VisitCard'



const Home = () => {
  return (
    <div className='w-full h-[200vh] mt-[5%]' id='home'>
      {/* Container */}
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md pb-12 shadow-lg`}>
        {/* Welcome/Landing */}
        <div className='flex justify-center'>
          <p className='text-6xl font-cinzel text-yellow-500 font-extrabold text-center mt-4' id='welcome'>
            Welcome to Eorzea Adventurer!
          </p>
        </div>

        <div className='text-center my-8 text-2xl font-bold'>
          <p>
            Embark on a thrilling journey through the enchanting realm of Eorzea, where epic tales unfold, brave heroes rise, and treacherous villains scheme. Immerse yourself in a meticulously crafted universe where stunning landscapes, vibrant  cities, and ancient ruins await your exploration. From the bustling streets of Limsa Lominsa to the majestic spires of Ishgard, every corner of Eorzea is teeming with wonders to behold.
          </p>
        </div>

        <img src={Group} />

        <div className='text-center my-6 text-2xl font-bold'>
          Eorzea awaits your arrival, beckoning you to embark on an extraordinary odyssey filled with excitement, danger, and unforgettable memories. Pick a location to visit below and begin your adventure!
        </div>

        <div>
          <FiChevronsDown className='mx-auto'/>
        </div>
      </div>

      {/* Second Container */}
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md`}>
        <div className='my-4 flex flex-col items-center'>
          <VisitCard pic={Gridania} name='Gridania' desc='The forest city-state of Eorzea, is a tranquil sanctuary nestled within the lush embrace of the Black Shroud.' />

          <VisitCard pic={Limsa} name='Limsa Lominsa' desc='The maritime city-state of Eorzea, is a bustling hub of seafaring adventure and commerce.'/>

          <VisitCard pic={Uldah} name="Ul'dah" desc='The desert city-state of Eorzea, is a beacon of opulence rising from the arid landscape of Thanalan.'/>

          <VisitCard pic={Ishgard} name='Ishgard' desc='The secluded city-state of Eorzea, stands as a bastion of stone and ice amidst the frozen peaks of Coerthas.'/>

        </div>
      </div>
    </div>
  )
}

export default Home