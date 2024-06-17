import s from './Home.module.css'
import Header from '../../components/Header/Header.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import Filter from '../../components/Filter/Filter.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import data from '../../assets/data.json'
import { useState } from 'react'

const Home = () => {
    const [countries, setCountries] = useState(data)
    const [selected, setSelected] = useState("Filter by Region")
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1);
    const [forPage, setForPage] = useState(16);
    const max = countries.length / forPage;
    return (
        <div className={s.container}>
            <Header />
            <div className={s.searchBarAndFilterContainer}>
                <SearchBar countries={countries} setCountries={setCountries} selected={selected} setSelected={setSelected} query={query} setQuery={setQuery} />
                <Filter countries={countries} setCountries={setCountries} selected={selected} setSelected={setSelected} query={query} setQuery={setQuery}/>
            </div>
            <Pagination countries={countries} page={page} setPage={setPage} max={max} />
            <Cards countries={countries} page={page} forPage={forPage} />
        </div>
    )
}

export default Home