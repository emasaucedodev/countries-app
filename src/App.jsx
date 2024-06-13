import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home.jsx'
import CountryDetail from './views/CountryDetail/CountryDetail.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/countryDetail/:id' element={<CountryDetail/>}/>
    </Routes>
    </>
  )
}

export default App
