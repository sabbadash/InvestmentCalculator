import { useState } from "react";

export default function UserInput({ onChange }) {
  function handleChange(event) {
    const { id, value } = event.target;
    onChange(id, value);
  }

  return (
    <form id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input type="number" id="initialInvestment" onChange={handleChange} />
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input type="number" id="annualInvestment" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return</label>
        <input type="number" id="expectedReturn" onChange={handleChange} />
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" onChange={handleChange} />
      </div>
    </form>
  );
}
