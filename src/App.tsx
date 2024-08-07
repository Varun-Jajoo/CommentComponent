import React from "react";
import "./App.css";
import Component from "./Component";

function App() {
  return (
    <>
      <Component positionLeft={135} first={true} last={false} correction={66} />
      <Component positionLeft={90} first={false} last={false} correction={44} />
      <Component positionLeft={45} first={false} last={false} correction={22} />
      <Component positionLeft={0} first={false} last={true} correction={0} />
    </>
  );
}

export default App;
