import React from 'react';
import frame1 from '../../assets/image/Frame1.png'
import frame2 from '../../assets/image/Frame2.png'
import frame3 from '../../assets/image/Frame3.png'
import frame4 from '../../assets/image/Frame4.png'
import style from './Stage.module.css'

export const Stage = () => {
    return (
        <div>
            <div className={style.title}>Этапы развития</div>
            <div className={style.frame_block}>
                <div className={style.frame1}>
                    <img src={frame1} alt=""/>
                    <p>PRE-ICO</p>
                </div>
                <div className={style.frame}>
                    <img src={frame2} alt=""/>
                    <p>ICO</p>
                </div>
                <div className={style.frame}>
                    <img src={frame3} alt=""/>
                    <p>ЗАПУСК ОБМЕНА</p>
                </div>
                <div className={style.frame}>
                    <img src={frame4} alt=""/>
                    <p>АЙДРОП, НАГРАДЫ, АУКЦИОНЫ</p>
                </div>
            </div>
        </div>
    )
}