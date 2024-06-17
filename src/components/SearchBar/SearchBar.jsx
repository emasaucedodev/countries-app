import s from './SearchBar.module.css'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import data from '../../assets/data.json'

const SearchBar = ({ countries, setCountries, selected, setSelected, query, setQuery}) => {
    const countriesBackup = data

    const handleChange = (e) => {
        setCountries(...data)
        const value = e.target.value
        setQuery(value)
        const filtered = countriesBackup.filter(country =>
            country.name.toLowerCase().includes(query.toLowerCase()))
        setCountries(filtered)
        setSelected("Filter by Region")
    }

    return (
        <div className={s.container}>
            <div className={s.icon}>
                <IoIosSearch fontSize={20} color='gray' />
            </div>
            <input
                type="text"
                placeholder='Search for a country...'
                value={query}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar