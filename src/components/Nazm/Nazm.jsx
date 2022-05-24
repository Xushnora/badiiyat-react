import React from 'react'
import Container from '../../UI/Container/Container'
import qorqma from '../../assets/imgs/qorqma.jpg'

function Nazm() {
        return (
            <div>
                <Container>
                    <div className="bookBox">
                        <div className="bookBox__imgBox">
                            <img className="bookBox__img" src={qorqma} alt="qo'rqma" />
                        </div>
                        <div className='bookBox__infoBox'>
                            <h1 className='bookBox__title'>Qo'rqma</h1>
                            <p className='bookBox__author'>Javlon Jovliyev</p>
                            <span className='bookBox__start'>| <i className='bx bxs-star' style={{color: "#fff"}} ></i></span>
                            <p className='bookBox__sahifa'>Sahifalar soni: <span>376</span></p>
                            <p className='bookBox__sahifa'>Chop etilgan: <span>2021</span></p>
                            <p className='bookBox__sahifa'>Janri: <span>Tarixiy</span></p>
                            <p className='bookBox__sahifa'>Nashriyot: <span>Nihol nashr</span></p>
                            <p className='bookBox__more'>To'liq ma'lumot <i className='bx bx-down-arrow-alt'></i></p>
                            <p className='bookBox__text'>
                                Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. 
                                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган asr бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
                            </p>
                            <h3 className='bookBox__more'>Mavjud formatlar</h3>
                            <div className='bookBox__format'>
                                <div className='bookBox__formatter'>
                                    <i className='bx bxs-book-alt'></i>
                                    <p>Qog'oz kitob</p>
                                    <p>27 000 so'm</p>
                                </div>
                                <div className='bookBox__formatter'>
                                    <i className='bx bx-headphone'></i>
                                    <p>Audiokitob</p>
                                    <p>6:23 soat</p>
                                </div>
                                <div className='bookBox__formatter'>
                                    <i className='bx bx-tab'></i>
                                    <p>Elektron</p>
                                    <p>pdf, epub</p>
                                </div>
                                <button className='bookBox__btn'>Javonga qo'shish </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
}

export default Nazm