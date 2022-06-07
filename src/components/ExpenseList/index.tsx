import { Expense, TExpense } from "models/expense.model";
import ExpenseCard from "./ExpenseCard";
import "./index.scss";

const ExpenseList = ({ expenses, className }: Props) => {
  const content = expenses.map((item: TExpense) => {
    return (
      <li key={item.id}>
        <ExpenseCard expense={new Expense(item)}></ExpenseCard>
      </li>
    );
  });

  return <ul className={`expense-list ${className}`}>{content}</ul>;
};

type Props = {
  expenses: TExpense[];
  className?: string;
};
export default ExpenseList;
