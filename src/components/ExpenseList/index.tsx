import { Expense, TExpense } from "models/expense.model";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = ({ expenses }: Props) => {
  const content = expenses.map((item: TExpense) => {
    return <ExpenseCard expense={new Expense(item)}></ExpenseCard>;
  });
  return <ul>{content}</ul>;
};

type Props = {
  expenses: TExpense[];
};
export default ExpenseList;
