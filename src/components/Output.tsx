import type { TCalc_State } from "../js/types";

export const Output = ({
  state: { currentOperand, operation, previousOperand },
}: {
  state: Partial<TCalc_State>;
}) => {
  return (
    <div className="output">
      <div className="previous-operand">
        {previousOperand}
        {operation}
      </div>
      <div className="current-operand">{currentOperand}</div>
    </div>
  );
};
