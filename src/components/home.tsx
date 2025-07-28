import React from 'react';
import { useState, useEffect, useMemo } from "react";


const Home = () => {
    const [count, setCount] = useState(0);
    const [dark, setTheme] = useState(false);

    const doubleNumber = multiple(count)

    const increment = () => {
        setCount(prev => prev + 1);
        console.log("re-rendered", count)
    }


    // const changeTheme = 


    const changeTheme = useMemo(() => {
        return {
            color: dark ? 'white' : 'black',
            backgroundColor: dark ? 'black' : 'white'
        }
    }, [dark])
    useEffect(() => {
        setCount(count)
        console.log("re-rendered-useEffect", count)
        // return () => {
        //     setCount(0)
        //     console.log("memory clean")
        // }

    }, [count])

    useEffect(() => {
        console.log("Theme")
    }, [changeTheme])



    function multiple(num) {
        return num * 2;
    }

    return (
        <div>
            {/* <button onClick={increment}>Count: {count}</button> */}
            <input type="number" onChange={(e) => setCount(e.target.value)}></input>
            <button style={changeTheme} onClick={() => setTheme((prev) => !prev)}>Toggle button</button>
            <div>{doubleNumber}</div>
        </div>

    )
};

export default Home;

