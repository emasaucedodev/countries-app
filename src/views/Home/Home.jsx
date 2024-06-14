import s from './Home.module.css'
import Header from '../../components/Header/Header.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import Filter from '../../components/Filter/Filter.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import data from '../../assets/data.json'
import { useState } from 'react'

const Home = () => {
    const [countries, setCountries] = useState(data)
    return(
        <div className={s.container}>
        <Header/>
        <div className={s.searchBarAndFilterContainer}>
            <SearchBar countries={countries} setCountries={setCountries}/>
            <Filter/>
        </div>
        <Cards countries={countries}/>
        </div>
    )
}

export default Home