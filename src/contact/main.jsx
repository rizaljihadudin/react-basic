import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactForm from './ContactForm'
import ContactFormImer from './ContactFormImer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContactForm /> */}
    <ContactFormImer />
  </StrictMode>,
)
