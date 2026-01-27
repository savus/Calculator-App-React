import { DigitButton } from "./DigitButton";
import "../css/calculator.css";
import { useReducer } from "react";
import { OperationButton } from "./OperationButton";
import { reducer } from "../js/calculator-functions";
import { Output } from "./Output";
import { ClearButton } from "./ClearButton";
import { EvaluateButton } from "./EvaluateButton";

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
      <button>DEL</button>
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
      <EvaluateButton dispatch={dispatch} />
    </div>
  );
};
