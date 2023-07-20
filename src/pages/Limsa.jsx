import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LFlag from '../assets/LaNoscea/Limsa/limsa_banner.png'
import { FiList } from 'react-icons/fi'
import Carousel from '../components/Carousel'


const Limsa = () => {
  const [seeContents, setSeeContents] = useState()
  const handleClick = () => setSeeContents(!seeContents)


  return (
    <div className='w-full h-[250vh] mt-[5%]' id='gridania'>
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md pb-12 shadow-lg`}>
        {/* City Banner */}
        <div className='pt-6 flex items-center justify-around'>
          <img src={LFlag} className='hidden md:flex max-h-[200px]'/>
          <h1 className='font-cinzel text-3xl md:text-5xl lg:text-8xl text-center mt-6 '>Limsa Lominsa</h1>
          <img src={LFlag} className='hidden md:flex max-h-[200px] transform -scale-x-100'/>
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
          <p className='text-xl'>Limsa Lominsa is an independent marine city-state of Eorzea in Final Fantasy XIV. Located on the southern coast of the island Vylbrand, it is a bustling port and pirate hideout. Limsa Lominsa is a traditional thalassocracy, with power lying in the hands of the ruling party and its leader, Admiral Merlwyb Bloefhiswyn. Its economy is driven by shipbuilding, fishing, and blacksmithing, but the majority of wealth comes from the lucrative shipping industry.</p>
        </div>

      </div>
            {/* Landmarks Container */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Landmarks </h2>
            <ul className='text-xl list-disc ml-4'>
              <h3 className='text-3xl'>Limsa Lominsa Lower Decks</h3>
              <li>Bulwark</li>
              <li>The Octant</li>
              <li>Hawker's Alley</li>
              <li>Mealvaan's Gate</li>
              <li>Fisherman's Bottom</li>
              <h3 className='text-3xl'>Limsa Lominsa Upper Decks</h3>
              <li>The Drowning Wench</li>
              <li>The Seventh Sage</li>
              <li>The Bismarck</li>
              <li>Coral Tower</li>
              <li>The Aftcastle</li>
              <li>The Hyaline</li>
              <li>Maelstrom Command</li>
              <li>Naldiq & Vymelli's</li>
              <li>The Missing Member</li>
            </ul>
        </div>
      </div>

            {/* Nearby Areas */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Surrounding Areas </h2>
          <ul className='text-xl space-y-4'>
            <li className='text-3xl'>Lower La Noscea</li>
              <span className='ml-4'>Grasslands along the southern part of Vylbrand, with a farmstead in the Cedarwood area. Once a continuous peninsula, damage during the Calamity caused Gods' Grip to become an island, now linked by a bridge.</span>

            <li className='text-3xl'>Middle La Noscea</li>
            <span className='ml-4'>These grasslands lie along Galadion Bay across from the city-state, with an agriculture settlement at Summerford. A sheer cliff formed along the Nym River, prompting the construction of ramps.</span>

            <li className='text-3xl'>Western La Noscea</li>
            <span className='ml-4'>A stretch of coastal terrain still recovering from the Calamity. The western most area became a major stronghold for the Sahagin beast-tribe after a tidal wave devastated it. An immense lighthouse sits on the Isle of Umbra.</span>

            <li className='text-3xl'>Eastern La Noscea</li>
            <span className='ml-4'>An area divided into beachfront property on the coastline, and a rainforest separated by hills. A Garlean outpost was secretly constructed in the area.</span>

            <li className='text-3xl'>Upper La Noscea</li>
            <span className='ml-4'>Foothills surrounding Bronze Lake. The area is split into the Oakwood in the west and flooded shallows to the east.</span>

            <li className='text-3xl'>Outer La Noscea</li>
            <span className='ml-4'>These hills lie on the outskirts of Kobold territory, with their furnaces easily visible in the landscape. Ruins of the ancient city-state of Nym can be found here.</span>

            <li className='text-3xl'>The Mist</li>
            <span className='ml-4'>A residential district along the southeastern coastline, reserved by the Maelstrom for adventurers.</span>

            <li className='text-3xl'>Wolves' Den</li>
            <span className='ml-4'>A training facility that allows gladiatorial matches aboard a vessel that hit the rocks.</span>
          </ul>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Gallery </h2>
          <Carousel 
            slides={[
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131274627251966045/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131274627994370148/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131274628740952224/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131274629613363331/image.png'
              }
            ]}
          />
        </div>
      </div>

    </div>
  )
}

export default Limsa