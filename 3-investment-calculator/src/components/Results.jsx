import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);

  console.log(results);
  return <p>Results</p>;
}
