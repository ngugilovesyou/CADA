import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider } from './theme/ThemeProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
 <RouterProvider router={routes} />
    </ThemeProvider>
   
  </StrictMode>,
)
