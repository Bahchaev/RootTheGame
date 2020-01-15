import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

function SetPlayersNumber() {

    const [playersNumber, setPlayersNumber] = useState(2);
    const [isShow, setIsShow] = useState(false);
    const [text, setText] = useState();

    return (
        <div>
            Введите количестов игроков (от 2 до 6): {}
            <input defaultValue={2} id="playersNumber" type="number" min="2" max="6"/>

            <button onClick={() => {
                let inputValue = document.getElementById('playersNumber').value;
                document.getElementById('playersNumber').value = "";

                if (2 <= inputValue && inputValue <= 6) {
                    setPlayersNumber(inputValue);
                    setText("Количество игроков: " + inputValue)
                } else {
                    //setPlayersNumber(0);
                    setText("Неверный ввод")
                }

                setIsShow(true);
            }}>
                ОК
            </button>
            <p style={{display: isShow ? "block" : "none"}}>{text}</p>
            {console.log (playersNumber)}
        </div>
    );
}

export default SetPlayersNumber