import React from 'react'
import Container from '../../UI/Container/Container'
import './header.scss'

import Logo from "../../assets/imgs/Badiiyat.svg"
import Avatar from "../../assets/imgs/avatar.png"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <Container>
                <div className="header__box">
                    <div className="header__logo-box">
                        <img className='header__logo' src={Logo} alt="logo" />
                    </div>
                    <ul className='header__list'>
                        <li>
                            <Link to='/' className='header__item active'>Bosh sahifa</Link>
                        </li>
                        <li>
                            <Link className='header__item' to='/nazm'>Nazm</Link>
                        </li>
                        <li>
                            <Link to='/nasr' className='header__item' >Nasr</Link>
                        </li>
                        <li>
                            <Link to='/maqolalar' className='header__item'>Maqolalar</Link>
                        </li>
                        <li>
                            <Link to='/forum' className='header__item'>Forum</Link>
                        </li>
                    </ul>
                    <div className="header__user">
                        <div className="header__user-imgbox">
                            <img className='header__user-img' src={Avatar} alt="avatar" />
                        </div>
                        <div class="dropdown">
                            <button class="header__arrow dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='bx bx-chevron-down'></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <Link to='/profil' class="dropdown-item" >
                                        <i class='bx bxs-user-circle' ></i>
                                        Profil
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/settings' class="dropdown-item">
                                        <i class='bx bxs-cog'></i>
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
