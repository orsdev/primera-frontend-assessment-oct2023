import { Stepper } from "./components";

const items = [
  {
    title: "Your basket",
  },
  {
    title: "Your details",
  },
  {
    title: "Payment",
  },
  {
    title: "Order complete",
  },
];

function App() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-[329px] rounded-[20px] py-[27px] px-[38px] shadow-custom">
        <Stepper items={items} current={3} />
      </div>
    </div>
  );
}

export default App;
