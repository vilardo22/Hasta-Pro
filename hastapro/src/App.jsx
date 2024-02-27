import { useState } from 'react'

import './App.css'
import Header from './Header'
import Welcome from './Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Welcome/>
    </>
  )
}

export default App
