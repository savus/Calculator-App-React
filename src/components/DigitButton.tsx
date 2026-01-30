import type { Dispatch } from "react";
import { CALC_ACTIONS } from "../js/constants";
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
        switch (type) {
          case CALC_ACTIONS.ADD_DIGIT:
            return dispatch({
              type: CALC_ACTIONS.ADD_DIGIT,
              payload: { digit },
            });
          case CALC_ACTIONS.CHOOSE_OPERATION:
            return dispatch({
              type: CALC_ACTIONS.CHOOSE_OPERATION,
              payload: { digit },
            });
          case CALC_ACTIONS.DELETE_DIGIT:
            return dispatch({
              type: CALC_ACTIONS.DELETE_DIGIT,
            });

          case CALC_ACTIONS.CLEAR:
            return dispatch({
              type: CALC_ACTIONS.CLEAR,
            });

          case CALC_ACTIONS.EVALUATE:
            return dispatch({
              type: CALC_ACTIONS.EVALUATE,
            });
        }
      }}
    >
      {digit}
    </button>
  );
};
