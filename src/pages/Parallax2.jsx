import React from "react";
import { render } from "react-dom";
import Plx from "react-plx";

const exampleParallaxData = [
  {
    start: "self",
    end: 1000,

    properties: [
      {
        startValue: 1,
        endValue: 500,
        property: "translateX"
      },
    ],
  },
];


const App = () => (
  <Plx parallaxData={exampleParallaxData}>
    <h1>Hello!</h1>
  </Plx>
);

export default App;
