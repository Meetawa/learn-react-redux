import React from "react";
import { useSelector } from "react-redux";
const App = () => {
  const curState = useSelector((state) => state.number);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Increament/Decrement Counter</h1>
        <h1>{curState}</h1>
        <div>
          <button>DEC</button>
          <button>INC</button>
        </div>
      </div>
    </>
  );
};

export default App;
