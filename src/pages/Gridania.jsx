import React, {useState} from 'react'
import GFlag from '../assets/BlackShroud/Gridania-flag.png'
import { FiList } from 'react-icons/fi'

const Gridania = () => {
  const [seeContents, setSeeContents] = useState()
  const [seeDetails, setSeeDetails] = useState()
  const handleClick = () => setSeeContents(!seeContents)
  const handleDetails = () => setSeeDetails(!seeDetails)

  return (
    <div className='w-full h-[200vh] mt-[5%]' id='gridania'>
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md pb-12 shadow-lg`}>
        {/* City Banner */}
        <div className='pt-6 flex items-center justify-around'>
          <img src={GFlag} className='hidden md:flex max-h-[200px]'/>
          <h1 className='font-cinzel text-3xl md:text-5xl lg:text-8xl text-center mt-6 '>Gridania</h1>
          <img src={GFlag} className='hidden md:flex max-h-[200px] transform -scale-x-100'/>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto flex justify-center items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>

        {/* Table of Contents */}
        <div className='flex flex-col mt-4'>
          <div className='items-center w-40 pt-2 border border-black  inline-flex'>
            <FiList onClick={handleClick} className='ml-2 cursor-pointer'/>
            <h2 className='ml-2'>Contents</h2>
          </div>
            <div className={!seeContents 
              ? 'flex pl-6 py-2  w-40 border border-t-0 border-black'
              : 'hidden'
            }>
              <ul className='list-decimal'>
                <li>About</li>
                <li>Landmarks</li>
                <li>Nearby Areas</li>
                <li>Gallery</li>
              </ul>
            </div>
        </div>

        <div className='flex flex-col ml-4 mt-4'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>About </h2>
          <p className='text-xl'>Gridania is one of the city-states in Final Fantasy XIV, located on the Aldenard continent. It is located in the midst of the Black Shroud, a dense forest also known as the Twelveswood that serves to filter out those hostile toward the Elementals and those in cooperation with them. Gridania is by far the most unified of the city-states. Its guilds all work in cooperation with each other under the guiding hand of Kan-E-Senna, who brought back the Order of the Twin Adder.</p>
        </div>

      </div>

      <div className={`max-w-7xl mx-auto flex justify-center items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='flex flex-col ml-4 mt-4'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Landmarks </h2>
            <ul className='text-xl list-disc ml-4'>
              <h3 className='text-3xl'>New Gridania</h3>
              <li onClick={handleDetails} className='cursor-pointer'>Gridania Aetheryte Plaza</li>
                <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>A raised platform where the city-state's Aetheryte Crystal is located. Chocobo stables are located between this plaza and the Carline Canopy.</span>
              <li>Carline Canopy</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>A tavern and Adventurer's Guild run by Mother Miounne. Players starting in Gridania will initially be working under her. Inn and Levequest services are also available. Airship docks are located in the back of the establishment.</span>
              <li>Carpenters' Guild</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>Also known as the Oak Atrium, this guild is responsible for Gridania's timber industry. Carpenters can study their craft in this hall.</span>
              <li>Quiver's Hold</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>These barracks in an eastern vale serve as the Archers' Guild.</span>
              <li>Adders' Nest</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>The headquarters of the Order of the Twin Adder. Players who are affiliated with that Grand Company can obtain tasks, goods, and create a Free Company here.</span>
              <li>Blue Badger Gate</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>A gate at the south end past the Carline Canopy, this exit leads to the Jadeite Thick in the Central Shroud.</span>
              <li>White Wolf Gate</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>A gate at the western end, leading to Sorrel Haven in the Central Shroud. Due the dangerous creatures that live there, access is restricted to travelers who have authorization.</span>
              <h3 className='text-3xl'>Old Gridania</h3>
              <li>Shaded Bower</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>The main commercial hub of Gridania, several NPC merchants have assorted basic goods. In addition, Market Boards and Retainer Summoning Bells are available for players here.</span>
              <li>Wailing Barracks</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>These barracks are the home of the Wood Wailers, who operate the Lancers' Guild here.</span>
              <li>Leatherworkers' Guild</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>Also known as Atelier Fen-Yll, this building serves as a guild for leatherworking.</span>
              <li>Mih Khetto's Amphitheatre</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>A large area that becomes the venue for many events held in Gridania.</span>
              <li>Botanists' Guild</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>Located at the western end, this facility is dedicated to botany and horticulture, and owns the Greatloam Growery.</span>
              <li>Nophica's Altar</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>An altar dedicated to Nophica, the Matron, it serves as the entrance to the Lotus Stand.</span>
              <li>Lotus Stand</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>Gridania's seat of power, only those with permission may enter. Kan-E-Senna is usually seen here.</span>
              <li>Stillglade Fane</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>This sanctuary is the home of the Conjurers' Guild, where initiates are trained in communing with the elementals.</span>
              <li>Westshore Pier</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>Located outside the Wailing Barracks, this pier offers ferry services to the East Shroud.</span>
              <li>Yellow Serpent Gate</li>
              <span className={!seeDetails 
                  ? 'hidden'
                  : 'pl-4'
                }>The main point of entry to/from the North Shroud.</span>
            </ul>
        </div>
      </div>


    </div>
  )
}

export default Gridania