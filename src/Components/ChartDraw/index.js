import React, {useEffect, useState} from 'react';
import AreaChart from "recharts/lib/chart/AreaChart";
import Area from "recharts/lib/cartesian/Area";
import Tooltip from "recharts/lib/component/Tooltip";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import YAxis from "recharts/lib/cartesian/YAxis";
import XAxis from "recharts/lib/cartesian/XAxis";

function ChartDraw() {

    const arr = [];

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        min = min * 100;
        max = max * 100;
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand) / 100;
    }

    for (let i = 0; i < 100; i++) {
        arr.push(
            {
                "date": new Date().toLocaleTimeString(),
                "rateUSD": randomInteger(50, 60)
            }
        )

    }

    function addNewRate() {
        arr.shift();
        arr.push(
            {
                "date": new Date().toLocaleTimeString(),
                "rateUSD": randomInteger(50, 60)
            }
        )
    }

    const [count, setCount] = useState();

    useEffect(() => {
        //addNewRate();
        setInterval(() => {
                addNewRate()
                console.log(arr[arr.length-1])
            }, 1000
        )
    });

    const data = arr;
    // const data = [
    //     {
    //         "name": "Page A",
    //         "uv": 4000,
    //     },
    //     {
    //         "name": "Page B",
    //         "uv": 3000,
    //     },
    //     {
    //         "name": "Page C",
    //         "uv": 2000,
    //     },
    //     {
    //         "name": "Page D",
    //         "uv": 2780,
    //     },
    //     {
    //         "name": "Page E",
    //         "uv": 1890,
    //     },
    //     {
    //         "name": "Page F",
    //         "uv": 2390,
    //     },
    //     {
    //         "name": "Page G",
    //         "uv": 3490,
    //     }
    // ];

    return (
        <AreaChart width={1500} height={250} data={data}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>

            <XAxis dataKey="date" domain={['auto', 'auto']}/>
            <YAxis dataKey="rateUSD" domain={['auto', 'auto']}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type="linear" dataKey="rateUSD" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
        </AreaChart>
    )
}

export default ChartDraw