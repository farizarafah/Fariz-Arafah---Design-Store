import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SITE } from './data/site'

// Judul tab diambil dari identitas brand (src/data/site.js)
document.title = `${SITE.name} — ${SITE.role}`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
