import React, {useState} from 'react';
import './App.css';
// import axios  from 'axios';
import AxiosIn from './components/axios.js';
// import DraggableBox from './components/DraggableB.tsx';
// import PlantConfigView from './components/Configurable.tsx';
import Home from './components/home.tsx';
import List from './components/list.tsx';
import ButtonC from './components/Button.tsx';
import HigherOrder from './components/HigherOrder.tsx';
import {Link,BrowserRouter, Routes, Route} from 'react-router-dom'
import PlantConfigView from './components/Configurable.tsx';

const App = () => {
const [isLogin, setLogIn] = useState(false);
const HigherO = HigherOrder(ButtonC);
 async function  apiCall(){
  const response = await AxiosIn.get('?format=json')
  console.log(response)
  }

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/plant" element={<PlantConfigView />}/>
      </Routes>
      {/* </BrowserRouter> */}
      {/* <DraggableBox></DraggableBox>
      <PlantConfigView></PlantConfigView> */}
      
      {/* <DraggableBox></DraggableBox> */}
      {/* <Home></Home> */}

      {/* <h1>
        <button onClick={apiCall}>Test API</button>
      </h1>

      <List></List> */}

      {/* HigherOrder */}

      {/* <ButtonC label={"hey"} /> */}

      <HigherO label="hello" trackInfo={{name:"Thiru"}}/>
      <HigherO label="hello" trackInfo={{name:"Raja"}}/>

      <ul>
        <li></li>
       {isLogin && ( <Link to="/plant">plant</Link> )}
        <li></li>
      </ul>

      

    
    </div>
  );
}

export default App;
