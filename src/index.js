import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import React from 'react'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
