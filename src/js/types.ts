export type TCalc_State = {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  overwrite: boolean;
};

export type TCalc_Actions = {
  ADD_DIGIT: "add-digit";
  CHOOSE_OPERATION: "choose-operation";
  DELETE_DIGIT: "delete-digit";
  CLEAR: "clear";
  EVALUATE: "evaluate";
};

export type TCalc_Actions_Dispatch =
  | {
      type: TCalc_Actions["ADD_DIGIT"];
      payload: {
        digit: string;
      };
    }
  | {
      type: TCalc_Actions["CHOOSE_OPERATION"];
      payload: {
        operation: string;
      };
    }
  | {
      type: TCalc_Actions["DELETE_DIGIT"];
    }
  | {
      type: TCalc_Actions["CLEAR"];
    }
  | {
      type: TCalc_Actions["EVALUATE"];
    };
