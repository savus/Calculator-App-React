import type { TCalc_State } from "../js/types";

export const Output = ({
  state: { rightOperand, operation, leftOperand, total },
}: {
  state: Partial<TCalc_State>;
}) => {
  return (
    <div className="output">
      <div className="left-operand">
        {leftOperand}
        {operation}
        {operation === "=" ? `= ${rightOperand}` : rightOperand}
      </div>
      <div className="total">{total}</div>
    </div>
  );
};
