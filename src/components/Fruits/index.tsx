import React from "react";
import { useParams } from "react-router-dom";

const Fruit = () => {
  const { fruit } = useParams<{ fruit: string }>();

  return <div>The fruit of choice is {fruit}</div>;
};

export default Fruit;
