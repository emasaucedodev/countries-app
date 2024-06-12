import s from './SearchBar.module.css'
import { IoIosSearch } from "react-icons/io";


const SearchBar = () => {
    return(
        <div className={s.container}>
            <div className={s.icon}>
            <IoIosSearch fontSize={20} color='gray'/>
            </div>
            <input type="text" placeholder='Search for a country...' />
        </div>
    )
}

export default SearchBar