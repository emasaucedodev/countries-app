import s from './Home.module.css'
import Header from '../../components/Header/Header.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import Filter from '../../components/Filter/Filter.jsx'
import Cards from '../../components/Cards/Cards.jsx'

const Home = () => {
    return(
        <div className={s.container}>
        <Header/>
        <div className={s.searchBarAndFilterContainer}>
            <SearchBar/>
            <Filter/>
        </div>
        <Cards/>
        </div>
    )
}

export default Home