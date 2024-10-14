import { useState } from "react";
import Numbers from "./Buttons/Numbers";
import Operations from "./Buttons/Operations";
import AnswerBtn from "./Buttons/AnswerBtn";
import ExtrasBtn from "./Buttons/ExtrasBtn";

function Calculator() {
  const [prevNumber, setPrevNumber] = useState(null);
  const [operation, setOperation] = useState("");
  const [display, setDisplay] = useState("");

  const handleNumberClick = (e) => {
    const value = e.target.value;
    setDisplay((prev) => prev + value);
    console.log(e);
  };

  const handleOperationClick = (e) => {
    const selectedOperation = e.target.value;
    setPrevNumber(parseFloat(display));
    setDisplay("");
    setOperation(selectedOperation);
  };

  const calculateResult = () => {
    const currentNumber = parseFloat(display);
    let result;

    switch (operation) {
      case "+":
        result = prevNumber + currentNumber;
        break;
      case "-":
        result = prevNumber - currentNumber;
        break;
      case "x":
        result = prevNumber * currentNumber;
        break;
      case "/":
        result = prevNumber / currentNumber;
        break;
      case "%":
        result = prevNumber % currentNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPrevNumber(null);
    setOperation("");
  };

  const handleDeleteClick = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return (
    <div className="main max-w-full flex flex-col items-center justify-center h-screen ">
      {/* Top Section (Display) */}
      <div className="top bg-[#FFFFFF]  text-4xl w-[26rem]  h-40 rounded-t-xl flex p-4 justify-end items-end">
        <p className="max-w-96 text-gray-800 font-light overflow-hidden text-ellipsis whitespace-nowrap">
          {isNaN(display) ? "Invalid Operation" : display || 0}
        </p>
      </div>

      {/* Bottom Section (Buttons) */}
      <div className="flex">
        <div className="bottom grid grid-cols-3 bg-[#F6F6F6] w-80">
          <ExtrasBtn
            ClearDisplay={() => setDisplay("")}
            DeleteNumbers={handleDeleteClick}
            handleOperation={handleOperationClick}
          />

          <Numbers onClick={handleNumberClick} />
          <AnswerBtn onClick={calculateResult} />
        </div>
        <div className="grid grid-cols-1 bg-white">
          <Operations onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
