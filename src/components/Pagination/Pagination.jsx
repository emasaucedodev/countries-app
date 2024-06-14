import s from './Pagination.module.css';
import { useEffect } from "react";

const Pagination = ({ page, setPage, max, countries }) => {
    

    useEffect(() => {
        setPage(1)
    }, [countries])

    const nextPage = () => {
        setPage(parseInt(page) + 1);
    };

    const previousPage = () => {
        setPage(parseInt(page) - 1);
    };

    const btnIndex = (i) => {
        setPage(i)
    }

    const array = new Array(Math.ceil(max)).fill(true)

    return (
        <div className={s.superContainer}>
            <div className={s.container}>
                <button className={s.buttonPrevius} disabled={page === 1 || page < 1} onClick={previousPage}>❮</button>
                {array && array.map((e, i) => {
                    return <button className={page === i + 1 ? s.active : s.btnIndex} key={i} onClick={() => btnIndex(i + 1)}>{i + 1}</button>
                })}
                <button className={s.buttonNext} disabled={page === Math.ceil(max) || page > Math.ceil(max)} onClick={nextPage}>❯</button>
            </div>
        </div>
    )
};

export default Pagination;