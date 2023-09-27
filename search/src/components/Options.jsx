import { useState } from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const Options = ({ title, additionalInfo }) => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number === 0) {
      return;
    }

    setNumber(number - 1);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <p className="font-bold ">{title}</p>
        {additionalInfo && (
          <span className="text-gray-400">{additionalInfo}</span>
        )}
      </div>
      <div className="flex gap-2 items-center text-sm">
        <MinusCircleOutlined
          className={`${
            number === 0 ? "text-customGrey" : " text-customRed"
          } text-2xl`}
          onClick={decrease}
        />
        {number}
        <PlusCircleOutlined
          className="text-customRed text-2xl"
          onClick={increase}
        />
      </div>
    </div>
  );
};
export default Options;
