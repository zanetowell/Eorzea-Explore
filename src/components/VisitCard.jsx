import React from 'react'

const VisitCard = ({ pic, name, desc }) => {
  return (
    <div className='flex flex-col rounded-lg bg-stone-400 max-w-5xl my-2 shadow-lg px-4'>
        <div className='flex flex-col rounded-lg justify-around items-center text-center py-4'>
            <div className=''>
                <img src={pic} className='aspect-[3/2] object-fill rounded-md'/>
            </div>
            <p className='text-2xl font-semibold py-1'>{name}</p>
            <p className='font-style: italic'>{desc}</p>
        </div>
    </div>
  )
}

export default VisitCard