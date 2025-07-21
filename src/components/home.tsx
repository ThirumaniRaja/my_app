import React from 'react';
import { useState,useEffect } from "react";


const Home = () => {
const [count, setCount] = useState(0);

const increment = () =>{
    setCount(prev => prev + 1);
    console.log("re-rendered",count)
}

useEffect(() => {
setCount(200)
    console.log("re-rendered-useEffect",count)

},[count])

return <button onClick={increment}>Count: {count}</button>

}

export default Home;

