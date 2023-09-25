import { ReactComponent as Swap } from "../assets/svg/swap.svg";
const { Option } = Select;
import { Select, Form } from "antd";
import { cities } from "../utils/constants";

const StationPicker = () => {
  const cityName = cities.map((item) => item.name);

  return (
    <div className="flex gap-2 relative">
      <Form.Item name="departure" initialValue="გამგზავრების სადგური">
        <Select showSearch className="!w-273 h-60">
          {cityName.map((item, index) => {
            return <Option key={index}>{item}</Option>;
          })}
        </Select>
      </Form.Item>
      <div className="flex items-center relative justify-center">
        <Swap className="absolute z-10 cursor-pointer" />
      </div>
      <Form.Item name="arrival" initialValue="ჩასვლის სადგური">
        <Select showSearch className="!w-273 h-60">
          {cityName.map((item, index) => {
            return <Option key={index}>{item}</Option>;
          })}
        </Select>
      </Form.Item>
    </div>
  );
};
export default StationPicker;
