import React from "react";
import Container from "../../UI/Container/Container";
import './Profil.scss'
// img
import imgUser from "../../assets/imgs/user.png"
import bookImg from "../../assets/imgs/qorqma.jpg"

function Profil(){
    return(
        <>
            <Container>
                <div className="users">
                    <div className="users__row">
                        <div className="users__rowIn">
                            <div className="users__imgbox">
                            <div className="users__relative">
                                <img className="users__img" src={imgUser} alt="user" />
                                <div className="users__iconStar">
                                    <i className='bx bxs-star'></i>
                                </div>
                            </div>
                            <h3 className="users__title">Oltin kitobxon</h3>
                            <p className="users__text">186 ta kitob o'qigan</p>
                            </div>
                            <div className="users__descBox">
                            <h2 className="users__name">Farruxbek Abdullayev</h2>
                            <p className="users__info"><span>Tavallud: </span> February 08, 1999</p>
                            <p className="users__info"><span>Manzili: </span> Jizzax</p>
                            <p className="users__info"><span>Bio: </span> Graphic designer and Developer</p>
                            </div>
                        </div>
                        <div className="users__bgImgbox">
                        </div>
                    </div>
                </div>
                <h2 className="books__title">Kitoblar</h2>
                <ul className="books__list">
                    <li className="asar__item">
                        <img className="asar__bookImg" src={bookImg} alt="book" />
                        <div className="asar__infoBox">
                            <h4 className="asar__bookTitle">Qo'rqma</h4>
                            <p className="asar__auther">Javlon Jovliyev</p>
                            <i className='bx bxs-star' style={{color: '#fff'}}></i>
                            <span className="asar__mind">5.5 ta fikrlar</span>
                        </div>                           
                    </li> 
                    <li className="asar__item">
                        <img className="asar__bookImg" src={bookImg} alt="book" />
                        <div className="asar__infoBox">
                            <h4 className="asar__bookTitle">Qo'rqma</h4>
                            <p className="asar__auther">Javlon Jovliyev</p>
                            <i className='bx bxs-star' style={{color: '#fff'}}></i>
                            <span className="asar__mind">5.5 ta fikrlar</span>
                        </div>                           
                    </li> 
                    <li className="asar__item">
                        <img className="asar__bookImg" src={bookImg} alt="book" />
                        <div className="asar__infoBox">
                            <h4 className="asar__bookTitle">Qo'rqma</h4>
                            <p className="asar__auther">Javlon Jovliyev</p>
                            <i className='bx bxs-star' style={{color: '#fff'}}></i>
                            <span className="asar__mind">5.5 ta fikrlar</span>
                        </div>                           
                    </li> 
                </ul>
            </Container>
        </>
    )
}

export default Profil;
