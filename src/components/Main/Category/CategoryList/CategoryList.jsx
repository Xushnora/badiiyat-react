import React from 'react';
import { Link } from 'react-router-dom';
import '../category.scss';

function CategoryList({ item }) {
  return (
    <Link to={`yozuvchilar/${item.id}`}>
        <li className="category__cardItem">
            <div className="category__card cardbox">
                <img className="cardbox__img" src={item.img} />
                <h3 className="cardbox__name">{item.name} {item.lastName}</h3>
                <p className="cardbox__year">{item.born} - {item.died}</p>
                <div className="cardbox__book">
                <div className="cardbox__innerLeft">
                    <i className="bx bxs-book-alt"></i>
                    <span>{item.books}</span>
                </div>
                <div className="cardbox__innerRight">
                    <i className="bx bxs-volume-full"></i>
                    <span>{item.audio}</span>
                </div>
                </div>
            </div>
        </li>
    </Link>
  );
}

export default CategoryList;
