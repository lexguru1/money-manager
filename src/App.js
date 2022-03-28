// import "./App.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  withdraw,
  reset,
  depositCustom,
} from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [custom, setCustom] = useState(0);
  console.log("this is state:", custom);
  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <form>
        <input
          type="text"
          name="custom_amount"
          value={custom}
          onChange={(e) => {
            setCustom(parseInt(e.target.value));
          }}
        />
      </form>
      <button
        onClick={() => {
          dispatch(depositCustom(custom));
          setCustom(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
