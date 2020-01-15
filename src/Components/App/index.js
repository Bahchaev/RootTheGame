import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import SetPlayersNumber from "../SetPlayersNumber";
import ShowFractionList from "../ShowFractionList";

function App() {
    return (
        <>
        <SetPlayersNumber/>
        <ShowFractionList/>
        </>
    )


}

export default App;