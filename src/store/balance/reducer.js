// src/store/balance/reducer.js
const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/deposit": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    case "balance/depositCustom": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    case "balance/withdraw": {
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }

    case "balance/reset": {
      return {
        ...state,
        amount: 0,
      };
    }

    default: {
      return state;
    }
  }
}
