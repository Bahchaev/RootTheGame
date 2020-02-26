import React, {useState} from 'react';
import PlayersWeight from "../../PlayersWeight";
import FractionConfig from "../FractionConfig";

function SetPlayersNumber(defaultValue, calculateChangedBits) {

    const [playersNumber, setPlayersNumber] = useState(2);
    const [fractionMinWeight, setFractionMinWeight] = useState(17);
    const [text, setText] = useState("Количество игроков: " + playersNumber);


    let onClick = () => {
        let input = document.getElementById('playersNumber');

        if (2 <= input.value && input.value <= 6) {
            setPlayersNumber(input.value);
            setFractionMinWeight(PlayersWeight.get(input.value));
            setText("Количество игроков: " + input.value);
        } else {
            setPlayersNumber(0);
            setFractionMinWeight(null);
            setText("Неверный ввод")
        }
    };

    console.log("Количество игроков: " + playersNumber);
    console.log("Минимальный суммарный вес фракций: " + fractionMinWeight);

    return (
        <div>
            <p>
                Введите количестов игроков (от 2 до 6): {}
                <input defaultValue={2} id="playersNumber" type="number" min="2" max="6"/>
                <button onClick={onClick}>ОК</button>
            </p>
            <p>{text}</p>
            <FractionConfig
                playersNumber={playersNumber}
                fractionMinWeight={fractionMinWeight}
            />
        </div>
    );
}

export default SetPlayersNumber
