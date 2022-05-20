import React from "react";
import '../category.scss'

function CategoryList({item, key}) {
    return (
        <li key={key} className="category__cardItem">
                    <div className="category__card cardbox">
                        <img className="cardbox__img" src={item.avatar} />
                        <h3 className="cardbox__name">{item.name}</h3>
                        <p className="cardbox__year">{item.lived}</p>
                        <div className="cardbox__book">
                            <div className="cardbox__innerLeft">
                                <i className='bx bxs-book-alt'></i>
                                <span>34</span>
                            </div>
                            <div className="cardbox__innerRight">
                                <i className='bx bxs-volume-full'></i>
                                <span>13</span>
                            </div>
                        </div>
                    </div>
        </li>
    )
}

export default CategoryList;