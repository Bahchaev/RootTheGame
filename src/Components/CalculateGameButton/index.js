import FractionList from "../../fractionList";
import ShowList from "../ShowList";
import React, {useContext, useState} from "react";
import PlayersContext from "../SetPlayersNumber/context";
import SetPlayersNumber from "../SetPlayersNumber";
import Result from "../Result";

function CalculateGameButton() {
    const [randomFractionList, setRandomFractionList] = useState([]);
    const [wannaPlayList, setWannaPlayList] = useState([]);
    const [dontWannaPlayList, setDontWannaPlayList] = useState([]);

    const players = 2;

    const calculate = () => {

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

        console.log("Посчитали игру для " + players + " игроков");
        console.log("рандом: " + randomFractionArr);
        console.log("желаемое: " + wannaPlayArr);
        console.log("не желаемое: " + dontWannaPlayArr);

        setRandomFractionList(randomFractionArr);
        setWannaPlayList(wannaPlayArr);
        setDontWannaPlayList(dontWannaPlayArr);
    };

    const isShow = () => {
        if ((randomFractionList.length + wannaPlayList.length + wannaPlayList.length) !== 0) {
            return "block"
        }
        return "none"
    };

    console.log(isShow());

    return (
        <>
            <button onClick={calculate}>Посчитать игру</button>
            <Result
                style={{display: isShow()}}
                randomFractionList={randomFractionList}
                wannaPlayList={wannaPlayList}
                dontWannaPlayList={dontWannaPlayList}
            />
        </>
    )
}

export default CalculateGameButton;

