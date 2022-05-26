import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Forum.scss'

function Forum(props) {
    let ism = '';
    let familya = '';
    let nomer = '';
    let email = '';


    let [ismInput, setIsmInput] = useState()
    let [famInput, setFamInput] = useState()
    let [nomerInput, setNomerInput] = useState()
    let [emailInput, setEmailInput] = useState()
    let [password, setPassword] = useState()
    let [btnTemp, setBtnTemp] = useState()


    const checkNameHandle = (e) => {
        ism = e.target.value;

        if(ism.match(/[a-z]/) !== null &&
        ism.match(/[!@#$%^&*()]/) === null &&
        ism.match(/[0-9]/) === null &&
        ism.length >= 3) {
            setIsmInput(true)
        } else {                                                                                                                                                                                                                                                                                                                                           
            setIsmInput(false)
        }

    }

    const checkLastNameHandle = (e) => {
        ism = e.target.value;

        if(ism.match(/[a-z]/) !== null &&
        ism.match(/[!@#$%^&*()]/) === null &&
        ism.match(/[0-9]/) === null &&
        ism.length >= 3) {
            setFamInput(true)
        } else {
            setFamInput(false)
        }

    }

    const checkNumberHandle = (e) => {
        ism = e.target.value;

        if(ism.match(/[0-9]/) !== null &&
        ism.match(/[!@#$%^&*()]/) === null &&
        ism.match(/[a-z]/) === null &&
        ism.length >= 9) {
            setNomerInput(true)
        } else {
            setNomerInput(false)
        }

    }

    const checkEmailHandle = (e) => {
        ism = e.target.value;

        if(ism.match(/[a-z]/) !== null &&
        ism.match(/[@]/) !== null && 
        ism.match(/[.]/) !== null &&
        ism.match(/[!#$%^&*()]/) === null &&
        ism.match(/[0-9]/) === null &&
        ism.length >= 5) {
            setEmailInput(true)
        } else {
            setEmailInput(false)
        }

    }

    const checkPasswordHandle = (e) => {
        ism = e.target.value;

        if(ism.match(/[a-z]/) !== null &&
        ism.match(/[!#$%^&*()]/) === null &&
        ism.match(/[0-9]/) !== null &&
        ism.length >= 8) {
            setPassword(true)
        } else {
            setPassword(false)
        }

    }

    // if(ismInput == true && famInput == true && nomerInput == true && emailInput == true && password == true){
    //     setBtnTemp(true);
    //   } else{
    //     setBtnTemp(false);
    //   }
    // }



        return (
            <div>
                <div className='forum'>
                        <div className='forum__inner'>
                            <div className='forum__img-box1'>
                                <img src={'https://imgur.com/UDJp5sI.png'} className="forum__img"/>
                            </div>
                            <div className='forum__info'>
                                <h2 className='forum__title'>Sign up</h2>
                                <p className='forum__link-text'>Already have an account?
                                <Link className='forum__link' to={'/signin'}>Sign in</Link>
                                </p>
                                <form className='forum__form' >
                                    <input 
                                        className='forum__input' 
                                        type="text" 
                                        placeholder='First name'
                                        id="name" 
                                        required 
                                        onChange={checkNameHandle}
                                        style = {{border: ismInput ? "1px solid green" : "2px solid red"}}
                                    />
                                    <input 
                                        className='forum__input' 
                                        type="text" 
                                        placeholder='Last name' 
                                        id="lastName"
                                        required
                                        onChange={checkLastNameHandle}
                                        style = {{border: famInput ? "1px solid green" : "2px solid red"}}
                                    />
                                    <input 
                                        className='forum__input' 
                                        onChange={checkNumberHandle}
                                        style = {{border: nomerInput ? "1px solid green" : "2px solid red"}} 
                                        placeholder='Phone' 
                                        type='number'
                                        required/>
                                    <input 
                                        className='forum__input' 
                                        // type="email" 
                                        placeholder='Email'
                                        onChange={checkEmailHandle}
                                        style = {{border: emailInput ? "1px solid green" : "2px solid red"}}  
                                        required
                                    />
                                    <input 
                                        className='forum__input' 
                                        type="text" 
                                        placeholder='Password' 
                                        onChange={checkPasswordHandle}
                                        style = {{border: password ? "1px solid green" : "2px solid red"}}  
                                        required
                                    />
                                    <button className='forum__btn' type='submit'>Next step</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        )
}

export default Forum