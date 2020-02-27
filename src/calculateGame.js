import React, {useState} from "react";
import FractionList from "./FractionList";

function calculateGame() {

    const [randomFractionList, setRandomFractionList] = useState([]);
    const [wannaPlayList, setWannaPlayList] = useState([]);
    const [dontWannaPlayList, setDontWannaPlayList] = useState([]);

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
    }

    calculate();

    return (
        [randomFractionList, wannaPlayList, dontWannaPlayList]
    )
}

calculateGame();