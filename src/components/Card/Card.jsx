import s from './Card.module.css'

const Card = () => {
    return(
        <div className={s.container}>
            <div className={s.image}>
                <img src="https://flagcdn.com/w320/de.png" alt="" />
            </div>
            <div className={s.content}>
                <h3>Germany</h3>
                <p><span>Population: </span>81,770,900</p>
                <p><span>Region: </span>Europe</p>
                <p><span>Capital: </span>Berlin</p>
            </div>

        </div>
    )   
}

export default Card