import { DigitButton } from "./DigitButton";

export const Calculator = () => {
  return (
    <div className="calculator">
      <DigitButton digit={"AC"} />
      <DigitButton digit={"DEL"} />
      <DigitButton digit={"/"} />
      <DigitButton digit={"9"} />
      <DigitButton digit={"8"} />
      <DigitButton digit={"7"} />
      <DigitButton digit={"*"} />
      <DigitButton digit={"6"} />
      <DigitButton digit={"5"} />
      <DigitButton digit={"4"} />
      <DigitButton digit={"+"} />
      <DigitButton digit={"3"} />
      <DigitButton digit={"2"} />
      <DigitButton digit={"1"} />
      <DigitButton digit={"-"} />
      <DigitButton digit={"0"} />
      <DigitButton digit={"."} />
      <DigitButton digit={"="} />
    </div>
  );
};
