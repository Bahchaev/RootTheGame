import React, {useEffect, useState} from 'react';
import Fraction from "../Fraction";
import FractionList from "../../fractionList";

function GetWannaPlayFractionList() {

    return (
        <form name={"EnterWannaPlayFractionList"}>
            <p>Выберите фракции, которыми вы хотите играть:</p>

            {Array.from(FractionList.values()).map((element) =>
                <p><input type="checkbox"
                          name={"wannaPlay_" + element.fullName}
                          value={element.fullName}/>
                    {element.fullName}
                </p>
            )}

            <p><input type={"submit"} value={"Отправить"}/></p>
        </form>
    )
}

export default GetWannaPlayFractionList