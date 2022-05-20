import React from "react";
import '../../../assets/fonts/fonts.scss'

import './search.scss'

function Search() {
    return (
        <div className="search">
            <div className="search__box">
                <h2 className="search__title">Qidirish</h2>
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." required/>
                    <button className="search__btn">
                        <i className='bx bx-search-alt'></i>
                        <span>Izlash</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;

