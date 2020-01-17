import React, {useEffect, useState} from 'react';
import FractionList from "../../fractionList";


function Fraction(props) {
    return (
        <>{FractionList.get(props.fractionName).fullName}</>
    )
}

export default Fraction