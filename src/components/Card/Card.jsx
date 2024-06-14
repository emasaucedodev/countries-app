import s from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, population, region, capital, image}) => {

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    
    return(
        <Link className={s.link} to={`countryDetail/${id}`}>
            <div className={s.container}>
                <div className={s.image}>
                    <img src={image} alt={`${name}-image`} />
                </div>
                <div className={s.content}>
                    <h3>{name}</h3>
                    <p><span>Population: </span>{formatNumber(population)}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Capital: </span>{capital}</p>
                </div>
            </div>
        </Link>
    )   
}

export default Card