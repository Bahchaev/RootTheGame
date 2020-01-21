import React, {useState} from 'react';
import FractionConfig from "../FractionConfig";


function SetPlayersNumber() {

    const [playersNumber, setPlayersNumber] = useState(2);
    const [isShow, setIsShow] = useState(false);
    const [text, setText] = useState("Количество игроков не выбрано");

    let onClick = () => {
        let inputValue = document.getElementById('playersNumber').value;
        document.getElementById('playersNumber').value = "";

        if (2 <= inputValue && inputValue <= 6) {
            setPlayersNumber(inputValue);
            setText("Количество игроков: " + inputValue)
        } else {
            setPlayersNumber(0);
            setText("Неверный ввод")
        }

        setIsShow(true);
    };

    return (
        <div>
            Введите количестов игроков (от 2 до 6): {}
            <input defaultValue={2} id="playersNumber" type="number" min="2" max="6"/>

            <button onClick={onClick}>
                ОК
            </button>
            <div style={{display: isShow ? "block" : "none"}}>{text}</div>
            <FractionConfig isShow={isShow} playersNumber={playersNumber}/>
        </div>
    );
}

export default SetPlayersNumber