import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import GFlag from '../assets/BlackShroud/Gridania/Gridania-flag.png'
import G1 from '../assets/BlackShroud/Gridania/gridania_001.jpg'
import G2 from '../assets/BlackShroud/Gridania/gridania_002.jpeg'
import G3 from '../assets/BlackShroud/Gridania/gridania_003.jpeg'
import G4 from '../assets/BlackShroud/Gridania/gridania_004.jpeg'
import { FiList } from 'react-icons/fi'
import Carousel from '../components/Carousel'


const Gridania = () => {
  const [seeContents, setSeeContents] = useState()
  const [seeDetails, setSeeDetails] = useState()
  const handleClick = () => setSeeContents(!seeContents)
  const handleDetails = () => setSeeDetails(!seeDetails)
  const reveal = () => {
    if (className = 'hidden') {
      className = 'pl-4'
    } else {
      className = 'hidden'
    }
  }


  return (
    <div className='w-full h-[250vh] mt-[5%]' id='gridania'>
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
          <div className='items-center w-[175px] pt-2 border border-black  inline-flex'>
            <FiList onClick={handleClick} className='ml-2 cursor-pointer'/>
            <h2 className='ml-2'>Contents</h2>
          </div>
            <div className={!seeContents 
              ? 'flex pl-6 py-2  w-[175px] border border-t-0 border-black'
              : 'hidden'
            }>
              <ul className='list-decimal'>
                <li>About</li>
                <li>Landmarks</li>
                <li>Surrounding Areas</li>
                <li>Gallery</li>
              </ul>
            </div>
        </div>

        <div className='flex flex-col ml-4 mt-4'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>About </h2>
          <p className='text-xl'>Gridania is one of the city-states in Final Fantasy XIV, located on the Aldenard continent. It is located in the midst of the Black Shroud, a dense forest also known as the Twelveswood that serves to filter out those hostile toward the Elementals and those in cooperation with them. Gridania is by far the most unified of the city-states. Its guilds all work in cooperation with each other under the guiding hand of Kan-E-Senna, who brought back the Order of the Twin Adder.</p>
        </div>

      </div>
            {/* Landmarks Container */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Landmarks </h2>
            <ul className='text-xl list-disc ml-4'>
              <h3 className='text-3xl'>New Gridania</h3>
              <li>Gridania Aetheryte Plaza</li>
              <li>Carline Canopy</li>
              <li>Carpenters' Guild</li>
              <li>Quiver's Hold</li>
              <li>Adders' Nest</li>
              <h3 className='text-3xl'>Old Gridania</h3>
              <li>Shaded Bower</li>
              <li>Wailing Barracks</li>
              <li>Leatherworkers' Guild</li>
              <li>Mih Khetto's Amphitheatre</li>
              <li>Botanists' Guild</li>
              <li>Nophica's Altar</li>
              <li>Lotus Stand</li>
              <li>Stillglade Fane</li>
              <li>Westshore Pier</li>
            </ul>
        </div>
      </div>

            {/* Nearby Areas */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Surrounding Areas </h2>
          <ul className='text-xl space-y-4'>
            <li className='text-3xl'>Central Shroud</li>
              <span className='ml-4'>Woodland in the center of the forest that largely serves as a starting zone for players who begin in Gridania.</span>

            <li className='text-3xl'>North Shroud</li>
            <span className='ml-4'>Outskirts of the forest nearest to the highlands of Coerthas.</span>

            <li className='text-3xl'>East Shroud</li>
            <span className='ml-4'>An area of dense woodland and tangled groves where the sylph beast-tribe make their domain</span>

            <li className='text-3xl'>South Shroud</li>
            <span className='ml-4'>Wetlands extending southward from the edge of the Twelveswood.</span>

            <li className='text-3xl'> Lavender Beds</li>
            <span className='ml-4'>A series of lakeside estates set aside by the Order of the Twin Adder for adventurers.</span>
          </ul>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Gallery </h2>
          <Carousel 
            slides={[
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131277543773851669/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131277544449114173/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131277542112907354/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131277545258635395/image.png'
              }
            ]}
          />
        </div>
      </div>

    </div>
  )
}

export default Gridania