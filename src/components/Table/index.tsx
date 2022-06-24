import { TExpense } from "models/expense.model";
import { ExpenseType, MonthList } from "constants/generic.enum";
import "./index.scss";

const Table = ({ expenses }: Props) => {
  const tableHeading = Object.values(MonthList).map((item: any, i) => {
    return <th key={i}>{item}</th>;
  });

  const expenseTypes = Object.keys(ExpenseType).map((type, i) => {
    return (
      <tr key={i}>
        <td>{type}</td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead className="table__heading">
        <tr className="table__heading-row">
          <th>Expense type</th>
          {tableHeading}
        </tr>
      </thead>
      <tbody className="table__body">{expenseTypes}</tbody>
    </table>
  );
};
type Props = {
  expenses: TExpense[];
};
export default Table;
