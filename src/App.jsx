
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landinpage from './Pages/Landinpage'
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory'

function App() {

  return (
    <>
     <Header/>
<Routes>
<Route path="/" element={<Landinpage/>} />
<Route path="/home" element={<Home/>} />
<Route path='/watch-history' element={<Watchhistory/>}/>

</Routes>
     <Footer/>

    </>
  )
}

export default App
