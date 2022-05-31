import React from 'react';
import {Menu} from "./menu/Menu";
import style from './Header.module.css'
import logo from '../../assets/image/logo.png'
import {Exchange} from "./exchange/Exchange";
import {Language} from "./language/Language";
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Link to='/'>
                    <div className={style.logo}><img src={logo} alt=""/></div>
                </Link>
                <Menu/>
                <Exchange/>
                <Language/>
                <Link to='/login'> <button className={style.button_login}>Войти</button></Link>
                <Link to='/registration'><button className={style.button_registration}>Регистрация</button></Link>
            </div>
        </div>
    )
}