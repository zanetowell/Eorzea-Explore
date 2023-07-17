import React, {useState} from 'react'
import GFlag from '../assets/BlackShroud/Gridania-flag.png'
import { FiList } from 'react-icons/fi'

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
        </div>
      </div>

    </div>
  )
}

export default Gridania