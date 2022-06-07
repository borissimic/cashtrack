import { Expense } from "models/expense.model";
import { createContext, useState } from "react";

const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses: Expense[]) => {},
});

const ExpensesProvider = ({ children }: Props) => {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses } as any}>
      {children}
    </ExpensesContext.Provider>
  );
};

type Props = {
  children: any;
};
export { ExpensesContext, ExpensesProvider };
