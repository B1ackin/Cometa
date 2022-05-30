import React from 'react';
import style from './Timer.module.css'
import plash from './../../image/plash.png'
import planet from './../../image/planet.png'

export const CountDown = ({days = 0, hours = 0, minutes = 0, seconds = 0}) => {
    const [paused, setPaused] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [[d, h, m, s], setTime] = React.useState([days, hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;

        if (d === 0 && h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (h === 0 && m === 0) {
            setTime([d - 1, 23, 59, 59]);
        } else if (m === 0 && s === 0) {
            setTime([d, h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([d, h, m - 1, 59]);
        } else {
            setTime([d, h, m, s - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(String(days)), parseInt(String(hours)), parseInt(String(minutes)), parseInt(String(seconds))]);
        setPaused(false);
        setOver(false);
    };

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div className={style.main_timer}>
            <div className={style.start}>До старта проекта:</div>

            <div className={style.timer}>
                <div className={style.timer_number}>
                    <div>{`${d.toString().padStart(2, '0')}`}</div>
                    <div className={style.text}>Дней</div>
                </div>
                <div className={style.timer_number}>
                    <div>{`${h.toString().padStart(2, '0')}`}</div>
                    <div className={style.text}>Часов</div>
                </div>
                <div className={style.timer_number}>
                    <div>{`${m.toString().padStart(2, '0')}`}</div>
                    <div className={style.text}>Минут</div>
                </div>
                <div className={style.timer_number}>
                    <div>{`${s.toString().padStart(2, '0')}`}</div>
                    <div className={style.text}>Секунд</div>
                </div>
            </div>
            {/*<div className={style.timer}>{`*/}
            {/*${d.toString().padStart(2, '0')}:*/}
            {/*${h.toString().padStart(2, '0')}:*/}
            {/*${m.toString().padStart(2, '0')}:*/}
            {/*${s.toString().padStart(2, '0')}`}</div>*/}
            <button className={style.accept}>Принять участие</button>
            <img className={style.plash} src={plash} alt=""/>
            <img className={style.planet} src={planet} alt=""/>
        </div>
    );
};