import React, {useEffect, useState} from 'react';
import Fraction from "../Fraction";
import FractionList from "../../fractionList";


function ShowFractionList() {

    return (
        <ul>
            Список фракций:
            {Array.from(FractionList.values()).map((element) => <li>{element.fullName}</li>)}

        </ul>
    )

}

export default ShowFractionList