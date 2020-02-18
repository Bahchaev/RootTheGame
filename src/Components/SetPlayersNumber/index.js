import React, {useState} from 'react';
import FractionConfig from "../FractionConfig";
import CalculateGameButton from "../CalculateGameButton";

const PlayersNumberContext = React.createContext(2);

function SetPlayersNumber() {

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
            <PlayersNumberContext.Provider value={playersNumber}>
                <CalculateGameButton/>
            </PlayersNumberContext.Provider>

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