// src/store/balance/actions.js
export const deposit = (depositAmount) => ({
  type: "balance/deposit",
  payload: depositAmount,
});

export const withdraw = (withdrawAmount) => ({
  type: "balance/withdraw",
  payload: withdrawAmount,
});

export const reset = () => ({
  type: "balance/reset",
  payload: null,
});

export const depositCustom = (customAmount) => ({
  type: "balance/depositCustom",
  payload: customAmount,
});
