import s from './Header.module.css'
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from 'react';

const Header = () => {
    const [checked, setChecked] = useState(document.querySelector("body").getAttribute('data-theme'))
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme === "dark"){
        setDarkMode()
    }
    const toggleTheme = (e) => {
        if (document.querySelector("body").getAttribute('data-theme') === null) {
            console.log('entre getAttribute')
            setChecked("dark")
            setDarkMode()
        }

        if (checked === "dark"){
            console.log('checked true', checked)    
            setChecked("light")
            setLightMode()
        }
        
        if(checked === "light"){
            console.log('checked false', checked)
            setChecked("dark")
            setDarkMode()
        }
    
    }
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1>Where in the world?</h1>
                <div className={s.darkMode} onClick={toggleTheme}>
                    <div className={s.icon}>
                        <MdOutlineDarkMode fontSize={20} />
                    </div>
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Header