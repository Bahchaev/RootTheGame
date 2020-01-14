import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

function SetPlayersNumber() {

    const [playersNumber, setPlayersNumber] = useState(2);
    const [isShow, setIsShow] = useState(false);
    const [text, setText] = useState();

    return (
        <div>
            Введите количестов игроков: {}
            <input id="playersNumber" type="number" min="2" max="6"/>

            <button onClick={() => {
                let inputValue = document.getElementById('playersNumber').value;
                document.getElementById('playersNumber').value = "";
                setIsShow(true);

                if (2 <= inputValue && inputValue <= 6) {
                    setPlayersNumber(inputValue);
                    setText("Количество игроков: " + playersNumber)
                } else {
                    setPlayersNumber(inputValue);
                    setText("Неверный ввод")
                }
            }}>
                ОК
            </button>
            <p style={{display: isShow ? "block" : "none"}}>{text}</p>
            <p>{playersNumber}</p>
        </div>
    );
}

export default SetPlayersNumber