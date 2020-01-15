import React, {useEffect, useState} from 'react';
import FractionList from "../../fractionList";


function Fraction(props) {
    return (
        <p>{FractionList.get(props.fractionName).fullName}</p>
    )
}

export default Fraction