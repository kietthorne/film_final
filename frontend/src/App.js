import React from "react";
import BodyComponent from "./components/BodyComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const containerStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    width: "70vw",
    margin: "100px auto",
    background: "white",
  };

  return (
    <>
      <div style={containerStyle}>
        <HeaderComponent />
        <BodyComponent />
      </div>
    </>
  );
}

export default App;
