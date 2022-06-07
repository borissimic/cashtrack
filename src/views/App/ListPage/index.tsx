import ExpenseList from "components/ExpenseList";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { useCallback, useContext, useEffect, useMemo } from "react";

const ListPage = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);

  const fetchExpenses = useCallback(async () => {
    const expenses = await expensesHttp.getExpenses();

    setExpenses(expenses);
  }, [expensesHttp, setExpenses]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return <ExpenseList className="list-page" expenses={expenses} />;
};

export default ListPage;
