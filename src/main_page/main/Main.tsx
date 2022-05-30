import React from 'react';
import cometa from './../../image/cosmic.png'
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className={style.main_block}>


        <div className={style.container}>
            <div>
                <div className={style.title}>CoMeta – это современная <br/> платформа
                    цифровых товаров на базе Blockchain
                </div>
                <div className={style.text_one}>
                    Они предоставляются через прямые партнерские отношения с внешними компаниями.
                    Пользователь может использовать CoMeta для совершения покупок и получения скидок.
                </div>
                <div className={style.text_two}>
                    CoMeta coin – это виртуальный токен, который можно использовать только внутри платформы CoMeta,
                    с дальнейшим выходом на биржу. Вы можете получить токены CoMeta coin, купив продукт или получив кэшбэк,
                    или работая на сообщество, предлагая услугу.
                </div>
            </div>
            <div>
                <img className={style.img} src={cometa} alt=""/>
            </div>
        </div>
        </div>
    )
}