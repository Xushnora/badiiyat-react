import React from "react";
import Container from "../../../UI/Container/Container";
import './hero.scss'

// imgs
import Slider from '../../../assets/imgs/heroImg.jpg'
import Search from "../Search/Search";

function Hero({cardArr, setCardArr}) {
    return (
        <div className="hero">
            <Container>
                <div className="hero__slider-box">
                    <img className="hero__img" src={Slider} alt="slider" />
                </div>
                <div>
                    <Search  cardArr = {cardArr} setCardArr = {setCardArr}/>
                </div>
            </Container>
        </div>
    )
}

export default Hero;
 
