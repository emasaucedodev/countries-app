import s from './CountryDetail.module.css'
import Header from '../../components/Header/Header'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import data from '../../assets/data.json'
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { id } = useParams()
    const country = data.find(country => country.numericCode === id)
    console.log(country)
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const borderCountries = country.borders?.map(b => {
        let countryName = ''
        let findCountry = data.find(country => country.alpha3Code === b)
        countryName = findCountry.name
        return countryName
    })
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
                        <img src={country.flags.svg} alt={`${country.name}-image`} />
                    </div>
                    <div className={s.description}>
                        <h2>{country.name}</h2>
                        <div className={s.stats}>
                            <p><span>Native Name: </span>{country.nativeName || "not found"}</p>
                            <p><span>Population: </span>{formatNumber(country.population) || "not found"}</p>
                            <p><span>Region: </span>{country.region || "not found"}</p>
                            <p><span>Sub Region: </span>{country.subregion || "not found"}</p>
                            <p><span>Capital: </span>{country.capital || "not found"}</p>
                            <p><span>Top Level Domain: </span>{country.topLevelDomain || "not found"}</p>
                            <p><span>Currencies: </span>{country.currencies && country.currencies.map(c => c.code).join(', ') || "not found"}</p>
                            <p><span>Languages: </span>{country.languages && country.languages.map(l => l.name).join(', ') || "not found"}</p>
                        </div>
                        <div className={s.borderCountries}>
                            {borderCountries && <h4>Border Countries:</h4>}
                            <div className={s.countriesList}>
                                {borderCountries && borderCountries.map(b => (
                                    <p>{b.split(' ')[0]}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CountryDetail