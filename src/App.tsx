import React from 'react';
import './App.css';
// import axios  from 'axios';
import AxiosIn from './components/axios.js';
// import DraggableBox from './components/DraggableB.tsx';
// import PlantConfigView from './components/Configurable.tsx';
// import Home from './components/home.tsx';
import List from './components/list.tsx';

const App = () => {

 async function  apiCall(){
  const response = await AxiosIn.get('?format=json')
  console.log(response)
  }

  return (
    <div className="App">
      {/* <DraggableBox></DraggableBox>
      <PlantConfigView></PlantConfigView> */}
      
      {/* <DraggableBox></DraggableBox> */}
      {/* <Home></Home> */}

      <h1>
        <button onClick={apiCall}>Test API</button>
      </h1>

      <List></List>

      

    
    </div>
  );
}

export default App;
