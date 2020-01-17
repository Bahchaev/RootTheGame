import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import SetPlayersNumber from "../SetPlayersNumber";
import ShowFractionList from "../ShowFractionList";
import GetWannaPlayFractionList from "../EnterWannaPlayFractionList";

function App() {
    const wannaPlayFractions = new Map();
    return (
        <>
        <SetPlayersNumber/>
        <ShowFractionList/>
        <GetWannaPlayFractionList/>
        </>
    )


}

export default App;