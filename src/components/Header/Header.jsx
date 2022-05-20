import React from 'react'
import Container from '../../UI/Container/Container'
import './header.scss'

import Logo from "../../assets/imgs/Badiiyat.svg"
import Avatar from "../../assets/imgs/avatar.png"

function Header() {
    return (
        <header className='header'>
            <Container>
                <div className="header__box">
                    <div className="header__logo-box">
                        <img className='header__logo' src={Logo} alt="logo" />
                    </div>
                    <ul className='header__list'>
                        <li className='header__item active'>Bosh sahifa</li>
                        <li className='header__item'>Nasr</li>
                        <li className='header__item'>Nazm</li>
                        <li className='header__item'>Maqolalar</li>
                        <li className='header__item'>Forum</li>
                    </ul>
                    <div className="header__user">
                        <div className="header__user-imgbox">
                            <img className='header__user-img' src={Avatar} alt="avatar" />
                        </div>
                        <button className='header__arrow'><i class='bx bx-chevron-down'></i></button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
