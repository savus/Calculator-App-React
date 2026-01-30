import { CALC_ACTIONS } from "./constants";
import type { TCalc_Actions_Dispatch, TCalc_State } from "./types";

const addDigit = (state: TCalc_State, digit: string) => {
  if (state.overwrite)
    return { ...state, rightOperand: digit, overwrite: false };

  if (digit === "0" && state.rightOperand === "0") return state;

  if (digit === "." && state.rightOperand.includes(".")) return state;

  return {
    ...state,
    rightOperand: `${state.rightOperand}${digit}`,
  };
};

const handleOperation = (state: TCalc_State, digit: string) => {
  //previous operand and current operand null
  if (state.rightOperand === "" && state.leftOperand == "") return state;

  //previous operand is not null, change operation
  if (state.rightOperand === "") return { ...state, operation: digit };

  //rightOperand is not null, move to leftOperand with operation
  if (state.leftOperand === "")
    return {
      ...state,
      leftOperand: state.rightOperand,
      rightOperand: "",
      operation: digit,
    };

  //if both current and previous operands are not null, evaluate answer into previous operand
  return {
    ...state,
    rightOperand: "",
    leftOperand: evaluate(state),
    operation: digit,
  };
};

const clearCalculatorValues = (state: TCalc_State) => {
  return {
    ...state,
    rightOperand: "",
    operation: "",
    leftOperand: "",
  };
};

const handleEvaluationButton = (state: TCalc_State) => {
  if (
    state.rightOperand === "" &&
    state.leftOperand === "" &&
    state.operation === ""
  )
    return state;

  if (state.rightOperand === "")
    return {
      ...state,
      overwrite: false,
      rightOperand: state.leftOperand,
      leftOperand: "",
      operation: "",
    };

  return {
    ...state,
    overwrite: true,
    rightOperand: evaluate(state),
    leftOperand: "",
    operation: "",
  };
};

const evaluate = ({
  rightOperand,
  operation,
  leftOperand,
}: TCalc_State): string => {
  const parseInput = (input: string): number | null => {
    const parsed = parseFloat(input);
    if (Number.isNaN(parsed)) return null;
    return parsed;
  };

  const prev = parseInput(leftOperand);
  const current = parseInput(rightOperand);

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
      return { ...state, rightOperand: state.rightOperand.slice(0, -1) };
    case CALC_ACTIONS.CHOOSE_OPERATION:
      return handleOperation(state, action.payload.digit);
    case CALC_ACTIONS.CLEAR:
      return clearCalculatorValues(state);
    case CALC_ACTIONS.EVALUATE:
      return handleEvaluationButton(state);
  }
};
