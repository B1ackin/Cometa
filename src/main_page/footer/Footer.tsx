import React from 'react';
import style from './Footer.module.css'
import logo_footer from './../../image/logo_footer.png'
import tel from './../../image/icon/tel.png'
import mail from './../../image/icon/mail.png'
import teleg from './../../image/icon/teleg.png'
import what from './../../image/icon/what.png'
import fb from './../../image/icon/fb.png'


export const Footer = () => {
    return (
        <div className={style.footer}>
        <div className={style.footer_container}>
            <div className={style.first_block}>
                <img className={style.logo_footer} src={logo_footer} alt=""/>
                <p>Нужен постоянный и надежный доход?</p>
                <p>Хоите встать среди первых и получить большее?</p>
                <p>Тогда наш проект для Вас!</p>
                <button className={style.button_footer}>Поддержка</button>
            </div>
            <div>
                    <ul className={style.nav}>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О проекте</a></li>
                        <li><a href="#">Обзор пакетов</a></li>
                        <li><a href="#">Правила и акции</a></li>
                    </ul>
            </div>
            <div>
                <ul className={style.contact}>
                    <li><img src={tel} alt=""/>111-11-11-11</li>
                    <li><img src={mail} alt=""/>CoMetaClubMail@gmail.com</li>
                    <li><img src={teleg} alt=""/>Наш Telegram канал</li>
                    <li><img src={teleg} alt=""/>Наша группа Telegram</li>
                    <li><img src={what} alt=""/>Наша группа WhatsApp</li>
                    <li><img src={fb} alt=""/>Наш Facebook</li>
                </ul>
            </div>
        </div>
        </div>
    )
}