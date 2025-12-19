import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='129716217188-krpdf4207sqk09k5ch393ngibqdv2i82.apps.googleusercontent.com'>
   <ShareContext>
    <App />
    </ShareContext>   
    </GoogleOAuthProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
