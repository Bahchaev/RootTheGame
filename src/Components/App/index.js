import React from 'react';
//import styles from './styles.module.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App(props) {
    //const element = <Welcome name="Sara"/>;

    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>

    )
}

export default App;
