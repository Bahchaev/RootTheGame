import React, {useEffect, useState} from 'react';
import Fraction from "../Fraction";
import FractionList from "../../fractionList";


function ShowFractionList() {

    return (
        <ul>
            Список фракций:
            {Array.from(FractionList.keys()).map((element) => <li><Fraction fractionName = {element}/></li>)}

        </ul>
    )

}

export default ShowFractionList