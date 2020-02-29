import React from 'react';

function SetPlayersNumber() {

    return (
        <div>
            <p>
                Введите количестов игроков (от 2 до 6): {}
                <input defaultValue={2} id="playersNumber" type="number" min="2" max="6"/>
            </p>
        </div>
    );

}

export default SetPlayersNumber
