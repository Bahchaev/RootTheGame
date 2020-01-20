import React, {useEffect, useState} from 'react';
import FractionList from "../../fractionList";

function FractionConfig() {

    return (
        <table>
            <tr>
                <td align="center" bgcolor={"Silver"}>Фракция</td>
                <td align="center" bgcolor={"Silver"}>Рандом</td>
                <td align="center" bgcolor={"Silver"}>Хочу играть</td>
                <td align="center" bgcolor={"Silver"}>Не хочу играть</td>
            </tr>
            {Array.from(FractionList.keys()).map((fraction) =>
                <tr>
                    <td>{fraction.toString()}</td>
                    <td width={"70"} align="center"><input type="radio" name={fraction.toString()} checked/></td>
                    <td width={"70"} align="center"><input type="radio" name={fraction.toString()}/></td>
                    <td width={"70"} align="center"><input type="radio" name={fraction.toString()}/></td>
                </tr>
            )}
        </table>
    )
}

export default FractionConfig