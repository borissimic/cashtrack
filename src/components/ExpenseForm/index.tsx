import { faCalendar, faDollar } from "@fortawesome/free-solid-svg-icons";
import Form from "components/Form";
import InputField from "components/InputField";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { validators } from "utils/generic.util";

import "./index.scss";

const ExpenseForm = ({ className }: Props) => {
  const { setExpenses } = useContext(ExpensesContext);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);
  const fetchExpenses = useCallback(async () => {
    const expenses = await expensesHttp.getExpenses();

    setExpenses(expenses);
  }, [expensesHttp, setExpenses]);

  enum ExpenseType {
    FOOD = "Hrana",
    UTILITES = "Režije",
    TRANSPORT = "Prijevoz",
    CLOTHING = "Odjeca",
    OTHER = "Ostalo",
  }

  const submitHandler = async (data: any) => {
    await expensesHttp.createExpense(data);
    setExpenses(await expensesHttp.getExpenses());
  };

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);
  return (
    <Form onSubmit={submitHandler} className="expense-form">
      <h3 className="expense-form__title">Add new Expense</h3>
      <InputField
        label="Expense type"
        formControl={[
          "type",
          validators({
            required: true,
          }),
        ]}
      >
        <select className="expense-form__select">
          <option hidden>Select Expense Type</option>
          {Object.keys(ExpenseType).map((key) => (
            <option key={key} value={key}>
              {ExpenseType[key as keyof typeof ExpenseType]}
            </option>
          ))}
        </select>
      </InputField>
      <InputField
        label="Expense description"
        formControl={[
          "description",
          validators({
            required: true,
          }),
        ]}
      >
        <textarea className="expense-form__textarea"></textarea>
      </InputField>

      <InputField
        label="Expense value"
        icon={faDollar}
        formControl={[
          "value",
          validators({
            required: true,
          }),
        ]}
      >
        <input type="text" />
      </InputField>
      <InputField
        label="Expense date"
        icon={faCalendar}
        formControl={[
          "date",
          validators({
            required: true,
          }),
        ]}
      >
        <input type="date" defaultValue={""} />
      </InputField>

      <button>Submit</button>
    </Form>
  );
};

type Props = {
  className?: string;
};

export default ExpenseForm;
