import { DigitButton } from "./DigitButton";
import "../css/calculator.css";
import { useReducer } from "react";
import { reducer } from "../js/calculator-functions";
import { Output } from "./Output";
import { ClearButton } from "./ClearButton";
import { EvaluateButton } from "./EvaluateButton";
import { CALC_ACTIONS } from "../js/constants";

export const Calculator = () => {
  const [{ currentOperand, operation, previousOperand }, dispatch] = useReducer(
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
      <Output state={{ currentOperand, operation, previousOperand }} />
      <ClearButton dispatch={dispatch} />
      <button
        onClick={() => {
          dispatch({ type: CALC_ACTIONS.DELETE_DIGIT });
        }}
      >
        DEL
      </button>

      <DigitButton type="choose-operation" digit={"/"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"9"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"8"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"7"} dispatch={dispatch} />
      <DigitButton type="choose-operation" digit={"*"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"6"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"5"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"4"} dispatch={dispatch} />
      <DigitButton type="choose-operation" digit={"+"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"3"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"2"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"1"} dispatch={dispatch} />
      <DigitButton type="choose-operation" digit={"-"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"0"} dispatch={dispatch} />
      <DigitButton type="add-digit" digit={"."} dispatch={dispatch} />
      <EvaluateButton dispatch={dispatch} />
    </div>
  );
};
