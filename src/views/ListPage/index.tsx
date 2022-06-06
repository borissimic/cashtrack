import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ExpenseList from "components/ExpenseList";
import InputField from "components/InputField";
import ExpensesHttp from "http/expenses.http";
import { useCallback, useEffect, useMemo, useState } from "react";
const ListPage = () => {
  const [expenses, setExpenses] = useState([]);

  const expensesHttp = useMemo(() => new ExpensesHttp(), []);

  const fetchExpenses = useCallback(async () => {
    const expenses: any = await expensesHttp.getExpenses();

    setExpenses(expenses);
  }, [expensesHttp]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return (
    <div className="list-page">
      <ExpenseList expenses={expenses} />
      <InputField icon={faPencil}>
        <input type="text" placeholder="placeholder"></input>
      </InputField>
    </div>
  );
};

export default ListPage;

//
