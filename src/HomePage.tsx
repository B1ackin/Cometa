import React from 'react';
import {Main} from "./main_page/main/Main";
import {CountDown} from "./main_page/timer/Timer";
import {Stage} from "./main_page/stage/Stage";



export const HomePage = () => {
    return (
        <div>
            <Main/>
            <CountDown days={38} hours={9} minutes={36}/>
            <Stage/>
        </div>
    )
}