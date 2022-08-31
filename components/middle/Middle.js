import React from "react";
import Title from "./Title";
import Price from "./Price";
import ShirtOptions from "./ShirtOptions";
import Details from "./Details";

const Middle = () => {
  return (
    <div id="center">
      <Title />
      <Price />
      <ShirtOptions />
      <Details />
    </div>
  );
};

export default Middle;
