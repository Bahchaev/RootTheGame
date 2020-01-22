import React from 'react';
import FractionList from "../../fractionList";
import ShowList from "../ShowList";

function FractionConfig(props) {
    let playersNumber = props.playersNumber;
    let isShow = props.isShow;

//TODO: перенести в отдельный компонент calculateGame
    const calculateGame = () => {

        let randomFractionList = [],
            wannaPlayList = [],
            dontWannaPlayList = [];


        console.log("Посчитали игру для " + playersNumber + " игроков");

        Array.from(FractionList.keys()).map((fraction) => {
                if (document.getElementsByName(fraction)[0].checked) {
                    randomFractionList.push(fraction)
                } else if (document.getElementsByName(fraction)[1].checked) {
                    wannaPlayList.push(fraction)
                }
                dontWannaPlayList.push(fraction)
            }
        );

        console.log("рандом: " + randomFractionList);
        console.log("желаемое: " + wannaPlayList);
        console.log("не желаемое: " + wannaPlayList);
        return (
            <>
                <ShowList text={"Рандом: "} listName={randomFractionList}/>
                <ShowList text={"Желаемое: "} listName={wannaPlayList}/>
                <ShowList text={"Нежулаемое: "} listName={dontWannaPlayList}/>
            </>
        )
    };

    const showSetVariants = () => {
        console.log("Показали варианты наборов фракций")
    };

    return (
        <div style={{display: isShow ? "block" : "none"}}>
            <p></p>
            Укажите фракции, которыми вы хотите играть или НЕ хотите играть:
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
            <button onClick={calculateGame}>Посчитать игру</button>
            <button onClick={showSetVariants}>Посмотреть варианты</button>
        </div>
    )
};

export default FractionConfig