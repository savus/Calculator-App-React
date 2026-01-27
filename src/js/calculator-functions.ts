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

const evaluate = ({
  currentOperand,
  operation,
  previousOperand,
}: TCalc_State): string => {
  const parseInput = (input: string): number | null => {
    if (input === "") return null;
    return parseFloat(input);
  };

  const prev = parseInput(previousOperand);
  const current = parseInput(currentOperand);

  if (prev === null || current === null) return "";

  let computation = "";
  switch (operation) {
    case "*":
      computation = `${prev * current}`;
      break;
    case "-":
      computation = `${prev - current}`;
      break;
    case "+":
      computation = `${prev + current}`;
      break;
    case "/":
      computation = `${prev / current}`;
      break;
  }

  return computation;
};

export const reducer = (state: TCalc_State, action: TCalc_Actions_Dispatch) => {
  switch (action.type) {
    case CALC_ACTIONS.ADD_DIGIT:
      return addDigit(state, action.payload.digit);
    case CALC_ACTIONS.CHOOSE_OPERATION:
      //prevop and curop null
      if (state.currentOperand === "" && state.previousOperand == "")
        return state;

      //previousOperand is not null, change operation
      if (state.currentOperand === "")
        return { ...state, operation: action.payload.operation };

      //currentOperand is not null, move to previousOperand with operation
      if (state.previousOperand === "")
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "",
          operation: action.payload.operation,
        };

      //if both current and previous operands are not null, evaluate answer into current operand
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: "",
        operation: "",
      };
  }

  return state;
};
