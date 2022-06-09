import { Expense, TExpense } from "models/expense.model";
import ExpenseCard from "./ExpenseCard";
import "./index.scss";
import "./ExpenseCard/index.scss";

const ExpenseList = ({ expenses, className, hasAdd }: Props) => {
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
  hasAdd?: boolean;
};
export default ExpenseList;
