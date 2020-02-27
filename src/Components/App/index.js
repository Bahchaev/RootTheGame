import React from 'react';
import SetPlayersNumber from "../SetPlayersNumber";
import GameCalculationButton from "../GameCalculationButton";

function App() {

    return (
        <>
            {/*<ShowList text={"Список фракций:"} listName={Array.from(FractionList.keys())}/>*/}
            <SetPlayersNumber/>
            <GameCalculationButton/>

        </>
    )
}

export default App;