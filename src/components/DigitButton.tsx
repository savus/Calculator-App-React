import type { Dispatch } from "react";
import type { TCalc_Actions_Dispatch } from "../js/types";

export const DigitButton = ({
  className,
  type,
  digit,
  dispatch,
}: {
  className?: string;
  type: TCalc_Actions_Dispatch["type"];
  digit: string;
  dispatch: Dispatch<TCalc_Actions_Dispatch>;
}) => {
  return (
    <button
      className={`${className}`}
      onClick={() => {
        dispatch({ type, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
};
