import type { TCalc_Actions_Dispatch } from "../js/types";
import { CALC_ACTIONS } from "../js/constants";
import type { Dispatch } from "react";

export const EvaluateButton = ({
  dispatch,
}: {
  dispatch: Dispatch<TCalc_Actions_Dispatch>;
}) => {
  return (
    <button
      className="span-two"
      onClick={() => {
        dispatch({ type: CALC_ACTIONS.EVALUATE });
      }}
    >
      =
    </button>
  );
};
