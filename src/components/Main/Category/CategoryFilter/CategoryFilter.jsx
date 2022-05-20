import React from "react";
import '../category.scss';

function CategoryFilter({obj, setCardArr, name, id}) {
    
    const handlerClick = (e) => {
        console.log('ishladi');
        if(e.target.id === 'temuriy') {
            console.log('temuriy');
            setCardArr(obj.filter((item) => {
                return item.category === e.target.id;
            }))
        } else if(e.target.id === 'jadid') {
            console.log('jadid');
            setCardArr(obj.filter((item) => {
                return item.category === e.target.id;
            }))
        } else if(e.target.id === 'sovet') {
            console.log('sovet');
            setCardArr(obj.filter((item) => {
                return item.category === e.target.id;
            }))
        } else if(e.target.id === 'mustaqillik') {
            console.log('mustaqillik');
            setCardArr(obj.filter((item) => {
                return item.category === e.target.id;
            }))
        }
    }

    return (
        <button onClick={handlerClick} className="category__btn" id={id} >
            {name}
        </button>
    )
}

export default CategoryFilter;