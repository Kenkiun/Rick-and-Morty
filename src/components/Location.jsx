import React from 'react'

const Location = ({location}) => {

   console.log(location) 

  return (

    <section className='text-white text-center grid gap-8'>

      <h2 className='text-[27px] font-medium'>{location?.name}</h2>
      <ul className='sm:flex justify-center gap-20'>
         <li className='font-light text-[18px]'><span className='text-xs font-medium px-[6px]'>Type:</span>  {location?.type}</li>
         <li className='font-light text-[18px]'><span className='text-xs font-medium px-[6px]'>Dimension:</span> {location?.dimension}</li>
         <li className='font-light text-[18px]'><span className='text-xs font-medium px-[6px]'>Population:</span>     {location?.residents.length}</li>
      </ul>

    </section>

  )
}

export default Location