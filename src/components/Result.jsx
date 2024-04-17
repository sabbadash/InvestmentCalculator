import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(
          ({ year, interest, valueEndOfYear, annualInvestment }) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterest;

            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
