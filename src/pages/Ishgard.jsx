import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import IFlag from '../assets/Coerthas/Ishgard/ishgard_banner.png'
import { FiList } from 'react-icons/fi'
import Carousel from '../components/Carousel'


const Ishgard = () => {
  const [seeContents, setSeeContents] = useState()
  const handleClick = () => setSeeContents(!seeContents)


  return (
    <div className='w-full h-[250vh] mt-[5%]' id='gridania'>
      <div className={`max-w-7xl mx-auto flex-col justify-center items-center px-7 bg-gray-100 rounded-md pb-12 shadow-lg`}>
        {/* City Banner */}
        <div className='pt-6 flex items-center justify-around'>
          <img src={IFlag} className='hidden md:flex max-h-[200px]'/>
          <h1 className='font-cinzel text-3xl md:text-5xl lg:text-8xl text-center mt-6 '>Ishgard</h1>
          <img src={IFlag} className='hidden md:flex max-h-[200px] transform -scale-x-100'/>
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
          <p className='text-xl'>The Holy See of Ishgard is a city-state in Final Fantasy XIV located in the harsh snowfields of Coerthas, in northern Aldenard. It becomes the primary setting of Final Fantasy XIV: Heavensward. Ishgard is at war with the dragons of neighboring Dravania, and much of their military is made up of Dragoons. They are reluctant to join the Eorzean Alliance against the Garlean Empire, as they lack the unoccupied manpower.</p>
        </div>

      </div>
            {/* Landmarks Container */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Landmarks </h2>
            <ul className='text-xl list-disc ml-4'>
              <h3 className='text-3xl'>Foundation</h3>
              <li>Saint Reinette Forum</li>
              <li>Skysteel Manufactory</li>
              <li>The Holy Stables</li>
              <li>Saint Valeroyant Forum</li>
              <li>The Forgotten Knight</li>
              <li>Congregation of Our Knights Most Heavenly</li>
              <li>The Lightfeather Proving Grounds</li>
              <li>The Brume</li>
              <h3 className='text-3xl'>The Pillars</h3>
              <li>Jeweled Crozier</li>
              <li>Atheneum Arcaneum</li>
              <li>Airship Landing</li>
              <li>The Final Vigil</li>
              <li>The Hoplon</li>
              <li>Saint Reymanaud Cathedral</li>
              <li>The Supreme Sacred Tribunal of Halonic Inquisitory Doctrine</li>
              <li>The Vault</li>
              <li>The Firmament</li>
            </ul>
        </div>
      </div>

            {/* Nearby Areas */}
      <div className={`max-w-7xl mx-auto flex justify-start items-center px-7 bg-gray-100 rounded-md pb-12 my-[5%] shadow-md pt-4`}>
        <div className='ml-4 mt-4 w-full'>
          <h2 className='font-cinzel text-5xl border-b-2 mb-4'>Surrounding Areas </h2>
          <ul className='text-xl space-y-4'>
            <li className='text-3xl'>Coerthas Central Highlands</li>
              <span className='ml-4'>These highlands lie covered in snow just outside the Holy See, surrounding a mountain known as The Nail.</span>

            <li className='text-3xl'>Coerthas Western Highlands</li>
            <span className='ml-4'>The highlands bordering Dravania, distinguished by the Twinpools: Ashpool and Banepool. The Calamity has since resulted in a severe glaciation of the area, cutting it off from the Central Highlands and freezing over all but a few pools of water.</span>

            <li className='text-3xl'>Dravanian Forelands</li>
            <span className='ml-4'>Rugged wilderness near the base of the sacred mountain Sohm Al. Many hunters subsist on the eponymous creatures of the Chocobo forest in the east. The Gnath beast-tribe and Dravanian Horde also have settled in the wilderness.</span>

            <li className='text-3xl'>Dravanian Hinterlands</li>
            <span className='ml-4'>Grasslands along the banks and tributaries of the Thaliak River, whose waters cascade north into the Orn Wild. The city of Sharlayan was located here until the exodus following the Garlean invasion.</span>

            <li className='text-3xl'>Churning Mists</li>
            <span className='ml-4'>These floating islands are the domain of the Dravanian Horde. Two great wyrms roost in the grand ruins in this part of the sea of clouds.</span>

            <li className='text-3xl'>Sea of Clouds</li>
            <span className='ml-4'>These floating islands are home to many exotic forms of flora and fauna. The Vanu Vanu beast tribes make their home in this environment, and more recently Ishgard set up an outpost thanks to airship technology.</span>

            <li className='text-3xl'>Azys Lla</li>
            <span className='ml-4'>Sealed away for millenia, these floating islands were once used by Ancient Allag for all manner of research into things that were probably best left forgotten. At the heart of the structure lies a facility called the Flagship, with connects to the surrounding islands with massive metal chains.</span>

            <li className='text-3xl'>Empyreum</li>
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
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131283588403441704/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131283590001475747/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131283590693531708/image.png'
              },
              {
                url: 'https://cdn.discordapp.com/attachments/439179285803302912/1131283591624654848/image.png'
              }
            ]}
          />
        </div>
      </div>

    </div>
  )
}

export default Ishgard