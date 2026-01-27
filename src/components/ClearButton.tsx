import type { Dispatch } from "react";
import type { TCalc_Actions_Dispatch } from "../js/types";

export const ClearButton = ({
  dispatch,
}: {
  dispatch: Dispatch<TCalc_Actions_Dispatch>;
}) => {
  return (
    <button
      onClick={() => {
        dispatch({});
      }}
    >
      AC
    </button>
  );
};
