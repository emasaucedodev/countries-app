import s from './Filter.module.css'
import { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import data from '../../assets/data.json'

const Filter = ({countries, setCountries, selected, setSelected, query, setQuery}) => {
    const [isActive, setIsActive] = useState(false)
    
    const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const countriesBackup = [...data]
    const handleClick = (e) => {
        const id = e.target.id.toString()
        const filtered = countriesBackup.filter(country => country.region === id)
        setCountries(filtered)
        setQuery('')

    }
    return (
        <div className={s.dropdown}>
            <div className={s.dropdownBtn} onClick={e =>
                 setIsActive(!isActive)}>
                    {selected}
                    <MdKeyboardArrowDown fontSize={20} />
                    </div>
            {isActive && (
                <div className={s.dropdownContent}>
                    {options.map(option => (
                        <div onClick={e => {
                             setSelected(option)
                             setIsActive(false)
                             handleClick(e)   
                            }}
                            id={option}
                            className={s.dropdownItem}
                            >
                            {option}
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Filter