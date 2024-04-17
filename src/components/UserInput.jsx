export default function UserInput({ onChange, userInput }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={onChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            required
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            id="duration"
            value={userInput.duration}
            onChange={onChange}
          />
        </p>
      </div>
    </form>
  );
}
