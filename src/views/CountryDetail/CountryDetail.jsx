import s from './CountryDetail.module.css'
import Header from '../../components/Header/Header'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    return(
        <div className={s.container}>
            <Header/>
            <div className={s.backContainer}>
                <Link className={s.link} to={`/`}>
                    <div className={s.back}>
                        <MdOutlineKeyboardBackspace fontSize={20} />
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className={s.content}>
                    <div className={s.image}>
                        <img src="https://flagcdn.com/w320/de.png" alt="" />
                    </div>
                    <div className={s.description}>
                        <h2>Germany</h2>
                        <div className={s.stats}>
                            <p><span>Native Name: </span>loremlorem</p>
                            <p><span>Population: </span>11,111,111</p>
                            <p><span>Native Name: </span>loremlorem</p>
                            <p><span>Population: </span>11,111,111</p>
                            <p><span>Native Name: </span>loremlorem</p>
                            <p><span>Population: </span>11,111,111</p>
                            <p><span>Native Name: </span>loremlorem</p>
                            <p><span>Population: </span>11,111,111</p>
                            <p><span>Native Name: </span>loremlorem</p>
                            <p><span>Population: </span>11,111,111</p>
                        </div>
                        <div className={s.borderCountries}>
                            <h4>Border Countries: </h4>
                            <p>France</p>
                            <p>Argentina</p>
                            <p>Peru</p>
                            <p>Colombia</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CountryDetail