import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentStatus = {
   Alive: 'bg-green-500',
   Dead: 'bg-red-500',
   unknown: 'hidden'
}

const ResidentCard = ({resident}) => {

   const [residentInfo, setResidentInfo] = useState()

   useEffect(() => {
      axios.get(resident)
      .then((res) => setResidentInfo(res.data)) 
      .catch((err) => console.log(err))
   }, [])

  return (

    <article className='border-2 border-green-500'>

      <div className='relative'>
         <img className='w-full' src={residentInfo?.image} alt="" />
         <div className='absolute w-[115px] h-7 border-2 border-green-500 bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center rounded-sm justify-center'>
            <div className={`w-3 h-3 ${residentStatus[residentInfo?.status]} rounded-full`}>
            </div>
            <span>{residentInfo?.status}</span>
         </div>
      </div>

      <section className='p-4 grid gap-2 border-t-2 border-green-500'>
         <h3 className='text-center text-white font-medium'>{residentInfo?.name}</h3>
         <ul className='sm:grid justify-center'>
            <li className='flex justify-evenly'>
               <span className='text-[#bfbfbf]/60'>Species</span>
               <span className='text-white '>{residentInfo?.species}</span>
            </li>
            <li className='flex justify-evenly'>
               <span className='text-[#bfbfbf]/60'>Origin</span>
               <span className='text-white '>{residentInfo?.origin.name}</span>
            </li>
            <li className='flex justify-evenly gap-3'>
               <span className='text-[#bfbfbf]/60'>Times appeared</span>
               <span className='text-white'>{residentInfo?.episode.length}</span>
            </li>
         </ul>
      </section>

    </article>
  )
}

export default ResidentCard