import React from 'react';
import style from './About.module.css'
import cometa from '../../src/assets/image/about/cometa_about.png'
import cosmos from '../../src/assets/image/about/cosmos.png'
import planeta from '../../src/assets/image/about/planeta.png'
import checkbox from '../../src/assets/image/about/icon/checkbox.png'
import ellips_pra from '../../src/assets/image/about/ellips_pra.png'
import planeta1 from '../../src/assets/image/about/planeta1.png'
import frame1 from '../../src/assets/image/about/icon/frame1.png'
import frame2 from '../../src/assets/image/about/icon/frame2.png'

export const About = () => {
    return (
        <div className={style.about_block}>
           <div className={style.container}>
               <div className={style.text}>
                   <p className={style.title}>О проекте</p>
                   <p className={style.description}>CoMeta – это современная платформа
                       цифровых товаров на базе Blockchain. Они предоставляются через прямые партнерские отношения с внешними компаниями. Пользователь может использовать CoMeta для совершения покупок и получения скидок.
                       <br/>CoMeta coin – это виртуальный токен, который можно использовать только внутри платформы CoMeta, с дальнейшим выходом на биржу. Вы можете получить токены CoMeta coin, купив продукт или получив кэшбэк, или работая на сообщество, предлагая услугу.
                       <br/>Стоимость виртуального токена CoMeta coin определяется пользователями и количеством клиентов услуги. Нет никаких прогнозов относительно его стоимости. CoMeta coin не является инвестицией, поэтому прибыль не может быть гарантирована.
                   </p>
               </div>
               <div><img src={cometa} alt=""/></div>
           </div>
            <div className={style.container}>
                <p className={style.title}>Планируемый перечень платформ с которыми планируется интеграция проекта</p>
                {/*<div><img src={plash} alt=""/></div>*/}
            </div>
            <div className={style.container}>
                <div><img src={cosmos} alt=""/></div>
                <div>
                    <p className={style.description}>CoMetaCoin – будет доступен для покупки и обмена на интегрированных платформах, чтобы вы могли начать работу.
                        Чем больше доступно для обмена, тем больше CoMetaCoin будет доступен для людей и его крупных транзакций PancakeSwap и другие.
                    </p>
                    <span className={style.items}>
                        <img src={checkbox} alt=""/>
                        <p className={style.text}>Платформы децентрализованного обмена PancakeSwap и другие.</p>
                    </span>
                    <span className={style.items}>
                        <img src={checkbox} alt=""/>
                        <p className={style.text}>Платформы децентрализованного обмена PancakeSwap и другие.</p>
                    </span>
                    <span className={style.items}>
                        <img src={checkbox} alt=""/>
                        <p className={style.text}>Платформы децентрализованного обмена PancakeSwap и другие.</p>
                    </span>
                </div>
            </div>
            <div className={style.cometacoin}>
                <p className={style.title}>Этапы развития CoMetaCoin</p>
                <img src={planeta} alt=""/>
            </div>
            <div className={style.container_not_margin}>
                <p className={style.title_rule}>Правила</p>
                <img className={style.ellips} src={ellips_pra} alt=""/>
            </div>
            <div className={style.container}>
                <div >
                    <p className={style.title_project}>Вступая в систему у вас появляется возможность зарабатывать двумя базовыми способами.</p>
                    <div className={style.block_rule}>
                        <img src={frame1} alt=""/>
                        <p className={style.text_project}>Вам начисляются доходы по программе Direct в размере 10% от стоимости пакета, кождого нового участника которого пригласили лично вы.</p>
                    </div>
                    <div className={style.block_rule}>
                        <img src={frame2} alt=""/>
                        <p className={style.text_project}>Вам начисляется заработок по программе Single Line, при вступлении любых новых участников, размер начисления зависит от вашего положения в линии и обещго количества участников</p>
                    </div>
                </div>
                <div className={style.image}><img src={planeta1} alt=""/></div>
            </div>
            <div className={style.container_text}>
                <p className={style.text_block}>Вступая в систему у вас появляется возможность зарабатывать двумя базовыми способами.
                    Вступить в систему вы можете только поприглашению одного из участников.
                    Вступая в систему вы имеете право приобретать неограниченное количество пакетов на имя своего зарегистрированного аккаунта.</p>
                <p className={style.text_block}>Ограничение начисления - общее количество начисленных доходов не превышет 300% стоимости вашего пакета. При достижении предела
                    начисления доходов вам необходимо повысить уровень пакета.</p>
                <p className={style.text_block}>Повысить пакет можно не поздее 30 календарных дней с момента приобретения или повышения ващего пакета.</p>
            </div>
        </div>
    )
}
