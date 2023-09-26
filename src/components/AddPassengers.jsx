import React, { useState } from "react";
import { Button, Popover } from "antd";
import { ReactComponent as Profile } from "../assets/svg/add-people.svg";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const AddPassengers = () => {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(0);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const content = (
    <div>
      <div className="flex justify-between">
        <p>ზრდასრული</p>
        <div>
          <MinusCircleOutlined />
          {number}
          <PlusCircleOutlined />
        </div>
      </div>
    </div>
  );

  return (
    <Popover
      content={content}
      title="მგზავრები"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      className="add-passengers"
    >
      <Button
        className="bg-gr h-60 w-339 text-black custom-font font-bold flex items-center justify-center"
        type="primary"
        icon={<Profile />}
      >
        მგზავრების დამატება
      </Button>
    </Popover>
  );
};
export default AddPassengers;
