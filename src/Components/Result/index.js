import ShowList from "../ShowList";
import React from "react";

function Result(props) {

    const randomFractionList = props.randomFractionList;
    const wannaPlayList = props.wannaPlayList;
    const dontWannaPlayList = props.dontWannaPlayList;

    return (
        <table style={{width: "500px"}}>
            <tr style={{verticalAlign: "top"}}>
                <td style={{width: "33%"}}>
                    <ShowList text={"Рандом:"} listName={randomFractionList}/>
                </td>
                <td style={{width: "33%"}}>
                    <ShowList text={"Желаемое:"} listName={wannaPlayList}/>
                </td>
                <td style={{width: "33%"}}>
                    <ShowList text={"Не желаемое:"} listName={dontWannaPlayList}/>
                </td>
            </tr>
        </table>
    )
}

export default Result
