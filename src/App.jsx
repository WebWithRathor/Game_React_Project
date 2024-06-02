import { useState } from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './Routes/MainRoutes'


function App() {

  return (
    <>
      <div className='bg-zinc-900 text-white w-full min-h-screen'>
        <Navbar />
        <MainRoutes/>
      </div>
    </>
  )
}

export default App
