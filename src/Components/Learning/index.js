import React, {useEffect, useState} from "react";

export default function Learning() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 5000);
    }, []);

    useEffect(() => {
        console.log(new Date().toLocaleTimeString())
    }, [time]);


    return (
        <>
            <div>
                {time}
            </div>
            <div>
                Кнопку нажали {count} раз
            </div>
            <button onClick={() => setCount(count + 1)}>Кнопка</button>
        </>
    )
}



