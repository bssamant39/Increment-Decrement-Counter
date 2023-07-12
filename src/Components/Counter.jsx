import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { DecNumber, IncNumber } from "../redux/actions";

const Counter = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment / Decrement Counter</h1>
      <h4>React JS (Redux)</h4>

      <div className="quantity">
        <a href="#" className="quantity__minus">
          <span onClick={() => dispatch(DecNumber())}>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={myState}
        />
        <a href="#" className="quantity__plus">
          <span onClick={() => dispatch(IncNumber())}>+</span>
        </a>
      </div>
    </div>
  );
};

export default Counter;
