import type { Dispatch } from "react";
import { CALC_ACTIONS } from "../js/constants";
import type { TCalc_Actions_Dispatch } from "../js/types";

export const OperationButton = ({
  operation,
  dispatch,
}: {
  operation: string;
  dispatch: Dispatch<TCalc_Actions_Dispatch>;
}) => {
  return (
    <button
      onClick={() => {
        dispatch({
          type: CALC_ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        });
      }}
    >
      {operation}
    </button>
  );
};
