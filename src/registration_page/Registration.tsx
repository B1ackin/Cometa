import React from 'react';
import style from "../registration_page/Registration.module.css";
import cometa from "../assets/image/cometa-reg.png";


export const Registration = () => {
    return (
        <div className={style.authorization}>
            <div className={style.container}>
                <div>
                    <p className={style.title}>Регистрация</p>
                    <div className={style.form}>
                        <input className={style.input_form_first} type="text" placeholder='Login'/>
                        <input className={style.input_form} type="email" placeholder='E-mail'/>
                        <p className={style.text}>Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</p>
                        <input className={style.input_form_first} type="password" placeholder='Password'/>
                        <input className={style.input_form} type="password" placeholder='Password repeat'/>
                        <p className={style.text}>Пароль должен иметь не менее 6 и не более 20 символов, должен содержать
                            хотя бы один специальный символ, одну цифру и одну заглавную букву.</p>
                        <input className={style.input_form_first} type="text" placeholder='Referal link'/>
                        <p className={style.text}>Если у вас есть реферальная ссылка, пожалуйста, введите ее в это поле,
                            если ссылки нет, то, пожалуйста, не заполняйте это поле.</p>
                        <div className={style.terms}>
                            <input type="checkbox"/>
                            <p className={style.agree}>Agree terms</p>
                            <p><a href="">Прочитать условия</a></p>
                        </div>
                        <p className={style.text}>Согласие с условиями обязательный параметр для регистрации.</p>
                        <button className={style.button_registration}>Зарегистрироваться</button>
                    </div>


                </div>
                <div>
                    <img src={cometa} alt=""/>
                </div>
            </div>
        </div>
    )
}