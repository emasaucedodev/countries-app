import s from './Filter.module.css'
import { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


const Filter = () => {
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("Filter by Region")
    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
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
                            }}
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