import React from 'react'
import Container from '../../UI/Container/Container';
import Hero from '../Main/Hero/Hero'
import './nasr.scss'
import NasrList from './NasrList';

function Nasr({newObj}) {

        return (
            <div>
                <Container>
                    <Hero />
                    <ul className='asarList'>
                        <NasrList newObj={newObj} />
                    </ul>
                </Container>
            </div>
        )
}

export default Nasr;
