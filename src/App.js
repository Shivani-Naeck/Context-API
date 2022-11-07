import React, { useState } from 'react';
import { Component1, Component6 } from './context';
import './App.css';

export const NameContext = React.createContext(" ");

function App() {

  
const [MyName, SetName] = useState("Shiv");
  return (
    //create the context wrapper to wrap the components
  <>
    <NameContext.Provider value={MyName}>
     <Component1 />
     <Component6 />
   </NameContext.Provider>  
   <button onClick={() => MyName === 'Shiva' ? SetName('shivani') : SetName('bye-bye')}>click Me</button>
  </>
  );
}

export default App;
