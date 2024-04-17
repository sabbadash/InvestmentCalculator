import { PieChart, Pie, Tooltip } from "recharts";

export default function InvestmentPieChart({ chartData }) {
  return (
    <>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={chartData}
          cx="50%"
          cy="37%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </>
  );
}
