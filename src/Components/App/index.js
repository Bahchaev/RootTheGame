import React from 'react';
import SetPlayersNumber from "../SetPlayersNumber";
import FractionConfig from "../FractionConfig";
import GetRandomFractionSetButton from "../GetRandomFractionSetButton";
import ShowFractionSetListButton from "../ShowFractionSetList";
import CalculateGameButton from "../CalculateGameButton";


function App() {

    return (
        <>
            {/*<ShowList text={"Список фракций:"} listName={Array.from(FractionList.keys())}/>*/}
            <SetPlayersNumber/>
            <FractionConfig/>
            <GetRandomFractionSetButton/>
            <ShowFractionSetListButton/>
            <CalculateGameButton/>

        </>
    )
}

export default App;