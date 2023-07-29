import { person } from "./person";
import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import Data from "./components/data";
import BoxData from "./components/box-data";
import DataControll from "./components/data-control";

function App() {
const [state,setstate] = useState(person);
let Del = ()=>setstate([]);
let Add = ()=>setstate(person);
useEffect(()=>{
  setstate([])
},[])
  return (
    <div>
      <Container className="pt-5 font">
        <Data person={state}/>
        <BoxData person={state}/>
        <DataControll onDelate={Del} onAdd={Add}/>
      </Container>
    </div>
  );
}

export default App;
