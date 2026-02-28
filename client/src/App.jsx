import React from 'react'
import Navbar from './components/Navbar'
import { ThemeProvider } from './theme/ThemeProvider'
import CADAManifesto from './components/CadaManifesto'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <>
    <ThemeProvider>
<Navbar />
di
<Homepage />
    </ThemeProvider>
      
    </>
  )
}

export default App
