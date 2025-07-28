import React from 'react';
import { useState, useEffect, useMemo,useRef } from "react";


const Home = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const [dark, setTheme] = useState(false);

    const doubleNumber = multiple(count)

    // const increment = () => {
    //     setCount(prev => prev + 1);
    //     console.log("re-rendered", count)
    // }

    const inUseRef = useRef()


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

    function display(){
        inUseRef.current.focus();
        console.log(inUseRef.current.value)
    }


    function multiple(num) {
        return num * 2;
    }

    return (
        <div>
            {/* <button onClick={increment}>Count: {count}</button> */}
            <input type="number" onChange={(e) => setCount(e.target.value)}></input>
            <input ref={inUseRef} type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
            <br></br>
            <button onClick={display}>Use ref</button>
            <span>{num}</span>
            <br />
            <span>{inUseRef.current?.value}</span>
            <button style={changeTheme} onClick={() => setTheme((prev) => !prev)}>Toggle button</button>
            <div>{doubleNumber}</div>
        </div>

    )
};

export default Home;

