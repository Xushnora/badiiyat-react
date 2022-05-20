import React, { useEffect, useState } from 'react'
import Layout from '../../UI/Layout/Layout';
import Category from './Category/Category';
import Hero from './Hero/Hero';

import obj from '../../badiiyat.js'

function Main (){

    const[cardArr, setCardArr] = useState([])

    useEffect(() => {
        setCardArr(obj)
    }, [])

    return (
        <Layout>
            <Hero />
            <Category 
                obj = {obj}
                cardArr = {cardArr}
                setCardArr = {setCardArr}
            />
        </Layout>
    )
}

export default Main;
