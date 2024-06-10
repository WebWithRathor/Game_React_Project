import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GamesContext from './contexts/GamesContext.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <GamesContext>
    <BrowserRouter>
      <App />
      <ToastContainer
        newestOnTop
        draggable
        theme="dark"
        closeOnClick: true
        transition:Bounce
      />
    </BrowserRouter>
  </GamesContext>
  </Provider>
)
