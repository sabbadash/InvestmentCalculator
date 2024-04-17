import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INVEST_INFO = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [data, setData] = useState(INVEST_INFO);

  function handleChange(event) {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  console.log(data);
  return (
    <>
      <Header />
      <UserInput userInput={data} onChange={handleChange} />
      <Result userInput={data} />
    </>
  );
}

export default App;
