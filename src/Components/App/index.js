import React from 'react';
import SetPlayersNumber from "../SetPlayersNumber";
import ShowList from "../ShowList";
import FractionList from "../../fractionList";
import FractionConfig from "../FractionConfig";
import CalculateGameButton from "../CalculateGameButton";

function App() {

    return (
        <>
            {/*<ShowList text={"Список фракций:"} listName={Array.from(FractionList.keys())}/>*/}
            <SetPlayersNumber/>
            <FractionConfig/>
            <CalculateGameButton/>
        </>
    )
}

export default App;