import React from "react";
import './Yozuvchilar.scss'

import { useLocation } from "react-router-dom";
import Layout from "../../../UI/Layout/Layout";
import BookInfo from "../BooksInfo/BookInfo";
import BookList from "../BooksInfo/BookList";


function Yozuvchilar({newObj}) {
    let location = useLocation();
    return (
        <div>
            {newObj.map((item, i) => {
                if(item.id === +location.pathname.split('/').at(-1)) {
                    return (
                        <Layout>
                            <div className="descBox">
                                <div className="col-5">
                                    <img className="descBox__personImg" src={item.avatar} alt="adib" />
                                    <div className="descBox__day day">
                                        <div className="day__birh">
                                            <p className="day__text">Tavallud sanasi</p>
                                            <h3 className="day__year">5-avg {item.tavallud_yili}</h3>
                                            <p className="day__text">Toshkent, O'zbekiston</p>
                                        </div>
                                        <p className="day__tire">-</p>
                                        <div className="day__dieth">
                                            <p className="day__text">Vafot etgan sanasi</p>
                                            <h3 className="day__year" >24-may {item.vafot_yili}</h3>
                                            <p className="day__text">Toshkent, O'zbekiston</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="descBox__desc col-7">
                                    <h2 className="descBox__title">{item.name}</h2>
                                    <p className="descBox__text">
                                        {item.hayoti}
                                    </p>
                                    <div className="descBox__ijodBox ijod">
                                        <div className="ijod__titleBox">
                                            <i className='bx bxs-bookmark'></i>
                                            <h3 className="ijod__title">Ijodi</h3>
                                        </div>
                                        <p className="ijod__text">
                                            {item.ijodi}
                                        </p>
                                    </div>
                                    <div className="descBox__asar asar">
                                        <div className="asar__titleBox">
                                            <h3 className="asar__title">Asarlari</h3>
                                            <a className="asar__allBtn">Barchasini ko'rish</a>
                                        </div>
                                        <ul className="asar__list">
                                            <BookList bookArr = {item.asarlari} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Layout>
                    )
                }
            })}
        </div>
    )
}

export default Yozuvchilar;