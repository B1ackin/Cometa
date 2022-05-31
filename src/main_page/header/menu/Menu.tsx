import React from 'react';
import style from './Menu.module.css'
import {Link} from "react-router-dom";


export const Menu = () => {
    return (
        <div>
            <ul className={style.nav}>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/about'>О проекте</Link></li>
                <li><a href="#">Обзор пакетов</a></li>
                <li><a href="#">Правила и акции</a></li>
            </ul>
        </div>
    )
}