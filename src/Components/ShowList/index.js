import React, {useEffect, useState} from 'react';

function ShowList(props) {
    const listName = props.listName;
    const text = props.text;

    return (
        <ul>
            {text}
            {listName.map((element) => <li key={element}>{element}</li>)}
        </ul>
    )

}

export default ShowList