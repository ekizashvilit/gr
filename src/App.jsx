import { Form } from "antd";
import StationPicker from "./components/StationPicker";
import TravelDatePicker from "./components/TravelDatePicker";
import AddPassengers from "./components/AddPassengers";

function App() {
  return (
    <div className="h-screen  flex justify-center items-center bg-gray-100">
      <Form className="custom-form ">
        <StationPicker />
        <TravelDatePicker />
        <AddPassengers />
      </Form>
    </div>
  );
}

export default App;
