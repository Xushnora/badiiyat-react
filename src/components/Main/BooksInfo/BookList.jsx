import React from "react";
import { Link, useLocation } from "react-router-dom";

function BookList(props) {
    console.log()
    return (
        <>
            {props.bookArr.map((books, idx) => {
                return (
                    <li key={idx} className="asar__item">
                        <Link to={`/asarlar/${books.bookId}`}>
                            <img className="asar__bookImg" src={books.bookImg} alt="book" />
                            <div className="asar__infoBox">
                                <h4 className="asar__bookTitle">{books.bookName}</h4>
                                <i className='bx bxs-star' style={{color: '#fff'}}></i>
                                <span className="asar__mind">{books.bookRating} ta fikrlar</span>
                            </div>
                        </Link>
                    </li> 
                )
            })}
        </>
    )
}

export default BookList;