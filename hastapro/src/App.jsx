import { useState } from 'react'

import './App.css'
import Header from './Header'
import Welcome from './Welcome'
import NavMenu from './NavMenu'
import Banner from './Banner'
import QuemSomos from './QuemSomos'
import Sistema from './Sistema'
import Resultados from './Resultados'
import Carrossel from './Carrossel'
import Faleconosco from './Faleconosco'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Welcome/>
   <NavMenu/>
   <Banner/>
   <QuemSomos/>
   <Sistema/>
   <Resultados/>
   <Carrossel/>
   <Faleconosco/>
   <Form/>
    </>
  )
}

export default App
