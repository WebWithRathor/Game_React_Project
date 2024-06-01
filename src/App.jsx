import { useState } from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <div className='bg-zinc-900 text-white w-full pb-10'>
        <Navbar />
        <Layout />

      </div>
    </>
  )
}

export default App
