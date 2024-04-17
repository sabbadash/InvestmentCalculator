import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INVEST_INFO = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [data, setData] = useState(INVEST_INFO);

  const isInputValid = data.duration >= 1;

  function handleChange(event) {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: +value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={data} onChange={handleChange} />
      {!isInputValid && (
        <p className="center">Please enter a valid duration (1 year or more)</p>
      )}
      {isInputValid && <Result userInput={data} />}
    </>
  );
}

export default App;
