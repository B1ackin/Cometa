import React from 'react';
import cometa from "../assets/image/cometa-log.png";
import style from './Login.module.css'


export const Authorization = () => {
    return (
        <div className={style.authorization}>
            <div className={style.container}>
                <div>
                    <p className={style.title}>Авторизация</p>
                    <div className={style.form}>
                        <input className={style.input_form} type="text" placeholder='Login'/>
                        <input className={style.input_form} type="password" placeholder='Password'/>
                        <button className={style.button_login}>Авторизоваться</button>
                    </div>
                </div>
                <div>
                    <img src={cometa} alt=""/>
                </div>
            </div>
        </div>
    )
}