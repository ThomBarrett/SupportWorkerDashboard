import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SupportWorkers from "./Components/SupportWorker/SupportWorkers.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupportWorkers />
  </StrictMode>,
)
