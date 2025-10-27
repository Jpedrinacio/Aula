import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Telainicial from './pages/telaInicial';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Telainicial></Telainicial>
  </StrictMode>,
)
