import type { Dispatch } from "react";
import { CALC_ACTIONS } from "../js/constants";
import type { TCalc_Actions_Dispatch } from "../js/types";

export const DigitButton = ({
  digit,
  dispatch,
}: {
  digit: string;
  dispatch: Dispatch<TCalc_Actions_Dispatch>;
}) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: CALC_ACTIONS.ADD_DIGIT, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
};
