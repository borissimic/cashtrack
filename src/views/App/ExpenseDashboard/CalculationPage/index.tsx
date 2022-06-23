import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { TExpense } from "models/expense.model";
import { ExpenseType } from "constants/generic.enum";
import { useCallback, useContext, useEffect, useMemo } from "react";
import "./index.scss";

const CalculationPage = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);
  const fetchExpenses = useCallback(async () => {
    const expenses = await expensesHttp.getExpenses();

    setExpenses(expenses);
  }, [expensesHttp, setExpenses]);

  const totalAmount = expenses
    .map((expense: TExpense) => +expense.value)
    .reduce((acc, val) => acc + val, 0);

  const totalAmountOfSomething = (query: string) => {
    return expenses
      .filter((item: any) => item.type === `${query}`)
      .map((expense: TExpense) => +expense.value)
      .reduce((acc, val) => acc + val, 0);
  };

  const totalAmountByType = Object.keys(ExpenseType).map((key, i) => (
    <section key={i}>
      <h2>{key}</h2>
      <p>{totalAmountOfSomething(key)} kn</p>
    </section>
  ));

  console.log(totalAmountByType);

  useEffect(() => {
    if (expenses.length === 0) {
      fetchExpenses();
    }
  }, [fetchExpenses, expenses.length]);

  return (
    <article className="totals">
      <section className="totals__total">
        <h2>Total Amount</h2>
        <p>{totalAmount} kn</p>
      </section>
      <section className="totals__types">{totalAmountByType}</section>
    </article>
  );
};

export default CalculationPage;
