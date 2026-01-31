import { CALC_ACTIONS } from "./constants";
import type { TCalc_Actions_Dispatch, TCalc_State } from "./types";

const addDigit = (state: TCalc_State, digit: string) => {
  if (state.overwrite)
    return { ...state, currentOperand: digit, overwrite: false };

  if (digit === "0" && state.currentOperand === "0") return state;

  if (digit === "." && state.currentOperand.includes(".")) return state;

  return {
    ...state,
    currentOperand: `${state.currentOperand}${digit}`,
  };
};

const handleOperation = (state: TCalc_State, digit: string) => {
  //previous operand and current operand null
  if (state.currentOperand === "" && state.previousOperand == "") return state;

  //previous operand is not null, change operation
  if (state.currentOperand === "") return { ...state, operation: digit };

  //currentOperand is not null, move to previousOperand with operation
  if (state.previousOperand === "")
    return {
      ...state,
      previousOperand: state.currentOperand,
      currentOperand: "",
      operation: digit,
    };

  //if both current and previous operands are not null, evaluate answer into previous operand
  return {
    ...state,
    currentOperand: "",
    previousOperand: evaluate(state),
    operation: digit,
  };
};

const clearCalculatorValues = (state: TCalc_State) => {
  return {
    ...state,
    currentOperand: "",
    operation: "",
    previousOperand: "",
  };
};

const handleEvaluationButton = (state: TCalc_State) => {
  if (
    state.currentOperand === "" &&
    state.previousOperand === "" &&
    state.operation === ""
  )
    return state;

  if (state.currentOperand === "")
    return {
      ...state,
      overwrite: false,
      currentOperand: state.previousOperand,
      previousOperand: "",
      operation: "",
    };

  return {
    ...state,
    overwrite: true,
    currentOperand: evaluate(state),
    previousOperand: "",
    operation: "",
  };
};

const evaluate = ({
  currentOperand,
  operation,
  previousOperand,
}: TCalc_State): string => {
  const parseInput = (input: string): number | null => {
    const parsed = parseFloat(input);
    if (Number.isNaN(parsed)) return null;
    return parsed;
  };

  const prev = parseInput(previousOperand);
  const current = parseInput(currentOperand);

  if (prev === null || current === null) return "0";

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

  if (computation === "Infinity") return "Cannot divide by zero";
  return computation;
};

export const reducer = (state: TCalc_State, action: TCalc_Actions_Dispatch) => {
  switch (action.type) {
    case CALC_ACTIONS.ADD_DIGIT:
      return addDigit(state, action.payload.digit);
    case CALC_ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case CALC_ACTIONS.CHOOSE_OPERATION:
      return handleOperation(state, action.payload.digit);
    case CALC_ACTIONS.CLEAR:
      return clearCalculatorValues(state);
    case CALC_ACTIONS.EVALUATE:
      return handleEvaluationButton(state);
  }
};
