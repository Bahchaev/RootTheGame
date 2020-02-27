import React from 'react';
import FractionList from "../../FractionList";

function FractionConfig(props) {
    return (
        <div>
            <p>Укажите фракции, которыми вы хотите играть или НЕ хотите играть:</p>
            <table id="fractionTable">
                <tbody>
                <tr>
                    <td align="center" bgcolor={"Silver"}>Фракция</td>
                    <td align="center" bgcolor={"Silver"}>Рандом</td>
                    <td align="center" bgcolor={"Silver"}>Хочу играть</td>
                    <td align="center" bgcolor={"Silver"}>Не хочу играть</td>
                </tr>
                {Array.from(FractionList.keys()).map((fraction) =>
                    <tr>
                        <td>{fraction}</td>
                        <td width={"70"} align="center"><input type="radio"
                                                               name={fraction}
                                                               value={fraction + "isInRandom"}
                                                               defaultChecked/>
                        </td>
                        <td width={"70"} align="center"><input type="radio"
                                                               name={fraction}
                                                               value={fraction + "isInWannaPlay"}/>
                        </td>
                        <td width={"70"} align="center"><input type="radio"
                                                               name={fraction}
                                                               value={fraction + "isInDontWannaPlay"}/>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}

export default FractionConfig