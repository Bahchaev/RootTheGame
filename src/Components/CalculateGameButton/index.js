import FractionList from "../../FractionList";
import React, {useState} from "react";
import Result from "../Result";
const Combinatorics = require('js-combinatorics');

function CalculateGameButton(props) {
    const [randomFractionList, setRandomFractionList] = useState([]);
    const [wannaPlayList, setWannaPlayList] = useState([]);
    const [dontWannaPlayList, setDontWannaPlayList] = useState([]);

    const playersNumber = props.playersNumber;

    function calculate() {

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

        console.log("Посчитали игру для " + playersNumber + " игроков");
    }

    const isShow = () => {
        if ((randomFractionList.length + wannaPlayList.length + wannaPlayList.length) !== 0) {
            return "block"
        }
        return "none"
    };

    return (
        <>
            <button onClick={calculate}>Посчитать игру</button>
            <Result
                isShow={isShow()}
                randomFractionList={randomFractionList}
                wannaPlayList={wannaPlayList}
                dontWannaPlayList={dontWannaPlayList}
            />
        </>
    )
}

export default CalculateGameButton;

