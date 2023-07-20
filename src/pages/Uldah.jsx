import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import UFlag from '../assets/Thanalan/Uldah/uldah_banner.png'
import { FiList } from 'react-icons/fi'
import Carousel from '../components/Carousel'


const Uldah = () => {
  const [seeContents, setSeeContents] = useState()
  const handleClick = () => setSeeContents(!seeContents)


  return (
    <div className='w-full h-[250vh] mt-[5%]' id='gridania'>
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md pb-12 shadow-lg`}>
        {/* City Banner */}
        <div className='pt-6 flex items-center justify-around'>
          <img src={UFlag} className='hidden md:flex max-h-[200px]'/>
          <h1 className='font-cinzel text-3xl md:text-5xl lg:text-8xl text-center mt-6 '>Ul'dah</h1>
          <img src={UFlag} className='hidden md:flex max-h-[200px] transform -scale-x-100'/>
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
          <p className='text-xl'>Ul'dah is a city-state in Final Fantasy XIV located in the deserts of southern Aldenard. It is the most wealthy of the city-states, its flag bearing scales as a symbol of their commercial significance in Eorzea. The city-state was once exclusively populated by Lalafells, and the royal family is of this race, but the prospect of wealth attracted all peoples from across the world. The majority of the Syndicate members are Lalafell.</p>
        </div>

      </div>
            {/* Landmarks Container */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Landmarks </h2>
            <ul className='text-xl list-disc ml-4'>
              <h3 className='text-3xl'>Steps of Nald</h3>
              <li>Arrzaneth Ossuary</li>
              <li>Platinum Mirage</li>
              <li>Hall of Flames</li>
              <li>Aetheryte Plaza</li>
              <li>Ruby Road Exchange</li>
              <li>The Quicksand</li>
              <h3 className='text-3xl'>Steps of Thal</h3>
              <li>Sapphire Avenue Exchange</li>
              <li>Sunsilk Tapestries</li>
              <li>Miners' Guild</li>
              <li>Goldsmiths' Guild</li>
              <li>The Coliseum</li>
              <li>The Gold Court</li>
              <li>Royal Promenade</li>
              <li>Scholars' Walk</li>
            </ul>
        </div>
      </div>

            {/* Nearby Areas */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Surrounding Areas </h2>
          <ul className='text-xl space-y-4'>
            <li className='text-3xl'>Western Thanalan</li>
              <span className='ml-4'>Coastal landscapes along the Strait of Merlthor.</span>

            <li className='text-3xl'>Central Thanalan</li>
            <span className='ml-4'>A rugged desert along the northwestern walls of the city-state. A rail line runs through the area to facilitate mining operations.</span>

            <li className='text-3xl'>Eastern Thanalan</li>
            <span className='ml-4'>An open savannah extending towards the Black Shroud and Paglth'an. The Calamity opened a chasm that exposed an ancient tomb.</span>

            <li className='text-3xl'>Southern Thanalan</li>
            <span className='ml-4'>A sprawling desert divided only by hills and Burnt Lizard Creek. The Amalj'aa have a stronghold deep within the desert. The U tribe of the Seekers of the Sun reside at an oasis on the edge of the Sagolii Desert.</span>

            <li className='text-3xl'>Northern Thanalan</li>
            <span className='ml-4'>Barren mountains rich in ceruleum deposits. The industrial extraction of the substance has given the entire area a perpetual blue haze.</span>

            <li className='text-3xl'>The Goblet</li>
            <span className='ml-4'>This secluded residential district is managed by the Immortal Flames for use by adventurers.</span>

            <li className='text-3xl'>Manderville Gold Saucer</li>
            <span className='ml-4'>A theme park created by Syndicate member Godbert Manderville in hopes of raising Eorzea's spirits.</span>
          </ul>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Gallery </h2>
          <Carousel 
            slides={[
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131279711109120120/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131279712228999178/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131279708995190866/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131279708185698364/image.png'
              }
            ]}
          />
        </div>
      </div>

    </div>
  )
}

export default Uldah