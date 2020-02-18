import FractionList from "../../fractionList";
import ShowList from "../ShowList";
import React, {useContext} from "react";

function CalculateGameButton() {
    const playersNumber = useContext(PlayersNumberContext);
    const calculate = () => {

        let randomFractionList = [],
            wannaPlayList = [],
            dontWannaPlayList = [];



        console.log("Посчитали игру для " + playersNumber + " игроков");

        Array.from(FractionList.keys()).map((fraction) => {
                if (document.getElementsByName(fraction)[0].checked) {
                    randomFractionList.push(fraction)
                } else if (document.getElementsByName(fraction)[1].checked) {
                    wannaPlayList.push(fraction)
                }
                dontWannaPlayList.push(fraction)
            }
        );

        console.log("рандом: " + randomFractionList);
        console.log("желаемое: " + wannaPlayList);
        console.log("не желаемое: " + wannaPlayList);
    };



    return (
        <>
            <button onClick={calculate}>Посчитать игру</button>
            <ShowList text={"Рандом: "} listName={randomFractionList}/>
            <ShowList text={"Желаемое: "} listName={wannaPlayList}/>
            <ShowList text={"Нежулаемое: "} listName={dontWannaPlayList}/>
        </>
    )
}


export default CalculateGameButton;

