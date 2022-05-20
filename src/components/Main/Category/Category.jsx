import React from "react";
import Container from "../../../UI/Container/Container";
import '../../../assets/fonts/fonts.scss'
import './category.scss'
import CategoryList from "./CategoryList/CategoryList";
import CategoryFilter from "./CategoryFilter/CategoryFilter";


function Category({obj, cardArr, setCardArr}) {

    const categoryBtnArr = ['Temuriylar davri', 'Jadid adabiyoti', 'Sovet davri', 'Mustaqillik davri'];
    const typeArr = ['temuriy', 'jadid', 'sovet', 'mustaqillik']
    return (
        <div className="category">
            <Container>
                <h2 className="category__title">Asosiy kategoriyalar</h2>
                <div className="category__group">
                    {categoryBtnArr.map((btn, i) => {
                        return <CategoryFilter 
                            key={i+1} 
                            id={typeArr[i]}
                            name = {btn}
                            obj = {obj}
                            cardArr = {cardArr}
                            setCardArr = {setCardArr}
                        />
                    })}
                </div>
                <ul className="category__cardList">
                    {obj.map((item, i) => {
                        return <CategoryList key = {'a'+i} item = {item} />
                    })}
                </ul>
            </Container>
        </div>
    )
}

export default Category;