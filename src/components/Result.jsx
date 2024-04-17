import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <tbody>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
        {annualData.map(
          ({ year, interest, valueEndOfYear, annualInvestment }) => (
            <tr>
              <td key={`${year}year`}>{year}</td>
              <td key={`${interest}interest`}>{formatter.format(interest)}</td>
              <td key={`${valueEndOfYear}value`}>
                {formatter.format(valueEndOfYear)}
              </td>
              <td key={`${annualInvestment}annual`}>
                {formatter.format(annualInvestment)}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
