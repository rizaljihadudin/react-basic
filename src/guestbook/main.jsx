import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GuestBook from './Guestbook'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GuestBook/>
    </StrictMode>
)