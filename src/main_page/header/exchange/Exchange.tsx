import React from 'react';
import style from './Exchange.module.css'
import bit from '../../../assets/image/bit.png'
import crip from '../../../assets/image/crip.png'
import efir from '../../../assets/image/efir.png'

export const Exchange = () => {
    return (
        <div>
            <img className={style.bit} src={bit} alt=""/>
            <img className={style.icon} src={efir} alt=""/>
            <img className={style.icon} src={crip} alt=""/>
        </div>
    )
}