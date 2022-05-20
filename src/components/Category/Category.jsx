import React, { useEffect, useState } from "react";
import Container from "../../UI/Container/Container";
import '../../assets/fonts/fonts.scss'
import './category.scss'

import CardImg from '../../assets/imgs/avloniy.jpg'

const badiiyatObj = [{
    id: 1,
    category: "jadid",
    avatar: "../assets/imgs/avloniy.jpg",
    name: "Abdulla Avloniy",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 2,
    category: "jadid",
    avatar: "../assets/imgs/nusrat.jpg",
    name: "Nusrat Rahmat",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 3,
    category: "jadid",
    avatar: "../assets/imgs/rahmonberdi.jpg",
    name: "Rahmonberdi Madazimov",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 4,
    category: "jadid",
    avatar: "../assets/imgs/xamza.jpg",
    name: "Hamza Hakimzoda Niyoziy",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 5,
    category: "jadid",
    avatar: "../assets/imgs/cholpon.jpg",
    name: "Abdulhamid Cho'lpon",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 6,
    category: "jadid",
    avatar: "../assets/imgs/fitrat.jpg",
    name: "Abdurauf Fitrat",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 7,
    category: "jadid",
    avatar: "../assets/imgs/abdulmajid.jpg",
    name: "Abdulmajid Qodiriy",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 8,
    category: "jadid",
    avatar: "../assets/imgs/munavvarqori.jpg",
    name: "Munavvarqori Abdurashidxonov",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 9,
    category: "jadid",
    avatar: "../assets/imgs/qodiriy.jpg",
    name: "Abdulla Qodiriy",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 10,
    category: "jadid",
    avatar: "../assets/imgs/behbudiy.jpg",
    name: "Mahmuxo'ja Behbudiy",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 11,
    category: "jadid",
    avatar: "../assets/imgs/muin.jpg",
    name: "Hoji Muin",
    lived: "1878-1934",
    tavallud_yili: 1878,
    vafot_yili: 1934,
    books: 34,
    audioBook: 12
},
{
    id: 12,
    category: "temuriy",
    avatar: "../assets/imgs/navoiy.jpg",
    name: "Alisher Navoiy",
    lived: "1441-1501",
    tavallud_yili: 1441,
    vafot_yili: 1501,
    books: 34,
    audioBook: 12
},
{
    id: 13,
    category: "temuriy",
    avatar: "../assets/imgs/lutfiy.jpg",
    name: "Lutfiy",
    lived: "1366-1465",
    tavallud_yili: 1366,
    vafot_yili: 1465,
    books: 34,
    audioBook: 12
},
{
    id: 14,
    category: "temuriy",
    avatar: "../assets/imgs/bobur.jpg",
    name: "Z M Bobur",
    lived: "1483-1530",
    tavallud_yili: 1366,
    vafot_yili: 1465,
    books: 34,
    audioBook: 12
},
{
    id: 15,
    category: "sovet",
    avatar: "../assets/imgs/gulom.jpg",
    name: "G'ofur G'ulom",
    lived: "1903-1966",
    tavallud_yili: 1903,
    vafot_yili: 1966,
    books: 34,
    audioBook: 12
},
{
    id: 16,
    category: "sovet",
    avatar: "../assets/imgs/oybek.jpg",
    name: "Oybek",
    lived: "1903-1966",
    tavallud_yili: 1903,
    vafot_yili: 1966,
    books: 34,
    audioBook: 12
},
{
    id: 17,
    category: "sovet",
    avatar: "../assets/imgs/qahhor.jpg",
    name: "Abdulla Qahhor",
    lived: "1907-1968",
    tavallud_yili: 1903,
    vafot_yili: 1966,
    books: 34,
    audioBook: 12
},
{
    id: 18,
    category: "sovet",
    avatar: "../assets/imgs/primqul.jpg",
    name: "Primqul Qodirov",
    lived: "1928-2010",
    tavallud_yili: 1928,
    vafot_yili: 2010,
    books: 34,
    audioBook: 12
},
{
    id: 19,
    category: "mustaqillik",
    avatar: "../assets/imgs/javlon.jpg",
    name: "Javlon Jovliyev",
    lived: "1907-1968",
    tavallud_yili: 1903,
    vafot_yili: 1966,
    books: 34,
    audioBook: 12
},


]


function Category() {

    const[cardArr, setCardArr] = useState([])
    useEffect(() => {
        fetch("")
    })


    return (
        <div className="category">
            <Container>
                <h2 className="category__title">Asosiy kategoriyalar</h2>
                <div className="category__group">
                    <button className="category__btn">Temuriylar davri</button>
                    <button className="category__btn">Jadid adabiyoti</button>
                    <button className="category__btn">Sovet davri</button>
                    <button className="category__btn">Mustaqillik davri</button>
                </div>
                <ul className="category__cardList">
                    {badiiyatObj.map(item => {
                        return <li className="category__cardItem">
                        <div className="category__card cardbox">
                            <img className="cardbox__img" src={item.avatar} />
                            <h3 className="cardbox__name">{item.name}</h3>
                            <p className="cardbox__year">{item.lived}</p>
                            <div className="cardbox__book">
                                <div className="cardbox__innerLeft">
                                    <i class='bx bxs-book-alt'></i>
                                    <span>34</span>
                                </div>
                                <div className="cardbox__innerRight">
                                    <i class='bx bxs-volume-full'></i>
                                    <span>13</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    })}
                </ul>
            </Container>
        </div>
    )
}

export default Category;