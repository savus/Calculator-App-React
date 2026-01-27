import { CALC_ACTIONS } from "./constants";
import type { TCalc_Actions_Dispatch, TCalc_State } from "./types";

const addDigit = (state: TCalc_State, digit: string) => {
  if (digit === "0" && state.currentOperand === "0") return state;

  if (digit === "." && state.currentOperand.includes(".")) return state;

  return {
    ...state,
    currentOperand: `${state.currentOperand}${digit}`,
  };
};

export const reducer = (state: TCalc_State, action: TCalc_Actions_Dispatch) => {
  switch (action.type) {
    case CALC_ACTIONS.ADD_DIGIT:
      return addDigit(state, action.payload.digit);
  }

  return state;
};
