import React from 'react'

const Location = ({location}) => {

   console.log(location) 

  return (

    <section className='text-white text-center grid gap-8'>

      <h2 className='text-2xl font-medium'>{location?.name}</h2>
      <ul className='sm:flex justify-evenly'>
         <li className='font-light text-base'><span className='text-xs font-medium'>Type:</span> {location?.type}</li>
         <li className='font-light text-base'><span className='text-xs font-medium'>Dimension:</span> {location?.dimension}</li>
         <li className='font-light text-base'><span className='text-xs font-medium'>Population:</span> {location?.residents.length}</li>
      </ul>

    </section>

  )
}

export default Location