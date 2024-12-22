import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InternationalizationContextProvider } from './components/contexts/InternationalizationContext.jsx'
import { ModalContextProvider } from './components/contexts/ModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalContextProvider>
    <InternationalizationContextProvider>
    <App />
    </InternationalizationContextProvider>
    </ModalContextProvider>
   
 
  </StrictMode>,
)
