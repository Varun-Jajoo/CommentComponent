import React from "react";
import "./App.css";
import Component from "./Component";

function App() {
  return (
    <>
      <Component positionLeft={135} bool={false} correction={66}/>
      <Component positionLeft={90} bool={false} correction={44}/>
      <Component positionLeft={45} bool={false} correction={22}/>
      <Component positionLeft={0} bool={true} correction={0}/>
    </>
  );
}

export default App;