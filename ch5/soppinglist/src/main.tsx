import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css' !-> mul 설명으로 위해 주석

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
