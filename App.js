import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste React from JSX 🚀</h1>;

// funtional Component

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React funtional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
