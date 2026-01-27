export const Output = ({
  previousOperand,
  operation,
  currentOperand,
}: {
  previousOperand: string;
  operation: string;
  currentOperand: string;
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
