import { DigitButton } from "./DigitButton";
import "../css/calculator.css";
import { useReducer } from "react";
import type { TCalc_Actions_Dispatch, TCalc_State } from "../js/types";
import { CALC_ACTIONS } from "../js/constants";
import { OperationButton } from "./OperationButton";

const reducer = (state: TCalc_State, action: TCalc_Actions_Dispatch) => {
  switch (action.type) {
    case CALC_ACTIONS.ADD_DIGIT:
      if (action.payload.digit === "0" && state.currentOperand === "0")
        return state;

      if (action.payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload.digit}`,
      };
  }

  return state;
};
export const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: "",
      previousOperand: "",
      operation: "",
      overwrite: false,
    },
  );

  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>AC</button>
      <OperationButton operation={"/"} dispatch={dispatch} />
      <DigitButton digit={"9"} dispatch={dispatch} />
      <DigitButton digit={"8"} dispatch={dispatch} />
      <DigitButton digit={"7"} dispatch={dispatch} />
      <OperationButton operation={"*"} dispatch={dispatch} />
      <DigitButton digit={"6"} dispatch={dispatch} />
      <DigitButton digit={"5"} dispatch={dispatch} />
      <DigitButton digit={"4"} dispatch={dispatch} />
      <OperationButton operation={"+"} dispatch={dispatch} />
      <DigitButton digit={"3"} dispatch={dispatch} />
      <DigitButton digit={"2"} dispatch={dispatch} />
      <DigitButton digit={"1"} dispatch={dispatch} />
      <OperationButton operation={"-"} dispatch={dispatch} />
      <DigitButton digit={"0"} dispatch={dispatch} />
      <DigitButton digit={"."} dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
};
