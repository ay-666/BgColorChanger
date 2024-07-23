import { useContext, useState } from 'react';
import './App.css';
import BgContext from './BgContext';


function App() {
  const [currentBg , setCurrentBg] = useState("White");
  return (
    
    <div className="App" style={{backgroundColor:currentBg}}>
      <BgContext.Provider value={{currentBg , setCurrentBg}}>
      <ColorSelector ></ColorSelector>
      </BgContext.Provider>
    </div>
    
  );
}

const ColorSelector = ()=>{
  return (
    <div className="colorSelector">
      <ColorButton color="Red" ></ColorButton>
      <ColorButton color="Yellow" ></ColorButton>
      <ColorButton color="Black" ></ColorButton>
      <ColorButton color="Purple" ></ColorButton>
      <ColorButton color="Green" ></ColorButton>
      <ColorButton color="Blue" ></ColorButton>
      <ColorButton color="White"></ColorButton>
    </div>
  );
}

const ColorButton =({color})=>{
  const {currentBg,setCurrentBg} = useContext(BgContext);
  let textColor = "Black";
  if(color === "Black") textColor = "White";
  return (
    <button  style={{backgroundColor: color,color:textColor }} 
    onClick = {()=>{
      console.log(currentBg);
      setCurrentBg(color)
    }} >{color === "White" ?"Default" :color}</button>
  );
}

export default App;
