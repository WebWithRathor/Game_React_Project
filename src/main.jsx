import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GamesContext from './contexts/GamesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GamesContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GamesContext>
)
