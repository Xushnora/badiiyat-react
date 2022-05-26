import React from "react";
import './Yozuvchilar.scss'

import { useLocation } from "react-router-dom";
import Layout from "../../../UI/Layout/Layout";
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
                                    <img className="descBox__personImg" src={item.img} alt="adib" />
                                    <div className="descBox__day day">
                                        <div className="day__birh">
                                            <p className="day__text">Tavallud sanasi</p>
                                            <h3 className="day__year">{item.bornDate}-{item.bornMonth} {item.born}</h3>
                                            <p className="day__text">{item.location}</p>
                                        </div>
                                        <p className="day__tire">-</p>
                                        <div className="day__dieth">
                                            <p className="day__text">Vafot etgan sanasi</p>
                                            <h3 className="day__year" >{item.diedDate}-{item.diedMonth} {item.died}</h3>
                                            <p className="day__text">{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="descBox__desc col-7">
                                    <h2 className="descBox__title">{item.name} {item.lastName}</h2>
                                    <p className="descBox__text">
                                        {item.desc}
                                    </p>
                                    <div className="descBox__ijodBox ijod">
                                        <div className="ijod__titleBox">
                                            <i className='bx bxs-bookmark'></i>
                                            <h3 className="ijod__title">Ijodi</h3>
                                        </div>
                                        <p className="ijod__text">
                                            {item.jobs}
                                        </p>
                                    </div>
                                    <div className="descBox__asar asar">
                                        <div className="asar__titleBox">
                                            <h3 className="asar__title">Asarlari</h3>
                                            <a className="asar__allBtn">Barchasini ko'rish</a>
                                        </div>
                                        <ul className="asar__list">
                                            <BookList bookArr = {item.bookObj} />
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