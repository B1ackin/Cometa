import React from 'react';
import style from "../main_page/main/Main.module.css";
import cometa from "../assets/image/cosmic.png";



export const Authorization = () => {
    return (
        <div>
            <div>Авторизация</div>
            <div>
                <input type="text"/>
                <input type="text"/>
                <button>Авторизоваться</button>
            </div>
            <div>
                <img className={style.img} src={cometa} alt=""/>
            </div>
        </div>
    )
}