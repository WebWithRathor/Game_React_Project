import { useState } from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './components/MainRoutes'


function App() {

  return (
    <>
      <div className='bg-zinc-900 text-white h-screen'>
        <Navbar />
        <MainRoutes />

      </div>
    </>
  )
}

export default App
