import s from './Header.module.css'
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
    return(
        <div className={s.container}>
            <div className={s.content}>
                <h1>Where in the world?</h1>
                <div className={s.darkMode}>
                    <div className={s.icon}>
                    <MdOutlineDarkMode fontSize={20}/>
                    </div>
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Header