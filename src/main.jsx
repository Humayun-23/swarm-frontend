import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SwarmProvider } from './context/SwarmContext'
import App from './App'
import './index.css'

console.log('VITE_ENV', {
  VITE_USE_MOCK: import.meta.env.VITE_USE_MOCK,
  VITE_API_URL: import.meta.env.VITE_API_URL
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SwarmProvider>
        <App />
      </SwarmProvider>
    </BrowserRouter>
  </React.StrictMode>
)
