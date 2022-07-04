import { TExpense } from "models/expense.model";
import { ExpenseType, MonthList } from "constants/generic.enum";
import "./index.scss";

const Table = ({ expenses }: Props) => {
  const tableHeading = Object.values(MonthList).map((item: any, i) => {
    return <th key={i}>{item}</th>;
  });

  const monthlyExpense = (month: number, expenseType: any) => {
    const listMonth = expenses
      .filter(
        (expense: TExpense) =>
          new Date(expense.date).getMonth() === month &&
          expense.type === expenseType
      )

      .reduce((acc: number, cur: { value: Number }) => acc + +cur.value, 0);

    return listMonth;
  };

  return (
    <table className="table">
      <thead className="table__heading">
        <tr className="table__heading-row">
          <th>Expense type</th>
          {tableHeading}
        </tr>
      </thead>
      <tbody className="table__body">
        {Object.keys(ExpenseType).map((type, i) => (
          <tr key={i}>
            <td>{type}</td>
            {Object.keys(MonthList).map((key, i) => (
              <td key={i}>{monthlyExpense(+key, type)} Kn </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
type Props = {
  expenses: TExpense[];
};
export default Table;
