import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].annualInvestment -
    results[0].interest;

  return (
    <table id="results">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest Earned</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const investedCapital = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
