import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Registration from './Registration.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registration />
  </StrictMode>,
)
