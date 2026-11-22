import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap CSS has to be imported once so the react-bootstrap components are styled
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
