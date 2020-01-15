import React, {useEffect, useState} from 'react';
import FractionList from "../../fractionList";


function Fraction(fraction) {
    return (
        <>{FractionList.get(fraction).fullName}</>
    )
}

export default Fraction