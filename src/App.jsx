import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {

  const [location, setLocation] = useState()

  const handleSubmit = (e) => {

    e.preventDefault()

    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))

  }, [])

  return (

    <div className="App bg-[url(/images/body.png)] bg-cover min-h-screen">

      <section className='grid justify-center items-center mb-[40px]'>

      <div className='w-full'>
        <img src="/images/imah.png" alt=""/>
      </div>

      <form onSubmit={handleSubmit} className='grid place-content-center mb-[60px]'>
        <div className='mb-8 border-[2px] border-green-500'>
          <input id='locationId' placeholder='Type a location Id...' type="text" className='w-[166px] sm:w-[200px] bg-slate-800/10 text-white'/>
          <button className='bg-green-500 border-green-500 h-[24px] w-[50px] text-center'><i className='bx bx-search'></i></button>
        </div>

        <h2 className='text-green-400 text-center'>Welcome to the crazy universe!</h2>
      </form>

      <Location location={location}/>

      </section>

      <ResidentList location={location}/>

    </div>

    
  )
}

export default App
