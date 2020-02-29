import React, {useState} from 'react';
import PlayersWeight from "../../PlayersWeight";
import FractionList from "../../FractionList";
import Result from "../Result";

function CalculateGameButton() {

    const [playersNumber, setPlayersNumber] = useState();
    const [fractionMinWeight, setFractionMinWeight] = useState();
    const [text, setText] = useState();

    const [randomFractionList, setRandomFractionList] = useState([]);
    const [wannaPlayList, setWannaPlayList] = useState([]);
    const [dontWannaPlayList, setDontWannaPlayList] = useState([]);


    const getPlayersNumber = () => {
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

    const tableIsShow = () => {
        return ((text === "Неверный ввод") || (text === undefined)) ? "none" : "block"
    };

    function fractionListsCalculation() {

        const randomFractionArr = [],
            wannaPlayArr = [],
            dontWannaPlayArr = [];

        Array.from(FractionList.keys()).map((fraction) => {
                if (document.getElementsByName(fraction)[0].checked) {
                    randomFractionArr.push(fraction)
                } else if (document.getElementsByName(fraction)[1].checked) {
                    wannaPlayArr.push(fraction)
                } else
                    dontWannaPlayArr.push(fraction)
            }
        );

        setRandomFractionList(randomFractionArr);
        setWannaPlayList(wannaPlayArr);
        setDontWannaPlayList(dontWannaPlayArr);
    }


    const onClick = () => {
        getPlayersNumber();
        fractionListsCalculation()
    };

    console.log("Количество игроков: " + playersNumber);
    console.log("Минимальный суммарный вес фракций: " + fractionMinWeight);
    console.log(text);

    return (
        <><br/>
            <button onClick={onClick}>Посчитать игру</button>
            <Result
                text={text}
                randomFractionList={randomFractionList}
                wannaPlayList={wannaPlayList}
                dontWannaPlayList={dontWannaPlayList}
                tableIsShow={tableIsShow()}
            />
        </>
    )
}

export default CalculateGameButton