import React from 'react';
import FractionList from "../../fractionList";

function FractionConfig(props) {
    let playersNumber = props.playersNumber;
    let isShow = props.isShow;


    const calculateGame = () => {
        console.log("Посчитали игру для " + playersNumber + " игроков")
    };

    const showSetVariants = () => {
        console.log("Показали варианты наборов фракций")
    };

    return (
        <div style={{display: isShow ? "block" : "none"}}>
            <p></p>
            Укажите фракции, которыми вы хотите играть или НЕ хотите играть:
            <table>
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
            <button onClick={calculateGame}>Посчитать игру</button>
            <button onClick={showSetVariants}>Посмотреть варианты</button>
        </div>
    )
}

export default FractionConfig