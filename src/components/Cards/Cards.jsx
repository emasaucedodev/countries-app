import s from './Cards.module.css'
import Card from '../Card/Card.jsx'

const Cards = ({countries}) => {
    return(
        <div className={s.container}>
            <div className={s.content}>
                {countries && countries.map((country) => (
                    <Card 
                        id={country.numericCode}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        image={country.flags.png}
                        />
                ))}
            </div>
        </div>
    )
}

export default Cards