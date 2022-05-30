import React from 'react';
import {Menu} from "./menu/Menu";
import style from './Header.module.css'
import logo from './../../image/logo.png'
import {Exchange} from "./exchange/Exchange";
import {Language} from "./language/Language";



export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
            <div className={style.logo}><img src={logo} alt=""/></div>
            <Menu/>
            <Exchange/>
            <Language />
            <button className={style.button_login}>Войти</button>
            <button className={style.button_registration}>Регистрация</button>

            </div>
        </div>
    )
}