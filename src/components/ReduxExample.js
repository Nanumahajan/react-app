import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../Redux/action";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter Example </h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxExample;
