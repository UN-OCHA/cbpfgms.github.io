import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('resultsroot')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
