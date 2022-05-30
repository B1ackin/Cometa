import React from 'react';
import style from './Language.module.css'



export const Language = () => {
    return (
        <div className={style.language}>
        <span className={style.text}>Русский</span>
        <span className={style.text_choice}>RU</span>
        </div>
    )
}