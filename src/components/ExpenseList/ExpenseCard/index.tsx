import { Expense } from "models/expense.model";
import "./index.scss";

const ExpenseCard = ({ expense }: Props) => {
  const { id, category, name, price, date } = expense;
  return (
    <li className="expense-card">
      <div className="expense-card__icons"></div>
      <div className="expense-card__info">
        <h3>{category}</h3>
        <span>{name}</span>
        <span>{price}</span>
        <span>{date}</span>
      </div>
    </li>
  );
};

type Props = {
  expense: Expense;
};

export default ExpenseCard;
