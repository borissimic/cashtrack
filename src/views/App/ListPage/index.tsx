import ExpenseForm from "components/ExpenseForm";
import ExpenseList from "components/ExpenseList";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { useCallback, useContext, useEffect, useMemo } from "react";

import "./index.scss";

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

  return (
    <div className="list-page">
      <ExpenseList className="list-page__list" expenses={expenses} />
      <ExpenseForm className="list-page__form" />
    </div>
  );
};

export default ListPage;
