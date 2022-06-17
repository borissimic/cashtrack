import { Expense } from "models/expense.model";
import { createContext, useState } from "react";

const ExpenseContext = createContext({
  expense: {},
  setExpense: (expense: Expense) => {},
});

const ExpenseProvider = ({ children }: Props) => {
  const [expense, setExpense] = useState(null);

  return (
    <ExpenseContext.Provider value={{ expense, setExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

type Props = {
  children: any;
};
export { ExpenseContext, ExpenseProvider };
