import React, {useState} from 'react';
import CalculateGameButton from "../CalculateGameButton";
import PlayersContext from "./context";

function SetPlayersNumber(defaultValue, calculateChangedBits) {

    const [playersNumber, setPlayersNumber] = useState(2);
    const [text, setText] = useState("Количество игроков: " + playersNumber);


    let onClick = () => {
        let input = document.getElementById('playersNumber');

        if (2 <= input.value && input.value <= 6) {
            setPlayersNumber(input.value);
            setText("Количество игроков: " + input.value);
        } else {
            setPlayersNumber(0);
            setText("Неверный ввод")
        }

        input.value = "";  //опустошили строку ввода
    };

    return (
        <div>
            <PlayersContext.Provider value={playersNumber}>
                <CalculateGameButton/>
            </PlayersContext.Provider>

            <p>
                Введите количестов игроков (от 2 до 6): {}
                <input defaultValue={2} id="playersNumber" type="number" min="2" max="6"/>
                <button onClick={onClick}>ОК</button>
            </p>
            <p>{text}</p>
        </div>
    );
}

export default SetPlayersNumber
