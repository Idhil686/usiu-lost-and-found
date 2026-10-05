import react from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <react.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </react.StrictMode>
)