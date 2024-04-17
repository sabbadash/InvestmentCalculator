import { calculateInvestmentResults, formatter } from "../util/investment.js";
import InvestmentPieChart from "./InvestmentPieChart";
import InvestmentBarChart from "./InvestmentBarChart";
import { PieChart } from "recharts";

export default function Result({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  let totalContributions = 0,
    totalInterest = 0;

  annualData.forEach((item) => {
    // Increment total contributions by annual investment
    totalContributions += item.annualInvestment;
    // Sum up the interest
    totalInterest += item.interest;
  });

  const chartData = [
    { name: "Starting Amount", value: initialInvestment },
    { name: "Total Contributions", value: totalContributions },
    { name: "Interest", value: Math.floor(totalInterest * 100) / 100 },
  ];

  console.log(annualData);
  return (
    <div className="result-container">
      <div className="result">
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
      </div>
      <div className="chart-container">
        <InvestmentPieChart chartData={chartData} />
        <InvestmentBarChart chartData={annualData} />
      </div>
    </div>
  );
}
