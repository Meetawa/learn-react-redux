import React from "react";

const App = () => {
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
        <h1>0</h1>
        <div>
          <button>DEC</button>
          <button>INC</button>
        </div>
      </div>
    </>
  );
};

export default App;
