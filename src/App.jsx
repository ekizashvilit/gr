import { Button, Form } from "antd";
import StationPicker from "./components/StationPicker";
import TravelDatePicker from "./components/TravelDatePicker";
import AddPassengers from "./components/AddPassengers";

function App() {
  return (
    <div className="h-screen w-screen  flex justify-center items-center bg-gray-100">
      <Form className="custom-form ">
        <StationPicker />
        <TravelDatePicker />
        <AddPassengers />
        <Button className="h-60 flex-1 bg-customRed text-white custom-font font-bold search-btn">
          მოძებნე
        </Button>
      </Form>
    </div>
  );
}

export default App;
