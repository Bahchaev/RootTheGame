import ShowList from "../ShowList";
import React from "react";

function Result(props) {

    const randomFractionList = props.randomFractionList;
    const wannaPlayList = props.wannaPlayList;
    const dontWannaPlayList = props.dontWannaPlayList;

    return (
        <div style={{display: props.isShow}}>
            <table style={{width: "800px"}}>
                <tbody>
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
                </tbody>

            </table>
        </div>

    )
}

export default Result
