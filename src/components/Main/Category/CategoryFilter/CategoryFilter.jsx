import React from "react";
import '../category.scss';

function CategoryFilter({obj, setCardArr, name, id}) {

    const handlerClick = (e) => {
        const filteredArr = obj.filter((item) => {
            return item.category === e.target.id
        })
        setCardArr(filteredArr);
    }


    return (
        <button onClick={handlerClick} className="category__btn" id={id} >
            {name}
        </button>
    )
}

export default CategoryFilter;