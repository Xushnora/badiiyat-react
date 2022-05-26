import React from "react";
import { Link } from "react-router-dom";

function NasrList({newObj}) {
    return (
        <>
            {newObj.map((item, i) => {
                    return item.bookObj.map((book, idx) => {
                        return (
                                <li key={idx} className="asar__item">
                                    <Link to={`/asarlar/${book.bookId}`}>
                                        <img className="asar__bookImg" src={book.bookImg} alt="book" />
                                        <div className="asar__infoBox">
                                            <h4 className="asar__bookTitle">{book.bookName}</h4>
                                            <i className='bx bxs-star' style={{color: '#fff'}}></i>
                                            <span className="asar__mind">{book.bookRating} ta fikrlar</span>
                                        </div>
                                    </Link>
                                </li> 
                        )
                    })
                })}
        </>
    )
}

export default NasrList;