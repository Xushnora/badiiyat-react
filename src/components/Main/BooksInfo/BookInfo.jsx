import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../../UI/Container/Container";
import './bookInfo.scss'
// img

function BookInfo({bookArr}) {
    console.log(bookArr);
    let location = useLocation();
            return (
                <div>
                    <Container>
                        {bookArr.map((item, i) => {
                            return item.bookObj.map((book, idx) => {
                                if(book.bookId === +location.pathname.split('/').at(-1)) {
                                    return (
                                        <div>
                                            <div className="bookBox">
                                                <div className="bookBox__imgBox col-5">
                                                    <img className="bookBox__img" src={book.bookImg} alt="qo'rqma" />
                                                </div>
                                                <div className='bookBox__infoBox col-7'>
                                                    <h1 className='bookBox__title'>{book.bookName}</h1>
                                                    <Link to={`/yozuvchilar/${item.id}`}>
                                                        <p className='bookBox__author'>{item.name} {item.lastName}</p>
                                                    </Link>
                                                    <span className='bookBox__start'> | <i className='bx bxs-star' style={{color: "#fff"}} ></i>  4.1</span>
                                                    <p className='bookBox__sahifa'>Sahifalar soni: <span>  {book.bookPage}</span></p>
                                                    <p className='bookBox__sahifa'>Chop etilgan: <span>  {book.published}</span></p>
                                                    <p className='bookBox__sahifa'>Janri: <span>  {book.bookSenario}</span></p>
                                                    <p className='bookBox__sahifa'>Nashriyot: <span>  {book.nashriyot}</span></p>
                                                    <p className='bookBox__more'>To'liq ma'lumot <i className='bx bx-down-arrow-alt'></i> ---------------------------------------------------------------------------------------------------</p> 
                                                    <p className='bookBox__text'>{book.bookInfo}</p>
                                                    <p className='bookBox__text'>{book.bookInfoTwo}</p>
                                                    <h3 className='bookBox__more'>Mavjud formatlar</h3>
                                                    <div className='bookBox__format'>
                                                        <div className='bookBox__formatter'>
                                                            <i className='bx bxs-book-alt'></i>
                                                            <p>Qog'oz kitob</p>
                                                            <p>{book.bookPrice}</p>
                                                        </div>
                                                        <div className='bookBox__formatter'>
                                                            <i className='bx bx-headphone'></i>
                                                            <p>Audiokitob</p>
                                                            <p>{book.audioTime}</p>
                                                        </div>
                                                        <div className='bookBox__formatter'>
                                                            <i className='bx bx-tab'></i>
                                                            <p>Elektron</p>
                                                            <p>{book.electron}</p>
                                                        </div>
                                                        <button className='bookBox__btn'>Javonga qo'shish </button>
                                                    </div>
                                                </div>
                                            </div>
                                                {/* <div className="taxlil">
                                                    <ul className="taxlil__list">
                                                        <li className="taxlil__item">
                                                            Muallif haqida
                                                        </li>
                                                        <li className="taxlil__item">
                                                            Kitobdan iqtiboslar
                                                        </li>
                                                        <li className="taxlil__item">
                                                            Kitobxonlar taqrizi
                                                        </li>
                                                    </ul>
                                                    <div className="taxlil__rowBox">
                                                        <div className="taxlil__firstBox">
                                                            <span className="taxlil__quote">
                                                                <i class='bx bxs-quote-alt-left'></i>
                                                            </span>
                                                            <p className="taxlil__firstText">
                                                                Inson bolasi ne kunlarni ko'rmaydi?!
                                                                Har bir odam o'z g'ami bilan bo'lsa, hayotdan ko'z yumib ketganlarga umr bo'yi motam tutib o'tsa, bu moddiy olam shu kunlarga yetolarmidi?
                                                                Hayot to'lqini ojizlarni qirg'oqqa irg'itib tashlaydi. Oqimga qarshi suza olganlar, to'lqinni egarlaganlargina ertangi kunga yetib keladi.
                                                            </p>
                                                            <span >
                                                                <i className='bx bxs-heart' style={{color: "#fff"}}  ></i>
                                                                <i className='bx bxs-share-alt' style={{color: "#fff"}}></i>
                                                            </span>
                                                        </div>
                                                        <div className="taxlil__secondBox">
                                                            <span className="taxlil__quote">
                                                                <i class='bx bxs-quote-alt-left'></i>
                                                            </span> 
                                                            <p className="taxlil__firstText">
                                                                Yer kurrasida chumolidek mehnat qilayotganlardan ko'ra, tuproq tagida yotganlar ko'p. Yer qatlami odam suyaklariga to'lib ketgan.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                        </div>
                                    )
                                }
                            })
                        })}
                    </Container>
                </div>
            )
}

export default BookInfo;



                      

