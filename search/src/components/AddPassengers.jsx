import { useState } from "react";
import { Button, Popover } from "antd";
import { ReactComponent as Profile } from "../assets/svg/add-people.svg";
import Options from "./Options";

const AddPassengers = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const hide = () => {
    setOpen(false);
  };

  const content = (
    <div className="flex-[2] custom-font flex flex-col gap-3 ">
      <Options title="ზრდასრული" />
      <Options title="ბავშვი" additionalInfo="5-12 წლამდე" />
      <Options title="შშმ პირი" />
      <div className="w-full bg-gray-300 h-px mt-2"></div>
      <Button
        className="custom-font border-none text-right text-customRed finish-btn"
        type="default"
        onClick={hide}
      >
        დასრულება
      </Button>
    </div>
  );

  // border border-red-500

  return (
    <Popover
      content={content}
      title="მგზავრები"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      className="add-passengers "
    >
      <Button
        className="bg-gr h-60 flex-[2] text-black custom-font font-bold flex items-center justify-center"
        type="primary"
        icon={<Profile />}
      >
        მგზავრების დამატება
      </Button>
    </Popover>
  );
};
export default AddPassengers;
