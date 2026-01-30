import "../css/calculator.css";
import { DigitButton } from "./DigitButton";
import { useReducer } from "react";
import { reducer } from "../js/calculator-functions";
import { Output } from "./Output";

export const Calculator = () => {
  const [{ rightOperand, operation, leftOperand, total }, dispatch] =
    useReducer(reducer, {
      rightOperand: "",
      leftOperand: "",
      total: "",
      operation: "",
      overwrite: false,
    });

  return (
    <div className="calculator">
      <Output state={{ rightOperand, operation, leftOperand, total }} />
      <DigitButton
        className="span-two"
        type="clear"
        digit="AC"
        dispatch={dispatch}
      />
      <DigitButton type="delete-digit" digit="DEL" dispatch={dispatch} />
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
      <DigitButton
        className="span-two"
        type="evaluate"
        digit="="
        dispatch={dispatch}
      />
    </div>
  );
};
